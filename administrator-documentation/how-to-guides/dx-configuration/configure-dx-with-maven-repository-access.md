# Configure Moderne DX with Maven repository access

In order for Moderne DX to get the list of your [Lossless Semantic Tree](../../references/concepts/lossless-semantic-trees.md) (LST) and recipe artifacts, the service needs to be configured to talk to your Maven-formatted artifact repositories. There are a variety of services that support repositories in this format. Some examples include [JFrog Artifactory](https://jfrog.com/artifactory/), [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository), and [Azure Artifacts](https://azure.microsoft.com/en-us/services/devops/artifacts/).

{% hint style="info" %}
If your company has a rule that any externally-hosted JARs (e.g., Maven Central) be brought into an internal Maven repository (e.g., Artifactory) and scanned before being used, the instructions in this doc **must** be followed. Please ensure that you point DX to your internal Maven repository and that the OpenRewrite JARs and dependencies are included in said repository.
{% endhint %}

This guide will explain how to:

* [Configure your artifact service to support LST and recipes artifacts](configure-dx-with-maven-repository-access.md#publishing-lst-artifacts)
* [Configure the Moderne DX service to connect to any service that supports Maven-formatted repositories](configure-dx-with-maven-repository-access.md#configuring-the-moderne-dx-service)

#### Prerequisites

* You might need a username and password for a user that is allowed to resolve artifacts.

{% hint style="info" %}
In many organizations, artifact resolution is unauthenticated while artifact publishing is authenticated. If artifact resolution is unauthenticated, you may omit the username/password configuration in the [Configuration step](configure-dx-with-maven-repository-access.md#configuring-the-moderne-dx-service).
{% endhint %}

## Publishing LST artifacts

### Configure the Maven Indexer

In order to publish LST artifacts, the artifact registry must be regularly updated with an index in the [Maven Indexer](https://maven.apache.org/maven-indexer/) format. The frequency with which the index is updated is an approximation of the time it will take for an LST that is published to your artifact repository to show up in Moderne. You will need to decide where the border is between faster publishing and the load required on your Artifactory instance.

Please follow the below instructions to configure the indexer for your Maven formatted repository:

{% tabs %}
{% tab title="Artifactory" %}
{% hint style="warning" %}
If you are using Artifactory to publish LST artifacts, it is _highly_ recommended that you follow the instructions in the [configuring an agent with Artifactory doc](configure-dx-with-artifactory-access.md) instead as that will result in faster artifact consumption while also avoiding substantial load on your Artifactory instance. The following instructions should only be followed if you can not use [AQL](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) for some reason.
{% endhint %}

In Artifactory, select the `Artifactory` link on the left nav and then select `Maven Indexer` under Services:

![](../../../.gitbook/assets/artifactory.png)

For a repository to be a source of LSTs, it must be included in the list of repositories that are indexed:

![](../../../.gitbook/assets/maven-indexer.png)
{% endtab %}

{% tab title="Nexus Repository" %}
Under the administration view, select `Tasks` on the left nav:

![](../../../.gitbook/assets/sona-tasks.png)

Select `Create task` and create a `Maven - Publish Maven Indexer files` task:

![](../../../.gitbook/assets/maven-publish.png)

Select the repository that will serve LST artifacts and specify a frequency with which this index should be updated:

![](../../../.gitbook/assets/maven-publish-index.png)
{% endtab %}
{% endtabs %}

## Publishing recipe artifacts

Recipe artifacts will be available for the Moderne CLI to download so long as you set the recipe source flag to true in the below [configuration step](configure-dx-with-maven-repository-access.md#configuring-the-moderne-dx-service).

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to the Moderne DX service's run command in order for it to get the list of LST and recipe artifacts from your Maven formatted repository. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](dx-configuration.md).

You can configure multiple Maven formatted repositories by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_DX_MAVEN_{index}_URL` – _The URL of your Maven repository._
* `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` – _The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the service is being run and **not** on the Maven instance. Defaults to `~/.moderne-maven`_
  * LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. If changes are discovered, only the incremental diffs will be downloaded (to limit the amount of data being transferred).
  * If multiple Maven repositories are configured on the service, they **must** have different `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` configured.
* `MODERNE_DX_MAVEN_{index}_USERNAME` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `MODERNE_DX_MAVEN_{index}_PASSWORD` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `MODERNE_DX_MAVEN_{index}_RELEASES` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `MODERNE_DX_MAVEN_{index}_SNAPSHOTS` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `MODERNE_DX_MAVEN_{index}_ASTSOURCE` – _(Optional) Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` (Note: LSTs used to be called ASTs)._
* `MODERNE_DX_MAVEN_{index}_RECIPESOURCE` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._
* `MODERNE_DX_MAVEN_{index}_SKIPSSL` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the service to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.dx.maven[{index}].url` – _The URL of your Maven repository._
* `--moderne.dx.maven[{index}].localRepository` – _The path on disk where LST artifacts and Maven index files will be downloaded to. This is on the disk where the service is being run and **not** on the Maven instance. Defaults to `~/.moderne-maven`_
  * LST artifacts are deleted from this location after they are transmitted to Moderne. Index files will remain behind to be used to detect diffs in the artifacts. If changes are discovered, only the incremental diffs will be downloaded (to limit the amount of data being transferred).
  * If multiple Maven repositories are configured on the service, they **must** have different `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` configured.
* `--moderne.dx.maven[{index}].username` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `--moderne.dx.maven[{index}].password` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `--moderne.dx.maven[{index}].releases` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `--moderne.dx.maven[{index}].snapshots` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `--moderne.dx.maven[{index}].astSource` – _(Optional) Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` (Note: LSTs used to be called ASTs)._
* `--moderne.dx.maven[{index}].recipeSource` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._
* `--moderne.dx.maven[{index}].skipSsl` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the service to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
