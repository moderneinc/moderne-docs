---
title: Proof of value (POV) process for agent tools
sidebar_label: Proof of value process (agent tools)
description: Describes what a typical agent tools proof of value process looks like.
---

import PrethinkQuestionDeck from '@site/src/components/PrethinkQuestionDeck';

# Proof of value (POV) process for agent tools

:::info
Before starting the PoV process, make sure your team has completed the [prerequisites checklist](./proof-of-value-prerequisites.md).
:::

Your developers already have AI coding agents. What they don't have is a way for those agents to reason accurately about a codebase that is far too large to fit in a context window, or to act on more than one repository at a time.

Moderne closes that gap. [Prethink](../../agent-tools/prethink.md) gives agents pre-resolved facts about your code instead of guesses. [Trigrep](../../agent-tools/trigrep.md) lets them search thousands of repositories in under a second. The [MCP server](../../agent-tools/mcp/overview.md) and [skills](../../agent-tools/skills.md) give them semantic tools and the know-how to use them. Together they give your agent the tools to do as much work as possible with fast, deterministic processes so that you can save your tokens for what an agent does best.

## Introduction

This guide walks through a typical agent tools proof of value (POV) process. It is organized around four phases, each of which builds on the one before it:

1. [Building and evaluating Prethink context](#phase-1-building-and-evaluating-prethink-context)
2. [Running existing PoV use cases through an agent](#phase-2-running-existing-pov-use-cases-through-an-agent)
3. [Remediating vulnerabilities with an agent](#phase-3-remediating-vulnerabilities-with-an-agent)
4. [Writing new recipes with an agent](#phase-4-writing-new-recipes-with-an-agent)

Moderne's agent tools work with the coding agents your developers already use, and you'll see each one of them used throughout this proof-of-value.

:::tip[Evaluating what recipes do to your code?]
If what you want to assess is the output of recipes - the diffs, the data tables, how much of a migration is automated - that is what the [standard proof of value process](./proof-of-value.md) is for. The two guides share the same foundation of mass ingest, LSTs, and a Moderne organization, so you can run them together, but they answer different questions.
:::

**Bring your own agent.** The CLI installs skills and an MCP server into Claude Code, Cursor, Windsurf, GitHub Copilot, Sourcegraph Amp, and OpenAI Codex, and [detects which of them are present](../../agent-tools/skills.md#supported-agents). Don't adopt a new agent for the evaluation - evaluate these with the tools and models you use today.

You'll work with a set of open-source repositories throughout this process to explore the tools and look at their results.

**Setting up**

* [Install the CLI and agent tools](#before-you-start) into every agent your teams already use
* Turn on [LST format version 3](#why-version-3-matters-for-agents) before building anything
* [Connect the remote MCP servers](#connecting-the-remote-mcp-servers)
* Build your working set of repositories

**Phase 1 - Build context for your agents**

* Run Prethink across your organization and apply the results
* Work through [curated questions](#drawing-a-scenario) with your agent, against your own code
* [Aggregate context to the organization root](#aggregating-context-across-an-organization) and write an org-level agent config

**Phase 2 - Your agent as your interface to Moderne**

* Ask your agent in plain language to find, configure, and run [catalog recipes](#phase-2-running-existing-pov-use-cases-through-an-agent)
* Have it regenerate Prethink context after a change and refactor on what it finds

**Phase 3 - Use code search to understand the blast radius of a vulnerability**

* Rehearse on the public corpus with the [Code Genome Project queries](#seeing-it-on-real-code)
* Build a practice working set and [triage Text4Shell by hand](#exercise-triage-text4shell-on-a-practice-working-set)
* Hand the same investigation to your agent and compare
* Repeat the loop against a real finding in your own estate

**Phase 4 - recipes and readout**

* Have a developer with no OpenRewrite experience [write a recipe with their agent](#phase-4-writing-new-recipes-with-an-agent)
* Run that recipe across the organization
* Assemble the [readout](#what-this-proof-of-value-produces)

Phases build on one another, so run them in order. Everything before phase 1 is setup and can be done in a day once accounts and access are in place.

## Evaluation throughout the process

### Why evaluating agent tooling is hard

Evaluating agentic tools of any kind can be difficult.

**Agents are nondeterministic.** The same prompt, against the same repository, on the same day, can produce a different sequence of tool calls and a different answer. One successful run is not proof, and one failed run is not disproof. What matters is behavior that repeats across runs, across developers, and across repositories.

**The harness landscape shifts constantly.** Agents, their tool-calling conventions, their context-management strategies, and their default models all change on a release cadence measured in weeks. A measurement taken in week one of a three-week PoV may not describe the same system by week three. Anchoring an evaluation to a fixed score invites a number that expires before the readout.

**It's very hard to A/B test complex and drawn-out conversations with your agents.** You cannot run the same developer through the same task, with and without the tooling. Whatever they learn the first time through carries into the second.

The practical consequence: evaluate **capabilities you can observe repeatedly**, not metrics captured once. The rest of this guide is built around that.

### What to look for

We find the following signals to be the most valuable indicator that Moderne's agent tools are going to show results within your own coding agents (visible in the agent's transcript and in the artifacts it leaves behind):

**1. Does the agent reach for Prethink on its own?**

Watch whether the agent consults `.moderne/context/` to answer a question, rather than grepping through source or guessing from file names. Reaching for the tool unprompted is a meaningful result by itself: it shows the context is discoverable and that the agent recognizes it as authoritative. This is the signal to watch throughout [phase 1](#phase-1-building-and-evaluating-prethink-context).

**2. Can the agent complete a complex, multi-step workflow?**

Single-shot questions are the easy case. The real test is a workflow where each step depends on the last and a mistake early on poisons everything after it. [Vulnerability remediation](#phase-3-remediating-vulnerabilities-with-an-agent) is the benchmark: take one scanner finding, generalize the pattern, search the estate for every occurrence, write a recipe that fixes it, and apply that recipe everywhere. Watch whether the agent holds the thread across all five steps or loses it midway.

**3. Do the recipes the agent writes actually work?**

A recipe that compiles is not the same as a recipe that does what was asked. Check that recipes produced in [phase 4](#phase-4-writing-new-recipes-with-an-agent) have tests, pass them, and produce the expected diff when run across real repositories - not just the one the developer had open.

### Setting expectations

You will not finish rolling out agent tooling in three weeks, and it is worth being clear about that up front. A proof of value shows you what the tooling can do against your own code and leaves you with a plan. Realizing it fully - ingesting every repository, keeping context current as code changes, integrating with each agent your teams use - is a longer piece of work.

Scoping the PoV around that split keeps the exercise honest and keeps the readout useful.

### Measuring token savings

You may be asked whether agent tooling will reduce your token spend, particularly if your organization has already signed a large coding assistant deal and you're looking for ways to make the most of that budget. Letting agents do more work with deterministic tools outside of its inference loop should reduce token spend, but this is not reliably measurable in a way that transfers from one setup to another.

The most immediate obstacle is practical rather than theoretical: **most agents do not give you the numbers.** Few expose client-side token accounting that a developer can read transparently while they work - per-request input and output counts, cache hit rates, or the overhead a tool call adds. Other agents obfuscate the token through an abstract unit that bundles all of these individual usages into one "credit".  Where the figures exist at all they usually live in a vendor dashboard, aggregated across users and delayed by hours, which is the wrong granularity and the wrong latency for a weeks-long evaluation.

Even where the numbers are available, too many variables have to be held constant before two of them can be compared:

* Which agent and harness, and which version of that harness
* Which model, and whether input and output tokens are priced differently
* Whether prompt caching is in play, and what invalidates it
* Whether context propagates across tools or is rebuilt on every call
* How long conversations run, since token consumption grows with conversation length

<details>
<summary>A worked example of why the numbers move</summary>

Consider an attempt to run six simultaneous OpenCode sessions against the DeepSeek model through OpenRouter.

Pinned to DeepSeek's own provider, there was not enough capacity to run six sessions at once. Opening the request up to any provider serving that model solved the capacity problem, but it meant a request could be routed to a different provider from one message to the next - which breaks token caching.

Because token count grows with conversation length and caching is what normally offsets that growth, input tokens ended up costing more than output tokens. That is the opposite of the usual assumption, and it was caused entirely by a routing setting that had nothing to do with the model or the work being done.

</details>

Bake-offs do not resolve this either. Two teams running in parallel for three weeks is a sample size too small to draw conclusions from, and as noted above there is no real counterfactual to compare against.

A more durable way to judge the tooling is **accuracy, completeness, and speed** - the [three signals above](#what-to-look-for), which you can observe directly in transcripts and results rather than having to model.

### Who should take part

Because the case for this tooling rests on capability rather than a cost figure, it matters more than usual who participates. Aim to include:

* **At least one architect** who understands blast radius across the estate - someone who can look at a Prethink finding and immediately know which teams it touches
* **Developers who use AI coding agents daily**, so that the agent side of the evaluation reflects real habits rather than a demo script
* **A security or platform representative** if [vulnerability remediation](#phase-3-remediating-vulnerabilities-with-an-agent) is in scope

The most important person is whoever can judge whether an answer spanning thousands of repositories is correct and complete. Without them, a result that should be evidence only ever looks like a demo.

## Setting up your environment

Scale still matters. Agents tend to work one repository at a time, and that is exactly the constraint these tools remove - but only if there is something at scale for them to work against.

The foundation is largely the same as the standard proof of value, with one addition - turn on LST format version 3 before anything gets built:

### Install the tools you'll use

* Install the [Moderne CLI](../../moderne-cli/getting-started/cli-intro.md#installation-and-configuration)
* Install all of the recipes by running [the commands on this page](../../recipes/lists/latest-versions-of-every-openrewrite-module#cli-installation) to make them available to your agent through the Moderne CLI.
* Install DuckDB or SQLlite to allow your agent to extract partial data from CSV files

### Configure Moderne agent tools for your existing coding agents

Install skills and the MCP server for every coding agent your developers use:

```bash
mod config agent-tools install
```

### Enable LST format version 3

Do this before you build anything, so every LST is produced in the right format the first time:

```bash
mod config features lst --version=3
```

### Build your working set of repositories

First off, create a new empty directory to use throughout your proof-of-value work:

```bash
mkdir pov-agent-tools
cd pov-agent-tools
```

Create a new file named `repos.csv` in this directory containing the catalog of repositories that we'll use our agent tools to work through:

```csv
cloneUrl,origin,path
https://github.com/WebGoat/WebGoat,github.com,WebGoat/WebGoat
https://github.com/SasanLabs/VulnerableApp,github.com,SasanLabs/VulnerableApp
https://github.com/snyk-labs/java-goof,github.com,snyk-labs/java-goof
https://github.com/apache/commons-text,github.com,apache/commons-text
https://github.com/apache/commons-configuration,github.com,apache/commons-configuration
https://github.com/apache/struts,github.com,apache/struts
https://github.com/dropwizard/dropwizard,github.com,dropwizard/dropwizard
https://github.com/jdbi/jdbi,github.com,jdbi/jdbi
https://github.com/jeremylong/DependencyCheck,github.com,jeremylong/DependencyCheck
https://github.com/apache/commons-lang,github.com,apache/commons-lang
https://github.com/apache/commons-io,github.com,apache/commons-io
https://github.com/apache/commons-collections,github.com,apache/commons-collections
https://github.com/apache/commons-codec,github.com,apache/commons-codec
https://github.com/apache/commons-csv,github.com,apache/commons-csv
https://github.com/apache/commons-compress,github.com,apache/commons-compress
https://github.com/apache/commons-net,github.com,apache/commons-net
https://github.com/apache/commons-validator,github.com,apache/commons-validator
https://github.com/apache/commons-beanutils,github.com,apache/commons-beanutils
https://github.com/apache/commons-jexl,github.com,apache/commons-jexl
https://github.com/apache/commons-vfs,github.com,apache/commons-vfs
https://github.com/apache/commons-imaging,github.com,apache/commons-imaging
```

Then clone and build. Leaving the branch column out lets the CLI use each remote's default:

```bash
mod git sync csv working-set repos.csv --with-sources
mod build working-set
```

You'll notice that this command is cloning and building all of your repositories into a `working-set` directory inside your current `pov-agent-tools` directory.  We'll refer to this working set throughout this process, both when commands tak a path as a target or expect a specific working directory and when we discuss what's actually happening in the results.

### Connecting the remote MCP servers

`mod config agent-tools install` gives your agents a local MCP server that operates on repositories checked out on the workstation. Moderne's remove MCP servers extend that reach to give your agent the ability to interact with the wider ecosystem.  Code Genome Project gives your agent the ability to interact with the open-source libraries your apps are depending on and your Moderne SaaS tenant (if you have one available) lets your agent interact with your own organization's portfolio of repositories.

#### The Code Genome Project server

The [Code Genome Project](https://codegenomeproject.org) indexes public open source into LSTs and exposes them over a remote MCP server. Connecting it gives your agents type-resolved search across essentially all provably used open-source code, which is useful in two ways during a PoV: your developers can rehearse the [vulnerability triage exercise](#exercise-triage-text4shell-on-a-practice-working-set) against the public corpus before pointing it at your own code, and an agent can check how a library is actually used in the wild rather than guessing from its documentation.

There is no token to provision. Clients run an OAuth flow on first call:

```bash
claude mcp add --transport http codegenome https://api.codegenomeproject.org/mcp
```

Or add it to `.mcp.json` in your project root, which is the better option if you want everyone on the team to pick it up from the repository:

```json
{
  "mcpServers": {
    "codegenome": {
      "type": "http",
      "url": "https://api.codegenomeproject.org/mcp"
    }
  }
}
```

The server provides `search`, `find_types`, `find_methods`, `find_implementations`, `usage_examples`, `similar_code`, `fetch_file`, `compare_versions`, and `get_context`. The `find_*` and `usage_examples` tools resolve through the corpus type tables, so your agent gets type-aware structural search across hundreds of thousands of open-source dependencies.

#### Your Moderne SaaS tenant's remote server

If you are a Moderne SaaS customer, also connect the [remote MCP server](../../agent-tools/mcp/remote-server.md) for your tenant. It runs on the Platform and operates on repositories already ingested there, scoped by organization, so your agents can run recipes and interrogate results across the whole estate without anything being checked out locally.

This one does need a [Moderne personal access token](../how-to-guides/create-api-access-tokens.md), which carries your own permissions - an agent using it can only reach organizations you can already reach.

```bash
claude mcp add --scope user --transport http modernesaasv2 https://api.<tenant>.moderne.io/mcp \
  --header "Authorization: Bearer <your-moderne-access-token>" \
  --header "X-Moderne-Platform-Version: v2"
```

Or update your MCP settings JSON with the following:

```json
{
  "modernesaasv2": {
    "type": "http",
    "url": "https://api.<tenant>.moderne.io/mcp",
    "headers": {
      "Authorization": "Bearer <your-moderne-access-token>",
      "X-Moderne-Platform-Version": "v2"
    }
  }
}
```

Replace `<tenant>` with your subdomain. If you are evaluating against the public Moderne instance rather than your own tenant, use `https://api.app.moderne.io/mcp`.

:::tip[Which server answers which question]
Roughly: the **local** server through the Moderne CLI for the repository in front of you, **your tenant's** server for your estate, and **Code Genome Project** for the open source your code depends on. An agent with all three can trace a pattern from a public library, through your ingested repositories, down to the file a developer has open.
:::

### Why LST version 3 matters for agents

Efficiency matters in an agentic workflow, and agentic workflows make changes rapidly to your local filesystem and need the LST to reflect those changes immediately. An agent works in a conversational loop, issuing many small tool calls and waiting on each one, so a slow read is felt on every turn rather than once per batch.  LST v3 format builds on the existing capabilities to make it easy for agents to juggle trigrep indexes, prethink context, and all of the type information held in the LST quickly with random access and incremental updates.

:::tip
If you already have version 2 LSTs, you do not have to start over. With the flag set, `mod git sync` converts downloaded version 2 LSTs before recipe runs. Repositories still need a `mod build` to gain their trigram shards, though, so rebuild anything your developers will search against.
:::

## Phase 1: Building and evaluating Prethink context

Prethink is the foundation for everything else. Before an agent can answer a useful question about your codebase, it needs pre-resolved facts to answer from.

### Generating the context

Run the [Update Prethink context](../../recipes/recipe-catalog/prethink/updateprethinkcontextstarter.md) recipe across your organization. A single run performs architectural discovery, code quality analysis, test coverage mapping, dependency inventory, and CALM architecture generation:

```bash
mod run working-set --recipe io.moderne.prethink.UpdatePrethinkContextStarter -P "targetConfigFiles=CLAUDE.md"
mod git apply working-set --last-recipe-run
```

The results land in a `.moderne/context/` directory inside each repository, as CSV files paired with markdown files that describe their schema. The recipe also updates your agent configuration files (`CLAUDE.md`, `AGENTS.md`, `.cursorrules`, or `.github/copilot-instructions.md`) so agents discover the context on their own.

For the full breakdown of what gets generated, see the [Prethink documentation](../../agent-tools/prethink.md). To run it on the Platform instead, see [running Prethink on the Moderne Platform](./prethink.md); for the CLI walkthrough, see [generating Prethink context with the CLI](../../moderne-cli/how-to-guides/cli-prethink.md).

### Understanding how an agent uses this context

Prethink context is intended to provide a dense collection of generally-useful facts about your repository, created deterministically from a recipe before you ever launch your coding agent session. These facts should be applicable to a wide range of questions, conversations, and activities that you'd normally run through with your agent.

The Prethink recipe updates your agent instructions (`CLAUDE.md` in the command above, but you can change that to match your tool of choice).  This update lets the agent know the next time it reads those instructions that pre-analyzed context is available in the repo and how to use it.  Open one of the projects in your IDE or coding agent tool and take a look at the instructions file.

```bash
open working-set/jeremylong/DependencyCheck/
```

You'll see it is designed to progressively disclose the facts in individual prethink context files so that the agent can find what it's looking for without loading everything into its context window.  Instead, it lets the agent know the context exists, what content is available for this particular repo, and how to use it efficiently to find information:

```markdown
<!-- prethink-context -->
## Moderne Prethink Context

This repository contains pre-analyzed context generated by [Moderne Prethink](https://docs.moderne.io/user-documentation/recipes/prethink). Prethink extracts structured knowledge from codebases to help you work more effectively. The context files in `.moderne/context/` contain analyzed information about this codebase.

**IMPORTANT: Before exploring source code for architecture, dependency, or data flow questions:**
1. ALWAYS check `.moderne/context/` files FIRST
2. Do NOT perform broad codebase exploration (e.g., spawning Explore agents, searching multiple source files) unless CSV context is insufficient
3. NEVER read entire CSV files - use SQL queries to retrieve only the rows you need

...

### Available Context

| Context | Description | Details |
|---------|-------------|--------|
| Api Contracts | Endpoint contracts, DTO schemas, parameters, exception handlers, and fixture examples | [`api-contracts.md`](.moderne/context/api-contracts.md) |
| Architecture | FINOS CALM architecture diagram | [`architecture.md`](.moderne/context/architecture.md) |
| Class Quality Metrics | Per-class cohesion, coupling, and complexity measurements | [`class-quality-metrics.md`](.moderne/context/class-quality-metrics.md) |

...

### Querying Context Files

...
<!-- /prethink-context -->
```

The `<!-- prethink-context -->` markers allow the recipe to inject these Prethink instructions into a repository that already contains agent instructions, or to update a preexisting Prethink instructions block from a prior run.

### Evaluating the context

Now that you have a repository open in your coding agent, it's time to ask some questions and see it use some of the deterministic facts that Prethink has prepared for it.  Here are some prompts to try, covering a broad range of architectural and engineering categories:

#### Orientation: "I just inherited this"

* Give me a 10-minute orientation to this system: what are the modules, what does each one own, and how do they depend on each other? Where are the layer boundaries, and where are they violated?

#### Integration surface: "what does this thing touch?"

* What external services does this codebase call, over what protocols, using which client libraries? Which calls have no visible timeout, retry, or error handling around them?

#### Contracts and data

* If I change a field on a shared data model, what is the blast radius? Show me every DTO and entity that carries it, every endpoint that serializes it, and every external consumer implied.

#### Code health and technical debt

* Build me a ranked technical-debt backlog for the next two quarters. For each item, give the evidence, an effort estimate, and the risk of not doing it.

#### Testing

* What are the 20 riskiest untested methods in this codebase, and why is each one risky? Turn that into a concrete test plan with suggested test classes.

#### Dependencies and consistency

* Is error handling consistent across this codebase? Show me where we swallow exceptions, log-and-rethrow, or use different logging frameworks and inconsistent log levels - then propose a single standard the codebase is already 80% aligned to.

Work through the scenarios with your own agent. Watch the agent transcripts to see when it reaches for Prethink context and which specific files it utilizes.  You should also see it query those context files with DuckDB, SQLlite, or grep to pull out specific information.

**Did the agent reach for the context you expected?** This is visible in the transcript and is a meaningful result on its own. It demonstrates that the context is discoverable and that agents will use it unprompted. Note that the value here does not depend on a recipe existing for the fix. Supplying the data is the point: your agent can act on facts Prethink surfaces even where no recipe performs the change for you.

#### More scenarios to try

If you would rather not pick from a list, draw one at random. Click the deck to turn over a question, then put it to your agent.

<PrethinkQuestionDeck />

### Working across the whole estate

The scenarios above are written for a single repository, which is where most agents naturally operate. The larger motion is to run Prethink across thousands of repositories, aggregate the resulting CSV files, and let agents ask questions across the combined corpus.

That changes who is in the room. Answering "which of our three thousand services call this deprecated endpoint, and which of them have no tests around the call site" brings architects into a conversation that a per-repository agent could never support.

You can also explore the same data visually through [Prethink code quality visualizations](./visualizations.md#prethink-code-quality-visualizations) on the Moderne Platform, which is often the fastest way to bring a non-technical stakeholder along.

The rest of this section walks through how to build that combined corpus.

### Aggregating context across an organization

The goal is a single directory at the root of your organization that describes every repository at once, so an agent started there can answer questions spanning the whole estate without opening a single source file.

The finished layout looks like this:

```
your-org/
├── AGENTS.md                        # points agents at the aggregated context
├── .moderne/context/                # org-wide tables + schema docs
│   ├── class-quality-metrics.csv
│   ├── class-quality-metrics.md
│   ├── code-smells.csv
│   └── ...
├── team-a/service-one/              # individual repositories
└── team-b/service-two/
```

#### Step 1: Running Prethink across the organization

Run the recipe once at the organization root. It processes every repository that has an LST:

```bash
mod run . --recipe io.moderne.prethink.UpdatePrethinkContextStarter

mod git apply . --last-recipe-run
```

The `mod git apply` step matters. Until you apply the results, each repository's `.moderne/context/` directory does not exist on disk, and the aggregation below has nothing to collect.

#### Step 2: Aggregating the data tables

Each repository now holds its own context, but an agent standing at the root cannot reason across them. Use `mod study` to merge each data table across the whole group into one file:

```bash
mod study . --last-recipe-run \
  --data-table io.moderne.prethink.table.ClassQualityMetrics \
  --csv -o .moderne/context/class-quality-metrics.csv
```

`mod study` resolves the last recipe run across the entire repository group rather than per repository, so one command produces one table covering everything.

Repeat for each table you want available at the organization level:

| Context file | Data table |
|--------------|------------|
| `class-quality-metrics.csv` | `io.moderne.prethink.table.ClassQualityMetrics` |
| `method-quality-metrics.csv` | `io.moderne.prethink.table.MethodQualityMetrics` |
| `package-quality-metrics.csv` | `io.moderne.prethink.table.PackageQualityMetrics` |
| `code-smells.csv` | `io.moderne.prethink.table.CodeSmells` |
| `test-mapping.csv` | `io.moderne.prethink.table.TestMapping` |
| `test-gaps.csv` | `io.moderne.prethink.table.TestGaps` |
| `test-quality-issues.csv` | `io.moderne.prethink.table.TestQualityIssues` |
| `scheduled-tasks.csv` | `io.moderne.prethink.table.ScheduledTasks` |
| `project-metadata.csv` | `org.openrewrite.prethink.table.ProjectMetadata` |
| `coding-conventions.csv` | `org.openrewrite.prethink.table.CodingConventions` |
| `error-handling-patterns.csv` | `org.openrewrite.prethink.table.ErrorHandlingPatterns` |
| `dependency-usage.csv` | `org.openrewrite.prethink.table.DependencyUsage` |
| `data-assets.csv` | `org.openrewrite.prethink.table.DataAssets` |
| `service-endpoints.csv` | `org.openrewrite.prethink.table.ServiceEndpoints` |
| `external-service-calls.csv` | `org.openrewrite.prethink.table.ExternalServiceCalls` |
| `messaging-connections.csv` | `org.openrewrite.prethink.table.MessagingConnections` |
| `database-connections.csv` | `org.openrewrite.prethink.table.DatabaseConnections` |
| `security-configuration.csv` | `org.openrewrite.prethink.table.SecurityConfiguration` |
| `server-configuration.csv` | `org.openrewrite.prethink.table.ServerConfiguration` |
| `deployment-artifacts.csv` | `org.openrewrite.prethink.table.DeploymentArtifacts` |
| `service-components.csv` | `org.openrewrite.prethink.table.ServiceComponents` |
| `dependency-list-report.csv` | `org.openrewrite.java.dependencies.table.DependencyListReport` |
| `node-dependencies-in-use.csv` | `org.openrewrite.javascript.table.NodeDependenciesInUse` |

:::warning[The two namespaces are not interchangeable]
Quality and test tables live under `io.moderne.prethink.table`, while the architectural discovery tables live under `org.openrewrite.prethink.table`. Using the wrong prefix fails with `No data tables available` rather than a helpful error, so copy the names above rather than guessing.
:::

A table that produces no rows is skipped rather than written. That is normal: `MessagingConnections` stays empty for an estate with no Kafka or RabbitMQ, for example. Drop empty files rather than shipping them, since an empty table invites an agent to report "none found" as though it were a finding.

#### Step 3: Collecting the schema index files

Alongside each CSV, Prethink writes a markdown file describing what every column means. These are identical across repositories, so copy one representative set into the organization directory:

```bash
find . -path '*/.moderne/context/*.md' -not -path './.moderne/*' -exec \
  cp -n {} .moderne/context/ \;
```

Without these, an agent has column names but no definitions, and will guess at what `lcom4` or `riskScore` mean.

#### Step 4: Writing the organization-level agent config

The recipe generates a per-repository `AGENTS.md` (or `CLAUDE.md`) pointing at that repository's own context. The organization root needs its own file, because an agent standing there is looking at different data with different rules.

**The sections it needs, and what each is for:**

* **Scope** – States that the context covers every repository, not the one the agent happens to be sitting in. Without this an agent will assume the tables describe local code.
* **Discovery rules** – Tells the agent to read context before crawling source, and to query CSV files rather than reading them whole.
* **Repository attribution** – Explains the columns that let a query scope to one repository or compare across many.
* **File format** – Warns about the leading comment lines, which silently break naive parsers.
* **Available context** – The table inventory, so the agent knows what exists without listing the directory.
* **Query patterns** – Two or three worked examples. Agents copy these far more reliably than they invent equivalents.

**Four differences from the per-repository file**, worth knowing if you have both open:

| | Per-repository export | Organization aggregate |
|---|---|---|
| **Scope** | One repository | Every repository in the group |
| **Repository columns** | None | `repositoryOrigin`, `repositoryPath`, `repositoryBranch` |
| **Column naming** | Title case with spaces (`Class name`, `Cyclomatic complexity`) | camelCase (`className`, `cyclomaticComplexity`) |
| **Header position** | Line 1 | Line 4, after three `#` comment lines |

The last two are the ones that bite. A query copied from a repository-level config will not run at the organization level unchanged, and agents will try it anyway.

**A complete example.** Copy this to `AGENTS.md` at your organization root and edit the table inventory and counts to match what your aggregation actually produced. If your developers use Claude Code, name the file `CLAUDE.md` instead - the content is identical.

````markdown
# Agent instructions

## Scope

These instructions cover **every repository in this organization**, analyzed
together. Files in `.moderne/context/` describe the whole estate, not the
repository you happen to be standing in.

## Moderne Prethink context (organization-wide)

This directory contains pre-analyzed context generated by Moderne Prethink and
aggregated across every repository here.

**Before exploring source code for architecture, dependency, quality, or test
questions:**

1. ALWAYS read `.moderne/context/` first.
2. Do NOT crawl repositories to answer a question these tables already answer.
3. NEVER read a whole CSV. Query it and select only the rows you need.

Reading this context is cheap. Crawling source across many repositories is not.
Prefer reading more context over exploring more code.

### Every row is attributed to a repository

| Column | Meaning |
|--------|---------|
| `repositoryOrigin` | SCM host, for example `github.com` |
| `repositoryPath` | Organization and repository, for example `apache/pivot` |
| `repositoryBranch` | Branch the LST was built from |

Filter on `repositoryPath` to scope to one repository, or group by it to compare
repositories. With no filter, a query spans the whole organization.

### File format

Each CSV begins with three `#` comment lines naming the source data table,
followed by the header row. Skip them when parsing:

```bash
# DuckDB
duckdb -c "SELECT * FROM read_csv('.moderne/context/code-smells.csv', skip=3, header=true) LIMIT 5"

# Anything else
tail -n +4 .moderne/context/code-smells.csv | head -5
```

Column names here are camelCase with no spaces (`className`, `lcom4`,
`cyclomaticComplexity`). Per-repository exports use title case with spaces, so
queries are not portable between the two. Check the header first:

```bash
grep -v '^#' .moderne/context/class-quality-metrics.csv | head -1
```

### Available context

| Context | Data | Schema |
|---------|------|--------|
| Class quality metrics | `.moderne/context/class-quality-metrics.csv` | `class-quality-metrics.md` |
| Method quality metrics | `.moderne/context/method-quality-metrics.csv` | `method-quality-metrics.md` |
| Package quality metrics | `.moderne/context/package-quality-metrics.csv` | `package-quality-metrics.md` |
| Code smells | `.moderne/context/code-smells.csv` | `code-smells.md` |
| Test coverage mapping | `.moderne/context/test-mapping.csv` | `test-coverage.md` |
| Test gaps | `.moderne/context/test-gaps.csv` | `test-gaps.md` |
| Coding conventions | `.moderne/context/coding-conventions.csv` | `coding-conventions.md` |
| Error handling patterns | `.moderne/context/error-handling-patterns.csv` | `error-handling.md` |
| Dependencies | `.moderne/context/dependency-list-report.csv` | `dependencies.md` |

The schema files describe every column. Read the schema before querying a table
you have not used before.

### Query patterns

Rank repositories by structural debt:

```sql
SELECT repositoryPath, count(*) AS smells
FROM read_csv('.moderne/context/code-smells.csv', skip=3, header=true)
GROUP BY 1 ORDER BY smells DESC LIMIT 10
```

Scope to a single repository:

```sql
SELECT className, lcom4, cbo
FROM read_csv('.moderne/context/class-quality-metrics.csv', skip=3, header=true)
WHERE repositoryPath = 'apache/pivot'
ORDER BY cbo DESC LIMIT 20
```

Join tables to find untested methods in the least cohesive classes, estate-wide:

```sql
SELECT g.repositoryPath, g.className, g.methodName, g.riskScore, c.lcom4
FROM read_csv('.moderne/context/test-gaps.csv', skip=3, header=true) g
JOIN read_csv('.moderne/context/class-quality-metrics.csv', skip=3, header=true) c
  ON g.repositoryPath = c.repositoryPath AND g.className = c.className
WHERE c.lcom4 > 1
ORDER BY g.riskScore DESC LIMIT 25
```

### When context is not enough

These tables are generated from Lossless Semantic Trees. They are accurate for
what they cover, but they do not contain source code. Read code only once the
context has told you which files are worth opening.

This context is a snapshot. Regenerate it after significant changes.
````

#### What this gets you

An agent started at the organization root can now answer questions no single-repository agent can. On a 27-repository sample this produced 22 tables and roughly 55,000 rows - a few megabytes of structured facts standing in for millions of lines of source.

This is what brings architects into the conversation. "Which of our services have untested complex code in classes that are already falling apart, ranked by repository" is a question worth a planning cycle, and here it is answerable in a single query.

## Phase 2: Running existing PoV use cases through an agent

Moderne's recipe catalog doubles as the use case list. Rather than treating recipes and agents as separate exercises, this phase puts the agent in the driver's seat.

The [standard proof of value guide](./proof-of-value.md) covers roughly twenty recommended recipes across code quality, search and impact analysis, dependency management, security, test modernization, and major migrations. Each of those is a scenario an agent can run end to end.

### Running recipes through the agent

With [skills and the MCP server](../../agent-tools/skills.md) installed, the agent has everything it needs: `search_recipes` to find the right recipe, `learn_recipe` to understand its options, `run_recipe` to execute it, and `query_datatable` to interrogate the results.

Ask the agent in plain language rather than handing it a recipe name. For example:

```
Find every repository in this working set that still uses JUnit 4,
migrate them to JUnit 5, and show me which repositories had test
failures introduced by the migration.
```

What to look for:

* **Did the agent pick the right recipe?** Recipe selection from a natural-language request is a real capability, and a wrong pick is informative too.
* **Did it configure the options correctly?** Most useful recipes have options that materially change the result.
* **Did it interpret the data tables?** Running a recipe is the easy part; turning `SourcesFileResults` into an answer is where the agent earns its place.
* **Did it work across repositories, or stop at one?** This is the habit the tools are meant to break.

### Choosing scenarios

Draw on the recipe catalog more widely than you might expect. It covers security, code quality, testing, dependency hygiene, and impact analysis, not just framework migrations - and the breadth is easy to miss if every scenario you try is an upgrade.

:::warning
A Spring Boot upgrade is the easiest scenario to run and the easiest to misread. It demonstrates the mechanics well, but it will leave you with an impression of the tooling that is narrower than what it does. If you run one, pair it with at least two non-migration scenarios.
:::

Good non-migration starting points:

* **Impact analysis** – "Which repositories would be affected if we removed this API, and who owns them?"
* **Security posture** – [Find and fix vulnerable dependencies](../../recipes/recipe-catalog/java/dependencies/dependencyvulnerabilitycheck.md) across the whole organization, then have the agent summarize by severity and transitivity
* **Code quality** – [Common static analysis](../../recipes/recipe-catalog/staticanalysis/commonstaticanalysis.md) across the estate, with the agent reporting concentration by team
* **Test health** – Pair the Prethink test-gap data from phase 1 with a recipe run to close the gaps it identified

### Closing the loop with Prethink

The strongest demonstration in this phase combines it with phase 1. Have the agent regenerate Prethink context after making changes, read the updated quality metrics, and refactor based on what it finds. See [incremental Prethink via MCP](../../agent-tools/prethink.md#incremental-prethink-via-mcp) for how this feedback loop works.

## Phase 3: Remediating vulnerabilities with an agent

This phase tends to be the one that changes how teams think about the problem.

### The core idea

A scanner finds one instance of a vulnerability. That is the beginning of the work, not the end.

Put bluntly: **your scanner behaves more like an attacker than a defender**. It tells you about one place a pattern appears. The disclosures keep coming, and each time you face the same choice - generalize the pattern and find every occurrence, or throw inference at the whole estate and hope.

The loop looks like this:

1. **Start from a finding.** A scanner such as Mythos reports a vulnerability in one repository.
2. **Generalize the pattern.** The agent turns that single finding into [Trigrep](../../agent-tools/trigrep.md) queries that describe the shape of the problem rather than the one instance of it.
3. **Find every occurrence.** Those queries run across the entire estate in under a second, producing a complete list rather than a sample.
4. **Write the fix.** The agent writes an OpenRewrite recipe that remediates the pattern - see [phase 4](#phase-4-writing-new-recipes-with-an-agent).
5. **Fix it everywhere.** The recipe runs across every affected repository at once.

### Why this compounds at scale

Every step of that loop gets harder as the estate grows, and every step is where the tooling earns its keep:

* **How do you generalize across six thousand repositories?** Manual pattern-writing does not survive contact with that many framework variations.
* **How do you know the answer is complete?** A grep that misses a subclass is worse than no answer, because it produces false confidence. Trigrep's semantic filters - `extends:`, `implements:`, `call:` - resolve through the LST rather than matching text.
* **How do you fix it everywhere once you know?** A recipe applies the same transformation across every match, with a reviewable diff per repository.

### Seeing it on real code

You can watch this play out right now, without setting anything up. The [Code Genome Project](https://codegenomeproject.org) indexes public open source into LSTs and exposes the same Trigrep search your agent uses, so it is a good rehearsal ground for the generalization step.

Take Text4Shell ([CVE-2022-42889](https://security.apache.org/blog/cve-2022-42889/)) in Apache Commons Text. Three searches, each narrowing the last.

**1. Text search finds the library, not its users.**

```
StringSubstitutor.replace
```

[Run this query](https://codegenomeproject.org/?q=StringSubstitutor.replace). The top hit is `StringSubstitutor.java` inside Commons Text itself - the *declaration*. That is the library defining the method, not anyone calling it.

**2. A type-aware search finds real call sites.**

```
calls:org.apache.commons.text.StringSubstitutor.replace
```

[Run this query](https://codegenomeproject.org/?q=calls%3Aorg.apache.commons.text.StringSubstitutor.replace). Now you get usage, in code like this:

```java
substitutor = new StringSubstitutor(new PropertyLookup(properties));
...
return substitutor.replace(text);
```

Note what is not in that snippet: **the string `StringSubstitutor.replace` never appears.** The receiver is a variable called `substitutor`, so a grep for the method name walks straight past it. The `calls:` filter finds it by resolving the receiver's type through the LST instead of matching characters.

:::warning[These results are candidates, not vulnerabilities]
Everything this query returns is a call site, which is where triage *starts*. Text4Shell requires two further conditions: the substitutor must have been built with `StringSubstitutor.createInterpolator()`, which enables the `script:` lookup, and untrusted input must reach `replace()`. A substitutor constructed with a custom lookup, as in the snippet above, is not the vulnerable pattern. Only Commons Text 1.5 through 1.9 are affected; 1.10.0 disabled the risky interpolators.

Reading a call-site list as a vulnerability list is how scanners generate false positives and how security teams lose trust in the output.
:::

**3. Narrow to the condition that actually matters.**

```
calls:org.apache.commons.text.StringSubstitutor.createInterpolator
```

[Run this query](https://codegenomeproject.org/?q=calls%3Aorg.apache.commons.text.StringSubstitutor.createInterpolator). At the time of writing it returns nothing - and the Code Genome Project says so precisely: *"Zero - and it's a verified zero. The type graph was resolved from the LST."*

That is the payoff. A grep returning nothing tells you only that some characters were absent. A resolved type graph returning nothing tells you the dangerous entry point is genuinely not called anywhere in the corpus. Being able to prove a negative is what turns "we think we're fine" into an answer you can put in front of an auditor.

The sequence - broad call sites first, then narrowing to the precondition that makes them exploitable - is exactly the reasoning you want to see your agent perform in [phase 3](#phase-3-remediating-vulnerabilities-with-an-agent).

:::tip
The same filters work against your own code once you have synced an organization: `mod search . calls:org.apache.commons.text.StringSubstitutor.createInterpolator`. Rehearse on the public corpus, then point it at your estate.
:::

### Practicing safely

Do not practice this loop against your own production vulnerabilities on day one. Use a deliberately vulnerable "goat" repository instead, so a mistake costs nothing and you can repeat the exercise as often as you like.

Commonly used practice targets:

| Project | Repository | License | Notes |
|---------|------------|---------|-------|
| OWASP VulnerableApp | [SasanLabs/VulnerableApp](https://github.com/SasanLabs/VulnerableApp) | Apache-2.0 | Java/Gradle, purpose-built for scanner benchmarking. A good default if you work in the JVM ecosystem. |
| CWE-Bench-Java | [iris-sast/cwe-bench-java](https://github.com/iris-sast/cwe-bench-java) | MIT | 120 real Java CVEs with build information, though no proof-of-vulnerability tests. |
| SAP Project KB | [SAP/project-kb](https://github.com/SAP/project-kb) | Apache-2.0 | A CVE-to-fix-commit knowledge base. Statements only, not runnable code. |
| OWASP Juice Shop | [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop) | MIT | Node/TypeScript, widely used for security training. |
| Snyk goof / nodejs-goof | [snyk-labs/goof](https://github.com/snyk-labs/goof) | Apache-2.0 | Node. Small and quick to stand up. |
| WebGoat | [WebGoat/WebGoat](https://github.com/WebGoat/WebGoat) | GPL-2.0-or-later | A runnable Java application, but carries the most restrictive license here. |
| Vul4J | [tuhh-softsec/vul4j](https://github.com/tuhh-softsec/vul4j) | GPL-3.0 | A benchmarking framework rather than an application. |

:::warning
Licenses vary across these projects and several are copyleft. Have whoever handles open-source licensing at your organization confirm a project is acceptable before you pull it in. Note that `snyk-labs/java-goof` declares MIT in its `pom.xml` file only, with no `LICENSE` file at the repository root.
:::

If your organization blocks cloning from GitHub, or blocks intentionally vulnerable code from passing through your artifact repository, you do not need an external clone at all. Ask your agent to reproduce a known-vulnerable pattern inside a scratch project in your own environment and practice against that.

### Exercise: triage Text4Shell on a practice working set

Goat apps alone are too small to rehearse the part that actually matters, which is separating real exposure from noise across many repositories. Mix them with ordinary open source instead.

#### Part 1: triage by hand

Work the funnel yourself first, so you know what good looks like before you ask an agent for it. The counts below come from a real run of this working set; yours will differ as these projects change.

**Start where a text search would.**

```bash
mod search . StringSubstitutor.replace
```

*27 matches in 3 files.* Look at what they are: the declaration inside Commons Text and a couple of references. Almost none of this is code that calls the method.

**Now ask the type graph for call sites.**

```bash
mod search . calls:org.apache.commons.text.StringSubstitutor.replace
```

*229 matches in 25 files.* Nearly ten times as many, because the receiver is usually a variable and the literal method name never appears. This is your candidate set, not your vulnerability list.

**Separate the library from its consumers.** Point the same query at individual repositories:

```bash
mod search ./apache/commons-text  calls:org.apache.commons.text.StringSubstitutor.replace
mod search ./dropwizard           calls:org.apache.commons.text.StringSubstitutor.replace
mod search ./jeremylong/DependencyCheck calls:org.apache.commons.text.StringSubstitutor.replace
```

Commons Text accounts for 204 of those matches in its own source and tests. The actual consumers are far smaller: Dropwizard 17, Commons Configuration 4, Struts 2, JDBI 1, and DependencyCheck 1. Roughly a tenth of the candidate set is downstream code.

DependencyCheck is worth pausing on. Its single call site is in `InterpolationUtil.java`, and a literal search for `StringSubstitutor.replace` inside that repository returns **nothing at all** - the code reads `substitutor.replace(text)`. One consumer, invisible to grep, found only because the type graph resolved the receiver.

**Finally, ask the question that decides exposure.** Text4Shell needs the interpolator factory, not just any substitutor:

```bash
mod search . calls:org.apache.commons.text.StringSubstitutor.createInterpolator
```

*52 matches in 12 files* - and every one is inside Commons Text's own test suite, in files like `StringSubstitutorWithInterpolatorStringLookupTest.java` and `OssFuzzTest.java`. Confirm it by running the same query against each consumer: Dropwizard, JDBI, Struts, Commons Configuration and all three goat apps return nothing.

So the finding is: **no consumer in this working set is exposed.** You went from 228 candidate call sites to a defensible negative in four queries, and you can name exactly which condition rules each one out.

That negative is the point. A grep that finds nothing tells you a string was absent. A resolved type graph that finds nothing tells you the dangerous entry point is not reachable - which is what an auditor is actually asking.

#### Part 2: hand the same job to your agent

Now open your agent in the same directory and give it the goal rather than the queries:

```
This working set has 21 Java repositories. Apache Commons Text had a remote
code execution vulnerability, CVE-2022-42889 (Text4Shell). Work out whether
any repository here is genuinely exposed, and show your reasoning. Do not
report a call site as a vulnerability unless the conditions for exploitation
are actually met.
```

Watch for the behaviors from [what to look for](#what-to-look-for):

* **Does it reach for indexed search at all,** or start grepping and reading files? Check the transcript for `trigrep_search`, `find_methods`, or `mod search`.
* **Does it distinguish call sites from exposure?** An agent that reports "found 228 usages, you are vulnerable" has failed the exercise, and failed it in the way real scanners do.
* **Does it find the interpolator condition on its own,** or does it need to be told that `createInterpolator` is what matters?
* **Does it notice the hits are the library's own tests** rather than downstream code?
* **Does it check versions too?** Only Commons Text 1.5 through 1.9 are affected. A complete answer cross-references the dependency inventory as well as the call graph.

Run it more than once, and ideally with more than one agent. [Agents are nondeterministic](#why-evaluating-agent-tooling-is-hard), so a single clean transcript is an anecdote. What you want to know is whether the tooling makes the correct reasoning reachable often enough to trust.

#### Extending the exercise

The goat apps are seeded with plenty more to find. These return results on the three goat repositories alone:

```bash
mod search ./goat-apps calls:java.lang.Runtime.exec
mod search ./goat-apps calls:java.sql.Statement.executeQuery
mod search . '/MessageDigest\.getInstance\("(MD5|SHA-1)"\)/'
```

:::tip[Parentheses need care in queries]
The CLI parses some punctuation, so a bare `mod search . e.printStackTrace()` fails. Drop the parentheses (`mod search . printStackTrace`) or wrap the pattern as a regex (`mod search . '/printStackTrace\(\)/'`).
:::

## Phase 4: Writing new recipes with an agent

A standard proof of value usually includes a recipe authoring workshop. Here you spend that hour differently: **your own agent writes the recipe, and one of your developers drives it.**

### Why this replaces the workshop

The most convincing result available in this entire process is one of your own developers - with no OpenRewrite training - producing a sophisticated, working recipe in a single sitting.

You can verify that claim on the spot rather than taking it on trust. It is also the natural conclusion of phase 3, where the recipe is the fix for a pattern your agent has just generalized.

### How it works

The [Moderne skills](../../agent-tools/skills.md) teach agents the parts of recipe development they do not know out of the box - visitor patterns, LST structure, type matching, and testing idioms:

* **`create-recipe`** – Choosing between declarative YAML, Refaster templates, and imperative Java, then following OpenRewrite conventions
* **`create-organization`** – Building a working set of real repositories to test against
* **`run-recipe`** – Running the recipe, comparing predicted matches against actual results, and diagnosing why something did not match
* **`analyze-impact`** – Turning the run data into a report your stakeholders can read

The `run-recipe` skill is the one that makes this work in an hour. It gives the agent an iterative loop: predict which files should change, run the recipe, compare predictions against results, diagnose the gap, fix, and repeat.

### Choosing a target

Pick a target from your own backlog rather than a synthetic exercise. Good candidates:

* An internal API that was deprecated and never fully migrated off
* A logging or error-handling convention the team keeps failing to enforce in review
* The vulnerability pattern generalized in [phase 3](#phase-3-remediating-vulnerabilities-with-an-agent)
* A pattern surfaced by the Prethink code health scenarios in [phase 1](#phase-1-building-and-evaluating-prethink-context)

The last two are the strongest, because they close the loop on work you have already watched the agent do.

### Exercise: find a vulnerability search cannot express, then fix it

Phase 3 showed what type-aware search can do. This exercise starts where it runs out.

Java deserialization is dangerous when an application reads an object stream it does not control and places no restriction on which classes may be reconstructed. The trouble is that the vulnerability is an **absence**. There is no method call to match, no type to look for, and the missing guard may sit in a different method from the read. Search can tell you where `readObject` is called; it cannot tell you whether anything is protecting it.

Here is the shape, from WebGoat's `InsecureDeserializationTask`:

```java
public AttackResult completed(@RequestParam String token) throws IOException {
    b64token = token.replace('-', '+').replace('_', '/');
    try (ObjectInputStream ois =
            new ObjectInputStream(new ByteArrayInputStream(Base64.getDecoder().decode(b64token)))) {
        Object o = ois.readObject();
        if (!(o instanceof VulnerableTaskHolder)) {
            // ...
        }
    }
}
```

Three things defeat a cheap check here:

* **The input is transformed on the way in.** A request parameter goes through two `replace` calls and a Base64 decode before it reaches the stream. Nothing in the deserialization statement mentions a request.
* **The protection that is missing could be anywhere in the class.** `setObjectInputFilter` or a `resolveClass` override would make this safe, and neither has to be near the read.
* **There is a decoy.** The `instanceof` check reads like validation, but it runs *after* `readObject` has already reconstructed the object graph and any gadget chain in it. A reviewer scanning for "is the result type-checked?" marks this file safe.

:::info[Nothing in the catalog does this]
OpenRewrite ships taint-based detectors for fourteen vulnerability classes, but nothing for unvalidated deserialization: no recipe matches on `setObjectInputFilter` or `resolveClass`. Have your agent confirm that before it starts. This is a genuine gap, which is what makes it a test of authoring rather than recall.
:::

#### Step 1: Clone the starter

```bash
git clone https://github.com/moderneinc/rewrite-recipe-starter
cd rewrite-recipe-starter
```

Point your agent at `ClassHierarchy.java`, `table/ClassHierarchyReport.java`, and `ClassHierarchyTest.java` first. That trio is the data table pattern it needs.

#### Step 2: Have the agent write the detection

```
Using this rewrite-recipe-starter project, write an OpenRewrite recipe that
finds calls to ObjectInputStream.readObject and readUnshared, and reports
those whose enclosing class does nothing to constrain deserialization -
meaning the class neither calls setObjectInputFilter anywhere nor overrides
resolveClass or resolveProxyClass.

Emit a data table with one row per unguarded read: source path, enclosing
class, enclosing method, which guard was found, and whether the enclosing
method takes a parameter bound to an HTTP request (@RequestParam,
@PathVariable, @RequestBody, @QueryParam and similar), since that makes the
read directly reachable by an attacker.

Write tests for: an unguarded read where a type check happens after
readObject; a class where the filter is installed in a different method from
the read; a class that overrides resolveClass; a request-bound method; and
an internal method with no request binding.
```

The second and third tests are the ones that matter. A recipe that only inspects the enclosing method will flag a properly guarded class, and false positives on safe code are how a security recipe loses its audience.

Two pieces of friction to expect. `./gradlew build` fails until new recipes are registered, which `./gradlew recipeCsvGenerate` fixes - run it as its own invocation, since combining it with a publish trips a Gradle task-ordering check. And publishing for the CLI works most reliably through the local Maven repository:

```bash
./gradlew recipeCsvGenerate
./gradlew publishToMavenLocal
mod config recipes jar install com.yourorg:rewrite-recipe-starter:0.1.0-SNAPSHOT
```

Then run it:

```bash
mod run . --recipe com.yourorg.FindUnvalidatedObjectDeserialization
mod study . --last-recipe-run --data-table com.yourorg.table.DeserializationReport --csv -o deser.csv
```

#### What this produces

On the working set from phase 3, the recipe found **136 unguarded reads across 32 repositories**:

| Repository | Unguarded reads |
|------------|-----------------|
| apache/commons-collections | 53 |
| apache/commons-math | 20 |
| apache/commons-io | 17 |
| apache/struts | 10 |
| apache/commons-lang | 9 |
| others | 27 |

Taken alone that number is close to useless. It is an attack-surface census, and a library implementing `Serializable` is supposed to call `readObject`. Reporting 136 vulnerabilities would be exactly the false-positive flood that makes teams stop reading security output.

The request-facing column is what makes it actionable. Of those 136 reads, **one** sits in a method bound to an HTTP request:

```
WebGoat/WebGoat | InsecureDeserializationTask.java | completed
```

That is the planted vulnerability, found on its own, from 136 candidates down to one, without anybody knowing in advance which file to look at.

#### Step 3: Turn it into a fix

```
Now write a second recipe that adds a deny-all ObjectInputFilter to
ObjectInputStream instances declared in a try-with-resources, where the
enclosing class has no existing guard. Insert the setObjectInputFilter call
as the first statement in the try block.

Deny everything rather than guessing an allowlist, and leave a TODO for a
human to widen it. Do not modify streams that arrive as parameters or are
built elsewhere - report those instead. Add before-and-after tests plus a
test that a class with an existing filter is left alone.

Note that inserting a statement that references an existing variable needs a
typed template placeholder, not string substitution.
```

That last line saves a debugging cycle. Substituting the variable name as a string produces `LST contains missing or invalid type information`, because the inserted identifier carries no type. The template needs `#{any(java.io.ObjectInputStream)}` with the actual identifier node passed as the argument.

Run against WebGoat, the fix changes exactly one file:

```java
 try (ObjectInputStream ois =
         new ObjectInputStream(new ByteArrayInputStream(Base64.getDecoder().decode(b64token)))) {
+    ois.setObjectInputFilter(ObjectInputFilter.Config.createFilter("!*"));
     before = System.currentTimeMillis();
     Object o = ois.readObject();
```

Denying everything will break the lesson, which is correct behavior. The recipe cannot know which classes this application legitimately accepts, so it fails closed and asks a human. A recipe that invented an allowlist would be more convenient and considerably worse.

#### What to look for

* **Does it find the guard in another method?** This is the difference between reasoning about a class and pattern-matching a statement.
* **Does it avoid flagging guarded classes?** Check the `resolveClass` case specifically.
* **Did the agent separate census from finding,** or hand you 136 rows and call them vulnerabilities?
* **Does the fix fail closed?** An agent that generates a permissive filter to keep tests passing has missed the point.
* **Did it write tests first,** and do the negative cases genuinely assert nothing was reported?
* **Does it run clean across every repository,** not just the one it iterated against?

:::note
The 136 reads are candidates. Being unguarded is necessary for exploitation but not sufficient - the stream also has to be attacker-influenced, which is why the request-facing column exists and why a human still reviews the shortlist.
:::

<details>
<summary>The two recipes, as actually written and tested</summary>

Produced by following the prompts above against `rewrite-recipe-starter`. Both pass their tests - five for the detection, three for the fix - and run clean across a 32-repository working set. Included so you can compare what your agent writes against something known to work.

**`table/DeserializationReport.java`**

```java
package com.yourorg.table;

import lombok.Value;
import org.openrewrite.Column;
import org.openrewrite.DataTable;
import org.openrewrite.Recipe;

public class DeserializationReport extends DataTable<DeserializationReport.Row> {

    public DeserializationReport(Recipe recipe) {
        super(recipe,
                "Java deserialization call sites",
                "Every ObjectInputStream read, and whether the enclosing class guards it.");
    }

    public enum Guard { NONE, INPUT_FILTER, RESOLVE_CLASS_OVERRIDE }

    @Value
    public static class Row {
        @Column(displayName = "Source path", description = "File containing the read.")
        String sourcePath;

        @Column(displayName = "Enclosing class", description = "Class containing the read.")
        String enclosingClass;

        @Column(displayName = "Enclosing method", description = "Method containing the read.")
        String enclosingMethod;

        @Column(displayName = "Guard", description = "Protection found on the enclosing class.")
        Guard guard;

        @Column(displayName = "Request facing",
                description = "True when the enclosing method takes a web request parameter.")
        boolean requestFacing;
    }
}
```

**`FindUnvalidatedObjectDeserialization.java`** - the detection. `guardOn` is the part that cannot be a search: it scans the whole class for a guard that may be nowhere near the read.

```java
package com.yourorg;

import com.yourorg.table.DeserializationReport;
import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Preconditions;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.search.UsesMethod;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.JavaSourceFile;
import org.openrewrite.java.tree.Statement;

import java.util.concurrent.atomic.AtomicBoolean;

@Value
@EqualsAndHashCode(callSuper = false)
public class FindUnvalidatedObjectDeserialization extends Recipe {

    private static final MethodMatcher READ_OBJECT =
            new MethodMatcher("java.io.ObjectInputStream readObject()", true);
    private static final MethodMatcher READ_UNSHARED =
            new MethodMatcher("java.io.ObjectInputStream readUnshared()", true);
    private static final MethodMatcher SET_FILTER =
            new MethodMatcher("java.io.ObjectInputStream setObjectInputFilter(..)", true);

    private static final String[] REQUEST_ANNOTATIONS = {
            "RequestParam", "PathVariable", "RequestBody", "RequestHeader",
            "QueryParam", "FormParam", "PathParam", "HeaderParam", "CookieParam"
    };

    transient DeserializationReport report = new DeserializationReport(this);

    String displayName = "Find unvalidated object deserialization";

    String description = "Reports `ObjectInputStream.readObject` and `readUnshared` calls whose enclosing " +
                         "class installs no `ObjectInputFilter` and does not override `resolveClass`, and " +
                         "notes whether the enclosing method is reachable from a web request.";

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return Preconditions.check(
                Preconditions.or(new UsesMethod<>(READ_OBJECT), new UsesMethod<>(READ_UNSHARED)),
                new JavaIsoVisitor<ExecutionContext>() {

                    @Override
                    public J.MethodInvocation visitMethodInvocation(J.MethodInvocation method, ExecutionContext ctx) {
                        J.MethodInvocation m = super.visitMethodInvocation(method, ctx);
                        if (!READ_OBJECT.matches(m) && !READ_UNSHARED.matches(m)) {
                            return m;
                        }

                        J.ClassDeclaration clazz = getCursor().firstEnclosing(J.ClassDeclaration.class);
                        J.MethodDeclaration enclosing = getCursor().firstEnclosing(J.MethodDeclaration.class);
                        JavaSourceFile cu = getCursor().firstEnclosing(JavaSourceFile.class);

                        DeserializationReport.Guard guard = guardOn(clazz);
                        if (guard != DeserializationReport.Guard.NONE) {
                            return m;   // the class constrains what it will accept
                        }

                        report.insertRow(ctx, new DeserializationReport.Row(
                                cu == null ? "unknown" : cu.getSourcePath().toString(),
                                clazz == null ? "unknown" : clazz.getSimpleName(),
                                enclosing == null ? "unknown" : enclosing.getSimpleName(),
                                guard,
                                isRequestFacing(enclosing)));
                        return m;
                    }
                });
    }

    private static DeserializationReport.Guard guardOn(J.ClassDeclaration clazz) {
        if (clazz == null) {
            return DeserializationReport.Guard.NONE;
        }
        AtomicBoolean filter = new AtomicBoolean(false);
        AtomicBoolean resolve = new AtomicBoolean(false);

        new JavaIsoVisitor<Integer>() {
            @Override
            public J.MethodInvocation visitMethodInvocation(J.MethodInvocation mi, Integer p) {
                if (SET_FILTER.matches(mi)) {
                    filter.set(true);
                }
                return super.visitMethodInvocation(mi, p);
            }

            @Override
            public J.MethodDeclaration visitMethodDeclaration(J.MethodDeclaration md, Integer p) {
                String n = md.getSimpleName();
                if ("resolveClass".equals(n) || "resolveProxyClass".equals(n)) {
                    resolve.set(true);
                }
                return super.visitMethodDeclaration(md, p);
            }
        }.visit(clazz, 0);

        if (filter.get()) {
            return DeserializationReport.Guard.INPUT_FILTER;
        }
        if (resolve.get()) {
            return DeserializationReport.Guard.RESOLVE_CLASS_OVERRIDE;
        }
        return DeserializationReport.Guard.NONE;
    }

    private static boolean isRequestFacing(J.MethodDeclaration method) {
        if (method == null) {
            return false;
        }
        for (Statement p : method.getParameters()) {
            if (!(p instanceof J.VariableDeclarations)) {
                continue;
            }
            for (J.Annotation a : ((J.VariableDeclarations) p).getLeadingAnnotations()) {
                for (String req : REQUEST_ANNOTATIONS) {
                    if (req.equals(a.getSimpleName())) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
```

**`AddObjectInputFilter.java`** - the fix. Note the typed `#{any(...)}` placeholder.

```java
package com.yourorg;

import lombok.EqualsAndHashCode;
import lombok.Value;
import org.openrewrite.ExecutionContext;
import org.openrewrite.Preconditions;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaIsoVisitor;
import org.openrewrite.java.JavaParser;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.search.UsesMethod;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.Statement;

import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

@Value
@EqualsAndHashCode(callSuper = false)
public class AddObjectInputFilter extends Recipe {

    private static final MethodMatcher READ_OBJECT =
            new MethodMatcher("java.io.ObjectInputStream readObject()", true);
    private static final MethodMatcher SET_FILTER =
            new MethodMatcher("java.io.ObjectInputStream setObjectInputFilter(..)", true);

    String displayName = "Add an `ObjectInputFilter` to unguarded deserialization";

    String description = "Adds a deny-all `ObjectInputFilter` to `ObjectInputStream` instances declared in a " +
                         "try-with-resources whose enclosing class installs no filter and does not override " +
                         "`resolveClass`. The filter denies everything, because the set of classes an " +
                         "application should accept cannot be inferred.";

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return Preconditions.check(new UsesMethod<>(READ_OBJECT), new JavaIsoVisitor<ExecutionContext>() {

            @Override
            public J.ClassDeclaration visitClassDeclaration(J.ClassDeclaration classDecl, ExecutionContext ctx) {
                if (hasGuard(classDecl)) {
                    return classDecl;   // already constrained; leave it alone
                }
                return super.visitClassDeclaration(classDecl, ctx);
            }

            @Override
            public J.Try visitTry(J.Try tryable, ExecutionContext ctx) {
                J.Try t = super.visitTry(tryable, ctx);
                if (t.getResources() == null || t.getResources().isEmpty() || t.getBody() == null) {
                    return t;
                }

                J.Identifier stream = objectInputStreamResource(t.getResources());
                if (stream == null) {
                    return t;
                }

                List<Statement> stmts = t.getBody().getStatements();
                if (!stmts.isEmpty() && stmts.get(0).printTrimmed(getCursor()).contains("setObjectInputFilter")) {
                    return t;
                }

                maybeAddImport("java.io.ObjectInputFilter");

                return JavaTemplate.builder(
                                "#{any(java.io.ObjectInputStream)}" +
                                ".setObjectInputFilter(ObjectInputFilter.Config.createFilter(\"!*\"));")
                        .imports("java.io.ObjectInputFilter")
                        .javaParser(JavaParser.fromJavaVersion())
                        .build()
                        .apply(updateCursor(t), t.getBody().getCoordinates().firstStatement(), stream);
            }
        });
    }

    private static J.Identifier objectInputStreamResource(List<J.Try.Resource> resources) {
        for (J.Try.Resource r : resources) {
            if (r.getVariableDeclarations() instanceof J.VariableDeclarations) {
                J.VariableDeclarations vd = (J.VariableDeclarations) r.getVariableDeclarations();
                if (vd.getTypeExpression() != null
                    && vd.getTypeExpression().printTrimmed().endsWith("ObjectInputStream")
                    && !vd.getVariables().isEmpty()) {
                    return vd.getVariables().get(0).getName();
                }
            }
        }
        return null;
    }

    private static boolean hasGuard(J.ClassDeclaration clazz) {
        AtomicBoolean guarded = new AtomicBoolean(false);
        new JavaIsoVisitor<Integer>() {
            @Override
            public J.MethodInvocation visitMethodInvocation(J.MethodInvocation mi, Integer p) {
                if (SET_FILTER.matches(mi)) {
                    guarded.set(true);
                }
                return super.visitMethodInvocation(mi, p);
            }

            @Override
            public J.MethodDeclaration visitMethodDeclaration(J.MethodDeclaration md, Integer p) {
                if ("resolveClass".equals(md.getSimpleName()) || "resolveProxyClass".equals(md.getSimpleName())) {
                    guarded.set(true);
                }
                return super.visitMethodDeclaration(md, p);
            }
        }.visit(clazz, 0);
        return guarded.get();
    }
}
```

**A testing note.** Asserting that a recipe reported *nothing* cannot be done with `spec.dataTable(...)`, which throws when the table was never created. Use `afterRecipe` instead:

```java
spec -> spec.afterRecipe(run ->
  assertThat(run.getDataTableRows(DeserializationReport.class)).isEmpty())
```

</details>

## Looking beyond the proof of value

Once your team has carried a scenario through all four phases by hand, the natural next step is to hand the whole sequence to an agent and let it run end to end without supervision.

Doing the work by hand first is what makes that worthwhile. Because your team knows what each step should produce, an unattended run becomes something you can check rather than something you have to trust.

### What this proof of value produces

The output of an agent tools PoV is **a plan**, not a savings number.

Over roughly three weeks you exercise a set of capabilities against your own code. What comes out the other side is a prioritized picture of your estate that only your codebase could produce: where test coverage is thin, which packages are structurally decaying, which vulnerabilities generalize beyond the one your scanner found, and what to tackle first.

That readout is the deliverable. It is a body of work you can take straight into planning.

## Next steps

* [Review the proof of value prerequisites](./proof-of-value-prerequisites.md) to make sure your environments are ready
* [Read the standard proof of value process](./proof-of-value.md) for the recipe scenarios referenced in phase 2
* [Learn about Moderne Prethink](../../agent-tools/prethink.md) for the full breakdown of the context it generates
* [Explore Moderne Trigrep](../../agent-tools/trigrep.md) for the search syntax used in phase 3
* [Set up the Moderne MCP server](../../agent-tools/mcp/overview.md) to give agents semantic tools, or use the [remote MCP server](../../agent-tools/mcp/remote-server.md) against repositories already ingested into your tenant
