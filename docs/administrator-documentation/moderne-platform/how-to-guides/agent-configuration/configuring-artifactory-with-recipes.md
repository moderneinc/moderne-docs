---
sidebar_label: Artifactory recipe configuration
description: How to configure the Moderne agent to retrieve recipe artifacts from Artifactory.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an agent with Artifactory access: recipes

In order for Moderne to retrieve your recipe artifacts from Artifactory, you will need to create a Maven formatted repository inside of Artifactory and point the agent to said repository. This guide will walk you through how to configure the agent to get recipe artifacts from your repository.

## Publishing recipe artifacts

Recipe artifacts will automatically be picked up by Moderne so long as you set the recipe source flag to true in the below [configuration step](#configuring-the-moderne-agent). These artifacts will be immediately available for [deployment to Moderne](../importing-external-recipes.md) upon being published.

## Configuring the Moderne agent

The following table contains all of the variables/arguments you need to add to your Moderne agent run command in order for it to get recipe artifacts from your Maven formatted repository inside of Artifactory. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne agent guide](./agent-config.md).

You can configure multiple Maven formatted repositories by including multiple entries, each with a different `{index}`.

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                 | Required | Default            | Description                                                                                                                                                           |
|-----------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_MAVEN_{index}_URL`             | `true`   |                    | The URL of your Maven repository.                                                                                                                                     |
| `MODERNE_AGENT_MAVEN_{index}_ASTSOURCE`       | `true`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                                                    |
| `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` | `true`   | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different local repositories configured. |
| `MODERNE_AGENT_MAVEN_{index}_USERNAME`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `MODERNE_AGENT_MAVEN_{index}_PASSWORD`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `MODERNE_AGENT_MAVEN_{index}_RELEASES`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `MODERNE_AGENT_MAVEN_{index}_SNAPSHOTS`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `MODERNE_AGENT_MAVEN_{index}_RECIPESOURCE`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `MODERNE_AGENT_MAVEN_{index}_SKIPSSL`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../dev-center.md), you will need to ensure that you have exactly one Maven repository configured with `RECIPESOURCE` set to `true`. (It is fine to have this same Maven repository configured in multiple agents.)
:::

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_AGENT_MAVEN_0_ASTSOURCE=false \
-e MODERNE_AGENT_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_AGENT_MAVEN_0_USERNAME=admin \
-e MODERNE_AGENT_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                    | Required | Default            | Description                                                                                                                                                           |
|--------------------------------------------------|----------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.maven[{index}].url`             | `true`   |                    | The URL of your Maven repository.                                                                                                                                     |
| `--moderne.agent.maven[{index}].astSource`       | `true`   | `true`             | Specifies whether or not this repository should be searched for LST artifacts. **You should set this to false** (Note: LSTs used to be called ASTs).                                                    |
| `--moderne.agent.maven[{index}].localRepository` | `true`   | `~/.moderne-maven` | The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** on the Maven instance. <br/><br/> LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. <br/><br/> If multiple Maven repositories are configured on the agent, they **must** have different local repositories configured. |
| `--moderne.agent.maven[{index}].username`        | `false`  | `null`             | The username used to resolve artifacts.                                                                                                                               |
| `--moderne.agent.maven[{index}].password`        | `false`  | `null`             | The password used to resolve artifacts.                                                                                                                               |
| `--moderne.agent.maven[{index}].releases`        | `false`  | `true`             | Specifies whether or not this repository should be searched for releases.                                                                                             |
| `--moderne.agent.maven[{index}].snapshots`       | `false`  | `true`             | Specifies whether or not this repository should be searched for snapshots.                                                                                            |
| `--moderne.agent.maven[{index}].recipeSource`    | `false`  | `true`             | Specifies whether or not this repository should be searched for recipe jars.                                                                                          |
| `--moderne.agent.maven[{index}].skipSsl`         | `false`  | `false`            | Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

:::warning
If you want to configure a [Moderne DevCenter](../dev-center.md), you will need to ensure that you have exactly one Maven repository configured with `recipeSource` set to `true`. (It is fine to have this same Maven repository configured in multiple agents.)

If you do have multiple recipe sources, we recommend you set up a virtual repository that wraps them all.

You will also need to ensure that the virtual repository points to the following four repositories (alongside the other repositories where recipe artifacts are stored):

1. `https://oss.sonatype.org/content/repositories/snapshots/`
2. `https://s01.oss.sonatype.org/content/repositories/snapshots/`
3. `https://repo.maven.apache.org/maven2`
4. `https://repo1.maven.org/maven2/`
:::

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.agent.maven[0].astSource=false \
--moderne.agent.maven[0].localRepository=~/.moderne-maven \
--moderne.agent.maven[0].username=admin \
--moderne.agent.maven[0].password=password \
# ... Additional arguments
```
</TabItem>
</Tabs>
