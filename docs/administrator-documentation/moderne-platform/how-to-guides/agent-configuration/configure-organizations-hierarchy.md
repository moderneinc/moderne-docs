---
sidebar_label: Organizational hierarchy configuration
description: How to configure your organizational hierarchy.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/administrator-documentation/moderne-platform-v1/how-to-guides/agent-configuration/configure-organizations-hierarchy" />

# Configure an organizational hierarchy

## What is the organizational hierarchy?

In Moderne, an _organization_ is a collection of related repositories. The organizational hierarchy defines how these
organizations are structured and related to one another.

A pre-configured organization hierarchy streamlines work on the Moderne platform by enabling operations to target
well-defined groups of repositories. For example, if Team 1 wants to run a migration on only their own repositories,
they can select their team’s organization. Meanwhile, a manager overseeing both Team 1 and Team 2 could select the
parent organization to run operations across both teams’ repositories.

```
ALL
├── VP
    └── Director
        └── Manager
           ├── Team 1
           └── Team 2
```

There are no strict requirements for how the organizational hierarchy must be structured. However, customers often model
it after their internal reporting hierarchy.

## Is an organizational hierarchy mandatory?

No. If no organization hierarchy is configured, all repositories will default to the `All` organization. This setup can
be suitable when managing a relatively small number of repositories. However, as your repository count grows, we
recommend establishing an organization hierarchy to improve structure and scalability.

## How is an organizational hierarchy defined?

Organizational structure is configured via a `repos.csv` file, accessible to the Connector via the file system or network.

Please see our [creating a repos.csv guide](../../../../user-documentation/moderne-cli/references/repos-csv.md) for details into how to create and format this file.

## Connector configuration

The `repos.csv` source location is provided to the Connector by setting a variable in the Connector run command. A source can be a local file (`file` source), an HTTP(S) URL (`http` source), or an S3 object URI (`s3` source — see [S3 organization source](./configure-an-agent-with-s3-access.md) for S3-specific variables). You can configure multiple sources of each type.

:::tip `repos.csv` vs. `repos-lock.csv`
If you set up a [Mass Ingest](../mass-ingest.md) pipeline, the `mod publish` step produces a `repos-lock.csv` with a `publishUri` for every repository. Pointing the Connector at this file lets it fetch LSTs directly from the URIs in the CSV, which is faster and more reliable than asking the Connector to discover LSTs at runtime. See [how the Connector finds your repositories and their LSTs](./agent-config.md#step-5-configure-the-connector-to-find-your-repositories-and-their-lsts) for the full picture.
:::

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Environment variable                                          | Required | Default | Description                                                                                                                                                              |
|---------------------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_ORGANIZATION_SOURCES_FILE_{index}_PATH`              | `false`  |         | The path to a local `repos.csv` file, relative to the Connector's permanent directory (`MODERNE_CONNECTOR_STORAGE_PERMANENTDIR`).                                        |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_{index}_URI`               | `false`  |         | The URL of an HTTP(S) endpoint serving your `repos.csv` file (e.g., `https://<internal-endpoint>/repos.csv`).                                                            |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_{index}_USERNAME`          | `false`  |         | Username for basic auth against the HTTP endpoint. Mutually exclusive with `BEARERTOKEN`.                                                                                |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_{index}_PASSWORD`          | `false`  |         | Password for basic auth against the HTTP endpoint. Mutually exclusive with `BEARERTOKEN`.                                                                                |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_{index}_BEARERTOKEN`       | `false`  |         | Bearer token for the HTTP endpoint. Mutually exclusive with `USERNAME`/`PASSWORD`.                                                                                       |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_{index}_PROXY_HOST`        | `false`  |         | The hostname of a proxy server to use for connections to the HTTP endpoint. If specified, `PROXY_PORT` must also be set.                                                 |
| `MODERNE_ORGANIZATION_SOURCES_HTTP_{index}_PROXY_PORT`        | `false`  |         | The port of the proxy server to use for connections to the HTTP endpoint. If specified, `PROXY_HOST` must also be set.                                                   |
| `MODERNE_ORGANIZATION_SOURCES_S3_{index}_URI`                 | `false`  |         | The S3 URI of a CSV object (e.g., `s3://my-bucket/repos.csv`). For the full set of S3 auth/region/endpoint variables, please see [S3 organization source](./configure-an-agent-with-s3-access.md). |

**Example using a local file:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_FILE_0_PATH=repos.csv \
# ... Additional variables
```

**Example using an HTTP URL:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_HTTP_0_URI=https://internal.example.com/repos.csv \
# ... Additional variables
```

**Example using an S3 object:**

```bash
docker run \
# ... Existing variables
-e MODERNE_ORGANIZATION_SOURCES_S3_0_URI=s3://my-bucket/repos.csv \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument name                                              | Required | Default | Description                                                                                                                                                                |
|------------------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.organization.sources.file[{index}].path`        | `false`  |         | The path to a local `repos.csv` file, relative to the Connector's permanent directory (`--moderne.connector.storage.permanentDir`).                                        |
| `--moderne.organization.sources.http[{index}].uri`         | `false`  |         | The URL of an HTTP(S) endpoint serving your `repos.csv` file (e.g., `https://<internal-endpoint>/repos.csv`).                                                              |
| `--moderne.organization.sources.http[{index}].username`    | `false`  |         | Username for basic auth against the HTTP endpoint. Mutually exclusive with `bearerToken`.                                                                                  |
| `--moderne.organization.sources.http[{index}].password`    | `false`  |         | Password for basic auth against the HTTP endpoint. Mutually exclusive with `bearerToken`.                                                                                  |
| `--moderne.organization.sources.http[{index}].bearerToken` | `false`  |         | Bearer token for the HTTP endpoint. Mutually exclusive with `username`/`password`.                                                                                         |
| `--moderne.organization.sources.http[{index}].proxy.host`  | `false`  |         | The hostname of a proxy server to use for connections to the HTTP endpoint. If specified, `proxy.port` must also be set.                                                   |
| `--moderne.organization.sources.http[{index}].proxy.port`  | `false`  |         | The port of the proxy server to use for connections to the HTTP endpoint. If specified, `proxy.host` must also be set.                                                     |
| `--moderne.organization.sources.s3[{index}].uri`           | `false`  |         | The S3 URI of a CSV object (e.g., `s3://my-bucket/repos.csv`). For the full set of S3 auth/region/endpoint arguments, please see [S3 organization source](./configure-an-agent-with-s3-access.md). |

**Example using a local file:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.file[0].path=repos.csv \
# ... Additional arguments
```

**Example using an HTTP URL:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.http[0].uri=https://internal.example.com/repos.csv \
# ... Additional arguments
```

**Example using an S3 object:**

```bash
java -jar connector-{version}.jar \
# ... Existing arguments
--moderne.organization.sources.s3[0].uri=s3://my-bucket/repos.csv \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Confirming it works

After starting up the Moderne Connector again, you can now make the following GraphQL query using the embedded GraphiQL IDE found at `https://api.<your-tenant>/graphql`:

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
        "id": "Organization 1",
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
      },
      {
        "id": "Organization 2",
        "repositoriesPages": {
          "count": 7,
          "edges": [...]
        }
      },
      {
        "id": "Organization 3",
        "repositoriesPages": {
          "count": 25,
          "edges": [...]
        }
      }
    ]
  }
}
```