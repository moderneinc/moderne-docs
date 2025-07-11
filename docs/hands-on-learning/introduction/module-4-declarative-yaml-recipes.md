---
sidebar_label: "Module 4: Declarative recipes"
description: How to write a declarative YAML recipe
---

# Module 4: Declarative YAML recipes

As a best practice, if your recipe can be declarative (meaning it can be built out of other recipes), then you should make it declarative. You can make some truly powerful migration recipes by combining many tiny recipes together (which have been vetted to handle specific tasks correctly, such as only adding dependencies as needed).

You've actually already built a declarative recipe in [Module 2](./module-2-recipe-builder.md) when you used the Recipe Builder to combine existing recipes using Moderne. The YAML file you downloaded is a declarative recipe. Now you'll learn how to write or modify one yourself.

## Exercise 4: Write a declarative YAML recipe

Let's have a look at a simple declarative YAML recipe, and expand that to cover an additional use case.

### Goals for this exercise

* Write a declarative YAML recipe that ties together existing recipes.
* Learn how to configure a recipe with options.
* Gain an understanding of the order that recipes are executed and what that means for your recipe options.

### Steps

:::warning
If you don't have IntelliJ IDEA 2024.1 Ultimate, you'll lack bundled editor support for writing and running recipes. Some of the below steps will not work for you without this.
:::

1. With the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) still open in IntelliJ, open the `UseApacheStringUtils` recipe which is defined in a YAML file: [src/main/resources/META-INF/rewrite/stringutils.yml](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/resources/META-INF/rewrite/stringutils.yml).
   * Notice how the file is structured, with a `type`, `name`, `displayName`, `description`, and `recipeList` fields.
   * Comment out the `type:` and see how that disables the OpenRewrite support.
2. Note how the `recipeList` field is a list of fully qualified class names of recipes along with their options (if any exist).
   * Click through on the `AddDependency` and `ChangeType` recipes to open their definition. (You can click through in IntelliJ using a ctrl + click combination, or command + click on MacOS.)
   * Have your IDE suggest additional options to include in the recipes by adding a new line between the `description` and `recipeList` fields, then triggering auto-completion (ctrl + space by default). You should see that the recipe doesn't include every option by default (e.g., it's missing `estimatedEffortPerOccurrence` and others).
3. The migration recipe is a great start, but far from complete. Let's add a recipe to change from [Spring's `trimWhitepace(String)`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/StringUtils.html#trimWhitespace\(java.lang.String\)) to [Apache Common's `StringUtils.strip(String)`](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/StringUtils.html#strip-java.lang.String-).
   * Begin by adding the [org.openrewrite.java.ChangeMethodName](https://docs.openrewrite.org/recipes/java/changemethodname) recipe to the end of the `recipeList` field.
   * Make sure to pass in `methodPattern: org.apache.commons.lang3.StringUtils trimWhitespace(java.lang.String)` and `newMethodName: strip` such as in [this example gist](https://gist.github.com/mike-solomon/4e1271c92c07665725d77beedd3ae1f9).
   * Please note that [the method pattern](https://docs.openrewrite.org/reference/method-patterns) refers to a method that does not exist. Apache Commons does not have a `trimWhitespace` method, but Spring _does_. That's because recipes in the `recipeList` are executed in order. The [ChangeType recipe](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/main/resources/META-INF/rewrite/stringutils.yml#L29-L31) comes before our new `ChangeMethodName` recipe. That means that when our `ChangeMethodName` recipe is run, there will no longer be a Spring `trimWhitespace` method. This is important to keep in mind when chaining recipes together.
4. Open the unit test [src/test/java/com/yourorg/UseApacheStringUtilsTest.java](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/src/test/java/com/yourorg/UseApacheStringUtilsTest.java).
   * Notice how we implement `RewriteTest`, override `defaults(RecipeSpec)` to run our recipe, and configure a classpath for the tests that has `spring-core` on it. (A comment in the code here explains why we only need `spring-core` and not `commons-lang3` in the classpath because only dependencies to compile the `before` code are required, not the `after` code.)
   * Run the first test. You can use the green play icon to the left of the test method (`replacesStringEquals` in this case) to run the test. Note that we invoke `rewriteRun(SourceSpecs...)` and pass in a single `java(String, String)` source specification, that takes in a before and after text block.
   * The `//language=java` [language injection](https://www.jetbrains.com/help/idea/using-language-injections.html) enables syntax highlighting and code completion in the text block.
   * All together, this asserts that when we run the recipe, code that matches the `before` block will be converted to code that matches the `after` block.
5. Add a unit test for the `ChangeMethodName` recipe we added that converts `trimWhitespace` to `strip`.
   * [Here is an example of what this trimWhitespace() test might look like](https://gist.github.com/mike-solomon/b56bcc2d07cb7ada646b0a60dad119e1)
   * Run the new unit test, and verify that the correct changes are indeed made.
6. Feel free to test the recipe against the `Default` repositories. Just remember you'll need to let the CLI know the recipe has been updated by running `mod config recipes yaml install stringutils.yml` again (from the `/rewrite-recipe-starter/src/main/resources/META-INF/rewrite` directory).

### Takeaways

* Declarative recipes are the simplest to write, and are the most common type of recipe.
* Common building blocks can be configured and combined to compose more complex migrations.
* Recipes can be chained together, to make multiple changes to your code in a single run.
* When changing types, keep in mind the order of recipes as subsequent recipes in the `recipeList` will need to use the new type.
* Unit tests are a great way to ensure your recipe behaves as expected.