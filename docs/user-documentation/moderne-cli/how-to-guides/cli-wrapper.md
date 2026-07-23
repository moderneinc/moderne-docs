---
sidebar_label: CLI wrapper and version management
description: How the Moderne CLI wrapper works, how to control auto-updates, and how to pin CLI versions.
---

# CLI wrapper and version management

When you install the Moderne CLI (via the curl/PowerShell installer, Homebrew, or Chocolatey) — what actually gets installed is a lightweight wrapper script called `modw`. The `mod` command you use is a symlink to this wrapper. Each time you run a `mod` command, the wrapper handles downloading the correct CLI distribution for your platform, locating a compatible Java runtime, applying JVM startup arguments, and optimizing startup performance before launching the CLI itself.

Most users never need to think about this. But if you need to control which CLI version your team uses, pin a version for CI reproducibility, understand what network calls the CLI makes, or troubleshoot startup issues, this guide will explain how the wrapper works and how to configure it.

:::warning
The wrapper is part of the CLI, not an optional convenience. The supported way to invoke the CLI is through `modw` (or a project-local `./modw`). Running the JAR directly with `java -jar` is not supported. The wrapper applies JVM arguments and other startup setup that the CLI relies on (currently: SSL and proxy configuration, the AOT cache, GC tuning, JDK location), with more startup setup expected to move into the wrapper before it stabilizes. See [Running the CLI without the wrapper](#running-the-cli-without-the-wrapper) for what this means in practice.
:::

## What is `modw`?

The standard installation methods place `modw` in `~/.moderne/cli/bin/` and add it to your `PATH`. When you run any `mod` command, the wrapper handles five things before launching the CLI:

1. **Ensures the CLI is installed** — downloads and extracts the platform-specific CLI installer (JAR + bundled JRE) if needed
2. **Finds a JDK** — locates a compatible Java runtime
3. **Finds the CLI JAR** — resolves which JAR to launch
4. **Applies startup JVM arguments** - reads persisted settings from `moderne.yml` (currently SSL/trust-store, key-store, and HTTP proxy) and translates them into JVM `-D` flags on the `java` command line, so the CLI and any JVM agents see them before the main JVM boots
5. **Optimizes startup** — manages an ahead-of-time (AOT) compilation cache for faster startup

On first run after installation or an update, you may notice a brief delay while the wrapper downloads the distribution and builds the AOT cache. Subsequent runs reuse the cached artifacts and start quickly.

Because every `mod` command goes through the wrapper, it is also the recommended place to hook in site-specific behavior. The most common example is publishing CLI telemetry to storage or a BI endpoint you control, so that CLI users keep running `mod` exactly as before. See [Exporting CLI telemetry to Amazon S3](./cli-telemetry-s3-export.md) for a worked example.

## Controlling auto-updates

By default, the wrapper is configured with `version=RELEASE` in its properties file. This means **every invocation checks for the latest release version** and downloads it if a newer version is available. For individual developers, this makes the most sense as you'd want to stay current automatically.

That being said, for CI/CD pipelines where reproducibility matters, enterprise environments with network restrictions or change-control policies, or air-gapped networks that restrict outbound internet access, you'll want to pin to a specific version instead:

```bash
mod wrapper --global --version <version>
```

This writes the specified version to your global `moderne-wrapper.properties` file. The wrapper will use exactly that version and stop checking for updates.

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

This sets the version to `LATEST`, which tracks the latest snapshot build.
:::

## Project wrapper

Similar to the Gradle wrapper, you can commit a wrapper into your project repository so that every developer and CI job uses a consistent CLI version.

To generate the wrapper files, run:

```bash
mod wrapper
```

This creates three files in your project:

* `modw` — Unix wrapper script
* `modw.cmd` — Windows wrapper script
* `moderne/wrapper/moderne-wrapper.properties` — version configuration

Commit these files to your repository. Anyone who clones it can then run `./modw <command>` without installing the CLI globally — on first run, the project wrapper downloads the pinned CLI version automatically.

To update the pinned version for the project:

```bash
mod wrapper --version <version>
```

### Pointing the project wrapper at your internal mirror

In environments where the CLI must download distributions from an internal mirror, edit the generated `moderne-wrapper.properties` to set `distributionUrl`. For example:

```properties
version=4.2.10
distributionUrl=https://internal-mirror.example.com/io/moderne/moderne-cli-${platform}/${version}/moderne-cli-${platform}-${version}.sh
jdkUrl=skip
```

The `${version}` and `${platform}` placeholders are filled in by the wrapper at download time. If your internal mirror requires authentication, see [authenticated artifact repositories](#authenticated-artifact-repositories) below. Setting `jdkUrl=skip` disables the JDK auto-download — useful when a compatible Java 25+ runtime is already available on the machines that will run the wrapper.

Commit the updated `moderne-wrapper.properties` alongside `modw` and `modw.cmd`. Every developer and CI job that clones the repository will then fetch the pinned distribution from your internal mirror on first invocation.

### How version resolution works

The wrapper looks for `moderne-wrapper.properties` in two locations, in order:

1. **Project-local**: `moderne/wrapper/moderne-wrapper.properties` (in the current working directory)
2. **Global**: `~/.moderne/cli/dist/moderne-wrapper.properties`

A project-local properties file takes precedence. This allows teams to pin a specific CLI version in their repository while developers track `RELEASE` globally.

## What gets downloaded and from where

The wrapper makes outbound network calls to two services:

| What                                 | Source                                    | When                                                |
|--------------------------------------|-------------------------------------------|-----------------------------------------------------|
| CLI distribution (JAR + JRE)         | Moderne's distribution repository         | On first run or version change                      |
| JDK (if no compatible Java is found) | [Eclipse Adoptium](https://adoptium.net/) | Only when no bundled JRE or system JDK is available |

You can control both of these with properties (see below).

## Properties reference

The `moderne-wrapper.properties` file supports these properties:

| Property                | Description                                                                                                                                                  | Default       |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| `version`               | CLI version to use. `RELEASE` resolves the latest release. `LATEST` resolves the latest snapshot. Or pin a specific version like `4.x.x`. | `RELEASE`     |
| `distributionUrl`       | URL template for the distribution archive. Use `${version}` and `${platform}` as placeholders.                                                               | Moderne's distribution repository |
| `distributionUrlEarlyAccess` | Base URL of the repository used to resolve `LATEST`/snapshot versions. Overrides the default snapshot source — point it at your own snapshot repository in restricted environments. | Moderne's distribution repository |
| `distributionUsername`  | Username for basic authentication when downloading the distribution.                                                                                         | _(none)_      |
| `distributionPassword`  | Password for basic authentication when downloading the distribution.                                                                                         | _(none)_      |
| `distributionToken`     | Bearer token for authentication when downloading the distribution. Takes precedence over username/password if both are set.                                   | _(none)_      |
| `distributionSha256Sum` | Expected SHA-256 of the downloaded archive. Verified if set.                                                                                                 | _(none)_      |
| `distributionUrlCacheTtl` | How long to cache the resolved `RELEASE` version before re-checking the distribution repository, as an ISO-8601 duration (e.g. `PT1H`, `PT10M`). `PT0S` disables caching. | `PT1H` |
| `distributionUrlEarlyAccessCacheTtl` | How long to cache the resolved `LATEST`/snapshot version before re-checking the early-access repository, as an ISO-8601 duration. `PT0S` disables caching. | `PT1H` |
| `jdkUrl`                | URL to a JDK archive for auto-download. Set to `skip` to disable JDK auto-download entirely.                                                                 | Adoptium API  |

### Caching the version lookup

When `version` is dynamic (`RELEASE` or `LATEST`), the wrapper resolves it to a concrete version by fetching `maven-metadata.xml` on every invocation — a network round-trip to the artifact repository before each command runs. In environments where that repository is remote, slow, or rate-limited, this adds latency to every `mod` call.

To avoid it, the wrapper caches the resolved version under `~/.moderne/cli/version-cache/` for a configurable time-to-live, so routine runs reuse the last lookup instead of re-fetching. The two resolution channels are cached independently: `distributionUrlCacheTtl` governs the `RELEASE` lookup and `distributionUrlEarlyAccessCacheTtl` the `LATEST`/snapshot lookups. Both are [ISO-8601 durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (for example `PT1H` for one hour or `PT10M` for ten minutes) and default to one hour. Set a channel's value to `PT0S` to disable caching for it.

```properties
version=RELEASE
distributionUrlCacheTtl=PT1H
```

The cache only affects how quickly the wrapper *notices* a newer published version — it never blocks an upgrade you have already pinned. To force a fresh lookup for a single run (bypassing and refreshing the cache), set `MODERNE_WRAPPER_REFRESH=1`:

```bash
MODERNE_WRAPPER_REFRESH=1 mod --version
```

### Air-gapped or restricted environments

If your network restricts outbound internet access, you can host the CLI distribution on an internal mirror and point the wrapper to it:

```properties
version=4.x.x
distributionUrl=https://internal-mirror.example.com/moderne-cli-${platform}/${version}/moderne-cli-${platform}-${version}.sh
distributionSha256Sum=abc123...
jdkUrl=skip
```

Setting `jdkUrl=skip` disables the JDK auto-download, which is useful when you know a compatible JDK is already available on the system.

:::warning
`distributionUrl` controls only where the distribution archive is *downloaded* from, not where a dynamic `version` is *resolved*. Both `RELEASE` and `LATEST`/snapshot resolution query Moderne's distribution repository for `maven-metadata.xml`. If it is not reachable and the version is left dynamic, every `mod` invocation fails at version resolution.

In an air-gapped environment you therefore have two options:

- **Pin a concrete `version`** (such as `4.x.x`), which skips the metadata lookup entirely — the simplest choice.
- **Redirect the snapshot lookup** with `distributionUrlEarlyAccess`, pointing it at your own snapshot repository, if you need to keep tracking `LATEST` from an internal mirror.
:::

:::note
The example above uses the `.sh` extension, which applies to Linux and macOS distributions. Windows distributions use `.zip` instead.
:::

### Authenticated artifact repositories

If your internal mirror requires authentication (e.g., a private Artifactory or Nexus instance), you can configure credentials via properties or environment variables.

**Using properties** (for developer workstations):

```properties
version=4.x.x
distributionUrl=https://artifactory.corp.example.com/moderne-cli-${platform}/${version}/moderne-cli-${platform}-${version}.sh
distributionUsername=your-username
distributionPassword=your-password
jdkUrl=skip
```

Or with a bearer token:

```properties
distributionToken=your-token
```

You can set these properties via `mod wrapper`:

```bash
mod wrapper --global \
  --distribution-url "https://artifactory.corp.example.com/moderne-cli-\${platform}/\${version}/moderne-cli-\${platform}-\${version}.sh" \
  --distribution-username your-username \
  --distribution-password
```

Omitting the value after `--distribution-password` will prompt you interactively, keeping the password out of your shell history.

**Using environment variables** (for CI/CD and first-time installs):

Environment variables take precedence over properties file values. This is especially important for first-time installs where no properties file exists yet.

| Variable                                  | Description                           |
|-------------------------------------------|---------------------------------------|
| `MODERNE_WRAPPER_DISTRIBUTION_USERNAME`   | Basic auth username                   |
| `MODERNE_WRAPPER_DISTRIBUTION_PASSWORD`   | Basic auth password                   |
| `MODERNE_WRAPPER_DISTRIBUTION_TOKEN`      | Bearer token (overrides user/pass)    |
| `MODERNE_WRAPPER_DISTRIBUTION_URL`        | Override distribution URL             |
| `MODERNE_WRAPPER_VERSION`                 | Override CLI version                  |

Example first-time install with authentication:

```bash
export MODERNE_WRAPPER_DISTRIBUTION_URL="https://artifactory.corp.example.com/moderne-cli-\${platform}/\${version}/moderne-cli-\${platform}-\${version}.sh"
export MODERNE_WRAPPER_DISTRIBUTION_USERNAME="deploy-user"
export MODERNE_WRAPPER_DISTRIBUTION_PASSWORD="secret"
export MODERNE_WRAPPER_VERSION="RELEASE"
curl -fsSL https://app.moderne.io/cli | bash
```

:::note
When both a bearer token and username/password are configured, the bearer token takes precedence. Environment variables always take precedence over properties file values.
:::

## How the wrapper finds Java

The CLI requires Java 25+. The wrapper looks for a compatible runtime in this order:

1. `MODERNE_JAVA_HOME` environment variable (used unconditionally if set)
2. `JAVA_HOME` environment variable (if version is 25+)
3. `java` on `PATH` (if version is 25+)
4. Well-known JDK locations (SDKMAN, macOS `/Library/Java/JavaVirtualMachines`, IntelliJ/Gradle toolchains, `/usr/lib/jvm`, etc.)
5. Bundled JRE at `~/.moderne/cli/dist/jre/` (bundled with the CLI installer)
6. Auto-download from Eclipse Adoptium to `~/.moderne/cli/dist/jdk/`

Most users never need to think about this — the CLI installer includes a bundled JRE (step 5), so no separate Java installation is required.

:::warning
The macOS distribution bundles a JRE for **Apple Silicon only**. Intel Mac users will need to install a Java 25+ runtime separately (e.g., from [Eclipse Adoptium](https://adoptium.net/)) and ensure it is available via one of the locations above.
:::

:::info
GraalVM distributions are **not compatible** with the CLI's AOT cache. The wrapper will skip GraalVM installations during JDK discovery. If you are supplying your own Java 25+ runtime, use a non-GraalVM distribution such as [Eclipse Adoptium](https://adoptium.net/).
:::

## Environment variables

| Variable                                | Description                                                        |
|-----------------------------------------|--------------------------------------------------------------------|
| `MODERNE_JAVA_HOME`                     | Override the JDK used to run the CLI                               |
| `MODERNE_JAR`                           | Override the CLI JAR location (skips distribution download)        |
| `MODERNE_OPTS`                          | Additional JVM options passed to the CLI (e.g., `-Xmx4g`)         |
| `MODERNE_CLI_HOME`                      | Base CLI directory (default: `~/.moderne/cli`)                     |
| `MODERNE_WRAPPER_DISTRIBUTION_USERNAME` | Basic auth username for distribution downloads                     |
| `MODERNE_WRAPPER_DISTRIBUTION_PASSWORD` | Basic auth password for distribution downloads                     |
| `MODERNE_WRAPPER_DISTRIBUTION_TOKEN`    | Bearer token for distribution downloads (overrides user/pass)      |
| `MODERNE_WRAPPER_DISTRIBUTION_URL`      | Override `distributionUrl` without a properties file               |
| `MODERNE_WRAPPER_VERSION`               | Override `version` without a properties file                       |
| `MODERNE_WRAPPER_REFRESH`               | Force a fresh version lookup this run, bypassing the TTL cache      |

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
    │   ├── jre/                          # bundled JRE (from the CLI installer)
    │   ├── jdk/                          # auto-downloaded JDK (when no bundled JRE)
    │   ├── aot/
    │   │   ├── mod.aot                   # AOT compilation cache
    │   │   └── mod.aot.jar-stamp         # cache invalidation stamp
    │   └── classpath/                    # extracted JARs for build plugins
    └── ...                               # recipes, metrics, and other CLI config
```

## Running the CLI without the wrapper

Some teams download the CLI JAR directly from Artifactory or another artifact repository and run it with `java -jar`. **This is not a supported configuration.** The wrapper is the entry point that the CLI is designed around, and the work it does at startup is not duplicated inside the JAR. If you bypass it, you take on responsibility for replicating that work yourself, and you accept that the list of things you need to replicate can change between CLI versions without notice.

### What breaks without the wrapper

The list below covers what is currently known to break. It is not exhaustive. The wrapper is the supported entry point and more startup setup is expected to move into it before this stabilizes.

* **SSL and proxy configuration from `moderne.yml` is not applied** (as of CLI 4.2.2). The wrapper reads SSL/trust-store, key-store, and HTTP proxy settings from `moderne.yml` and passes them to the JVM as `-D` flags before any application code runs. JVM agents capture their TrustManager at premain time, before the CLI itself can call `System.setProperty`, so setting these from inside the CLI process is too late. Without the wrapper, any HTTPS call goes out with the default JDK trust store and no proxy. In environments that depend on a corporate proxy or custom CA bundle, `mod config moderne login`, `mod git sync`, recipe install, and almost anything else that talks to a Moderne or Git endpoint will fail with a PKIX error or a connection error.

* **The AOT cache is not used.** The wrapper trains and reuses a Project Leyden ahead-of-time compilation cache that significantly improves CLI startup. Running the JAR directly skips this, so every invocation pays the full JVM warm-up cost.

* **CLI auto-update is not performed.** The wrapper checks for and downloads new releases automatically. Running the JAR directly means you are responsible for updating the JAR manually whenever you want a new version.

### If you really must run without the wrapper

This path is unsupported. `java -jar moderne-cli.jar` will start the CLI and works for many commands, but it can fail on others (recipe runs especially), which is why we do not support it. The safer invocation is to extract the nested JARs out of the fat JAR once and launch `io.moderne.cli.commands.Mod` against the extracted classpath. Mirror whatever is in your `~/.moderne/moderne.yml` to `-D` flags on the `java` command line so HTTPS calls and the corporate proxy work:

```bash
EXTRACTED="$HOME/.moderne/cli/dist/classpath/<version>"
MOD_JAR="$HOME/.moderne/cli/dist/lib/moderne-cli.jar"

# Extract nested JARs (only needed when the JAR changes)
java -cp "$MOD_JAR" io.moderne.cli.launcher.ModerneLauncher --extract-only

# Run the CLI
java \
    -Djavax.net.ssl.trustStore=/path/to/truststore.jks \
    -Djavax.net.ssl.trustStorePassword=changeit \
    -Dhttp.proxyHost=proxy.example.com -Dhttp.proxyPort=3128 \
    -Dhttps.proxyHost=proxy.example.com -Dhttps.proxyPort=3128 \
    -Dhttp.nonProxyHosts="*.example.com" \
    -cp "$MOD_JAR:$EXTRACTED/META-INF/cli/*:$EXTRACTED/META-INF/lib/*:$EXTRACTED" \
    io.moderne.cli.commands.Mod "$@"
```

That gets you a working CLI with HTTPS, but it is still missing everything else in [What breaks without the wrapper](#what-breaks-without-the-wrapper): no AOT cache, no auto-update, and no GC tuning. The `-D` flags shown above correspond to what has been configured via [`mod config http proxy`](../cli-reference.md#mod-config-http-proxy), [`mod config http trust-store`](../cli-reference.md#mod-config-http-trust-store), and [`mod config http key-store`](../cli-reference.md#mod-config-http-key-store) and persisted to `moderne.yml`. None of this is part of a stable contract: the extraction directory, the main class, the launcher class, the classpath shape, and the set of `-D` flags the wrapper sets can all change between CLI versions, and have changed multiple times already. If you choose this path, treat the `modw` script shipped with each CLI release as the source of truth and diff it on every upgrade to see what new arguments need to be propagated.

### Migrating to the wrapper

If you're currently running the JAR directly, you don't need to change everything at once:

1. **Start with developer machines** — have developers install via `curl https://app.moderne.io/cli | bash` while CI continues using the JAR directly
2. **Point the wrapper at your internal mirror** — set `distributionUrl` in `moderne-wrapper.properties` to your Artifactory URL so the wrapper downloads from there instead of the default location
3. **Adopt the project wrapper for CI** — commit `modw` to your repository and have CI run `./modw` instead of `java -jar`. This ensures CI and developers use the same version

Your existing tooling for environment setup (e.g., scripts that configure Java versions, populate `.moderne/moderne.yml`, or set repository-specific environment variables) can continue to work alongside the wrapper.

## Checking your configuration

To check whether auto-updates are enabled, inspect the wrapper properties:

```bash
cat ~/.moderne/cli/dist/moderne-wrapper.properties
```

If this file contains `version=RELEASE`, auto-updates are enabled. A specific version like `version=4.x.x` means you're pinned. If this file doesn't exist, you're likely running the CLI JAR directly without the wrapper.

## Troubleshooting

### CLI commands fail after an upgrade (stale wrapper)

After a CLI version bump, `mod` subcommands start failing even though `mod --version` prints the version you expect. The failures cluster on commands that reach a Moderne or Git endpoint — `mod config moderne login`, `mod git sync`, `mod config recipes moderne sync` — and usually surface as TLS/PKIX or connection errors rather than a clear error from the CLI itself.

This happens when the wrapper script on your `PATH` is out of date. As shown in the [directory layout](#directory-layout), `mod` is a symlink to the `modw` wrapper at `~/.moderne/cli/bin/modw`. When the CLI updates its distribution, it refreshes a copy of the wrapper under `~/.moderne/cli/dist/`, but on older wrappers the copy on your `PATH` (`~/.moderne/cli/bin/modw`) was left untouched.

The wrapper does work at startup that the JAR depends on — most importantly, it reads SSL/trust-store, key-store, and HTTP proxy settings from `moderne.yml` and passes them to the JVM as `-D` flags before any application code runs (see [what breaks without the wrapper](#what-breaks-without-the-wrapper)). A stale `bin/modw` that predates this behavior won't apply that configuration, so on a machine that depends on a corporate proxy or a custom CA bundle, HTTPS calls go out with the default trust store and no proxy and fail.

To confirm a newer wrapper is sitting unused:

```bash
ls ~/.moderne/cli/dist/modw                              # if present, a newer wrapper is waiting
ls -lt ~/.moderne/cli/bin/modw ~/.moderne/cli/dist/modw  # newest first; the top line is the more recent wrapper
```

Promote the refreshed wrapper over the stale one:

```bash
mv ~/.moderne/cli/dist/modw ~/.moderne/cli/bin/modw
```

`bin/mod` is a symlink to `modw`, so it picks up the change automatically.

If that doesn't resolve it, reinstall the wrapper from scratch:

```bash
curl https://app.moderne.io/cli | bash
```

For air-gapped setups where `curl | bash` isn't an option, replace `~/.moderne/cli/bin/modw` with the `modw` bundled in the CLI distribution. See [air-gapped or restricted environments](#air-gapped-or-restricted-environments) for how the distribution is sourced.
