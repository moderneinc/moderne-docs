---
sidebar_label: Workshop overview
description: Set up the Moderne agent tools and use Prethink, Trigrep, and the MCP server with your AI coding agent.
---

# Overview: Agent tools for AI coding agents

AI coding agents are only as good as the context and tools they can reach. Out of the box, most agents only have grep, file reads, and shell commands, which means they read your code as text and infer everything else. On enterprise codebases that doesn't scale.

The Moderne CLI ships a set of **agent tools** that change that. Skills teach agents how to work with recipes, the MCP server exposes semantic navigation and search, Prethink writes pre-resolved architectural and quality context into your repositories, and Trigrep gives sub-second indexed search. In this workshop, you'll install each of these and try them on a small set of Java and Spring projects.

## What you'll learn

* How to install and configure the Moderne CLI, the `rewrite-prethink` recipe modules, and Lossless Semantic Trees (LSTs) for a working set of repositories
* How to install agent tools with `mod config agent-tools install` (and how to scope to a single agent like `copilot` or `claude`)
* How to run Prethink and inspect the architectural and code quality context it generates
* How to use Trigrep for fast literal, regex, and structural code search
* How the Moderne MCP server exposes semantic tools (`find_types`, `find_methods`, `change_type`, `run_recipe`, etc.) to your coding agent

## What you'll build

A small workspace of public Java/Spring repositories with:

* Locally built LSTs ready for recipe execution
* Generated Prethink context (`.moderne/context/`) for each repo, including service endpoints, messaging connections, and code quality metrics
* A trigram search index for whole-workspace search
* An AI coding agent configured with Moderne skills, Prethink-aware context, and the Moderne MCP server

By the end you'll have a working setup you can point at your own repositories the same day.

## Prerequisites

To get the most out of this workshop, you should be familiar with:

* Running commands in a terminal
* Cloning git repositories and basic git operations
* A working knowledge of Java/Spring (helpful for reading the example projects, but not required)

You will also need:

* The [Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md) (version 4.2.1 or higher recommended). You'll install this in [Module 1](./module-1-cli-and-lsts.md)
* A JDK installed locally (Java 17 or higher recommended)
* An AI coding agent. The exercises demo with [Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview), but every step works with [Cursor](https://cursor.sh), [GitHub Copilot](https://github.com/features/copilot), [Windsurf](https://codeium.com/windsurf), [Sourcegraph Amp](https://ampcode.com), or [OpenAI Codex](https://openai.com/codex)
* A Moderne account on [app.moderne.io](https://app.moderne.io) (a free login is sufficient)

If you've never used the Moderne CLI before, work through the [Introduction to OpenRewrite](../introduction/workshop-overview.md) workshop first. This workshop assumes you're comfortable running `mod` commands.

:::warning
Agents don't always respond the same way. Your results will differ from the examples shown here, and that's expected. Treat the exercises as a guide, not a script. You may need to adjust your prompts, skip steps the agent already completed, or steer the agent back on track. That's part of working with AI.
:::

:::note
Most agents ask for your approval before running tools (reading files, executing commands, writing code, etc.). The exercises don't call out these approval steps explicitly. It's up to you whether to approve each action individually or configure your agent to proceed automatically.
:::

:::tip Agent-agnostic by design
Examples in this workshop demo with Claude Code (slash commands like `/moderne:create-recipe`, the `claude` startup command). Every step works the same way in Cursor, GitHub Copilot, Windsurf, Amp, and Codex. When you see a Claude-specific command, substitute the equivalent for your agent. See [Invoking skills](../../user-documentation/agent-tools/skills.md#invoking-skills) for the per-agent syntax.
:::

## Workshop modules

* [Module 1: CLI and LSTs](./module-1-cli-and-lsts.md) - Install the Moderne CLI, install the Prethink recipe modules, sync repositories, and build LSTs
* [Module 2: Install agent tools](./module-2-install-agent-tools.md) - Install skills and the MCP server with `mod config agent-tools install`, and verify what each agent now exposes
* [Module 3: Prethink](./module-3-prethink.md) - Run Prethink, apply the changes, inspect the generated context, and ask your agent to visualize the code quality metrics
* [Module 4: Trigrep](./module-4-trigrep.md) - Build a search index with `mod postbuild search index` and explore literal, regex, and structural queries
* [Module 5: MCP server](./module-5-mcp.md) - Explore how the Moderne MCP server exposes semantic search, navigation, and refactoring tools to your agent
