---
sidebar_label: Workshop overview
description: Learn to use AI as a co-author for building OpenRewrite migration recipes, using the Moderne CLI's built-in AI skills.
---

# Overview: Teaching AI to write better OpenRewrite recipes

AI can generate OpenRewrite recipe code, but it doesn't automatically know best practices. Without the right context, structure, and checks, AI output can be incomplete, incorrect, or just not what you were looking for. Effectively using AI for recipe authoring starts with understanding how to guide it and how to evaluate results.

In this workshop, you'll use AI as a co-author to build an OpenRewrite migration recipe from scratch. You'll learn a repeatable workflow -- plan with AI, build with AI, test against real code, and iterate -- using the Moderne CLI's built-in AI skills to accelerate each step.

## What you'll learn

* The Moderne Skills workflow for AI-assisted recipe development (`create-recipe` → `run-recipe` → iterate)
* How to guide AI to choose the right recipe type (declarative YAML, imperative Java, Refaster templates)
* Why test-driven development (TDD) is a natural fit for AI-generated recipes
* How to validate AI-generated recipes against real-world repositories
* Techniques for reviewing, correcting, and improving AI output

## What you'll build

A Jackson 2.x → 3.x migration recipe that includes:

* A **declarative YAML** recipe composing existing OpenRewrite primitives (`ChangePackage`, `ChangeType`, `ChangeMethodName`, `ChangeDependency`)
* An **imperative Java** recipe for a transformation that can't be done declaratively (removing deprecated feature flag configurations)
* (Stretch) A **Refaster template** for an expression-level replacement

An existing Jackson 2→3 recipe already exists in the OpenRewrite ecosystem. That's intentional -- it serves as our "answer key." The goal is to learn the workflow, not to replace the existing recipe. At the end, you'll compare your AI-built recipe's output against the production recipe to see what matched and what was missed.

## Prerequisites

To get the most out of this workshop, you should be familiar with:

* Writing Java code
* Using build tools like Maven or Gradle
* Basic OpenRewrite concepts (recipes, visitors, LSTs)

If you haven't been through the [Fundamentals of recipe development](../fundamentals/workshop-overview.md) workshop yet, we recommend completing it first before returning here.

### Environment requirements

* **JDK**: Java 17 or higher installed
* **Moderne CLI**: Installed and authenticated (see the [CLI getting started guide](../../user-documentation/moderne-cli/getting-started/cli-intro.md))
* **AI coding agent**: Any AI coding assistant. The instructor will demo with [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview), but the exercises work with other agents (Copilot, Cursor, Windsurf, etc.)

## Duration

1 hour total:

| Section | Duration |
|---------|----------|
| Part 1: Framing and context (slides) | ~15 min |
| Module 1: Plan | ~10 min |
| Module 2: Build | ~20 min |
| Module 3: Test | ~15 min |

## About the Moderne Skills

This workshop uses **Moderne Skills** -- specialized instructions that ship with the Moderne CLI and teach AI agents how to create, run, and test OpenRewrite recipes effectively.

If you're using **Claude Code**, the skills are available as slash commands after running:

```bash
mod config claude skills update
```

The available skills are:

| Skill | Command | Purpose |
|-------|---------|---------|
| Create Recipe | `/moderne:create-recipe` | Scaffold and build OpenRewrite recipes |
| Run Recipe | `/moderne:run-recipe` | Run recipes against real repositories |
| Create Organization | `/moderne:create-organization` | Build a working set of repos for testing |
| Analyze Impact | `/moderne:analyze-impact` | Analyze recipe run data and create reports |

### Using skills with other AI agents

The Moderne Skills follow the open [Agent Skills](https://agentskills.io) standard. If you're using a different AI agent (Copilot, Cursor, Windsurf, etc.), you can still benefit from the skill instructions:

1. **Find the skill files**: After running `mod config claude skills update`, the skill Markdown files are stored in your Moderne CLI configuration directory.
2. **Load as context**: Copy the relevant skill `.md` file content into your agent's context (e.g., as a system prompt, custom instruction, or attached file).
3. **Reference the docs**: The skills reference [OpenRewrite best practices](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices) and [recipe testing patterns](https://docs.openrewrite.org/authoring-recipes/recipe-testing) that apply regardless of which AI agent you use.

:::note
Results will vary across AI agents. The instructor will demo with Claude Code, and the suggested prompts are tuned for that experience. Your mileage may vary with other agents, but the workflow and principles are the same.
:::

## Outline and agenda

1. [Module 1: Plan](./module-1-plan.md)
2. [Module 2: Build](./module-2-build.md)
3. [Module 3: Test](./module-3-test.md)

If you get stuck or have questions, feel free to ask in the [OpenRewrite Slack](https://join.slack.com/t/rewriteoss/shared_invite/zt-nj42n3ea-b~62rIHzb3Vo0E1APKCXEA) or [Discord](https://discord.gg/xk3ZKrhWAb).
