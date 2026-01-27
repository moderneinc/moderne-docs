---
sidebar_label: Generating Prethink context locally
description: How to generate Prethink context for AI agents using the Moderne CLI.
---

# How to generate Prethink context with the CLI

Prethink recipes generate structured context that gives AI coding agents a clear, accurate understanding of your entire codebase. In this guide, we will walk you through how to generate this Prethink context locally using the Moderne CLI.

For more background on what Prethink is and the available recipes, please check out our [Prethink documentation](../../recipes/prethink.md).

## Prerequisites

This guide assumes that you have already [installed and configured the CLI](../getting-started/cli-intro.md#installation-and-configuration) and you are aware of [what Moderne Prethink is](../../recipes/prethink.md).

## Step 1: Clone the repositories

The first thing you'll need to do is come up with the list of repositories that you want to generate Prethink context for. Once you have that list, please ensure they are cloned to a shared directory locally. For instance, this might look like:

```bash
prethink-demo
├── service-a
├── service-b
└── shared-library
```

:::tip
Start with a small subset of repositories to test and iterate quickly. Once everything works, add more repositories as needed.
:::

We recommend using the [mod git sync command](../cli-reference.md#mod-git-sync) to create this shared directory. It can clone repositories from a CSV file or from an existing organization.

## Step 2: Build the LSTs

With the repositories cloned, build or download LSTs to run Prethink recipes on:

```bash
mod build prethink-demo
```

## Step 3: Install Prethink recipes

The Moderne module depends on the OpenRewrite module, so install both of these JARs:

```bash
mod config recipes jar install org.openrewrite.recipe:rewrite-prethink:LATEST
mod config recipes jar install io.moderne.recipe:rewrite-prethink:LATEST
```

If you only need the core building blocks for custom discovery recipes, you can install just the OpenRewrite module.

## Step 4: Run a Prethink recipe

You can either run the starter recipe without AI:

```bash
mod run prethink-demo --recipe io.moderne.prethink.UpdatePrethinkContextNoAiStarter
```

Or, if you want AI-generated code comprehension and test summaries, you can run the AI version with your LLM provider credentials:

```bash
mod run prethink-demo --recipe io.moderne.prethink.UpdatePrethinkContextStarter \
  -P provider=openai \
  -P apiKey=sk-...
```

In either case, the recipe will:

* Discover service endpoints, database connections, external service calls, and messaging patterns
* Map test methods to implementation methods
* Generate a CALM architecture diagram
* Update agent configuration files

After you've run the recipe, make sure to apply the changes so the generated files appear in your working tree:

```bash
mod git apply prethink-demo --last-recipe-run
```

You'll find the generated context in each repository's `.moderne/context/` directory. For details on what files are generated, see our documentation on [what Prethink generates](../../recipes/prethink.md#what-prethink-generates).

## Step 5: Commit and push your changes

After reviewing the generated context, commit the changes:

```bash
mod git commit prethink-demo -m "Add Prethink context for AI agents" --last-recipe-run
```

Then push to your remote repository:

```bash
mod git push prethink-demo --last-recipe-run
```

Once pushed, create pull requests through your git provider (GitHub, GitLab, etc.) to merge the Prethink context into your main branch.

## Creating custom Prethink recipes

If you want to customize which context is generated, you can create your own Prethink recipe. See [creating custom Prethink recipes](../../recipes/prethink.md#creating-custom-prethink-recipes) for examples and guidance.

Once you have a custom recipe, install and run it with:

```bash
mod config recipes yaml install MyPrethink.yml
mod run prethink-demo --recipe com.acme.MyCustomPrethink
```

## Keeping context up to date

Prethink context should be regenerated as your codebase evolves. You should consider:

* Running Prethink as part of your CI pipeline
* Scheduling periodic regeneration (e.g., weekly)
* Regenerating the context after every major refactor or dependency update
