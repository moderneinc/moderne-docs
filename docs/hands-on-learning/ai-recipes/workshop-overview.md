---
sidebar_label: Workshop overview
description: Learn to use AI as a co-author for building OpenRewrite migration recipes with a repeatable plan-build-test loop.
---

# Overview: Teaching AI to write better OpenRewrite recipes

AI can generate OpenRewrite recipe code, but it doesn't automatically know best practices. Without the right context, structure, and checks, AI-written recipes can be incomplete, incorrect, or just not what you were looking for. Effectively using AI for recipe authoring starts with understanding how to guide it and how to evaluate results.

In this workshop, you'll use AI as a co-author to build an OpenRewrite migration recipe from scratch. You'll learn a repeatable loop — plan with AI, build against real test cases, run on real repositories, and iterate — that you can apply to any migration.

## What you'll learn

* A repeatable loop for AI-assisted recipe development (plan → build against real test cases → run on real repositories → iterate)
* How to guide AI to choose the right recipe type (declarative YAML, imperative Java, Refaster templates)
* Why test-driven development (TDD) is a natural fit for AI-generated recipes
* How to validate AI-generated recipes against real-world repositories
* Techniques for reviewing, correcting, and improving AI output

## What you'll build

A Jackson 2.x → 3.x migration recipe that includes:

* A **declarative YAML** recipe composing existing OpenRewrite primitives (`ChangePackage`, `ChangeType`, `ChangeMethodName`, `ChangeDependency`)
* An **imperative Java** recipe for a transformation that can't be done declaratively (removing deprecated feature flag configurations)

An existing Jackson 2→3 recipe already exists in the OpenRewrite ecosystem. That's intentional: it serves as our "answer key." The goal is to learn the workflow, not to replace the existing recipe. At the end, you'll compare your AI-built recipe's output against the production recipe to see what matched and what was missed.

## Prerequisites

To get the most out of this workshop, you should be familiar with:

* Writing Java code
* Using build tools like Maven or Gradle
* Basic OpenRewrite concepts (recipes, visitors, LSTs)

If you haven't been through the [Fundamentals of recipe development](../fundamentals/workshop-overview.md) workshop yet, consider completing it first before returning here. Even though the agent will be writing the recipes in this workshop, working knowledge of how to write OpenRewrite recipes is helpful for reviewing and understanding the agent's output.

You will also need:

* [Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md) (version 3.57.3 or higher recommended)
* A JDK installed locally (Java 17 or higher recommended)
* An AI coding agent (the instructor will demo with [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview), but the exercises work with other agents)

Coding models already know OpenRewrite reasonably well, so the exercises work with your agent and the `mod` CLI alone. The CLI can also install a `create-recipe` skill that saves the agent from rediscovering recipe conventions each session. It's optional, and [Exercise 1-1](./module-1-plan.md#exercise-1-1-set-up-your-agent-and-see-the-loop) covers installing it. For more details, see the [Skills for AI coding agents](../../user-documentation/agent-tools/skills.md) page.

:::warning
Agents don't always respond the same way. Your results will differ from the examples shown here, and that's expected. Treat the exercises as a guide, not a script. You may need to adjust your prompts, skip steps the agent already completed, or steer the agent back on track. That's part of working with AI.
:::

:::note
Most agents ask for your approval before running tools (reading files, executing commands, writing code, etc.). The exercises don't call out these approval steps explicitly. It's up to you whether to approve each action individually or configure your agent to proceed automatically.
:::

## Workshop modules

* [Module 1: Plan](./module-1-plan.md) - Set up your agent, research the Jackson 2→3 migration, and scope the recipe with AI
* [Module 2: Build](./module-2-build.md) - Write tests first, build declarative and imperative recipes with AI assistance
* [Module 3: Test](./module-3-test.md) - Run against real repositories, compare to the production recipe, and iterate