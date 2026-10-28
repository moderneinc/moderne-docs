---
sidebar_label: "Module 1: CLI and LSTs"
description: Install the Moderne CLI, install the Prethink recipe modules, and build LSTs for a working set of Java and Spring projects.
draft: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Module 1: CLI and LSTs

In this module, you'll set up everything the agent tools depend on: the Moderne CLI, a couple of recipe JARs (including `io.moderne.recipe:rewrite-prethink`), and [Lossless Semantic Trees (LSTs)](../../user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees.md) for a small working set of Java and Spring repositories. The later modules build on top of this setup, so don't skip ahead until your LSTs build cleanly.

## Exercise 1-1: Install and configure the Moderne CLI

### Goals for this exercise

* Install the Moderne CLI on your machine
* Authenticate the CLI against [app.moderne.io](https://app.moderne.io)
* Confirm the installation by running `mod --version`

### Steps

#### Step 1: Install the CLI

The recommended way to install the Moderne CLI is via the install script:

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux / macOS" default>

```bash
curl https://app.moderne.io/cli | bash
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
irm https://app.moderne.io/cli/windows | iex
```

</TabItem>
</Tabs>

The script makes `mod` available in your terminal, points the CLI to app.moderne.io, and then opens your browser so you can authorize it. Sign in if you aren't already, then click **Yes** when asked whether the CLI can create a personal access token on your behalf. Once you've confirmed, the CLI stores the token on your machine and then syncs the recipe marketplace. The sync takes a few minutes.

<details>
<summary>Installing with Homebrew or Chocolatey</summary>

You can also install the wrapper with a package manager:

* **Homebrew** (macOS/Linux): `brew install moderneinc/moderne/mod`
* **Chocolatey** (Windows): `choco install mod --prerelease`

A package manager installs only the wrapper. You will need to connect the CLI to app.moderne.io and authorize it yourself:

```bash
mod config moderne edit https://app.moderne.io
mod login
```

The login command opens your browser for the same authorization, then syncs the recipe marketplace.
</details>

The CLI documentation also covers [installing on an Enterprise tenant or Moderne DX](../../user-documentation/moderne-cli/getting-started/cli-intro.md#installation-and-configuration).

Verify the install:

```bash
mod --version
```

:::tip[Restrictive networks]
On corporate networks with proxies or limited internet / Moderne SaaS access, see [Deploying the CLI from an internal artifact repository](../../user-documentation/moderne-cli/getting-started/cli-internal-mirror.md) for installation, and [Configuring the CLI to work with internal tools](../../user-documentation/moderne-cli/getting-started/cli-internal-tools.md) for related integrations, before continuing. Without a properly configured setup, you'll commonly see:

* `mod git sync moderne` reports `PARTIAL SUCCESS` because a few LSTs sit on hosts your network can't reach
* `mod config recipes jar install` fails to resolve a JAR — point it at your internal Artifactory/Nexus first via `mod config recipes artifacts`
* `mod build` can't download Maven/Gradle plugins — set up your build tool's mirror and proxy as you normally would, then re-run

For the workshop you only need a handful of repos to succeed. **Don't try to fix every failure up front**.
:::

### Takeaways

* The Moderne CLI is the entry point for everything in this workshop. Every command you'll run starts with `mod`.
* You only need to authenticate once. The CLI caches your token across terminal sessions.

---

## Exercise 1-2: Confirm the recipes are available

### Goals for this exercise

* Confirm the Prethink recipe is in your local marketplace
* Know how to add a recipe module the marketplace doesn't have

### Steps

#### Step 1: Search for the Prethink recipe

```bash
mod config recipes search UpdatePrethinkContext
```

The CLI lists the closest matches and asks you to pick one. You should see `io.moderne.prethink.UpdatePrethinkContextStarter` in the list. Enter its number to see the recipe's description and options, or press `Enter` on its own to leave the list. You'll choose recipes explicitly with `--recipe` later.

The `rewrite-prethink` artifact is the focus of this workshop. It uses an open-source `org.openrewrite.recipe` module for building blocks, while `io.moderne.recipe:rewrite-prethink` adds pre-configured discovery for Spring, JPA, Kafka, and other common frameworks. See [Recipe modules](../../user-documentation/agent-tools/prethink.md#recipe-modules) for the full breakdown.

<details>
<summary>If the search finds nothing</summary>

The marketplace sync didn't complete. The usual cause is a network that can't reach the marketplace. You can install the modules this workshop needs directly from the artifact repository instead:

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux / macOS" default>

```bash
mod config recipes jar install \
  io.moderne.recipe:rewrite-prethink \
  org.openrewrite.recipe:rewrite-static-analysis \
  org.openrewrite.recipe:rewrite-spring
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
mod config recipes jar install `
  io.moderne.recipe:rewrite-prethink `
  org.openrewrite.recipe:rewrite-static-analysis `
  org.openrewrite.recipe:rewrite-spring
```

</TabItem>
</Tabs>

Then run the search again.
</details>

### Takeaways

* The Moderne Prethink module depends on the OpenRewrite Prethink module. Installing both is the safe default.
* `mod config recipes jar install <coords>` adds a recipe module your marketplace doesn't have.

---

## Exercise 1-3: Sync repositories and build LSTs

### Goals for this exercise

* Set up a workspace directory containing a few Java/Spring repositories
* Build LSTs locally with `mod build` (the prerequisite for everything in the rest of this workshop)

### Key concepts

A [Lossless Semantic Tree (LST)](../../user-documentation/recipes/authoring-recipes/concepts/lossless-semantic-trees.md) is a type-attributed, format-preserving tree representation of your source code. Recipes, the MCP server's semantic tools, and the Trigrep search index all read from LSTs rather than raw text, which is what gives them type awareness.

You can either **download** pre-built LSTs from the Moderne Platform or **build** them locally with `mod build`. Both options work for the rest of this workshop, but a local build is the more realistic flow for your own repositories. We'll show both paths.

### Steps

#### Step 1: Create a workspace directory

<Tabs groupId="cli-install-os" queryString="os">
<TabItem value="linux-macos" label="Linux / macOS" default>

```bash
mkdir ~/agent-tools-workshop
cd ~/agent-tools-workshop
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
New-Item -ItemType Directory -Path "$HOME\agent-tools-workshop"
cd $HOME\agent-tools-workshop
```

</TabItem>
</Tabs>

This directory will hold the repositories, LSTs, search indexes, and recipe run artifacts for the rest of the workshop.

#### Step 2: Sync a small set of repositories

Use the public `Default` organization, which contains a manageable mix of Java and Spring projects:

```bash
mod git sync moderne . --organization "Default" --with-sources
```

The `--with-sources` flag clones the source code in addition to fetching pre-built LSTs. Sources are required for the apply/commit steps in [Module 3](./module-3-prethink.md).

<details>
<summary>Sample sync output</summary>

```text
● Synchronizing organization directory structure
Found 1 organization containing 11 repositories

● Downloading LSTs for repositories
  0% (1s)     ▶ awslabs/aws-saas-boost@main
  0% (1s)         ✗ Failed to download LST from http://artifactory.moderne.internal/...
  9% (1s)     ▶ apache/maven-doxia@master
  9% (1s)         ✓ Downloaded LST from https://artifactory.moderne.ninja/...
  ... (other repos)
100% (12s)    Done

Synced 11 repositories.

PARTIAL SUCCESS: mod partially succeeded with an exception
1 repository failed to sync. The exception for the failure on awslabs/aws-saas-boost@main is shown above.
```

A `PARTIAL SUCCESS` message is normal here — at the time of writing, one of the LSTs in the `Default` org is hosted on a Moderne-internal artifactory and isn't reachable from public networks. The 10 repos that did sync are enough for the workshop.

</details>

<details>
<summary>Reference: what gets synced</summary>

At the time of writing, the `Default` organization contains 11 public repositories spanning Maven, Gradle, and Spring projects:

* `apache/maven-doxia`
* `awslabs/aws-saas-boost`
* `finos/messageml-utils`
* `finos/spring-bot`
* `finos/symphony-bdk-java`
* `finos/symphony-wdk`
* `Netflix/photon`
* `Netflix/ribbon`
* `openrewrite/rewrite-recipe-bom`
* `spring-projects/spring-data-commons`
* `spring-projects/spring-petclinic`

The exact list is updated occasionally, but it's always a small enough set to build locally without consuming much disk.

If you want a different mix (for example, only Spring repositories), browse the available organizations with `mod config moderne organizations show` and substitute a different name.

</details>

:::info
Don't worry if some LST downloads fail (you may see HTTP 404/401 messages, or skipped repos in the progress output). That's expected for a few of these public repos. Anything without an LST will be rebuilt locally in Step 3, and any repo whose build also fails is silently skipped. As long as a handful succeed, you're fine.
:::

#### Step 3: Build any missing LSTs locally

Run `mod build` on the workspace to (re)build LSTs for everything you just cloned:

```bash
mod build .
```

This invokes each project's build (Maven, Gradle, etc.) and serializes the LSTs to disk. On a small workspace it usually takes a couple of minutes. If a project fails to build, the CLI keeps going and just skips that one.

:::tip
If multiple projects fail with the same root cause, run `mod trace builds analyze . --last-build` to see a dashboard of build failures, with logs and per-repo details.
:::

#### Step 4: Confirm LSTs are available

```bash
mod list .
```

Repositories without LSTs are marked with a `(no LST)` annotation, like this:

```text
  9% (1s)     ▶ awslabs/aws-saas-boost@main (no LST)
 18% (1s)     ▶ finos/messageml-utils@main
 27% (1s)     ▶ finos/spring-bot@spring-bot-master
```

As long as a handful of Java/Spring projects show up without that annotation, you're ready for the next module.

### Takeaways

* The agent tools all build on top of LSTs. Without `mod build` (or downloaded LSTs), the MCP server's semantic tools, Prethink recipes, and Trigrep indexes have nothing to read.
* You can mix and match: pre-built LSTs for repos available on the Moderne Platform and locally built LSTs for repos that aren't.
* Build failures are normal in any heterogeneous set of repositories. Don't try to fix every failure right now. Move on as long as enough repos succeed.

## Next up

In [Module 2](./module-2-install-agent-tools.md), you'll install the Moderne skills and MCP server into your AI coding agent and see what new capabilities show up.
