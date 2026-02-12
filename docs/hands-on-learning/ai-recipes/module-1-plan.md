---
sidebar_label: "Module 1: Plan"
description: Install the Moderne Skills, try them out, and plan a Jackson 2→3 migration recipe with AI assistance.
---

# Module 1: Plan

In this module, you'll learn about the Moderne Skills workflow for AI-assisted recipe development. After that, you'll learn how to use AI to research and plan a Jackson 2.x → 3.x migration recipe.The key takeaway: **start with a plan, not with code.**

## Exercise 1-1: Try the Moderne Skills

### Goals for this exercise

* Install the Moderne Skills and verify they work
* See firsthand how skills change the agent's behavior

### Key concepts

The Moderne CLI ships with AI skills that teach your coding agent how to work with OpenRewrite recipes effectively. Instead of starting from scratch, these skills give your agent procedural knowledge about recipe development.

The three skills you'll use today:

| Skill | What it does |
|-------|-------------|
| **create-recipe** | Guides the agent through recipe type selection, project scaffolding, writing tests, and implementing recipes following OpenRewrite best practices |
| **run-recipe** | Handles compiling the recipe, setting up a working set of real repositories, running the recipe, and diagnosing results |
| **create-organization** | Helps find and assemble a curated set of repositories to test against |

These skills are supported across multiple agents. See [Skills for AI coding agents](../../user-documentation/moderne-cli/how-to-guides/coding-agent-skills.md) for details on supported agents and how to invoke skills in each one.

:::note
This workshop demos with **Claude Code**, but skills are also supported for Windsurf, Sourcegraph Amp, Cursor, GitHub Copilot, and Codex. Results may vary across agents, but the workflow and principles are the same.
:::

### Steps

#### Step 1: Install the Moderne Skills

If you haven't already, install the Moderne Skills for all detected coding agents using the CLI:

```bash
mod config moderne skills update
```

#### Step 2: Verify the skills are available

In Claude Code, type `/` and you should see the Moderne skills listed (e.g., `/moderne:create-recipe`). (For other agents, see [Skills for AI coding agents](../../user-documentation/moderne-cli/how-to-guides/coding-agent-skills.md) for how to verify installation and invoke the skills.)

#### Step 3: Try it out

Invoke the `create-recipe` skill with a simple, throwaway request to see what it does. In Claude Code:

```
/moderne:create-recipe
```

:::tip
If you're using a different agent, invoke the skill using the method described in [Skills for AI coding agents](../../user-documentation/moderne-cli/how-to-guides/coding-agent-skills.md). For example, in Cursor use `@moderne-create-recipe`, or in Windsurf reference the skill by name in your prompt.
:::

When prompted, give it a simple task:

> I want to create an OpenRewrite recipe that renames the method `getItems()` to `items()` on `com.example.ShoppingCart`.

Watch how the agent responds. Don't worry about the output. Just notice how the skill shapes the agent's approach:

* The agent should choose a [recipe type](https://docs.openrewrite.org/authoring-recipes/types-of-recipes) *before* writing any code (declarative vs Refaster vs imperative)
* The skill writes **tests** using OpenRewrite's `RewriteTest` framework with before/after code snippets
* It follows a structured project layout rather than just dumping code (or YAML) in a single file

Without the skill, you may have only gotten a single YAML recipe file with no tests.

:::tip
When you've seen enough, you can stop the agent (`Escape` in Claude Code) since you won't be using this output.
:::

### Takeaways

* The Moderne Skills give your AI coding agent specialized, procedural knowledge about OpenRewrite recipe development and usage.
* Human judgment is still essential at every step (the agent proposes, you guide it).

---

## Exercise 1-2: Plan the Jackson 2→3 recipe with AI

### Goals for this exercise

* Use the agent to read a migration guide and propose a comprehensive set of changes
* Practice scoping agent output with human judgment
* Understand the recipe type hierarchy: declarative YAML > Refaster > imperative

### Context

The skills you just tried form an iterative development loop. Take a look at the **Workflow** section at the bottom of the `create-recipe` skill to see the steps:

1. **Identify the transformation** (what code pattern should change to what?)
2. **Choose recipe type** (declarative > Refaster > imperative)
3. **Write tests first** (define before/after expectations)
4. **Implement the recipe**
5. **Test with `run-recipe`** (run against real repositories to validate)

Here's how this maps to the rest of the workshop:
* **This exercise:** Steps 1 and 2. Plan what the recipe should do, scope it down, confirm recipe type(s)
* **Module 2:** Steps 3 and 4. Build the recipe with AI assistance, writing tests first to validate output
* **Module 3:** Step 5. Run the recipe against real repos, compare to desired results, iterate

Jackson 3.x is a major release with significant breaking changes: package renames (`com.fasterxml.jackson` → `tools.jackson`), class renames, method renames, dependency coordinate changes, and behavioral differences. The [official migration guide](https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md) documents these changes comprehensively.

:::note
A production-quality Jackson 2→3 recipe already exists in OpenRewrite (`org.openrewrite.java.jackson.UpgradeJackson_2_3`). You're building our own version as a learning exercise. At the end, you can compare your output to the existing recipe to see how close you got.
:::

### Steps

#### Step 1: Set up your working directory

Create a directory for your recipe project and launch your agent from there:

```bash
mkdir recipe-jackson-migration && cd recipe-jackson-migration
claude  # or launch your preferred agent
```

This is where your recipe project will live for the rest of the workshop.

#### Step 2: Research the migration

Invoke the `create-recipe` skill, then ask your agent to research the migration. Point it at the source documentation and ask it to propose automatable changes. A few tips for crafting your prompt:

* **Give it a primary source.** Point the agent at the [migration guide URL](https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md) so it works from authoritative documentation, not its own training data.
* **Ask for structured output.** Request a list with specific information that you can use to validate the plan and guide the process (e.g. what changed, recipe type, priority) so the output is easy to review and scope in Step 3.
* **Tell it what *not* to do.** In this case, explicitly say not to reference existing OpenRewrite Jackson recipes so it reasons from the migration guide itself. (Since a production Jackson 2→3 recipe already exists, the agent might try to just copy from it rather than learning to build one from source documentation. In a real-world scenario where no existing recipe exists, you wouldn't need this constraint.)

:::info
Throughout this workshop, you'll find **suggested prompts** in collapsible sections. These are examples tuned for Claude Code. You don't have to use them verbatim; adapt them to your style or agent. They're there if you want a starting point.
:::

<details>
<summary>Suggested prompt</summary>

> `/moderne:create-recipe`
>
> I want to create an OpenRewrite recipe to help migrate Java projects from Jackson 2.x to Jackson 3.x. Please read the official migration guide at https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md and propose a comprehensive list of code changes that could be automated with OpenRewrite recipes. Don't reference or copy from any existing OpenRewrite Jackson recipes. Build the plan from the migration guide itself.
>
> For each change, note:
> - What the change is (old → new)
> - Your suggested recipe type
> - The priority (how commonly used is this API?)

</details>

#### Step 3: Scope it down

It will take several minutes to analyze the migration guide and come up with a plan. The agent may even write the plan to a file (e.g., `PLAN.md`) for reference later. That's helpful, since the plan serves as context for the build phase.

Once it's done, the agent may be eager to keep going and start building. It's a good idea to pause it here so you can evaluate the plan first. You'll likely have dozens of proposed changes across many categories. The agent may even organize them into phases on its own. You could ask the agent to build the entire migration recipe at once, and in practice that's a valid approach. For this workshop, you'll scope down to a first phase of high-impact changes so you can focus on learning the workflow. A phased approach is also useful in practice: start with the most impactful operations, validate them against real code, then expand coverage over time.

If the agent already proposed phases, review the first phase and refine it. If not, ask it to prioritize. Either way, you want a scoped subset of 8-10 operations with a mix of recipe types, including at least one that requires a custom imperative recipe (not just declarative primitives).

<details>
<summary>Suggested prompt</summary>

> Good list. Let's focus on a first phase of 8-10 of the highest-impact operations. I want a mix of recipe types, including at least one that would require a custom imperative recipe (not just declarative primitives). Summarize the picks in a table with: what the change is, the recipe type, and why it's high priority.

</details>

#### Step 4: Review the subset

Your results will vary, and that's expected. Most of the first phase will likely be declarative recipes, which is a good sign. The skill encourages using the simplest recipe type possible. But there is often the need for a transformation that requires something more, so one or two Refaster and/or imperative recipes will likely be proposed as well (especially since you asked for it to). Review the agent's proposed subset and recipe type suggestions. Key things to check:

* Package renames, type renames, method renames, and dependency changes should all be **declarative YAML** using existing OpenRewrite primitives
* Expression-level replacements (e.g., replacing one method chain with another) are a good fit for **Refaster templates**
* Transformations that require inspecting method arguments or conditionally removing statements genuinely require an **imperative** recipe
* If the agent suggests a more complex recipe type for something that could be handled by a simpler one, push back

If you disagree with a choice, ask the agent to explain its reasoning and consider alternatives. If the agent wrote the full plan to a file like `PLAN.md`, you can review it yourself to confirm you agree with what was included and what was left out.

For reference, here's what a reasonable subset might look like:

<details>
<summary>Reference: example scoped subset</summary>

| Change (old → new) | Recipe type |
|---------------------|-------------|
| `com.fasterxml.jackson` → `tools.jackson` (package) | Declarative (`ChangePackage`) |
| `com.fasterxml.jackson.*` → `tools.jackson.*` (dependencies, version 3.x) | Declarative (`ChangeDependency`) |
| `JsonProcessingException` → `JacksonException` | Declarative (`ChangeType`) |
| `JsonSerializer` → `ValueSerializer` | Declarative (`ChangeType`) |
| `JsonDeserializer` → `ValueDeserializer` | Declarative (`ChangeType`) |
| `SerializerProvider` → `SerializationContext` | Declarative (`ChangeType`) |
| `JsonToken.FIELD_NAME` → `JsonToken.PROPERTY_NAME` | Refaster template |
| `SerializationFeature` constants → `DateTimeFeature` / `EnumFeature` | Refaster template |
| Java 8 module deps + `registerModule()` calls → removed | Declarative (`RemoveDependency` + `RemoveMethodInvocations`) |
| `new ObjectMapper()` → `JsonMapper.builder().build()` | Imperative Java recipe |

</details>

#### Step 5: Agree on the plan

Once you and the agent have settled on the subset, you should have a clear list of ~8-10 changes, each with a recipe type. This is your blueprint for Module 2.

### Takeaways

* The agent is excellent at reading documentation and proposing comprehensive change lists.
* Human judgment is critical for scoping. The agent will propose everything; you pick what matters most.
* The recipe type hierarchy (declarative > Refaster > imperative) should always guide your choices.
* Starting with a plan prevents the agent from going off-track during implementation.
