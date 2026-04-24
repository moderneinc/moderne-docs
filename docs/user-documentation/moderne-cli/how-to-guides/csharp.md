---
sidebar_label: C# configuration
description: How to set up and use C# LSTs with the Moderne CLI.
keywords: [csharp, c#, dotnet, .net, csharp lsts, csharp refactoring, csharp recipes, dotnet migration]
---

# How to set up and use C# LSTs with the Moderne CLI

Moderne supports C# LSTs, enabling _semantically-aware_ refactoring of C# code. With C# LSTs, recipes can resolve types, understand project references, and make precise automated changes across your .NET repositories.

In this guide, we'll walk you through how to configure the Moderne CLI to take advantage of C# support.

## Prerequisites

This guide assumes that:

* You have [installed and configured the Moderne CLI](../getting-started/cli-intro.md) (version `4.1.9` or higher)
* You are familiar with running Moderne CLI commands (if not, work through our [CLI workshop](../getting-started/moderne-cli-workshop.md))
* You have [.NET SDK](https://dotnet.microsoft.com/download) 10.0 or higher installed on your machine

:::info
The C# recipe runtime (`rewrite-csharp`) is packaged as a `net10.0` application, so the .NET 10 runtime is required. Earlier SDK versions (8.0, 9.0) will not work.
:::

## Step 1: Update your `moderne.yml` file

In order to enable C# support, you will need to update the [build steps](./build-steps.md) in your `moderne.yml` file to include .NET. This file is located at `~/.moderne/cli/moderne.yml` and is created when you first set up the CLI.

If your `moderne.yml` file already includes a `build` section, you can just add the `- type: dotnet` line to the end of your build steps. If it doesn't, you will need to add the entire section as seen in the example below:

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
    - type: dotnet
    - type: resource
      inclusion: |-
        **/*
// highlight-end
```

## Step 2: (Optionally) Configure your .NET installation

By default, the CLI automatically detects .NET SDK installations in standard locations on your machine.

### Discovering installations

You can see all detected .NET installations by running:

```bash
mod config dotnet installation list
```

### Adding installation locations

If .NET is installed in a non-standard location (for example, at `~/.dotnet` via the official [`dotnet-install` script](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-install-script)), you can register it:

```bash
mod config dotnet installation edit /path/to/dotnet-root
```

Each path should point to a .NET installation root directory (i.e., a directory containing the `dotnet` executable).

To remove manually configured installation paths:

```bash
mod config dotnet installation delete
```

### Setting DOTNET_ROOT for non-standard installs

Even with an installation registered, the C# recipe subprocess relies on the `DOTNET_ROOT` environment variable and `PATH` to locate the runtime. If your .NET SDK is not in a system-wide path, you will need to export both before running `mod` commands:

```bash
export PATH="$HOME/.dotnet:$PATH"
export DOTNET_ROOT="$HOME/.dotnet"
```

:::tip
Without these environment variables, `mod config recipes nuget install` and `mod run` can fail with `You must install .NET to run this application` — even when `mod config dotnet installation list` shows a valid path.
:::

### Adjusting the build timeout

.NET project parsing can take longer than other ecosystems on large solutions. To override the default build timeout:

```bash
mod config build dotnet timeout edit <DURATION>
```

Use an ISO-8601 duration (for example, `PT30M` for 30 minutes). To see the currently configured timeout:

```bash
mod config build dotnet timeout show
```

To revert to the default:

```bash
mod config build dotnet timeout delete
```

## Step 3: (Optionally) Clone a custom list of repositories

If you don't have the repositories you want to work with cloned locally already, you can clone a group of them by defining a `repos.csv` file that lists them out such as in the following example:

```csv title="repos.csv"
cloneUrl,branch,origin,path
git@github.com:dotnetcore/DotnetSpider.git,master,github.com,dotnetcore/DotnetSpider
git@github.com:GitTools/GitVersion.git,main,github.com,GitTools/GitVersion
git@github.com:MessagePack-CSharp/MessagePack-CSharp.git,master,github.com,MessagePack-CSharp/MessagePack-CSharp
git@github.com:Azure/DotNetty.git,dev,github.com,Azure/DotNetty
git@github.com:chocolatey/choco.git,develop,github.com,chocolatey/choco
```

:::tip
Check out our documentation on [creating a repos.csv file](../references/repos-csv.md) for more detailed information about what's expected in this file.
:::

After creating the CSV, clone the repositories by running the following command:

```bash
mod git sync csv . repos.csv --with-sources
```

## Step 4: Build your C# repositories

The next thing you'll need to do is build LSTs for each of your repositories. To build the LSTs, run:

```bash
mod build /path/to/your/repos
```

Presuming everything has been set up correctly, you should see output similar to:

```bash
▶ dotnetcore/DotnetSpider@master
    Build output will be written to build.log
    # highlight-start
    > Step 1 - build with .NET
        Selected .NET 10.0.7
        Processing .NET project: .
    Running dotnet restore
        Parsing DotnetSpider.sln
        Starting C# solution parsing: /Users/someuser/repos/dotnetcore/DotnetSpider/DotnetSpider.sln
        Discovered 263 files to parse
    ✓ Built DotnetSpider-20260424080833161-ast.jar
    # highlight-end
    Cleaned 2 older builds
```

## Step 5: Install recipes

In order to run recipes, you'll need to make sure the recipes are installed on your local machine.

You can install a specific C# recipe package from NuGet by running a command like:

```bash
mod config recipes nuget install OpenRewrite.MigrateDotNet
```

:::tip
You can find the specific installation command for any recipe on its page in the [recipe catalog](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/).
:::

## Step 6: Run recipes

With the LSTs built and recipes installed, you can now run recipes against your C# repositories. You can either specify the full recipe path for running such as in:

```bash
mod run . --recipe=OpenRewrite.Recipes.Net10.UpgradeToDotNet10
```

Or, you can search for a specific recipe and set it as the active recipe:

```bash
mod config recipes search UpgradeToDotNet10
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

Moderne CLI 4.1.9

⏺ Reading organization

Found 1 organization containing 1 repository (1s)
Found recipe run 20260424080921-OKpr8

⏺ Building CSV output for each organization

▶ C# Demos
    ✓ Data table produced
Done (1s)

⏺ Converting to Excel for each organization

▶ C# Demos
    ✓ Added 4 rows
    ✓ Data table produced
Done (1s)

Data tables for each organization with rows are linked above
```
