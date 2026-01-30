---
sidebar_label: "Module 4: Imperative recipes"
description: Writing imperative recipes with integrated testing.
---

# Module 4: Imperative recipes

For use cases beyond what declarative recipes and Refaster templates can handle, you will want to look at [writing a Java refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-java-refactoring-recipe).

[Imperative recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes) use visitors to traverse Lossless Semantic Trees (LSTs) and modify code with full type awareness. You will use `JavaTemplate` to [create new LST elements](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate) that replace existing nodes while preserving formatting and style.

As you've already seen, testing is a critical feedback loop for enabling recipe development. The `RewriteTest` framework validates both the textual output and the underlying LST types and structure, so it will surface type-attribution problems early. This module starts by using examples from the starter project to show how to use tests effectively and how recipe and source inputs can be specified in different ways. After that, you will implement an imperative recipe and use tests to guide each change and confirm that traversal only touches the nodes you intend.

If you get stuck, you can reference the [workshop-solutions branch](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/) of the starter repo for completed examples (and you’ll also see code embedded inline throughout the steps).

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

## Exercise 4-1: Testing imperative recipes

Module 2 introduced `RewriteTest` when you added and ran unit tests for a declarative recipe. This exercise expands on those patterns by walking through additional test patterns to use for imperative recipes.

### Goals for this exercise

* Understand how to write unit tests for your recipes.
* Learn how to assert the state of the LST before and after running a recipe.
* Explore the various ways to provide recipe and source specifications.

### Steps

1. Open [src/test/java/com/yourorg/AppendToReleaseNotesTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AppendToReleaseNotesTest.java). There are some important things to note in this file to help you understand more about the OpenRewrite testing framework:
   * The `AppendToReleaseNotes` recipe is directly constructed and passed to `defaults(RecipeSpec)`. (This is different from Module 2, where you used `recipeFromResources(...)` to load a YAML recipe from resources instead.)
   * These tests use `SourceSpecs.text(...)` instead of `java` because the file to test is a Markdown file (`RELEASE.md`), not a Java source file. (And no `//language=` directive is needed in this case.) 
   * There is an optional `spec -> ...` parameter that sets the path (`spec.path(Path.of("RELEASE.md"))`), so the test asserts creation or edits at that location.
   * In `createNewReleaseNotes()`, the "before" source uses `doesNotExist()` to indicate that there is no file to start, meaning that the "after" block indicates that the file should be _created_ with the provided source.
:::tip
Use `SourceSpecs.text(...)` for plain text sources; `java(...)` is only for Java inputs.
:::
2. Add a new test to make sure no notes are added that are already there.
   * Add a case that asserts: if `RELEASE.md` already contains the message, the recipe should not append it again.
   * Mirror the existing test structure, but provide only a "before" source to assert no change is expected.
<details>
<summary>Reference example: noDuplicateNotes test</summary>

```java
@Test
void noDuplicateNotes() {
   rewriteRun(
      text(
      """
         You say goodbye, I say
         Hello world
         """,
      spec -> spec.path(Path.of("RELEASE.md"))
      )
   );
}
```

</details>

3. Open [src/test/java/com/yourorg/AssertEqualsToAssertThatTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AssertEqualsToAssertThatTest.java). The thing to note in this file:
   * In the recipe specification (`defaults(RecipeSpec)`), the call to explicitly configure the parser (`.parser(JavaParser.fromJavaVersion().classpath("junit-jupiter-api"))`) allows a classpath to be passed in to specify additional packages needed to supply any types used by the recipe.
4. Comment out only `.classpath("junit-jupiter-api")` and run the test to observe the type-attribution failure.
   * The resulting `java.lang.IllegalStateException: LST contains missing or invalid type information` indicates that the type information is missing, and that the test classpath is likely not correctly set up.
5. Restore the classpath entry and re-run to confirm the failure is resolved.

### Takeaways

* `RewriteTest` supports multiple styles of recipe specification and source specification.
* Classpath configuration is required to keep type information intact.
* Tests should cover both transformation cases and no-change cases.

## Exercise 4-2: Write an imperative recipe

In this exercise, you'll use the existing `NoGuavaListsNewArrayList` recipe as a reference while writing your own imperative recipe.

### Goals for this exercise

* Build new code elements (method calls) that replace existing ones.
* Practice implementing visitor logic with `JavaTemplate`.
* Use tests to validate traversal and type checks.

### Steps

#### Step 1: Use a reference recipe to orient your implementation

1. Open [src/main/java/com/yourorg/NoGuavaListsNewArrayList.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/NoGuavaListsNewArrayList.java) and read through the visitor methods. There are some important things to note in this file that can help as a reference in writing your own imperative recipe:
   * It matches three variants of Guava's `Lists.newArrayList()` and uses three `JavaTemplate`s to replace them with `new ArrayList<>(..)`.
   * In `visitMethodInvocation`, there are preconditions added that limit which source files are visited. Also, `Cursor` and `JavaCoordinates` are used when applying `JavaTemplate` to ensure that the changes are made in the correct location. Also, notice how the type parameters passed in to the `JavaTemplate` match the arguments passed into `apply`.
   * The calls to `maybeAddImport`/`maybeRemoveImport` ensure imports are correctly updated if the first or last LST element using the import is added/removed. 
   * The return value of `visitMethodInvocation` is the `JavaTemplate` result. When nothing matches, `super.visitMethodInvocation` is still called to keep traversing.
:::tip
In `visitCompilationUnit`, the call to `super.visitCompilationUnit` is required to traverse the tree. You can click through to see how the traversal works, and try commenting out that return statement (using `return cu;` instead) to see how the recipe stops making changes.
:::

:::note
The return value of `visitMethodInvocation` controls traversal: when nothing matches, you still call `super.visitMethodInvocation` to keep walking the tree.
:::
2. Open [src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java) and notice the `RewriteTest` structure and how `@Test void noChangeNecessary()` guards against unconditional changes.

#### Step 2: Enable the tests for your recipe

1. Open [src/test/java/com/yourorg/UseIntegerValueOfTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/UseIntegerValueOfTest.java). Read the tests to see the cases you need to cover.
2. Remove `@Disabled` and run the tests (they should fail and describe the expected cases).

#### Step 3: Implement and iterate

1. Open [src/main/java/com/yourorg/UseIntegerValueOf.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/UseIntegerValueOf.java).
2. Using the requirements from the tests you just reviewed, write an imperative recipe that uses `JavaTemplate` to match the `Integer` boxing constructors and replace them with the correct method calls. Here are some hints to get you started:
   * Start by filling in `getDisplayName()` and `getDescription()`.
   * Implement `getVisitor()` and add the transformation logic.
   * Consider a precondition so the recipe only visits files using the constructor.
   * Choose `JavaVisitor` or `JavaIsoVisitor` based on the nodes you need.
   * Decide what method to overwrite depending on what type of [LST elements](https://docs.openrewrite.org/concepts-and-explanations/lst-examples#java-lst-types) you need to visit. (Don't forget the call to the superclass version of the method as in Exercise 4-1.)
   * Use `JavaTemplate.builder(...).build().apply(...)` to make the necessary changes and return the result.
:::info
Use `JavaIsoVisitor` when you want to return the same LST node type (isomorphic), and `JavaVisitor` if you need to return a different `J` node type (non-isomorphic).
:::
4. Build the project and run the tests. Use failures to refine your visitor logic until all tests pass.
<details>
<summary>Reference example: UseIntegerValueOf.java</summary>

```java
package com.yourorg;

import org.openrewrite.ExecutionContext;
import org.openrewrite.Preconditions;
import lombok.Getter;
import org.openrewrite.Recipe;
import org.openrewrite.TreeVisitor;
import org.openrewrite.java.JavaTemplate;
import org.openrewrite.java.JavaVisitor;
import org.openrewrite.java.MethodMatcher;
import org.openrewrite.java.search.UsesMethod;
import org.openrewrite.java.tree.Expression;
import org.openrewrite.java.tree.J;
import org.openrewrite.java.tree.TypeUtils;

public class UseIntegerValueOf extends Recipe {

    private static final MethodMatcher INTEGER_CONSTRUCTOR = new MethodMatcher("java.lang.Integer#<init>(*)");

    @Getter
    final String displayName = "Use Integer.valueOf(x) or Integer.parseInt(x) instead of new Integer(x)";

    @Getter
    final String description = "Replaces unnecessary boxing constructor calls with the more efficient Integer.valueOf(x) for int values, or Integer.parseInt(x) for String values.";

    @Override
    public TreeVisitor<?, ExecutionContext> getVisitor() {
        return Preconditions.check(
                new UsesMethod<>(INTEGER_CONSTRUCTOR),
                new JavaVisitor<ExecutionContext>() {
                    @Override
                    public J visitNewClass(J.NewClass newClass, ExecutionContext ctx) {
                        J update = super.visitNewClass(newClass, ctx);
                        if (!(update instanceof J.NewClass)) {
                            return update;
                        }
                        J.NewClass nc = (J.NewClass) update;
                        if (!INTEGER_CONSTRUCTOR.matches(nc)) {
                            return nc;
                        }

                        Expression arg = nc.getArguments().get(0);
                        if (TypeUtils.isString(arg.getType())) {
                            return JavaTemplate.builder("Integer.parseInt(#{any(java.lang.String)})")
                                    .build()
                                    .apply(getCursor(), nc.getCoordinates().replace(), arg);
                        }
                        return JavaTemplate.builder("Integer.valueOf(#{any()})")
                                .build()
                                .apply(getCursor(), nc.getCoordinates().replace(), arg);
                    }
                }
        );
    }
}
```
</details>

:::tip
This recipe is useful as an example for the purposes of this workshop, but it actually could more easily have been written as a Refaster recipe rather than as an imperative one. As a followup exercise, see if you can implement the same change using Refaster templates.
:::

### Takeaways

* Imperative recipes give you fine-grained control over how and when transformations are applied.
* Visitors and templates let you traverse LSTs and build replacements while preserving formatting.
* Type information and tests help keep changes correct and scoped to the right cases.

## Learn More

Now that you've learned all the basics of building recipes, you may:

* Review [conventions and best practices](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices) for writing OpenRewrite recipes. 
* See how you can [contribute to the OpenRewrite community](https://docs.openrewrite.org/authoring-recipes/contributing-to-openrewrite).
* Learn about some of the more complex and powerful features of OpenRewrite in the [advanced workshop](../advanced/).
