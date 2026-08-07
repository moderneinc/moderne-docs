---
sidebar_label: Skills for AI coding agents
description: How to use Moderne skills with AI coding agents for recipe development, code search, and large-scale refactoring.
---

import ReactPlayer from '@site/src/components/VideoPlayer';

# Using Moderne skills with AI coding agents

The Moderne CLI can install agent tools (skills and MCP servers) that teach AI coding agents how to work with OpenRewrite recipes. With a single command, you can install these tools for all detected agents.

Skills differ in what they need to do their job:

* Most explain how and when to reach for a [Moderne MCP server](./mcp/overview.md) tool, so they need that server registered.
* A few carry workflow knowledge that stands on its own and drive the `mod` CLI directly, so they work whether or not you use the MCP server.

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=FuOaGA7JYTc' controls="true" />

## Why use Moderne skills

Building OpenRewrite recipes requires understanding [visitor patterns](https://docs.openrewrite.org/concepts-and-explanations/visitors), [LST structures](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees), and testing idioms that AI coding agents don't know out of the box. Agents also don't know when a Moderne tool will do a job better than `grep` and a hand edit.

Moderne skills teach agents about:

* **Recipe creation** - choosing the right type of recipe ([Declarative](https://docs.openrewrite.org/concepts-and-explanations/recipes#declarative-recipes), [Refaster](https://docs.openrewrite.org/concepts-and-explanations/recipes#refaster-template-recipes), or [Imperative](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes)) and following [OpenRewrite conventions](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices)
* **Repository discovery** - assembling a working set of real repositories to test against
* **Tool routing** - reaching for a recipe or a type-aware search instead of text search when a change spans many files

The skills are bundled with the CLI and stay current when you update.

## Supported agents

The CLI auto-detects installed coding agents and installs skills to each one:

| Agent           | Detection                                        | Install location                                                 |
|-----------------|--------------------------------------------------|------------------------------------------------------------------|
| Claude Code     | `~/.claude/` (or `CLAUDE_CONFIG_DIR`)            | `~/.claude/marketplaces/moderne/moderne/skills/<skill>/SKILL.md` |
| Windsurf        | `~/.codeium/`                                    | `~/.codeium/windsurf/skills/<skill>/SKILL.md`                    |
| Sourcegraph Amp | `~/.config/agents/`                              | `~/.config/agents/skills/<skill>/SKILL.md`                       |
| OpenAI Codex    | `~/.agents/`                                     | `~/.agents/skills/<skill>/SKILL.md`                              |
| opencode        | `~/.config/opencode/`                            | `~/.config/opencode/skills/<skill>/SKILL.md`                     |
| Cursor          | `~/.cursor/`                                     | `.cursor/rules/moderne-<skill>.mdc`                              |
| GitHub Copilot  | `.github/` in current directory or `~/.copilot/` | `.github/instructions/moderne-<skill>.instructions.md`           |

:::note
Cursor and GitHub Copilot skills are installed per-project (into `.cursor/rules/` and `.github/instructions/` respectively). Unlike the other agents which install skills globally, these require running the install command from each project root where you want the skills available.
:::

In addition to installing skills, the command also registers a Moderne MCP server for each agent, providing tools for semantic code search, navigation, and refactoring.

## Installation

The following command scans for installed coding agents and installs agent tools (skills and MCP servers) to each one. If no agents are detected, it displays a message listing the supported agents and their detection paths.

```bash
mod config agent-tools install
```

To remove all installed agent tools:

```bash
mod config agent-tools uninstall
```

### Per-agent installation

You can install agent tools for a single coding agent instead of all detected agents:

```bash
mod config agent-tools claude install
mod config agent-tools cursor install
mod config agent-tools copilot install
```

Each per-agent command installs both skills and the MCP server for that agent only. If the agent is not detected on your system, the command displays a message and exits without making changes.

The available per-agent subcommands are: `claude`, `windsurf`, `cursor`, `copilot`, `amp`, `codex`, and `opencode`.

### Skills-only installation

To install only skills (without the MCP server) for all detected agents:

```bash
mod config agent-tools skills install
```

To remove only skills:

```bash
mod config agent-tools skills uninstall
```

:::note
This installs every skill, including the ones that call the Moderne MCP server and do nothing without it. It is most useful for refreshing skills when the MCP server is already registered. If you have not set up the MCP server, only `create-recipe`, `create-organization`, and `prethink` will function.
:::

## Invoking skills

Skills trigger automatically. Describe the task in your own words and the agent loads whichever skill matches — there are no commands to memorize:

```
Write a recipe that replaces all calls to Logger.info() with Logger.debug()
```

```
Find every repository in my GitHub org that uses Spring Boot and set up a working set
```

In Claude Code you can also invoke a skill explicitly with the `/moderne:` prefix, which is useful when you want to force a particular workflow:

```
/moderne:create-recipe

Create a recipe that migrates deprecated API calls.
```

## Available skills

### Skills that work with the CLI alone

These need no MCP server.

| Skill                   | What it covers                                                                                             |
|-------------------------|------------------------------------------------------------------------------------------------------------|
| **create-recipe**       | Writing, fixing, and debugging recipes — declarative YAML, Refaster templates, Java visitors, scanning recipes, and `RewriteTest` coverage |
| **create-organization** | Finding repositories across GitHub/GitLab/Bitbucket and assembling them into an organization or `repos.csv` |
| **prethink**            | Pre-resolved codebase context — architecture, dependencies, and risk-ranked untested methods                |

### Skills that use the MCP server

Each of these explains when and how to reach for one of the [Moderne MCP server tools](./mcp/overview.md#available-tools), and requires the [MCP server](./mcp/overview.md) to be registered.

:::note
These skills operate on the repository the agent is currently working in — they are single-repo. To run a recipe across a working set of many repositories, use `mod run` from the CLI.
:::

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

### create-recipe

Use this skill when you want to create a new OpenRewrite recipe or modify an existing one.

**When not to use**: general Java programming unrelated to OpenRewrite, or running an existing recipe across a working set (use `mod build` and `mod run`).

This skill helps you with:

* **Recipe type selection** - Choosing between declarative YAML (for composing existing recipes), Refaster templates (for simple expression replacements), or imperative Java recipes (for complex logic)
* **Critical patterns** - LST immutability, visitor traversal, type matching with `MethodMatcher`, and proper import handling
* **Testing** - Writing tests with the `RewriteTest` framework, including before/after assertions and no-change cases
* **Data tables** - Emitting structured data for analysis
* **Validating against real code** - Publishing the recipe, installing it, and running it across a working set with the CLI

### create-organization

Use this skill when you want to create a custom set of repositories to run recipes against.

This skill helps you:

* **Find repositories** by language, technology (Spring Boot, JPA, Kafka, etc.), or by listing all accessible repos
* **Search across platforms** - GitHub, GitLab, Bitbucket, and other sources like Sourcegraph and Libraries.io
* **Generate repos.csv** files with proper format and organizational hierarchy
* **Sync repositories** using `mod git sync csv`
* **Organize repositories** by team, technology, or business domain for focused testing

## Workflow example

The skills work together to support the full recipe lifecycle:

1. **Create a working set** with `create-organization` to find Spring Boot repositories
2. **Write a recipe** with `create-recipe` to migrate a deprecated API
3. **Test iteratively** by publishing the recipe and running it with `mod build` and `mod run` until it matches the files you expect
4. **Apply it at scale** by running it across the whole working set with `mod run`, then dig into the results with `query-datatable`

## Keeping skills up to date

The skills are bundled with the CLI. When you upgrade the CLI, run the install command again to sync:

```bash
mod config agent-tools install
```

This ensures the agent tools stay current as CLI capabilities evolve.

## Next steps

{/* Hidden until ready to share publicly: * [Try the hands-on agent tools workshop](../../hands-on-learning/agent-tools/workshop-overview.md) to install skills and exercise them end-to-end */}
* [Set up the Moderne MCP server](./mcp/overview.md) to give agents tools for semantic code search, navigation, and refactoring
* [Learn about Moderne Prethink](./prethink.md) for giving agents pre-resolved codebase context
