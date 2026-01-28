---
sidebar_label: "Module 4: Imperative recipes"
description: Writing imperative recipes with integrated testing.
---

# Module 4: Imperative recipes

For use cases beyond what declarative recipes and Refaster templates can handle, you will want to look at [writing a Java refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe).

[Imperative recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes) use visitors to traverse Lossless Semantic Trees (LSTs) and modify code with full type awareness. You will use `JavaTemplate` to [create new LST elements](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate) that replace existing nodes while preserving formatting and style.

As you've already seen, testing is a critical feedback loop for enabling recipe development. This module starts by using examples from the starter project to show how to use tests effectively. After that, you will implement an imperative recipe and use tests to guide each change and confirm that traversal only touches the nodes you intend.

The following concepts in the [OpenRewrite documentation](https://docs.openrewrite.org/) are important to understand, particularly when writing imperative OpenRewrite recipes:

1. [Lossless Semantic Trees](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees)
   * [Java LST examples](https://docs.openrewrite.org/concepts-and-explanations/lst-examples)
   * [YAML LST examples](https://docs.openrewrite.org/concepts-and-explanations/yaml-lst-examples)
   * [TreeVisitingPrinter](https://docs.openrewrite.org/concepts-and-explanations/tree-visiting-printer)
2. [Visitors](https://docs.openrewrite.org/concepts-and-explanations/visitors)
   * [Cursoring](https://docs.openrewrite.org/concepts-and-explanations/visitors#cursoring)
   * [Isomorphic vs. non-isomorphic](https://docs.openrewrite.org/concepts-and-explanations/visitors#isomorphic-vs-non-isomorphic-visitors)
3. [Recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes)

These concepts should give you some sense as to the importance of exact type attribution, and how visitors are used to traverse and modify the LST. Without these, it would be next to impossible to write recipes that make changes to your code reliably.

## Exercise 4-1: Reinforce recipe testing

Module 2 introduced `RewriteTest` when you added and ran unit tests for a declarative recipe. This exercise expands on those patterns by walking through additional test styles you will reuse for imperative recipes.

### Goals for this exercise

* Understand how to write unit tests for your recipes.
* Learn how to assert the state of the LST before and after running a recipe.
* Explore the various ways to provide recipe and source specifications.

### Steps

1. Open [src/test/java/com/yourorg/AppendToReleaseNotesTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AppendToReleaseNotesTest.java).
   - Notice how the recipe specification directly constructs a `JavaRecipe`.
   - `createNewReleaseNotes()` uses `doesNotExist()` and `spec.path(Path.of("RELEASE.md"))` to assert file creation.
   - `editExistingReleaseNotes()` shows how a path affects file matching.
2. Open [src/test/java/com/yourorg/AssertEqualsToAssertThatTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AssertEqualsToAssertThatTest.java).
   - Note the `.parser(JavaParser.fromJavaVersion().classpath("junit-jupiter-api"))` configuration.
   - Remove `.classpath("junit-jupiter-api")`, re-run the test, and observe the type-attribution failure.
   - Restore the classpath entry and re-run to confirm the failure is resolved.
3. Open [src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java).
   - Read the comments and note how the test covers multiple cases.
4. Open [src/test/java/com/yourorg/ClassHierarchyTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/ClassHierarchyTest.java).
   - Note how `rewriteRun` consumes a `RecipeSpec` to assert data table rows via `insertRow`.
5. Open [src/test/java/com/yourorg/SimplifyTernaryTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/SimplifyTernaryTest.java).
   - Note how the recipe under test is a generated class, not the Refaster template itself.
   - See how `unchanged()` asserts idempotence.

### Takeaways

* `RewriteTest` supports multiple styles of recipe specification and source specification.
* Classpath configuration is required to keep type information intact.
* Tests should cover both transformation cases and no-change cases.

## Exercise 4-2: Write and debug an imperative recipe

Use the existing `NoGuavaListsNewArrayList` recipe as a reference while writing your own imperative recipe.

### Goals for this exercise

* Build new code elements (method calls) that replace existing ones.
* Practice implementing visitor logic with `JavaTemplate`.
* Use tests and debugging to validate traversal and type checks.

### Steps

#### Step 1: Use a reference recipe to orient your implementation

1. Open `src/main/java/com/yourorg/NoGuavaListsNewArrayList.java` and read through the visitor methods.
   - Three `JavaTemplate` instances replace Guava calls with `new ArrayList<>(...)`.
   - `visitCompilationUnit` prints the tree and still calls `super.visitCompilationUnit` to traverse.
   - Preconditions are applied in Java to limit which source files are visited.
   - `JavaTemplate.apply(...)` uses a `Cursor` and `JavaCoordinates` to place changes correctly.
   - `maybeAddImport` and `maybeRemoveImport` keep imports correct as LST nodes change.
2. Run `NoGuavaListsNewArrayListTest` to see the expected before/after transformations.

#### Step 2: Enable the tests for your recipe

1. Open [src/test/java/com/yourorg/UseIntegerValueOfTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/UseIntegerValueOfTest.java).
   - Read the tests to see the cases you need to cover.
2. Remove `@Disabled` and run the tests (they should fail and describe the expected cases).

#### Step 3: Implement and iterate

1. Open [src/main/java/com/yourorg/UseIntegerValueOf.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/UseIntegerValueOf.java).
2. Start by filling in `getDisplayName()` and `getDescription()`.
3. Implement `getVisitor()` and add the transformation logic:
   - Consider a precondition so the recipe only visits files using the constructor.
   - Choose `JavaVisitor` or `JavaIsoVisitor` based on the nodes you need.
   - Use `TypeUtils` when type checks are required.
   - Apply `JavaTemplate.builder(...).build().apply(...)` and return the result.
4. Build the project and run the tests. Use failures to refine your visitor logic.

#### Step 4: Debug a transformation

1. Set a breakpoint in `visitMethodInvocation`.
2. Re-run one test and inspect the LST node and cursor when the breakpoint hits.
3. Compare the debugger view with the Java LST examples: https://docs.openrewrite.org/concepts-and-explanations/lst-examples

#### Step 5: Complete the recipe

1. Iterate until all tests pass.
2. If you get stuck, use the reference implementation: [Completed `UseIntegerValueOf.java`](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/src/main/java/com/yourorg/UseIntegerValueOf.java).
3. _(Optional)_ This recipe could also be written as a Refaster rule. Try to implement the same change using Refaster templates.

### Takeaways

* `JavaVisitor` (or `JavaIsoVisitor`) targets specific LST nodes, and `JavaTemplate` builds replacements with preserved formatting.
* Type inspection with `TypeUtils` enables conditional transformations.
* Tests define expected behavior and keep each added case correct.
* `maybeAddImport` and `maybeRemoveImport` keep imports correct as changes are applied.
## Learn More

Now that you've learned all the basics of building recipes, you may:

* Review [conventions and best practices](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices) for writing OpenRewrite recipes. 
* See how you can [contribute to the OpenRewrite community](https://docs.openrewrite.org/authoring-recipes/contributing-to-openrewrite).
* Learn about some of the more complex and powerful features of OpenRewrite in the [advanced workshop](../advanced/).
