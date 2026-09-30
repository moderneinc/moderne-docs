---
sidebar_label: Skills for AI coding agents
description: How to install and use the Moderne skills that teach AI coding agents to write recipes and read Prethink context.
---

# Using Moderne skills with AI coding agents

The Moderne CLI can install agent tools (skills and MCP servers) that teach AI coding agents how to work with OpenRewrite recipes. With a single command, you can install these tools for all detected agents.

Two skills work without an MCP server:

* **create-recipe** carries recipe-authoring knowledge and drives the `mod` CLI directly.
* **prethink** points the agent at [Prethink context](./prethink.md) files already generated for the repository.

The CLI installs eight more skills that route the agent to a [local MCP server](./mcp/overview.md) tool. Those are experimental and documented with that server, in [tool-routing skills](./mcp/tool-routing-skills.md).

:::warning[Experimental]
The [tool-routing skills](./mcp/tool-routing-skills.md) and the [local MCP server](./mcp/overview.md) they call are experimental, so treat them as something to try rather than to standardize on. Agents don't reach for those tools consistently. This is because several of them overlap with the search and file reading an agent already has - and agents change how they select tools from release to release.
:::

:::note
Skills operate on one repository. To work across a whole organization, use [agent chat](./agent-chat.md) locally or the [remote MCP server](./mcp/remote-server.md) on the Moderne Platform.
:::

## Why use Moderne skills

Building OpenRewrite recipes requires understanding [visitor patterns](https://docs.openrewrite.org/concepts-and-explanations/visitors), [LST structures](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees), and testing idioms that AI coding agents don't know out of the box. Agents also don't know when a Moderne tool will do a job better than `grep` and a hand edit.

Moderne skills teach agents about:

* **Recipe creation** - choosing the right type of recipe ([Declarative](https://docs.openrewrite.org/concepts-and-explanations/recipes#declarative-recipes), [Refaster](https://docs.openrewrite.org/concepts-and-explanations/recipes#refaster-template-recipes), or [Imperative](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes)) and following [OpenRewrite conventions](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices)
* **Codebase context** - pre-resolved architecture, dependency, and risk information about a repository before the agent starts editing

The skills are bundled with the CLI and stay current when you update.

## Supported agents

The CLI auto-detects installed coding agents and installs skills to each one:

| Agent           | Detection                                        | Install location                                                 |
|-----------------|--------------------------------------------------|------------------------------------------------------------------|
| Claude Code     | `~/.claude/` (or `CLAUDE_CONFIG_DIR`)            | `~/.claude/marketplaces/moderne/moderne/skills/<skill>/SKILL.md` |
| Windsurf        | `~/.codeium/`                                    | `~/.codeium/windsurf/skills/<skill>/SKILL.md`                    |
| Sourcegraph Amp | `~/.config/agents/`                              | `~/.config/agents/skills/<skill>/SKILL.md`                       |
| OpenAI Codex    | `~/.agents/`                                     | `~/.agents/skills/<skill>/SKILL.md`                              |
| OpenCode        | `~/.config/opencode/`                            | `~/.config/opencode/skills/<skill>/SKILL.md`                     |
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

:::note
This also registers the experimental [local MCP server](./mcp/overview.md). To install the skills without it, use [skills-only installation](#skills-only-installation).
:::

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

To remove agent tools for a single coding agent, use `uninstall` in the same way:

```bash
mod config agent-tools claude uninstall
```

The available per-agent subcommands are: `claude`, `windsurf`, `cursor`, `copilot`, `amp`, `codex`, `opencode`, and `kiro`.

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
This installs every skill, including the experimental [tool-routing skills](./mcp/tool-routing-skills.md), which do nothing without the MCP server they call. `create-recipe` works on its own, and `prethink` works as long as you have generated [Prethink context](./prethink.md).
:::

## Invoking skills

Skills trigger automatically. Describe the task in your own words and the agent loads whichever skill matches — there are no commands to memorize:

```
Write a recipe that replaces all calls to Logger.info() with Logger.debug()
```

```
What does this repository look like, and where is it riskiest to change?
```

In Claude Code you can also invoke a skill explicitly with the `/moderne:` prefix, which is useful when you want to force a particular workflow:

```
/moderne:create-recipe

Create a recipe that migrates deprecated API calls.
```

## Available skills

### create-recipe

:::note
`create-recipe` requires Moderne CLI 4.5.3 or later. On earlier versions, `mod config agent-tools install` installs the other nine skills.
:::

Use this skill when you want to create a new OpenRewrite recipe or modify an existing one.

**When not to use**: general Java programming unrelated to OpenRewrite, or running an existing recipe across a working set (use `mod build` and `mod run`).

This skill helps you with:

* **Recipe type selection** - Choosing between declarative YAML (for composing existing recipes), Refaster templates (for simple expression replacements), or imperative Java recipes (for complex logic)
* **Critical patterns** - LST immutability, visitor traversal, type matching with `MethodMatcher`, and proper import handling
* **Testing** - Writing tests with the `RewriteTest` framework, including before/after assertions and no-change cases
* **Data tables** - Emitting structured data for analysis
* **Validating against real code** - Publishing the recipe, installing it, and running it across a working set with the CLI

### prethink

Use this skill when you want the agent to start from what Moderne already knows about the repository: its architecture, the dependencies actually in use, code-quality and complexity scores, and a ranked list of high-risk untested methods.

The skill itself only tells the agent to read `.moderne/context/`, so it does nothing until that context exists. Generate it by running the `UpdatePrethinkContextStarter` recipe, as described in [Moderne Prethink](./prethink.md).

## Keeping skills up to date

The skills are bundled with the CLI. When you upgrade the CLI, run the install command again to sync:

```bash
mod config agent-tools install
```

This ensures the agent tools stay current as CLI capabilities evolve.

## Next steps

{/* Hidden until ready to share publicly: * [Try the hands-on agent tools workshop](../../hands-on-learning/agent-tools/workshop-overview.md) to install skills and exercise them end-to-end */}
* [Start an agent on a whole organization](./agent-chat.md) with `mod <agent> chat`
* [Learn about Moderne Prethink](./prethink.md) for giving agents pre-resolved codebase context
