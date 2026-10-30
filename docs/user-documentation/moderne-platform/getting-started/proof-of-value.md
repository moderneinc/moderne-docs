---
title: Proof of value (POV) process
sidebar_label: Proof of value process
description: "Run a proof of value with a coding agent: the scenarios to start with mod <agent> chat, the value deck the first one fills in, and how to keep a factory running."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PovScenarios } from '@site/src/components/PovScenarios';

# Proof of value (POV) process

:::info
Before starting the POV process, make sure your team has completed the [prerequisites checklist](./proof-of-value-prerequisites.md).
:::

Moderne automates code maintenance tasks like framework migrations, security vulnerability fixes, and code quality improvements. A coding agent equipped with the Moderne CLI applies that automation across every repository you have at once. It searches your whole organization for where a change is needed, runs recipes over all of it in Moderne, checks the result with each repository's own build, and writes a recipe for whatever no recipe covers yet.

This guide gives you scenarios to run during a proof of value. Each scenario is a prompt you start with `mod <agent> chat` on an organization of your repositories. The first runs the POV itself and fills in a value deck you can take to leadership. The others are standing objectives you leave running, so the proof of value shows what Moderne looks like in daily use rather than in a one-off demonstration.

Moderne's value lies in working horizontally across all of your repositories at once. Consider a modernization task that needs to happen across 125 repositories:

<figure>
  ![Grid showing 80% modernized with 100 of 125 repositories completed horizontally](./assets/horizontal-moderne-way.png)
  <figcaption>**The Moderne approach**: Even if you only complete 80% of the work on each repository, that's 80% progress business-wide (100 of 125 tasks done).</figcaption>
</figure>

<figure>
  ![Grid showing 4% modernized with only 5 of 125 repositories completed sequentially](./assets/horizontal-traditional-way.png)
  <figcaption>**The traditional approach**: If you fully complete one repository before moving to the next, you achieve 100% on that single repo, but that's only 4% progress across the organization (5 of 125 tasks).</figcaption>
</figure>

This is why every scenario below works on a whole organization and never on a repository you pick out. Rather than getting any single repository perfectly over the line, you will see a change applied across your entire codebase at once, with the remaining gap closed by recipes the agent writes rather than by hand.

## Before you begin

You will need:

* **A Moderne tenant with your repositories ingested.** The [prerequisites](./proof-of-value-prerequisites.md) cover mass ingest and the Connector for the Moderne Platform, and Moderne DX has [a checklist of its own](../../../administrator-documentation/moderne-dx/getting-started/proof-of-value-prerequisites.md). Start with 100 or more diverse repositories. The agent searches and runs recipes in Moderne, and clones a repository only when it has something to build.
* **The Moderne CLI, logged in to your tenant.** Install it with the script for your operating system, point it at your tenant, and log in.
* **A supported coding agent on your `PATH`.** Agent chat [lists the agents and the versions it needs](../../agent-tools/agent-chat.md#supported-agents). If you installed the Moderne skills or the local MCP server for that agent, [remove them first](../../agent-tools/agent-chat.md#requirements), since they steer the agent toward one repository at a time.
* **The JDKs and build tools your repositories use.** The agent verifies a change with each repository's own build. The CLI finds JDKs from [SDKMAN, Homebrew and system installs](../../moderne-cli/how-to-guides/java.md), and `mod config java installation list` shows what it sees.

To install the CLI and log in:

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux / macOS" default>

```bash
curl https://app.moderne.io/cli | bash
mod config moderne edit https://TENANT.moderne.io
mod login
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
irm https://app.moderne.io/cli/windows | iex
mod config moderne edit https://TENANT.moderne.io
mod login
```

</TabItem>
</Tabs>

## Choosing a scenario

<PovScenarios />

Replace `<organization>` with the name or the id of the organization in Moderne, as `mod config moderne organizations show` lists it. The command creates the directory if it is missing, writes an `AGENTS.md` file there that teaches the agent how to use `mod`, and starts the agent with the prompt submitted. If you leave off `--prompt`, the session starts empty and you type the first request yourself.

Whatever the scenario, the session follows the same path:

* It looks before it clones. `mod search moderne://<organization>` answers where the objective is not yet met, type-aware and across every repository, with nothing on disk.
* It runs recipes over the whole organization in Moderne. A run creates a changeset that holds the changes and their data tables, and it leaves alone every repository that was already right.
* It brings to disk only what it has to build. `mod git sync moderne` with the changeset's id syncs the repositories the run changed, and the agent verifies each one with its own build.
* It fixes the recipe, not the repositories. Where the recipe fell short, the agent fixes it or writes a new one, in Java or TypeScript, and runs it again over everything, so that a gap found in one repository is closed in all of them.
* It ships through Moderne. The agent pushes each repository as it passes and opens pull requests for people to merge, and it records what it learned in data tables on the changeset.
* It starts more sessions when the work is larger than one machine. Each one is a `mod <agent> chat` of its own on the same changeset.

:::tip
A session you want to watch runs in your terminal. A session you want to leave alone takes `--unattended`, which approves the agent's tool use and runs the prompt to completion. [Running a factory continuously](#running-a-factory-continuously) covers how to keep one going.
:::

## Running the POV and filling in the value deck

The value deck is a short presentation for your leadership, built the way Moderne builds its own: one sentence per slide and one visual under it. [Download the value deck](pathname:///decks/moderne-pov.pptx) and put it in the directory the session will start in:

```bash
mkdir pov
curl -o pov/moderne-pov.pptx https://docs.moderne.io/decks/moderne-pov.pptx
```

Then start the agent with the deck scenario from the picker above. The deck is the agent's checklist as much as it is the result. Every slide carries one headline with placeholders such as `{{N}}` and speaker notes that say what the number is, which command or data table produces it, and which screenshot to attach. The agent replaces each placeholder with what it measured and leaves a slide out rather than guess.

| Slide                 | What it says                                                                                | What the agent measures                                                   |
|-----------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| Title                 | `{{Customer}}` and Moderne                                                                  | The customer's name and the month                                         |
| The estate            | `{{N}}` repositories and `{{LOC}}` lines of code, by language                               | The organization's size, with the language composition recipe             |
| Horizontal progress   | A change landed in 80% of `{{N}}` repositories moves 80% of the estate                      | Fixed, with your repository count                                         |
| Determinism           | The agent chooses or writes a recipe, and the recipe makes the change                       | Fixed                                                                     |
| One command           | How the session was started                                                                 | A screenshot of the agent's first turn                                    |
| Search                | A question about the code, answered across `{{N}}` repositories in seconds                  | A type-aware search and its match counts                                  |
| The run               | `{{files}}` files changed in `{{n}}` of `{{N}}` repositories in `{{duration}}`              | The main recipe run and its changeset                                     |
| Verification          | `{{k}}` of `{{n}}` changed repositories build and pass their own tests                      | The builds the agent ran on the changeset, before and after the change    |
| Recipes written       | What no recipe covered became `{{w}}` recipes rather than hand edits                        | The recipes the agent wrote or fixed, and how many repositories each reached |
| Vulnerabilities       | `{{v}}` vulnerable dependencies across `{{m}}` repositories, `{{f}}` fixed in one run       | The vulnerability report of a dependency check over the organization      |
| Cost                  | Agent usage, a person's time, and the hours the recipes report saving                       | The session's own usage report and the output of each run                 |
| The factory           | Left running, the same session is a factory for `{{objective}}`                             | The objective you name                                                    |
| What you keep running | The factories you keep after the POV                                                        | The scenarios below, with an owner for each                               |

When the session ends, the deck in the directory is filled in, the changesets it created are in Moderne for review, and every number in the deck names the changeset, data table or session it came from. Review the deck as you would the agent's pull requests.

:::note
The agent edits the deck with a library such as `python-pptx`, which it installs itself. If it reports that it cannot edit the file, ask it to write the results as a markdown report with the same headlines, and fill the deck in yourself.
:::

## Keeping every repository on the latest Spring Boot

This scenario is a standing objective. The session finds the Spring Boot line each repository runs with one search, runs the Spring Boot upgrade recipe over everything that is behind, and syncs the repositories the run changed to build and test them. A repository that fails is a gap in the recipe before it is a change to make by hand. The agent fixes the recipe or writes a new one, runs it again over the whole organization, and pushes each repository as it passes. When every repository is current, the session says so and ends, and the next run starts over when a new release ships.

Standing exceptions belong in the prompt. A sentence such as "acme/legacy stays on Spring Boot 3.3 until its reporting plugin is replaced" is all the session needs, and it records the exception in its data tables. The recipes this scenario draws on are under [major migrations](./proof-of-value-recipes.md#major-migrations) and [dependency management](./proof-of-value-recipes.md#dependency-management) in the recipe reference.

## Watching for vulnerabilities and fixing them everywhere

The session reads what was disclosed, maps it onto the estate, and remediates it everywhere at once. It researches newly disclosed vulnerabilities with web search, or with a research skill such as `last30days` where the agent has one. For each vulnerability, a `dependency:` search over the organization says which repositories the vulnerable range reaches, including through transitive dependencies. Where a version bump is the fix, the [dependency vulnerability check](./proof-of-value-recipes.md#find-and-fix-vulnerable-dependencies) makes it. Where the fix is a change to code, the agent writes a recipe for the vulnerable pattern and runs it over every repository the search found. Each fix is verified with the repository's own build and opened as a pull request.

A fix the agent makes by hand in one repository is generalized into a recipe before the session moves on. The same vulnerability found later is then fixed by running the recipe again.

## Building a data-flow understanding of the code

This scenario is a longer piece of work than a single session, and it ends when the capability exists rather than when a release lands. The session builds recipes and data tables that answer where data goes. Which methods call which, where a value that enters an API endpoint ends up, and which third-party libraries it passes through are each a question one of them answers. It starts from the search and analysis recipes in the [recipe reference](./proof-of-value-recipes.md#code-search-and-impact-analysis), such as the call graph and the sensitive endpoint search, and writes what is missing as recipes of its own.

Each capability is proved on a real question about your code before it counts, and the session records what it answers and where it falls short. What the session leaves behind runs again on demand, so a data flow question later is a query over the organization rather than a reading of the code.

## Running a factory continuously

A session ends when the agent judges the objective met for now. A factory is that same session, started again whenever you want it to look again. Start it with `--unattended` from a scheduler on a machine you keep for it. Keep the prompt in a file beside the directory, so the scheduler's entry stays short:

```bash
# Look again every night at 02:00
0 2 * * * cd /srv/factories && mod copilot chat ./factory-spring-boot --org "<organization>" --unattended --prompt "$(cat spring-boot.prompt)"
```

The session keeps no state on the machine. What the estate looks like is the code in Moderne, and what is underway is the organization's changesets, so a session that starts after a crash, or on another machine, reads the same picture and continues. It leaves alone work that is underway and finishes work that stalled.

:::warning
`--unattended` lets the agent run tools without asking you first. Run it in a directory and on a machine you are comfortable letting the agent change, with credentials that can push to your repositories and nothing more.
:::

To see and steer what is running:

* `mod agent sessions` lists the sessions on this machine, and `mod agent sessions <changeset>` lists the sessions on a changeset wherever they run, with the machine, the directory, the state and the command each one is running.
* The changesets a factory creates are in Moderne's activity view, with their data tables, pull requests and the agents that worked on them.
* `mod agent stop <session>` ends a session. It stops the agent, closes the session in Moderne, and gives the terminal its prompt back.
* `mod agent send <session> "<message>"` hands a message to an interactive Codex session as its next turn. For other agents, and for unattended sessions, change the prompt and start the session again.

## Next steps

* [Browse the recipe reference](./proof-of-value-recipes.md) for the recipes the scenarios draw on, with a CLI command and an example result for each.
* [Read about agent chat](../../agent-tools/agent-chat.md) for the agents it supports and what a session does.
* [Study the results](./data-tables.md) with data tables and [visualizations](./visualizations.md) after a run.
* [Frame the estate for leadership with a DevCenter](./dev-center.md), the single-page view of where every repository stands.
