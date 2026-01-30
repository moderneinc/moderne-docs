---
sidebar_label: "Module 2: Declarative recipes"
description: How to write a declarative YAML recipe and scope it with preconditions.
---

# Module 2: Declarative YAML recipes & preconditions

As a best practice, if your recipe can be declarative (meaning it can be built out of other recipes), then you should make it declarative. You can make some truly powerful migration recipes by combining many tiny recipes together (which have been vetted to handle specific tasks correctly, such as only adding dependencies as needed).

If you completed the [Introduction to OpenRewrite](../introduction/workshop-overview.md) workshop, you've already built a declarative recipe in [Module 2](../introduction/module-2-recipe-builder.md) when you used the Recipe Builder to combine existing recipes using Moderne. The YAML file you downloaded is a declarative recipe. Now you'll learn how to write or modify one yourself, and then scope it with preconditions.

If you get stuck, you can reference the [workshop-solutions branch](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/) of the starter repo for completed examples (and you’ll also see code embedded inline throughout the steps).

## Exercise 2-1: Write a declarative YAML recipe

In this exercise, you'll build upon a custom migration recipe that replaces Spring's `StringUtils` with Apache Commons `StringUtils`.

### Goals for this exercise

* Write a declarative YAML recipe that ties together existing recipes.
* Learn how to configure a recipe with options.
* Gain an understanding of the order that recipes are executed and what that means for your recipe options.

### Steps

:::warning
If you don't have IntelliJ IDEA 2024.1 Ultimate, you'll lack bundled editor support for writing and running recipes. Some of the below steps will not work for you without this.
:::

#### Step 1: Add the `ChangeMethodName` recipe

A declarative YAML recipe consists of [at least] metadata fields (`type`, `name`, `displayName`, `description`) and a `recipeList` field that lists the fully qualified class names of recipes to include, along with their options (if any exist). 

The recipe starter project already contains a migration recipe for replacing Spring string utilities with Apache string utilities, but it's just a start and is missing some cases that still need to be covered. For one, you'll want change from Spring's `trimWhitepace(String)` to Apache Common's `StringUtils.strip(String)`.

1. Open [src/main/resources/META-INF/rewrite/stringutils.yml](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/resources/META-INF/rewrite/stringutils.yml) from your project in IntelliJ.
2. Add [`org.openrewrite.java.ChangeMethodName`](https://docs.openrewrite.org/recipes/java/changemethodname) to the end of `recipeList`.
3. Set the options for this recipe as follows:
    * `methodPattern: org.apache.commons.lang3.StringUtils trimWhitespace(java.lang.String)`
    * `newMethodName: strip`
<details>
<summary>Reference example: stringutils.yml</summary>

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseApacheStringUtils
displayName: Use Apache `StringUtils`
description: Replace Spring string utilities with Apache string utilities.
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.commons
      artifactId: commons-lang3
      version: latest.release
      onlyIfUsing: org.springframework.util.StringUtils
      configuration: implementation
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.util.StringUtils
      newFullyQualifiedTypeName: org.apache.commons.lang3.StringUtils
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.lang3.StringUtils trimWhitespace(java.lang.String)
      newMethodName: strip
```
</details>

You may notice that [the method pattern](https://docs.openrewrite.org/reference/method-patterns) actually refers to a method that does not exist. Apache Commons does not have a `trimWhitespace` method, but Spring does. However, because recipes in the `recipeList` are executed in order and the `ChangeType` recipe comes before the new `ChangeMethodName` recipe, when `ChangeMethodName` runs, the type will already be Apache Commons and there will no longer be a Spring `trimWhitespace` method. This is an important point to keep in mind when chaining recipes together.

:::tip
IntelliJ can suggest recipe options. Place your cursor between `description` and `recipeList`, then trigger auto-complete (Ctrl/Cmd + Space) to see optional fields that may be missing (like `estimatedEffortPerOccurrence` in this example).

You can also click through in IntelliJ on a recipe name (like `AddDependency` or `ChangeType`) to open its definition using Ctrl/Cmd + Click.
:::

#### Step 2: Add a unit test

Even for declarative recipes, you should always write tests. Make sure you expand the tests to cover each case as you add functionality.

1. Open [src/test/java/com/yourorg/UseApacheStringUtilsTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/UseApacheStringUtilsTest.java). There are some important things to note in this file that will help you understand how to write effective tests for OpenRewrite:
     * This class implements `RewriteTest`, overrides `defaults(RecipeSpec)` to run the recipe, and configures a classpath that includes `spring-core`.
     * The tests only need dependencies required to compile the "before" code, so `spring-core` is enough and `commons-lang3` is not needed in the test classpath.
     * The existing `replacesStringEquals` test uses `rewriteRun(SourceSpecs...)` with a single `java(String, String)` before/after text block, which asserts the recipe transforms the "before" code into the "after" code.
     * The `noChangeWhenAlreadyUsingCommonsLang3` test only includes a before block, which as the comment mentions, indicates that the after code block should be the same as the before code block.
     * The `//language=java` injection on the text blocks enables IntelliJ syntax highlighting and code completion.
2. Now run the existing `replacesStringEquals` test (use the green play icon to the left of the test method) to confirm it passes. This takes care of that particular case, but now you need to cover the method name change that you just implemented.
3. Add a unit test that validates `trimWhitespace` is converted to `strip`.
<details>
<summary>Reference example: trimWhitespace test</summary>

```java
@Test
void useTrimWhitespace() {
    rewriteRun(
      //language=java
      java(
        """
          import org.springframework.util.StringUtils;
          
          class A {
              boolean test(String s) {
                  return StringUtils.trimWhitespace(s);
              }
          }
          """,
        """
          import org.apache.commons.lang3.StringUtils;
          
          class A {
              boolean test(String s) {
                  return StringUtils.strip(s);
              }
          }
          """
      )
    );
}
```

</details>

4. Run the tests and verify that they pass.

#### Step 3: Reinstall the YAML recipe and validate run

Now that the recipe has been modified, you'll need to reinstall before running it:

```bash
mod config recipes yaml install stringutils.yml
cd ~/moderne-workshop
mod run . --recipe=com.yourorg.UseApacheStringUtils
```

## Exercise 2-2: Add preconditions to the declarative recipe

You may not necessarily always want recipes to affect every file in a codebase. For example, a recipe intended for test code should only run on files that are tests, and a recipe that updates `ArrayList` usage should only run where `ArrayList` appears. Preconditions are recipes themselves, used to describe when another recipe should apply so it only runs where it makes sense. This keeps runs focused and fast while also making the recipe easier to understand, debug, and maintain. For additional guidance, see [Use preconditions](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices#use-preconditions).

In this exercise, you will update the `stringutils.yml` recipe to only run on sources that are likely tests by adding a precondition that uses [the `org.openrewrite.java.search.IsLikelyTest` recipe](https://docs.openrewrite.org/recipes/java/search/islikelytest).

### Goals for this exercise

* Discover common preconditions, and learn how to combine those with recipes.

### Steps

#### Step 1: Add a precondition

1. In [src/main/resources/META-INF/rewrite/stringutils.yml](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/resources/META-INF/rewrite/stringutils.yml), add a `preconditions` field between `description` and `recipeList`.
2. Under the new `preconditions` field, add a list with a single `org.openrewrite.java.search.IsLikelyTest` recipe. You don't need to provide any options for this recipe.

<details>
<summary>Reference example: stringutils.yml with preconditions</summary>

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseApacheStringUtils
displayName: Use Apache `StringUtils`
description: Replace Spring string utilities with Apache string utilities.
//highlight-start
preconditions:
  - org.openrewrite.java.search.IsLikelyTest
//highlight-end
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.commons
      artifactId: commons-lang3
      version: latest.release
      onlyIfUsing: org.springframework.util.StringUtils
      configuration: implementation
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.util.StringUtils
      newFullyQualifiedTypeName: org.apache.commons.lang3.StringUtils
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.lang3.StringUtils trimWhitespace(java.lang.String)
      newMethodName: strip
```

</details>

:::note
A precondition is considered "met" for a file if it would make a change to that file. When you list multiple preconditions, all must match.
:::
3. From the [src/test/java/com/yourorg/UseApacheStringUtilsTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/UseApacheStringUtilsTest.java) file, run the tests again as you did in the previous exercise. Though they passed before, now you should notice that they fail and don't make any changes. This is because of the precondition you added. It has not been met because the sources are not identified as tests.

#### Step 2: Mark sources as test code

To make sure the precondition is met and changes are made to the source files, you'll need to mark them as tests:

1. In [src/test/java/com/yourorg/UseApacheStringUtilsTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/UseApacheStringUtilsTest.java), add a static import for `org.openrewrite.java.Assertions.srcTestJava`.
2. Now, wrap all `java(String, String)` sources with `srcTestJava()`. This explicitly identifies them as tests.
3. Re-run the tests and confirm they now pass.

<details>
<summary>Reference example: UseApacheStringUtilsTest.java</summary>

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

import org.junit.jupiter.api.Test;
import org.openrewrite.DocumentExample;
import org.openrewrite.java.JavaParser;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;
import static org.openrewrite.java.Assertions.srcTestJava;

class UseApacheStringUtilsTest implements RewriteTest {
    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipeFromResources("com.yourorg.UseApacheStringUtils")
          .parser(JavaParser.fromJavaVersion().classpath("commons-lang3", "spring-core"));
    }

    @DocumentExample
    @Test
    void replacesStringEquals() {
        rewriteRun(
          //language=java
          srcTestJava(
              java(
                """
                  import org.springframework.util.StringUtils;
                  
                  class A {
                      boolean test(String s) {
                          return StringUtils.containsWhitespace(s);
                      }
                  }
                  """,
                """
                  import org.apache.commons.lang3.StringUtils;
                  
                  class A {
                      boolean test(String s) {
                          return StringUtils.containsWhitespace(s);
                      }
                  }
                  """
              )
          )
        );
    }

    @Test
    void trimWhitespace() {
        rewriteRun(
          //language=java
          srcTestJava(
              java(
                """
                  import org.springframework.util.StringUtils;
                  
                  class A {
                      boolean test(String s) {
                          return StringUtils.trimWhitespace(s);
                      }
                  }
                  """,
                """
                  import org.apache.commons.lang3.StringUtils;
                  
                  class A {
                      boolean test(String s) {
                          return StringUtils.strip(s);
                      }
                  }
                  """
              )
          )
        );
    }
}
```
</details>

#### Step 3: _(Optional)_ Experiment with other preconditions

You may be interested in exploring other Find recipes in the OpenRewrite recipe catalog. These are often used as preconditions for recipes:
* [org.openrewrite.FindSourceFiles](https://docs.openrewrite.org/recipes/core/findsourcefiles), to match specific files or directories.
* [org.openrewrite.java.migrate.search.FindJavaVersion](https://docs.openrewrite.org/recipes/java/migrate/search/findjavaversion), to match specific Java versions.
* [org.openrewrite.java.search.FindTypes](https://docs.openrewrite.org/recipes/java/search/findtypes), to find type references by name.

## Exercise 2b: Add preconditions to the declarative recipe

Let's update the `stringutils.yml` recipe to only run on sources that are likely tests, by adding a precondition that uses [the `org.openrewrite.java.search.IsLikelyTest` recipe](https://docs.openrewrite.org/recipes/java/search/islikelytest).

### Goals for this exercise

* Discover common preconditions, and learn how to combine those with recipes.

### Steps

1. Open the `UseApacheStringUtils` YAML file (`src/main/resources/META-INF/rewrite/stringutils.yml`) once again.
2. Add a `preconditions` field to the recipe between the `description` and `recipeList` fields. 
   * Add a single `org.openrewrite.java.search.IsLikelyTest` recipe to the list of preconditions, with no options.
   * [Here's an example of what this recipe looks like with the precondition added](https://gist.github.com/mike-solomon/04287b874e335a5e1b40c529d6f3eab9).
3. Open the unit test `src/test/java/com/yourorg/UseApacheStringUtilsTest.java`.
   * Run the tests. They should fail and not make any changes. This is because the precondition has not been met since the sources are not identified as tests. We can fix that with the following steps:
      * Add a static import on `org.openrewrite.java.Assertions.srcTestJava`.
      * Wrap the `java(String, String)` methods with `srcTestJava()` to indicate that the sources are tests. Make sure to do this in all three tests.
   * [Here's an example of what this should look like](https://gist.github.com/mike-solomon/84b85e62825e671ff27a5de96c520218).
   * Run the tests again, and verify that they now pass.
4. You may be interested in exploring other `Find` recipes in the OpenRewrite recipe catalog. These are often used as preconditions for recipes:
   * [org.openrewrite.FindSourceFiles](https://docs.openrewrite.org/recipes/core/findsourcefiles), to match specific files or directories.
   * [org.openrewrite.java.migrate.search.FindJavaVersion](https://docs.openrewrite.org/recipes/java/migrate/search/findjavaversion), to match specific Java versions.
   * [org.openrewrite.java.search.FindTypes](https://docs.openrewrite.org/recipes/java/search/findtypes), to find type references by name.

## Exercise 2b: Add preconditions to the declarative recipe

Let's update the `stringutils.yml` recipe to only run on sources that are likely tests, by adding a precondition that uses [the `org.openrewrite.java.search.IsLikelyTest` recipe](https://docs.openrewrite.org/recipes/java/search/islikelytest).

### Goals for this exercise

* Discover common preconditions, and learn how to combine those with recipes.

### Steps

1. Open the `UseApacheStringUtils` YAML file (`src/main/resources/META-INF/rewrite/stringutils.yml`) once again.
2. Add a `preconditions` field to the recipe between the `description` and `recipeList` fields. 
   * Add a single `org.openrewrite.java.search.IsLikelyTest` recipe to the list of preconditions, with no options.
   * [Here's an example of what this recipe looks like with the precondition added](https://gist.github.com/mike-solomon/04287b874e335a5e1b40c529d6f3eab9).
3. Open the unit test `src/test/java/com/yourorg/UseApacheStringUtilsTest.java`.
   * Run the tests. They should fail and not make any changes. This is because the precondition has not been met since the sources are not identified as tests. We can fix that with the following steps:
      * Add a static import on `org.openrewrite.java.Assertions.srcTestJava`.
      * Wrap the `java(String, String)` methods with `srcTestJava()` to indicate that the sources are tests. Make sure to do this in all three tests.
   * [Here's an example of what this should look like](https://gist.github.com/mike-solomon/84b85e62825e671ff27a5de96c520218).
   * Run the tests again, and verify that they now pass.
4. You may be interested in exploring other `Find` recipes in the OpenRewrite recipe catalog. These are often used as preconditions for recipes:
   * [org.openrewrite.FindSourceFiles](https://docs.openrewrite.org/recipes/core/findsourcefiles), to match specific files or directories.
   * [org.openrewrite.java.migrate.search.FindJavaVersion](https://docs.openrewrite.org/recipes/java/migrate/search/findjavaversion), to match specific Java versions.
   * [org.openrewrite.java.search.FindTypes](https://docs.openrewrite.org/recipes/java/search/findtypes), to find type references by name.

### Takeaways

* Declarative recipes are the simplest to write, and are the most common type of recipe.
* Common building blocks can be configured and combined to compose more complex migrations.
* Recipes can be chained together, to make multiple changes to your code in a single run.
* When changing types, keep in mind the order of recipes as subsequent recipes in the `recipeList` will need to use the new type.
* Unit tests are a great way to ensure your recipe behaves as expected.
* Preconditions can be used to limit which source files a recipe is run on.
