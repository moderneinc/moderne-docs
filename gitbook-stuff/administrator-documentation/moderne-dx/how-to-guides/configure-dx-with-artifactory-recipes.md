# Configure Moderne DX with Artifactory access: recipes

In order for Moderne DX to interact with your recipe artifacts from Artifactory, you will need to create a Maven formatted repository inside of Artifactory and point the Moderne DX service to said repository. This guide will walk you through how to configure the Moderne DX service to get the list of recipe artifacts from the repository you created in Artifactory.

## Publishing recipe artifacts

Recipe artifacts will automatically be picked up by Moderne so long as you set the recipe source flag to true in the below [configuration step](configure-dx-with-artifactory-recipes.md#configuring-the-moderne-dx-service).

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to get recipe artifacts from your Maven formatted repository inside of Artifactory. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](dx-configuration.md).

You can configure multiple Maven formatted repositories by including multiple entries, each with a different `{index}`.

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_DX_MAVEN_{index}_URL` – _The URL of your Maven repository inside of Artifactory._
* `MODERNE_DX_MAVEN_{index}_ASTSOURCE` – _Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` – but you should set this to `false` (Note: LSTs used to be called ASTs)._
* `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` – _The path on disk where Maven index files will be downloaded to. This is on the disk where the service is being run and **not** in Artifactory. Defaults to `~/.moderne-maven`_
  * If multiple Maven repositories are configured on the service, they **must** have different `MODERNE_DX_MAVEN_{index}_LOCALREPOSITORY` configured.
* `MODERNE_DX_MAVEN_{index}_USERNAME` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `MODERNE_DX_MAVEN_{index}_PASSWORD` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `MODERNE_DX_MAVEN_{index}_RELEASES` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `MODERNE_DX_MAVEN_{index}_SNAPSHOTS` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `MODERNE_DX_MAVEN_{index}_RECIPESOURCE` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._
* `MODERNE_DX_MAVEN_{index}_SKIPSSL` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the service to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `MODERNE_DX_MAVEN_{index}_SKIPVALIDATECONNECTIVITY`– _(Optional) By default, on startup dx we validate that it can connect to the configured resource, and fail to start up the dx if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`_._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_DX_MAVEN_0_URL=https://myartifactory.example.com/artifactory/libs-releases-local \
-e MODERNE_DX_MAVEN_0_ASTSOURCE=false \
-e MODERNE_DX_MAVEN_0_LOCALREPOSITORY=~/.moderne-maven \
-e MODERNE_DX_MAVEN_0_USERNAME=admin \
-e MODERNE_DX_MAVEN_0_PASSWORD=password \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.dx.maven[{index}].url` – _The URL of your Maven repository inside of Artifactory._
* `--moderne.dx.maven[{index}].astSource` – _Specifies whether or not this repository should be searched for LST artifacts. Defaults to `true` – but you should set this to `false` (Note: LSTs used to be called ASTs)._
* `--moderne.dx.maven[{index}].localRepository` – _The path on disk where Maven index files will be downloaded to. This is on the disk where the service is being run and **not** in Artifactory. Defaults to `~/.moderne-maven`_
  * If multiple Maven repositories are configured on the service, they **must** have different `--moderne.dx.maven[{index}].localRepository` configured.
* `--moderne.dx.maven[{index}].username` – _(Optional) The username used to resolve artifacts. Defaults to `null`._
* `--moderne.dx.maven[{index}].password` – _(Optional) The password used to resolve artifacts. Defaults to `null`._
* `--moderne.dx.maven[{index}].releases` – _(Optional) Specifies whether or not this repository should be searched for releases. Defaults to `true`._
* `--moderne.dx.maven[{index}].snapshots` – _(Optional) Specifies whether or not this repository should be searched for snapshots. Defaults to `true`._
* `--moderne.dx.maven[{index}].recipeSource` – _(Optional) Specifies whether or not this repository should be searched for recipe jars. Defaults to `true`._
* `--moderne.dx.maven[{index}].skipSsl` – _(Optional) Whether or not to skip SSL/TLS verification for calls from the service to this Maven repository. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `--moderne.dx.maven[{index}].skipValidateConnectivity`– _(Optional) By default, on startup dx we validate that it can connect to the configured resource, and fail to start up the dx if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`_._

**Example:**

```shell
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.maven[0].url=https://myartifactory.example.com/artifactory/libs-releases-local \
--moderne.dx.maven[0].astSource=false \
--moderne.dx.maven[0].localRepository=~/.moderne-maven \
--moderne.dx.maven[0].username=admin \
--moderne.dx.maven[0].password=password \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
