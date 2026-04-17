---
sidebar_label: CLI 4.0 changes
description: The major changes in Moderne CLI 4.0.
---

# Moderne CLI 4.0 changes

Moderne CLI 4.0 is a major release focused on making the CLI simpler to install and more reliable to run. Here's what's new at a glance:

* **No Java installation required (Apple Silicon Mac, Linux, Windows).** Each platform distribution includes a bundled Java runtime, so you never need to install Java yourself.
* **One JAR, identical across platforms.** The CLI is a single JAR — byte-identical on Linux, macOS, and Windows — eliminating the platform-specific native binaries that caused bugs in 3.x.
* **Consistent across your team.** A new `modw` wrapper script can be checked into your repositories, ensuring every developer and CI build uses the exact same CLI version without any manual setup.
* **Faster, more reliable releases.** Simplified build process means quicker releases and fewer bugs that only surface in production.

All `mod` subcommands (`mod run`, `mod build`, `mod search`, etc.) work identically to 3.x. Your existing scripts and workflows will continue to work with minor path updates (see [Updating custom scripts](#updating-custom-scripts)).

The only removed command is `mod afterburner`, whose functionality has been folded into the V3 LST format.

## Distribution formats

The CLI ships in three platform-specific distributions, all of which are available on [Maven Central](https://repo1.maven.org/maven2/io/moderne/):

| Distribution | Maven Central artifact                                                                | File pattern                        | Use case                    |
|--------------|---------------------------------------------------------------------------------------|-------------------------------------|-----------------------------|
| Linux        | [moderne-cli-linux](https://repo1.maven.org/maven2/io/moderne/moderne-cli-linux/)     | `moderne-cli-linux-{version}.sh`    | Linux workstations and CI   |
| macOS        | [moderne-cli-osx](https://repo1.maven.org/maven2/io/moderne/moderne-cli-osx/)         | `moderne-cli-osx-{version}.sh`      | macOS workstations          |
| Windows      | [moderne-cli-windows](https://repo1.maven.org/maven2/io/moderne/moderne-cli-windows/) | `moderne-cli-windows-{version}.zip` | Windows workstations and CI |

The Linux and macOS distributions are self-extracting shell scripts. Run them to install the CLI. The Windows distribution is a zip archive containing an `install.cmd` script.

Each distribution contains the CLI JAR, wrapper scripts, and a bundled JRE — a minimal Java 25 runtime containing only the modules the CLI needs. No separate Java installation is required.

:::info
The macOS distribution bundles a JRE for **Apple Silicon only**. If you are using an Intel Mac, the bundled JRE will not be compatible. You will need to install your own Java 25+ runtime to one of the standard default installation locations described in [JDK resolution order](#jdk-resolution-order) (e.g., SDKMAN, `/Library/Java/JavaVirtualMachines`, `JAVA_HOME`, or `MODERNE_JAVA_HOME`). You can download a Java 25 JDK from [Eclipse Adoptium](https://adoptium.net/).
:::

After installation, the CLI directory structure looks like this:

```
~/.moderne/cli/
├── bin/
│   ├── mod                         # Symlink to modw
│   └── modw                        # Wrapper script
└── dist/
    ├── moderne-wrapper.properties  # Version and download configuration
    ├── lib/
    │   └── moderne-cli.jar         # The CLI fat JAR
    ├── jre/                        # Bundled JRE (~60 MB)
    │   ├── bin/
    │   └── lib/
    └── aot/                        # Startup cache (generated on first run)
        └── mod.aot
```

The bundled JRE won't conflict with any Java installation you already have on your machine. After installation, both `mod` and `modw` are available on your `PATH`.

## Installing 4.0

There are several installation paths, each with different tradeoffs. The right choice depends on whether you have internet access at runtime, whether you need per-project version pinning, and whether your team has Java installed.

| Path                  | How it works                                                                                            | Assumes                                        | Best for                                    |
|-----------------------|---------------------------------------------------------------------------------------------------------|------------------------------------------------|---------------------------------------------|
| Quick install         | `curl -fsSL https://app.moderne.io/cli \| bash`                                                         | Internet at install time                       | Getting started quickly                     |
| Package manager       | `brew install moderneinc/moderne/mod` / `choco install mod --prerelease`                                | Internet at install time                       | Individual workstations                     |
| Platform distribution | Download `.sh` or `.zip`, run it                                                                        | Internet at download time                      | Teams without Java, controlled environments |
| Standalone wrapper    | Check `modw` + properties file into your repo                                                           | Internet on first run (downloads distribution) | CI pipelines, per-project version pinning   |
| Standalone JAR        | Download [`moderne-cli.jar`](https://repo1.maven.org/maven2/io/moderne/moderne-cli/) from Maven Central | Java 25+ already installed                     | Custom environments, advanced users         |

The first four paths all provide a bundled JRE — no separate Java installation is required. The standalone JAR is platform-neutral and requires you to supply your own Java 25+ installation (any distribution except GraalVM — see [AOT cache](#startup-performance-and-the-aot-cache)).

### Quick install (recommended)

You can install the CLI with a single command:

```bash
# Linux / macOS
curl -fsSL https://app.moderne.io/cli | bash

# Windows (PowerShell)
iwr https://app.moderne.io/cli | iex
```

This downloads the `modw` wrapper, places it on your `PATH`, and configures it to connect to the Moderne Platform. On first run, `modw` will download the full platform distribution (JAR + bundled JRE) automatically.

### Platform distribution

Download the distribution for your platform from Maven Central (see [distribution formats](#distribution-formats) for links) and run it. The installer places the CLI in `~/.moderne/cli/` and adds it to your `PATH`:

```bash
# Linux (self-extracting installer)
bash moderne-cli-linux-4.1.5.sh

# macOS (self-extracting installer)
bash moderne-cli-osx-4.1.5.sh

# Windows (PowerShell)
Expand-Archive moderne-cli-windows-4.1.5.zip -DestinationPath . ; .\install.cmd
```

After installation, the CLI binary lives in `~/.moderne/cli/bin/` (on your `PATH`), and everything the CLI needs to run (JAR, JRE, startup cache) lives in `~/.moderne/cli/dist/`.

Your configuration (recipes, metrics, traces) lives directly under `~/.moderne/cli/`, separate from the runtime files. This means upgrades can replace `dist/` without touching your configuration.

### Package managers

**Homebrew (macOS):** The Homebrew formula installs the full platform distribution including the bundled JRE. You can run `mod` as before, and the formula handles updates via `brew upgrade`.

**Chocolatey (Windows):** The Chocolatey package downloads the Windows platform distribution and installs it under the Chocolatey tools directory. A `mod.cmd` wrapper delegates to `modw.cmd`.

Both package managers include the bundled JRE. No separate Java installation is required.

## The `modw` wrapper

The `modw` wrapper script is modeled after the Gradle wrapper. You can check `modw` and a `moderne-wrapper.properties` file into your repository, and every developer and CI build will get the same CLI version without any global installation step.

On the first run, `modw` will automatically download the correct platform distribution (CLI JAR + bundled JRE) and build a startup cache. Subsequent runs will be fast without any manual setup. If the `version` in `moderne-wrapper.properties` changes, `modw` will automatically download and install the new version.

### Version pinning

Set `version=4.0.0` in the `moderne-wrapper.properties` file to pin a specific version. You can also use these special tokens:

* `version=RELEASE` (the default): Resolves the latest stable release from Maven Central.
* `version=LATEST`: Resolves the newest early access build. This is useful in environments where distinguished engineers need access to new versions before they are rolled out to the general population.

The installed version is tracked in `~/.moderne/cli/dist/version.txt`.

A `moderne/wrapper/moderne-wrapper.properties` file in a repository root takes priority over the global properties file, allowing you to pin specific versions per project.

### Version matrix testing

The wrapper pattern enables version matrix testing without modifying the system `PATH` or managing multiple global installations:

```
test-harness/
├── cli-3.58/
│   ├── modw
│   └── moderne-wrapper.properties   # version=3.58.0
├── cli-4.0/
│   ├── modw
│   └── moderne-wrapper.properties   # version=4.0.0
└── cli-4.1-rc/
    ├── modw
    └── moderne-wrapper.properties   # version=4.1.0-rc1
```

Each `modw` uses the version defined in its neighboring properties file. You can call `./cli-3.58/modw run ...` vs. `./cli-4.0/modw run ...` to compare behavior across versions.

## Updating custom scripts

After installation, `mod` is available as a symlink to `modw`, so most existing scripts will continue to work without changes. If you need to adjust paths or use direct Java invocation, here are the patterns:

**3.x pattern (native binary):**

```bash
/path/to/mod run --recipe=SomeRecipe ...
```

**4.0 pattern:**

```bash
# Option 1: Use modw (recommended)
/path/to/modw run --recipe=SomeRecipe ...

# Option 2: Direct java invocation
java -jar /path/to/moderne-cli.jar run --recipe=SomeRecipe ...
```

### Environment variables

Custom scripts that set `JAVA_HOME` or other environment variables should be updated to account for:

* `MODERNE_JAVA_HOME`: Overrides JDK location (takes priority over `JAVA_HOME`). Should point to a Java 25+ installation. The wrapper uses this unconditionally without a version check.
* `MODERNE_JAR`: Overrides JAR location. Useful for testing custom builds.
* `MODERNE_OPTS`: Additional JVM options (e.g., `-Xmx4g` for heap sizing).
* `MODERNE_CLI_HOME`: Base directory for CLI state (default: `~/.moderne/cli`).

## Air-gapped and enterprise environments

By default, `modw` downloads the CLI distribution (including the bundled JRE) from Maven Central. In enterprise environments that restrict outbound internet access, you can point it to an internal mirror instead.

### JDK resolution order

When looking for a Java runtime, the wrapper checks these locations in order:

1. `MODERNE_JAVA_HOME` environment variable (used unconditionally, no version check)
2. `JAVA_HOME` environment variable (checked for version >= 25)
3. `java` on `PATH` (checked for version >= 25)
4. Well-known locations: SDKMAN, macOS `/Library/Java/JavaVirtualMachines`, IntelliJ/Gradle toolchains, `/usr/lib/jvm`, etc.
5. Bundled JRE at `~/.moderne/cli/dist/jre/bin/java` (included in platform distributions)
6. Auto-download from Eclipse Adoptium (or custom `jdkUrl`)

### Configuring an internal mirror

Host the distribution files on an internal server and point `distributionUrl` in the `moderne-wrapper.properties` file to that location:

```properties
version=4.0.0
distributionUrl=https://nexus.corp.example.com/repository/releases/moderne-cli-${platform}/${version}/moderne-cli-${platform}-${version}.sh
distributionSha256Sum=abc123...
jdkUrl=skip
```

The wrapper will replace `${version}` and `${platform}` automatically. Platform values are `linux`, `osx`, or `windows`.

Setting `jdkUrl=skip` tells the wrapper not to download a JDK on its own. In this case, you will need Java 25+ available via `MODERNE_JAVA_HOME` or your `PATH`.

### Authenticated mirrors

If your internal mirror requires authentication, the wrapper supports basic auth and bearer token credentials via environment variables or properties. This is especially important for first-time installs where no properties file exists yet.

**Environment variables** (highest precedence):

* `MODERNE_WRAPPER_DISTRIBUTION_USERNAME` / `MODERNE_WRAPPER_DISTRIBUTION_PASSWORD` — basic auth
* `MODERNE_WRAPPER_DISTRIBUTION_TOKEN` — bearer token (takes precedence over user/pass)
* `MODERNE_WRAPPER_DISTRIBUTION_URL` — override distribution URL without a properties file
* `MODERNE_WRAPPER_VERSION` — override version without a properties file

**Properties** in `moderne-wrapper.properties`:

* `distributionUsername` / `distributionPassword` — basic auth
* `distributionToken` — bearer token

See the [CLI wrapper guide](../how-to-guides/cli-wrapper.md#authenticated-artifact-repositories) for full details and examples.

## Startup performance and the AOT cache

Java 25 introduces [Project Leyden](https://openjdk.org/projects/leyden/), which gives the CLI near-native startup performance by caching class loading and compilation work ahead of time.

The AOT cache is built automatically during installation, so you won't experience a slow first run. After an upgrade, the cache is rebuilt the next time the CLI runs.

The cache is stored at `~/.moderne/cli/dist/aot/` and is rebuilt automatically when the CLI is upgraded.

:::warning
GraalVM distributions are **not compatible** with the AOT cache. If you are supplying your own Java 25+ runtime (for example, on an Intel Mac or when using the standalone JAR), use a non-GraalVM distribution such as [Eclipse Adoptium](https://adoptium.net/). The CLI will skip GraalVM installations during JDK discovery.
:::

## What's changing and why

In 3.x, the CLI was a platform-specific GraalVM native binary. You downloaded a single executable for your OS and ran it directly with no JDK required. Internally, the native binary was only the command-line frontend; it spawned a separate JVM subprocess (`modjava`) to do the actual work (recipe execution, LST parsing), because GraalVM native images couldn't dynamically load recipe JARs.

This split architecture had drawbacks. The native binary and the JVM subprocess were different artifacts with different behavior, meaning a feature could work perfectly in one but fail in the other. Native image compilation also took 8-10 minutes per platform, which slowed release cycles and made it difficult to catch bugs before shipping.

In 4.0, the CLI is a single JVM process with no subprocess spawning. Every distribution is a wrapper script (`modw` / `modw.cmd`) plus a fat JAR. The wrapper locates or downloads a suitable JDK, then launches the JAR. This eliminates an entire class of bugs where the native binary and JVM subprocess behaved differently, and produces a single artifact that is byte-identical across all platforms.

## Removed commands

`mod afterburner` has been removed. Its functionality has been folded into the V3 LST format, making the command unnecessary.

## Troubleshooting

### "Java version X is less than the minimum required version 25"

The wrapper found a JDK but it's too old. Either install Java 25+, use the platform distribution with its bundled JRE, or set `MODERNE_JAVA_HOME` to point to a Java 25+ installation.

### "Failed to download Moderne CLI distribution"

The wrapper can't reach the download server (likely a firewall or proxy issue). Either download the platform distribution manually, or set `distributionUrl` in the `moderne-wrapper.properties` file to point to an internal mirror.

### "AOT cache appears to be corrupted"

Delete `~/.moderne/cli/dist/aot/mod.aot` and `mod.aot.jar-stamp`. The cache will be regenerated on the next run.

### Slow first run after upgrade

After an upgrade, the first run rebuilds the startup cache, which takes a few extra seconds. This is a one-time cost — subsequent runs will be fast.

### Intel Mac: no compatible JRE

The macOS platform distribution includes a bundled JRE for Apple Silicon only. If you are running on an Intel Mac, the bundled JRE will be incompatible. Install a non-GraalVM Java 25+ distribution separately (for example, from [Eclipse Adoptium](https://adoptium.net/)) and ensure it is available via one of the locations described in [JDK resolution order](#jdk-resolution-order). GraalVM distributions are incompatible with the AOT cache.

### Debugging

The wrapper supports remote debugging via `--debug` (defaults to port 5005) or `--debug=PORT` to specify a custom port. This launches the CLI with a JDWP agent so you can attach a debugger from your IDE.
