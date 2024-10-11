import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Moderne DX with Artifactory access: LSTs

Artifactory serves as a source of LST artifacts. This integration uses [Artifactory Query Language](https://www.jfrog.com/confluence/display/JFROG/Artifactory+Query+Language) (AQL) to identify LST artifacts.

This guide will walk you through how to configure the Moderne DX service to connect to your Artifactory instance to retrieve the list LST artifacts.

:::info
If you're wanting to configure Artifactory to support recipe artifacts, please see [this guide](./configure-dx-with-artifactory-recipes.md) instead.
:::

#### Prerequisites

* You will need a username and password for an Artifactory user that is allowed to issue the relevant AQL queries that will be configured

## Configuring the Moderne DX service

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to get LST artifacts from your Artifactory instance. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](./dx-configuration.md).

You can configure multiple Artifactory servers by including multiple entries, each with a different `{index}`. Within a given Artifactory server configuration, you can configure multiple LST query filters by including multiple entries, each with a different `{index}`.

Also, by default, LST indexing has to happen on every new installation before `mod git clone moderne` can be used against Moderne DX. For 50,000 repositories, this can take hours and be very taxing on your Artifactory or your Maven repositories. By attaching and configuring persistent storage to Moderne DX, the LST index will be maintained between deployments and restarts of the application, leading to much quicker startup times. This can be configured with the `MODERNE_DX_STORAGE_ENABLED` and `MODERNE_DX_STORAGE_PATH` vars included in the table below.

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

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

:::info
Note that if you set up an [organization integration](./configure-dx-organizations.md), the returned results from this query will be organized into **organizations** rather than **repositories**.
:::
