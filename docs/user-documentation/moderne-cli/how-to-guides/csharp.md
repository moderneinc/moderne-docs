---
sidebar_label: C# configuration
description: How to set up and use C# LSTs with the Moderne CLI.
keywords: [csharp, c#, dotnet, .net, csharp lsts, csharp refactoring, csharp recipes, dotnet migration]
---

# How to set up and use C# LSTs with the Moderne CLI

Moderne supports C# LSTs, enabling _semantically-aware_ refactoring of C# code. With C# LSTs, recipes can resolve types, understand project references, and make precise automated changes across your .NET repositories.

In this guide, we'll walk you through how to configure the Moderne CLI to take advantage of C# support.

As of CLI v4.5.0, the CLI parses C# out of the box, so most users don't need any `moderne.yml` changes to get started. If you're on an older CLI version or you use an explicit `build.steps` configuration, you'll need to [add the C# build step manually](#adding-the-c-build-step-manually).

:::tip
C# support is evolving quickly. Keep your Moderne CLI updated to the latest version and rebuild your LSTs after upgrading to stay compatible with the latest recipe packages.
:::

## Prerequisites

This guide assumes that:

* You have [installed and configured the Moderne CLI](../getting-started/cli-intro.md) (version `4.1.9` or higher)
* You are familiar with running Moderne CLI commands (if not, work through our [CLI workshop](../getting-started/moderne-cli-workshop.md))
* You have [.NET SDK](https://dotnet.microsoft.com/download) 10.0 or higher installed on your machine
* You have the [NuGet CLI](https://learn.microsoft.com/en-us/nuget/install-nuget-client-tools#nugetexe-cli) (`nuget.exe`) installed
* (macOS and Linux only) You have [Mono](https://www.mono-project.com/download/stable/) installed
  * Installing Mono can cause `mod` to launch Mono's tool instead of the Moderne CLI. See [Troubleshooting](#mod-runs-monos-tool-instead-of-the-moderne-cli) if this happens.

:::info
The C# recipe runtime (`rewrite-csharp`) is packaged as a `net10.0` application, so the .NET 10 runtime is required. Earlier SDK versions (8.0, 9.0) will not work.
:::

:::warning[The .NET SDK, NuGet CLI, and Mono must be on your `PATH`]
The Moderne CLI invokes the .NET SDK, the NuGet CLI, and (on non-Windows machines) Mono as separate executables, so all of them must be discoverable on your `PATH`.

The NuGet CLI is required to restore packages for **.NET Framework** projects - `dotnet restore` alone cannot restore these. Because `nuget.exe` is a Windows-only utility, **Mono** is required to run it on macOS and Linux. Mono is not required on Windows.
:::

## Step 1: (Optionally) Configure your .NET installation

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

## Step 2: (Optionally) Clone a custom list of repositories

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

## Step 3: Build your C# repositories

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

## Step 4: Install recipes

In order to run recipes, you'll need to make sure the recipe packages are installed on your local machine.

The OpenRewrite C# recipes are published to NuGet across several packages, including:

* `OpenRewrite.Recipes.CSharp.Migration.Dotnet` — migrate C# projects to newer .NET versions
* `OpenRewrite.Recipes.CSharp.CodeQuality` — C# code quality improvements
* `OpenRewrite.Recipes.CSharp.Core` — core `.csproj` and XML transformations

Install a package from NuGet with `mod config recipes nuget install`. For example, to install the .NET migration recipes:

```bash
mod config recipes nuget install OpenRewrite.Recipes.CSharp.Migration.Dotnet
```

:::tip
You can find the specific installation command for any recipe on its page in the [recipe catalog](../../recipes/recipe-catalog).
:::

## Step 5: Run recipes

With the LSTs built and recipes installed, you can now run recipes against your C# repositories. You can either specify the full recipe path for running such as in:

```bash
mod run . --recipe=OpenRewrite.Recipes.CSharp.Migration.Dotnet.Net10.UpgradeToDotNet10
```

Or, you can search for a specific recipe and set it as the active recipe:

```bash
mod config recipes search UpgradeToDotNet10
```

Then you can run the active recipe by:

```bash
mod run . --active-recipe
```

## Step 6: View data tables

Many recipes will also produce useful data tables that you can access via the `mod study` command such as in:

```bash
# highlight-start
mod study . --last-recipe-run --data-table SourcesFileResults
# highlight-end

Moderne CLI 4.9.1

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

## Adding the C# build step manually

You only need this step if you're on a CLI version older than v4.5.0, or if you maintain an explicit `build.steps` list in a `moderne.yml` file. An explicit list replaces the default pipeline, so it must include `- type: dotnet` for C# to be parsed. On CLI v4.5.0 and later with the default configuration, C# support is already enabled and you can skip this.

Update the [build steps](./build-steps.md) in the `moderne.yml` file that defines them. This is usually the global `~/.moderne/cli/moderne.yml` file, which is created when you first set up the CLI, but a repository can also define its own steps in `.moderne/moderne.yml` (see [choosing the configuration file](./build-steps.md#choosing-the-configuration-file)).

If your `moderne.yml` file already includes a `build` section, add a `- type: dotnet` step before the trailing `resource` step. If it doesn't, add the entire section as shown below:

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

If you maintain an explicit configuration, start from the [full default pipeline](./build-steps.md#configuring-build-steps-explicitly) so you don't drop steps the CLI would otherwise run, such as `sbt`, `javascript`, and `python`.

## Troubleshooting

### `mod` runs Mono's tool instead of the Moderne CLI (`mod` returns: `Usage: mod.exe Url`) {/* #mod-runs-monos-tool-instead-of-the-moderne-cli */}

When you install Mono on a Mac, you will often find that the `mod` command no longer does what you expect (you'll get weird HTML responses depending on what you enter). This is because Mono installs its own `mod` executable and adds its directory to your `PATH` (via `/etc/paths.d/mono-commands`). When it does that, the Mono `mod` typically takes higher precedence than the Moderne `mod`.

To fix this, you need to adjust the Moderne `mod` to be prepended to your `PATH` in your shell's startup file (`~/.zshrc` or `~/.bashrc` or `~/.bash_profile`):

```bash
export PATH="$HOME/.moderne/cli/bin:$PATH"
```

Once you've done that, open a new terminal and everything should work as expected.
