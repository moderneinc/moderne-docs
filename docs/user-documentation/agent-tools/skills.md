---
sidebar_label: Skills for AI coding agents
description: How to install and use the Moderne skills that teach AI coding agents to read Prethink context and use Moderne tools.
---

# Using Moderne skills with AI coding agents

The Moderne CLI can install agent tools (skills and MCP servers) that teach AI coding agents how to work with OpenRewrite recipes. With a single command, you can install these tools for all detected agents.

The **prethink** skill works without an MCP server. It points the agent at [Prethink context](./prethink.md) files already generated for the repository.

The CLI installs eight more skills that route the agent to a [local MCP server](./mcp/overview.md) tool. Those are experimental and documented with that server, in [tool-routing skills](./mcp/tool-routing-skills.md).

:::warning[Experimental]
The [tool-routing skills](./mcp/tool-routing-skills.md) and the [local MCP server](./mcp/overview.md) they call are experimental, so treat them as something to try rather than to standardize on. Agents don't reach for those tools consistently. This is because several of them overlap with the search and file reading an agent already has - and agents change how they select tools from release to release.
:::

:::note
Skills operate on one repository. To work across a whole organization, use [agent chat](./agent-chat.md) locally or the [remote MCP server](./mcp/remote-server.md) on the Moderne Platform.
:::

## Why use Moderne skills

An AI coding agent starts each session without knowing your repository's architecture, its dependencies, or where it is risky to change. Agents also don't know when a Moderne tool will do a job better than `grep` and a hand edit.

Moderne skills teach agents about:

* **Codebase context** - pre-resolved architecture, dependency, and risk information about a repository before the agent starts editing
* **Moderne tools** - when to reach for a [local MCP server](./mcp/overview.md) tool to search, navigate, or change code

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
This installs every skill, including the experimental [tool-routing skills](./mcp/tool-routing-skills.md), which do nothing without the MCP server they call. `prethink` works as long as you have generated [Prethink context](./prethink.md).
:::

## Invoking skills

Skills trigger automatically. Describe the task in your own words and the agent loads whichever skill matches — there are no commands to memorize:

```
What does this repository look like, and where is it riskiest to change?
```

In Claude Code you can also invoke a skill explicitly with the `/moderne:` prefix, which is useful when you want to force a particular workflow:

```
/moderne:prethink

Which methods in this repository are high-risk and untested?
```

## Available skills

:::note
The `create-recipe` skill was removed in Moderne CLI 4.13.0. On that version or later, the install command will also remove the copy an earlier version installed. To fix or write a recipe with an agent, use [agent chat](./agent-chat.md) instead.
:::

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

* [Start an agent on a whole organization](./agent-chat.md) with `mod <agent> chat`
* [Learn about Moderne Prethink](./prethink.md) for giving agents pre-resolved codebase context
