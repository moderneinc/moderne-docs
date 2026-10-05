---
title: Configure a Connector with CLI distribution repositories
sidebar_label: CLI distribution repositories
description: How to configure the Moderne Connector so the CLI installer served by your tenant downloads the Moderne CLI from your own artifact repository.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure a Connector with CLI distribution repositories

Developers install the Moderne CLI with the install script your tenant serves at `https://<TENANT>.moderne.io/cli` (or `/cli/windows` for PowerShell). By default, the script and the installed wrapper download the CLI through your tenant at `https://api.<TENANT>.moderne.io/cli/jar`, which fetches it from the [Code Genome Project](../../../../user-documentation/recipes/accessing-the-code-genome-project.md). For installs made with this script since CLI 4.9.0, developer machines therefore only need to reach your tenant, and they follow the newest CLI release as soon as it is published.

This guide shows you how to point the install script at your own Artifactory or Nexus repository instead, for organizations that need the CLI to come from their own repository rather than through the tenant.

## Why configure CLI distribution repositories?

Organizations may want to serve the CLI from their own artifact repository for several reasons:

* **Artifact policy**: Your security policy may require every artifact installed on developer machines to come from an internal repository
* **Release approval**: You may want developers to receive a new CLI release only after it has been approved and synced into a curated repository
* **Early access**: You may want a separate repository, such as a proxy of the Code Genome Project, for developers who opt into newer versions

## Prerequisites

This guide assumes that:

* You are running Moderne Connector version 0.151.215 or later.
* Your repository is a standard Maven repository that holds `io.moderne:moderne-cli` (including its `maven-metadata.xml` and the `modw.sh` and `modw.cmd` wrapper files) and the platform distributions your developers use: `moderne-cli-linux-x64`, `moderne-cli-linux-aarch64`, `moderne-cli-osx`, and `moderne-cli-windows`. A remote repository that proxies `https://artifacts.codegenomeproject.org/maven` covers all of them.
* Your repository holds Moderne CLI version 4.9.0 or later. The install script downloads the wrapper at the newest release your repository holds, and wrappers older than 4.9.0 cannot use a repository root as their distribution URL.

## Connector configuration

The following table contains the variables/arguments needed to configure CLI distribution repositories for your Moderne Connector. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./connector-config.md).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                            | Required | Default | Description                                                                                                                                                                       |
|------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_CLI_DISTRIBUTIONURL`            | `false`  | `null`  | Root URL of the Maven repository that the CLI installer and wrapper download releases from. `RELEASE` resolves to the newest release in this repository.                         |
| `MODERNE_CLI_DISTRIBUTIONURLEARLYACCESS` | `false`  | `null`  | Root URL of the Maven repository used to resolve and download `LATEST` and snapshot versions. When it is not set, developers who opt into `LATEST` resolve it against `MODERNE_CLI_DISTRIBUTIONURL`. |

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
| `--moderne.cli.distribution-url-early-access`    | `false`  | `null`  | Root URL of the Maven repository used to resolve and download `LATEST` and snapshot versions. When it is not set, developers who opt into `LATEST` resolve it against `--moderne.cli.distribution-url`. |

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

Each value must be the `http` or `https` root of a Maven repository, the same URL you would use as a repository in a Maven `settings.xml`. Credentials, query strings, and wrapper URL templates containing placeholders such as `${version}` are rejected, and the Connector will not start with an invalid value.

## What developers will see

Once the Connector is connected with these settings:

1. The script served at `https://<TENANT>.moderne.io/cli` and `https://<TENANT>.moderne.io/cli/windows` downloads the wrapper from your repository instead of from your tenant.
2. The script records your repositories in `~/.moderne/cli/dist/moderne-wrapper.properties` as `distributionUrl` and `distributionUrlEarlyAccess`.
3. From then on, the wrapper resolves `RELEASE` against your repository and downloads the CLI from it. A developer only moves to a new CLI version once that version is available in your repository.

If your repository requires authentication, developers supply their credentials when they run the install script, through the `MODERNE_WRAPPER_DISTRIBUTION_TOKEN` or the `MODERNE_WRAPPER_DISTRIBUTION_USERNAME` and `MODERNE_WRAPPER_DISTRIBUTION_PASSWORD` environment variables:

```bash
export MODERNE_WRAPPER_DISTRIBUTION_USERNAME="your-username"
export MODERNE_WRAPPER_DISTRIBUTION_PASSWORD="your-password"
curl https://<TENANT>.moderne.io/cli | bash
```

See [authenticated artifact repositories](../../../../user-documentation/moderne-cli/how-to-guides/cli-wrapper.md#authenticated-artifact-repositories) for the full list of options.

## Important notes

* Installs made with the script before CLI 4.9.0 recorded a URL template as their `distributionUrl`, so their wrapper still checks the Code Genome Project directly for new releases. Developers can re-run the install script to switch to the tenant or to your repository.
* The settings only apply to new installs. Developers who installed the CLI before the change keep their existing wrapper properties until they re-run the install script, or until they run `mod wrapper --global --distribution-url <repository-root>`.
* The two settings are applied together. If several Connectors are connected to your tenant, the install script uses the settings of the first Connector that sets either of them, and never mixes one Connector's release repository with another Connector's early-access repository.
* The install script is served without authentication, so anyone who can reach your tenant's `/cli` endpoint can see the repository URLs you configure.
