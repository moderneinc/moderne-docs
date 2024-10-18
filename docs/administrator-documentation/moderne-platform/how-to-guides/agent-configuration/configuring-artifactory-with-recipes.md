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

* `MODERNE_AGENT_MAVEN_{index}_URL` – _The URL of your Maven repository inside of Artifactory._
* `MODERNE_AGENT_MAVEN_{index}_ASTSOURCE` – _Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` – but you should set this to `false` (Note: LSTs used to be called ASTs)._
* `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` – _The path on disk where Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** in Artifactory. Defaults to `~/.moderne-maven`_
  * If multiple Maven repositories are configured on the agent, they **must** have different `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` configured.
* `MODERNE_AGENT_MAVEN_{index}_USERNAME` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `MODERNE_AGENT_MAVEN_{index}_PASSWORD` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `MODERNE_AGENT_MAVEN_{index}_RELEASES` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `MODERNE_AGENT_MAVEN_{index}_SNAPSHOTS` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `MODERNE_AGENT_MAVEN_{index}_RECIPESOURCE` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._

:::warning
If you want to configure a [Moderne DevCenter](../dev-center.md), you will need to ensure that you have exactly one Maven repository configured with `RECIPESOURCE` set to `true`. (It is fine to have this same Maven repository configured in multiple agents.)
:::

* `MODERNE_AGENT_MAVEN_{index}_SKIPSSL` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

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

* `--moderne.agent.maven[{index}].url` – _The URL of your Maven repository inside of Artifactory._
* `--moderne.agent.maven[{index}].astSource` – _Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` – but you should set this to `false` (Note: LSTs used to be called ASTs)._
* `--moderne.agent.maven[{index}].localRepository` – _The path on disk where Maven index files will be downloaded to. This is on the disk where the agent is being run and **not** in Artifactory. Defaults to `~/.moderne-maven`_
  * If multiple Maven repositories are configured on the agent, they **must** have different `MODERNE_AGENT_MAVEN_{index}_LOCALREPOSITORY` configured.
* `--moderne.agent.maven[{index}].username` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `--moderne.agent.maven[{index}].password` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `--moderne.agent.maven[{index}].releases` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `--moderne.agent.maven[{index}].snapshots` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `--moderne.agent.maven[{index}].recipeSource` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._

:::warning
If you want to configure a [Moderne DevCenter](../dev-center.md), you will need to ensure that you have exactly one Maven repository configured with `recipeSource` set to `true`. (It is fine to have this same Maven repository configured in multiple agents.)
:::

* `--moderne.agent.maven[{index}].skipSsl` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the agent to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

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
