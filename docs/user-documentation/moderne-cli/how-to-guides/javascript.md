---
sidebar_label: JavaScript configuration
description: How to set up and use JavaScript LSTs with the Moderne CLI.
keywords: [javascript, js, typescript, ts, javascript lsts, javascript refactoring, javascript recipes]
---

import ReactPlayer from '@site/src/components/VideoPlayer';

# How to set up and use JavaScript LSTs with the Moderne CLI

Moderne recently announced support for JavaScript and TypeScript LSTs. With this, JavaScript refactoring changes from being _syntax-bound_ to _semantically-aware_ – where recipes can distinguish between lookalike methods, resolve types, and understand dependency graphs.

In this guide, we'll walk you through how to configure the Moderne CLI to take advantage of this new JavaScript functionality.

As of CLI v4.3.0, the CLI parses JavaScript and TypeScript out of the box, so most users don't need any `moderne.yml` changes to get started. If you're on an older CLI version or you use an explicit `build.steps` configuration, you'll need to [add the JavaScript build step manually](#adding-the-javascript-build-step-manually).

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=b-IJNsozsnA' controls={true} />

## Prerequisites

This guide assumes that:

* You have [installed and configured the Moderne CLI](../getting-started/cli-intro.md) (version `3.49.0` or higher)
* You are familiar with running Moderne CLI commands (if not, work through our [CLI workshop](../getting-started/moderne-cli-workshop.md))

## Step 1: (Optionally) Configure your Node.js installation

By default, the CLI uses the Node.js installation found on your `$PATH`.

### Discovering installations

You can see all detected Node.js installations by running:

```bash
mod config node installation list
```

### Adding installation locations

If Node.js is installed in a non-standard location, you can register it:

```bash
mod config node installation edit /path/to/node
```

You can also register multiple installations at once:

```bash
mod config node installation edit /opt/node-18 /opt/node-22
```

To remove manually configured installation paths:

```bash
mod config node installation delete
```

This only removes user-configured paths. Automatically discovered installations remain available.

### Selecting a version

To pin the Node.js version globally:

```bash
mod config node version edit 22
```

You can use a major version (`22`), minor (`22.9`), or exact patch (`22.9.0`) depending on how tight you need the match to be. The version must correspond to one of the installations known to the CLI.

To apply a version only to a specific group of repositories, use the `--local` flag:

```bash
mod config node version edit 18 --local ./legacy-set
```

To revert to auto-detection:

```bash
mod config node version delete
```

To see the currently configured version:

```bash
mod config node version show
```

### Specifying a Node.js version in the CSV

You can also override the Node.js version per repository by specifying a `nodeVersion` column in your `repos.csv`:

```csv
"cloneUrl","branch","origin","path","nodeVersion"
"https://github.com/example/frontend-app","main","github.com","example/frontend-app","18"
"https://github.com/example/legacy-frontend","main","github.com","example/legacy-frontend","16.20.2"
```

During `mod git sync csv`, this value is written to each repository's `.moderne` directory.

### Setting Node.js options

You can set Node.js options via the `nodeOptions` column in your `repos.csv`. These are passed through the `NODE_OPTIONS` environment variable when building LSTs and running recipes. For more details, please check out our [repos.csv reference](../references/repos-csv.md).

## Step 2: (Optionally) Clone a custom list of repositories

If you don't have the repositories you want to work with cloned locally already, you can clone a group of them by defining a `repos.csv` file that lists them out such as in the following example:

```csv title="repos.csv"
cloneUrl,branch,origin,path
git@github.com:form-data/form-data.git,master,github.com,form-data/form-data
git@github.com:antoniopresto/react-native-local-mongodb.git,master,github.com,antoniopresto/react-native-local-mongodb
git@github.com:microsoft/android-app-size-diff.git,main,github.com,microsoft/android-app-size-diff
git@github.com:github0null/eide.git,master,github.com,github0null/eide
git@github.com:simoebenhida/laravel-intellisense.git,master,github.com,simoebenhida/laravel-intellisense
git@github.com:RechInformatica/rech-editor-cobol.git,master,github.com,RechInformatica/rech-editor-cobol
git@github.com:microsoftgraph/msgraph-ifttt-sample.git,master,github.com,microsoftgraph/msgraph-ifttt-sample
git@github.com:Zoro-6191/discOD.git,master,github.com,Zoro-6191/discOD
```

:::tip
Check out our documentation on [creating a repos.csv file](../references/repos-csv.md) for more detailed information about what's expected in this file.
:::

After creating the CSV, clone the repositories by running the following command:

```bash
mod git sync csv . repos.csv --with-sources
```

## Step 3: Build your JavaScript repositories

The next thing you'll need to do is build LSTs for each of your repositories. To build the LSTs, run:

```bash
mod build /path/to/your/repos
```

Presuming everything has been set up correctly, you should see output similar to:

```bash
▶ axios/axios@v1.x
    Build output will be written to build.log
    # highlight-start
    > Step 1 - build with JavaScript
        Selected Node 22.9.0
        Starting parsing of 169 files
    ✓ Built axios-20251010075558262-ast.jar
    # highlight-end
    Cleaned 1 older builds
```

## Step 4: Install recipes

In order to run recipes, you'll need to make sure the recipes are installed on your local machine.

You can install a specific JavaScript recipe module by running a command like:

```bash
mod config recipes npm install @openrewrite/recipes-nodejs
```

## Step 5: Run recipes

With the LSTs built and recipes installed, you can now run recipes against your JavaScript repositories. You can either specify the full recipe path for running such as in:

```bash
mod run . --recipe=org.openrewrite.node.migrate.util.use-native-type-checking-methods
```

Or, you can search for a specific recipe and set it as the active recipe to run:

```bash
➜ mod config recipes search util.isX

Replace deprecated `util.isX()` methods with native JavaScript
The `util` module's type-checking methods have been removed in Node 22.

Options
 -

Set as active recipe [Yn]? Y
```

Then you can run the active recipe by:

```bash
mod run . --active-recipe
```

:::tip
While the JavaScript recipe library is being built out, keep in mind that some Java recipes can be used to run against your JavaScript code. Below are some examples of Java recipes that work well with JavaScript repositories:

```bash
# Find all method calls to React hooks
mod run . --recipe org.openrewrite.java.search.FindMethods -PmethodPattern="React use*(..)"

# Find all React.CSSProperties components
mod run . --recipe org.openrewrite.java.search.FindTypes -PfullyQualifiedTypeName="React.CSSProperties"

# Change a method name to something else
mod run . --recipe org.openrewrite.java.ChangeMethodName -PmethodPattern="* test(..)" -PnewMethodName="customTest"
```
:::

## Step 6: View data tables

Many recipes will also produce useful data tables that you can access via the `mod study` command such as in:

```bash
# highlight-start
➜ mod study . --last-recipe-run --data-table MethodCalls
# highlight-end

Moderne CLI 4.4.1

⏺ Reading organization

Found 1 organization containing 1 repository (1s)
Found recipe run 20251010101104-iWJXs

⏺ Building CSV output for each organization

▶ Popular JavaScript
    ✓ Data table produced
Done (1s)

⏺ Converting to Excel for each organization

▶ Popular JavaScript
    ✓ Added 5427 rows
    ✓ Data table produced
Done (9s)

Data tables for each organization with rows are linked above
```

## Adding the JavaScript build step manually

You only need this step if you're on a CLI version older than v4.3.0, or if you maintain an explicit `build.steps` list in your `moderne.yml` file. An explicit list replaces the default pipeline, so it must include `- type: javascript` for JavaScript and TypeScript to be parsed. On CLI v4.3.0 and later with the default configuration, JavaScript support is already enabled and you can skip this.

Update the [build steps](./build-steps.md) in your `moderne.yml` file to include JavaScript. This file is located at `~/.moderne/cli/moderne.yml` and is created when you first set up the CLI.

If your `moderne.yml` file already includes a `build` section, add a `- type: javascript` step before the trailing `resource` step. If it doesn't, add the entire section as shown below:

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
    - type: javascript
    - type: resource
      inclusion: |-
        **/*
// highlight-end
```

If you maintain an explicit configuration, start from the [full default pipeline](./build-steps.md#configuring-build-steps-explicitly) so you don't drop steps the CLI would otherwise run, such as `sbt` and `python`.
