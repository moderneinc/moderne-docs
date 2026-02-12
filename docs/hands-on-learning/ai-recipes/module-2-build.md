---
sidebar_label: "Module 2: Build"
description: Build a Jackson 2→3 migration recipe with AI using test-driven development, declarative YAML, and imperative Java.
---

# Module 2: Build

In this module, you'll build the Jackson 2→3 migration recipe with AI assistance. You should still be in the same agent session from Module 1, with the `create-recipe` skill active and your plan in context. If you need to start a new session, re-invoke the skill and point the agent at your plan file before continuing.

You'll follow a test-driven development (TDD) approach: write tests first, validate them, then implement the recipe. Along the way, you'll create a declarative YAML recipe and an imperative Java recipe.

:::tip
The agent will often try to do multiple steps at once. The exercises below break things into separate steps, and the suggested prompts ask the agent to stop between them. If you're comfortable letting the agent run further, use your own prompts or tell it to go ahead when it asks if it can proceed. Agents typically list tasks as they go, so you can follow along and review at natural checkpoints.
:::

## Exercise 2-1: Scaffold the recipe project

### Goals for this exercise

* Set up a recipe development project
* Understand the project structure

### Steps

#### Step 1: Scaffold the project

Ask the agent to set up the project. The skill includes the project structure, build configuration, and dependencies needed for recipe development, so it can scaffold a project from scratch.

<details>
<summary>Suggested prompt</summary>

> Now let's start building. Set up a recipe project for the Jackson 2→3 migration. Use the package name `com.yourorg.jackson` and name the project `rewrite-jackson-migration`. Make sure to add Jackson 2.x libraries as test dependencies so the tests can resolve Jackson types. Just set up the project for now. Don't write any tests or recipes yet.

</details>

#### Step 2: Verify the project structure

The agent should have set up:
* `src/main/java/com/yourorg/jackson/` for recipe implementations
* `src/main/resources/META-INF/rewrite/` for declarative YAML recipes
* `src/test/java/com/yourorg/jackson/` for tests
* `build.gradle.kts` with OpenRewrite dependencies and Jackson 2.x `testRuntimeOnly` dependencies

#### Step 3: Verify the project builds

The agent may have already built the project. If not, or if you want to confirm for sure, verify the project compiles before moving on:

```bash
./gradlew build
```

:::tip
If you're not already working in an IDE, now is a good time to open the project in one so you can review the files as the agent creates them.
:::

### Takeaways

* The skill includes the build configuration and project structure, so the agent can scaffold from scratch.
* Always verify the project builds before you start adding code.

---

## Exercise 2-2: Build the declarative transformations

### Goals for this exercise

* See how the skill drives test-first development
* Validate AI-generated test cases and recipe output
* Create a composite YAML recipe using existing OpenRewrite primitives
* Iterate on test failures

### Context

The skill's workflow guides the agent to write tests first, then implement. OpenRewrite's testing framework uses a before/after pattern that works exceptionally well with this approach:
* **Before**: The code as it looks today (Jackson 2.x)
* **After**: The code as it should look after migration (Jackson 3.x)

This is exactly the kind of paired example that an agent is good at generating, and that humans can quickly validate by eye.

### Steps

#### Step 1: Start building

Tell the agent to start on the declarative transformations. The skill's workflow already specifies that the agent should write tests first. The suggested prompt reinforces this, which can't hurt (especially when prompting step by step). If you want to see how the agent acts without that reinforced instruction, try without it, but watch it and make sure it writes tests first.

<details>
<summary>Suggested prompt</summary>

> Let's start building the declarative transformations from our plan. Write tests first, then implement the recipes.

</details>

The agent should write tests using the `RewriteTest` before/after pattern, then implement a declarative YAML recipe composing existing OpenRewrite primitives like `ChangePackage`, `ChangeType`, `ChangeMethodName`, and `ChangeDependency`. 

It will likely build, run the tests, and iterate on failures. Watch for the agent "fixing" a test failure by changing the test's expected output rather than fixing the recipe. The tests define what "correct" looks like. 

If a test fails, the recipe should change, not the test (unless the test itself is wrong, which is why validating the tests in Step 2 matters).

#### Step 2: Review the test cases

Whether the agent wrote tests first or after the recipe, review them carefully. This is a critical human validation step. Check:
* Are the **import statements** included and correct in both before and after?
* Are the **before examples** realistic? (Would someone actually write this code?)
* Are the **after examples** accurate per the migration guide?
* Does each test focus on **one transformation** so failures are easy to diagnose?
* Are there reasonable **no-change tests** that verify unrelated code is left untouched?

<details>
<summary>Reference: What a good test case looks like</summary>

```java
@Test
void renamesJsonProcessingException() {
    rewriteRun(
        //language=java
        java(
            """
            import com.fasterxml.jackson.core.JsonProcessingException;

            class Handler {
                void handle() {
                    try {
                        // some Jackson operation
                    } catch (JsonProcessingException e) {
                        e.printStackTrace();
                    }
                }
            }
            """,
            """
            import tools.jackson.core.JacksonException;

            class Handler {
                void handle() {
                    try {
                        // some Jackson operation
                    } catch (JacksonException e) {
                        e.printStackTrace();
                    }
                }
            }
            """
        )
    );
}
```

</details>

#### Step 3: Review the YAML recipe

Key things to check:
* Are all **fully qualified type names** correct? (You may want to double-check these against the migration guide.)
* Are the `ChangeMethodName` method patterns correct? (They should use the format `fully.qualified.Type methodName(..)`.)
* Are dependency coordinates correct? (`groupId:artifactId` format)

<details>
<summary>Reference: What the YAML recipe should look like</summary>

```yaml
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.jackson.UpgradeJackson2To3
displayName: Upgrade Jackson 2.x to 3.x
description: >-
  Migrates Jackson 2.x APIs to Jackson 3.x equivalents, including package
  renames, type renames, method renames, and dependency updates.
recipeList:
  # Package rename
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.fasterxml.jackson
      newPackageName: tools.jackson
      recursive: true

  # Dependency updates
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.core
      oldArtifactId: jackson-core
      newGroupId: tools.jackson.core
      newArtifactId: jackson-core
      newVersion: 3.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.fasterxml.jackson.core
      oldArtifactId: jackson-databind
      newGroupId: tools.jackson.core
      newArtifactId: jackson-databind
      newVersion: 3.x

  # Exception type renames
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.core.JsonProcessingException
      newFullyQualifiedTypeName: tools.jackson.core.JacksonException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.databind.JsonMappingException
      newFullyQualifiedTypeName: tools.jackson.databind.DatabindException

  # Core class renames
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.databind.JsonDeserializer
      newFullyQualifiedTypeName: tools.jackson.databind.ValueDeserializer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.fasterxml.jackson.databind.JsonSerializer
      newFullyQualifiedTypeName: tools.jackson.databind.ValueSerializer

  # Method renames
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.fasterxml.jackson.core.JsonGenerator writeObject(..)
      newMethodName: writePOJO
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.fasterxml.jackson.core.JsonParser getCurrentValue()
      newMethodName: currentValue
```

</details>

#### Step 4: Iterate on failures

If the agent hasn't already run the tests, build and run them:

```bash
./gradlew test
```

If tests fail and the agent doesn't automatically iterate and fix them, ask the agent to help diagnose and fix failures. The failure output shows the expected vs. actual transformation.

### Takeaways

* Many migration operations can be expressed as declarative YAML composing existing primitives.
* Always validate both the tests and the recipe. The agent can get things wrong in either.

---

:::note
Your plan may include Refaster templates in addition to declarative and imperative recipes. The workflow is similar for all types: write tests, implement, review, iterate. If the agent builds Refaster templates or included them as part of the plan, apply the same review process.
:::

## Exercise 2-3: Add an imperative recipe

### Goals for this exercise

* Write an imperative Java recipe for a transformation that can't be done declaratively
* Understand when and why imperative recipes are necessary
* Practice reviewing AI-generated visitor logic

### Context

Some Jackson 2→3 changes can't be expressed with existing declarative primitives or Refaster templates. These typically involve conditional logic: inspecting method arguments, removing or restructuring statements, or transforming patterns that depend on context. Your plan should include at least one transformation like this.

### Steps

#### Step 1: Build the imperative recipe

The agent has the plan and knows which transformation requires an imperative recipe. Tell it to continue.

<details>
<summary>Suggested prompt</summary>

> Now let's build the imperative recipes from our plan. Write tests first, then implement.

</details>

As before, the agent should write tests first and then implement the recipe, iterating and fixing on its own. Monitor it as it goes to make sure the tests and recipe logic look correct. If you see something going in the wrong direction, interrupt and guide it. This will likely take several minutes.

#### Step 2: Review the test cases

Just as before, verify the before/after examples are accurate and that there's a test for the negative case (code that should *not* be modified).

#### Step 3: Review the imperative recipe

The skill covers imperative recipe patterns, so the agent should follow best practices. Key things to verify:
* Does it call `super.visitX()` to continue tree traversal?
* Is the matching logic correct for the specific transformation?
* Does it handle edge cases (e.g., the negative case from your tests)?

#### Step 4: Add the imperative recipe to your YAML composite recipe

Make sure the imperative recipe is included in your top-level composite YAML recipe so it runs as part of the overall migration. The agent may have already done this. Check that the ordering makes sense. For example, if the imperative recipe removes code that other recipes also transform, it may need to run first.

#### Step 5: Build and run tests

```bash
./gradlew test
```

Adding a new recipe to the composite can sometimes cause existing tests to need updates, since recipes now run together and interact. If tests that previously passed now fail, check whether the composite ordering or the new recipe's changes affect the expected output of earlier tests. Iterate on failures as needed. The agent may already do this for you too.

### Takeaways

* Imperative recipes are necessary when you need to inspect arguments, conditionally modify code, or remove statements.
* The agent can generate reasonable visitor logic, but **human review of the matching logic is critical**.
* Composing recipes together can cause interactions. Adding a new recipe to the composite may require updating existing tests.

