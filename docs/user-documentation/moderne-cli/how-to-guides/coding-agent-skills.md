---
sidebar_label: Skills for AI coding agents
description: How to use Moderne skills with AI coding agents for recipe development, testing, and impact analysis.
---

# Using Moderne skills with AI coding agents

The Moderne CLI can install skills that teach AI coding agents how to work with OpenRewrite recipes. With a single command, you can install skills for all detected agents, giving them guidance through the full recipe workflow: creating recipes, running them at scale, and analyzing the impact of what changed.

## Why use Moderne skills

Building OpenRewrite recipes requires understanding [visitor patterns](https://docs.openrewrite.org/concepts-and-explanations/visitors), [LST structures](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees), and testing idioms that AI coding agents don't know out of the box.

Moderne skills teach agents about:

* **Recipe creation** - choosing the right type of recipe ([Declarative](https://docs.openrewrite.org/concepts-and-explanations/recipes#declarative-recipes), [Refaster](https://docs.openrewrite.org/concepts-and-explanations/recipes#refaster-template-recipes), or [Imperative](https://docs.openrewrite.org/concepts-and-explanations/recipes#imperative-recipes)) and following [OpenRewrite conventions](https://docs.openrewrite.org/authoring-recipes/recipe-conventions-and-best-practices)
* **Testing workflows** - setting up working sets, running recipes against real code, and diagnosing why recipes match or don't match certain pieces of code
* **Impact analysis** - turning recipe run data into executive reports and visualizations

The skills are bundled with the CLI and stay current when you update.

## Supported agents

The CLI auto-detects installed coding agents and installs skills to each one:

| Agent           | Detection                             | Install location                                             |
|-----------------|---------------------------------------|--------------------------------------------------------------|
| Claude Code     | `~/.claude/` (or `CLAUDE_CONFIG_DIR`) | `~/.claude/marketplaces/moderne/moderne/commands/<skill>.md` |
| Windsurf        | `~/.codeium/`                         | `~/.codeium/windsurf/skills/<skill>/SKILL.md`                |
| Sourcegraph Amp | `~/.config/agents/`                   | `~/.config/agents/skills/<skill>/SKILL.md`                   |
| Cursor          | `.cursor/` in current directory       | `.cursor/rules/moderne-<skill>.mdc`                          |
| GitHub Copilot  | `.github/` in current directory       | `.github/instructions/moderne-<skill>.instructions.md`       |

:::note
Cursor and GitHub Copilot skills are per-project. Unlike the other agents which install skills globally, these require running the install command from each project root where you want the skills available.
:::

## Installation

The following command scans for installed coding agents and installs skills to each one. If no agents are detected, it displays a message listing the supported agents and their detection paths.

```bash
mod config moderne skills update
```

To remove skills, delete the installed files for each agent:

```bash
# Claude Code
rm -rf ~/.claude/marketplaces/moderne

# Windsurf
rm -rf ~/.codeium/windsurf/skills/run-recipe ~/.codeium/windsurf/skills/create-recipe ~/.codeium/windsurf/skills/create-organization ~/.codeium/windsurf/skills/analyze-impact

# Sourcegraph Amp
rm -rf ~/.config/agents/skills/run-recipe ~/.config/agents/skills/create-recipe ~/.config/agents/skills/create-organization ~/.config/agents/skills/analyze-impact

# Cursor (from project root)
rm -f .cursor/rules/moderne-*.mdc

# GitHub Copilot (from project root)
rm -f .github/instructions/moderne-*.instructions.md
```

## Invoking skills

How you invoke skills depends on your coding agent:

**Claude Code** - Use slash commands with the `/moderne:` prefix:

```
/moderne:create-recipe

Create a recipe that replaces all calls to Logger.info() with Logger.debug()
```

**Windsurf, Sourcegraph Amp** - Reference skills by name in your prompt:

```
Using the run-recipe skill, test my recipe against the Default organization.
```

**Cursor** - Skills are loaded automatically as rules. Reference them in context:

```
@moderne-create-recipe Create a recipe that migrates deprecated API calls.
```

**GitHub Copilot** - Skills are loaded as instructions. Reference them in your prompt:

```
Following the moderne-run-recipe instructions, help me debug why my recipe isn't matching.
```

## Available skills

The following skills are installed:

* **create-organization** - build a working set of repositories to test against
* **create-recipe** - create new OpenRewrite recipes with proper patterns
* **run-recipe** - test and debug recipes against real repositories
* **analyze-impact** - create reports and visualizations from recipe run data

### create-organization

Use this skill when you want to create a custom set of repositories to run recipes against.

This skill helps you:

* **Find repositories** by language, technology (Spring Boot, JPA, Kafka, etc.), or by listing all accessible repos
* **Search across platforms** - GitHub, GitLab, Bitbucket, and other sources like Sourcegraph and Libraries.io
* **Generate repos.csv** files with proper format and organizational hierarchy
* **Sync repositories** using `mod git sync csv`
* **Organize repositories** by team, technology, or business domain for focused testing

### create-recipe

Use this skill when you want to create a new OpenRewrite recipe or modify an existing one.

**When not to use**: Testing or debugging a recipe you've written (use `run-recipe` instead) or general Java programming unrelated to OpenRewrite.

This skill helps you with:

* **Recipe type selection** - Choosing between declarative YAML (for composing existing recipes), Refaster templates (for simple expression replacements), or imperative Java recipes (for complex logic)
* **Critical patterns** - LST immutability, visitor traversal, type matching with `MethodMatcher`, and proper import handling
* **Testing** - Writing tests with the `RewriteTest` framework, including before/after assertions and no-change cases
* **Data tables** - Emitting structured data for analysis

### run-recipe

Use this skill when you're developing a recipe and need to test and debug it against real repositories. This skill guides you through an iterative workflow. It doesn't just run the recipe - rather, it tries to help you understand why the recipe matches or doesn't match the code you expect.

This skill guides you through an iterative development loop:

1. **Working set setup** - Syncing repositories from a Moderne organization or custom CSV
2. **Pre-analysis** - Searching source code to predict which files *should* be affected
3. **Recipe execution** - Running with appropriate parallelism and monitoring progress
4. **Results comparison** - Comparing predictions vs actual results to diagnose mismatches
5. **Diagnosis** - Investigating why expected changes are missing (e.g., checking matchers, reviewing visitor logic)
6. **Iteration** - Fixing the recipe and re-running until results match expectations

The skill supports two modes:

* **Development mode** - For recipes you're actively editing (uses `mod config recipes active set`)
* **Existing recipe mode** - For pre-built recipes from Maven coordinates (uses `mod config recipes jar install`)

:::tip
If you just want to run an existing recipe without iterative debugging, you can use the CLI directly (`mod run`). This skill is most valuable when you're developing a new recipe and need help diagnosing why it's not working as expected.
:::

### analyze-impact

Use this skill when you want to create reports and visualizations from recipe run data.

This skill helps you with:

* **Discovering data** - Finding existing recipe runs with `mod audit runs list`
* **Data aggregation** - Extracting data tables with `mod study`
* **Analysis** - Identifying patterns in vulnerability, migration, or code quality data
* **Visualization** - Creating Sankey diagrams, bar charts, treemaps, and tables
* **Report generation** - Building markdown-based slide decks with Marp

The skill knows which recipes produce useful data tables for impact analysis, including `DependencyVulnerabilityCheck` for security, `UpgradeToJava25` for migration scope, and `CommonStaticAnalysis` for code quality.

## Workflow example

The skills work together to support the full recipe lifecycle:

1. **Create a working set** with `create-organization` to find Spring Boot repositories
2. **Write a recipe** with `create-recipe` to migrate a deprecated API
3. **Test iteratively** with `run-recipe` until the recipe matches expected files
4. **Generate a report** with `analyze-impact` showing migration scope across teams

## Keeping skills up to date

The skills are bundled with the CLI. When you upgrade the CLI, run the update command again to sync:

```bash
mod config moderne skills update
```

This ensures the skills stay current as CLI capabilities evolve.
