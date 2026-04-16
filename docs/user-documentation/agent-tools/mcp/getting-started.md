---
sidebar_label: Getting started
description: Install the Moderne MCP server for Claude Code, Cursor, Windsurf, and other AI coding agents.
---

# Getting started with the Moderne MCP server

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

## Per-agent installation

If you only want to install agent tools for a specific coding agent, use the per-agent subcommands:

```bash
mod config agent-tools claude install
mod config agent-tools cursor install
mod config agent-tools copilot install
```

Each per-agent command installs both skills and the MCP server for that agent only. If the agent is not detected on your system, the command displays a message and exits without making changes.

The available per-agent subcommands are: `claude`, `windsurf`, `cursor`, `copilot`, `amp`, and `codex`.

To install only skills (without the MCP server) for all detected agents:

```bash
mod config agent-tools skills install
```

## Supported agents

| Agent           | MCP support | Skills support | MCP configuration                                   |
|-----------------|-------------|----------------|-----------------------------------------------------|
| Claude Code     | Yes         | Yes            | Registered via `claude mcp add`                     |
| Windsurf        | Yes         | Yes            | `~/.codeium/windsurf/mcp_config.json`               |
| Cursor          | Yes         | Yes            | `~/.cursor/mcp.json`                                |
| GitHub Copilot  | Yes         | Yes            | `.vscode/mcp.json` and `~/.copilot/mcp-config.json` |
| Sourcegraph Amp | Yes         | Yes            | Registered via `amp mcp add`                        |
| OpenAI Codex    | Yes         | Yes            | Registered via `codex mcp add`                      |

## Next steps

* [Learn what tools the MCP server provides](./overview.md)
* [Set up the tool browser](./tool-browser.md) to monitor builds and test tools
* [Install skills for AI coding agents](../skills.md)
