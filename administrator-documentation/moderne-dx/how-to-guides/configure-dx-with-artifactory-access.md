# Configure Moderne DX with Artifactory access: LSTs

Artifactory serves as a source of LST artifacts. This integration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify LST artifacts.

This guide will walk you through how to configure the Moderne DX service to connect to your Artifactory instance to retrieve the list LST artifacts.

{% hint style="info" %}
If you're wanting to configure Artifactory to support recipe artifacts, please see [this guide](../../how-to-guides/dx-configuration/configuring-artifactory-with-recipes.md) instead.
{% endhint %}

#### Prerequisites

* You will need a username and password for an Artifactory user that is allowed to issue the relevant AQL queries that will be configured

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to get LST artifacts from your Artifactory instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](dx-configuration.md).

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

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

## Confirming it works

After starting up Moderne DX, it will then ask your artifact repository for LST artifacts. This process can take several minutes. You can test it worked by making the following GraphQL query using `https://<moderne-dx-host>:8080/graphiql`:

```graphql
query orgs {
  organizations {
    id
    repositoriesPages {
      count
      edges {
        node {
          origin
          path
          branch
        }
      }
    }
    parent {
      id
    }
  }
}
```


If you run this immediately after startup, you may get no results. Once your index operation is completed, you will get results similar to the following:

```graphql
{
  "data": {
    "organizations": [
      {
        "id": "All",
        "name": "All",
        "repositoriesPages": {
          "count": 2,
          "edges": [
            {
              "node": {
                "origin": "github.com",
                "path": "organization/repository1",
                "branch": "main"
              }
            },
            {
              "node": {
                "origin": "github.com",
                "path": "organization/repository2",
                "branch": "main"
              }
            }
          ]
        }
      }
    ]
  }
}
```

{% hint style="info" %}
Note that if you set up an [organization integration](configure-dx-organizations.md), the returned results from this query will be organized into **organizations** rather than **repositories**.
{% endhint %}
