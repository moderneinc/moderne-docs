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

* [Install the CLI and agent tools](#install-the-tools-youll-use) into every agent your teams already use
* Turn on [LST format version 3](#why-lst-version-3-matters-for-agents) before building anything
* [Connect the remote MCP servers](#connecting-the-remote-mcp-servers)
* Build your working set of repositories

**Phase 1 - Build context for your agents**

* Run Prethink across your organization and apply the results
* Work through [curated questions](#more-scenarios-to-try) with your agent, against your own code
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

<PrethinkQuestionDeck>

* **Architecture** — Are there package-level dependency cycles? Which packages sit furthest from the main sequence, and what would it take to break the worst cycle?
* **Architecture** — Which packages are the architectural core — the ones with the highest afferent coupling — and what is the risk profile of changing any of them?
* **Architecture** — Which packages sit furthest from the main sequence, and what single refactor moves the needle most?
* **Architecture** — What are the ground rules for contributing to this repository?
* **Architecture** — Where should a new external integration live in this codebase?
* **Architecture** — I have been away for six months. What changed architecturally that I should know about?
* **Architecture** — Draw me the module dependency graph and point out the three edges most worth deleting.
* **Architecture** — Which modules are the safest candidates to extract into a separate service, and why?
* **Architecture** — What is the blast radius of deleting or restructuring the most-depended-on package?
* **Code health** — If I could only read ten files in this repository, which ten and in what order?
* **Architecture** — What is this project actually called, what modules does it ship, and what are their build coordinates?
* **Architecture** — Is the layering respected, or do lower layers call upward into higher ones?
* **Dependencies** — Which architectural layer carries the most third-party surface area?
* **Error handling** — What is the dominant error-handling strategy in each module, and which module is the outlier?
* **Architecture** — Something is failing at 3am. Given this codebase, where do I look first?
* **Architecture** — Summarize what this system does in one page, written for a non-engineer stakeholder.
* **Conventions** — Where does this codebase disagree with its own documentation?
* **Architecture** — Draw the system context diagram: what lives inside this system and what does it talk to outside?
* **Architecture** — Which packages concentrate the most complexity per class?
* **Architecture** — Give me a 10-minute orientation to this system: what are the modules, what does each own, and how do they depend on each other? Where are the layer boundaries, and where are they violated?
* **Architecture** — If a new engineer joined tomorrow, what should they read first, in what order, to become productive?
* **Architecture** — Trace the end-to-end data flows through this system.
* **Error handling** — Propose an exception hierarchy that fits how this codebase already works.
* **Conventions** — What would you fix before onboarding five new engineers onto this codebase?
* **Code health** — Which methods breach every complexity threshold at once — cyclomatic, cognitive, nesting, and parameter count?
* **Code health** — Which methods have high Halstead volume relative to their line count — dense logic hiding in small functions?
* **Code health** — Which methods have the deepest nesting and the longest parameter lists?
* **Code health** — Is complexity concentrated in a few hotspots or spread evenly across the codebase? Show me the distribution, not just the top offenders.
* **Code health** — Which classes are large but simple (safe to leave alone) versus small but complex (genuinely dangerous)?
* **Runtime** — How is this service configured to run?
* **Runtime** — What runs on a schedule here, and what does each job touch?
* **Runtime** — How does this codebase get deployed?
* **Architecture** — How big is this codebase really — how many modules, classes, and how much complexity?
* **Architecture** — What is the full tech stack here, top to bottom?
* **Code health** — Do the most complex methods also violate naming conventions — is bad code bad in more than one way?
* **Conventions** — How much code would a codebase-wide style migration actually touch?
* **Code health** — Which methods are long enough that they almost certainly do more than one thing?
* **Dependencies** — Which libraries are used by exactly one package — good candidates for isolation?
* **Architecture** — Do the most unstable packages also depend on the most third-party code?
* **Conventions** — I need to add a new feature. Where does it belong, and what conventions — naming, package layout, error handling, test structure — will reviewers expect me to follow?
* **Conventions** — What naming conventions does this codebase follow, and where is it inconsistent with itself?
* **Conventions** — Are imports organized consistently, and is documentation coverage uniform across the codebase?
* **Error handling** — Is error handling consistent across architectural layers, or does each layer do its own thing?
* **Code health** — Which files are outliers — unlike anything else in this codebase?
* **Code health** — Estimate the refactoring effort, in developer-days, for the top ten technical-debt items.
* **Code health** — Give me a three-phase refactoring roadmap for this codebase.
* **Code health** — What are the cheapest high-impact cleanups available to us this sprint?
* **Testing** — Is test coverage correlated with complexity here, or inversely correlated?
* **Code health** — What is the single most surprising thing about this codebase?
* **Error handling** — Do the most complex methods also have the messiest error handling?
* **Code health** — If I had one week to reduce maintenance risk, which five files should I touch and what should I do to each?
* **Code health** — Express our technical debt as a single number, and spell out every caveat that number hides.
* **Code health** — Where do the metrics disagree about the same class — one says healthy, another says trouble?
* **Code health** — Where is this codebase healthiest — what should I not touch?
* **Code health** — How does complexity in the test code compare to complexity in production code?
* **Code health** — Which code is complex, untested, and architecturally central all at once?
* **Code health** — What would it cost to get this codebase to meaningful test coverage?
* **Domain & data** — What is the core vocabulary of this domain, judging by its data assets?
* **Conventions** — Generate a lint configuration that matches the conventions this codebase already follows.
* **Error handling** — How many distinct logging frameworks are in use here, and what would consolidating onto one cost?
* **Dependencies** — What blocks this codebase from moving to a newer language version?
* **Code health** — Which methods are genuinely hard to maintain — high cyclomatic and cognitive complexity, deep nesting, long parameter lists? Which would you refactor first for the best risk-adjusted payoff?
* **Testing** — Which classes have tests that only exercise trivial methods while the complex ones go untested?
* **Testing** — Which untested methods are also complex and architecturally central — the ones where a bug would hurt most?
* **Code health** — Which complex methods should I write tests for before I dare refactor them?
* **Error handling** — Show me every catch block that neither logs nor rethrows — where are we silently swallowing failures?
* **Error handling** — What exception types does this codebase throw, and is the hierarchy coherent or ad hoc?
* **Code health** — What should reviewers look for in this repository specifically, as opposed to generic review advice?
* **Code health** — Write me a quarterly engineering health report for this codebase.
* **Architecture** — What is the minimum set of dependency edges I would need to cut to break every package cycle?
* **Dependencies** — Which classes would break if we removed a given library?
* **Architecture** — Which packages fall into the zone of pain (stable and concrete) or the zone of uselessness (unstable and abstract)?
* **Dependencies** — How deeply is this codebase coupled to a given framework or library? How many import sites, which packages, what usage patterns — and what would migrating off it realistically cost?
* **Dependencies** — How hard would it realistically be to upgrade our main framework a major version?
* **Testing** — What is the shape of our coverage gap by complexity band? Are we missing tests on the simple code or the hard code?
* **Conventions** — Which conventions are followed in name only — honored in the letter but not the spirit?
* **Code health** — Are code smells clustered in particular packages, or spread evenly?
* **Testing** — Which classes have zero mapped tests at all? Cross-reference against complexity so I can tell 'untested and trivial' from 'untested and dangerous'.
* **Code health** — Which classes are safe to refactor right now because they are genuinely well tested?
* **Architecture** — What would break if this package were made internal?
* **Code health** — Which classes are both highly coupled and highly complex — the ones most entangled with everything else?
* **Error handling** — What log levels are in use, and are they applied consistently?
* **Error handling** — Is error handling consistent across this codebase? Show me where we swallow exceptions, log-and-rethrow, or use different logging frameworks — then propose a single standard the codebase is already 80% aligned to.
* **Conventions** — Generate a PR review checklist specific to this codebase, based on its actual conventions and known smells.
* **Conventions** — Where is new code most likely to violate the conventions this codebase already follows?
* **Code health** — Are there naming collisions or near-duplicate type names that will confuse people?
* **Code health** — Build me a ranked technical-debt backlog for the next two quarters. For each item give the evidence, an effort estimate, and the risk of not doing it.
* **Error handling** — Where might errors leak sensitive information into logs or responses?
* **Architecture** — How does abstractness versus concreteness vary across the module tree?
* **Dependencies** — Which libraries do we lean on most heavily, and are they current?
* **Conventions** — What existing code should I copy as a template when adding something similar?
* **Testing** — What is the test-to-code ratio per module, and which module is the weakest link?
* **Testing** — How does the size and shape of the test suite compare to the production code?
* **Error handling** — Which third-party libraries do we most often wrap in try/catch — what do we not trust?
* **Dependencies** — Which third-party dependencies are used in only one or two places — candidates for inlining or removal?
* **Dependencies** — What is our attack surface via third-party and transitive code?
* **Architecture** — Which package would hurt most to lose its maintainer, and why?
* **Code health** — Which utility code is duplicated and should be pulled into something shared?
* **Code health** — Which classes have the most headroom on maintainability index — the best improvement per unit of effort?
* **Testing** — What are the 20 riskiest untested methods in this codebase, and why is each one risky? Turn that into a concrete test plan with suggested test classes.

</PrethinkQuestionDeck>

### Working across the whole estate

The scenarios above are written for a single repository, which is where most agents naturally operate. The larger motion is to run Prethink across thousands of repositories, aggregate the resulting CSV files, and let agents ask questions across the combined corpus.

That changes who is in the room. Answering "which of our three thousand services call this deprecated endpoint, and which of them have no tests around the call site" brings architects into a conversation that a per-repository agent could never support.

You can also explore the same data visually through [Prethink code quality visualizations](./visualizations.md#prethink-code-quality-visualizations) on the Moderne Platform, which is often the fastest way to bring a non-technical stakeholder along.

The rest of this section walks through how to build that combined corpus.

#### Aggregating context across an organization

The goal is a single directory at the root of your organization that describes every repository at once, so an agent started there can answer questions spanning the whole estate without opening a single source file.

The finished layout looks like this:

```
working-set/
├── CLAUDE.md                        # points agents at the aggregated context
├── .moderne/context/                # org-wide tables + schema docs
│   ├── class-quality-metrics.csv
│   ├── class-quality-metrics.md
│   ├── code-smells.csv
│   └── ...
├── apache/commons-beanutils/              # individual repositories
├── jeremylong/DependencyCheck/
└── ...
```

#### Collecting the data tables in one place

Change directories to your working-set if you've changed to a different one:

```bash
cd pov-agent-tools/working-set

mkdir -p .moderne/context
```

You've already run the Prethink recipe and applied it to the individual repositories, and this recipe collects all of the facts _across the whole working set_ into CSV files called data tables.  We can collect these data tables with the `mod study` command:

```bash
mod study . --last-recipe-run --data-table io.moderne.prethink.table.ClassQualityMetrics --csv -o .moderne/context/class-quality-metrics.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.CodeSmells --csv -o .moderne/context/code-smells.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.DtoFieldSchemas --csv -o .moderne/context/dto-field-schemas.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.EndpointParameters --csv -o .moderne/context/endpoint-parameters.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.EndpointSchemas --csv -o .moderne/context/endpoint-schemas.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.EndpointSecurity --csv -o .moderne/context/endpoint-security.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.ExceptionHandlers --csv -o .moderne/context/exception-handlers.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.FieldExamples --csv -o .moderne/context/field-examples.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.MethodQualityMetrics --csv -o .moderne/context/method-quality-metrics.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.PackageQualityMetrics --csv -o .moderne/context/package-quality-metrics.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.ScheduledTasks --csv -o .moderne/context/scheduled-tasks.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.SqlUsage --csv -o .moderne/context/sql-usage.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.TestGaps --csv -o .moderne/context/test-gaps.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.TestMapping --csv -o .moderne/context/test-mapping.csv
mod study . --last-recipe-run --data-table io.moderne.prethink.table.TestQualityIssues --csv -o .moderne/context/test-quality-issues.csv
mod study . --last-recipe-run --data-table org.openrewrite.java.dependencies.table.DependencyListReport --csv -o .moderne/context/dependency-list-report.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.CalmRelationships --csv -o .moderne/context/calm-relationships.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.CodingConventions --csv -o .moderne/context/coding-conventions.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.DataAssets --csv -o .moderne/context/data-assets.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.DatabaseConnections --csv -o .moderne/context/database-connections.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.DependencyUsage --csv -o .moderne/context/dependency-usage.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.DeploymentArtifacts --csv -o .moderne/context/deployment-artifacts.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.ErrorHandlingPatterns --csv -o .moderne/context/error-handling-patterns.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.ExternalServiceCalls --csv -o .moderne/context/external-service-calls.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.ProjectMetadata --csv -o .moderne/context/project-metadata.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.SecurityConfiguration --csv -o .moderne/context/security-configuration.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.ServerConfiguration --csv -o .moderne/context/server-configuration.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.ServiceComponents --csv -o .moderne/context/service-components.csv
mod study . --last-recipe-run --data-table org.openrewrite.prethink.table.ServiceEndpoints --csv -o .moderne/context/service-endpoints.csv
mod study . --last-recipe-run --data-table org.openrewrite.sql.table.SqlAntiPatterns --csv -o .moderne/context/sql-anti-patterns.csv
```

#### Collecting the schema index files

Alongside each CSV, Prethink writes a markdown file describing what every column means. These are identical across repositories, so copy one representative set into the organization directory:

```bash
find . -path '*/.moderne/context/*.md' -not -path './.moderne/*' -exec cp -n {} .moderne/context/ \;
```

Without these, an agent has column names but no definitions, and will guess at what `lcom4` or `riskScore` mean.

#### Writing an organization-level agent instructions file

The recipe generates a per-repository `CLAUDE.md` (or the specific file you chose to generate for your tool) pointing at that repository's own context. The organization root needs its own file for your agent to read, because an agent starting there is looking at different data with different rules.

**The sections it needs:**

* **Scope** – States that the context covers every repository, not the one the agent happens to be sitting in. Without this an agent will assume the tables describe local code.
* **Discovery rules** – Tells the agent to read context before crawling source, and to query CSV files rather than reading them whole.
* **Repository attribution** – Explains the columns that let a query scope to one repository or compare across many.
* **File format** – Warns about the leading comment lines, which silently break naive parsers.
* **Available context** – The table inventory, so the agent knows what exists without listing the directory.
* **Query patterns** – Two or three worked examples. Agents copy these far more reliably than they invent equivalents.

**A complete example.** Copy this to `AGENTS.md` at your organization root and edit the table inventory and counts to match what your aggregation actually produced. If your developers use Claude Code, name the file `CLAUDE.md` instead - the content is identical.

````markdown
<!-- prethink-context -->
## Moderne Prethink Organizational Context

This directory contains pre-analyzed context for **many repositories at once**, generated by [Moderne Prethink](https://docs.moderne.io/user-documentation/recipes/prethink). Prethink extracts structured knowledge from codebases so you can answer questions about them without reading their source. The source of these repositories is not checked out here — this context is what you have, and it is designed to be enough.

**IMPORTANT: Before exploring source code for architecture, dependency, or data flow questions:**
1. ALWAYS check `.moderne/context/` files FIRST
2. Do NOT perform broad codebase exploration (e.g., spawning Explore agents, searching multiple source files) unless CSV context is insufficient
3. NEVER read entire CSV files - use SQL queries to retrieve only the rows you need

**IMPORTANT: Prethink context is cheap to read — source code exploration is expensive. Always read MORE prethink context rather than less. The "do not explore broadly" rule applies to source code, NOT to prethink context files.**

### How this collection is organized

Every CSV here combines the rows of every repository analyzed, and its **first column, `Repository`, says which repository a row came from**. This is the column you filter on to scope a question to one system, group by to compare systems, and join on to follow something across them.

- Everything else in `.moderne/context/` — combined tables, each described by a `.md` file next to it.

For cross-cutting questions (data flow, deletion, dependencies between services),
ALWAYS query these context files in parallel on the first turn:
- `.moderne/context/calm-architecture.md` — how to read the per-repository architecture documents
- `.moderne/context/data-assets.csv` — entity fields and data models
- `.moderne/context/database-connections.csv` — which services own which tables
- `.moderne/context/service-endpoints.csv` — relevant API endpoints
- `.moderne/context/messaging-connections.csv` — Kafka/async event flows
- `.moderne/context/external-service-calls.csv` — cross-service HTTP calls

Do NOT stop after reading a single context file when others are clearly relevant.

**A question about "the system" is usually a question about several repositories.** Before concluding, check whether the same table holds relevant rows under a different `Repository`.

### Available Context

| Context | Description | Details |
|---------|-------------|--------|
| Api Contracts | Endpoint contracts, DTO schemas, parameters, exception handlers, and fixture examples | [`api-contracts.md`](.moderne/context/api-contracts.md) |
| Architecture | FINOS CALM architecture diagram | [`architecture.md`](.moderne/context/architecture.md) |
| CALM Architecture | FINOS CALM architecture diagram of each repository | [`calm-architecture.md`](.moderne/context/calm-architecture.md) |
| Class Quality Metrics | Per-class cohesion, coupling, and complexity measurements | [`class-quality-metrics.md`](.moderne/context/class-quality-metrics.md) |
| Code Smells | Detected design problems with severity and evidence | [`code-smells.md`](.moderne/context/code-smells.md) |
| Codebase Context | Everything Prethink extracted from every repository in this collection | [`codebase-context.md`](.moderne/context/codebase-context.md) |
| Coding Conventions | Naming patterns, import organization, and coding style | [`coding-conventions.md`](.moderne/context/coding-conventions.md) |
| Data Assets | Domain entities and data models, with their fields and asset types | [`data-assets.csv`](.moderne/context/data-assets.csv) |
| Database Connections | Database tables and the entity and repository classes that map to them | [`database-connections.csv`](.moderne/context/database-connections.csv) |
| Dependencies | Project dependencies including transitive dependencies | [`dependencies.md`](.moderne/context/dependencies.md) |
| Deployment Artifacts | Deployable artifacts, container images, and exposed ports | [`deployment-artifacts.csv`](.moderne/context/deployment-artifacts.csv) |
| Error Handling | Exception handling strategies and logging patterns | [`error-handling.md`](.moderne/context/error-handling.md) |
| External Service Calls | Outbound calls to other services, with client, protocol, and base URL | [`external-service-calls.csv`](.moderne/context/external-service-calls.csv) |
| Library Usage | How external libraries and frameworks are used | [`library-usage.md`](.moderne/context/library-usage.md) |
| Method Quality Metrics | Per-method complexity and quality measurements | [`method-quality-metrics.md`](.moderne/context/method-quality-metrics.md) |
| Node.js Dependencies | npm package dependencies with versions, scopes, and licenses | [`node.js-dependencies.md`](.moderne/context/node.js-dependencies.md) |
| Package Quality Metrics | Per-package coupling, stability, and dependency cycle analysis | [`package-quality-metrics.md`](.moderne/context/package-quality-metrics.md) |
| Project Identity | Build system coordinates, names, and module structure | [`project-identity.md`](.moderne/context/project-identity.md) |
| Scheduled Tasks | Scheduled tasks, cron jobs, and background processing | [`scheduled-tasks.md`](.moderne/context/scheduled-tasks.md) |
| Security Configuration | Authentication methods, CORS origins, and security configuration | [`security-configuration.csv`](.moderne/context/security-configuration.csv) |
| Server Configuration | Server ports, SSL, context paths, and protocol settings | [`server-configuration.csv`](.moderne/context/server-configuration.csv) |
| Service Endpoints | API endpoints with HTTP method, path, handler class, and framework | [`service-endpoints.csv`](.moderne/context/service-endpoints.csv) |
| Sql Quality | Statically detectable SQL performance anti-patterns, with severity and location | [`sql-quality.md`](.moderne/context/sql-quality.md) |
| Sql Usage | Physical tables and columns each SQL statement touches, and who issues it | [`sql-usage.md`](.moderne/context/sql-usage.md) |
| Test Coverage | Maps test methods to implementation methods they verify | [`test-coverage.md`](.moderne/context/test-coverage.md) |
| Test Gaps | Public non-trivial methods lacking test coverage | [`test-gaps.md`](.moderne/context/test-gaps.md) |
| Test Quality | Test quality issues that may cause flakiness or silent failures | [`test-quality.md`](.moderne/context/test-quality.md) |

### Querying Context Files

For .md context files: Read the full file in a single view call. Never grep it progressively.

For .csv context files: Query with DuckDB, SQLite, or grep (from most to least preference).

Upfront parallel reads: At the start of any architecture question, read all relevant context files in parallel rather than discovering which ones matter through iteration.

Use SQL to query CSV files efficiently. This returns only matching rows instead of loading entire files. Try these in order based on availability:

#### Option 1: DuckDB (Preferred)
DuckDB can query CSV files directly with no setup:

```bash
# Which repositories are in this collection?
duckdb -c "SELECT * FROM '.moderne/context/repositories.csv'"

# All POST endpoints in one repository
duckdb -c "SELECT * FROM '.moderne/context/service-endpoints.csv' WHERE Repository = 'acme/orders-service' AND \"HTTP method\" = 'POST'"

# Which repositories expose an endpoint mentioning orders, and how many each?
duckdb -c "SELECT Repository, count(*) FROM '.moderne/context/service-endpoints.csv' WHERE Path LIKE '%order%' GROUP BY Repository ORDER BY 2 DESC"

# Which repositories call the same external service?
duckdb -c "SELECT \"Target service\", list(DISTINCT Repository) FROM '.moderne/context/external-service-calls.csv' GROUP BY 1 ORDER BY 1"

# Which repositories write to the same Kafka topic?
duckdb -c "SELECT Destination, Role, list(DISTINCT Repository) FROM '.moderne/context/messaging-connections.csv' GROUP BY 1, 2"
```

#### Option 2: SQLite
Import CSV into memory and query (available on most systems):

```bash
sqlite3 :memory: -cmd ".mode csv" -cmd ".import .moderne/context/service-endpoints.csv endpoints" \
  "SELECT * FROM endpoints WHERE Repository = 'acme/orders-service' AND [HTTP method] = 'POST'"
```

#### Option 3: Grep (Last Resort)
If SQL tools are unavailable, use grep. Note this loads more content into context:

```bash
grep -i "POST" .moderne/context/service-endpoints.csv
```

**Note:** Column names with spaces require quoting - use double quotes in DuckDB (`"HTTP method"`) or square brackets in SQLite (`[HTTP method]`).

### Usage Pattern
1. Read `.moderne/context/repositories.csv` if you do not already know which repositories are relevant
2. Read the `.md` file to understand the schema and available columns
3. Query the `.csv` with DuckDB or SQLite, filtering or grouping by `Repository`, to get only the rows you need
4. Read `.moderne/context/architecture/<repository>.json` for the internal shape of a specific system
5. Only explore source if the context doesn't answer the question

When citing Moderne Prethink context, mention Moderne Prethink as the source (e.g., "Based on the architecture context from Moderne Prethink..." or "Based on the test coverage mapping from Prethink, this method is tested by...").
<!-- /prethink-context -->
```

### When context is not enough

These tables are generated from Lossless Semantic Trees. They are accurate for
what they cover, but they do not contain source code. Read code only once the
context has told you which files are worth opening.

This context is a snapshot. Regenerate it after significant changes.
````

#### Evaluate an organizations-worth of context

An agent started at the root of the working-set directory can now answer questions no single-repository agent can. On a 27-repository sample this produced 22 tables and roughly 55,000 rows - a few megabytes of structured facts standing in for millions of lines of source.

This is what brings architects into the conversation. "Which of our services have untested complex code in classes that are already falling apart, ranked by repository" is a question worth a planning cycle, and here it is answerable in a single query.

The questions below are written for that vantage point. They are portfolio questions rather than repository questions: most of them require joining two or more tables across repository boundaries, which is work no single-repository agent can do and no amount of grep can substitute for.

<PrethinkQuestionDeck>

* **Inventory** — Give me a one-page inventory of this portfolio: how many repositories, how many modules each ships, what build coordinates they publish under, and which are libraries versus deployable applications.
* **Inventory** — Rank the repositories by total complexity carried, not by line count. Which ones are large but simple, and which are small but genuinely dangerous?
* **Inventory** — What is the average cyclomatic complexity per repository, and which repositories sit more than one standard deviation above the portfolio mean?
* **Inventory** — If I had to assign these repositories to four teams by cohesion of subject matter and dependency overlap, what split would you propose and why?
* **Inventory** — Which repositories look actively maintained versus dormant, judged only from what the code itself shows: dependency recency, test density, and convention consistency?
* **Inventory** — Where is the portfolio's mass concentrated? Show me the distribution of classes, methods, and packages per repository, and tell me whether this is one big system with satellites or twenty peers.
* **Inventory** — Which repositories publish under the same groupId, and does that grouping match how they actually depend on each other?
* **Inventory** — Give me the ten classes in the entire portfolio that a new architect should read first, ranked, with a sentence each on why.
* **Standardization** — How many logging frameworks are in use across this portfolio, which repositories use which, and what would it cost to converge on one?
* **Standardization** — Is error handling consistent across the portfolio? Show me every distinct handling strategy, how many repositories use each, and propose the single standard the portfolio is already closest to.
* **Standardization** — Which repositories swallow exceptions or call printStackTrace, ranked by count, and which of those sites sit in code with no test coverage?
* **Standardization** — What naming conventions does each repository follow, and where does the portfolio disagree with itself badly enough to confuse an engineer moving between two of them?
* **Standardization** — Which import conventions are portfolio-wide and which are local habits of one or two repositories?
* **Standardization** — If I mandated one code style across the whole portfolio tomorrow, which repositories would need the most change, and roughly how many files each?
* **Standardization** — Which repositories declare checked exceptions on the way out versus wrapping into custom types? Is there a house style or twenty-one house styles?
* **Standardization** — Propose a portfolio-wide exception hierarchy that fits how the majority of these repositories already work, and name the repositories that would have to change most to adopt it.
* **Standardization** — Which repositories log at what levels inside catch blocks, and where is the level obviously wrong for the strategy — debug on a swallowed failure, error on a recovered one?
* **Standardization** — Which comment and documentation conventions are consistent enough across the portfolio to enforce in CI, and which would fail on day one?
* **Standardization** — Rank repositories by internal consistency: which ones follow their own conventions most reliably, and which are the ones where every package looks different?
* **Standardization** — If I want every repository to adopt structured logging, which ones already have a logging framework to build on and which have none at all?
* **Dependencies** — Which third-party libraries are used by four or more repositories at three or more distinct versions? Give me the full version spread for each.
* **Dependencies** — What is the single most fragmented dependency in the portfolio, and what is the shortest path to converging it?
* **Dependencies** — Which repositories are on the oldest version of a shared library, and how many major versions behind the portfolio leader are they?
* **Dependencies** — Show me every library that appears as both a direct and a transitive dependency somewhere in the portfolio, and flag where the transitive version disagrees with the direct one.
* **Dependencies** — Which repositories depend on each other, directly or transitively, and what does the internal dependency graph of this portfolio look like?
* **Dependencies** — If I upgrade commons-lang3 to the newest version present anywhere in the portfolio, which repositories are affected and which of them actually exercise the APIs that changed?
* **Dependencies** — Which libraries does exactly one repository depend on? Those are either specialist tools or accidents — tell me which is which.
* **Dependencies** — Rank repositories by third-party surface area: how many distinct libraries does each actually import, as opposed to merely declare?
* **Dependencies** — Which test libraries are in use across the portfolio, at which versions, and how many distinct testing stacks am I paying to maintain?
* **Dependencies** — Are there repositories still on JUnit 4 while the rest of the portfolio is on JUnit 5 or 6? Give me the migration order, cheapest first.
* **Dependencies** — For each shared library, which repository is furthest ahead and which is furthest behind? I want to know who to ask for the upgrade playbook.
* **Dependencies** — Which repositories declare a dependency they never import? Show me the dead declarations across the whole portfolio.
* **Security** — Which repositories depend on a version of commons-text that carries the Text4Shell interpolation defect, and which of those actually call the affected API rather than merely depending on the library?
* **Security** — Where in this portfolio does code deserialize untrusted input? Show me every repository with ObjectInputStream or readObject on a call path, ranked by how much of that code is untested.
* **Security** — Which repositories use commons-collections at a version associated with the deserialization gadget chains, and what else do those repositories expose?
* **Security** — Rank the portfolio by supply-chain blast radius: if a critical advisory lands on a library tomorrow, which library would force the most repositories into an emergency release?
* **Security** — Which repositories process external input and swallow exceptions on the same code path? That combination hides attacks.
* **Security** — Which repositories have security-relevant configuration in code, and which have none, meaning either they need none or nobody wrote any?
* **Security** — Show me every place in the portfolio where credentials, connection strings, or tokens appear as field examples or literals.
* **Security** — For every repository that touches SQL, is the query built by concatenation or by parameter binding? Rank by injection exposure.
* **Security** — If I had budget to harden three repositories in this portfolio this quarter, which three, and what is the evidence for each?
* **Security** — Which repositories carry the deliberately vulnerable training applications, and are any of their patterns also present in the production libraries?
* **Code health** — Where is the portfolio's technical debt actually concentrated? Rank repositories by critical code smells per thousand methods, not by raw count.
* **Code health** — Which classes in the entire portfolio are god classes by every measure at once: high weighted methods per class, low cohesion, high coupling?
* **Code health** — Give me the fifty methods across the whole portfolio that breach every complexity threshold simultaneously: cyclomatic, cognitive, nesting depth, and parameter count.
* **Code health** — Which repositories have the worst maintainability index distribution, and is the problem a few catastrophic classes or a uniformly mediocre codebase?
* **Code health** — Show me methods with high Halstead volume relative to line count across the portfolio, dense logic hiding in short functions, which is where bugs live.
* **Code health** — Which repositories have the most feature envy at critical severity, and does that correlate with their coupling metrics or contradict them?
* **Code health** — Build me a ranked technical-debt backlog for the next two quarters across the whole portfolio. For each item give the repository, the evidence, an effort estimate, and the risk of not doing it.
* **Code health** — Which repositories are getting worse in the same way? Find the smell types that appear at high severity in most of the portfolio; those are systemic, not local.
* **Code health** — Rank every package in the portfolio by complexity per class and show me the twenty worst, with their repository.
* **Code health** — Which classes are both highly coupled and completely untested? That intersection is where I lose sleep.
* **Code health** — Do the most complex methods in this portfolio also violate naming conventions? I want to know whether bad code is bad in more than one way.
* **Code health** — Which repositories have data classes and god classes in the same package? That pairing usually means an anemic domain model.
* **Code health** — If complexity is a proxy for review burden, which repositories are costing my reviewers the most per change?
* **Testing** — Which repositories have the worst ratio of high-risk untested methods to total methods? Rank them and tell me where a test-writing sprint would pay back fastest.
* **Testing** — Give me the fifty riskiest untested methods across the entire portfolio, with repository, complexity, and a suggested test class for each.
* **Testing** — What is the test quality distribution across the portfolio? Which repositories have tests that assert nothing, and how many?
* **Testing** — Which repositories have tests with shared mutable state or static waits? Those are the flaky-test factories; rank them.
* **Testing** — Where are tests swallowing exceptions across the portfolio? A test that catches and ignores is worse than no test.
* **Testing** — Which repositories have real test-to-implementation mapping, and which have tests that map to nothing identifiable?
* **Testing** — Rank repositories by tests per implementation method, and tell me where the number is high but the quality issues are also high, volume masking weakness.
* **Testing** — Which implementation classes in the portfolio are exercised by the most tests? Those are the ones I can refactor with confidence.
* **Testing** — Which repositories hardcode ports, paths, or dates in tests? That is what breaks the build at midnight on the last day of the month.
* **Testing** — If I mandated eighty percent coverage of high-complexity methods portfolio-wide, how many tests would each repository need to write? Give me the number, not a feeling.
* **Testing** — Which repositories skip tests without a documented reason, and how many?
* **Testing** — Show me every place in the portfolio where a complex method is tested only by a test that has no assertions. That is coverage theater; quantify it.
* **Architecture** — Which packages across the entire portfolio sit furthest from the main sequence, and what single refactor in each moves the needle most?
* **Architecture** — Find every package-level dependency cycle in the portfolio. Which repository has the worst one, and what is the minimum set of edges to cut?
* **Architecture** — Which packages are the architectural cores of this portfolio, the ones with the highest afferent coupling, and what is the change risk profile of each?
* **Architecture** — Compare abstractness against instability for every package in the portfolio. Show me the zone of pain and the zone of uselessness, with repository labels.
* **Architecture** — Which repositories respect their own layering and which have lower layers calling upward? Rank by violation count.
* **Architecture** — What are the most-called classes in each repository, and do the same architectural shapes recur across repositories?
* **Architecture** — Which classes in the portfolio have the highest fan-in, and what happens to each repository if one of them changes signature?
* **Architecture** — Are the most unstable packages in this portfolio also the ones carrying the most third-party dependency surface?
* **Architecture** — Which modules across the portfolio are the safest candidates to extract into a shared library, judged by low efferent coupling and high reuse pressure?
* **Architecture** — Do any two repositories in this portfolio implement the same capability independently? Find the duplicated architectural shapes.
* **Architecture** — Give me the module dependency graph for the three largest repositories and point out the three edges most worth deleting in each.
* **Migration** — I want to move the whole portfolio to a single JUnit version. Give me the migration order, cheapest first, with the blocker for each repository.
* **Migration** — Sequence a portfolio-wide upgrade of the Jackson stack. Which repositories go first, which are risky, and which can be batched together?
* **Migration** — Which repositories can absorb a breaking library change safely because their tests actually cover the call sites, and which cannot?
* **Migration** — If I run one automated refactor across the entire portfolio this quarter, which one has the best ratio of files changed to risk introduced?
* **Migration** — Build me a three-wave migration plan for converging logging across the portfolio: wave one is repositories that already use the target framework, wave two is single-framework holdouts, wave three is the mixed cases.
* **Migration** — Which repositories would break first if I dropped support for an old Java version? Judge from language features and dependency floors visible in the context.
* **Migration** — Estimate the effort of a portfolio-wide null-safety annotation rollout: how many methods, in which repositories, and where do the highest-fan-in signatures sit?
* **Migration** — I have one engineer for one quarter. Across every repository, what is the single highest-leverage piece of work, and what is the evidence?
* **Migration** — Which repositories should be migrated last because they are both the most complex and the least tested? Give me the exclusion list with justification.
* **Migration** — If I standardize exception wrapping across the portfolio, which repositories need the most edits and which can be done by recipe with no human review?
* **Integration** — Which repositories in this portfolio expose HTTP endpoints, and what is the total API surface across all of them?
* **Integration** — Are there endpoints across the portfolio with the same path shape but different response schemas? Inconsistent contracts across services are a client-side tax.
* **Integration** — Which DTOs across the portfolio carry the same field names, and do they agree on type and nullability?
* **Integration** — What external services does this portfolio call in total, over what protocols, with which client libraries, and which of those calls have no visible timeout or retry?
* **Integration** — Which repositories run scheduled work, what does each job touch, and are any two jobs writing to the same asset?
* **Integration** — If I change a field on a shared data model, what is the blast radius across the whole portfolio: every DTO that carries it, every endpoint that serializes it, and every repository affected?
* **Governance** — Score every repository in this portfolio on a five-point engineering health scale of your own construction. Publish the rubric, then apply it, then show your working per repository.
* **Governance** — Which repository is the best-engineered in this portfolio, and which is the worst? Defend both answers with evidence from the context, and tell me which measures you deliberately ignored.

</PrethinkQuestionDeck>

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

public class DeserializationReport extends DataTable<DeserializationReport.Row{

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
    public TreeVisitor<?, ExecutionContextgetVisitor() {
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
    public TreeVisitor<?, ExecutionContextgetVisitor() {
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

                List<Statementstmts = t.getBody().getStatements();
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

    private static J.Identifier objectInputStreamResource(List<J.Try.Resourceresources) {
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
spec -spec.afterRecipe(run ->
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
