---
sidebar_label: "Configuring the CLI to work with internal tools"
description: How to configure the Moderne CLI to integrate with internal tooling such as a custom Maven settings file or an internal recipe Artifactory.
---

# How to configure the Moderne CLI to work with internal tools

This guide covers configuring the Moderne CLI to integrate with internal tooling at your organization. It assumes you already have the CLI installed.

:::info
If you're starting from scratch in an environment that cannot reach Maven Central directly (typical for DX and many Enterprise deployments), first install the CLI by following the [deploying the CLI from an internal Maven Central mirror](./cli-internal-mirror.md) guide. Once installed, return here to wire up the other internal integrations you need.
:::

## Pointing the CLI at a custom Maven settings file

If your Maven settings file is not in the default location (`~/.m2/settings.xml`), tell the CLI where it lives:

```bash
mod config build maven settings edit /path/to/maven/settings/file
```

The CLI uses this settings file to download dependencies and look up versions as needed. A custom settings file commonly exists on developer machines for redirecting Maven Central requests to an internal artifact instance.

## Pointing the CLI at an internal Artifactory for recipes

If you have an internal Artifactory instance where you store recipes, direct the CLI to it:

```bash
mod config recipes artifacts artifactory edit
```

The command will prompt you for the connection details interactively.
