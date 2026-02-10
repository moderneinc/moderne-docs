---
sidebar_label: "Module 2: Build"
description: Build a Jackson 2→3 migration recipe with AI using test-driven development, declarative YAML, and imperative Java.
---

# Module 2: Build

In this module, you'll build the Jackson 2→3 migration recipe with AI assistance. You'll follow a test-driven development (TDD) approach: write tests first, validate them, then implement the recipe. Along the way, you'll create a declarative YAML recipe, an imperative Java recipe, and optionally a Refaster template.

## Exercise 2-1: Scaffold the recipe project

### Goals for this exercise

* Set up a recipe development project using the Moderne recipe starter
* Understand the project structure

### Steps

#### Step 1: Scaffold the project

Use the `/moderne:create-recipe` skill to get started. If you've already cloned the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter), you can point the AI at your local copy.

<details>
<summary>Suggested prompt</summary>

> /moderne:create-recipe
>
> I want to create a new OpenRewrite recipe for migrating Jackson 2.x to Jackson 3.x. Please set up the project using the rewrite-recipe-starter template. Use the package name `com.yourorg.jackson` and name the project `rewrite-jackson-migration`.

</details>

#### Step 2: Verify the project structure

You should have:
* `src/main/java/com/yourorg/jackson/` -- recipe implementations will go here
* `src/main/resources/META-INF/rewrite/` -- declarative YAML recipes go here
* `src/test/java/com/yourorg/jackson/` -- tests go here
* `build.gradle.kts` or `pom.xml` with OpenRewrite dependencies

#### Step 3: Clean out the example recipes

The starter project includes sample recipes (like `NoGuavaListsNewArrayList`, `SimplifyTernary`). Remove or ignore them -- we'll build our own.

#### Step 4: Verify the project builds

Build the project before making any changes:

```bash
./gradlew build
```

### Takeaways

* The recipe starter provides all the build infrastructure you need
* The skill guides the AI through proper project setup
* Always verify the project builds before you start adding code

---

## Exercise 2-2: Write tests first (TDD)

### Goals for this exercise

* Write before/after test cases for each planned transformation
* Validate AI-generated test cases against the migration guide
* Understand why TDD is a natural fit for AI-generated recipes

### Context

OpenRewrite's testing framework uses a before/after pattern that works exceptionally well with AI:
* **Before**: The code as it looks today (Jackson 2.x)
* **After**: The code as it should look after migration (Jackson 3.x)

This is exactly the kind of paired example that AI is good at generating -- and that humans can quickly validate by eye.

### Steps

#### Step 1: Ask the AI to write test cases

Ask the AI to write test cases for the declarative transformations from your plan.

<details>
<summary>Suggested prompt</summary>

> Now let's write tests first. Create a test class `UpgradeJackson2To3Test` that implements `RewriteTest`. Write before/after test cases for these transformations:
>
> 1. Package rename: `com.fasterxml.jackson` → `tools.jackson`
> 2. Type rename: `JsonProcessingException` → `JacksonException`
> 3. Type rename: `JsonMappingException` → `DatabindException`
> 4. Type rename: `JsonDeserializer` → `ValueDeserializer`
> 5. Method rename: `writeObject()` → `writePOJO()` on JsonGenerator
> 6. Method rename: `getCurrentValue()` → `currentValue()` on JsonParser
>
> For each test, write a small but realistic Java class that uses the Jackson 2.x API in the "before" and the Jackson 3.x API in the "after". Don't write the recipe yet -- just the tests.

</details>

#### Step 2: Review the AI's test cases

This is a critical human validation step. Check:
* Are the **fully qualified class names** correct? (e.g., `com.fasterxml.jackson.core.JsonProcessingException`, not just `JsonProcessingException`)
* Are the **import statements** included and correct in both before and after?
* Are the **before examples** realistic? (Would someone actually write this code?)
* Are the **after examples** accurate per the migration guide?
* Does each test focus on **one transformation** so failures are easy to diagnose?

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

#### Step 3: Write a "no change" test

Verify the recipe doesn't modify code that shouldn't be touched:

<details>
<summary>Suggested prompt</summary>

> Also write a test case that verifies the recipe does NOT modify code that doesn't use Jackson. For example, a class that only uses standard Java libraries should be unchanged.

</details>

#### Step 4: Run the tests

They should all **fail** at this point (the recipe doesn't exist yet). If any test has a compilation error, fix it now.

```bash
./gradlew test
```

:::warning
**Expect failures, not errors.** Test failures mean the tests are correct but the recipe doesn't exist yet. Compilation errors mean the test code itself has problems (wrong class names, bad syntax, etc.) and needs to be fixed before proceeding.
:::

### Takeaways

* The before/after test pattern is a natural fit for AI: it generates paired examples that humans can validate quickly
* **Always validate AI-generated test cases** -- wrong fully qualified names and import mismatches are the most common errors
* Writing tests first gives you confidence that the recipe works before you test against real repositories

---

## Exercise 2-3: Build the declarative YAML recipe

### Goals for this exercise

* Create a composite YAML recipe that uses existing OpenRewrite primitives
* Learn the declarative-first principle: use existing recipes when possible
* Iterate on test failures

### Steps

#### Step 1: Create the declarative YAML recipe

Ask the AI to create the declarative YAML recipe based on your plan.

<details>
<summary>Suggested prompt</summary>

> Now create the declarative YAML recipe file at `src/main/resources/META-INF/rewrite/jackson-2-3.yml`. It should be a composite recipe named `com.yourorg.jackson.UpgradeJackson2To3` that uses these existing OpenRewrite recipes:
>
> - `org.openrewrite.java.ChangePackage` for the package rename
> - `org.openrewrite.java.dependencies.ChangeDependency` for Maven/Gradle dependency updates
> - `org.openrewrite.java.ChangeType` for class/exception renames
> - `org.openrewrite.java.ChangeMethodName` for method renames
>
> Use the plan we agreed on in Module 1. Remember to include the fully qualified type names for all ChangeType operations.

</details>

#### Step 2: Review the YAML recipe

Key things to check:
* Is the `type: specs.openrewrite.org/v1beta/recipe` header present?
* Are all **fully qualified type names** correct? This is where AI most commonly makes mistakes.
* Are the `ChangeMethodName` method patterns correct? They should use the format `fully.qualified.Type methodName(..)`.
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

#### Step 3: Update the test class

Make sure the `defaults` method loads the recipe by name:

```java
@Override
public void defaults(RecipeSpec spec) {
    spec.recipeFromResources("com.yourorg.jackson.UpgradeJackson2To3");
}
```

#### Step 4: Build and run the tests

```bash
./gradlew test
```

#### Step 5: Iterate on failures

If tests fail:
* Read the failure output carefully -- it shows the expected vs. actual transformation
* Common issues: wrong fully qualified names, missing `recursive: true` on `ChangePackage`, wrong method pattern format
* Ask the AI to help diagnose and fix failures

<details>
<summary>Suggested prompt (when tests fail)</summary>

> The test `renamesJsonProcessingException` is failing. Here's the output:
>
> [paste the test failure output]
>
> Can you diagnose the issue and fix the recipe?

</details>

### Takeaways

* Declarative YAML recipes are powerful -- most migration operations compose existing primitives
* **Fully qualified type names** are the most common source of errors in AI-generated recipes
* Method patterns for `ChangeMethodName` use the format `fully.qualified.Type methodName(..)`
* Iterate quickly: fix → build → test → repeat

---

## Exercise 2-4: Add an imperative recipe

### Goals for this exercise

* Write an imperative Java recipe for a transformation that can't be done declaratively
* Understand when and why imperative recipes are necessary
* Practice reviewing AI-generated visitor logic

### Context

Some Jackson 2→3 changes can't be expressed with existing declarative primitives. For example, Jackson 3 makes several modules built-in that previously required explicit registration:

```java
// Jackson 2.x -- these are necessary
ObjectMapper mapper = new ObjectMapper();
mapper.registerModule(new JavaTimeModule());        // java.time support
mapper.registerModule(new ParameterNamesModule());  // parameter name reflection
mapper.registerModule(new Jdk8Module());            // Optional, etc.

// Jackson 3.x -- these modules are built-in, so the registerModule() calls should be removed
ObjectMapper mapper = new ObjectMapper();
// (no registration needed)
```

This requires an imperative recipe because:
* We need to **inspect the method argument** to determine if it's one of the built-in modules
* We need to **remove the entire statement**, not just rename something
* The logic is conditional: only remove `registerModule()` calls for specific module types

### Steps

#### Step 1: Write the test first

Ask the AI to write a before/after test for removing built-in module registrations.

<details>
<summary>Suggested prompt</summary>

> Now let's write an imperative recipe. In Jackson 3, the `JavaTimeModule`, `ParameterNamesModule`, and `Jdk8Module` are built-in, so calls to `mapper.registerModule(new JavaTimeModule())` etc. should be removed.
>
> First, write a test case. The "before" should show an ObjectMapper with registerModule calls for these three modules. The "after" should show the same code with those calls removed. Also include a test case where a registerModule call for a *non-built-in* module (like a custom module) should NOT be removed.

</details>

#### Step 2: Review the test cases

Verify the before/after examples are accurate.

#### Step 3: Write the imperative recipe

Ask the AI to write the imperative recipe class.

<details>
<summary>Suggested prompt</summary>

> Now write the imperative recipe class `RemoveBuiltInModuleRegistrations` that extends `Recipe`. It should:
>
> - Use a `JavaIsoVisitor`
> - Match calls to `ObjectMapper.registerModule(..)` using a `MethodMatcher`
> - Check if the argument is `new JavaTimeModule()`, `new ParameterNamesModule()`, or `new Jdk8Module()`
> - If it matches, remove the entire statement
> - If it doesn't match (e.g., a custom module), leave it alone
>
> Follow OpenRewrite best practices: don't mutate LST nodes directly, always call super.visitX(), return new visitor instances from getVisitor().

</details>

#### Step 4: Review the AI's imperative recipe

Key things to check:
* Does it extend `Recipe` and override `getDisplayName()`, `getDescription()`, and `getVisitor()`?
* Does the `MethodMatcher` use the correct pattern? (e.g., `com.fasterxml.jackson.databind.ObjectMapper registerModule(..)`)
* Does it call `super.visitMethodInvocation()` (or the appropriate `super.visitX()` method)?
* Does it return new visitor instances from `getVisitor()` (not a cached field)?
* Is the argument inspection logic correct?

<details>
<summary>Reference: What the imperative recipe should look like</summary>

```java
@Value
@EqualsAndHashCode(callSuper = false)
public class RemoveBuiltInModuleRegistrations extends Recipe {

    private static final MethodMatcher REGISTER_MODULE =
        new MethodMatcher("com.fasterxml.jackson.databind.ObjectMapper registerModule(..)");

    private static final Set<String> BUILT_IN_MODULES = Set.of(
        "com.fasterxml.jackson.datatype.jsr310.JavaTimeModule",
        "com.fasterxml.jackson.module.paramnames.ParameterNamesModule",
        "com.fasterxml.jackson.datatype.jdk8.Jdk8Module"
    );

    @Override
    public String getDisplayName() {
        return "Remove built-in Jackson 3 module registrations";
    }

    @Override
    public String getDescription() {
        return "Jackson 3 includes JavaTimeModule, ParameterNamesModule, and " +
               "Jdk8Module by default. Explicit registerModule() calls for " +
               "these modules can be removed.";
    }

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return new JavaIsoVisitor<ExecutionContext>() {
            @Override
            public J.MethodInvocation visitMethodInvocation(
                    J.MethodInvocation method, ExecutionContext ctx) {
                J.MethodInvocation m = super.visitMethodInvocation(method, ctx);
                if (REGISTER_MODULE.matches(m) && isBuiltInModule(m)) {
                    //noinspection DataFlowIssue
                    return null; // removes the statement
                }
                return m;
            }

            private boolean isBuiltInModule(J.MethodInvocation method) {
                if (method.getArguments().size() != 1) {
                    return false;
                }
                Expression arg = method.getArguments().get(0);
                if (arg instanceof J.NewClass) {
                    JavaType type = ((J.NewClass) arg).getType();
                    if (type instanceof JavaType.FullyQualified) {
                        return BUILT_IN_MODULES.contains(
                            ((JavaType.FullyQualified) type).getFullyQualifiedName()
                        );
                    }
                }
                return false;
            }
        };
    }
}
```

</details>

#### Step 5: Add the imperative recipe to your YAML composite recipe

So it runs as part of the overall migration:

```yaml
# In jackson-2-3.yml, add to the recipeList:
  - com.yourorg.jackson.RemoveBuiltInModuleRegistrations
```

#### Step 6: Build and run tests

```bash
./gradlew test
```

#### Step 7: Iterate on failures

Iterate on failures as needed.

### Takeaways

* Imperative recipes are necessary when you need to inspect arguments, conditionally modify code, or remove statements
* The `JavaIsoVisitor` + `MethodMatcher` pattern handles most imperative recipe needs
* Always call `super.visitX()` -- forgetting this is the most common imperative recipe bug
* The AI can generate reasonable visitor logic, but **human review of the matching logic is critical**

---

## Exercise 2-5 (stretch): Add a Refaster template

:::tip
**Time check:** If you're running short on time, skip this exercise and proceed to [Module 3](./module-3-test.md). Refaster templates are powerful but not strictly necessary for this migration.
:::

### Goals for this exercise

* Write a Refaster template for an expression-level replacement
* Understand when Refaster is the right choice (simpler than imperative, more precise than declarative)

### Context

Refaster templates are ideal for replacing one expression with another. For Jackson 2→3, a good candidate is the reader convenience method pattern:

```java
// Jackson 2.x
ObjectReader reader = objectMapper.reader().forType(MyClass.class);

// Jackson 3.x (simplified API)
ObjectReader reader = objectMapper.readerFor(MyClass.class);
```

This is a perfect Refaster case because:
* It's an expression-to-expression replacement
* It involves method chaining that's hard to match with `ChangeMethodName` alone
* The types provide sufficient compile-time safety

### Steps

#### Step 1: Write the test first

<details>
<summary>Suggested prompt</summary>

> Write a Refaster template and test for this Jackson 3 migration:
> `objectMapper.reader().forType(SomeClass.class)` → `objectMapper.readerFor(SomeClass.class)`
>
> The template should match any class argument passed to forType().

</details>

#### Step 2: Review and build

Refaster templates need the `rewrite-templating` annotation processor, which is already configured in the recipe starter project. Build with `./gradlew build` to trigger code generation.

#### Step 3: Run tests and iterate

```bash
./gradlew test
```

### Takeaways

* Refaster templates are ideal for expression-level replacements with type safety
* They sit between declarative (too simple) and imperative (too complex) in the recipe type hierarchy
* The recipe starter project includes the necessary annotation processor configuration
