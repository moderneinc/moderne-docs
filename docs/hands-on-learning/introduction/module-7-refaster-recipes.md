---
sidebar_label: "Module 7: Refaster recipes"
description: Exploring and writing Refaster recipes
---

# Module 7: Refaster recipes

OpenRewrite has support for [writing Refaster recipes](https://docs.openrewrite.org/authoring-recipes/refaster-recipes), which are a way to write code transformations in Java, and have them run as recipes.

Refaster recipes are an easy step-up to writing imperative recipes, as they are written in Java, and can be run as recipes. Your compiler will help you catch syntax errors, and you can use your IDE to navigate to definitions and references. The generated recipes can also be used as a starting point for more complex recipe implementations.

## Exercise 7a: Explore Refaster recipe support

Let's look at an existing Refaster recipe in the starter project, and see how it's implemented.

### Goals for this exercise

* Understand how OpenRewrite supports Refaster recipes.
* See how Refaster recipes are written in Java, and how they can be run as recipes.

### Steps

1. Open the Refaster template [src/main/java/com/yourorg/SimplifyTernary.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/SimplifyTernary.java)
   * Read through the template, and see how it matches a ternary expression that can be simplified.
   * Note how we're only using a limited subset of Refaster's capabilities, as not everything is supported yet.
2. Open the unit test [src/test/java/com/yourorg/SimplifyTernaryTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/SimplifyTernaryTest.java)
   * Read through the test, and see how each ternary is simplified, and wrapped as necessary.
3. Click through on the `com.yourorg.SimplifyTernaryRecipes` class, to see the generated recipe.
   * Note how the `SimplifyTernaryRecipes` extends `Recipe` and overrides `getRecipeList()` to return two recipes.
   * Each inner recipe returns a visitor that extends `AbstractRefasterJavaVisitor`.
   * There are before and after `JavaTemplates` that are used to match and replace the ternary expressions.
   * The `visitTernary` method is overridden to match the ternary expressions, and replace them with the simplified version.
4. Click through on the `org.openrewrite.java.template.internal.AbstractRefasterJavaVisitor`.
   * Notice the embedding options, and how those call out to subsequent visitors for cleanups and simplifications.
   * Now look back at the visitors in `SimplifyTernaryRecipes` to see which embedding options are enabled there.
5. Open the build files `pom.xml` and `build.gradle` to see how the Refaster recipes are generated.
   * Notice the [`rewrite-templating`](https://github.com/openrewrite/rewrite-templating) dependency and annotation processor. This is what enables generating the Refaster template recipes.

### Takeaways

* Refaster templates are converted into regular OpenRewrite recipes, and can be run as such.
* Common base classes, and embedding options lighten the load in implementing Refaster templates.
* Some 400+ recipes from [Picnic's ErrorProne Support](https://error-prone.picnic.tech/) have made it into [rewrite-third-party](https://github.com/openrewrite/rewrite-third-party) and [the app.moderne.io marketplace](https://app.moderne.io/marketplace/tech.picnic.errorprone.refasterrules).

## Exercise 7b: Create a Refaster recipe

Let's create a Refaster recipe that standardizes various ways to check if a String is empty or not.

### Goals for this exercise

* Explore IDE support for generating Refaster recipes.
* Write a Refaster template that matches various ways to check if a String is empty.
* Customize the generated recipe, using the tests to cover the various aspects.

### Steps

1. Open the unit test [src/test/java/com/yourorg/StringIsEmptyTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/StringIsEmptyTest.java)
   * Read through the test, to get a feel for the cases you should cover.
   * Remove the `@Disabled` annotation, and run the test to see that it fails.
   * Uncomment the `spec.recipe(new StringIsEmptyRecipe());` line, and see that the class is missing.
2. If you have [the Moderne plugin](https://plugins.jetbrains.com/plugin/17565-moderne) for IntelliJ IDEA installed, you can [generate Refaster recipes directly from the IDE](../user-documentation/moderne-ide-integration/how-to-guides/creating-recipes.md).
   * A scratch file will be created that you can customize, and add to your recipe module.
3. Open the Refaster template [src/main/java/com/yourorg/StringIsEmpty.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/StringIsEmpty.java)
   * Using the knowledge gained in Exercise 6, and the requirements from the test, write a Refaster recipe that matches various ways to check if a String is empty.
   * Think about if your methods should take in any argument, and what the type of that argument should be.
   * Add your first `@BeforeTemplate` and `@AfterTemplate` annotated methods, to match and replace the first way to check for an empty string.
4. Trigger an explicit build of your project to generate the Recipe class with Ctrl + F9, or equivalent.
   * Notice how the unit test now compiles; compare the generated recipe with the template you wrote.
   * Run the test to see where you stand, and add additional `@BeforeTemplate` annotated methods to cover all cases.
5. Follow the instructions in the tests to add a name and description to your recipe.
   * These will be visible in any generated documentation, when folks run and discover recipes, and in Moderne.

### Takeaways

* Refaster templates can be generated from the IDE, and used as a starting point for more complex recipe implementations.
* A Refaster rule can contain more than one before template, to match different ways to check for an empty string.
* You can customize the Recipe name and description, with the help of the `@RecipeDescriptor` annotation.