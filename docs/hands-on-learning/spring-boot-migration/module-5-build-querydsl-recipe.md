---
sidebar_label: "Module 5: Build the QueryDSL recipe"
description: Diagnose the QueryDSL blocker and build a custom upgrade recipe with AI assistance.
---

# Module 5: Building the QueryDSL upgrade recipe

In Module 4, the smoke test revealed that QueryDSL is blocking the Spring Boot 4 upgrade in Wave 1. Rather than reaching for a pre-built recipe, you will now go through the realistic workflow of diagnosing the blocker, characterizing the needed changes, and building a custom recipe with AI assistance. This is the same process you would follow in your own organization when a migration hits a third-party library that has no existing recipe.

## Exercise 5-1: Diagnose the QueryDSL blocker

### Goals for this exercise

* Characterize what specifically broke in the smoke test
* Discover which repos use QueryDSL and what versions
* Identify the concrete set of changes needed

### Steps

#### Step 1: Recall the build failure

In Module 4, Exercise 4-3, Wave 1 failed to build after the Spring Boot 4 upgrade recipe was applied. The failures pointed to QueryDSL: missing Q-classes, `javax.*` imports from generated code, and old `com.mysema.querydsl` coordinates that are incompatible with Spring Boot 3+.

You already saw signs of this in Module 1, Exercise 1-3, where you located code generators across the workspace. Now you will characterize the problem precisely so you can fix it.

#### Step 2: Search for QueryDSL usage

Use `mod search` to find all QueryDSL-related code across the workspace. Trigrep supports file path filters and language filters, so you can target your searches precisely.

First, find the Maven plugin declaration in POM files:

```bash
mod search $WORKSPACE "com.mysema.maven" file:pom.xml --output=plain
```

Next, find QueryDSL dependency declarations in POM files:

```bash
mod search $WORKSPACE "com.mysema.querydsl" file:pom.xml --output=plain
```

Finally, find QueryDSL API usage in Java source code. The runtime package is `com.mysema.query` (not `com.mysema.querydsl`):

```bash
mod search $WORKSPACE "com.mysema.query" lang:java --output=plain
```

The `file:` and `lang:` filters keep results focused — Maven coordinates appear only in POM files, and API usage only in Java sources. You should find that 4 repos use QueryDSL with the old `com.mysema` coordinates.

#### Step 3: Summarize the change specification

Based on the search results, you can now describe exactly what the migration from QueryDSL 3.x to QueryDSL 5.x requires:

* **Dependency coordinates**: `com.mysema.querydsl` → `com.querydsl` (group ID change)
* **Maven plugin**: `com.mysema.maven:apt-maven-plugin` → `com.querydsl:querydsl-apt` with the annotation processor configuration
* **Annotation processor**: `com.mysema.query.apt.jpa.JPAAnnotationProcessor` → `com.querydsl.apt.jpa.JPAAnnotationProcessor`
* **Package renames**: `com.mysema.query` → `com.querydsl` in Java imports (e.g., `com.mysema.query.jpa.impl.JPAQuery`)
* **Jakarta EE alignment**: QueryDSL 5 uses `jakarta.*` APIs, matching Spring Boot 4

This is the change specification you will hand to the AI agent in the next exercise.

### Takeaways

* Build failures become actionable when you characterize the exact changes needed.
* `mod search` across a working set gives you the full picture in seconds.
* The diagnosis naturally produces a change specification you can hand to an AI agent.

## Exercise 5-2: Build the recipe with AI assistance

### Goals for this exercise

* Use the Moderne `create-recipe` skill to scaffold and build a QueryDSL upgrade recipe
* Follow a test-driven approach
* Produce a working recipe JAR

### Steps

#### Step 1: Set up the recipe project

Create a directory for the recipe project and launch your agent:

```bash
mkdir -p $PROJECTS/rewrite-querydsl && cd $PROJECTS/rewrite-querydsl
claude  # or launch your preferred agent
```

#### Step 2: Invoke the skill with the change specification

Invoke the `create-recipe` skill and feed it the change specification from Exercise 5-1. The prompt should describe the concrete changes, not just "fix QueryDSL."

<details>
<summary>Suggested prompt</summary>

> `/moderne:create-recipe`
>
> I need a recipe to upgrade QueryDSL from 3.x (com.mysema.querydsl) to 5.x (com.querydsl) for use with Spring Boot 4 / Jakarta EE. The specific changes are:
>
> 1. Change dependency group ID from `com.mysema.querydsl` to `com.querydsl` for all QueryDSL artifacts
> 2. Update dependency versions to QueryDSL 5.x
> 3. Change the Maven plugin from `com.mysema.maven:apt-maven-plugin` to the QueryDSL annotation processor configuration
> 4. Change the annotation processor from `com.mysema.query.apt.jpa.JPAAnnotationProcessor` to `com.querydsl.apt.jpa.JPAAnnotationProcessor`
> 5. Rename packages from `com.mysema.query` to `com.querydsl` in Java source files (e.g., `com.mysema.query.jpa.impl.JPAQuery`)
>
> Build it as a declarative YAML recipe using existing OpenRewrite primitives like `ChangeDependency`, `ChangePackage`, and `ChangeManagedDependencyGroupId` wherever possible.

</details>

#### Step 3: Review what the agent builds

The agent should scaffold a project, write tests, and implement the recipe. As it works, review these key points:

* Does it use `ChangeDependency` for the coordinate migration?
* Does it use `ChangePackage` for namespace changes?
* Are Maven plugin changes handled?
* Are the tests realistic (before/after patterns with actual QueryDSL usage)?

The QueryDSL migration is almost entirely declarative (dependency changes, plugin changes, package renames), so there should be no need for imperative Java recipes. If the agent suggests imperative code for something that could be handled declaratively, push back.

#### Step 4: Build and install

Once the agent has produced the recipe, build and install it locally:

```bash
./gradlew build  # or mvn clean install, depending on the scaffold
mod config recipes jar install <group>:<artifact>:<version>
```

:::tip
If you are running short on time or your agent is not cooperating, you can use the pre-built recipe as a fallback:

```bash
cd $PROJECTS
git clone https://github.com/modernetraining/rewrite-querydsl.git
cd rewrite-querydsl
mvn clean install
mod config recipes jar install org.openrewrite.recipe:rewrite-querydsl:0.1.0-SNAPSHOT
```

This is the "answer key" — the same recipe you would have built. You can compare your version against it after the workshop.
:::

### Takeaways

* A clear change specification from Exercise 5-1 keeps the agent focused on the right transformations.
* The recipe type hierarchy applies here: dependency changes, plugin changes, and package renames are all declarative.
* The `create-recipe` skill provides the TDD workflow (tests first, then implementation) that catches mistakes early.

:::info
This exercise followed an abbreviated version of the plan-build-test workflow from the [AI recipes workshop](../ai-recipes/workshop-overview.md). If you want to go deeper into AI-assisted recipe development, including Refaster templates, imperative recipes, and testing against larger working sets, check out that workshop.
:::

## Exercise 5-3: Validate against the workspace

### Goals for this exercise

* Run the recipe against the affected repos
* Confirm it produces the expected changes
* Verify builds pass after applying the recipe

### Steps

#### Step 1: Run the recipe

Run your recipe against the workspace to see what it changes:

```bash
mod run $WORKSPACE --recipe <your-recipe-name>
```

Review the diffs using ctrl-click (Windows) or cmd-click (Mac) on the patch links to confirm the changes look correct.

#### Step 2: Apply and build

Apply the changes to the Wave 1 repos and verify the build:

```bash
mod git apply $WORKSPACE/Wave1 --last-recipe-run
$WORKSHOP/build.sh 1
```

If the build fails, diagnose the error, fix the recipe, rebuild, and re-run. This iterate-and-fix loop is how recipe development works in practice.

#### Step 3: Restore the workspace

Once you are satisfied the recipe works, restore the workspace so you can apply it properly in Module 6 as part of the composite recipe:

```bash
mod exec $WORKSPACE git restore MODERNE_BUILD_TOOL_DIR
```

### Takeaways

* Unit tests validate recipe correctness; running against real repos validates completeness.
* The iterate-and-fix loop (run recipe → check build → fix recipe) is how recipe development works in practice.
* You now have a working recipe ready to compose into the freight-train upgrade in [Module 6](./module-6-wave-migration.md).
