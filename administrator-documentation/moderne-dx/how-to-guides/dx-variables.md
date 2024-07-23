# All agent configuration variables

This document includes all of the variables you can configure the Moderne agent to run with. Your configuration will only use some of these.

## Maven repository access variables

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
* `MODERNE_DX_MAVEN_{index}_SKIPVALIDATECONNECTIVITY`– _(Optional) By default, on startup dx we validate that it can connect to the configured resource, and fail to start up the dx if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`_._

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
* `--moderne.dx.maven[{index}].skipValidateConnectivity`– _(Optional) By default, on startup dx we validate that it can connect to the configured resource, and fail to start up the dx if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`_._

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

## Artifactory LST variables

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_DX_ARTIFACTORY_{index}_URL` – _The URL of your Artifactory instance._
* `MODERNE_DX_ARTIFACTORY_{index}_USERNAME` – _The username used to connect to your Artifactory instance. This user must have permission to run AQL queries._
* `MODERNE_DX_ARTIFACTORY_{index}_PASSWORD` – _The password used to connect to your Artifactory instance._
* `MODERNE_DX_ARTIFACTORY_{index}_ASTQUERYFILTERS_{index}` – _The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`._
* `MODERNE_DX_ARTIFACTORY_{index}_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL verification for HTTP connections from the service to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `MODERNE_DX_ARTIFACTORY_{index}_SKIPVALIDATECONNECTIVITY`– _(Optional) By default, on startup dx we validate that it can connect to the configured resource, and fail to start up the dx if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`_._
* `MODERNE_DX_ARTIFACTSYNC_SINCE` – _(Optional) Specifies how long in the past to sync your artifacts. Defaults to syncing all time. It is recommended to set a start date of the sync or it will try to search your entire artifactory._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_DX_ARTIFACTORY_0_URL=https://myartifactory.example.com/artifactory/ \
-e MODERNE_DX_ARTIFACTORY_0_USERNAME=admin \
-e MODERNE_DX_ARTIFACTORY_0_PASSWORD=password \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_0='"name":{"$match":"*-ast.jar"}' \
-e MODERNE_DX_ARTIFACTORY_0_ASTQUERYFILTERS_1='"repo":{"$eq":"example-maven"}' \
-e MODERNE_DX_ARTIFACTSYNC_SINCE=2024-01-01T00:00:00Z
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.dx.artifactory[{index}].url` – _The URL of your Artifactory instance._
* `--moderne.dx.artifactory[{index}].username` – _The username used to connect to your Artifactory instance. This user must have permission to run AQL queries._
* `--moderne.dx.artifactory[{index}].password` – _The password used to connect to your Artifactory instance._
* `--moderne.dx.artifactory[{index}].astQueryFilters[{index}]` – _The AQL query fragment used to select LST artifacts to send to Moderne. If multiple are specified, they are combined together with an `AND`._
* `--moderne.dx.artifactory[{index}].skipSsl` – _(Optional) Specifies whether or not to skip SSL verification for HTTP connections from the service to this Artifactory instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._
* `--moderne.dx.artifactory[{index}].skipValidateConnectivity`– _(Optional) By default, on startup dx we validate that it can connect to the configured resource, and fail to start up the dx if we cannot. Set this to_ `true` _to skip this validation. Defaults to_ `false`
* `--moderne.dx.artifactSync.since` – _(Optional) Specifies how long in the past to sync your artifacts. Defaults to syncing all time. It is recommended to set a start date of the sync or it will try to search your entire artifactory._

**Example:**

```shell
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.artifactory[0].url=https://myartifactory.example.com/artifactory/ \
--moderne.dx.artifactory[0].username=admin \
--moderne.dx.artifactory[0].password=password \
--moderne.dx.artifactory[0].astQueryFilters[0]='{"name":{"$match":"*-ast.jar"}}' \
--moderne.dx.artifactory[0].astQueryFilters[1]='{"repo":{"$eq":"example-maven"}}' \
--moderne.dx.artifactSync.since=2024-01-01T00:00:00Z \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Artifactory recipe variables

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

## Organizations service variables

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_DX_ORGANIZATION_URL` – _The URL of your GraphQL service that provides organization information._
* `MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS` – _(Optional) Specifies how often to request your organization information. Defaults to `600` (10 minutes)._
* `MODERNE_DX_ORGANIZATION_SKIPSSL` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.dx.organization.url` – _The URL of your GraphQL service that provides organization information._
* `--moderne.dx.organization.updateIntervalSeconds` – _(Optional) Specifies how often to request your organization information. Defaults to `600` (10 minutes)._
* `--moderne.dx.organization.skipSsl` – _(Optional) Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. This must be set to `true` if you use a self-signed SSL/TLS certificate. Defaults to `false`._

**Example:**

```shell
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.updateIntervalSeconds=600 \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}

## Strict recipe sources variables

{% tabs %}
{% tab title="OCI Container" %}
**Variables:**

* `MODERNE_DX_RECIPE_USEONLYCONFIGURED` – Only use the recipe sources configured in the service.
* `MODERNE_DX_RECIPE_POMCACHE_TYPE` – _(Optional) Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`._
* `MODERNE_DX_RECIPE_POMCACHE_ENTRYTTLMINUTES` – _(Optional) How long entries should live in the POM cache._
* `MODERNE_DX_RECIPE_POMCACHE_REDIS_HOST` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The URL of the Redis instance._
* `MODERNE_DX_RECIPE_POMCACHE_REDIS_PORT` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The port number of the Redis instance._
* `MODERNE_DX_RECIPE_POMCACHE_REDIS_USERNAME` – _(Optional) The username needed to authenticate to the Redis instance._
* `MODERNE_DX_RECIPE_POMCACHE_REDIS_PASSWORD` – _(Optional) The password needed to authenticate with the Redis instance._
* `MODERNE_DX_RECIPE_POMCACHE_REDIS_SSL` – _(Optional) If set to `true`, then SSL will be enabled for the connection to the Redis instance. Defaults to `false`._
* `MODERNE_DX_RECIPE_POMCACHE_REDIS_DATABASE` – _(Optional) The Redis DB index._

**Example:**

```shell
docker run \
# ... Existing variables
-e MODERNE_DX_RECIPE_USEONLYCONFIGURED=true \
# ... Additional variables
```
{% endtab %}

{% tab title="Executable JAR" %}
**Arguments:**

* `--moderne.dx.recipe.useOnlyConfigured` – Only use the recipe sources configured in the service.
* `--moderne.dx.recipe.pomCache.type` – _(Optional) Used to specify what type of cache the POM should use. Acceptable values: `IN_MEMORY` or `REDIS`._
* `--moderne.dx.recipe.pomCache.entryTtlMinutes` – _(Optional) How long entries should live in the POM cache._
* `--moderne.dx.recipe.pomCache.redis.host` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The URL of the Redis instance._
* `--moderne.dx.recipe.pomCache.redis.port` – _(Required if the POM cache type is set to `REDIS`, Optional otherwise) The port number of the Redis instance._
* `--moderne.dx.recipe.pomCache.redis.username` – _(Optional) The username needed to authenticate to the Redis instance._
* `--moderne.dx.recipe.pomCache.redis.password` – _(Optional) The password needed to authenticate with the Redis instance._
* `--moderne.dx.recipe.pomCache.redis.ssl` – _(Optional) If set to `true`, then SSL will be enabled for the connection to the Redis instance. Defaults to `false`._
* `--moderne.dx.recipe.pomCache.redis.database` – _(Optional) The Redis DB index._

**Example:**

```shell
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.recipe.useOnlyConfigured=true \
# ... Additional arguments
```
{% endtab %}
{% endtabs %}
