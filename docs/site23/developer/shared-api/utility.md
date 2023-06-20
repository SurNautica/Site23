[RBXScriptConnection]: https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection
[number]: https://create.roblox.com/docs/scripting/luau/numbers
[boolean]: https://create.roblox.com/docs/scripting/luau/booleans
[table]: https://create.roblox.com/docs/scripting/luau/tables
[string]: https://create.roblox.com/docs/scripting/luau/strings
[Instance]: https://create.roblox.com/docs/reference/engine/classes/Instance
[NumberRangeClass]: site23/developer/numberrange.md
[RBXScriptSignal]: https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptSignal 

The global utility static class is accessed on the server or client through the [`shared`](https://create.roblox.com/docs/reference/engine/globals/RobloxGlobals#shared) library; for example:
```lua
local GlobalUtility = shared.Utility
GlobalUtility.myMethod()
```

### Methods
#### Create
`Create` is a method used to create any type of [Instance], while optionally being able to provide a [table] of properties to set.

| Parameter | Type | Required |
| - | - | - |
| className | [string] | ✓ |
| properties | { [string]: any } |  |

| Return | Type |
| - | - |
| Instance | [Instance] |

??? example "Usage"

    ```lua
    local myPart: Part = Utility.Create("Part", {
        Size = Vector3.new(1, 1, 1),
        Color = Color3.fromRGB(250, 0, 0),
        Anchored = true,
        Parent = workspace
    })

    myPart:Destroy()
    ```

#### GetChildrenOfClass
`GetChildrenOfClass` is used to create and return an array of all the parent's children that match a specific class. This method uses [`Instance:IsA(className: string)`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA), therefore you can provide it with an abstract class.

| Parameter | Type | Required |
| - | - | - |
| parent | [Instance] | ✓ |
| className | [string] | ✓ |

| Return | Type |
| - | - |
| array | { [Instance] } |

??? example "Usage"

    ```lua
    local children: { Frame } = Utility.GetChildrenOfClass(screenGui, "Frame")
    ```

#### DisconnectTable
`DisconnectTable` is used to disconnect an array filled the [RBXScriptConnection] (or a connection from signal classes) object. This method is safe as in it will not disconnect a connection that is already disconnected.

| Parameter | Type | Required |
| - | - | - |
| array | { [RBXScriptConnection] } | ✓ |

??? example "Usage"

    ```lua
    Utility.DisconnectTable(array)
    ```

#### DeepCopyTable
`DeepCopyTable` is used to create an exact deep copy of a [table] including its values.

| Parameter | Type | Required |
| - | - | - |
| tableToCopy | [table] | ✓ |

| Return | Type |
| - | - |
| tableClone | [table] |

??? example "Usage"

    ```lua
    local myNewTableCopy: { any } = Utility.DeepCopyTable(tableToCopy)
    ```

#### ReconcileTable
`ReconcileTable` is used to ensure a [table] is in a way "up-to-date" with a template [table]. Often times used with data saving to allow for the implemention of new data values inside an existing data structure.

| Parameter | Type | Required |
| - | - | - |
| tableToUpdate | [table] | ✓ |
| templateTable | [table] | ✓ |

??? example "Usage"

    ```lua
    local template = {
        money = 10,
        food = 5,
        name = "jane doe"
    }

    local playerDataTable = {
        money = 32,
        name = "john doe"
    }

    Utility.ReconcileTable(playerDataTable, template)

    -- playerDataTable -> {
    --     money = 32,
    --     food = 5,
    --     name = "john doe"
    -- }
    ```

#### CountDictionary
`CountDictionary` is used to get the number of items inside a [table] that is not an array.

| Parameter | Type | Required |
| - | - | - |
| table | [table] | ✓ |

| Return | Type |
| - | - |
| count | [number] |

#### IterThroughPages
`IterThroughPages` is used within a `for` loop to go through each item in each page.

| Parameter | Type | Required |
| - | - | - |
| pages | [Pages](https://create.roblox.com/docs/reference/engine/classes/Pages) | ✓ |

??? example "Usage"

    ```lua
    for item: any, pageNumber: number in Utility.IterThroughPages(pages) do
        -- code
    end
    ```

#### EventTimeout
{experimental}

{yields}

`EventTimeout` is used to yield code until the provided [RBXScriptSignal] is called while allowing the developer to provide a timeout [number]. `EventTimeout` can also be provided with expected parameters, when these are provided the event will ignore all triggers unless the parameters match the expected parameters. This is an experimental method that really shouldn't be used unless absolutely necessary.

| Parameter | Type | Required |
| - | - | - |
| event | [RBXScriptSignal] | ✓ |
| time | [number] | ✓ |
| expectedParams | [table] |  |
| expectedParamCount | [number] | if expectedParams |

??? example "Usage"

    ```lua
    -- start
    Utility.EventTimeout(workspace.PersistentLoaded, 10, {Players.LocalPlayer}, 1)
    -- content streaming has either loaded all persistent models for the local player or 10 seconds has passed
    ```

### Classes
#### Math

#### Enum

#### NumberRange

#### RateLimiter