---
sidebar_label: Workshop overview
description: A high-level overview of what this workshop will entail.
---

# Advanced OpenRewrite recipe development workshop

This workshop builds on the foundations covered in the [Fundamentals of OpenRewrite recipe development](../fundamentals/workshop-overview.md) workshop and focuses on deeper, more powerful features of the OpenRewrite and Moderne ecosystem.

You will gain experience with advanced recipe development tooling, learn to debug recipes with the IntelliJ plugin and CLI, understand how to extract insights using data tables, and write scanning recipes that reason across multiple files. This workshop is designed to be hands-on, so you can follow along with the examples in your own environment. The workshop consists of a series of modules that highlight key concepts, each with one or more exercises to help you practice what you've learned.

Be sure to also follow the links to the [OpenRewrite documentation](https://docs.openrewrite.org/) for more in-depth information. Feel free to skip around to the sections that interest you most, based on your needs and experience level.

If you get stuck or have questions, feel free to ask in the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b\~62rIHzb3Vo0E1APKCXEA) or [Discord](https://discord.gg/xk3ZKrhWAb).

## What you'll learn

* Debugging techniques using both the CLI and the IntelliJ plugin
* Writing and analyzing data tables to extract insights from source code
* How to build scanning recipes that analyze and generate files across a codebase
* Using traits to model higher-level abstractions in recipes (covered in the optional bonus module)

## Prerequisites

To get the most out of this workshop, you should be comfortable with:

* The basics of writing declarative and imperative OpenRewrite recipes
* Running recipes using the Moderne platform, CLI, or IDE plugin
* Java and build tools like Maven or Gradle

If you haven’t been through the [Fundamentals of OpenRewrite recipe development](../fundamentals/workshop-overview.md) workshop yet, we recommend completing it first before returning here.

## Workshop modules

1. [Module 1: Development environment and debugging](./module-1-recipe-development-environment.md)
2. [Module 2: Data tables](./module-2-data-tables.md)
3. [Module 3: Scanning recipes](./module-3-scanning-recipes.md)
4. [Bonus: Traits](./module-4-traits.md) — an optional deeper dive that builds on Module 3
