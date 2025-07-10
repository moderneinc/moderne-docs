---
sidebar_label: "Module 5: Preconditions"
description: Adding preconditions to a recipe
---

# Module 5: Preconditions

[Preconditions](https://docs.openrewrite.org/reference/yaml-format-reference#preconditions) are recipes that run before other recipes to limit which source files the recipe will run on. Preconditions are often used to ensure a recipe only runs against certain files or directories – but any recipe which is not a `ScanningRecipe` can technically be used as a precondition.

When a recipe is used as a precondition, any file it would make a change to is considered to meet the precondition. When more than one recipe is used, all of them must make a change to the file for it to be considered to "meet the precondition".

One substantial benefit of preconditions is that other recipes don't need to individually support options to limit themselves to a particular path.

## Exercise 5: Adding preconditions to a recipe

Let's update the `stringutils.yml` recipe to only run on sources that are likely tests, by adding a precondition that uses [the `org.openrewrite.java.search.IsLikelyTest` recipe](https://docs.openrewrite.org/recipes/java/search/islikelytest).

### Goals for this exercise

* Discover common preconditions, and learn how to combine those with recipes.

### Steps

1. Open the `UseApacheStringUtils` YAML file (`src/main/resources/META-INF/rewrite/stringutils.yml`) once again.
2. Add a `preconditions` field to the recipe, in between the `description` and `recipeList` fields. 
   * Add a single `org.openrewrite.java.search.IsLikelyTest` recipe to the list of preconditions, with no options.
   * [Here's an example of what this recipe looks like with the precondition added](https://gist.github.com/mike-solomon/04287b874e335a5e1b40c529d6f3eab9).
3. Open the unit test `src/test/java/com/yourorg/UseApacheStringUtilsTest.java`.
   * Run the tests – they should fail and not make any changes.
   * Add a static import on `org.openrewrite.java.Assertions.srcTestJava`.
   * Wrap the `java(String, String)` methods with `srcTestJava()` to indicate that the sources are tests.
   * [Here's an example of what this should look like](https://gist.github.com/mike-solomon/84b85e62825e671ff27a5de96c520218).
   * Run the tests again, and verify that they now pass.
4. You may be interested in exploring other `Find` recipes in the OpenRewrite recipe catalog. These are often used as preconditions for recipes:
   * [org.openrewrite.FindSourceFiles](https://docs.openrewrite.org/recipes/core/findsourcefiles), to match specific files or directories.
   * [org.openrewrite.java.migrate.search.FindJavaVersion](https://docs.openrewrite.org/recipes/java/migrate/search/findjavaversion), to match specific Java versions.
   * [org.openrewrite.java.search.FindTypes](https://docs.openrewrite.org/recipes/java/search/findtypes), to find type references by name.

### Takeaways

* Preconditions are used to limit which source files a recipe is run on.
* Common preconditions can be used to target specific files or directories.
* When a recipe is used as a precondition, any file it would make a change to is considered to "meet the precondition" – which means the main recipe will run against it.
* Preconditions themselves do not make changes to the source code, but are used to limit which files a recipe is run on.