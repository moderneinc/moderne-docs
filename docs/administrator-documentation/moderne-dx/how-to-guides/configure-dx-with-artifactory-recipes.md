---
sidebar_label: Artifactory recipe configuration
description: How to configure Moderne DX so that it can retrieve recipe artifacts from Artifactory.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Moderne DX with Artifactory access: recipes

In order for Moderne DX to interact with your recipe artifacts from Artifactory, you will need to create a Maven formatted repository inside of Artifactory and point the Moderne DX service to said repository. This guide will walk you through how to configure the Moderne DX service to get the list of recipe artifacts from the repository you created in Artifactory.

## Publishing recipe artifacts

Recipe artifacts will automatically be picked up by Moderne so long as you set the recipe source flag to true in the below [configuration step](#configuring-the-moderne-dx-service).

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to get recipe artifacts from your Maven formatted repository inside of Artifactory. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](./dx-configuration.md).

You can configure multiple Maven formatted repositories by including multiple entries, each with a different `{index}`.

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
