---
sidebar_label: "Module 3: Environment setup"
description: How to set up your IDE to write custom recipes
---

# Module 3: Recipe development environment

Now that you've seen how to run recipes and built one in Moderne using the recipe builder, let's look at how to write your own recipes.

You'll want to have the following installed:

* Java 17 or 21, as our [RewriteTests](https://docs.openrewrite.org/authoring-recipes/recipe-testing#rewritetest-interface) use text blocks.
  * Recipes use Java 8 source level, so they can run on Java 8 and higher.
* IntelliJ IDEA Ultimate 2024.1+ (required by the OpenRewrite plugin).
* The [OpenRewrite plugin](https://plugins.jetbrains.com/plugin/23814-openrewrite), to run and write YAML recipes (This comes pre-installed with IntelliJ versions 2024.1 or later).
* [The Moderne plugin](../user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install.md), for faster recipe development and to help debug recipes.
* [The Moderne CLI](../../moderne-cli/getting-started/cli-intro.md), to run recipes at scale locally, and debug against serialized LSTs.

## Exercise 3: Create and test your own recipe module

### Goals for this exercise

* Set up a new recipe module in your IDE, based on the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter) project.
* Run the unit tests for the recipe module, to ensure everything is set up correctly.
* Install your recipe module to your local Maven repository for debugging later.
* Use the CLI to run different types of recipes against the `Default` group of repositories [you set up earlier](../../moderne-cli/getting-started/cli-intro.md#using-the-cli).

### Steps

1. Git clone the [rewrite-recipe-starter](https://github.com/moderneinc/rewrite-recipe-starter).
   * You can either clone the project at is, or use it as a template to create a new GitHub repository.
2. Open the project in IntelliJ IDEA.
   * You have the option to import the project as a Maven project, or as a Gradle project. Pick the one you're most comfortable with.
3. (Optional) Consider [updating the way you run tests in IntelliJ](https://docs.openrewrite.org/reference/building-openrewrite-from-source#developing-tips) to speed up test responsiveness.
4. Run the unit tests in the project, to ensure everything is set up correctly.
   * All tests should pass, and you should see a message that the project was successfully built.
5. (Optional) Customize the project's group ID and artifact ID in the `pom.xml` file, or `build.gradle` and `settings.gradle` file. Also consider updating the Java package names to reflect these changes as well.
   * This helps make the project your own, and allows you to version and share your recipes without conflicts.
   * For the purposes of this workshop, this isn't required, though. Feel free to continue using `com.yourorg` throughout.
   * If you're creating internal recipes based on Moderne recipes, you may find it beneficial to use the [moderne-recipe-bom](https://central.sonatype.com/artifact/io.moderne.recipe/moderne-recipe-bom/versions) to align the versions of the various modules.
6. Install the project to your local Maven repository & CLI. This is useful for debugging declarative recipes or for Moderne DX users.
   * Run `mvn install` from the root of the project, or `./gradlew publishToMavenLocal` if you're using Gradle.
   * You should see a message that the project was successfully installed to your local Maven repository.
   * From there make the recipe available to the CLI through `mod config recipes jar install com.yourorg:rewrite-recipe-starter:0.1.0-SNAPSHOT`
   * **Note**: You can also test recipes directly from IntelliJ using the Moderne plugin as described in [exercise 9](#exercise-9-using-the-moderne-plugin).
7. Confirm that everything is set up correctly for testing imperative recipes (we'll explain the types of recipes in the next section) by opening up the `AssertEqualsToAssertThat` class, right-clicking on the class name, and clicking on the `Set Active Recipe` option. Then, open your terminal and navigate to the `workshop` directory (that you set up in the CLI tutorial earlier) and run: `mod run . --active-recipe`.
   * You should see: `Running recipe com.yourorg.AssertEqualsToAssertThat` in the output.
8. Confirm everything is set up for testing declarative recipes by opening your terminal and navigating to the `/src/main/resources/META-INF/rewrite` directory in the `rewrite-recipe-starter` repo. Then run the command: `mod config recipes yaml install stringutils.yml`. Afterwards, navigate to your `workshop` directory and run: `mod run . --recipe=com.yourorg.UseApacheStringUtils`.
   * If everything worked correctly, you should see that the recipe was installed from the YAML file and then was recognized by the `mod run` command.
9. Briefly look over the various recipes and tests in the starter project. We will visit these in more details in upcoming exercises.

### Takeaways

* The `rewrite-recipe-starter` project is a good starting point for your own recipe module.
* There are various types of recipes included in the starter project, to give you a feel for how they're implemented.
* The unit tests in the starter project take in text blocks that assert the state before and after running a recipe.
* You can quickly test recipes against actual repositories with the CLI.

## Fundamental concepts

Before we move on and dive into writing recipes, let's take a look at some fundamental concepts that underpin OpenRewrite.

Read up on the following concepts in the [OpenRewrite documentation](https://docs.openrewrite.org/), to get a better understanding of how OpenRewrite works:

1. [Lossless Semantic Trees](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees)
   * [Java LST examples](https://docs.openrewrite.org/concepts-and-explanations/lst-examples)
   * [YAML LST examples](https://docs.openrewrite.org/concepts-and-explanations/yaml-lst-examples)
   * [TreeVisitingPrinter](https://docs.openrewrite.org/concepts-and-explanations/tree-visiting-printer)
2. [Visitors](https://docs.openrewrite.org/concepts-and-explanations/visitors)
   * [Cursoring](https://docs.openrewrite.org/concepts-and-explanations/visitors#cursoring)
   * [Isomorphic vs. non-isomorphic](https://docs.openrewrite.org/concepts-and-explanations/visitors#isomorphic-vs-non-isomorphic-visitors)
3. [Recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes)

These concepts should give you some sense as to the importance of exact type attribution, and how visitors are used to traverse and modify the LST. Without these, it would be next to impossible to write recipes that make changes to your code reliably.

### Three types of recipes

It's important to note there are different types of recipes, each with their own trade-offs.

1. [Declarative recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#declarative-recipes) are the simplest to write, and are the most common type of recipe. They are written in YAML, and often tie together existing recipe building blocks with some light configuration.
2. [Refaster rules](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#refaster-template-recipes) bring you the benefit of compiler support, and work best for straightforward replacements. They generate recipes that can also be used as a starting point for more complex recipe implementations.
3. [Imperative recipes](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#imperative-recipes) are the most powerful, and allow you to write Java code to implement your recipe. By [using the `JavaTemplate` builder](https://docs.openrewrite.org/authoring-recipes/modifying-methods-with-javatemplate), you can keep complexity down, as you define arbitrary code changes.

No matter which method of recipe development you choose, you can always [write unit tests for your recipe](https://docs.openrewrite.org/authoring-recipes/recipe-testing). Beyond that, there are [best practices for writing recipes](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices), such as ensuring idempotence, and avoiding harmful changes.

