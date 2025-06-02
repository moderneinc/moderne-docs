---
sidebar_label: All DX variables
description: A reference manual that contains all Moderne DX configuration variables.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# All DX configuration variables

This document includes all of the variables you can configure the Moderne agent to run with. Your configuration will only use some of these.

## Maven repository access variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                 | Required | Default            | Description                                                                                                                                                           |
|-----------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_MAVEN_{index}_URL`             | `true`   |                    | The URL of your Maven repository.                                                                                                                                     |
| `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` | `true`   | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` configured. |
| `MODERNE_DX_MAVEN_{index}_ASTSOURCE`       | `false`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. (Note: LSTs used to be called ASTs).                                                    |
| `MODERNE_DX_MAVEN_{index}_USERNAME`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `MODERNE_DX_MAVEN_{index}_PASSWORD`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `MODERNE_DX_MAVEN_{index}_RELEASES`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `MODERNE_DX_MAVEN_{index}_SNAPSHOTS`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `MODERNE_DX_MAVEN_{index}_RECIPESOURCE`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `MODERNE_DX_MAVEN_{index}_SKIPSSL`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_DX_MAVEN_{index}_SKIPVALIDATECONNECTIVITY` | `false` | `false` | By default, on DX startup, we validate that it can connect to the configured resource, and fail to start up the DX if we cannot. Set this to `true` to skip this validation. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                    | Required | Default            | Description                                                                                                                                                           |
|--------------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.maven[{index}].url`             | `true`   |                    | The URL of your Maven repository.                                                                                                                                     |
| `--moderne.dx.maven[{index}].localRepository` | `true`   | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different `--moderne.dx.maven[{index}].localRepository` configured. |
| `--moderne.agent.maven[{index}].astSource`       | `false`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. (Note: LSTs used to be called ASTs).                                                    |
| `--moderne.dx.maven[{index}].username`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `--moderne.dx.maven[{index}].password`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `--moderne.dx.maven[{index}].releases`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `--moderne.dx.maven[{index}].snapshots`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `--moderne.dx.maven[{index}].recipeSource`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `--moderne.dx.maven[{index}].skipSsl`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.dx.maven[{index}].skipValidateConnectivity` | `false` | `false` | By default, on DX startup, we validate that it can connect to the configured resource, and fail to start up the DX if we cannot. Set this to `true` to skip this validation. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Artifactory LST variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                             | Required | Default                                | Description                                                                                                                                                                                                                      |
|-----------------------------------------------------------|----------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_STORAGE_ENABLED`                              | `true`   | `false`                                | Enables persistent storage for the LST index.                                                                                                                                                                                    |
| `MODERNE_DX_STORAGE_PATH`                                 | `true`   | `<dx configuration directory>/storage` | The path of the LST index directory on the container or local disk. (`<dx configuration directory>`refers to the location where all configuration for DX lives, including the recipe catalog, tokens, etc. It's not configurable. |
| `MODERNE_DX_ARTIFACTORY_{index}_URL`                      | `true`   |                                        | The URL of your Artifactory instance.                                                                                                                                                                                            |
| `MODERNE_DX_ARTIFACTORY_{index}_USERNAME`                 | `true`   |                                        | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                                                                                                    |
| `MODERNE_DX_ARTIFACTORY_{index}_PASSWORD`                 | `true`   |                                        | The password used to connect to your Artifactory instance.                                                                                                                                                                       |
| `MODERNE_DX_ARTIFACTORY_{index}_ASTQUERYFILTERS_{index}`  | `true`   |                                        | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`.                                                                                     |
| `MODERNE_DX_ARTIFACTORY_{index}_SKIPSSL`                  | `false`  | `false`                                | Specifies whether or not to skip SSL verification for HTTP connections from the service to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                   |
| `MODERNE_DX_ARTIFACTORY_{index}_SKIPVALIDATECONNECTIVITY` | `false`  | `false`                                | By default, on DX startup, we validate that it can connect to the configured resource, and fail to start up the DX if we cannot. Set this to_ `true` _to skip this validation.                                                    |
| `MODERNE_DX_ARTIFACTSYNC_SINCE`                           | `false`  |                                        | Specifies how long in the past to sync your artifacts. Defaults to syncing all time. It is recommended to set a start date of the sync or it will try to search your entire artifactory.                                         |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_STORAGE_ENABLED=true \
-e MODERNE_DX_STORAGE_PATH=/some/storage/path \
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_ARTIFACTSYNC_SINCE=2024-01-01T00:00:00Z
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                             | Required | Default                                | Description                                                                                                                                                                                                                      |
|-----------------------------------------------------------|----------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.storage.enabled`                              | `true`   | `false`                                | Enables persistent storage for the LST index.                                                                                                                                                                                    |
| `--moderne.dx.storage.path`                                 | `true`   | `<dx configuration directory>/storage` | The path of the LST index directory on the container or local disk. (`<dx configuration directory>`refers to the location where all configuration for DX lives, including the recipe catalog, tokens, etc. It's not configurable. |
| `--moderne.dx.artifactory[{index}].url`                      | `true`   |                                        | The URL of your Artifactory instance.                                                                                                                                                                                            |
| `--moderne.dx.artifactory[{index}].username`                 | `true`   |                                        | The username used to connect to your Artifactory instance. This user must have permission to run AQL queries.                                                                                                                    |
| `--moderne.dx.artifactory[{index}].password`                 | `true`   |                                        | The password used to connect to your Artifactory instance.                                                                                                                                                                       |
| `--moderne.dx.artifactory[{index}].astQueryFilters[{index}]`  | `true`   |                                        | The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`.                                                                                     |
| `--moderne.dx.artifactory[{index}].skipSsl`                  | `false`  | `false`                                | Specifies whether or not to skip SSL verification for HTTP connections from the service to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate.                                   |
| `--moderne.dx.artifactory[{index}].skipValidateConnectivity` | `false`  | `false`                                | By default, on DX startup, we validate that it can connect to the configured resource, and fail to start up the DX if we cannot. Set this to_ `true` _to skip this validation.                                                    |
| `--moderne.dx.artifactSync.since`                           | `false`  |                                        | Specifies how long in the past to sync your artifacts. Defaults to syncing all time. It is recommended to set a start date of the sync or it will try to search your entire artifactory.                                         |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.storage.enabled=true \
---moderne.dx.storage.path=/some/storage/path \
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].username=admin \
--moderne.dx.artifactory[0].password=password \
--moderne.dx.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.dx.artifactSync.since=2024-01-01T00:00:00Z \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Artifactory recipe variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                 | Required | Default            | Description                                                                                                                                                           |
|-----------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_MAVEN_{index}_URL`             | `true`   |                    | The URL of your Maven repository inside of Artifactory.                                                                                                                                     |
| `MODERNE_DX_MAVEN_{index}_ASTSOURCE`       | `true`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` – but you should set this to `false` (Note: LSTs used to be called ASTs).                                                    |
| `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` | `true`   | `~/.moderne-maven` | The path on disk where Maven index files will be downloaded to. This is on the disk where the service is being run and **not** in Artifactory. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` configured. |
| `MODERNE_DX_MAVEN_{index}_USERNAME`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `MODERNE_DX_MAVEN_{index}_PASSWORD`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `MODERNE_DX_MAVEN_{index}_RELEASES`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `MODERNE_DX_MAVEN_{index}_SNAPSHOTS`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `MODERNE_DX_MAVEN_{index}_RECIPESOURCE`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `MODERNE_DX_MAVEN_{index}_SKIPSSL`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_DX_MAVEN_{index}_SKIPVALIDATECONNECTIVITY` | `false` | `false` | By default, on DX startup, we validate that it can connect to the configured resource, and fail to start up the DX if we cannot. Set this to `true` to skip this validation. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_ASTSOURCE=false \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                 | Required | Default            | Description                                                                                                                                                           |
|-----------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.maven[{index}].url`             | `true`   |                    | The URL of your Maven repository inside of Artifactory.                                                                                                                                     |
| `--moderne.dx.maven[{index}].astSource`       | `true`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` – but you should set this to `false` (Note: LSTs used to be called ASTs).                                                    |
| `--moderne.dx.maven[{index}].localRepository` | `true`   | `~/.moderne-maven` | The path on disk where Maven index files will be downloaded to. This is on the disk where the service is being run and **not** in Artifactory. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` configured. |
| `--moderne.dx.maven[{index}].username`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `--moderne.dx.maven[{index}].password`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `--moderne.dx.maven[{index}].releases`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `--moderne.dx.maven[{index}].snapshots`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `--moderne.dx.maven[{index}].recipeSource`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `--moderne.dx.maven[{index}].skipSsl`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.dx.maven[{index}].skipValidateConnectivity` | `false` | `false` | By default, on DX startup, we validate that it can connect to the configured resource, and fail to start up the DX if we cannot. Set this to `true` to skip this validation. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].astSource=false \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>

## On-prem SCM variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                | Required | Default | Description                                                                                                                                                                                                      |
|--------------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_SCM_{index}_BASEURL`                             | `true`   |         | The primary URL of your SCM server. This URL will be used as the origin.                                                                                                                                         |
| `MODERNE_DX_SCM_{index}_TYPE`                                | `true`   |         | Specifies the type of the SCM server (case insensitive). Choose between: `GitHub, GitLab, Bitbucket, BitbucketCloud, AzureDevOps`.                                                                               |
| `MODERNE_DX_SCM_{index}_ALTERNATEURLS_{alternate_url_index}` | `true`   |         | One or more alternate URLs (each with a different `{alternate_url_index}`) which point to the same server. Use this to specify all the protocol and port combinations that can be used to reach the same server. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_SCM_0_BASEURL=https://bitbucket.example.com/stash \
-e MODERNE_DX_SCM_0_TYPE=Bitbucket \
-e MODERNE_DX_SCM_0_ALTERNATEURLS_0=ssh://bitbucket.example.com:7999 \
-e MODERNE_DX_SCM_0_ALTERNATEURLS_1=http://bitbucket.example.com:8080/stash \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">


**Arguments:**

| Argument Name                                                | Required | Default | Description                                                                                                                                                                                                      |
|--------------------------------------------------------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.scm[{index}].baseUrl`                             | `true`   |         | The primary URL of your SCM server. This URL will be used as the origin.                                                                                                                                         |
| `--moderne.dx.scm[{index}].type`                                | `true`   |         | Specifies the type of the SCM server (case insensitive). Choose between: `GitHub, GitLab, Bitbucket, BitbucketCloud, AzureDevOps`.                                                                               |
| `--moderne.dx.scm[{index}].alternateUrls[{alternate_url_index}]` | `true`   |         | One or more alternate URLs (each with a different `{alternate_url_index}`) which point to the same server. Use this to specify all the protocol and port combinations that can be used to reach the same server. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.scm[0].baseUrl=https://bitbucket.example.com/stash \
--moderne.dx.scm[0].type=Bitbucket \
--moderne.dx.scm[0].alternateUrls[0]=ssh://bitbucket.example.com:7999 \
--moderne.dx.scm[0].alternateUrls[1]=http://bitbucket.example.com:8080/stash \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Organizational hierarchy variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                     | Required | Default | Description                                                                                                                                                                                                                                      |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_ORGANIZATION_REPOSCSV`                | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URI in the form of `https://your-serve/repos.csv`.            |
| `MODERNE_DX_ORGANIZATION_DEVCENTERJSON`           | `false`  |         | The path of your `devcenter.json` file that provides the DevCenter configurations.                                                                                                                                                                 |
| `MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS`    | `false`  | All options available | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS=Direct,Branch,Fork,PullRequest,ForkAndPullRequest \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                     | Required | Default | Description                                                                                                                                                                                                                                        |
|---------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.organization.reposCsv`              | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URI in the form of `https://your-serve/repos.csv`.                                                                                                                   |
| `--moderne.dx.organization.devCenterJson`         | `false`   |         | The path of your `devcenter.json` file that provides the DevCenter configurations.                                                                                                                                                                   |
| `--moderne.dx.organization.defaultCommitOptions`  | `false`  | All options available | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`.                                                                                                                                                                              |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.dx.organization.defaultCommitOptions=Direct,Branch,Fork,PullRequest,ForkAndPullRequest \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Organizational service variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                     | Required | Default | Description                                                                          |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------|
| `MODERNE_DX_ORGANIZATION_URL`                     | `true`   |         | The URL of your GraphQL service that provides access control for organizations.                                                                                                              |
| `MODERNE_DX_ORGANIZATION_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `MODERNE_DX_ORGANIZATION_URL`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                     | Required | Default | Description                                                                          |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------|
| `--moderne.dx.organization.url`                   | `true`   |         | The URL of your GraphQL service that provides access control for organizations.                                                                                                              |
| `--moderne.dx.organization.skipSsl`               | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `--moderne.dx.organization.url`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.url=http://localhost:8091 \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Strict recipe sources variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                | Required                                         | Default | Description                                                                                       |
|----------------------------------------------|--------------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `MODERNE_DX_RECIPE_USEONLYCONFIGURED`        | `true`                                           |         | Only use the recipe sources configured in the service.                                            |
| `MODERNE_DX_RECIPE_POMCACHE_TYPE`            | `false`                                          |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `MODERNE_DX_RECIPE_POMCACHE_ENTRYTTLMINUTES` | `false`                                          |   60    | How long entries should live in the POM cache.                                                    |
| `MODERNE_DX_RECIPE_POMCACHE_REDIS_HOST`      | `true` (If the POM cache type is set to `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `MODERNE_DX_RECIPE_POMCACHE_REDIS_PORT`      | `true` (If the POM cache type is set to `REDIS`) |  6379   | The port number of the Redis instance.                                                            |
| `MODERNE_DX_RECIPE_POMCACHE_REDIS_USERNAME`  | `false`                                          |         | The username needed to authenticate to the Redis instance.                                        |
| `MODERNE_DX_RECIPE_POMCACHE_REDIS_PASSWORD`  | `false`                                          |         | The password needed to authenticate with the Redis instance.                                      |
| `MODERNE_DX_RECIPE_POMCACHE_REDIS_SSL`       | `false`                                          | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `MODERNE_DX_RECIPE_POMCACHE_REDIS_DATABASE`  | `false`                                          |   0     | The Redis DB index.                                                                               |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_RECIPE_USEONLYCONFIGURED=true \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                  | Required                                         | Default | Description                                                                                       |
|------------------------------------------------|--------------------------------------------------|---------|---------------------------------------------------------------------------------------------------|
| `--moderne.dx.recipe.useOnlyConfigured`        | `true`                                           |         | Only use the recipe sources configured in the service.                                            |
| `--moderne.dx.recipe.pomCache.type`            | `false`                                          |         | Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`. |
| `--moderne.dx.recipe.pomCache.entryTtlMinutes` | `false`                                          |   60    | How long entries should live in the POM cache.                                                    |
| `--moderne.dx.recipe.pomCache.redis.host`      | `true` (If the POM cache type is set to `REDIS`) |         | The URL of the Redis instance.                                                                    |
| `--moderne.dx.recipe.pomCache.redis.port`      | `true` (If the POM cache type is set to `REDIS`) |   6379  | The port number of the Redis instance.                                                            |
| `--moderne.dx.recipe.pomCache.redis.username`  | `false`                                          |         | The username needed to authenticate to the Redis instance.                                        |
| `--moderne.dx.recipe.pomCache.redis.password`  | `false`                                          |         | The password needed to authenticate with the Redis instance.                                      |
| `--moderne.dx.recipe.pomCache.redis.ssl`       | `false`                                          | `false` | If set to `true`, then SSL will be enabled for the connection to the Redis instance.              |
| `--moderne.dx.recipe.pomCache.redis.database`  | `false`                                          |    0    | The Redis DB index.                                                                               |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.recipe.useOnlyConfigured=true \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Token and license variables

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name             | Required | Default | Description |
|---------------------------|----------|---------|-------------|
| `MODERNE_DX_LICENSEKEY`   | `true`   |         | A license key that you receive from Moderne. This is necessary for users to run recipes. |
| `MODERNE_DX_TOKEN_{index}`| `false`  |         | A shared secret that grants users administrative access to DX when included in their local command. This elevated access allows them to perform actions like installing recipes or running diagnostics against a DX instance. You can define one or more tokens. While DX can start without them, we strongly recommend setting at least one.  |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_TOKEN_0=some-token \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                | Required | Default | Description |
|------------------------------|----------|---------|-------------|
| `--moderne.dx.licenseKey`    | `true`   |         | A license key that you receive from Moderne. This is necessary for users to run recipes. |
| `--moderne.dx.token[{index}]`| `false`  |         | A shared secret that grants users administrative access to DX when included in their local command. This elevated access allows them to perform actions like installing recipes or running diagnostics against a DX instance. You can define one or more tokens. While DX can start without them, we strongly recommend setting at least one. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.token[0]=some-token \
# ... Additional arguments
```
</TabItem>
</Tabs>