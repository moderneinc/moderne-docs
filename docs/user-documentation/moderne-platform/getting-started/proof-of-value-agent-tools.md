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

Moderne closes that gap. [Prethink](../../agent-tools/prethink.md) gives agents pre-resolved facts about your code instead of guesses. [Trigrep](../../agent-tools/trigrep.md) lets them search thousands of repositories in under a second. The [MCP server](../../agent-tools/mcp/overview.md) and [skills](../../agent-tools/skills.md) give them semantic tools and the know-how to use them. Together they turn an agent that works one file at a time into one that works across your estate.

This guide walks through a typical agent tools proof of value (POV) process. It is organized around four phases, each of which builds on the one before it:

1. [Building and evaluating Prethink context](#phase-1-building-and-evaluating-prethink-context)
2. [Running existing PoV use cases through an agent](#phase-2-running-existing-pov-use-cases-through-an-agent)
3. [Remediating vulnerabilities with an agent](#phase-3-remediating-vulnerabilities-with-an-agent)
4. [Writing new recipes with an agent](#phase-4-writing-new-recipes-with-an-agent)

## What this proof of value evaluates

The question this process answers is narrow and specific: **do Moderne's agent tools work with the agentic coding tool your developers already use?**

That is the evaluation. Not whether recipes produce good diffs, but whether Prethink context, Trigrep search, the MCP server, and the Moderne skills install cleanly into your agent of choice, get discovered by it without prompting, and hold up when your developers work the way they normally work.

:::tip[Evaluating what recipes do to your code?]
If what you want to assess is the output of recipes — the diffs, the data tables, how much of a migration is automated — that is what the [standard proof of value process](./proof-of-value.md) is for. The two guides share the same foundation of mass ingest, LSTs, and a Moderne organization, so you can run them together, but they answer different questions.
:::

**Bring your own agent.** The CLI installs skills and an MCP server into Claude Code, Cursor, Windsurf, GitHub Copilot, Sourcegraph Amp, and OpenAI Codex, and [detects which of them are present](../../agent-tools/skills.md#supported-agents). Do not adopt a new agent for the evaluation. The entire point is to prove the tools meet your developers where they already are, so a PoV run against an agent nobody uses afterward proves nothing.

## Why evaluating agent tooling is hard

This is worth naming at the start, because it changes what evidence is worth collecting.

**Agents are nondeterministic.** The same prompt, against the same repository, on the same day, can produce a different sequence of tool calls and a different answer. One successful run is not proof, and one failed run is not disproof. What matters is behavior that repeats across runs, across developers, and across repositories.

**The harness landscape shifts constantly.** Agents, their tool-calling conventions, their context-management strategies, and their default models all change on a release cadence measured in weeks. A measurement taken in week one of a three-week PoV may not describe the same system by week three. Anchoring an evaluation to a fixed score invites a number that expires before the readout.

**There is no clean counterfactual.** You cannot run the same developer, on the same task, with and without the tooling. Whatever they learn the first time through carries into the second.

The practical consequence: evaluate **capabilities you can observe repeatedly**, not metrics captured once. The rest of this guide is built around that.

## What to look for

Three signals matter more than any number the PoV could produce. Each is visible in the agent's own transcript and in the artifacts it leaves behind.

**1. Does the agent reach for Prethink on its own?**

Watch whether the agent consults `.moderne/context/` to answer a question, rather than grepping through source or guessing from file names. Reaching for the tool unprompted is a meaningful result by itself: it shows the context is discoverable and that the agent recognizes it as authoritative. This is the signal to watch throughout [phase 1](#phase-1-building-and-evaluating-prethink-context).

**2. Can the agent complete a complex, multi-step workflow?**

Single-shot questions are the easy case. The real test is a workflow where each step depends on the last and a mistake early on poisons everything after it. [Vulnerability remediation](#phase-3-remediating-vulnerabilities-with-an-agent) is the benchmark: take one scanner finding, generalize the pattern, search the estate for every occurrence, write a recipe that fixes it, and apply that recipe everywhere. Watch whether the agent holds the thread across all five steps or loses it midway.

**3. Do the recipes the agent writes actually work?**

A recipe that compiles is not the same as a recipe that does what was asked. Check that recipes produced in [phase 4](#phase-4-writing-new-recipes-with-an-agent) have tests, pass them, and produce the expected diff when run across real repositories — not just the one the developer had open.

## What this proof of value produces

The output of an agent tools PoV is **a plan**, not a savings number.

Over roughly three weeks you exercise a set of capabilities against your own code. What comes out the other side is a prioritized picture of your estate that only your codebase could produce: where test coverage is thin, which packages are structurally decaying, which vulnerabilities generalize beyond the one your scanner found, and what to tackle first.

That readout is the deliverable. It is a body of work you can take straight into planning.

## Setting expectations

You will not finish rolling out agent tooling in three weeks, and it is worth being clear about that up front. A proof of value shows you what the tooling can do against your own code and leaves you with a plan. Realizing it fully — ingesting every repository, keeping context current as code changes, integrating with each agent your teams use — is a longer piece of work.

Scoping the PoV around that split keeps the exercise honest and keeps the readout useful.

### Measuring token savings

You may be asked whether agent tooling will reduce your token spend, particularly if your organization has already signed a large coding assistant deal. It is a fair question, and the honest answer is that token cost is not reliably measurable in a way that transfers from one setup to another.

The most immediate obstacle is practical rather than theoretical: **most agents do not give you the numbers.** Few expose client-side token accounting that a developer can read transparently while they work — per-request input and output counts, cache hit rates, or the overhead a tool call adds. Where the figures exist at all they usually live in a vendor dashboard, aggregated across users and delayed by hours, which is the wrong granularity and the wrong latency for a three-week evaluation. You cannot attribute a saving to a tool you cannot meter.

Even where the numbers are available, too many variables have to be held constant before two of them can be compared:

* Which agent and harness, and which version of that harness
* Which model, and whether input and output tokens are priced differently
* Whether prompt caching is in play, and what invalidates it
* Whether context propagates across tools or is rebuilt on every call
* How long conversations run, since token consumption grows with conversation length

That list is the point. It shows how much has to be pinned down before two measurements can be compared at all.

<details>
<summary>A worked example of why the numbers move</summary>

Consider an attempt to run six simultaneous OpenCode sessions against the DeepSeek model through OpenRouter.

Pinned to DeepSeek's own provider, there was not enough capacity to run six sessions at once. Opening the request up to any provider serving that model solved the capacity problem, but it meant a request could be routed to a different provider from one message to the next — which breaks token caching.

Because token count grows with conversation length and caching is what normally offsets that growth, input tokens ended up costing more than output tokens. That is the opposite of the usual assumption, and it was caused entirely by a routing setting that had nothing to do with the model or the work being done.

</details>

Bake-offs do not resolve this either. Two teams running in parallel for three weeks is a sample size too small to draw conclusions from, and as noted above there is no real counterfactual to compare against.

A more durable way to judge the tooling is **accuracy, completeness, and speed** — the [three signals above](#what-to-look-for), which you can observe directly in transcripts and results rather than having to model.

### Who should take part

Because the case for this tooling rests on capability rather than a cost figure, it matters more than usual who participates. Aim to include:

* **At least one architect** who understands blast radius across the estate — someone who can look at a Prethink finding and immediately know which teams it touches
* **Developers who use AI coding agents daily**, so that the agent side of the evaluation reflects real habits rather than a demo script
* **A security or platform representative** if [vulnerability remediation](#phase-3-remediating-vulnerabilities-with-an-agent) is in scope

The most important person is whoever can judge whether an answer spanning thousands of repositories is correct and complete. Without them, a result that should be evidence only ever looks like a demo.

## Before you start

Scale still matters. Agents tend to work one repository at a time, and that is exactly the constraint these tools remove — but only if there is something at scale for them to work against.

The foundation is unchanged from the standard proof of value:

1. **Mass ingest** – Your team [sets up an ingestion pipeline](../../../administrator-documentation/moderne-platform/how-to-guides/mass-ingest.md) to build and publish LST artifacts. Bring as many repositories as you can. A hundred is enough to start; the story gets stronger with every additional repository.

2. **Build LSTs** – Recipes, Trigrep indexes, and Prethink context are all derived from [LSTs](../../recipes/authoring-recipes/concepts/lossless-semantic-trees.md), so this step gates everything that follows.

3. **Install the CLI and agent tools** – Install the [Moderne CLI](../../moderne-cli/getting-started/cli-intro.md#installation-and-configuration), then install skills and the MCP server for every coding agent your developers use:

    ```bash
    mod config agent-tools install
    ```

4. **Sync an organization locally** – Give the agent a working set to reason over:

    ```bash
    mod git sync moderne working-set --organization <your-org>
    ```

What changes in an agent tools PoV is that **the agent is the user experience from day one**. Developers should be talking to their agent, not clicking through the Platform, for most of the three weeks.

## Phase 1: Building and evaluating Prethink context

Prethink is the foundation for everything else. Before an agent can answer a useful question about your codebase, it needs pre-resolved facts to answer from.

### Generating the context

Run the [Update Prethink context](../../recipes/recipe-catalog/prethink/updateprethinkcontextstarter.md) recipe across your organization. A single run performs architectural discovery, code quality analysis, test coverage mapping, dependency inventory, and CALM architecture generation:

```bash
mod run . --recipe io.moderne.prethink.UpdatePrethinkContextStarter

mod git apply . --last-recipe-run
```

The results land in a `.moderne/context/` directory inside each repository, as CSV files paired with markdown files that describe their schema. The recipe also updates your agent configuration files (`CLAUDE.md`, `AGENTS.md`, `.cursorrules`, or `.github/copilot-instructions.md`) so agents discover the context on their own.

For the full breakdown of what gets generated, see the [Prethink documentation](../../agent-tools/prethink.md). To run it on the Platform instead, see [running Prethink on the Moderne Platform](./prethink.md); for the CLI walkthrough, see [generating Prethink context with the CLI](../../moderne-cli/how-to-guides/cli-prethink.md).

### Evaluating the context

Being asked "what do you usually talk to your agent about?" tends to produce analysis paralysis. Work from a curated menu instead.

Work through the scenarios below with your own agent, against your own code. Each one names the Prethink context files the agent should be reaching for, which gives you two things to evaluate:

* **Did the agent reach for the context at all?** This is visible in the transcript and is a meaningful result on its own. It demonstrates that the context is discoverable and that agents will use it unprompted.
* **Was the answer accurate and complete?** Your architects are the judges here. An answer that is confidently wrong is worse than no answer, and Prethink exists specifically to prevent that.

Note that the value here does not depend on a recipe existing for the fix. Supplying the data is the point: your agent can act on facts Prethink surfaces even where no recipe performs the change for you.

:::note
The context files listed below are the ones each scenario should draw on. The exact set generated depends on which languages and frameworks Prethink detects in your repositories, so check the `ContextRegistry` data table for what your run actually produced.
:::

#### Drawing a scenario

If you would rather not pick from a list, draw one at random. Click the deck to turn over a question, then put it to your agent against your own repositories. Every card is a question that Prethink context has been verified to answer.

<PrethinkQuestionDeck />

The scenario tables below cover the same ground in a fixed order, along with the context files each question draws on.

#### Orientation: "I just inherited this"

| # | Scenario | Context files |
|---|----------|---------------|
| 1 | Give me a 10-minute orientation to this system: what are the modules, what does each one own, and how do they depend on each other? Where are the layer boundaries, and where are they violated? | `architecture.md`, `calm-architecture.json`, `project-metadata.csv`, `package-quality-metrics.csv` |
| 2 | I need to add a new feature in this codebase. Where does it belong, and what conventions — naming, package layout, error handling, test structure — will reviewers expect me to follow? | `coding-conventions.csv`, `architecture.md`, `error-handling.csv`, `data-assets.csv` |
| 3 | Summarize what the `<module>` module actually does, method by method, without me reading the source. Which methods are the real entry points versus plumbing? | `method-descriptions.csv`, `service-endpoints.csv`, `class-quality-metrics.csv` |

#### Integration surface: "what does this thing touch?"

| # | Scenario | Context files |
|---|----------|---------------|
| 4 | Produce the complete inventory of HTTP endpoints this codebase exposes — method, path, owning class, framework — grouped by module. Which ones are undocumented or untested? | `service-endpoints.csv`, `api-contracts.md`, `test-mapping.csv` |
| 5 | What external services does this codebase call, over what protocols, using which client libraries? Which calls have no visible timeout, retry, or error handling around them? | `external-service-calls.csv`, `error-handling.csv`, `dependency-usage.csv` |
| 6 | Map the async surface: what queues and topics do we publish to and consume from, and are there producers with no consumer in this repository (or vice versa)? | `messaging-connections.csv` |
| 7 | What is the persistence footprint — which entities and tables exist, which repositories own them, and which datastore technologies are actually in play? | `database-connections.csv`, `data-assets.csv`, `dependency-usage.csv` |

#### Contracts and data

| # | Scenario | Context files |
|---|----------|---------------|
| 8 | If I change a field on a shared data model, what is the blast radius? Show me every DTO and entity that carries it, every endpoint that serializes it, and every external consumer implied. | `dto-field-schemas.csv`, `data-assets.csv`, `service-endpoints.csv`, `external-service-calls.csv` |
| 9 | Which inbound request payload fields are unvalidated or untyped — no constraints, no required flag, or an unresolved type? Rank by which endpoints expose them. | `dto-field-schemas.csv`, `service-endpoints.csv` |

#### Code health and technical debt

| # | Scenario | Context files |
|---|----------|---------------|
| 10 | Which classes are the biggest maintainability liabilities — low cohesion (LCOM4/TCC), high coupling (CBO), low maintainability index? Give me the top 15 with a one-line diagnosis each. | `class-quality-metrics.csv`, `code-smells.csv` |
| 11 | Which methods are genuinely hard to maintain — high cyclomatic and cognitive complexity, deep nesting, long parameter lists? Which of those would I refactor first for the best risk-adjusted payoff? | `method-quality-metrics.csv`, `test-gaps.csv` |
| 12 | Are there package-level dependency cycles? Which packages sit furthest from the main sequence (unstable and concrete), and what would it take to break the worst cycle? | `package-quality-metrics.csv`, `architecture.md` |
| 13 | What code smells cluster together — are there classes that show up repeatedly across smell types? Show me the concentration, not just the list. | `code-smells.csv`, `class-quality-metrics.csv` |
| 14 | Build me a ranked technical-debt backlog for the next two quarters. For each item, give the evidence, an effort estimate, and the risk of not doing it. | Cross-table: `class-quality-metrics.csv`, `method-quality-metrics.csv`, `code-smells.csv`, `test-gaps.csv`, `package-quality-metrics.csv`, `dependency-list-report.csv` |

#### Testing

| # | Scenario | Context files |
|---|----------|---------------|
| 15 | What are the 20 riskiest untested methods in this codebase, and why is each one risky? Turn that into a concrete test plan with suggested test classes. | `test-gaps.csv` |
| 16 | Which classes have zero mapped tests at all? Cross-reference against complexity so I can tell "untested and trivial" from "untested and dangerous". | `test-mapping.csv`, `class-quality-metrics.csv`, `method-quality-metrics.csv` |
| 17 | Are our existing tests actually testing anything? Show me tests with no assertions, disabled tests, over-mocking, or duplicated coverage — and tell me whether our coverage number is trustworthy. | `test-quality.csv`, `test-mapping.csv` |

#### Dependencies and consistency

| # | Scenario | Context files |
|---|----------|---------------|
| 18 | Give me the full third-party dependency inventory: direct versus transitive, version drift across modules, and any resolution failures. Which declared dependencies show no actual usage in code? | `dependency-list-report.csv`, `dependency-usage.csv` |
| 19 | How deeply is this codebase coupled to `<framework>`? How many import sites, which packages, what usage patterns — and what would a migration off it realistically cost? | `dependency-usage.csv`, `dependency-list-report.csv`, `class-quality-metrics.csv` |
| 20 | Is error handling consistent across this codebase? Show me where we swallow exceptions, log-and-rethrow, or use different logging frameworks and inconsistent log levels — then propose a single standard the codebase is already 80% aligned to. | `error-handling.csv`, `code-smells.csv`, `coding-conventions.csv` |

:::tip
Scenarios 1, 5, 6, 8, 14, 15, 17, and 19 tend to land hardest in a readout, because each one produces something an architect can act on immediately rather than a list they have to interpret.
:::

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

The recipe generates a per-repository `AGENTS.md` (or `CLAUDE.md`) pointing at that repository's context. The organization root needs its own, and it has to say three things the per-repository version does not.

**Every row is attributed to a repository.** `mod study` prefixes three columns that the per-repository exports do not have:

| Column | Meaning |
|--------|---------|
| `repositoryOrigin` | SCM host, such as `github.com` |
| `repositoryPath` | Organization and repository, such as `apache/pivot` |
| `repositoryBranch` | Branch the LST was built from |

These are what make estate-wide questions possible. Filter on `repositoryPath` to scope to one repository, or group by it to rank repositories against each other.

**Column naming differs from the per-repository exports.** Aggregated tables use camelCase with no spaces (`className`, `cyclomaticComplexity`, `lcom4`). The per-repository exports use title case with spaces (`Class name`, `Cyclomatic complexity`, `LCOM4`). A query copied from a repository-level config will not run at the organization level unchanged — worth stating explicitly, because agents will try.

**Each CSV starts with three `#` comment lines** naming the source data table, before the header row. Parsers need to skip them:

```bash
duckdb -c "SELECT * FROM read_csv('.moderne/context/code-smells.csv', skip=3, header=true) LIMIT 5"
```

A useful organization-level config lists the available tables with row counts, states the three points above, and gives a couple of worked queries. For example, ranking repositories by structural debt:

```sql
SELECT repositoryPath, count(*) AS smells
FROM read_csv('.moderne/context/code-smells.csv', skip=3, header=true)
GROUP BY 1 ORDER BY smells DESC LIMIT 10
```

Or joining tables to find untested methods inside the least cohesive classes, across every repository at once:

```sql
SELECT g.repositoryPath, g.className, g.methodName, g.riskScore, c.lcom4
FROM read_csv('.moderne/context/test-gaps.csv', skip=3, header=true) g
JOIN read_csv('.moderne/context/class-quality-metrics.csv', skip=3, header=true) c
  ON g.repositoryPath = c.repositoryPath AND g.className = c.className
WHERE c.lcom4 > 1
ORDER BY g.riskScore DESC LIMIT 25
```

#### What this gets you

An agent started at the organization root can now answer questions no single-repository agent can. On a 27-repository sample this produced 22 tables and roughly 55,000 rows — a few megabytes of structured facts standing in for millions of lines of source.

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

Draw on the recipe catalog more widely than you might expect. It covers security, code quality, testing, dependency hygiene, and impact analysis, not just framework migrations — and the breadth is easy to miss if every scenario you try is an upgrade.

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

Put bluntly: **your scanner behaves more like an attacker than a defender**. It tells you about one place a pattern appears. The disclosures keep coming, and each time you face the same choice — generalize the pattern and find every occurrence, or throw inference at the whole estate and hope.

The loop looks like this:

1. **Start from a finding.** A scanner such as Mythos reports a vulnerability in one repository.
2. **Generalize the pattern.** The agent turns that single finding into [Trigrep](../../agent-tools/trigrep.md) queries that describe the shape of the problem rather than the one instance of it.
3. **Find every occurrence.** Those queries run across the entire estate in under a second, producing a complete list rather than a sample.
4. **Write the fix.** The agent writes an OpenRewrite recipe that remediates the pattern — see [phase 4](#phase-4-writing-new-recipes-with-an-agent).
5. **Fix it everywhere.** The recipe runs across every affected repository at once.

### Why this compounds at scale

Every step of that loop gets harder as the estate grows, and every step is where the tooling earns its keep:

* **How do you generalize across six thousand repositories?** Manual pattern-writing does not survive contact with that many framework variations.
* **How do you know the answer is complete?** A grep that misses a subclass is worse than no answer, because it produces false confidence. Trigrep's semantic filters — `extends:`, `implements:`, `call:` — resolve through the LST rather than matching text.
* **How do you fix it everywhere once you know?** A recipe applies the same transformation across every match, with a reviewable diff per repository.

:::note
This is not hypothetical. In one analysis of open-source artifacts, `StringSubstitutor.replace` — the method behind the Text4Shell disclosure — appeared in 114 of them. A single advisory routinely reaches far more code than the one repository your scanner flagged.
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

## Phase 4: Writing new recipes with an agent

A standard proof of value usually includes a recipe authoring workshop. Here you spend that hour differently: **your own agent writes the recipe, and one of your developers drives it.**

### Why this replaces the workshop

The most convincing result available in this entire process is one of your own developers — with no OpenRewrite training — producing a sophisticated, working recipe in a single sitting.

You can verify that claim on the spot rather than taking it on trust. It is also the natural conclusion of phase 3, where the recipe is the fix for a pattern your agent has just generalized.

### How it works

The [Moderne skills](../../agent-tools/skills.md) teach agents the parts of recipe development they do not know out of the box — visitor patterns, LST structure, type matching, and testing idioms:

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

### What to look for

* **How long did it take from prompt to passing test?** This is the number worth recording.
* **Did the agent write tests?** The `RewriteTest` framework is part of what the skills teach, and a recipe without tests is not a deliverable.
* **Did the developer need to know OpenRewrite?** If the answer is no, that is the proof point.
* **Does the recipe run cleanly across the whole organization?** A recipe that works on one repository and fails on fifty is a different result.

## Looking beyond the proof of value

Once your team has carried a scenario through all four phases by hand, the natural next step is to hand the whole sequence to an agent and let it run end to end without supervision.

Doing the work by hand first is what makes that worthwhile. Because your team knows what each step should produce, an unattended run becomes something you can check rather than something you have to trust.

## Next steps

* [Review the proof of value prerequisites](./proof-of-value-prerequisites.md) to make sure your environments are ready
* [Read the standard proof of value process](./proof-of-value.md) for the recipe scenarios referenced in phase 2
* [Learn about Moderne Prethink](../../agent-tools/prethink.md) for the full breakdown of the context it generates
* [Explore Moderne Trigrep](../../agent-tools/trigrep.md) for the search syntax used in phase 3
* [Set up the Moderne MCP server](../../agent-tools/mcp/overview.md) to give agents semantic tools, or use the [remote MCP server](../../agent-tools/mcp/remote-server.md) against repositories already ingested into your tenant
