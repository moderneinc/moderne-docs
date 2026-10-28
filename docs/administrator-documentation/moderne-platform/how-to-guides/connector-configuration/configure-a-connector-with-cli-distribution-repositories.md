---
title: Configure a Connector with CLI distribution repositories
sidebar_label: CLI distribution repositories
description: How to configure the Moderne Connector so the CLI installer served by your tenant downloads the Moderne CLI from your own artifact repository.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure a Connector with CLI distribution repositories

Developers install the Moderne CLI by running the install script your tenant serves at `https://<TENANT>.moderne.io/cli` (or `/cli/windows` on Windows). By default, the wrapper it installs downloads each CLI release through your tenant from the [Code Genome Project](../../../../user-documentation/recipes/accessing-the-code-genome-project.md) - so developers pick up new releases as soon as they are published.

That default does not suit every organization. Your policy may require every artifact on developer machines to come from an internal repository, or you may want to approve each CLI release before developers receive it.

This guide shows you how to point the install script at your own Artifactory or Nexus repository instead, so that developers only receive the releases you have published there.

## Prerequisites

This guide assumes that:

* You are running Moderne Connector version `0.151.215` or later.
* You have a Maven repository that holds Moderne CLI `4.9.0` or later.
  * The simplest option is a remote repository that proxies `https://artifacts.codegenomeproject.org/maven`. If you want to publish releases to a repository of your own instead, please expand the below section for details about what it needs to have.

<details>
<summary>What your own repository must hold</summary>

The install script and the wrapper download the following artifacts from your repository. Your repository must have each of these artifacts for every CLI version you publish:

* `io/moderne/moderne-cli/maven-metadata.xml`, which the install script and the wrapper read to resolve `RELEASE`.
* The wrapper scripts, published as `io.moderne:moderne-cli` with the `modw` classifier: `moderne-cli-<version>-modw.sh` and `moderne-cli-<version>-modw.cmd`.
* The CLI distribution for each platform your developers use, published under `io.moderne` as `moderne-cli-linux-x64`, `moderne-cli-linux-aarch64`, `moderne-cli-osx`, and `moderne-cli-windows`.

</details>

## Connector configuration

The following table contains the variables/arguments needed to configure CLI distribution repositories for your Moderne Connector. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./connector-config.md).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                            | Required | Default | Description                                                                                                                                                                       |
|------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_CLI_DISTRIBUTIONURL`            | `false`  | `null`  | Root URL of the Maven repository that the CLI installer and wrapper download releases from. `RELEASE` resolves to the newest release in this repository.                         |
| `MODERNE_CLI_DISTRIBUTIONURLEARLYACCESS` | `false`  | `null`  | Root URL of the Maven repository used to resolve and download `LATEST` and snapshot versions. If unset, the install script uses `MODERNE_CLI_DISTRIBUTIONURL` for `LATEST` as well. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_CLI_DISTRIBUTIONURL="https://artifactory.example.com/artifactory/moderne-cli-approved" \
-e MODERNE_CLI_DISTRIBUTIONURLEARLYACCESS="https://artifactory.example.com/artifactory/codegenome-remote" \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                    | Required | Default | Description                                                                                                                                                                                         |
|--------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.cli.distribution-url`                 | `false`  | `null`  | Root URL of the Maven repository that the CLI installer and wrapper download releases from. `RELEASE` resolves to the newest release in this repository.                                           |
| `--moderne.cli.distribution-url-early-access`    | `false`  | `null`  | Root URL of the Maven repository used to resolve and download `LATEST` and snapshot versions. If unset, the install script uses `--moderne.cli.distribution-url` for `LATEST` as well.             |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.cli.distribution-url="https://artifactory.example.com/artifactory/moderne-cli-approved" \
--moderne.cli.distribution-url-early-access="https://artifactory.example.com/artifactory/codegenome-remote" \
# ... Additional arguments
```
</TabItem>

</Tabs>

Each value must be the `http` or `https` root of a Maven repository. This is the same URL you would use as a repository in a Maven `settings.xml`. Do not include credentials or a query string, and do not use a wrapper URL template with placeholders such as `${version}`. The Connector will not start if a value is invalid.

## What developers will see

Developers will install the CLI the same way as before - by running the script from `https://<TENANT>.moderne.io/cli` or `/cli/windows`. The install script writes the repository URLs you configured on the Connector into the developer's `~/.moderne/cli/dist/moderne-wrapper.properties` file (as `distributionUrl` and `distributionUrlEarlyAccess`).

From then on, the wrapper will download the CLI from your repository - and the developer will only receive a new version of the CLI when you have published one to said repository.

If your repository requires authentication, developers will need to supply their credentials when they run the install script. They can do that through the `MODERNE_WRAPPER_DISTRIBUTION_TOKEN` or the `MODERNE_WRAPPER_DISTRIBUTION_USERNAME` and `MODERNE_WRAPPER_DISTRIBUTION_PASSWORD` environment variables:

```bash
export MODERNE_WRAPPER_DISTRIBUTION_USERNAME="your-username"
export MODERNE_WRAPPER_DISTRIBUTION_PASSWORD="your-password"
curl https://<TENANT>.moderne.io/cli | bash
```

See [authenticated artifact repositories](../../../../user-documentation/moderne-cli/how-to-guides/cli-wrapper.md#authenticated-artifact-repositories) for the full list of options.

## Important notes

* The settings only apply to new installs. Existing installs keep their current wrapper configuration until the developer re-runs the install script. Installs made before CLI `4.9.0` also keep checking the Code Genome Project for new releases until then.
* If several Connectors are connected to your tenant, the install script takes both settings from the first Connector that sets either of them.
* The install script is served without authentication, so anyone who can reach your tenant's `/cli` endpoint can see the repository URLs you configure.
