---
sidebar_label: CLI wrapper and version management
description: How the Moderne CLI wrapper works, how to control auto-updates, and how to pin CLI versions.
---

# CLI wrapper and version management

The recommended way to install the Moderne CLI is through a lightweight wrapper script called `modw`. This wrapper manages downloading, updating, and launching the actual CLI distribution. If you used the curl/PowerShell installer, Homebrew, or Chocolatey, you're already using it. If you need to control which CLI version your team uses, understand what network calls the CLI makes, or troubleshoot startup issues, this guide explains how the wrapper works and how to configure it.

## What is `modw`?

The standard installation methods (the curl/PowerShell installer, Homebrew, and Chocolatey) place the `modw` wrapper script in `~/.moderne/cli/bin/` and add it to your `PATH`. The `mod` command is a symlink to `modw`.

When you run any `mod` command, the wrapper handles four things before launching the CLI:

1. **Ensures a distribution is installed** — downloads the platform-specific CLI distribution (JAR + bundled JRE) if needed
2. **Finds a JDK** — locates a compatible Java runtime
3. **Finds the CLI JAR** — resolves which JAR to launch
4. **Optimizes startup** — manages an ahead-of-time (AOT) compilation cache for faster startup

On first run after installation or an update, you may notice a brief delay while the wrapper downloads the distribution and builds the AOT cache. Subsequent runs reuse the cached artifacts and start quickly.

## Auto-update behavior

By default, the wrapper is configured with `version=RELEASE` in its properties file. This means **every invocation checks Maven Central** for the latest release version and downloads it if a newer version is available.

This is convenient for individual developers but can be problematic for:

* **Enterprise environments** with network restrictions or change-control policies
* **CI/CD pipelines** where reproducibility matters
* **Air-gapped networks** where Maven Central is not reachable

To check what version you're currently running:

```bash
mod --version
```

## Pinning a CLI version

To disable auto-updates and pin to a specific version, run:

```bash
mod wrapper --global --version 4.1.0
```

This writes `version=4.1.0` to your global `moderne-wrapper.properties` file. The wrapper will use exactly that version and stop checking Maven Central for updates.

To re-enable auto-updates later:

```bash
mod wrapper --global --auto-update
```

This sets the version back to `RELEASE`.

:::tip
You can also track the latest snapshot builds (for testing pre-release changes) with:

```bash
mod wrapper --global --auto-update-snapshot
```

This sets the version to `LATEST`, which resolves against Maven Central Snapshots.
:::

## Project wrapper

You can check a wrapper into a project repository — similar to the Gradle wrapper — so that every developer and CI job uses a consistent CLI version:

```bash
mod wrapper
```

This creates three files you should commit to your repository:

* `modw` — Unix wrapper script
* `modw.cmd` — Windows wrapper script
* `moderne/wrapper/moderne-wrapper.properties` — version configuration

Anyone with access to the repository can then run `./modw <command>` without installing the CLI globally. On first run, the project wrapper downloads the pinned CLI version automatically.

To update the pinned version for the project:

```bash
mod wrapper --version 4.2.0
```

### How version resolution works

The wrapper looks for `moderne-wrapper.properties` in two locations, in order:

1. **Project-local**: `moderne/wrapper/moderne-wrapper.properties` (in the current working directory)
2. **Global**: `~/.moderne/cli/dist/moderne-wrapper.properties`

A project-local properties file takes precedence. This allows teams to pin a specific CLI version in their repository while developers track `RELEASE` globally.

## What gets downloaded and from where

The wrapper makes outbound network calls to two services:

| What | Source | When |
|------|--------|------|
| CLI distribution (JAR + JRE) | Maven Central | On first run or version change |
| JDK (if no compatible Java is found) | [Eclipse Adoptium](https://adoptium.net/) | Only when no bundled JRE or system JDK is available |

You can control both of these with properties (see below).

## Properties reference

The `moderne-wrapper.properties` file supports these properties:

| Property | Description | Default |
|----------|-------------|---------|
| `version` | CLI version to use. `RELEASE` resolves the latest release from Maven Central. `LATEST` resolves the latest snapshot. Or pin a specific version like `4.1.0`. | `RELEASE` |
| `distributionUrl` | URL template for the distribution archive. Use `${version}` and `${platform}` as placeholders. | Maven Central |
| `distributionSha256Sum` | Expected SHA-256 of the downloaded archive. Verified if set. | _(none)_ |
| `jdkUrl` | URL to a JDK archive for auto-download. Set to `skip` to disable JDK auto-download entirely. | Adoptium API |

### Air-gapped or restricted environments

If your network cannot reach Maven Central, you can host the CLI distribution on an internal mirror and point the wrapper to it:

```properties
version=4.1.0
distributionUrl=https://internal-mirror.example.com/moderne-cli/${version}/moderne-cli-${version}-${platform}.tar.gz
distributionSha256Sum=abc123...
jdkUrl=skip
```

Setting `jdkUrl=skip` disables the JDK auto-download, which is useful when you know a compatible JDK is already available on the system.

## How the wrapper finds Java

The CLI requires Java 25+. The wrapper looks for a compatible runtime in this order:

1. `MODERNE_JAVA_HOME` environment variable (used unconditionally if set)
2. `JAVA_HOME` environment variable (if version is 25+)
3. `java` on `PATH` (if version is 25+)
4. Well-known JDK locations (SDKMAN, macOS `/Library/Java/JavaVirtualMachines`, IntelliJ/Gradle toolchains, `/usr/lib/jvm`, etc.)
5. Bundled JRE at `~/.moderne/cli/dist/jre/` (included in platform distributions)
6. Auto-download from Eclipse Adoptium to `~/.moderne/cli/dist/jdk/`

Most users never need to think about this — the platform distribution includes a bundled JRE (step 5), so no separate Java installation is required.

## Environment variables

| Variable | Description |
|----------|-------------|
| `MODERNE_JAVA_HOME` | Override the JDK used to run the CLI |
| `MODERNE_JAR` | Override the CLI JAR location (skips distribution download) |
| `MODERNE_OPTS` | Additional JVM options passed to the CLI (e.g., `-Xmx4g`) |
| `MODERNE_CLI_HOME` | Base CLI directory (default: `~/.moderne/cli`) |

## Directory layout

Everything lives under `~/.moderne/cli/` (or `$MODERNE_CLI_HOME`):

```
~/.moderne/
└── cli/
    ├── bin/                              # on PATH — wrapper only
    │   ├── mod -> modw                   # symlink
    │   └── modw                          # wrapper script
    ├── dist/                             # runtime assets
    │   ├── moderne-wrapper.properties    # global wrapper configuration
    │   ├── version.txt                   # installed version stamp
    │   ├── lib/
    │   │   └── moderne-cli.jar           # CLI fat JAR
    │   ├── jre/                          # bundled JRE (platform distribution)
    │   ├── jdk/                          # auto-downloaded JDK (when no bundled JRE)
    │   ├── aot/
    │   │   ├── mod.aot                   # AOT compilation cache
    │   │   └── mod.aot.jar-stamp         # cache invalidation stamp
    │   └── classpath/                    # extracted JARs for build plugins
    └── ...                               # recipes, metrics, and other CLI config
```

## Determining your installation method

To check whether you're using the wrapper:

```bash
which mod
```

If the output points to `~/.moderne/cli/bin/mod`, you're using the wrapper. If it points to a Homebrew or Chocolatey path, you installed via a package manager — but these also install the wrapper underneath.

You can also check the wrapper properties directly:

```bash
cat ~/.moderne/cli/dist/moderne-wrapper.properties
```

This shows your current version configuration. If the file contains `version=RELEASE`, auto-updates are enabled.
