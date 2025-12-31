---
sidebar_label: "Module 1: CLI setup and running recipes"
description: How to set up the Moderne CLI and run recipes.
---

<!--- TODO: Add example correct outputs in a collapsible summary at each relevent step so users can check their work against the real output. -->

# Module 1: CLI setup and running recipes

In this module, you'll learn the key concepts behind OpenRewrite and get hands-on experience setting up and using the Moderne CLI to run recipes across repositories.

## Key concepts

Before diving into running recipes, it's important to understand some fundamental concepts. The summaries below provide a high-level overview of these ideas; review the [linked documentation](https://docs.openrewrite.org/concepts-explanations) for more details.

### Lossless Semantic Tree (LST)

The [Lossless Semantic Tree (LST)](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees) is a tree representation of your source code that preserves all formatting, comments, and whitespace while also capturing type information. This is what enables OpenRewrite to make precise changes without disrupting the style of your code.

Key characteristics of the LST:

* **Lossless**: Every part of the original source is preserved, including whitespace and comments, so it can be reproduced exactly.
* **Format-preserving**: Changes made to the LST will result in code that matches its local formatting style.
* **Type-aware**: The tree is type-attributed, meaning it understands the specific types of each variable and method.

### Visitors

[Visitors](https://docs.openrewrite.org/concepts-and-explanations/visitors) are the mechanism by which recipes traverse and modify the LST. They implement the visitor pattern to walk through tree elements and make targeted changes.

### Recipes

[Recipes](https://docs.openrewrite.org/concepts-and-explanations/recipes) are the unit of work in OpenRewrite. A recipe can:

* Make changes to source code (by modifying the LST then printing it out as code)
* Search for specific patterns and code structures (methods, types, annotations, etc.) then mark results
* Produce data tables with extracted information
* Be composed of other recipes

### Deterministic code changes

OpenRewrite recipes produce **deterministic** code changes. This means that running the same recipe on the same codebase will always produce the same result. This predictability is essential for automated code refactoring at scale.

### Running recipes: build plugins vs. Moderne tools

There are several ways to run OpenRewrite recipes:

* **Maven and Gradle plugins**: Run recipes directly in your build by configuring the OpenRewrite plugin. Used for running recipes on a single project at a time.
* **Moderne CLI**: Run recipes across multiple repositories locally. Serializes the LST to disk for faster subsequent runs.
* **Moderne Platform (SaaS)**: Run recipes at scale through a web UI with some additional capabilities like a recipe builder and data visualizations.

For this workshop, you'll start by using the **Moderne CLI**, and then try the **Moderne Platform** as a comparison.

## Exercise 1-1: CLI setup

In this exercise, you'll download, install, and configure the Moderne CLI, then run your first recipe.

### Goals for this exercise

* Download and install the Moderne CLI
* Connect the CLI to the Moderne Platform
* Sync recipes and repositories
* Run a recipe across multiple repositories

### Steps

#### Step 1: Download and install the CLI

1. Go to [app.moderne.io](https://app.moderne.io/) and sign in.
2. Click on `?` in the top right-hand corner and select the Staging version of the CLI to download.

:::info
Use the Staging version for local development purposes. The Stable release is only recommended for use when building LSTs at scale across whole organizations (known as "mass ingest").
:::

3. Either click the download button for your appropriate OS, or select one of the other installation methods like Homebrew (macOS), Chocolatey (Windows), or curl (Linux), then run the provided commands. (If you chose to install the CLI without a package manager, save it somewhere that your terminal can access by updating your `PATH`.)

![](../../user-documentation/moderne-cli/getting-started/assets/cli-download.gif)

4. Verify the installation by opening a terminal and typing:

```bash
mod help
```

You should see a list of available commands.

#### Step 2: Connect the CLI to Moderne

Moderne provides a hosted platform at [app.moderne.io](https://app.moderne.io/), a public instance backed by a large catalog of open-source repositories. Connecting your CLI to this endpoint lets you authenticate and easily run recipes against these repos.

1. Connect the CLI to the Moderne Platform:

```bash
mod config moderne edit https://app.moderne.io
```

2. Authenticate with Moderne:

```bash
mod config moderne login
```

This command will open a web page where you'll grant the CLI access. After granting access, the CLI will automatically configure and store your token locally. You should see a success message indicating your token is valid for 365 days.

#### Step 3: Install the recipe packs you'll use

You could download the full recipe catalog from Moderne using the `mod config recipes moderne sync` command, but this will take several minutes to run. For this workshop, you can install only the recipe JARs needed for the upcoming exercises with the following command:

```bash
mod config recipes jar install \
  org.openrewrite:rewrite-java \
  org.openrewrite.recipe:rewrite-migrate-java \
  org.openrewrite.recipe:rewrite-java-dependencies \
  org.openrewrite.recipe:rewrite-static-analysis
```

Each JAR includes a collection of related recipes, so these four artifacts cover everything we need for now.

:::tip
If you only need a _single_ recipe, use `mod config recipes moderne install <search term>` (for example, `mod config recipes moderne install DependencyVulnerabilityCheck`). The CLI will list the closest matches for you to choose from.
:::

#### Step 4: Set up a workspace and sync repositories

1. First, create a directory to use as your workspace for this workshop:

```bash
mkdir ~/moderne-workshop
cd ~/moderne-workshop
```

2. An **organization** in Moderne is a logical grouping of repositories. Orgs may contain nested sub-organizations which get mirrored as subdirectories when you sync with the CLI. For this exercise, you will use the flat `Default` org that just contains public repos. To sync this `Default` organization to the current working directory, run the following command:

```bash
mod git sync moderne . "Default" --with-sources
```

:::info
If you don't include the `--with-sources` flag, the CLI only downloads any pre-built LSTs from the platform for a given organization, not the source code itself. With the LSTs, you will still be able to run recipes, but once you're ready to apply changes to the code, you'll need to sync the source as well. You'll also need the source if there are no pre-existing LSTs to download. In this case, you will need to explicitly build LSTs with the CLI. We will see how to do this in a later module.
:::

3. To confirm the repositories were synced, list the contents of your workspace directory:

```bash
ls
```

You'll see one or more top-level directories. Each directory corresponds to a Git hosting organization (for example, `spring-projects`), and inside each org directory you'll find one or more repositories. If you have the `tree` utility installed, you can use it to get a more complete view of the directory structure:

```bash
tree -L 2
```

#### Step 5: Run a recipe

Now you're ready to run your first recipe! Let's run a recipe that fixes common static analysis issues with the following command:

```bash
mod run . --recipe CommonStaticAnalysis
```

The CLI will run the recipe against the downloaded LSTs for all repositories in your workspace.

:::tip
If you don't know the exact name of recipe you want to run, you can use `mod config recipes search <query>` to search for available recipes.
:::

#### Step 6: View and apply changes

After the recipe completes, the CLI output will include a `Fix results` link. Open it to review the diffs and see exactly what would change in each repository. (From a terminal, you can use command-click on Mac or ctrl-click on Windows to open the files.)

Right now, the CLI has only generated a patch for each repository, so no code has been modified yet. You'll still need to apply the patch to make changes to the code. While you could choose to do that directly on whatever branch is currently checked out, it's generally best practice to create a new branch first so you can review, test, and submit a PR cleanly.

1. Create a branch for the last recipe run:

```bash
mod git checkout . -b refactor/common-static-analysis --last-recipe-run
```

2. Apply the changes to the checked-out repositories:

```bash
mod git apply . --last-recipe-run
```

3. Now you can navigate to any of the repository folders and run `git status` to confirm that there are local unstaged, uncommitted modifications. Before committing, you would normally make sure the changes didn't break the build and that all tests still pass successfully. In this exercise, we'll assume that is the case and move on to adding and commiting the changes in each repository:

```bash
mod git add . --last-recipe-run
mod git commit . -m "Test common static analysis changes" --last-recipe-run
```

#### Wrap-up: Pushing changes at scale

If this code were in repositories that you own or have the right access to, you could now push the changes and submit PRs if you wanted to. However, since these are public open-source repositories that we are working with, we don't want to go any further than this. The following section is for reference only.

:::warning
**Do not run any of the following commands on these example repositories. They are for reference only.**
:::

```bash
# Don't run this command for this workshop (for reference only)
mod git push . -u origin refactor/common-static-analysis
```

:::tip
You can also run arbitrary commands across every repository in your workspace with `mod exec`. For example, if you have the GitHub CLI installed and authenticated, you could open pull requests in bulk:

```bash
# Don't run this command for this workshop (for reference only)
mod exec . -- gh pr create --title "Apply CommonStaticAnalysis" --body "Automated refactor via Moderne CLI"
```
:::

## Exercise 1-2: Run recipes using the Moderne Platform

In addition to the CLI, you can run recipes using the Moderne Platform.

### Goals for this exercise

* Navigate the Moderne Platform
* Run a recipe using the web UI
* Compare the experience with the CLI

### Steps

#### Step 1: Find the recipe in the Marketplace

1. Navigate to [app.moderne.io](https://app.moderne.io/) and sign in. Use "Sign in with GitHub" if you have an account there since most of the open-source repositories in the platform are from GitHub.
2. Make sure the `Default` organization is selected in the organization dropdown. If this is your first time logging in, this should already be selected.

<figure>
![](./assets/default-org.png)
<figcaption>_The organization selector in the upper left of the screen._</figcaption>
</figure>

3. Click on `Marketplace` in the left navigation if you're not already there.
4. Search for `CommonStaticAnalysis` and click on the recipe.

<figure>
![](./assets/marketplace-search-csa.png)
<figcaption>_Search the marketplace to find the recipe you're looking for._</figcaption>
</figure>


#### Step 2: Run a dry run and review results

1. Click on the recipe to see the available actions.

![](./assets/csa-dry-run.png)

2. Click `Dry Run` to run the recipe against the Default organization's repositories.
3. Wait for the recipe to complete. As it runs, notice the summary of results on the left side and the diff viewer on the right.
4. Explore the results and the code changes in the diff viewer.

#### Step 3: Preview the commit/PR workflow (do not submit)

1. Click the `Commit all results` button at the bottom of the summary pane to explore how the Platform would help you apply changes. (You can also use the checkboxes next to each repository and commit only those selected results.)
2. Notice the different strategies provided in the dropdown, including "Create a Pull Request", "Create a Branch", etc.

![](./assets/commit-strategy-dropdown.png)

3. Since these are open-source repositories and we don't want to commit any changes, click `Cancel` to get out of the workflow.

<!-- Screenshot placeholder: Commit / PR flow entry point button -->

:::warning
**Do not create commits or open pull requests against these public example repositories. This step is only to show you what the workflow looks like.**
:::

:::info
Depending on the run, you may also see additional tabs (for example, data tables or visualizations). We'll revisit those capabilities in a future module.
:::

### Takeaways

* The Moderne Platform provides a rich UI for running and exploring recipe results
* The CLI is better suited for local development and automation
* Both the CLI and Platform are well-suited for reviewing changes and (when appropriate) creating commits/PRs at scale

## Learn more

* [Moderne CLI documentation](../../user-documentation/moderne-cli/getting-started/cli-intro.md)
* [Running your first recipe on the Platform](../../user-documentation/moderne-platform/getting-started/running-your-first-recipe.md)
* [Differences between OpenRewrite and Moderne](https://docs.openrewrite.org/#refactoring-at-scale-with-moderne)
