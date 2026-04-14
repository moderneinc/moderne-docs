---
sidebar_label: Artifactory recipe configuration
description: How to configure the Moderne Connector to retrieve recipe artifacts from Artifactory.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configuring-artifactory-with-recipes" />

# Configure a Connector with Artifactory access: recipes

In order for Moderne to retrieve your recipe artifacts from Artifactory, you will need to create a Maven formatted repository inside of Artifactory and point the Connector to said repository. This guide will walk you through how to configure the Connector to get recipe artifacts from your repository.

## Publishing recipe artifacts

Recipe artifacts will automatically be picked up by Moderne so long as you set the recipe source flag to true in the below [configuration step](#configuring-the-moderne-connector). These artifacts will be immediately available for [deployment to Moderne](../importing-external-recipes.md) upon being published.

## Configuring the Moderne Connector

The following table contains all of the variables/arguments you need to add to your Moderne Connector run command in order for it to get recipe artifacts from your Maven formatted repository inside of Artifactory. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne Connector guide](./agent-config.md).

You can configure multiple Maven formatted repositories by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                                  | Required | Default | Description                                                                                                                                                                 |
|----------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_URI`          | `true`   |         | The URL of your Maven repository.                                                                                                                                           |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_ASTSOURCE`    | `true`   | `true`  | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                        |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_USERNAME`     | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_PASSWORD`     | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_RELEASES`     | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_SNAPSHOTS`    | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_RECIPESOURCE` | `false`  | `true`  | Specifies whether or not this repository should be searched for recipe jars.                                                                                                |
| `MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_{index}_SKIPSSL`      | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../creating-a-devcenter-recipe.md), you will need to ensure that you have exactly one Maven repository configured with `RECIPESOURCE` set to `true`. (It is fine to have this same Maven repository configured in multiple Connectors.)
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_URI=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_ASTSOURCE=false \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_USERNAME=admin \
-e MODERNE_ORGANIZATION_INDEXER_POLL_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                                     | Required | Default | Description                                                                                                                                                                 |
|-------------------------------------------------------------------|----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.indexer.poll.maven[{index}].uri`          | `true`   |         | The URL of your Maven repository.                                                                                                                                           |
| `--moderne.organization.indexer.poll.maven[{index}].astSource`    | `true`   | `true`  | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                        |
| `--moderne.organization.indexer.poll.maven[{index}].username`     | `false`  | `null`  | The username used to resolve artifacts.                                                                                                                                     |
| `--moderne.organization.indexer.poll.maven[{index}].password`     | `false`  | `null`  | The password used to resolve artifacts.                                                                                                                                     |
| `--moderne.organization.indexer.poll.maven[{index}].releases`     | `false`  | `true`  | Specifies whether or not this repository should be searched for releases.                                                                                                   |
| `--moderne.organization.indexer.poll.maven[{index}].snapshots`    | `false`  | `true`  | Specifies whether or not this repository should be searched for snapshots.                                                                                                  |
| `--moderne.organization.indexer.poll.maven[{index}].recipeSource` | `false`  | `true`  | Specifies whether or not this repository should be searched for recipe jars.                                                                                                |
| `--moderne.organization.indexer.poll.maven[{index}].skipSsl`      | `false`  | `false` | Whether or not to skip SSL/TLS verification for calls from the Connector to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../creating-a-devcenter-recipe.md), you will need to ensure that you have exactly one Maven repository configured with `recipeSource` set to `true`. (It is fine to have this same Maven repository configured in multiple Connectors.)

If you do have multiple recipe sources, we recommend you set up a virtual repository that wraps them all.

You will also need to ensure that the virtual repository points to the following four repositories (alongside the other repositories where recipe artifacts are stored):

1. `https://central.sonatype.com/repository/maven-snapshots/`
2. `https://central.sonatype.com/repository/maven-snapshots/`
3. `https://repo.maven.apache.org/maven2`
4. `https://repo1.maven.org/maven2/`
:::

**Example:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.indexer.poll.maven[0].uri=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.organization.indexer.poll.maven[0].astSource=false \
--moderne.organization.indexer.poll.maven[0].username=admin \
--moderne.organization.indexer.poll.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>
