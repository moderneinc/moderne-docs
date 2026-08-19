---
sidebar_label: "Module 1: Plan"
description: Set up your coding agent, see the recipe development loop, and plan a Jackson 2→3 migration recipe with AI assistance.
---

# Module 1: Plan

In this module, you'll see the development loop this workshop follows for AI-assisted recipe authoring. After that, you'll learn how to use AI to research and plan a Jackson 2.x → 3.x migration recipe. The key takeaway: **start with a plan, not with code.**

## Exercise 1-1: Set up your agent and see the loop

### Goals for this exercise

* Get your agent ready to work on recipes
* See the development loop the rest of this workshop follows

### Key concepts

Building a recipe with an agent is a loop, not a single prompt:

1. Tell the agent what kind of recipe you want.
2. Have it find repositories to test against, and discover test cases from what it finds in real code.
3. Implement the recipe until it passes those test cases.
4. Run it against the real repositories and check they still compile and pass their own tests.
5. If the results fall short, go back to step 2 and iterate. If they're clean, decide whether you're done or whether the test set should be wider.

Each module in this workshop is one part of that loop: plan here, build in Module 2, test and iterate in Module 3.

Coding models already know OpenRewrite reasonably well — the framework and its recipes are open source and well represented in training data — so you can work this loop with your agent and the `mod` CLI alone.

The CLI can also install a `create-recipe` skill that encodes recipe type selection, project layout, and `RewriteTest` conventions, so the agent doesn't have to rediscover them each session. It's an accelerator, not a prerequisite.

:::note
This workshop demos with **Claude Code**, but the same workflow applies to Windsurf, Sourcegraph Amp, Cursor, GitHub Copilot, OpenAI Codex, and OpenCode. Results may vary across agents, but the loop and the principles are the same.
:::

### Steps

#### Step 1 (optional): Install the Moderne skills

```bash
mod config agent-tools install
```

In Claude Code, type `/` afterward and you should see entries like `/moderne:create-recipe`. For other agents, see [Skills for AI coding agents](../../user-documentation/agent-tools/skills.md) for install locations and how to verify.

:::note
`create-recipe` requires Moderne CLI 4.5.3 or later. On an earlier version, skip this step — everything below works without it.
:::

#### Step 2: Try a throwaway request

Open your agent and give it a small, self-contained task:

> I want to create an OpenRewrite recipe that renames the method `getItems()` to `items()` on `com.example.ShoppingCart`.

Don't worry about the output. Watch the shape of the response instead:

* Does it choose a [recipe type](../../user-documentation/recipes/authoring-recipes/writing-recipes/types-of-recipes.md) *before* writing code (declarative vs Refaster vs imperative)?
* Does it write **tests** with OpenRewrite's `RewriteTest` framework, using before/after code snippets?
* Does it lay out a project, rather than dumping everything in one file?

If your agent skips these, say so directly — "choose the recipe type first" or "write the tests before the implementation." That kind of correction is the whole job in Module 2, and it's worth seeing now on something disposable.

:::tip
When you've seen enough, stop the agent. You won't be using this output.
:::

### Takeaways

* Recipe development with an agent is an iterative loop, and the test repositories are what tell you whether you're done.
* Human judgment is essential at every step. The agent proposes, you guide it.

---

## Exercise 1-2: Plan the Jackson 2→3 recipe with AI

### Goals for this exercise

* Use the agent to read a migration guide and propose a comprehensive set of changes
* Practice scoping agent output with human judgment
* Understand the recipe type hierarchy: declarative YAML > Refaster > imperative

### How this maps to the workshop

Here is where each module lands in the loop from Exercise 1-1:

* **This exercise:** Plan what the recipe should do, scope it down, and confirm recipe type(s)
* **Module 2:** Build the recipe with AI assistance, writing tests first to validate output
* **Module 3:** Run the recipe against real repos, compare to desired results, and iterate

The loop rarely runs cleanly end to end on the first pass. Module 3 sends you back to Module 2 more than once, and that's the normal shape of the work rather than a sign something went wrong.

### About the Jackson 2→3 migration

Jackson 3.x is a major release with significant breaking changes: package renames (`com.fasterxml.jackson` → `tools.jackson`), class renames, method renames, dependency coordinate changes, and behavioral differences. The [official migration guide](https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md) documents these changes comprehensively.

:::note
A production-quality Jackson 2→3 recipe already exists in OpenRewrite (`org.openrewrite.java.jackson.UpgradeJackson_2_3`). You're building your own version as a learning exercise. At the end, you can compare your output to the existing recipe to see how close you got.
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

Ask your agent to research the migration. Point it at the [source documentation](https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md) and ask it to propose automatable changes. A few tips for crafting your prompt:

* **Give it a primary source.** Point the agent at the [migration guide URL](https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md) so it works from authoritative documentation, not its own training data.
* **Ask for structured output.** Request a list with specific information that you can use to validate the plan and guide the process (e.g. what changed, recipe type, priority) so the output is easy to review and scope in Step 3.
* **Tell it what *not* to do.** In this case, explicitly say not to reference existing OpenRewrite Jackson recipes so it reasons from the migration guide itself. (Since a production Jackson 2→3 recipe already exists, the agent might try to just copy from it rather than learning to build one from source documentation. In a real-world scenario where no existing recipe exists, you wouldn't need this constraint.)

:::info
Throughout this workshop, you'll find **suggested prompts** in collapsible sections. These are examples tuned for Claude Code. You don't have to use them verbatim; adapt them to your style or agent. They're there if you want a starting point.
:::

<details>
<summary>Suggested prompt</summary>

> I want to create an OpenRewrite recipe to help migrate Java projects from Jackson 2.x to Jackson 3.x. Please read the official migration guide at https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md and propose a comprehensive list of code changes that could be automated with OpenRewrite recipes. Don't reference or copy from any existing OpenRewrite Jackson recipes. Build the plan from the migration guide itself.
>
> For each change, note:
> * What the change is (old → new)
> * Your suggested recipe type
> * The priority (how commonly used is this API?)

</details>

#### Step 3: Scope it down

It will take several minutes to analyze the migration guide and come up with a plan. The agent may even write the plan to a file (e.g., `PLAN.md`) for reference later. That's helpful, since the plan serves as context for the build phase.

Once it's done, the agent may be eager to keep going and start building. It's a good idea to pause it here so you can evaluate the plan first. You'll likely have dozens of proposed changes across many categories. The agent may even organize them into phases on its own. You could ask the agent to build the entire migration recipe at once, and in practice that's a valid approach. For this workshop, you'll scope down to a first phase of high-impact changes so you can focus on learning the workflow. A phased approach is also useful in practice: start with the most impactful operations, validate them against real code, then expand coverage over time.

If the agent already proposed phases, review the first phase and refine it. If not, ask it to prioritize. Either way, you want a scoped subset of 8-10 operations with a mix of recipe types, including at least one that requires a custom imperative recipe (not just declarative primitives).

<details>
<summary>Suggested prompt</summary>

> Good list. Let's focus on a first phase of 8-10 of the highest-impact operations. Summarize the picks in a table with: what the change is, the recipe type, and why it's high priority.

</details>

#### Step 4: Review the subset

Your results will vary, and that's expected. Most of the first phase will likely be declarative recipes, which is a good sign — the simplest recipe type that does the job is the right one. But there is often the need for a transformation that requires something more, so one or two Refaster and/or imperative recipes will likely be proposed as well (especially since you asked for it to). Review the agent's proposed subset and recipe type suggestions. Key things to check:

* Package renames, type renames, method renames, and dependency changes should all be **declarative YAML** using existing OpenRewrite primitives
* Expression-level replacements (e.g., replacing one method chain with another) are a good fit for **Refaster templates**
* Transformations that require inspecting method arguments or conditionally removing statements genuinely require an **imperative** recipe
* If the agent suggests a more complex recipe type for something that could be handled by a simpler one, push back

If you disagree with a choice, ask the agent to explain its reasoning and consider alternatives. If the agent wrote the full plan to a file like `PLAN.md`, you can review it yourself to confirm you agree with what was included and what was left out.

For reference, here's what a reasonable subset might look like:

<details>
<summary>Reference: example scoped subset</summary>

| Change (old → new)                                                        | Recipe type                                                  |
|---------------------------------------------------------------------------|--------------------------------------------------------------|
| `com.fasterxml.jackson` → `tools.jackson` (package)                       | Declarative (`ChangePackage`)                                |
| `com.fasterxml.jackson.*` → `tools.jackson.*` (dependencies, version 3.x) | Declarative (`ChangeDependency`)                             |
| `JsonProcessingException` → `JacksonException`                            | Declarative (`ChangeType`)                                   |
| `JsonSerializer` → `ValueSerializer`                                      | Declarative (`ChangeType`)                                   |
| `JsonDeserializer` → `ValueDeserializer`                                  | Declarative (`ChangeType`)                                   |
| `SerializerProvider` → `SerializationContext`                             | Declarative (`ChangeType`)                                   |
| `JsonToken.FIELD_NAME` → `JsonToken.PROPERTY_NAME`                        | Refaster template                                            |
| `SerializationFeature` constants → `DateTimeFeature` / `EnumFeature`      | Refaster template                                            |
| Java 8 module deps + `registerModule()` calls → removed                   | Declarative (`RemoveDependency` + `RemoveMethodInvocations`) |
| `new ObjectMapper()` → `JsonMapper.builder().build()`                     | Imperative Java recipe                                       |

</details>

#### Step 5: Agree on the plan

Once you and the agent have settled on the subset, you should have a clear list of ~8-10 changes, each with a recipe type. This is your blueprint for [Module 2](./module-2-build.md).

### Takeaways

* The agent is excellent at reading documentation and proposing comprehensive change lists.
* Human judgment is critical for scoping. The agent will propose everything; you pick what matters most.
* The recipe type hierarchy (declarative > Refaster > imperative) should always guide your choices.
* Starting with a plan prevents the agent from going off-track during implementation.
