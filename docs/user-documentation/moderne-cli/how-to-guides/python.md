---
sidebar_label: Python configuration
description: How to set up and use Python LSTs with the Moderne CLI.
keywords: [python, python lsts, python refactoring, python recipes, python migration]
---

# How to set up and use Python LSTs with the Moderne CLI

Moderne supports Python LSTs, enabling _semantically-aware_ refactoring of Python code. With Python LSTs, recipes can resolve types, understand import graphs, and make precise automated changes across your Python repositories.

In this guide, we'll walk you through how to configure the Moderne CLI to take advantage of Python support.

## Prerequisites

This guide assumes that:

* You have [installed and configured the Moderne CLI](../getting-started/cli-intro.md) (version `3.57.0` or higher)
* You are familiar with running Moderne CLI commands (if not, work through our [CLI workshop](../getting-started/moderne-cli-workshop.md))
* You have Python installed on your machine

## Step 1: Update your `moderne.yml` file

In order to enable Python support, you will need to update the [build steps](./build-steps.md) in your `moderne.yml` file to include Python. This file is located at `~/.moderne/cli/moderne.yml` and is created when you first set up the CLI.

If your `moderne.yml` file already includes a `build` section, you can just add the `- type: python` line to the end of your build steps. If it doesn't, you will need to add the entire section as seen in the example below:

```yml title="moderne.yml"
# Other keys and values...
license:
  key: some-license
tenant:
  host: https://app.moderne.io
  apiHost: https://api.app.moderne.io
  skipSsl: false
  authorization: Bearer mat-some-token
// highlight-start
build:
  steps:
    - type: maven
    - type: gradle
    - type: bazel
    - type: python
    - type: resource
      inclusion: |-
        **/*
// highlight-end
```

## Step 2: (Optionally) Configure your Python installation

The CLI will automatically detect Python installations in standard locations. However, if Python is installed in a non-standard location, you can configure it explicitly:

```bash
mod config python installation edit /path/to/python
```

To verify which Python installations the CLI has detected:

```bash
mod config python installation list
```

## Step 3: (Optionally) Clone a custom list of repositories

If you don't have the repositories you want to work with cloned locally already, you can clone a group of them by defining a `repos.csv` file that lists them out such as in the following example:

```csv title="repos.csv"
cloneUrl,branch,origin,path
git@github.com:psf/requests.git,main,github.com,psf/requests
git@github.com:pallets/flask.git,main,github.com,pallets/flask
git@github.com:django/django.git,main,github.com,django/django
```

:::tip
Check out our documentation on [creating a repos.csv file](../references/repos-csv.md) for more detailed information about what's expected in this file.
:::

After creating the CSV, clone the repositories by running the following command:

```bash
mod git sync csv . repos.csv --with-sources
```

## Step 4: Build your Python repositories

The next thing you'll need to do is build LSTs for each of your repositories. To build the LSTs, run:

```bash
mod build /path/to/your/repos
```

Presuming everything has been set up correctly, you should see output similar to:

```bash
▶ psf/requests@main
    Build output will be written to build.log
    # highlight-start
    > Step 1 - build with Python
        Selected Python 3.12.0
        Processing Python project: .
        Started project parsing: /Users/someuser/repos/psf/requests
        Discovered 42 files to parse
    ✓ Built requests-20260213120000000-ast.jar
    # highlight-end
    Cleaned 1 older builds
```

## Step 5: Install recipes

In order to run recipes, you'll need to make sure the recipes are installed on your local machine. For example, you can install recipes from a JAR or a pip package:

```bash
mod config recipes jar install org.openrewrite:rewrite-python:LATEST
```

```bash
mod config recipes pip install openrewrite-migrate-python
```

:::tip
You can find the specific installation command for any recipe on its page in the [recipe catalog](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/).
:::

## Step 6: Run recipes

With the LSTs built and recipes installed, you can now run recipes against your Python repositories. You can either specify the full recipe path for running such as in:

```bash
mod run . --recipe=org.openrewrite.python.migrate.UpgradeToPython313
```

Or, you can search for a specific recipe and set it as the active recipe:

```bash
mod config recipes search UpgradeToPython313
```

Then you can run the active recipe by:

```bash
mod run . --active-recipe
```

## Step 7: View data tables

Many recipes will also produce useful data tables that you can access via the `mod study` command such as in:

```bash
# highlight-start
mod study . --last-recipe-run --data-table SourcesFileResults
# highlight-end

Moderne CLI 4.0.2

⏺ Reading organization

Found 1 organization containing 1 repository (1s)
Found recipe run 20260213120000-xYzAb

⏺ Building CSV output for each organization

▶ Python Repos
    ✓ Data table produced
Done (1s)

⏺ Converting to Excel for each organization

▶ Python Repos
    ✓ Data table produced
Done (2s)

Data tables for each organization with rows are linked above
```
