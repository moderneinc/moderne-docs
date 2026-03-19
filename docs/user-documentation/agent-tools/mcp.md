---
sidebar_label: Moderne MCP
description: Give AI coding agents tools for semantic code search, navigation, and refactoring with the Moderne MCP server.
---

# Moderne MCP server

The Moderne CLI includes a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that gives AI coding agents tools for semantic code search, navigation, and refactoring. While [skills](./skills.md) teach agents *how* to work with recipes, the MCP server gives agents direct access to these tools, backed by OpenRewrite's [Lossless Semantic Tree (LST)](../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md) and [Moderne Trigrep](./trigrep.md).

## Why use the Moderne MCP server

AI coding agents are limited to the tools bundled with them (typically just text search and file reading). These tools work at the text level and miss the **semantic** structure of code.

The Moderne MCP server gives agents:

* **Indexed code search** that returns results in milliseconds regardless of repository size
* **Semantic navigation** that understands types, methods, annotations, and inheritance hierarchies
* **Codebase-wide refactoring** that updates all references atomically, like an IDE rename
* **Recipe execution** that runs OpenRewrite recipes directly from the agent conversation
* **Structural matching** that finds code patterns spanning multiple tokens or lines

Because these tools are backed by a semantic model of your code, they understand it the way a compiler does - rather than text like a traditional tool would.

## How it works

When the MCP server starts, it builds two things in the background:

1. **[Moderne Trigrep](./trigrep.md)**: a pre-computed trigram index that enables sub-second text search across the entire repository. This powers the `search` and `structural_search` tools.
2. **[LSTs (Lossless Semantic Trees)](../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md)**: a type-attributed tree representation of your source code that enables semantic tools like `find_types`, `find_methods`, `change_type`, and recipe execution.

Tools become available progressively as each build completes. You can check their progress with the `build_status` and `lst_status` tools.

## Available tools

The MCP server exposes the following tools:

### Indexed search

| Tool                | Description                                                                                                                                                                                                                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `search`            | Searches the codebase using a pre-built trigram index. Faster than grep/ripgrep because it uses indexed search, returning results in milliseconds regardless of repo size. Supports plain text, regex, and filters (`lang:`, `file:`).                                                           |
| `structural_search` | Searches using [Comby](https://comby.dev/) structural matching over the trigram index. Use this when you need to find code patterns that span multiple tokens or lines, such as method signatures, call patterns, or control flow. Uses `:[hole]` placeholders that respect balanced delimiters. |

### Semantic search

| Tool                   | Description                                                                                                                                                                                  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `find_types`           | Finds all references to a type across the codebase, including imports, field types, method parameters, return types, type casts, instanceof checks, annotations, and generic type arguments. |
| `find_methods`         | Finds all invocations of a method across the codebase. Uses AspectJ-style method patterns to match method calls.                                                                             |
| `find_annotations`     | Finds all usages of an annotation across the codebase, including on classes, methods, fields, parameters, and more.                                                                          |
| `find_implementations` | Finds all classes that implement an interface or extend a class, including indirect implementations through the entire type hierarchy.                                                       |
| `symbols_overview`     | Lists all symbols (classes, interfaces, enums, methods, constructors, fields) in a specific file or across the entire codebase.                                                              |

### Editing code

| Tool                 | Description                                                                                                                                                                                                                                                             |
|----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `change_type`        | Renames or moves a type across the entire codebase. Updates all imports, references, declarations, and usages, equivalent to an IDE's "rename type" refactoring applied across the whole repository.                                                                    |
| `change_method_name` | Renames a method across the entire codebase. Updates all call sites, declarations, and references, equivalent to an IDE's "rename method" refactoring applied across the whole repository.                                                                              |
| `pattern_replace`    | Compiles and runs a [Refaster template](https://docs.openrewrite.org/concepts-and-explanations/recipes#refaster-template-recipes) to make mechanical code changes across the entire codebase. Provide a Java class with `@BeforeTemplate` and `@AfterTemplate` methods. |

### Working with recipes

| Tool              | Description                                                                                                                              |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `search_recipes`  | Searches available OpenRewrite recipes by natural-language query. Returns a paginated list of matching recipe names ranked by relevance. |
| `learn_recipe`    | Retrieves full details for a specific recipe, including its description, configurable options, and data table schemas.                   |
| `run_recipe`      | Runs an OpenRewrite recipe on the repository. Recipes perform automated code analysis, refactoring, migration, and formatting.           |
| `query_datatable` | Executes SQL against data table results from a recipe run. Lazily loads results into DuckDB for querying.                                |

### Checking status

| Tool           | Description                                                                                                                         |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `build_info`   | Reports the build tool, compile command, and test command for the repository. Detects Gradle, Maven, Bazel, npm, and .NET projects. |
| `build_status` | Reports the status of the trigram search index. Shows whether the search tools will return useful results.                          |
| `lst_status`   | Reports the status of the LST build. Shows build state, source file count, and pending incremental changes.                         |

<figure>
  ![The Moderne Agent Tools browser showing all available MCP tools in a dropdown list](./assets/mcp-tools.png)
  <figcaption>_The tool browser showing all available MCP tools_</figcaption>
</figure>

## Installation

The following command installs both skills and the MCP server configuration for all detected coding agents:

```bash
mod config agent-tools install
```

This registers the MCP server with each detected agent so it starts automatically when the agent opens your project. The CLI handles the configuration details for each agent. For example, it runs `claude mcp add` for Claude Code and writes to `~/.cursor/mcp.json` for Cursor.

To remove the MCP server configuration along with skills:

```bash
mod config agent-tools uninstall
```

### Supported agents

| Agent              | MCP support | Skills support | MCP configuration                     |
|--------------------|-------------|----------------|---------------------------------------|
| Claude Code        | Yes         | Yes            | Registered via `claude mcp add`       |
| Windsurf           | Yes         | Yes            | `~/.codeium/windsurf/mcp_config.json` |
| Cursor             | Yes         | Yes            | `~/.cursor/mcp.json`                  |
| GitHub Copilot     | Yes         | Yes            | `.vscode/mcp.json`                    |
| GitHub Copilot CLI | Yes         | No             | `~/.copilot/mcp-config.json`          |
| Sourcegraph Amp    | Yes         | Yes            | Registered via `amp mcp add`          |
| OpenAI Codex       | Yes         | Yes            | Registered via `codex mcp add`        |

## Tool browser

The Moderne CLI includes an optional tool browser, a browser-based dashboard for monitoring LST builds and exploring available tools. To enable it:

```bash
mod config features agent-tools tray --enabled
```

Once enabled, the MCP server launches a system tray icon when an agent starts. Click it to see the status of your projects, then click **Tool Browser...** to open the dashboard.

<figure>
  ![The Moderne system tray icon showing project build status](./assets/mcp-tray-icon.png)
  <figcaption>_The system tray icon showing project status_</figcaption>
</figure>

The dashboard shows:

* **Project cards** with build status, file counts, and tool call metrics
* **Build logs** with parse timing details
* **Tool execution** for testing tools directly from the browser

<figure>
  ![The Moderne Agent Tools dashboard showing project cards with build status, file counts, and tool call metrics](./assets/mcp-dashboard.png)
  <figcaption>_The tool browser dashboard with project status cards_</figcaption>
</figure>

<figure>
  ![The Moderne Agent Tools dashboard showing build logs and parse time scatter chart](./assets/mcp-dashboard-detail.png)
  <figcaption>_Build logs and parse timing details for a selected project_</figcaption>
</figure>

## Skills vs MCP

Skills and the MCP server are complementary:

|                         | Skills                                                    | MCP server                                              |
|-------------------------|-----------------------------------------------------------|---------------------------------------------------------|
| **What they provide**   | Workflow guidance and domain knowledge                    | Semantic code search, navigation, and refactoring tools |
| **How agents use them** | Read as instructions/prompts                              | Call as tools during conversation                       |
| **When they help**      | Creating recipes, analyzing impact, building working sets | Searching, navigating, and refactoring code             |
| **Requires LST build**  | No                                                        | Yes (for semantic tools)                                |

For the best experience, install both. Skills teach agents the recipe development workflow, while the MCP server gives them the tools to execute that workflow effectively.

## Next steps

* [Install skills for AI coding agents](./skills.md)
* [Learn about Moderne Prethink](./prethink.md) for giving agents pre-resolved codebase context
