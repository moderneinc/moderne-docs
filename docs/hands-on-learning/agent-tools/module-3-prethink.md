---
sidebar_label: "Module 3: Prethink"
description: Run Prethink on a working set, apply the changes, and ask your agent to visualize the generated code quality metrics.
---

# Module 3: Prethink

In this module, you'll run Moderne Prethink on the workspace you set up in [Module 1](./module-1-cli-and-lsts.md), apply the generated context to your repositories, and inspect what shows up: service endpoints, messaging connections, dependencies, and per-method/class/package code quality metrics. Then you'll ask your agent to read the metrics and propose a refactoring plan.

For the deep reference on what Prethink is, see [Moderne Prethink recipes](../../user-documentation/agent-tools/prethink.md). This module focuses on running it and using the output.

## Exercise 3-1: Run Prethink and apply the changes

### Goals for this exercise

* Run the `UpdatePrethinkContextNoAiStarter` recipe across the workspace
* Apply the generated `.moderne/context/` files into your repositories
* Understand what each phase of the recipe contributed

### Key concepts

Prethink is delivered as an OpenRewrite [composite recipe](https://docs.openrewrite.org/concepts-and-explanations/recipes#composite-recipes) that runs many smaller recipes in phases. Each phase produces data tables, and a final phase exports those tables as CSV and Markdown into `.moderne/context/` inside each repository. Your AI agent reads those files instead of inferring everything from the source code.

You'll run the **No AI** starter in this workshop, which doesn't require an LLM provider. If you have an OpenAI/Gemini/Poolside key handy, you can swap to `UpdatePrethinkContextStarter` later to also get AI-generated method/class summaries. See [Available recipes](../../user-documentation/agent-tools/prethink.md#available-recipes) for the parameters.

### Steps

#### Step 1: Run Prethink across the workspace

From your `~/agent-tools-workshop` directory:

```bash
mod run . --recipe io.moderne.prethink.UpdatePrethinkContextNoAiStarter
```

This will take a few minutes. The recipe runs through architectural discovery, code quality analysis, test coverage mapping, dependency inventory, and CALM architecture diagram generation. The CLI will report `Fix results` per repository as it completes.

:::tip
If you're impatient, target a single repository first to see the output faster:

```bash
mod run ./spring-projects/spring-petclinic --recipe io.moderne.prethink.UpdatePrethinkContextNoAiStarter
```

Then re-run on the full workspace once you've seen what gets produced.
:::

#### Step 2: Apply the changes to your working tree

Until you apply the run, the output exists only as patches. Make the files real:

```bash
mod git apply . --last-recipe-run
```

After this, each repository has a `.moderne/context/` directory and updated agent configuration files (`AGENTS.md`, `CLAUDE.md`, `.cursorrules`, or `.github/copilot-instructions.md`, depending on which agents you're targeting).

#### Step 3 (optional): Examine a recipe run summary

Before moving on, you can ask the CLI for a detailed run summary:

```bash
mod run-history list .
```

This shows what Prethink touched per repository. It's useful if you want to share context with someone or pick a specific repo to dig into.

### Takeaways

* Prethink is a recipe like any other. `mod run` and `mod git apply` are the same commands you'd use for any migration recipe.
* The output is structured data on disk, not a runtime service. Your agent reads it like any other file.

---

## Exercise 3-2: Inspect the generated context

### Goals for this exercise

* See exactly what files Prethink wrote
* Understand the difference between CSV (data) and Markdown (schema) files
* Locate the architectural and quality artifacts you'll use later

### Steps

#### Step 1: Look at what Prethink generated

Pick one of the Spring repositories (for example, `spring-petclinic`) and list the context directory:

```bash
ls spring-projects/spring-petclinic/.moderne/context/
```

You should see CSVs and matching Markdown files for each context type. For the full list, see [What Prethink generates](../../user-documentation/agent-tools/prethink.md#what-prethink-generates). The most interesting ones for this exercise:

| File                              | What it captures                                                                                          |
|-----------------------------------|-----------------------------------------------------------------------------------------------------------|
| `service-endpoints.csv`           | REST/HTTP endpoints with HTTP methods, paths, and the framework that exposed them                         |
| `database-connections.csv`        | JPA entities, repositories, and JDBC connection points                                                    |
| `dependencies.csv`                | Resolved dependency graph including transitive dependencies                                               |
| `method-quality-metrics.csv`      | Per-method cyclomatic complexity, cognitive complexity, ABC, Halstead measures                            |
| `class-quality-metrics.csv`       | Per-class WMC, LCOM4, TCC, CBO, Maintainability Index                                                     |
| `package-quality-metrics.csv`     | Per-package coupling, instability, abstractness, dependency cycles                                        |
| `code-smells.csv`                 | God Class, Feature Envy, Data Class detections with severity and metric evidence                          |
| `test-gaps.csv`                   | Untested public methods ranked by risk score (complexity x architectural centrality)                      |
| `architecture-diagram.md`         | Mermaid architecture diagram you can render directly in GitHub or your IDE                                |

The corresponding `.md` files describe the schema and meaning of each CSV. They're written for humans **and** agents, so opening them is the fastest way to understand a column.

#### Step 2: Open the architecture diagram

Open `architecture-diagram.md` in your editor or a Mermaid renderer (GitHub, GitLab, and most IDEs support Mermaid out of the box). For a Spring web app you'll see services, controllers, databases, and messaging components and the relationships between them.

#### Step 3: Skim the updated agent config

Open the `CLAUDE.md` (or `AGENTS.md`, `.cursorrules`, etc.) at the root of one of the repositories. Prethink added a section pointing to the generated context files with one-line descriptions. This is what enables [progressive discovery](../../user-documentation/agent-tools/prethink.md#how-agents-discover-prethink-context): the agent doesn't load every CSV up-front, it sees the index first and reads only the files it needs.

### Takeaways

* Each context type has a CSV (data) and a Markdown file (schema). The agent uses both.
* Architectural context (endpoints, messaging, databases) lets the agent reason about cross-service behavior without reading every controller.
* The updated agent config file is the entry point. Without it, the agent wouldn't know the context directory exists.

---

## Exercise 3-3: Visualize code quality metrics with your agent

### Goals for this exercise

* Use the per-method, per-class, and per-package quality metrics as input for the agent
* Get the agent to produce a visualization and a remediation plan
* Practice steering the agent toward concrete, prioritized work

### Steps

#### Step 1: Pick a target repository

Pick one repository with rich quality data (Spring PetClinic and Spring Data Commons are good choices). `cd` into it and start your agent from there. For Claude Code:

```bash
cd spring-projects/spring-petclinic
claude
```

#### Step 2: Ask the agent to visualize the metrics

Point the agent at the quality CSVs and ask it to surface what's worst. A few tips for the prompt:

* **Give it the file paths.** The agent already has the CSV references via `CLAUDE.md`, but naming them explicitly speeds it up.
* **Ask for a chart, not a table.** The interesting signal is the *shape* of the distribution, not individual rows.
* **Constrain the output.** "Top 10 by risk" is more useful than "everything sorted by complexity."

<details>
<summary>Suggested prompt</summary>

> Read `.moderne/context/method-quality-metrics.csv`, `.moderne/context/class-quality-metrics.csv`, and `.moderne/context/code-smells.csv`. Produce a single visualization that highlights the methods and classes most in need of refactoring, weighted by complexity and code smells. Render it as a Mermaid diagram or an HTML file I can open in a browser. Cap it to the top 10 methods and top 10 classes.

</details>

Most agents will write a small HTML file with a chart, or a Markdown file with a Mermaid diagram. Either is fine. The point is to see the distribution.

#### Step 3: Ask for a remediation plan

Once the visualization is in place, ask the agent to use the same data to propose a phased plan:

<details>
<summary>Suggested prompt</summary>

> Based on the same files, propose a phased refactoring plan targeting the most in-need areas. For each phase, list:
> 
> * The class or method to refactor
> * The specific code smell or metric that flagged it (cite the column and value)
> * A one-sentence approach (extract method, split class, introduce delegate, etc.)
> * Whether the existing test coverage is sufficient (cross-reference `.moderne/context/test-gaps.csv`)
> 
> Don't write any code yet. I want to review the plan first.

</details>

The point of the cross-reference with `test-gaps.csv` is to make sure the agent doesn't refactor untested methods without flagging the testing gap. This is the kind of reasoning that becomes possible once the context is structured.

:::tip
The Moderne Platform has built-in [Prethink code quality visualizations](../../user-documentation/moderne-platform/getting-started/visualizations.md#prethink-code-quality-visualizations) — executive dashboards, coupling/cohesion matrices, and method risk radar charts — that work on the same data. If you have access to the Platform, compare what your agent produced to the canned visualizations.
:::

### Takeaways

* The quality metrics are most useful as agent feedback, not as a dashboard for humans. Pair them with `test-gaps.csv` so the agent considers test coverage when proposing changes.
* Asking the agent to visualize first, then plan, helps it ground its reasoning in the data rather than its priors.
* Once the agent writes any code, you can re-run Prethink to see whether the metrics actually improved. See [Incremental Prethink via MCP](../../user-documentation/agent-tools/prethink.md#incremental-prethink-via-mcp) for the feedback loop.

## Next up

In [Module 4](./module-4-trigrep.md), you'll build a trigram search index across the same workspace and explore what makes Trigrep faster and more structurally aware than `grep`.
