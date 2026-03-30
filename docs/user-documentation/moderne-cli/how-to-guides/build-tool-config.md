---
sidebar_label: Build tool configuration
description: How to configure build tools (e.g., Gradle, Maven, Node) in the Moderne CLI.
---

# Build tool configuration in the Moderne CLI

When you're building LSTs across many repositories, the CLI does its best to detect the right build tools automatically - using Gradle wrappers, Maven installations on your `$PATH`, and so on and so forth.

That being said, you may have projects that don't fit these defaults. For instance, some repositories may lack a Gradle wrapper whereas others may need a specific Node.js version and others may require extra build arguments to compile correctly.

The Moderne CLI lets you configure all of this globally, per repository, or via your `repos.csv` file.

In this guide, we'll walk through the configuration options for each supported build tool.

:::info
If you are curious how the CLI discovers build tools, the order in which they are run, and how to override that order, please check out our [build steps configuration guide](./build-steps.md)
:::

## Gradle

By default, the CLI uses the Gradle wrapper (`gradlew`) included in each repository. If a repository doesn't include a wrapper, the CLI falls back to Gradle installations it discovers on your machine.

### Discovering installations

The CLI automatically discovers Gradle installations from these locations (with the first one representing the one given the highest priority):

* User-configured paths (via `mod config build gradle installation edit`)
* `$PATH`
* `$GRADLE_HOME`
* SDKMAN (`~/.sdkman/candidates/gradle/`)
* Homebrew (`/opt/homebrew/opt/gradle*` or `/usr/local/opt/gradle*`)

You can see all detected installations and their priority by running:

```bash
mod config build gradle installation list
```

<details>

<summary>Here is what the output of that command might look like:</summary>

```bash
> Listing available Gradle installations

> Set globally for all repositories
8.11.1  Homebrew       /opt/homebrew/opt/gradle/libexec
8.1.1   SDKMAN         /Users/dev/.sdkman/candidates/gradle/8.1.1
4.5     User provided  /opt/gradle-4.5

* What to do next
    > Run mod config build gradle installation edit to change this configuration
    > Run mod config build gradle installation delete to delete global configuration
```

</details>

### Adding installation locations

If you have Gradle installations in locations the CLI does not automatically discover, you can register them:

```bash
mod config build gradle installation edit /path/to/gradle-home
```

Each path should point to a Gradle home directory (i.e., a directory containing `bin/gradle`).

You can also register multiple installations at once:

```bash
mod config build gradle installation edit /opt/gradle-4.5 /opt/gradle-8.1.1
```

To remove manually configured installation paths:

```bash
mod config build gradle installation delete
```

This only removes user-configured paths. Automatically discovered installations (from `$PATH`, SDKMAN, Homebrew, etc.) remain available.

### Selecting a version

When a repository does not include a Gradle wrapper, you can tell the CLI which Gradle version to use. The version must match one of the installations known to the CLI.

To set a Gradle version globally:

```bash
mod config build gradle version edit 8.1.1
```

The version must exactly match one of the installed versions. Use `mod config build gradle installation list` to see which versions are available.

To apply a version only to a specific group of repositories, use the `--local` flag:

```bash
mod config build gradle version edit 4.5 --local ./working-set
```

To revert to auto-detection, delete the configured version:

```bash
mod config build gradle version delete
```

To see the currently configured version:

```bash
mod config build gradle version show
```

### Specifying a Gradle version in the CSV

When cloning using `mod git sync csv`, you can add a `gradleVersion` column to the CSV to specify the Gradle version per repository.

In the example below, `legacy-app` is configured to use Gradle 4.5, while `modern-app` will use auto-detection (either the wrapper or the default Gradle installation):

```csv
"cloneUrl","branch","origin","path","gradleVersion"
"https://github.com/example/legacy-app","main","github.com","example/legacy-app","4.5"
"https://github.com/example/modern-app","main","github.com","example/modern-app"
```

The CLI uses `mod config build gradle version edit <VERSION> --local <REPO>` for each row that has a value for that column, so you can verify the configuration by running:

```bash
mod config build gradle version show --local <REPO>
```

:::tip
If a repository has a Gradle wrapper, the wrapper always takes precedence regardless of the configured Gradle version. The `gradleVersion` setting only applies to repositories without a wrapper.
:::

### Passing build arguments

You can pass additional arguments to Gradle when building LSTs. For details on how `gradleArgs` works with global, local, and CSV-based configuration, please check out our [layered configuration guide](./layer-config-cli.md).

## Maven

The CLI uses the Maven installation found on your `$PATH`. There is no version selection or installation discovery for Maven.

### Passing build arguments

You can pass additional arguments to Maven when building LSTs. For details on how `mavenArgs` works with global, local, and CSV-based configuration, please check out our [layered configuration guide](./layer-config-cli.md).

## Node

By default, the CLI uses the Node.js installation found on your `$PATH`.

### Selecting a version

You can override the Node.js version per repository by specifying a `nodeVersion` column in your `repos.csv`:

```csv
"cloneUrl","branch","origin","path","nodeVersion"
"https://github.com/example/frontend-app","main","github.com","example/frontend-app","18"
"https://github.com/example/legacy-frontend","main","github.com","example/legacy-frontend","16.20.2"
```

During `mod git sync csv`, this value is written to each repository's `.moderne` directory.

### Setting Node.js options

You can set Node.js options via the `nodeOptions` column in your `repos.csv`. These are passed through the `NODE_OPTIONS` environment variable when building LSTs and running recipes. For more details, please check out our [repos.csv reference](../references/repos-csv.md).

## Additional reading

* [Configuring build steps](./build-steps.md) — control which build tools run and in what order.
* [Layered configuration](./layer-config-cli.md) — manage build arguments globally, locally, or via CSV.
* [CLI reference docs](../cli-reference.md) — full command reference.
