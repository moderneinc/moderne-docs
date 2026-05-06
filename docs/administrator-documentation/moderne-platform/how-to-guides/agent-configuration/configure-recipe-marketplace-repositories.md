---
sidebar_label: Recipe marketplace repositories
description: How to configure the Moderne Connector to retrieve recipe artifacts from Maven, NPM, NuGet, and PyPI repositories.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configuring-artifactory-with-recipes" />

# Configure a Connector with recipe marketplace repositories

This guide explains how to point the Moderne Connector at one or more package registries (Maven, NPM, NuGet, and PyPI) so that recipe artifacts published to those registries become available for [deployment to Moderne](../importing-external-recipes.md).

## Configuring the Moderne Connector

Recipe marketplace repositories are configured under the `moderne.recipe.marketplace.repositories` namespace. You can configure multiple repositories of each type by including multiple entries, each with a different `{index}`.

The variables/arguments in the tables below must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./agent-config.md).

:::info Defaults and override behavior
If no Maven recipe marketplace repositories are configured, the Moderne Platform falls back to Maven Central (`https://repo.maven.apache.org/maven2`, releases only) and Sonatype snapshots (`https://central.sonatype.com/repository/maven-snapshots/`, snapshots only). Once you configure one or more Maven repositories below, only those are searched — the defaults are not merged in, so you will need to list Maven Central and Sonatype snapshots explicitly to keep them. PyPI, NuGet, and NPM have no defaults.
:::

## Maven

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                      | Required | Default | Description                                                                                                                                                                 |
|--------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_URI`        | `true`   |         | The URL of your Maven repository.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_USERNAME`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_PASSWORD`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_PROXY_HOST` | `false`  | `null`  | The host of an HTTP proxy used to reach this repository.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_PROXY_PORT` | `false`  | `null`  | The port of an HTTP proxy used to reach this repository.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_SKIPSSL`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_RELEASES`   | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_{index}_SNAPSHOTS`  | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_MAVEN_0_PASSWORD=password \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                         | Required | Default | Description                                                                                                                                                                 |
|-----------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.maven[{index}].uri`        | `true`   |         | The URL of your Maven repository.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.maven[{index}].username`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `--moderne.recipe.marketplace.repositories.maven[{index}].password`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `--moderne.recipe.marketplace.repositories.maven[{index}].proxy.host` | `false`  | `null`  | The host of an HTTP proxy used to reach this repository.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.maven[{index}].proxy.port` | `false`  | `null`  | The port of an HTTP proxy used to reach this repository.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.maven[{index}].skipSsl`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.recipe.marketplace.repositories.maven[{index}].releases`   | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `--moderne.recipe.marketplace.repositories.maven[{index}].snapshots`  | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.recipe.marketplace.repositories.maven[0].username=admin \
--moderne.recipe.marketplace.repositories.maven[0].password=password \
# ... Additional arguments
```

</TabItem>
</Tabs>

## NPM

NPM repositories support either basic authentication (`username` + `password`) or bearer token authentication (`bearerToken`), but not both at the same time.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                     | Required | Default | Description                                                                                                                                                             |
|-------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_URI`         | `true`   |         | The URL of your NPM registry.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_USERNAME`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                          |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_PASSWORD`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                          |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_BEARERTOKEN` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `USERNAME`/`PASSWORD`.                                                                                |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_PROXY_HOST`  | `false`  | `null`  | The host of an HTTP proxy used to reach this registry.                                                                                                                  |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_PROXY_PORT`  | `false`  | `null`  | The port of an HTTP proxy used to reach this registry.                                                                                                                  |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_{index}_SKIPSSL`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NPM registry. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_0_URI=https://myartifactory.example.com/artifactory/api/npm/npm-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NPM_0_BEARERTOKEN=... \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                        | Required | Default | Description                                                                                                                                                             |
|----------------------------------------------------------------------|----------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.npm[{index}].bearerToken` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `username`/`password`.                                                                                |
| `--moderne.recipe.marketplace.repositories.npm[{index}].proxy.host`  | `false`  | `null`  | The host of an HTTP proxy used to reach this registry.                                                                                                                  |
| `--moderne.recipe.marketplace.repositories.npm[{index}].password`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                          |
| `--moderne.recipe.marketplace.repositories.npm[{index}].proxy.port`  | `false`  | `null`  | The port of an HTTP proxy used to reach this registry.                                                                                                                  |
| `--moderne.recipe.marketplace.repositories.npm[{index}].uri`         | `true`   |         | The URL of your NPM registry.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.npm[{index}].username`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                          |
| `--moderne.recipe.marketplace.repositories.npm[{index}].skipSsl`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NPM registry. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.npm[0].uri=https://myartifactory.example.com/artifactory/api/npm/npm-local \
--moderne.recipe.marketplace.repositories.npm[0].bearerToken=... \
# ... Additional arguments
```

</TabItem>
</Tabs>

## NuGet

NuGet repositories support either basic authentication (`username` + `password`) or bearer token authentication (`bearerToken`), but not both at the same time.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                       | Required | Default | Description                                                                                                                                                           |
|---------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_URI`         | `true`   |         | The URL of your NuGet feed.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_USERNAME`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                        |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_PASSWORD`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `BEARERTOKEN`.                                                                                        |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_BEARERTOKEN` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `USERNAME`/`PASSWORD`.                                                                              |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_PROXY_HOST`  | `false`  | `null`  | The host of an HTTP proxy used to reach this feed.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_PROXY_PORT`  | `false`  | `null`  | The port of an HTTP proxy used to reach this feed.                                                                                                                    |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_{index}_SKIPSSL`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NuGet feed. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_0_URI=https://myartifactory.example.com/artifactory/api/nuget/nuget-local \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_NUGET_0_BEARERTOKEN=... \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                          | Required | Default | Description                                                                                                                                                           |
|------------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.nuget[{index}].uri`         | `true`   |         | The URL of your NuGet feed.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].username`    | `false`  | `null`  | The username used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                        |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].password`    | `false`  | `null`  | The password used to resolve artifacts. Mutually exclusive with `bearerToken`.                                                                                        |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].bearerToken` | `false`  | `null`  | A bearer token used to resolve artifacts. Mutually exclusive with `username`/`password`.                                                                              |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].proxy.host`  | `false`  | `null`  | The host of an HTTP proxy used to reach this feed.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].proxy.port`  | `false`  | `null`  | The port of an HTTP proxy used to reach this feed.                                                                                                                    |
| `--moderne.recipe.marketplace.repositories.nuget[{index}].skipSsl`     | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this NuGet feed. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.nuget[0].uri=https://myartifactory.example.com/artifactory/api/nuget/nuget-local \
--moderne.recipe.marketplace.repositories.nuget[0].bearerToken=... \
# ... Additional arguments
```

</TabItem>
</Tabs>

## PyPI

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                     | Required | Default | Description                                                                                                                                                           |
|-------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_URI`        | `true`   |         | The URL of your PyPI index.                                                                                                                                           |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_USERNAME`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                               |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_PASSWORD`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                               |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_PROXY_HOST` | `false`  | `null`  | The host of an HTTP proxy used to reach this index.                                                                                                                   |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_PROXY_PORT` | `false`  | `null`  | The port of an HTTP proxy used to reach this index.                                                                                                                   |
| `MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_{index}_SKIPSSL`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this PyPI index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_URI=https://myartifactory.example.com/artifactory/api/pypi/pypi-local/simple \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_USERNAME=admin \
-e MODERNE_RECIPE_MARKETPLACE_REPOSITORIES_PYPI_0_PASSWORD=password \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                        | Required | Default | Description                                                                                                                                                           |
|----------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.recipe.marketplace.repositories.pypi[{index}].uri`        | `true`   |         | The URL of your PyPI index.                                                                                                                                           |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].username`   | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                               |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].password`   | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                               |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].proxy.host` | `false`  | `null`  | The host of an HTTP proxy used to reach this index.                                                                                                                   |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].proxy.port` | `false`  | `null`  | The port of an HTTP proxy used to reach this index.                                                                                                                   |
| `--moderne.recipe.marketplace.repositories.pypi[{index}].skipSsl`    | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this PyPI index. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.recipe.marketplace.repositories.pypi[0].uri=https://myartifactory.example.com/artifactory/api/pypi/pypi-local/simple \
--moderne.recipe.marketplace.repositories.pypi[0].username=admin \
--moderne.recipe.marketplace.repositories.pypi[0].password=password \
# ... Additional arguments
```

</TabItem>
</Tabs>
