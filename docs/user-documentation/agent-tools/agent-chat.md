---
sidebar_label: Agent chat
description: How to start an AI coding agent on a Moderne organization with mod <agent> chat, and how the agent works through changesets.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from '@site/src/components/VideoPlayer';

# Agent chat

A coding agent pointed at a directory of repositories makes each change by hand, one repository at a time. Across a large organization that can take hours and produce different results in each repository. Moderne's agent chat aims to fix this by giving the agent access to Moderne's recipes and to the organizations already in your Moderne tenant.

You pick an agent and an organization of repositories - then talk to it in plain language. You could say things like: "Upgrade all of these repositories to Java 25" or "Patch every vulnerable dependency across all of these repositories."

The agent runs the recipes across every repository at once in the Moderne Platform and pulls down only the repositories the recipes changed. It checks the results with each repository's own build and edits by hand only what the recipes left behind.

As it runs, the agent pushes its changes to a [changeset](../moderne-platform/references/changesets.md). You can then review the changeset and open up pull requests when you are happy with the changes.

Agent chat needs no setup beyond the two commands in the [quick start](#quick-start). The first installs the CLI and the second starts the agent on an organization. The rest of this page is reference for when you want to know more.

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=maZDbrvc3u0' controls="true" />

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

Then pick your agent and point it at an organization with a prompt:

<Tabs groupId="agent">
<TabItem value="claude-code" label="Claude Code" default>

```bash
mod claude chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="codex" label="Codex">

```bash
mod codex chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="copilot-cli" label="Copilot">

```bash
mod copilot chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="cursor" label="Cursor">

```bash
mod cursor chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="devin" label="Devin">

```bash
mod devin chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="kiro" label="Kiro">

```bash
mod kiro chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="amp" label="Amp">

```bash
mod amp chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="opencode" label="OpenCode">

```bash
mod opencode chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="pi" label="Pi">

```bash
mod pi chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="vscode" label="VS Code">

```bash
mod vscode chat ./work --org "Legacy Java Apps" \
  --prompt "Upgrade all of these repositories to Java 25."
```

</TabItem>
<TabItem value="windsurf" label="Windsurf">

```bash
mod windsurf chat ./work --org "Legacy Java Apps"
```

Windsurf does not take `--prompt`. Type your request in the chat panel once the IDE opens.

</TabItem>
</Tabs>

The CLI checks that the session can work, creates the `./work` directory with an `AGENTS.md` guide in it, and opens the agent there with your prompt already submitted. Nothing is cloned at this point.

Next, the agent searches and runs recipes on the organization in Moderne. It syncs repositories into the `./work` directory only when it needs to build, test, or fix them. From there, you work with the agent as you normally would.

If you leave off `--prompt`, the session starts with only the organization named and you type your first request yourself.

:::info
We'll use `mod claude chat` for the rest of this doc. Feel free to swap in another agent if you'd prefer to test with that one instead.
:::

## Requirements

You will need:

* The Moderne CLI 4.12.0 or later, logged in to a Moderne tenant.
* A supported agent installed on your `PATH`. For Claude Code, use 2.1.286 or later. Earlier releases do not read the `AGENTS.md` file the CLI writes, so the agent starts without knowing how to use `mod`.

:::warning
Agent chat does not work together with the [Moderne skills](./skills.md) or [local MCP server](./mcp/overview.md). These tools are designed to steer the agent toward working on only one repository at a time instead.

If you have them installed, remove them before you use agent chat:

```bash
mod config agent-tools uninstall
```

You can always reinstall them later with `mod config agent-tools install`. The same applies to global instruction files, plugins, and other MCP servers the agent loads at startup.
:::

## How a session works

1. You run `mod <agent> chat` with a directory, an organization, and a prompt.
2. The CLI checks that the session can work, puts an `AGENTS.md` guide in the directory, and opens the agent there with your prompt.
3. Before it touches any files, the agent reads the organization's recent changesets, searches the organization, and runs recipes on it. All of that runs in the Moderne Platform against the LSTs it already holds. Each recipe run creates a [changeset](../moderne-platform/references/changesets.md).
4. When it needs to build, test, or hand-edit, the agent syncs the changeset's repositories into the directory you specified in step 1. It only clones the repositories the recipe changed.
5. The agent builds each repository with its own build command, fixes what the recipe left broken, and pushes its changes back to the changeset as soon as that repository builds.
6. When you exit the agent, the CLI closes the session in Moderne and records a [telemetry row](../moderne-cli/how-to-guides/cli-telemetry.md#agent-session-telemetry). You review the changeset in the Platform's [activity view](../moderne-platform/getting-started/activity-view.md) and commit it or open pull requests from there.

Nothing reaches your source control until you commit the changeset.

The agent may pick up an existing changeset instead of starting its own, if a recent run of the right recipe covers the organization and nobody is working on it. If you want a fresh run, say so in the prompt.

The `AGENTS.md` guide ships with the CLI and improves as you upgrade. An existing `AGENTS.md` that the CLI did not create is moved to `AGENTS.md.bak`.

## Permissions

Agent chat starts every terminal agent with its tool use approved up front. The agent builds, edits files, and pushes without stopping to ask. VS Code and Windsurf open as ordinary IDE sessions and keep whatever permission settings you have given them.

When the agent is working on a [changeset](../moderne-platform/references/changesets.md), it can only push to that changeset in Moderne. It can't push anything to your SCM directly.

## Options

| Option              | Description                                                                                                                         |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `--org <ORG_NAME>`  | The organization in Moderne the agent works on.                                                                                     |
| `--prompt <PROMPT>` | Start the session with this prompt already submitted. Not available for Windsurf.                                                   |
| `--unattended`      | Run the prompt to completion and exit. Requires `--prompt`. Not available for VS Code or Windsurf.                                  |
| `--no-preflight`    | Skip the readiness check. The check only stops the launch for a refused token, an unreachable tenant, or a failing `codex doctor`. Anything else is a warning. |

Without `--org`, the agent works on whatever the directory already holds. That might be a changeset you synced earlier, or repositories you synced from a CSV as described below. If the directory is empty, the agent can still work on any organization in your tenant that you name in the prompt.

## Without a Moderne Platform organization

If your repositories are not in an organization on the Moderne Platform, sync them from a [repos.csv](../moderne-cli/references/repos-csv.md) file first. Then build their LSTs and start the agent on the directory without `--org`:

```bash
mod git sync csv ./work ./repos.csv --with-sources
mod build ./work
mod claude chat ./work --prompt "Upgrade all of these repositories to Java 25."
```

The agent runs recipes on the LSTs in the directory, applies the patches, and verifies each repository with its own build. The changes stay in each repository's working tree. You review and push them with the [CLI's `mod git` commands](../moderne-cli/getting-started/cli-intro.md#committing-changes-and-creating-prs).

If you already publish LSTs to an artifact repository, sync from a `repos-lock.csv` with a `publishUri` column instead and skip `mod build`. See [Creating and sharing a repos-lock.csv file](../moderne-cli/how-to-guides/repos-lock-csv.md).

## Supported agents

| Agent                   | Command             | Launches        |
|-------------------------|---------------------|-----------------|
| Claude Code             | `mod claude chat`   | `claude`        |
| OpenAI Codex            | `mod codex chat`    | `codex`         |
| GitHub Copilot          | `mod copilot chat`  | `copilot`       |
| Cursor                  | `mod cursor chat`   | `cursor-agent`  |
| Devin                   | `mod devin chat`    | `devin`         |
| Kiro                    | `mod kiro chat`     | `kiro-cli chat` |
| Sourcegraph Amp         | `mod amp chat`      | `amp`           |
| OpenCode                | `mod opencode chat` | `opencode`      |
| Pi                      | `mod pi chat`       | `pi`            |
| Visual Studio Code Chat | `mod vscode chat`   | `code chat`     |
| Windsurf                | `mod windsurf chat` | `windsurf`      |

If the agent's command is not on your `PATH`, the CLI tells you how to install it.

## Next steps

* [Follow the quickstart](../moderne-cli/getting-started/cli-getting-started.md), a complete agent chat session that upgrades an organization to Java 25
* [Learn how changesets work](../moderne-platform/references/changesets.md), including how to sync one and how revisions accumulate
* [Learn how to sync organizations](../moderne-cli/getting-started/cli-intro.md#syncing-moderne-organizations) with the Moderne CLI
