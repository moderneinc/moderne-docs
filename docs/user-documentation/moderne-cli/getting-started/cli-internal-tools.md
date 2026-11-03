---
sidebar_label: "Configuring the CLI to work with internal tools"
description: How to configure the Moderne CLI to integrate with internal tooling such as a custom Maven settings file or an internal recipe Artifactory.
---

# How to configure the Moderne CLI to work with internal tools

This guide covers configuring the Moderne CLI to integrate with internal tooling at your organization. It assumes you already have the CLI installed.

:::info
If you're starting from scratch in an environment that installs the CLI from an internal artifact repository (typical for DX and many Enterprise deployments), first install the CLI by following the [deploying the CLI from an internal artifact repository](./cli-internal-mirror.md) guide. Once installed, return here to wire up the other internal integrations you need.
:::

## Pointing the CLI at a custom Maven settings file

If your Maven settings file is not in the default location (`~/.m2/settings.xml`), tell the CLI where it lives:

```bash
mod config build maven settings edit /path/to/maven/settings/file
```

The CLI uses this settings file to download dependencies and look up versions as needed. A custom settings file commonly exists on developer machines for redirecting Maven Central requests to an internal artifact instance.

## Controlling Maven Central

The CLI resolves Maven dependencies the way Maven does. It checks the repositories in your `settings.xml`, your POMs, and their parents first. It uses Maven Central only when none of them has the artifact.

When you build an LST, the CLI saves your settings, mirrors, and active profiles with it. A later recipe run uses that same setup. This matches running the recipe on your machine with those settings. Keep your LST build settings the same as your CI build settings.

To keep Maven Central out of resolution, add a mirror for it to your `settings.xml`:

```xml
<mirror>
  <id>internal</id>
  <url>https://artifacts.example.com/maven</url>
  <mirrorOf>central,sonatype-central</mirrorOf>
</mirror>
```

You can also redeclare or disable `central` in your POM, which works for that project. Listing `sonatype-central` also redirects the snapshots repository the CLI checks for recipes.

:::note
The `mod config features no-maven-central` command no longer has any effect. Use a mirror instead.
:::

## Pointing the CLI at an internal Artifactory for recipes

If you have an internal Artifactory instance where you store recipes, direct the CLI to it:

```bash
mod config recipes artifacts artifactory edit
```

The command will prompt you for the connection details interactively.

## Pointing the CLI at the Code Genome Project for recipes

New recipe releases are published to the Code Genome Project rather than Maven Central. Because the CLI resolves recipes from Maven Central by default, if you don't have an internal mirror in front of it you'll resolve stale releases. To pull the latest recipes directly, add the Code Genome Project as a recipe artifact repository, authenticating with your credentials (the token is the password):

```bash
mod config recipes artifacts maven add https://artifacts.codegenomeproject.org/maven --user <username> --password <token>
```

See [Accessing the Code Genome Project](../../recipes/accessing-the-code-genome-project.md) for how to get credentials. If your organization already mirrors the Code Genome Project in an internal Artifactory or Nexus, you don't need this command - keep resolving through your internal repository.
