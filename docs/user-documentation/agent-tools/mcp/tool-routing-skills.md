---
sidebar_label: Tool-routing skills
description: The experimental skills that tell an AI coding agent when to reach for a local Moderne MCP server tool.
---

# Tool-routing skills

:::warning[Experimental]
These skills are experimental, like the [local MCP server](./overview.md) they depend on. Each one tells the agent when to reach for one of the [server's tools](./overview.md#available-tools), so none of them does anything unless that server is registered. They also work on one repository at a time. To run a recipe across many repositories, use [agent chat](../agent-chat.md) or `mod run` from the CLI.
:::

`mod config agent-tools install` installs these skills alongside the two the CLI supports on their own, [create-recipe and prethink](../skills.md). Like every Moderne skill, they trigger automatically: you describe the task, and the agent loads whichever skill matches.

| Skill               | What it covers                                                                              | MCP tool                                    |
|---------------------|----------------------------------------------------------------------------------------------|---------------------------------------------|
| **edit-code**       | Applying a recipe across many files in the current repository (migrate, upgrade, rename, replace, find-and-fix) | `edit_code`                |
| **analyze-code**    | Read-only impact analysis across the current repository — usages, callers, references, annotations | `analyze_code`                         |
| **search-code**     | Structural and symbol-aware search, including Comby patterns and trigram queries              | `trigrep_search`, `trigrep_structural_search`, `grep` |
| **find-symbols**    | Type-aware lookups that resolve through the LST type system                                   | `find_types`, `find_methods`, `find_annotations`, `find_implementations`, `symbols_overview` |
| **change-symbols**  | Renaming a method or moving a type atomically, including callers and imports                  | `change_method_name`, `change_type`         |
| **pattern-replace** | One-shot structural rewrites when no marketplace recipe matches                               | `pattern_replace`                           |
| **inspect-status**  | Confirming the LST, trigram index, or build tool is ready                                     | `lst_status`, `build_status`, `build_info`  |
| **query-datatable** | SQL against data tables produced by a recipe run                                              | `query_datatable`                           |

## Next steps

* [Set up the local MCP server](./overview.md) that these skills route to
* [Read about create-recipe and prethink](../skills.md), the skills that work without an MCP server
