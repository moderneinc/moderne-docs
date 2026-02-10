---
sidebar_label: "Module 1: Plan"
description: Install the Moderne Skills, try them out, and plan a Jackson 2→3 migration recipe with AI assistance.
---

# Module 1: Plan

In this module, you'll learn the Moderne Skills workflow for AI-assisted recipe development and use AI to research and plan a Jackson 2.x → 3.x migration recipe. The key takeaway: **start with a plan, not with code.**

## Exercise 1-1: Try the Moderne Skills

### Goals for this exercise

* Install the Moderne Skills and verify they work
* See firsthand how skills change the AI's behavior

### Key concepts

The Moderne CLI ships with AI skills that teach your coding agent how to work with OpenRewrite recipes effectively. Instead of starting from scratch, these skills give your agent procedural knowledge about recipe development.

The three skills you'll use today:

| Skill | What it does |
|-------|-------------|
| **`/moderne:create-recipe`** | Guides the AI through recipe type selection, project scaffolding, writing tests, and implementing recipes following OpenRewrite best practices |
| **`/moderne:run-recipe`** | Handles compiling the recipe, setting up a working set of real repositories, running the recipe, and diagnosing results |
| **`/moderne:create-organization`** | Helps find and assemble a curated set of repositories to test against |

:::note
**Using a different AI agent?** These skills follow the open [Agent Skills](https://agentskills.io) standard. You can load the skill Markdown files as context in any AI agent. See the [workshop overview](./workshop-overview.md) for details.
:::

### Steps

#### Step 1: Install the Moderne Skills

If you haven't already, install the Moderne Skills from the command line:

```bash
mod config claude plugin update
```

#### Step 2: Verify the skills are available

In Claude Code, type `/` and you should see the Moderne skills listed (e.g., `/moderne:create-recipe`).

#### Step 3: Try it out

Invoke the `create-recipe` skill with a simple, throwaway request to see what it does:

```
/moderne:create-recipe
```

When prompted, give it a simple task:

> I want to create an OpenRewrite recipe that renames the method `getItems()` to `items()` on `com.example.ShoppingCart`.

Watch how the agent responds. Don't worry about the output -- just notice how the skill shapes the agent's approach:

* The AI should choose a recipe type *before* writing any code (declarative vs Refaster vs imperative)
* The skill writes **tests** using OpenRewrite's `RewriteTest` framework with before/after code snippets
* It follows a structured project layout rather than just dumping code (or YAML) in a single file

Without the skill, you may have only gotten a single YAML recipe file with no tests.

:::tip
When you've seen enough, you can stop the agent (`Escape` in Claude Code) since you won't be using this output.
:::

### Takeaways

* The Moderne Skills give your AI coding agent specialized, procedural knowledge about OpenRewrite recipe development and usage
* Human judgment is still essential at every step (AI proposes, you guide it)

---

## Exercise 1-2: Plan the Jackson 2→3 recipe with AI

### Goals for this exercise

* Use AI to read a migration guide and propose a comprehensive set of changes
* Practice scoping AI output with human judgment
* Understand the recipe type hierarchy: declarative YAML > Refaster > imperative

### Context

The skills you just tried form an iterative development loop that we'll follow through the rest of this lab:

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   Plan ──→ Create Recipe ──→ Run Recipe ──→ Fix ───┘
│     │                            │
│     │                            ▼
│     │                     Compare results
│     │                     to predictions
│     ▼
│   Scope the work
│   with human judgment
│
└─────────────────────────────────────────────────────
```

Here's how this maps to the rest of the workshop:
* **This exercise:** Plan what the recipe should do, scope it down, choose recipe types
* **Module 2:** Build the recipe with AI assistance, writing tests first
* **Module 3:** Run the recipe against real repos, compare to the existing production recipe, iterate

Jackson 3.x is a major release with significant breaking changes: package renames (`com.fasterxml.jackson` → `tools.jackson`), class renames, method renames, dependency coordinate changes, and behavioral differences. The [official migration guide](https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md) documents these changes comprehensively.

:::note
A production-quality Jackson 2→3 recipe already exists in OpenRewrite (`org.openrewrite.java.jackson.UpgradeJackson_2_3`). We're building our own version as a learning exercise. At the end, we'll compare our output to the existing recipe to see how close we got.
:::

### Steps

#### Step 1: Research the migration

Ask your AI agent to research the migration. Give it the task and point it at the migration guide.

<details>
<summary>Suggested prompt</summary>

> I want to create an OpenRewrite recipe to help migrate Java projects from Jackson 2.x to Jackson 3.x. Please read the official migration guide at https://github.com/FasterXML/jackson/blob/main/jackson3/MIGRATING_TO_JACKSON_3.md and propose a comprehensive list of code changes that could be automated with OpenRewrite recipes. Don't reference or copy from any existing OpenRewrite Jackson recipes -- build the plan from the migration guide itself.
>
> For each change, note:
> - What the change is (old → new)
> - Whether it could be handled by an existing OpenRewrite recipe (like ChangeType, ChangeMethodName, ChangePackage, ChangeDependency) or would need a custom recipe
> - The priority (how commonly used is this API?)

</details>

#### Step 2: Scope it down

Review the AI's proposed list. It will likely propose 30+ changes. That's too many for this lab. Your job is to scope it down to a manageable subset (~8-10 operations) that covers the most impactful changes and demonstrates different recipe types.

A good scoped subset might include:

| Change | Type | Recipe approach |
|--------|------|----------------|
| Package rename: `com.fasterxml.jackson` → `tools.jackson` | Package | `ChangePackage` (declarative) |
| Dependency: `com.fasterxml.jackson.core:jackson-core` → `tools.jackson.core:jackson-core` | Dependency | `ChangeDependency` (declarative) |
| Dependency: `com.fasterxml.jackson.core:jackson-databind` → `tools.jackson.core:jackson-databind` | Dependency | `ChangeDependency` (declarative) |
| Exception: `JsonProcessingException` → `JacksonException` | Type rename | `ChangeType` (declarative) |
| Exception: `JsonMappingException` → `DatabindException` | Type rename | `ChangeType` (declarative) |
| Class: `JsonDeserializer` → `ValueDeserializer` | Type rename | `ChangeType` (declarative) |
| Class: `JsonSerializer` → `ValueSerializer` | Type rename | `ChangeType` (declarative) |
| Method: `writeObject()` → `writePOJO()` | Method rename | `ChangeMethodName` (declarative) |
| Method: `getCurrentValue()` → `currentValue()` | Method rename | `ChangeMethodName` (declarative) |
| Remove `registerModule(new JavaTimeModule())` | Module removal | Custom imperative recipe |

#### Step 3: Confirm recipe types

Ask the AI to confirm recipe types for each change. Validate that it's choosing the simplest recipe type that works.

<details>
<summary>Suggested prompt</summary>

> Good. Let's scope this down. I want to focus on these changes for our recipe:
>
> [paste your scoped list]
>
> For each one, confirm: what's the simplest OpenRewrite recipe type that can handle this? Remember the hierarchy: use declarative YAML if you can compose existing recipes, Refaster for simple expression replacements, and imperative Java only when the others can't handle it.

</details>

#### Step 4: Validate recipe type choices

Key things to check:
* Package renames, type renames, method renames, and dependency changes should all be **declarative YAML** using existing OpenRewrite primitives
* Removing method calls that inspect arguments (like `registerModule(new JavaTimeModule())`) genuinely requires an **imperative** recipe
* If the AI suggests writing an imperative recipe for something that could be declarative, push back

#### Step 5: Agree on the plan

You should now have a clear list of ~8-10 changes, each with a recipe type. This is your blueprint for Module 2.

<details>
<summary>Reference: What a good plan looks like</summary>

```
Jackson 2→3 Migration Recipe Plan
==================================

Declarative YAML (top-level composite recipe):
1. ChangePackage: com.fasterxml.jackson → tools.jackson
2. ChangeDependency: com.fasterxml.jackson.core:jackson-core → tools.jackson.core:jackson-core (version 3.x)
3. ChangeDependency: com.fasterxml.jackson.core:jackson-databind → tools.jackson.core:jackson-databind (version 3.x)
4. ChangeType: com.fasterxml.jackson.core.JsonProcessingException → tools.jackson.core.JacksonException
5. ChangeType: com.fasterxml.jackson.databind.JsonMappingException → tools.jackson.databind.DatabindException
6. ChangeType: com.fasterxml.jackson.databind.JsonDeserializer → tools.jackson.databind.ValueDeserializer
7. ChangeType: com.fasterxml.jackson.databind.JsonSerializer → tools.jackson.databind.ValueSerializer
8. ChangeMethodName: writeObject → writePOJO (on JsonGenerator)
9. ChangeMethodName: getCurrentValue → currentValue (on JsonParser)

Imperative Java recipe:
10. Remove calls to registerModule() for modules now built-in to Jackson 3
    (JavaTimeModule, ParameterNamesModule, Jdk8Module)

Stretch - Refaster template:
11. objectMapper.reader().forType(Foo.class) → objectMapper.readerFor(Foo.class)
```

</details>

### Takeaways

* AI is excellent at reading documentation and proposing comprehensive change lists
* Human judgment is critical for scoping -- the AI will propose everything; you pick what matters most
* The recipe type hierarchy (declarative > Refaster > imperative) should always guide your choices
* Starting with a plan prevents the AI from going off-track during implementation
