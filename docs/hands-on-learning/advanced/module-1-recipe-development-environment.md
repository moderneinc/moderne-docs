---
sidebar_label: "Module 1: Development environment"
description: Debug recipes with IDE breakpoints and the Moderne CLI.
---

# Module 1: Recipe development environment and debugging

This module takes a deeper dive into the tools you'll use to author, run, and debug advanced OpenRewrite recipes. You'll learn how to debug recipes using both IDE breakpoints and CLI runs.

:::info
This module assumes you have already completed [Fundamentals Module 1: Recipe development environment](../fundamentals/module-1-recipe-development-environment.md). That module covers the environment setup this workshop depends on, including cloning the [`rewrite-recipe-starter` repository](https://github.com/moderneinc/rewrite-recipe-starter), installing the Moderne CLI, and running the starter's tests. Complete it first if you haven't, then return here.
:::

## Exercise 1: Debugging recipes

In this exercise, you’ll learn how to debug recipes using both IDE breakpoints and command-line execution.

### Goals for this exercise

* Debug a recipe against real code by attaching a debugger to a CLI run.
* Understand how to set breakpoints in a recipe class or visitor.
* Use the `TreeVisitingPrinter` to see what an LST looks like.

### Steps

1. Follow [Validating recipes at scale](../../user-documentation/recipes/authoring-recipes/testing-and-best-practices/validating-recipes-at-scale.md). It walks you through setting an active recipe, building LSTs, and [attaching a debugger](../../user-documentation/recipes/authoring-recipes/testing-and-best-practices/validating-recipes-at-scale.md#debug-a-recipe-against-real-code) while the CLI runs the recipe against real code.
2. Open a test case (e.g., `FindSpringBeansTest`), set breakpoints inside `visit()` or the visitor logic, then run the test in debug mode (green bug icon in IntelliJ) and step through to inspect variables and visitor flow.
3. [Configure the TreeVisitingPrinter](../../user-documentation/recipes/authoring-recipes/concepts/tree-visiting-printer.md) to see what an LST looks like when your recipe finds a match — a great way to learn the different [Java LST elements](../../user-documentation/recipes/authoring-recipes/concepts/lst-examples/java.md). You'll need to add `import org.openrewrite.java.TreeVisitingPrinter;` to your recipe's imports.

### Takeaways

* You can attach any JDWP-capable debugger to a CLI recipe run to debug recipes against real code.
* Logging and breakpoints are helpful tools for troubleshooting recipe behavior.
* The `TreeVisitingPrinter` is a great way of understanding what the LST looks like.
