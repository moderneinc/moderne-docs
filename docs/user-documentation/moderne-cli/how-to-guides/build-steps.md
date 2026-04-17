---
sidebar_label: Configuring build steps
description: Explains what build steps are and the various ways you can configure them.
---

# Configuring build steps

## Out-of-the-box behavior without explicit configuration

The Moderne CLI detects build tools, produces a list of build “steps”, and executes each of those steps to produce LSTs. Any file parsed by a previous build step is skipped by its successors.

In the default configuration, the CLI first looks for Gradle build files, then Bazel, and then Maven. These external build tools are followed by a resource parsing step that scoops up any files that weren't parsed by the external build tool steps, because not every file in a repository is part of a source set under management by a build tool. For example, the top level `README.md` in a repository is generally parsed by the resource parsing step because it isn't located in a place that it would be part of a source set defined by an external build tool.

## Build step types

The CLI supports the following build step types:

* **External build tool steps**: `maven`, `gradle`, and `bazel`. These shell out to the respective build tool to compile and parse source code with full type attribution.
* **Language-specific steps**: `python`, `javascript`, `dotnet`, and `mainframe`. These use dedicated parsers to handle their respective language ecosystems.
* **Resource step**: `resource`. A catch-all step that parses files not handled by other steps (YAML, XML, JSON, Terraform, properties, etc.).

In the default configuration, only the external build tool steps and the resource step run automatically. Language-specific steps must be [explicitly configured](#configuring-build-steps-explicitly) in your `moderne.yml` file.

### External build tool steps

Each external build tool step scans the repository for the root build files of its type — that is, the build files that represent independent projects rather than submodules — and invokes the build tool on each one.

For most projects, an external build tool step will result in one execution of the external build tool. For example, even a multi-module Gradle project with the following directory structure results in one execution of the Moderne Gradle plugin to parse all the source sets of all projects in the multi-module project:

```bash
payments/
  core/
    src/main/java
      io/moderne/payments/core/
        Payments.java
    build.gradle # a subproject of the root Gradle build
  server/
    src/main/java
      io/moderne/payments/server/
        PaymentsServer.java
    build.gradle # a subproject of the root Gradle build
  build.gradle # the top level gradle file
```

Sometimes monorepo(ish) repositories are structured in such a way that there are multiple top-level Gradle projects in subdirectories of the root repository directory. While they are stored in the same repository in VCS, they effectively possess disconnected build processes in the sense that no one Gradle command could operate on these disparate parts of the codebase. For example in the following structure the payments, rating, and underwriting functions of this policy administration repository are not related. In this case, the Gradle build step would execute three distinct Gradle tasks to parse LSTs using the Moderne Gradle plugin -- one for each business functional unit.

```bash
insurance-policy-administration/
  payments/
    core/
      build.gradle
    server/
      build.gradle
    build.gradle
  rating/
    build.gradle
  underwriting/
    build.gradle
```

### Language-specific steps

Language-specific steps use dedicated parsers via RPC to handle their respective ecosystems. Unlike external build tool steps, these do not run in the default pipeline and must be explicitly configured.

* **`python`** - Parses Python projects. Detects projects via `pyproject.toml`, `setup.py`, or `.py` files. Requires Python 3.9+. See [Python configuration](./python.md) for setup details.
* **`javascript`** - Parses JavaScript and TypeScript projects. Detects projects via `package.json` files. Automatically discovers the appropriate package manager (npm, yarn, pnpm, or bun) and Node.js version. See [JavaScript configuration](./javascript.md) for setup details.
* **`dotnet`** - Parses C# projects. Detects projects via `.sln`, `.slnx`, or `.csproj` files. Requires .NET SDK 10.0+.
* **`mainframe`** - Parses COBOL, JCL, and Control-M code.

### Resource step

The resource build step parses resource files using OpenRewrite parsers in situations where there is no source set with binary dependency list necessary to [type-attribute](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees) the resulting LSTs. These include YAML, XML, Terraform, properties, JSON, some Groovy DSLs, etc.

In the default build steps, the resource build step runs after all external build tool steps, and serves as a vacuum that picks up the rest of the source files in a repository not explicitly managed by those build tools.

## Configuring build steps explicitly

Build steps can be configured explicitly in [Moderne CLI configuration](./layer-config-cli.md). The out-of-the-box default behavior described above can also be explicitly defined in the `.moderne/cli/moderne.yml` file:

```yaml
specs: specs.moderne.ai/v1/cli
build:
  steps:
    - type: gradle
    - type: bazel
    - type: maven
    - type: resource
      inclusion: |-
        **/*
```

The order of the steps is important, as any file parsed by one step will be skipped by a subsequent step. In this way, the steps drive the order of precedence of build tools.

To add language-specific parsing, include the corresponding step types. For example, to parse a repository that contains both a Gradle project and Python code:

```yaml
specs: specs.moderne.ai/v1/cli
build:
  steps:
    - type: gradle
    - type: python
    - type: resource
      inclusion: |-
        **/*
```

The available step types are: `maven`, `gradle`, `bazel`, `python`, `javascript`, `dotnet`, `mainframe`, and `resource`.

:::danger
Be careful if you remove a build step type as that will make it so that build type will never be used. For instance, if you removed the `bazel` build step, Bazel will never be used to build any files -- even if there were Bazel files present. Instead, Bazel files would be parsed with the `resource` parser.
:::

### Add a resource step to cause files/folders to be skipped by external build tools

In some cases, we have found that the CLI's recursive file walking of the repository to discover top level external build tool files will discover build tool files (e.g., `build.gradle`) that we do not desire to parse as a Gradle project.

As an example, one Moderne customer organizes its microservice repositories to have a top level folder called `/deploy` in every repository, which in turn contains a `build.gradle` which they are fine being parsed as plain Groovy but do not wish to be interpreted as a Gradle file at parsing time because it contains references to properties that are only available while in the act of deploying (i.e. the Gradle project fails to configure in its at-rest state in the codebase). The following explicit build step configuration would categorically work for all of this customer's microservice repositories to skip `deploy/build.gradle` as a Gradle project:

```yaml
specs: specs.moderne.ai/v1/cli
build:
  steps:
    - type: resource
      inclusion: |-
        deploy/*
    - type: gradle
    - type: resource
      inclusion: |-
        **/*
```

When configuring resource steps with inclusion patterns, it's important to understand how glob patterns work:

* `dir/subdir/*` - Matches only files directly within `dir/subdir/`, but not in its subdirectories
* `dir/subdir/**` - Matches all files and folders recursively under `dir/subdir/`

For example, if you have a repository structure containing multiple independent Gradle projects under a directory and want them all to be parsed as resource files instead of Gradle projects:

```bash
repo/
  dir/
    subdir/
      project1/
        settings.gradle
        build.gradle
        src/
      project2/
        settings.gradle
        build.gradle
        src/
      project3/
        settings.gradle
        build.gradle
        src/
```

Using `dir/subdir/*` would only match files directly in `subdir/` and would not include the Gradle projects in `project1/`, `project2/`, and `project3/`. To include all files in those subdirectories as resources, use `dir/subdir/**`:

Example configuration:

```yaml
specs: specs.moderne.ai/v1/cli
build:
  steps:
    - type: resource
      inclusion: |-
        dir/subdir/**
    - type: gradle
    - type: resource
      inclusion: |-
        **/*
```

### Continuing the build when a step fails

By default, if a build step throws an exception, the CLI stops the build pipeline for that partition, records the error, and skips any remaining steps. This is the safest behavior because subsequent steps may depend on the output of previous ones, and a partial build can hide upstream problems.

In some situations, you may prefer the pipeline to keep going so that later steps still get a chance to parse the files they handle. For example, if a Gradle project fails to configure due to a missing property, you may still want the `resource` step to parse the repository's YAML, JSON, and properties files so that recipes targeting those file types can run.

To enable this behavior, set `continueOnError: true` on the step. When the step fails, the failure is logged and the CLI continues with the next step in the pipeline. Any files that the failed step would have claimed are left unclaimed and become available to subsequent steps (such as a trailing `resource` step).

`continueOnError` is a per-step option only — there is no global setting that applies it to every step at once. If you want this behavior on multiple steps, you will need to set `continueOnError: true` on each one individually.

:::warning
The value must be a YAML boolean (`true` or `false`), not a string. Quoting the value (for example, `continueOnError: "true"`) is silently treated as `false`, and no error is reported. Always write the value unquoted.
:::

```yaml
specs: specs.moderne.ai/v1/cli
build:
  steps:
    - type: gradle
      continueOnError: true
    - type: maven
    - type: resource
      inclusion: |-
        **/*
```

In this example, a Gradle failure no longer halts the build. The `maven` step still runs, and the trailing `resource` step picks up any files that were not parsed by the earlier steps.

:::info
`continueOnError` only affects whether the pipeline continues after a failure. It does not retry the failed step or recover the LSTs that the step would have produced. The repository will still be missing type-attributed LSTs for any source set the failed step was responsible for.
:::
