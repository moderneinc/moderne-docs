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

To resolve a Maven dependency, the CLI lists repositories in this order:

* The repositories in your `settings.xml`.
* The repositories in your POMs and their parents.
* Maven Central.

If your settings or POMs declare a repository with the ID `central`, the CLI uses that one. It does not add Maven Central. Version lookups, such as finding the latest release, ask every repository and combine the answers.

Set your settings file with `mod config build maven settings edit`. Without one, the CLI reads `~/.m2/settings.xml` and the settings in your Maven installation.

For Maven projects, `mod build` saves your settings and active profiles in the LST. It leaves out your `<servers>` credentials. When you run a recipe, the CLI reads your settings again. Maven recipes that look up versions use both the saved and the current settings.

To keep Maven Central out, add a mirror for it to your `settings.xml`:

```xml
<mirror>
  <id>internal</id>
  <url>https://artifacts.example.com/maven</url>
  <mirrorOf>central,sonatype-central</mirrorOf>
</mirror>
```

Listing `sonatype-central` also redirects the snapshots repository the CLI adds to install recipes.

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
