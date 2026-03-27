---
sidebar_label: Build tool configuration
description: How to configure build tools (e.g., Gradle, Maven, Node) in the Moderne CLI.
---

# Build tool configuration in the Moderne CLI

The Moderne CLI automatically detects which build tools a repository uses and invokes them to produce LSTs. For details on how the CLI discovers build tools, the order in which they run, and how to override that order, see [configuring build steps](./build-steps.md).

This page covers how to configure the build tools themselves — selecting specific versions, registering installation locations, and passing additional arguments.

## Gradle

### Version selection

By default, the CLI uses the Gradle wrapper (`gradlew`) included in each repository. However, some repositories may not include a wrapper, or you may need to use a specific version of Gradle for certain projects.

#### Installation discovery

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

#### Adding additional installation locations

If you have Gradle installations in locations the CLI does not automatically discover, you can register them:

```bash
mod config build gradle installation edit /path/to/gradle-home
```

Each path should point to a Gradle home directory (i.e., a directory containing `bin/gradle`). You can specify multiple paths:

```bash
mod config build gradle installation edit /opt/gradle-4.5 /opt/gradle-8.1.1
```

To remove manually configured installation paths:

```bash
mod config build gradle installation delete
```

This only removes user-configured paths. Automatically discovered installations (from `$PATH`, SDKMAN, Homebrew, etc.) remain available.

#### Selecting a version

When a repository does not include a Gradle wrapper, you can tell the CLI which Gradle version to use. The version must match one of the installations known to the CLI.

To set a Gradle version globally:

```bash
mod config build gradle version edit 8.1.1
```

The version can be as specific or general as needed. For example, `8`, `8.1`, or `8.1.1` are all valid.

To apply a version only to a specific group of repositories, use the `--local` flag:

```bash
mod config build gradle version edit 4.5 --local ./working-set
```

To revert to auto-detection:

```bash
mod config build gradle version delete
mod config build gradle version edit auto
```

To see the currently configured version:

```bash
mod config build gradle version show
```

#### Specifying Gradle version in CSV

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

### Build arguments

You can pass additional arguments to Gradle when building LSTs. See [layered configuration](./layer-config-cli.md) for details on how `gradleArgs` works with global, local, and CSV-based configuration.

## Maven

### Build arguments

You can pass additional arguments to Maven when building LSTs. See [layered configuration](./layer-config-cli.md) for details on how `mavenArgs` works with global, local, and CSV-based configuration.

## Node

### Version selection

By default, the CLI uses the Node.js installation found on `$PATH`. You can override this per repository by specifying a `nodeVersion` column in your `repos.csv`:

```csv
"cloneUrl","branch","origin","path","nodeVersion"
"https://github.com/example/frontend-app","main","github.com","example/frontend-app","18"
"https://github.com/example/legacy-frontend","main","github.com","example/legacy-frontend","16.20.2"
```

During `mod git sync csv`, this value is written to each repository's `.moderne` directory.

### Options

You can set Node.js options via the `nodeOptions` column in your `repos.csv`. These are passed through the `NODE_OPTIONS` environment variable when building LSTs and running recipes. See the [repos.csv reference](../references/repos-csv.md) for details.

## Additional reading

* [Configuring build steps](./build-steps.md) — control which build tools run and in what order.
* [Layered configuration](./layer-config-cli.md) — manage build arguments globally, locally, or via CSV.
* [CLI reference docs](../cli-reference.md) — full command reference.
