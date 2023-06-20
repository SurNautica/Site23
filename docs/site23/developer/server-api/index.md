---
title: Site 23
---

[ModuleScript]: https://create.roblox.com/docs/reference/engine/classes/ModuleScript

Server API
==========

All server-side code should be within the `ServerScriptService/ServerSource/Scripts` directory, in order to run code, it must be inside a [ModuleScript] with an `Init` method. In almost all cases, [ModuleScript]s should be used.

!!! tip "Library Guarantees"
    The `shared` library and its static classes will always be ready before any [ModuleScript] code in source directories is run.

!!! example

    *While the `Init` method is what gets called when the script runs, services, variables, and other data should be defined outside of the `Init` method.*

    === "Example 1"

        ```lua
        local myScript = {}

        function myScript.Init()
            -- code to run
        end

        return myScript
        ```
    
    === "Example 2"

        ```lua
        return {Init = function()
            -- code to run
        end}
        ```