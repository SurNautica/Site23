[ScreenGui]: https://create.roblox.com/docs/reference/engine/classes/ScreenGui
[Frame]: https://create.roblox.com/docs/reference/engine/classes/Frame
[number]: https://create.roblox.com/docs/scripting/luau/numbers
[boolean]: https://create.roblox.com/docs/scripting/luau/booleans
[table]: https://create.roblox.com/docs/scripting/luau/tables
[string]: https://create.roblox.com/docs/scripting/luau/strings

InterfaceController
===================
This service is required for using client interface such as a [ScreenGui]. It can be accessed by requiring its [ModuleScript](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) 'InterfaceController' found in `ClientSource/Scripts`.

!!! danger
    When creating and/or loading interface, the [ScreenGui] name **must** be unique. Duplicate names will not load correctly/may be overwritten.

### Methods
#### LoadInterface
`LoadInterface` is used to load a [ScreenGui] from `ReplicatedStorage/Assets/Client/Interface/Objects`. This is the primary way to load interface on the client.

!!! warning
    The interface must be located in `ReplicatedStorage/Assets/Client/Interface/Objects`, otherwise this method will error. *While play-testing in Roblox Studio, if the [ScreenGui] is located in [StarterGui](https://create.roblox.com/docs/reference/engine/classes/StarterGui), it will be given without error.*

| Parameter | Type | Required |
| - | - | - |
| guiName | [string] | ✓ |
| shouldSetEnabled | [boolean] |  |

| Return | Type |
| - | - |
| sreenGui | [ScreenGui] |

??? example "Usage"

    ```lua
    local myScreenGui: ScreenGui = InterfaceController.LoadInterface("MyScreenGui", true)
    ```

#### WaitForInterface
{yields}

`WaitForInterface` is similar to `LoadInterface` except it will yield the current thread until the interface is loaded elsewhere. **This method should also be used to access already loaded interface.**

!!! tip "Infinite Yield"
    If the interface is not loaded elsewhere, `WaitForInterface` will yield infinitely.

| Parameter | Type | Required |
| - | - | - |
| guiName | [string] | ✓ |

| Return | Type |
| - | - |
| sreenGui | [ScreenGui] |

??? example "Usage"

    === "Script A"

        ```lua
        local myScreenGui: ScreenGui = InterfaceController.LoadInterface("MyScreenGui", true)
        ```

    === "Script B"

        ```lua
        local myScreenGui: ScreenGui = InterfaceController.WaitForInterface("MyScreenGui")
        ```

### Classes
#### Radial
`Radial` is used to create a radial progress bar. Template found in `ReplicatedStorage`.

| Parameter | Type | Required |
| - | - | - |
| radialFrame | [Frame] | ✓ |

??? example "Usage"

    ```lua
    local myNewRadial = InterfaceController.Radial(frame)

    -- THIS HAS A CHANGE PENDING, I KNOW Value.Value IS BAD
    myNewRadial.Value.Value = 0.5 -- 0-1

    myNewRadial:Destroy() -- sets the progress bar to 0 and disconnects all events
    ```

#### MakeKeyPressedIndicator
`MakeKeyPressedIndicator` is used to simulate a keyboard key press indicator. Template found in `ReplicatedStorage`.

| Parameter | Type | Required |
| - | - | - |
| keyFrame | [Frame] | ✓ |
| keyBinds | [Tuple](https://create.roblox.com/docs/luau/tuples) | ✓ |

??? example "Usage"

    ```lua
    local myNewKeyPress = InterfaceController.MakeKeypressedIndicator.makeIndicator(keyFrame, Enum.KeyCode.E, Enum.KeyCode.ButtonA)

    myNewKeyPress:Destroy() -- unpress and disconnect all events
    ```