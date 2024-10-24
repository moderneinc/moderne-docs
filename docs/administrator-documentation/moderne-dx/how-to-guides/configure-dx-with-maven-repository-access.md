import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Moderne DX with Maven repository access

In order for Moderne DX to get the list of your [Lossless Semantic Tree](../../moderne-platform/references/lossless-semantic-trees.md) (LST) and recipe artifacts, the service needs to be configured to talk to your Maven-formatted artifact repositories. There are a variety of services that support repositories in this format. Some examples include [JFrog Artifactory](https://jfrog.com/artifactory/), [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository), and [Azure Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/).

:::info
If your company has a rule that any externally-hosted JARs (e.g., Maven Central) be brought into an internal Maven repository (e.g., Artifactory) and scanned before being used, the instructions in this doc **must** be followed. Furthermore, [please ensure that you point DX to your internal Maven repository and that the OpenRewrite JARs and dependencies are included in said repository](./configure-dx-with-strict-recipe-sources.md).
:::

This guide will explain how to:

* [Configure your artifact service to support LST and recipes artifacts](#publishing-lst-artifacts)
* [Configure the Moderne DX service to connect to any service that supports Maven-formatted repositories](#configuring-the-moderne-dx-service)

#### Prerequisites

* You might need a username and password for a user that is allowed to resolve artifacts.

:::info
In many organizations, artifact resolution is unauthenticated while artifact publishing is authenticated. If artifact resolution is unauthenticated, you may omit the username/password configuration in the [Configuration step](#configuring-the-moderne-dx-service).
:::

## Publishing LST artifacts

### Configure the Maven Indexer

In order to publish LST artifacts, the artifact registry must be regularly updated with an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format. The frequency with which the index is updated is an approximation of the time it will take for an LST that is published to your artifact repository to show up in Moderne. You will need to decide where the border is between faster publishing and the load required on your Artifactory instance.

Please follow the below instructions to configure the indexer for your Maven formatted repository:

<Tabs>
<TabItem value="artifactory" label="Artifactory">

:::warning
If you are using Artifactory to publish LST artifacts, it is _highly_ recommended that you follow the instructions in the [configuring an agent with Artifactory doc](configure-dx-with-artifactory-access.md) instead as that will result in faster artifact consumption while also avoiding substantial load on your Artifactory instance. The following instructions should only be followed if you can not use [AQL](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) for some reason.
:::

In Artifactory, select the `Artifactory` link on the left nav and then select `Maven Indexer` under Services:

![](./assets/artifactory.png)

For a repository to be a source of LSTs, it must be included in the list of repositories that are indexed:

![](./assets/maven-indexer.png)

</TabItem>

<TabItem value="nexus-repository" label="Nexus Repository">

Under the administration view, select `Tasks` on the left nav:

![](./assets/sona-tasks.png)

Select `Create task` and create a `Maven - Publish Maven Indexer files` task:

![](./assets/maven-publish.png)

Select the repository that will serve LST artifacts and specify a frequency with which this index should be updated:

![](./assets/maven-publish-index.png)
</TabItem>
</Tabs>

## Publishing recipe artifacts

Recipe artifacts will be available for the Moderne CLI to download so long as you set the recipe source flag to true in the below [configuration step](#configuring-the-moderne-dx-service).

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to the Moderne DX service's run command in order for it to get the list of LST and recipe artifacts from your Maven formatted repository. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](./dx-configuration.md).

You can configure multiple Maven formatted repositories by including multiple entries, each with a different `{index}`.

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

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
