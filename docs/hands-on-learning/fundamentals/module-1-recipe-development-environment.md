---
sidebar_label: "Module 1: Environment setup"
description: How to set up your environment to write custom recipes.
---

# Module 1: Recipe development environment

If you completed the [Introduction to OpenRewrite](../introduction/workshop-overview.md) workshop, you are familiar with how to run recipes and build them in Moderne using the recipe builder. In this module, you will learn how to write your own recipes.

If you get stuck, you can reference the [workshop-solutions branch](https://github.com/moderneinc/rewrite-recipe-starter/blob/workshop-solutions/) of the starter repo for completed examples (and you’ll also see code embedded inline throughout the steps).

You'll want to have the following installed:

* Java 21, as our [RewriteTests](../../user-documentation/recipes/authoring-recipes/testing-and-best-practices/recipe-testing.md#rewritetest-interface) use text blocks.
  * The [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) project expects JDK 21. (Temurin JDK 21.0.7 (`temurin-21.0.7`), for example, has been specified in the `.sdkmanrc` file, but other version 21 JDKs may work as well.)
  * Recipes use Java 8 source level, so they can run on Java 8 and higher.
* A Java IDE or editor. This workshop demonstrates IntelliJ IDEA (2025.3+ recommended), but you can follow along in any IDE or from the command line.
* A build tool (Maven or Gradle) to compile the project and run tests. The starter project supports both.
* [The Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md), to run recipes at scale locally, and debug against serialized LSTs. The CLI is free to use against public repositories.

If you use IntelliJ IDEA, the following plugins can improve the experience, but neither is required to complete this workshop:

* The [OpenRewrite plugin](https://plugins.jetbrains.com/plugin/23814-openrewrite), to run and write YAML recipes.
* [The Moderne plugin](../../user-documentation/moderne-ide-integration/how-to-guides/moderne-plugin-install.md), for faster recipe development and to help debug recipes. Note that this plugin requires the CLI to be configured with a [Moderne license](../../user-documentation/moderne-cli/getting-started/moderne-cli-license.md).

:::warning
If you have not already completed the [Introduction to OpenRewrite course](../introduction/workshop-overview.md), go there first and complete at least Module 1 before continuing. The exercises in this workshop assume that module has been completed - meaning that the Moderne CLI is working and that you have a `~/moderne-workshop` directory with the `Default` org synced.
:::

## Exercise 1-1: Create and test your own recipe module

### Goals for this exercise

* Set up a new recipe module in your IDE, based on the [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) project.
* Run the unit tests for the recipe module, to ensure everything is set up correctly.
* Install your recipe module to your local Maven repository for debugging later.

### Steps

#### Step 1: Clone and open the project

1. Clone or fork the [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) project or [use it as a template](https://github.com/new?template_name=rewrite-recipe-starter&template_owner=moderneinc).
2. Open the project in your IDE (this workshop demonstrates IntelliJ IDEA).
3. Import either the Maven or Gradle build (your preference) into your IDE and enable annotation processing. 

:::tip
For a better idea about the reference recipes and tests that are included in the starter project, review the [`README.md`](https://github.com/moderneinc/rewrite-recipe-starter/blob/main/README.md) there. Many of them will be referenced later in this workshop.
:::

#### Step 2: Run tests once

1. Run all unit tests to confirm your environment is working.
    * From the command line, run `mvn test` (Maven) or `./gradlew test` (Gradle) from the root of the project.
    * In IntelliJ, you can instead navigate to the `src/test/java` folder in the Project Tool window, right-click it, and select the green play button (Run 'All Tests' for Maven, or 'Run Tests in rewrite-recipe-starter' for Gradle). If you're using Gradle and tests feel slow, consider [updating the way tests run in IntelliJ](https://docs.openrewrite.org/reference/building-openrewrite-from-source#developing-tips) for faster feedback.
2. Confirm that all tests pass, and you should see a message that the project was successfully built. You can ignore any warnings as long as the build is successful.

#### Step 3: _(Optional)_ Customize coordinates

To make the project your own and allow it to be versioned and shared without conflicts, customize the project's group ID and artifact ID in the `pom.xml` file (Maven), or `build.gradle.kts` and `settings.gradle.kts` files (Gradle). You'll also want to update the Java package names to reflect these changes as well. (You may consider using the `ChangePackage` OpenRewrite recipe or the 'Replace in path' feature of IntelliJ to do a search and replace of `com.yourorg` across the project.)

:::note
For the purposes of this workshop, this step isn't required, so feel free to leave it alone and continue to use `com.yourorg`.
:::

#### Step 4: Install and verify locally

1. Install the project to your local Maven repository by running one of the following commands from the root of your project, depending on which build tool you prefer:

```bash
# Maven
mvn install

# Gradle
./gradlew publishToMavenLocal
```

2. Install the recipe package to the local recipe marketplace with the Moderne CLI:

```bash
mod config recipes jar install com.yourorg:rewrite-recipe-starter:LATEST
```

3. To confirm that everything is set up for testing imperative recipes, run one of the starter project's recipes by name. Open a terminal, navigate to your workshop directory, and run:

  ```bash
  cd ~/moderne-workshop
  mod run . --recipe=com.yourorg.AssertEqualsToAssertThat
  ```

:::tip
If you have the Moderne plugin installed (which requires a [licensed CLI](../../user-documentation/moderne-cli/getting-started/moderne-cli-license.md)), you can instead open the `AssertEqualsToAssertThat` class in IntelliJ, right-click the class name, select **Set Active Recipe**, and run `mod run . --active-recipe`.
:::

### Takeaways

* The `rewrite-recipe-starter` project is a good starting point for your own recipe module.
* There are various types of recipes included in the starter project, to give you a feel for how they're implemented.
* The unit tests in the starter project take in text blocks that assert the state before and after running a recipe.
* You can quickly test recipes against actual repositories with the CLI.

## Three types of recipes

It's important to note there are different types of recipes, each with their own trade-offs.

1. [Declarative recipes](../../user-documentation/recipes/authoring-recipes/writing-recipes/types-of-recipes.md#declarative-recipes) are the simplest to write, and are the most common type of recipe. They are written in YAML, and often tie together existing recipe building blocks with some light configuration.
2. [Refaster rules](../../user-documentation/recipes/authoring-recipes/writing-recipes/types-of-recipes.md#refaster-template-recipes) bring you the benefit of compiler support, and work best for straightforward replacements. They generate recipes that can also be used as a starting point for more complex recipe implementations.
3. [Imperative recipes](../../user-documentation/recipes/authoring-recipes/writing-recipes/types-of-recipes.md#imperative-recipes) are the most powerful, and allow you to write Java code to implement your recipe. By [using the `JavaTemplate` builder](../../user-documentation/recipes/authoring-recipes/advanced-authoring/modifying-methods-with-javatemplate.md), you can keep complexity down, as you define arbitrary code changes.

No matter which method of recipe development you choose, you can (and should) always [write unit tests for your recipe](../../user-documentation/recipes/authoring-recipes/testing-and-best-practices/recipe-testing.md). Beyond that, there are [best practices for writing recipes](../../user-documentation/recipes/authoring-recipes/testing-and-best-practices/recipe-conventions-and-best-practices.md), such as ensuring idempotence, and avoiding harmful changes. The remaining modules will explore in more detail how to write and test all three of these types of recipes.
