---
sidebar_label: Configuring build steps
description: Explains what build steps are and the various ways you can configure them.
---

# Configuring build steps

## Out-of-the-box behavior without explicit configuration

The Moderne CLI detects build tools, produces a list of build “steps”, and executes each of those steps to produce LSTs. Any file parsed by a previous build step is skipped by its successors.

In the default configuration, the CLI first looks for Gradle build files, then Bazel, then Maven, and then sbt. These external build tool steps are followed by the JavaScript and Python language steps, and finally by a resource parsing step.

The resource step scoops up any files that weren't parsed by the preceding steps, because not every file in a repository is part of a source set managed by a build tool. For example, the top level `README.md` in a repository is generally parsed by the resource parsing step because it isn't located where it would be part of a source set defined by an external build tool.

## Build step types

The CLI supports the following build step types:

* **External build tool steps**: `maven`, `gradle`, `bazel`, and `sbt`. These invoke the respective build tool to extract build metadata — the project structure, source sets, and classpaths — and then the CLI parses the source code itself with full type attribution. The build tool is used only for discovery; the CLI does the parsing (see [discovery and parsing](#discovery-and-parsing)).
* **Language-specific steps**: `python`, `javascript`, `dotnet`, `go`, and `mainframe`. These use dedicated parsers to handle their respective language ecosystems.
* **Resource step**: `resource`. A catch-all step that parses files not handled by other steps (YAML, XML, JSON, Terraform, properties, etc.).

In the default configuration, the external build tool steps, the `javascript` and `python` language steps, and the resource step all run automatically. JavaScript and Python were added to the default pipeline in CLI v4.3.0; on earlier versions, they required explicit configuration. The `dotnet`, `go`, and `mainframe` steps must be [explicitly configured](#configuring-build-steps-explicitly) in your `moderne.yml` file.

:::tip
For a JVM build tool the CLI does not natively support, such as a homegrown or internal build system, you can hand-author the prebuild tree yourself and the CLI will parse it with full type attribution. See [authoring a prebuild for a custom JVM build tool](./custom-build-tool-prebuild.md).
:::

### External build tool steps

Each external build tool step scans the repository for the root build files of its type — that is, the build files that represent independent projects rather than submodules — and invokes the build tool on each one.

#### Discovery and parsing

Each external build tool step runs in two phases: **discovery** and **parsing**.

In the **discovery** phase, the CLI invokes the build tool to extract build metadata — the project's modules, source sets, compiler settings, and the classpath each source set compiled against. For Maven, this runs a lightweight metadata goal; for Gradle, a lightweight metadata task. The build tool is never asked to produce LSTs — it only reports the structure of the build — and the CLI records that structure under `.moderne/prebuild/` (see [`mod prebuild`](../cli-reference.md#mod-prebuild)).

In the **parsing** phase, the CLI reads that recorded structure and parses the source code itself, inside its own JVM, into type-attributed LSTs. Every JVM build tool — Maven, Gradle, Bazel, sbt, and [custom build tools](./custom-build-tool-prebuild.md) — shares this same parser, so parsing behaves consistently no matter which build tool discovered the sources.

The CLI no longer injects an OpenRewrite plugin into your Maven or Gradle build to parse LSTs in place. Because the build tool only reports its model, the step is less intrusive, and discovery and parsing can be split across machines — for example, running [`mod prebuild`](../cli-reference.md#mod-prebuild) on CI and `mod build` locally.

For most projects, an external build tool step will result in one invocation of the external build tool. For example, even a multi-module Gradle project with the following directory structure results in a single Gradle invocation that extracts the metadata for all the source sets of all projects in the multi-module project:

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

Sometimes monorepo(ish) repositories are structured in such a way that there are multiple top-level Gradle projects in subdirectories of the root repository directory. While they are stored in the same repository in VCS, they effectively possess disconnected build processes in the sense that no one Gradle command could operate on these disparate parts of the codebase. For example in the following structure the payments, rating, and underwriting functions of this policy administration repository are not related. In this case, the Gradle build step would execute three distinct Gradle invocations to extract metadata -- one for each business functional unit.

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

Language-specific steps use dedicated parsers via RPC to handle their respective ecosystems. The `javascript` and `python` steps run in the default pipeline as of CLI v4.3.0. In that default configuration, a failure in either step does not stop the build. Instead, the affected files fall through to the resource step and are parsed as plain text. The `dotnet`, `go`, and `mainframe` steps must be explicitly configured.

* **`python`** - Parses Python projects. Detects projects via `pyproject.toml`, `setup.py`, or `.py` files. Requires Python 3.9+. See [Python configuration](./python.md) for setup details.
* **`javascript`** - Parses JavaScript and TypeScript projects. Detects projects via `package.json` files. Automatically discovers the appropriate package manager (npm, yarn, pnpm, or bun) and Node.js version. See [JavaScript configuration](./javascript.md) for setup details.
* **`dotnet`** - Parses C# projects. Detects projects via `.sln`, `.slnx`, or `.csproj` files. Requires .NET SDK 10.0+. See [C# configuration](./csharp.md) for setup details.
* **`go`** - Parses Go projects. Detects projects via `go.mod` files. Uses the Go installation on your `$PATH`. See [Go configuration](./go.md) for setup details.
* **`mainframe`** - Parses COBOL, JCL, and Control-M code.

### Resource step

The resource build step parses resource files using OpenRewrite parsers in situations where there is no source set with binary dependency list necessary to [type-attribute](https://docs.openrewrite.org/concepts-and-explanations/lossless-semantic-trees) the resulting LSTs. These include YAML, XML, Terraform, properties, JSON, some Groovy DSLs, etc.

In the default build steps, the resource build step runs after all other steps, and serves as a vacuum that picks up the rest of the source files in a repository not claimed by those steps.

## Configuring build steps explicitly

Build steps can be configured explicitly in [Moderne CLI configuration](./layer-config-cli.md). The out-of-the-box default behavior described above can also be explicitly defined in the `.moderne/cli/moderne.yml` file:

```yaml
specs: specs.moderne.ai/v1/cli
build:
  steps:
    - type: gradle
    - type: bazel
    - type: maven
    - type: sbt
    - type: javascript
      continueOnError: true
    - type: python
      continueOnError: true
    - type: resource
      inclusion: |-
        **/*
```

This configuration is a close equivalent of the defaults, but not an exact one. The default pipeline also includes a generic JVM step for [hand-authored prebuild trees](./custom-build-tool-prebuild.md); that step has no `moderne.yml` step type and runs only in the default configuration.

The order of the steps is important, as any file parsed by one step will be skipped by a subsequent step. In this way, the steps drive the order of precedence of build tools.

To add a language-specific step that is not part of the default pipeline, include its step type. For example, to parse a repository that contains both a Gradle project and Go code:

```yaml
specs: specs.moderne.ai/v1/cli
build:
  steps:
    - type: gradle
    - type: go
    - type: resource
      inclusion: |-
        **/*
```

The available step types are: `maven`, `gradle`, `bazel`, `sbt`, `python`, `javascript`, `dotnet`, `go`, `mainframe`, and `resource`.

:::danger
An explicit `build.steps` list fully replaces the default pipeline rather than extending it, so any step type you leave out will never run. For instance, if your configuration omits the `bazel` step, Bazel files are parsed as plain text by the `resource` step, even when Bazel files are present.

When you add a step, start from the default list above and add to it rather than listing only the steps you want. An explicit configuration written for an older CLI can also disable steps that newer versions run by default, such as `javascript` and `python`, so revisit your explicit configurations when you upgrade.
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
