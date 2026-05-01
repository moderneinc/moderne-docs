---
sidebar_label: "Module 1: CLI and LSTs"
description: Install the Moderne CLI, install the Prethink recipe modules, and build LSTs for a working set of Java and Spring projects.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Module 1: CLI and LSTs

In this module, you'll set up everything the agent tools depend on: the Moderne CLI, a couple of recipe JARs (including `io.moderne.recipe:rewrite-prethink`), and Lossless Semantic Trees (LSTs) for a small working set of Java and Spring repositories. The later modules build on top of this setup, so don't skip ahead until your LSTs build cleanly.

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

Alternatively, you can install via a package manager:

* **Homebrew** (macOS/Linux): `brew install moderneinc/moderne/mod`
* **Chocolatey** (Windows): `choco install mod --prerelease`

For more installation options, including Enterprise and Moderne DX setups, see [Getting started with the Moderne CLI](../../user-documentation/moderne-cli/getting-started/cli-intro.md#installation-and-configuration).

Verify the install:

```bash
mod --version
```

#### Step 2: Connect the CLI to Moderne

Point the CLI at the public Moderne tenant and log in:

```bash
mod config moderne edit https://app.moderne.io
mod config moderne login
```

The login command opens a browser, asks you to grant the CLI access to your account, and stores a token locally that's valid for 365 days. If you're running on an Enterprise tenant, replace the URL with your tenant's hostname.

:::tip
On corporate networks behind a proxy or with restricted Maven Central access, see [Using the CLI with internal tools and artifact repositories](../../user-documentation/moderne-cli/getting-started/cli-internal-tools.md) before continuing.
:::

### Takeaways

* The Moderne CLI is the entry point for everything in this workshop. Skills, the MCP server, Prethink, and Trigrep all run through `mod`.
* You only need to authenticate once. The CLI caches your token across terminal sessions.

---

## Exercise 1-2: Install the recipe modules

### Goals for this exercise

* Install the recipe JARs needed for Prethink and the rest of this workshop
* Understand the difference between `mod config recipes jar install` and a full catalog sync

### Steps

#### Step 1: Install the workshop recipe JARs

Instead of syncing the entire recipe catalog, install just the JARs you need:

```bash
mod config recipes jar install \
  org.openrewrite.recipe:rewrite-prethink \
  io.moderne.recipe:rewrite-prethink \
  org.openrewrite.recipe:rewrite-static-analysis \
  org.openrewrite.recipe:rewrite-spring
```

The two `rewrite-prethink` artifacts are the focus of this workshop: the `org.openrewrite.recipe` module is the open-source building blocks, and `io.moderne.recipe:rewrite-prethink` adds pre-configured discovery for Spring, JPA, Kafka, and other common frameworks. See [Recipe modules](../../user-documentation/agent-tools/prethink.md#recipe-modules) for the full breakdown.

The other two JARs are useful warm-up recipes you'll touch later when verifying everything works.

:::tip
If you'd rather have the entire catalog available, run `mod config recipes moderne sync` instead. That takes a few minutes and downloads every recipe Moderne ships.
:::

#### Step 2: Confirm the recipes are installed

Search for one of the Prethink recipes to confirm it resolved:

```bash
mod config recipes search UpdatePrethinkContext
```

You should see at least the `io.moderne.prethink.UpdatePrethinkContextNoAiStarter` and `io.moderne.prethink.UpdatePrethinkContextStarter` recipes listed.

### Takeaways

* `mod config recipes jar install <coords>` is a fast way to grab a known recipe pack without syncing the full catalog.
* The Moderne Prethink module depends on the OpenRewrite Prethink module. Installing both is the safe default.

---

## Exercise 1-3: Sync repositories and build LSTs

### Goals for this exercise

* Set up a workspace directory containing a few Java/Spring repositories
* Build LSTs locally with `mod build` (the prerequisite for everything in the rest of this workshop)

### Key concepts

A [Lossless Semantic Tree (LST)](../../administrator-documentation/moderne-platform/references/lossless-semantic-trees.md) is a type-attributed, format-preserving tree representation of your source code. Recipes, the MCP server's semantic tools, and the Trigrep search index all read from LSTs rather than raw text, which is what gives them type awareness.

You can either **download** pre-built LSTs from the Moderne Platform or **build** them locally with `mod build`. Both options work for the rest of this workshop, but a local build is the more realistic flow for your own repositories. We'll show both paths.

### Steps

#### Step 1: Create a workspace directory

```bash
mkdir ~/agent-tools-workshop
cd ~/agent-tools-workshop
```

This directory will hold the repositories, LSTs, search indexes, and recipe run artifacts for the rest of the workshop.

#### Step 2: Sync a small set of repositories

Use the public `Default` organization, which contains a manageable mix of Java and Spring projects:

```bash
mod git sync moderne . --organization "Default" --with-sources
```

The `--with-sources` flag clones the source code in addition to fetching pre-built LSTs. Sources are required for the apply/commit steps in [Module 3](./module-3-prethink.md).

<details>
<summary>Reference: what gets synced</summary>

The `Default` organization includes public repositories like `spring-projects/spring-petclinic`, `Netflix/photon`, `finos/messageml-utils`, and a handful of others. The exact list is updated occasionally, but it's always a small enough set to build locally without consuming much disk.

If you want a different mix (for example, only Spring repositories), browse the available organizations with `mod config moderne organizations show` and substitute a different name.

</details>

:::info
If a few LST downloads fail with HTTP 404 or 401, that's expected for some open-source repos. As long as most synced successfully, you can continue. Repositories without LSTs will be rebuilt locally in Step 3.
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

Repositories without LSTs will be marked with a `(no LST)` annotation. As long as a handful of Java/Spring projects show up clean (no annotation), you're ready for the next module.

### Takeaways

* The agent tools all build on top of LSTs. Without `mod build` (or downloaded LSTs), the MCP server's semantic tools, Prethink recipes, and Trigrep indexes have nothing to read.
* You can mix and match: pre-built LSTs for repos available on the Moderne Platform and locally built LSTs for repos that aren't.
* Build failures are normal in any heterogeneous set of repositories. Don't try to fix every failure right now. Move on as long as enough repos succeed.

## Next up

In [Module 2](./module-2-install-agent-tools.md), you'll install the Moderne skills and MCP server into your AI coding agent and see what new capabilities show up.
