[RBXScriptConnection]: https://create.roblox.com/docs/reference/engine/datatypes/RBXScriptConnection
[number]: https://create.roblox.com/docs/scripting/luau/numbers
[boolean]: https://create.roblox.com/docs/scripting/luau/booleans
[table]: https://create.roblox.com/docs/scripting/luau/tables
[string]: https://create.roblox.com/docs/scripting/luau/strings
[Instance]: https://create.roblox.com/docs/reference/engine/classes/Instance

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

```lua
local myPart: Part = Utility.Create("Part", {
    Size = Vector3.new(1, 1, 1),
    Color = Color3.fromRGB(250, 0, 0),
    Anchored = true,
    Parent = workspace
})

myPart:Destroy()
```

#### DisconnectTable
`DisconnectTable` is used to disconnect an array filled the [RBXScriptConnection] (or a connection from signal classes) object. This method is safe as in it will not disconnect a connection that is already disconnected.

| Parameter | Type | Required |
| - | - | - |
| array | { [RBXScriptConnection] } | ✓ |

```lua
Utility.DisconnectTable(array)
```

#### GetChildrenOfClass
`GetChildrenOfClass` is used to create and return an array of all the parent's children that match a specific class. This method uses [`Instance:IsA(className: string)`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsA), therefore you can provide it with an abstract class.

| Parameter | Type | Required |
| - | - | - |
| parent | [Instance] | ✓ |
| className | [string] | ✓ |

```lua
local children: { Frame } = Utility.GetChildrenOfClass(screenGui, "Frame")
```

#### DeepCopyTable
`DeepCopyTable` is used to create an exact deep copy of a [table] including its values.

| Parameter | Type | Required |
| - | - | - |
| tableToCopy | [table] | ✓ |

```lua
local myNewTableCopy: { any } = Utility.DeepCopyTable(tableToCopy)
```

####