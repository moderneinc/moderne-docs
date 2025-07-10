---
sidebar_label: "Module 6: Testing Recipes"
description: Explore how to unit test recipes
---

# Module 6: Testing recipes

When developing recipes, it's very important to test them to ensure that they not only make the expected changes but that they also don't make unnecessary changes.

OpenRewrite has extensive support for [testing recipes through the `RewriteTest` interface](https://docs.openrewrite.org/authoring-recipes/recipe-testing), which allows you to write tests that assert the state of the LST before and after running a recipe.

In addition to verifying the textual output, the unit testing framework also makes assertions on the underlying types and structure of the LST, as that might otherwise negatively affect recipe composition. The testing framework will tell you when there are issues with the type information, and help you to correct them.

There are various ways to provide a [recipe specification](https://docs.openrewrite.org/authoring-recipes/recipe-testing#recipespec) – from reading a recipe from any YAML resource through `recipeFromResources`, to reading a recipe from a specific resource, to constructing a Java recipe directly and passing that in.

Similarly, there are various ways to pass in [source specifications](https://docs.openrewrite.org/authoring-recipes/recipe-testing#sourcespec). Each parser has an `Assertions` class to provide test source files of a specific type. Source specifications can take in a single text block to assert no changes are made to a file, or a pair of text blocks to assert that a file is changed from one state to another. An optional final argument can consume a [`SourceSpec`](https://github.com/openrewrite/rewrite/blob/main/rewrite-test/src/main/java/org/openrewrite/test/SourceSpec.java) to provide additional configuration, or make assertions before or after the recipe is run.

## Exercise 6: Explore the various unit tests in the starter project

Let's explore the unit tests in the starter project, to see what elements you can take from each for your own tests.

### Goals for this exercise

* Understand how to write unit tests for your recipes.
* Learn how to assert the state of the LST before and after running a recipe.
* Explore the various ways to provide recipe and source specifications.

### Steps

1. Open [src/test/java/com/yourorg/AppendToReleaseNotesTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AppendToReleaseNotesTest.java).
   * Notice how the recipe specification directly constructs a `JavaRecipe` and passes that in. This is most convenient when testing imperative recipes.
   * Notice how `@Test void createNewReleaseNotes() { ... }` uses `org.openrewrite.test.SourceSpecs.text(java.lang.String, java.lang.String)` to provide a before and after text block.
   * The before text block is `null` to indicate that the file does not exist initially. Conversely, you can pass in `null` as the second argument to indicate that the file should be deleted.
   * `@Test void editExistingReleaseNotes()` uses an additional `spec -> spec.path(Paths.get("RELEASE.md")` to set the source file, such that the recipe will match.
2. Open [src/test/java/com/yourorg/AssertEqualsToAssertThatTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/AssertEqualsToAssertThatTest.java).
   * Note how `.parser(JavaParser.fromJavaVersion().classpath("junit-jupiter-api"))` is called on the recipe specification.
   * Comment out `classpath("junit-jupiter-api")` and then run the test.
   * The resulting `java.lang.IllegalStateException: LST contains missing or invalid type information` indicates that the type information is missing, and that the test classpath is likely not correctly set up.
3. Open [src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/NoGuavaListsNewArrayListTest.java).
   * Read the various comments throughout this test class.
   * Try to make minimal changes in the recipe and see how they affect the tests.
4. Open [src/test/java/com/yourorg/ClassHierarchyTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/ClassHierarchyTest.java).
   * Note how each `rewriteRun` consumes a `RecipeSpec` to assert the `dataTable` rows produced in the recipe run.
   * Correlate this to the `insertRow` calls in the recipe, to see how the recipe produces the expected output.
5. Open [src/test/java/com/yourorg/SimplifyTernaryTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/SimplifyTernaryTest.java).
   * Note how the instantiated recipe is a generated class, not the Refaster template class itself.
   * See how `@Test void unchanged() { ... }` asserts no changes are made where those would be unsafe to make.

### Takeaways

* The `RewriteTest` interface allows you to write tests that assert the state of the LST before and after running a recipe.
* `RecipeSpecs` can be constructed in various ways, for each of the recipe types.
* `SourceSpecs` can take one, two or three arguments, depending on the type of assertion you want to make.
* Each parser has an `Assertions` class to provide test source files of a specific type.
* The testing framework will tell you when there are issues with the type information, and help you to correct them.