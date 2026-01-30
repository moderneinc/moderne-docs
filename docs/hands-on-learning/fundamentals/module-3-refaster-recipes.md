---
sidebar_label: "Module 3: Refaster recipes"
description: Exploring and writing Refaster recipes.
---

# Module 3: Refaster recipes

OpenRewrite has support for [writing Refaster recipes](https://docs.openrewrite.org/authoring-recipes/refaster-recipes), which are a way to write code transformations in Java and have them run as recipes.

Refaster recipes are an easy step-up to writing imperative recipes, as they are written in Java and can be run as recipes. Refaster template recipes can be used to replace one expression with another, or one statement with another, but only if the expression or statement can fit inside the body of a method. Your compiler will help you catch syntax errors, and you can use your IDE to navigate to definitions and references. The generated recipes can also be used as a starting point for more complex recipe implementations.

If you get stuck, you can reference the [workshop-solutions branch](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/) of the starter repo for completed examples (and you’ll also see code embedded inline throughout the steps).

## Exercise 3-1: Build and run a Refaster recipe

In this exercise, you will generate a recipe from an existing Refaster template recipe then inspect and run to validate it.

### Goals for this exercise

* Understand how OpenRewrite supports Refaster recipes.
* See how Refaster recipes are written in Java, and how they can be run as recipes.
* Use IDE support for generating Refaster recipes.

### Steps

#### Step 1: See how Refaster recipes are generated from templates

1. Open [src/main/java/com/yourorg/SimplifyTernary.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/SimplifyTernary.java) and take a look at the Refaster template to see the before/after pattern it's matching to simplify ternary expressions.
2. Build the project (Ctrl/Cmd + F9) to trigger Refaster code generation. This will automatically create an imperative OpenRewrite recipe in a new file with the name `SimplifyTernaryRecipes.java`. 
:::info
Refaster template recipe names are the class name followed by `Recipe` or `Recipes` (depending on if there is more than one template in the class).
:::
3. Open the newly generated `SimplifyTernaryRecipes.java` file. This is a usable OpenRewrite recipe just like any other. There are some important things to note in this file to keep in mind for the next module about imperative recipes:
   * It extends `Recipe` and and overrides `getRecipeList()` to return two recipes.
   * Each inner recipe returns a visitor that extends AbstractRefasterJavaVisitor.
   * There are before and after `JavaTemplate`s that are used to match and replace the ternary expressions.
   * The `visitTernary` method is overridden to match the ternary expressions, and replace them with the simplified version.
:::tip
If you're curious, click through to `org.openrewrite.java.template.internal.AbstractRefasterJavaVisitor` to see embedding options and cleanup behaviors.
:::

#### Step 2: Validate and test the generated recipe

1. Open [src/test/java/com/yourorg/SimplifyTernaryTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/SimplifyTernaryTest.java) and briefly review the test cases here to get a better understanding of how each ternary is simplified. 
2. Run the tests to confirm the generated recipe matches the test cases.
:::note
Refaster generation is wired through the `rewrite-templating` dependency and annotation processor in `pom.xml`/`build.gradle`.
:::

## Exercise 3-2: Create a Refaster recipe

Now that you've seen how Refaster template recipes work, you can create your own.

## Goals for this exercise

* Write a Refaster template recipe that matches various ways to check if a `String` is empty.
* Customize the generated recipe, using the tests to cover the various aspects.

### Steps

#### Step 1: Enable and run the tests

1. The cases you need to cover are already specified in the tests. Open [src/test/java/com/yourorg/StringIsEmptyTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/StringIsEmptyTest.java) to review them and understand what your template needs to do.
2. Since the recipe doesn't exist, the tests have been disabled so that the project tests pass overall. You're about to write the template and you'll want to test it, so you'll need to enable the test and wire it up:
   * Remove the `@Disabled` annotation and run the test to see that it fails.
   * Uncomment the `spec.recipe(new StringIsEmptyRecipe());` line, and see that the class is missing.
   * In the `recipeDocumentation` method, replace `null` with new `StringIsEmptyRecipe()`.

#### Step 2: Implement the first template

1. Open [src/main/java/com/yourorg/StringIsEmpty.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/java/com/yourorg/StringIsEmpty.java). This is a placeholder file that has already been started for you. 
2. Based on the example in the previous exercise and the requirements from the test, implement the first `@BeforeTemplate`/`@AfterTemplate` annotated methods to match and replace the first way to check for an empty string. Think about if your methods should take in any argument, and what the type of that argument should be.

#### Step 3: Build and re-run the tests

1. Build the project (Ctrl/Cmd + F9) to generate the recipe class the tests expect.
2. Re-run the tests and use the remaining failures to decide the next template. (This iterative pattern is a common method for recipe development.)

:::tip
If you have the Moderne plugin installed, you can generate a Refaster template from the IDE (see the "Creating recipes" guide in the Moderne plugin docs).
:::

#### Step 4: Complete coverage

1. Add additional templates, re-building and re-running tests after each addition, until all tests pass.
2. Use the `@RecipeDescriptor` annotation to override the generated documentation and give your recipe a custom name and description:

```java
@RecipeDescriptor(
        //language=markdown
        name = "Standardize empty String checks",
        //language=markdown
        description = "Replace calls to `String.length() == 0` with `String.isEmpty()`."
)
```

<details>
<summary>Reference example: Completed StringIsEmpty.java</summary>

```java
/*
 * Copyright 2024 the original author or authors.
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * <p>
 * https://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.yourorg;

import com.google.errorprone.refaster.annotation.AfterTemplate;
import com.google.errorprone.refaster.annotation.BeforeTemplate;
import org.openrewrite.java.template.RecipeDescriptor;

@RecipeDescriptor(
        //language=markdown
        name = "Standardize empty String checks",
        //language=markdown
        description = "Replace calls to `String.length() == 0` with `String.isEmpty()`."
)
public class StringIsEmpty {

    @BeforeTemplate
    boolean lengthZero(String s) {
        return s.length() == 0;
    }

    @BeforeTemplate
    boolean lengthZeroFlip(String s) {
        return 0 == s.length();
    }

    @BeforeTemplate
    boolean lengthSmallerOne(String s) {
        return s.length() < 1;
    }

    @BeforeTemplate
    boolean lengthSmallerOneFlipped(String s) {
        return 1 > s.length();
    }

    @BeforeTemplate
    boolean lengthEqualEmpty(String s) {
        return s.equals("");
    }

    @BeforeTemplate
    boolean lengthEqualEmptyFlip(String s) {
        return "".equals(s);
    }

    @AfterTemplate
    boolean isEmpty(String s) {
        return s.isEmpty();
    }
}
```
</details>

### Takeaways

* Refaster templates are converted into regular OpenRewrite recipes, and can be run as such.
* Common base classes, and embedding options lighten the load in implementing Refaster templates.
* Refaster templates can be generated from the IDE, and used as a starting point for more complex recipe implementations.
* A Refaster rule can contain more than one before template, to match different ways to check for an empty string.
* You can customize the Recipe name and description, with the help of the `@RecipeDescriptor` annotation.
