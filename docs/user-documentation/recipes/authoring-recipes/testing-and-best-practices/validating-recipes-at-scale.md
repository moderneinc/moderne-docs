---
sidebar_label: Validating recipes at scale
description: How to use the Moderne CLI to run a recipe you're developing across many repositories at once so you can validate it against real-world code before rolling it out.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Validating recipes at scale

Validating a recipe at scale means running it across many real repositories at once, so you can see how it behaves on real-world code before you roll it out. With the Moderne CLI, you can build [LSTs](../concepts/lossless-semantic-trees.md) for dozens or hundreds of repositories - and then run your in-development recipe against all of them in a single command. From there, you can see the aggregated results: what it changed, what it left alone, and where it errored.

This guide will walk you through everything you need to know to get started with this validation.

## Why validate at scale

[Unit testing recipes](./recipe-testing.md) proves that a recipe does the right thing on a small, curated scale. While these provide a considerable amount of benefit, real-world code is far messier than any snippet. A recipe that passes its test suite can still miss variations you didn't anticipate, change code you didn't mean to touch, or throw on an unfamiliar construct.

Running a recipe against a large, representative body of actual repositories is how you surface those cases while you're still iterating on the recipe.

## Prerequisites

This guide expects that you have:

* Started developing a recipe. If you haven't written one yet, check out our guides on [how to write recipes](../writing-recipes/).
* The Moderne CLI installed and connected to Moderne. If you don't have that, check out our [getting started with the Moderne CLI](../../../moderne-cli/getting-started/cli-intro.md) guide.
* The CLI configured for the language you're developing in. See the setup guides for [Java](../../../moderne-cli/how-to-guides/java.md), [C#](../../../moderne-cli/how-to-guides/csharp.md), [Python](../../../moderne-cli/how-to-guides/python.md), [JavaScript](../../../moderne-cli/how-to-guides/javascript.md), and [Go](../../../moderne-cli/how-to-guides/go.md).

:::tip
Haven't written your recipe yet? Moderne ships [skills for AI coding agents](../../../agent-tools/skills.md) that help you create, run, and refine recipes, automating much of the loop this guide covers by hand.
:::

## Step 1: Assemble a set of repositories

The easiest way to get a bunch of repositories to test against is to pull down a Moderne organization to your machine:

```bash
mod git sync moderne /path/to/your/workspace --organization "<organization-name>" --with-sources
```

This downloads the repositories, their code, and their LSTs so the CLI can operate on all of them at once. See [Syncing Moderne organizations](../../../moderne-cli/getting-started/cli-intro.md#syncing-moderne-organizations) for how to discover the organizations available to you.

If you'd rather assemble your own set, you can point the CLI to any folder containing one or more checked-out Git repositories. Just make sure you update the commands in the rest of the doc to point to that directory.

## Step 2: Build LSTs

If you synced a Moderne organization in Step 1, its LSTs were downloaded along with it, so you can skip ahead to [Step 3](#step-3-make-your-recipe-available-to-the-cli).

If you, instead, assembled your own set of repositories - navigate into your workspace and build LSTs for every repository in it:

```bash
mod build .
```

:::tip
For testing purposes, keep in mind that a recipe will skip any repository whose LST isn't built. If you are struggling to get one of your repositories to build, you can ignore it and test with other repositories.
:::

## Step 3: Make your recipe available to the CLI

In order for the CLI to run your recipe, you'll need to let it know _where_ the recipe is. The command you'll need to run to let the CLI know this will change depending on the language your recipe is **written in**:

<Tabs groupId="recipeLanguage">
<TabItem value="java" label="Java / YAML">

For Java and YAML recipes, you can take advantage of the *active recipe* feature in the CLI. This feature lets you run a recipe without needing to specify the name or location of it every time.

To set the active recipe for the CLI, run the following command (make sure you specify the path to _your_ recipe):

```bash
mod config recipes active set src/main/java/com/example/MyRecipe.java
```

If your file contains multiple recipes, you can add a `--recipe <recipeName>` flag to use a specific one.

Confirm the active recipe has been set correctly by running:

```bash
mod config recipes active show
```

</TabItem>
<TabItem value="csharp" label="C#">

Pack your recipe project into a NuGet package, then install it into the CLI's recipe marketplace:

```bash
mod config recipes nuget install MyOrg.Recipes@1.0.0
```

The recipe is then available to run by its fully-qualified name. See [Writing a C# refactoring recipe](../writing-recipes/writing-a-csharp-refactoring-recipe.md) for more details.

</TabItem>
<TabItem value="python" label="Python">

Install your recipe project into the CLI's recipe marketplace by pointing at its directory:

```bash
mod config recipes pip install /path/to/your/recipe-project
```

The recipe is then available to run by its fully-qualified name. See [Writing a Python refactoring recipe](../writing-recipes/writing-python-recipes.md) for more details.

</TabItem>
<TabItem value="javascript" label="JavaScript">

Compile your recipe, then point the CLI at the build output (the `dist` directory, not the project root):

```bash
npm run build
mod config recipes npm install /path/to/your-recipe-repo/dist
```

The recipe is then available to run by its fully-qualified name. For more information, check out our guide on [testing JavaScript recipes locally](../set-up/javascript-recipe-development-environment.md#testing-recipes-locally).

</TabItem>
</Tabs>

## Step 4: Run the recipe across every repository

Now that you've pointed the CLI to your recipe, you can run it against all of your repositories via the following commands:

<Tabs groupId="recipeLanguage">
<TabItem value="java" label="Java / YAML">

```bash
mod run . --active-recipe
```

</TabItem>
<TabItem value="csharp" label="C#">

Run the installed recipe by its fully-qualified name:

```bash
mod run . --recipe=<RecipeName>
```

</TabItem>
<TabItem value="python" label="Python">

Run the installed recipe by its fully-qualified name:

```bash
mod run . --recipe=<RecipeName>
```

</TabItem>
<TabItem value="javascript" label="JavaScript">

Run the installed recipe by its fully-qualified name:

```bash
mod run . --recipe=<RecipeName>
```

</TabItem>
</Tabs>

## Step 5: Review the results and iterate

Once the recipe run finishes, the next step is to see how your recipe did across all of the repositories. There are three things worth taking a look at:

First, the **changes**. Command/Ctrl-click the `Fix results` link in the output to open the combined diff, then confirm the recipe touched everything you expected and left everything else alone.

Next, any **errors**. The run output flags any repository where the recipe threw an error. To see what happened across the whole set at once, open the recipe run analyzer:

```bash
mod trace runs analyze . --last-run
```

Finally, the **data tables**. Many recipes emit [data tables](../../../moderne-platform/getting-started/data-tables.md) alongside their changes, and the CLI suggests a `mod study` command after each run to open them:

```bash
mod study . --last-recipe-run --data-table RecipeRunStats
```

`RecipeRunStats` and `SourcesFileResults` are good places to start for a repository-by-repository view of how the recipe behaved.

When the results don't match what you expected, tweak the recipe and run it again. For Java and YAML recipes, rebuild and re-run `mod run . --active-recipe` (you only need to set the active recipe again if the file or its classpath moves). For C#, Python, and JavaScript recipes, rebuild and re-install the package first.

## Debug a recipe against real code

If you run into issues with your recipe, keep in mind that you can set breakpoints that can be hit while the recipe runs against these real repositories. To do this, add a `--debug` flag to the run command:

```bash
mod --debug run . --active-recipe
```

The CLI suspends on startup and waits for a debugger to attach, then stops at your breakpoints as the recipe runs against real code. Any JDWP-capable debugger works (IntelliJ IDEA, VS Code, Eclipse). See [Debugging recipes](../../../moderne-ide-integration/how-to-guides/debugging-recipes.md) for the full setup, including how to [drive it entirely from the CLI without the Moderne IDE plugin](../../../moderne-ide-integration/how-to-guides/debugging-recipes.md#debugging-without-the-moderne-plugin).

:::note
Breakpoint debugging attaches a JVM debugger, so it only applies to Java and YAML recipes. Debug C#, Python, and JavaScript recipes with your language's usual tooling.
:::
