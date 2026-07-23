---
sidebar_label: Go configuration
description: How to set up and use Go LSTs with the Moderne CLI.
keywords: [go, golang, go lsts, go refactoring, go recipes, go migration]
---

# How to set up and use Go LSTs with the Moderne CLI

Moderne supports Go LSTs, enabling _semantically-aware_ refactoring of Go code. With Go LSTs, recipes can resolve types, understand import graphs, and make precise automated changes across your Go repositories.

In this guide, we'll walk you through how to configure the Moderne CLI to take advantage of Go support.

## Prerequisites

This guide assumes that:

* You have [installed and configured the Moderne CLI](../getting-started/cli-intro.md) (version `4.3.7` or higher)
* You are familiar with running Moderne CLI commands (if not, work through our [CLI workshop](../getting-started/moderne-cli-workshop.md))
* You have [Go installed](https://go.dev/doc/install) on your machine

## Step 1: Update your `moderne.yml` file

In order to enable Go support, you will need to update the [build steps](./build-steps.md) in your `moderne.yml` file to include Go. This file is located at `~/.moderne/cli/moderne.yml` and is created when you first set up the CLI.

If your `moderne.yml` file already includes a `build` section, you can just add the `- type: go` line to the end of your build steps. If it doesn't, you will need to add the entire section as seen in the example below:

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
    - type: go
    - type: resource
      inclusion: |-
        **/*
// highlight-end
```

## Step 2: (Optionally) Configure your Go installation

By default, the CLI automatically detects the Go installation on your `$PATH`. The remaining configuration in this step is only needed if Go is installed in a non-standard location or if you want to constrain the memory used by the Go engine.

### Discovering installations

You can see all detected and configured Go installations, in the order in which they will be selected, by running:

```bash
mod config go installation list
```

### Adding installation locations

If Go is installed in a non-standard location, you can register it. Each path should point to either the Go installation directory or the `go` executable itself:

```bash
mod config go installation edit /usr/local/go
```

You can register multiple installations at once:

```bash
mod config go installation edit /usr/local/go /opt/go-1.24
```

To remove manually configured installation paths:

```bash
mod config go installation delete
```

This only removes user-configured paths. Automatically discovered installations remain available.

### Setting the memory limit

The Go engine used to build LSTs and run recipes honors the [`GOMEMLIMIT`](https://pkg.go.dev/runtime#hdr-Environment_Variables) soft memory limit, which defaults to `4GiB`. To raise or lower it, run:

```bash
mod config build go gomemlimit edit 8GiB
```

The value accepts an integer with an optional `B`, `KiB`, `MiB`, `GiB`, or `TiB` suffix (for example, `512MiB`), or `off` to disable the limit.

To see the currently configured limit:

```bash
mod config build go gomemlimit show
```

To revert to the default:

```bash
mod config build go gomemlimit delete
```

## Step 3: (Optionally) Clone a custom list of repositories

If you don't have the repositories you want to work with cloned locally already, you can clone a group of them by defining a `repos.csv` file that lists them out such as in the following example:

```csv title="repos.csv"
cloneUrl,branch,origin,path
git@github.com:gorilla/mux.git,main,github.com,gorilla/mux
git@github.com:spf13/cobra.git,main,github.com,spf13/cobra
git@github.com:sirupsen/logrus.git,master,github.com,sirupsen/logrus
```

:::tip
Check out our documentation on [creating a repos.csv file](../references/repos-csv.md) for more detailed information about what's expected in this file.
:::

After creating the CSV, clone the repositories by running the following command:

```bash
mod git sync csv . repos.csv --with-sources
```

## Step 4: Build your Go repositories

The next thing you'll need to do is build LSTs for each of your repositories. To build the LSTs, run:

```bash
mod build /path/to/your/repos
```

Presuming everything has been set up correctly, you should see output similar to:

```bash
▶ gorilla/mux@main
    Build output will be written to build.log
    # highlight-start
    > Step 1 - build with Go
        Selected Go 1.24.0
        Processing Go module: .
        Started project parsing: /Users/someuser/repos/gorilla/mux
        Discovered 27 files to parse
    ✓ Built mux-20260213120000000-ast.jar
    # highlight-end
    Cleaned 1 older builds
```

## Step 5: Install recipes

In order to run recipes, you'll need to make sure the recipes are installed on your local machine. You can install a Go recipe module by specifying its module path with an optional version:

```bash
mod config recipes go install github.com/moderneinc/recipes-go
```

:::tip
You can find the specific installation command for any recipe on its page in the [recipe catalog](../../recipes/recipe-catalog).
:::

## Step 6: Run recipes

With the LSTs built and recipes installed, you can now run recipes against your Go repositories. You can either specify the full recipe path for running such as in:

```bash
mod run . --recipe=org.openrewrite.golang.RemoveUnusedImports
```

Or, you can search for a specific recipe and set it as the active recipe:

```bash
mod config recipes search RemoveUnusedImports
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

Moderne CLI 4.4.1

⏺ Reading organization

Found 1 organization containing 1 repository (1s)
Found recipe run 20260213120000-xYzAb

⏺ Building CSV output for each organization

▶ Go Repos
    ✓ Data table produced
Done (1s)

⏺ Converting to Excel for each organization

▶ Go Repos
    ✓ Data table produced
Done (2s)

Data tables for each organization with rows are linked above
```
