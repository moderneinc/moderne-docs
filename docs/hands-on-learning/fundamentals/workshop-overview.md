---
sidebar_label: Workshop overview
description: A high-level overview of what this workshop will entail.
---

# Overview: Fundamentals of OpenRewrite recipe development

This workshop is designed to help you learn how to write your own custom [OpenRewrite](https://docs.openrewrite.org/) recipes. While Moderne and OpenRewrite offer thousands of ready-to-use recipes, sometimes you need to write custom recipes for your organization's specific needs.

You will gain experience writing recipes using three different approaches: [declarative YAML](https://docs.openrewrite.org/concepts-and-explanations/recipes#declarative-recipes), [Refaster templates](https://docs.openrewrite.org/authoring-recipes/refaster-recipes), and [imperative recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes). This workshop is designed to be hands-on, so you can follow along with the examples in your own environment. The workshop consists of a series of modules that highlight key concepts, each with one or more exercises to help you practice what you've learned.

Be sure to also follow the links to the [OpenRewrite documentation](https://docs.openrewrite.org/) for more in-depth information. Feel free to skip around to the sections that interest you most, based on your needs and experience level.

If you get stuck or have questions, feel free to ask in the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA) or [Discord](https://discord.gg/xk3ZKrhWAb).

:::info
This workshop is Java-focused, but the core authoring concepts apply more broadly. OpenRewrite also supports JavaScript and TypeScript recipes, with guides on [writing a JavaScript refactoring recipe](https://docs.openrewrite.org/authoring-recipes/writing-a-javascript-refactoring-recipe), setting up the [JavaScript recipe development environment](https://docs.openrewrite.org/authoring-recipes/javascript-recipe-development-environment), and exploring [JavaScript LST examples](https://docs.openrewrite.org/concepts-and-explanations/javascript-lst-examples).
:::

## What you'll learn

* How to set up your development environment for recipe authorship
* Writing declarative YAML recipes with preconditions
* Creating Refaster template recipes for pattern-based transformations
* Building imperative Java recipes for complex transformations
* Testing and validating recipe behavior

## Prerequisites

To get the most out of this workshop, you should at least be familiar with:

* Writing Java code
* Using build tools like Maven or Gradle

If you haven't been through the [Introduction to OpenRewrite](../introduction/workshop-overview.md) workshop yet, we recommend completing it first to understand the fundamentals of how OpenRewrite works and how to run recipes.

## Pre-work

Before attending this workshop, please complete the following:

* Install JDK 21 (required for recipe development)
  * The [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) project expects JDK 21
  * You can use Temurin JDK 21.0.7 or another JDK 21 distribution
* Fork or clone the [`rewrite-recipe-starter`](https://github.com/moderneinc/rewrite-recipe-starter) repository
* _(Optionally)_ Edit the `build.gradle.kts` to set a unique groupId, such as `com.github.yourusername`
* _(Optionally)_ Join the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA) for communication with the instructor and pre-work support

## Types of recipes

There are three main types of recipes, each with their own trade-offs:

1. **Declarative recipes** - Written in YAML, these combine existing recipes with configuration. They're the simplest to write and are very common.
2. **Refaster template recipes** - Written in Java using `@BeforeTemplate` and `@AfterTemplate` annotations. Good for straightforward expression and statement replacements with compiler support.
3. **Imperative recipes** - Written entirely in Java, these offer the most power and flexibility. Use them when the other types can't handle your use case.

This workshop will cover all three types in depth.

## Workshop modules

* [Module 1: Environment setup](./module-1-environment-setup.md) - Set up your IDE and verify your development environment
* [Module 2: Declarative recipes and preconditions](./module-2-declarative-recipes.md) - Write YAML recipes and scope them with preconditions
* [Module 3: Refaster recipes](./module-3-refaster-recipes.md) - Create pattern-based transformations using Refaster templates
* [Module 4: Imperative recipes and testing](./module-4-imperative-recipes.md) - Build complex recipes in Java and write comprehensive tests
