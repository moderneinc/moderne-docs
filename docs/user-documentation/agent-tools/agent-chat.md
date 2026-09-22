---
sidebar_label: Agent chat
description: How to start an AI coding agent on a synced Moderne organization with mod <agent> chat.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Agent chat

:::warning
`mod <agent> chat` is incubating. Its commands and behavior may change between CLI releases.
:::

A coding agent pointed at a directory of repositories makes each change by hand, one repository at a time. Across a large organization that can take hours and produce different results in each repository. Moderne's agent chat aims to fix this by giving the agent access to Moderne's recipes.

You pick an agent and an organization of repositories - then talk to it in plain language. You could say things like: "Upgrade all of these repositories to Java 25" or "Patch every vulnerable dependency across all of these repositories."

The agent runs the recipes across every repository at once, checks the results with each repository's own build, and then edits by hand only what the recipes left behind.

Agent chat needs no setup beyond the two commands in the [quick start](#quick-start): one installs the CLI, and one clones the organization with its prebuilt LSTs and tells the agent how to use them. The rest of this page is reference for when you want to know more.

## Quick start

Install the Moderne CLI with the install script:

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux / macOS" default>

```bash
curl https://app.moderne.io/cli | bash
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
irm https://app.moderne.io/cli/windows | iex
```

</TabItem>
</Tabs>

Then point your agent at an organization and give it a prompt. The following example uses GitHub Copilot. You can use `claude`, `codex`, or any other [supported agent](#supported-agents) in place of `copilot`:

```bash
mod copilot chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

The CLI clones every repository in the organization into the `./work` directory along with its prebuilt LSTs. It then opens whatever agent you specified in that directory with your prompt already submitted. From there, you work with the agent as you normally would. If you leave off `--prompt`, the session starts empty and you type your first request yourself.

## Requirements

You need the Moderne CLI 4.8.4 or later and a supported agent installed on your `PATH`.

:::warning
Agent chat does not work together with the [Moderne skills](./skills.md) or [local MCP server](./mcp/overview.md). These tools are designed to steer the agent toward working on only one repository at a time instead.

Before you use agent chat, remove them:

```bash
mod config agent-tools uninstall
```

You can always reinstall them later with `mod config agent-tools install`.

If you'd prefer to just remove them for one particular agent, run `mod config agent-tools <agent-name> uninstall`, replacing `<agent-name>` with the agent you plan to use.
:::

## Choosing what to sync

You choose which repositories to sync to your machine by adding the `--org` flag to the `mod <agent> chat` command. You'll need to provide an organization name that exists on the Moderne tenant your CLI is connected to. The CLI will then sync every repository in that org to your local machine.

If you want to come back to the same organization later, you can leave off the `--org` flag. The CLI will reuse what is already synced:

```bash
mod claude chat ./work
```

### Without a Moderne Platform organization

If your repositories are not in an organization on the Moderne Platform, pass `--sync-csv` in place of `--org`. Syncing repositories this way does not require a Moderne tenant. Instead, it takes a [repos.csv](../moderne-cli/references/repos-csv.md) or a `repos-lock.csv` file that lists the repositories to work on. The file can be a local path or a URL:

```bash
mod claude chat ./work --sync-csv ./repos-lock.csv \
  --prompt "Upgrade all of these repositories to Java 25."
```

The CLI clones each repository from its `cloneUrl` and downloads its LST from the `publishUri` column. If the CSV has `org` columns, add `--org` to sync just one organization from it.

The agent needs prebuilt LSTs for every repository. We recommend that you use a `repos-lock.csv` with a `publishUri` on each row, like the one `mod publish` uploads to your artifact repository. See [Creating and sharing a repos-lock.csv file](../moderne-cli/how-to-guides/repos-lock-csv.md) for how to produce that file and how to configure the CLI to download from the artifact repository.

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

## What happens when you run agent chat

1. With `--org` or `--sync-csv`, the CLI syncs the organization into the directory with sources and LSTs, just like `mod git sync`. If some repositories fail to sync, the agent still starts on the ones that succeeded, and the CLI reports the failures when the session ends.
2. The CLI links an `AGENTS.md` file into the directory. Every supported agent reads this file at startup, so the agent knows from the first turn how to use `mod` on the organization. The file ships with the CLI and improves as you upgrade. An existing `AGENTS.md` that the CLI did not create is moved to `AGENTS.md.bak`.
3. The agent starts in the organization directory and takes over your terminal. When you exit the agent, you are back at your shell. The CLI then records a [telemetry row](../moderne-cli/how-to-guides/cli-telemetry.md#agent-session-telemetry) for the session.

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
