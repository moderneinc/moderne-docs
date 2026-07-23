---
sidebar_label: "Deploying the CLI from an internal Maven Central mirror"
description: How to install and configure the Moderne CLI in environments that fetch artifacts from an internal mirror of Maven Central.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploy the Moderne CLI from an internal Maven Central mirror

This guide walks through installing and configuring the Moderne CLI in environments where the CLI must fetch its distribution and recipe artifacts from an internal artifact repository instead of accessing the public internet directly.

By the end of this guide, you'll have the CLI installed from your internal mirror and stocked with the recipe JARs needed to run recipes.

## Prerequisites

This guide assumes that you have:

* An internal artifact repository mirroring Maven Central (e.g., Artifactory or Nexus)
* A Moderne license - which you'll activate per the [Moderne CLI license documentation](./moderne-cli-license.md) after completing the installation of the CLI

## Step 1: Ensure required artifacts exist in your internal artifact repository

Before installing the CLI, ensure your internal artifact repository contains the following artifacts:

* **The Moderne CLI distribution** — distributed as a platform-specific self-extracting installer that bundles the `modw` wrapper, a Java 25 runtime, and the CLI JAR. It's published to Maven Central under platform-specific artifact IDs: [`moderne-cli-linux`](https://central.sonatype.com/artifact/io.moderne/moderne-cli-linux/versions), [`moderne-cli-osx`](https://central.sonatype.com/artifact/io.moderne/moderne-cli-osx/versions), and [`moderne-cli-windows`](https://central.sonatype.com/artifact/io.moderne/moderne-cli-windows/versions).
* **Recipe modules** — see [the latest versions of every OpenRewrite module](../../recipes/lists/latest-versions-of-every-openrewrite-module.md) reference for the full list of recipe JARs and a ready-to-run CLI install command. The reference covers both the open-source OpenRewrite recipes (`org.openrewrite.*`) and Moderne's proprietary recipes (`io.moderne.recipe`).

:::tip
If your mirror is configured as a remote proxy of Maven Central (e.g., a virtual repository in Artifactory or a proxy repo in Nexus), artifacts are fetched on demand and cached automatically. If your mirror requires explicit sync-on-approval, each version you intend to use must be synced before users can install or upgrade.
:::

## Step 2: Install the CLI from your internal mirror

The CLI ships as a platform-specific installer that bundles the `modw` wrapper, a Java 25 runtime, and the CLI JAR. On Linux/macOS it's a self-extracting shell script (`.sh`). On Windows it's a zip archive (`.zip`) containing an `install.cmd` to run after extracting. Either way, installation drops everything into `~/.moderne/cli/` (or `%USERPROFILE%\.moderne\cli` on Windows) without further network access.

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux or macOS" default>

Download the platform-appropriate distribution from your internal mirror. For example, for Linux x86_64:

```bash
curl -fL -o moderne-cli.sh \
    "https://internal-mirror.example.com/io/moderne/moderne-cli-linux/4.2.10/moderne-cli-linux-4.4.1.sh"
```

Replace the version with the one you intend to install, and adjust the artifact name to match your platform (`moderne-cli-linux` or `moderne-cli-osx`).

Then run the installer:

```bash
bash moderne-cli.sh
```

The installer adds `~/.moderne/cli/bin` to your `PATH` and configures shell completion. Open a new terminal (or `source` your shell's rc file) to pick up the changes.

</TabItem>
<TabItem value="windows" label="Windows">

Download the Windows distribution from your internal mirror:

```powershell
Invoke-WebRequest `
    -Uri "https://internal-mirror.example.com/io/moderne/moderne-cli-windows/4.2.10/moderne-cli-windows-4.4.1.zip" `
    -OutFile moderne-cli.zip
```

Replace the version with the one you intend to install. Then extract the archive and run the included `install.cmd` script:

```powershell
Expand-Archive moderne-cli.zip -DestinationPath .
.\install.cmd
```

The installer adds `%USERPROFILE%\.moderne\cli\bin` to your user `PATH`. Open a new terminal to pick up the change.

</TabItem>
</Tabs>

:::warning
The macOS distribution bundles a JRE for **Apple Silicon only**. Intel Mac users will need to install a Java 25+ runtime separately and ensure it's discoverable by the wrapper — see [how the wrapper finds Java](../how-to-guides/cli-wrapper.md#how-the-wrapper-finds-java) for details.
:::

:::note
By default, the CLI checks Maven Central on each run and auto-updates to the latest release. If your environment cannot reach Maven Central directly, you'll need to configure how the wrapper resolves and downloads versions — see [air-gapped or restricted environments](../how-to-guides/cli-wrapper.md#air-gapped-or-restricted-environments) in the CLI wrapper guide.
:::

Verify the installation by running `mod --version`.

For more on how the wrapper works (auto-update behavior, distribution URLs, JDK selection, environment variables), see the [CLI wrapper and version management guide](../how-to-guides/cli-wrapper.md).

## Step 3: Install recipe JARs

With the CLI installed, the final piece is to stock it with recipes. This assumes the recipe JARs you want are already available in your internal artifact repository (per Step 1) — either because your mirror proxies Maven Central or because an administrator has synced them explicitly.

Run the `mod config recipes jar install` command and provide it with the JARs you wish to install. The latest version of every JAR, along with a ready-to-paste CLI install command, can be found at the bottom of [the latest versions of every OpenRewrite module doc](../../recipes/lists/latest-versions-of-every-openrewrite-module.md#cli-installation). This page is updated automatically with every release.

## Next steps

* **Activate your license** — see the [Moderne CLI license documentation](./moderne-cli-license.md) for the activation command.
* **Configure the CLI to integrate with your other internal tools** — for example, pointing at a non-default Maven settings file or an internal Artifactory for recipe artifacts. See [configuring the CLI to work with internal tools](./cli-internal-tools.md).
* **Standardize CLI installation across your team** — commit a project wrapper to a shared repository so every developer and CI job uses a consistent, version-pinned CLI from your internal mirror. See the [project wrapper section of the CLI wrapper guide](../how-to-guides/cli-wrapper.md#project-wrapper).
* **Run your first multi-repo build** — create a `repos.csv`, clone repositories, build LSTs, and run a recipe. See the [getting started with the Moderne CLI guide](./cli-intro.md#using-the-cli) and the [repos.csv reference](../references/repos-csv.md).
