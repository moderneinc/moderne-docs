---
sidebar_label: Organizational hierarchy configuration
description: How to configure an organizational hierarchy in Moderne DX.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an organizational hierarchy with Moderne DX

In order for users to effectively access and run recipes against specific groups of repositories, Moderne DX admins will need to define an organizational structure for their company. This structure, defined via a `repos.csv` file, needs to either be deployed as a static file alongside DX or be accessible from DX via an unauthenticated URI.

This guide will provide you with everything you need to know to configure either of those options.

#### Prerequisites

This guide assumes that:

* You are an admin of Moderne DX
* You have deployed Moderne DX in your environment
* You have already configured Moderne DX to connect to your [Artifactory](./configure-dx-with-artifactory-access.md) or [Nexus](./configure-dx-with-maven-repository-access.md) instance.
* You have already built a `repos.csv` file as part of the [mass ingestion step](./mass-ingest-and-run-dx.md)

## Updating the `repos.csv` file to define an organizational hierarchy

You should already have a `repos.csv` file that you created as part of [mass ingestion](./mass-ingest-and-run-dx.md). To group those repositories into a hierarchy of organizations, you can add one or more organization columns to the end of each row. 

You also will need to update the `repos.csv` file to include a `branch` column if you didn't already include it.

For specific details around this file and how to configure an organizational hierarchy, please check out our [creating a repos.csv doc](../../references/repos-csv.md).

## DX organization structure configuration

Once you have the `repos.csv` file updated with organizations, you'll need to update your DX service run command to provide it with a few variables. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](./dx-configuration.md).

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                 | Required | Default | Description                                                                                                                                                                                                                                      |
|-----------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_ORGANIZATION_REPOSCSV`            | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://your-server/repos.csv`.                                                                       |
| `MODERNE_DX_ORGANIZATION_URL`                 | `false`  |         | The URL of an optional GraphQL service that provides access control for organizations. See [Additional customization](#additional-customization) for more information.                                                                           |
| `MODERNE_DX_ORGANIZATION_DEVCENTERJSON`       | `false`  |         | The path of your `devcenter.json` file that provides the DevCenter configurations.                                                                                                                                                               |
| `MODERNE_DX_ORGANIZATION_SKIPSSL`             | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `MODERNE_DX_ORGANIZATION_URL`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `MODERNE_DX_ORGANIZATION_SYNCINTERVALSECONDS` | `false`  | `600`   | Specifies how often to request your organization information. Only used when combined with `--moderne.dx.organization.url`.                                                                                                                      |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                   | Required | Default | Description                                                                                                                                                                                                                                        |
|-------------------------------------------------|----------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.organization.reposCsv`            | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URL in the form of `https://your-serve/repos.csv`.                                                                          |
| `--moderne.dx.organization.url`                 | `false`  |         | The URL of an optional GraphQL service that provides access control for organizations. See [Additional customization](#additional-customization) for more information.                                                                             |
| `--moderne.dx.organization.devCenterJson`       | `false`  |         | The path of your `devcenter.json` file that provides the DevCenter configurations.                                                                                                                                                                 |
| `--moderne.dx.organization.skipSsl`             | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `--moderne.dx.organization.url`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |
| `--moderne.dx.organization.syncIntervalSeconds` | `false`  | `600`   | Specifies how often to request your organization information. Only used when combined with `--moderne.dx.organization.url`.                                                                                                                        |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
# ... Additional arguments
```
</TabItem>
</Tabs>

## Confirming it works

After starting up Moderne DX again, you can now make the following GraphQL query using the embedded GraphiQL IDE found at `https://<moderne-dx-host>:8080/graphiql`:

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

## Using Moderne DX with organizations

Once you've configured all of the above things, you can use the Moderne CLI (mod) and run the following commands:

This command will set your Moderne location to your internally-deployed Moderne DX installation:

```bash
mod config moderne edit --token=<token> --api=https://<moderne-dx-host>:8080 http://<moderne-dx-host>:8080
```

This command will ask Moderne DX for all repositories inside the organization you selected and clone them to `<path>`:

```bash
mod git clone moderne <path> <organization-id>
```

Once these are both done, your developers can now start running recipes and committing the results!

## Additional customization

You may want to create a dedicated organizations service if you want to limit access to the organizations you've defined above so that some users only have access to some repositories.

To create this service, please check out our [creating an organizations service guide](./dx-org-service.md).
