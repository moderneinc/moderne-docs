---
sidebar_label: Agent chat
description: How to start an AI coding agent on a synced Moderne organization with mod <agent> chat.
---

# Agent chat

:::warning
`mod <agent> chat` is incubating. Its commands and behavior may change between CLI releases.
:::

Agent chat puts the coding agent you already use to work on your entire codebase, not just the repository you have open. You pick an agent and an organization of repositories, then say what you want in plain language, like "Upgrade all of these repositories to Java 25" or "Patch every vulnerable dependency across all of these repositories." The agent drives Moderne's deterministic recipes across every repository at once, checks the result with each repository's own build, and fixes whatever the recipe left behind.

Agent chat is designed to need no setup beyond the commands below. The rest of this page is reference for when you want to know more.

## Quick start

Install the Moderne CLI:

```bash
curl https://app.moderne.io/cli | bash
```

On Windows, run `irm https://app.moderne.io/cli/windows | iex` in PowerShell instead. The install script also connects the CLI to Moderne and opens a browser for you to sign in. If you installed the CLI some other way, [connect it to Moderne](../moderne-cli/getting-started/cli-intro.md#step-3-connect-the-cli-to-moderne) yourself.

Then start your agent on an organization with the work you want done:

```bash
mod copilot chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

The CLI clones every repository in the organization into `./work` along with its prebuilt LSTs, then opens GitHub Copilot there with your prompt already submitted. From there, work with the agent as you normally would. If you leave off `--prompt`, the session opens empty and you type your first request yourself. Swap `copilot` for `claude`, `codex`, or any other [supported agent](#supported-agents).

## Requirements

You need the Moderne CLI 4.8.4 or later and a supported agent installed on your `PATH`.

:::note
Agent chat works on a whole organization locally, with every repository cloned to your machine. It is an alternative to the [Moderne skills](./skills.md) and [local MCP server](./mcp/overview.md), which work on one repository at a time, not an addition to them. An agent with both can get conflicting direction. To work on a whole organization without cloning it, use the [remote MCP server](./mcp/remote-server.md), which runs recipes on the Moderne Platform instead.
:::

## Choosing what to sync

`--org` names an organization on the Moderne Platform you are connected to.

To come back to the same organization later, leave off `--org` and `--sync-csv`. The CLI reuses what is already synced:

```bash
mod claude chat ./work
```

### Without a Moderne Platform organization

If your repositories are not in an organization on the Moderne Platform, pass `--sync-csv` in place of `--org`. It takes a [repos.csv](../moderne-cli/references/repos-csv.md) or `repos-lock.csv` file, either a local path or a URL, that lists the repositories to work on:

```bash
mod claude chat ./work --sync-csv ./repos-lock.csv \
  --prompt "Upgrade all of these repositories to Java 25."
```

The CLI clones each repository from its `cloneUrl` and downloads its LST from the `publishUri` column. You do not need to connect the CLI to a Moderne tenant. If the CSV has `org` columns, add `--org` to sync just one organization from it.

The agent works from prebuilt LSTs, so this works best with a `repos-lock.csv` that has a `publishUri` for every repository, such as the one `mod publish` uploads to your artifact repository. See [Creating and sharing a repos-lock.csv file](../moderne-cli/how-to-guides/repos-lock-csv.md) for how to produce that file and how to configure the CLI to download from the artifact repository.

If you do not have published LSTs, `--sync-csv` clones the source code but does not build LSTs. Sync and build them yourself first, then start the agent on the directory:

```bash
mod git sync csv ./work ./repos.csv --with-sources
mod build ./work
mod claude chat ./work --prompt "Upgrade all of these repositories to Java 25."
```

## Supported agents

| Agent                   | Command               | Launches        |
|-------------------------|-----------------------|-----------------|
| Claude Code             | `mod claude chat`     | `claude`        |
| OpenAI Codex            | `mod codex chat`      | `codex`         |
| GitHub Copilot          | `mod copilot chat`    | `copilot`       |
| Cursor                  | `mod cursor chat`     | `cursor-agent`  |
| Kiro                    | `mod kiro chat`       | `kiro-cli chat` |
| Sourcegraph Amp         | `mod amp chat`        | `amp`           |
| opencode                | `mod opencode chat`   | `opencode`      |
| Visual Studio Code Chat | `mod vscode chat`     | `code chat`     |
| Windsurf                | `mod windsurf chat`   | `windsurf`      |

If the agent's command is not on your `PATH`, the CLI tells you how to install it.

## What happens when you run it

1. **Sync.** With `--org` or `--sync-csv`, the CLI syncs the organization into the directory with sources and LSTs, just like `mod git sync`. If some repositories fail to sync, the agent still starts on the ones that succeeded, and the CLI reports the failures when the session ends.
2. **Guide.** The CLI links an `AGENTS.md` file into the directory. Every supported agent reads this file at startup, so the agent knows from the first turn how to use `mod` on the organization. The guide ships with the CLI and improves as you upgrade. An existing `AGENTS.md` that the CLI did not create is moved to `AGENTS.md.bak`.
3. **Session.** The agent starts in the organization directory and takes over your terminal. When you exit the agent, you are back at your shell. The CLI then records a [telemetry row](../moderne-cli/how-to-guides/cli-telemetry.md#agent-session-telemetry) for the session.

The agent expects the LSTs to already be in the directory, either downloaded during the sync or [built by you beforehand](#without-a-moderne-platform-organization). It does not build them itself.

## Options

| Option              | Description                                                                                                                                                                                               |
|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--org <ORG_NAME>`  | Sync this organization from the Moderne Platform. Combined with `--sync-csv`, it picks this organization from the CSV's `org` columns rather than from the Moderne Platform.                              |
| `--sync-csv <CSV>`  | Sync the repositories listed in this [repos.csv](../moderne-cli/references/repos-csv.md) or `repos-lock.csv` (local path or URL) instead of a Moderne Platform organization. No Moderne tenant is needed. |
| `--prompt <PROMPT>` | Start the session with this prompt already submitted. Not available for Windsurf.                                                                                                                         |
| `--unattended`      | Run the prompt to completion and exit, approving the agent's tool use automatically. Requires `--prompt`. Not available for VS Code or Windsurf.                                                          |

Without `--org` or `--sync-csv`, the directory must already hold a synced organization.

To run the same migration without an interactive session, add `--unattended`:

```bash
mod claude chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25." \
  --unattended
```

:::warning
`--unattended` lets the agent run tools without asking you first. Use it only in a directory and environment you are comfortable letting the agent change.
:::

## Next steps

* [Learn how to sync organizations](../moderne-cli/getting-started/cli-intro.md#syncing-moderne-organizations) with the Moderne CLI
