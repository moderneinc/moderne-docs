---
sidebar_label: Organizational hierarchy configuration
description: How to configure Moderne DX so that it has an organizational hierarchy.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure an organizational hierarchy with Moderne DX

Many users desire the ability to dynamically control the organizational structure (repository groupings) of their repositories within Moderne DX. To do this, you can provide DX with a file that describes the organizational structure (`repos.csv`).

This guide will explain how to create that file and how to provide DX with it.

#### Prerequisites

This guide assumes that:

* You are an admin of Moderne DX
* You have deployed Moderne DX in your environment
* You have already [configured Moderne DX to connect to your Artifactory instance](./configure-dx-with-artifactory-access.md)
* You are running version `3.37.0` or higher of the CLI (if you aren't, you won't be able to [configure DevCenters](../../moderne-platform/how-to-guides/dev-center.md))

## Generating repos.csv

To configure an organizational hierarchy, you will need to create a `repos.csv` file that takes the following format:

| cloneUrl      | branch   | org1    | org2        | org3 |
|---------------|----------|---------|-------------|------|
| `https://github.com/openrewrite/rewrite-recipe-bom` | main | Open Source | ALL | |
| `https://github.com/Netflix/spectator-go` | main | Netflix | Open Source | ALL |

The organizations under `org1`, `org2`, `org3`, etc. represent the hierarchy of organizations. There is no limit to the number of organizations that can be provided via this CSV.

The above example would be used in Moderne DX to generate an organizational listing of the following:

* ALL
  * Open Source
    * `https://github.com/openrewrite/rewrite-recipe-bom:main`
  * Netflix
    * `https://github.com/Netflix/spectator-go:main`

To generate this `repos.csv`, we recommend using "[repo fetchers](https://github.com/moderneinc/repository-fetchers)".

## DX organization structure configuration

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to interact with your organization structure data source. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](./dx-configuration.md).

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Variable Name                                     | Required | Default | Description                                                                          |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------|
| `MODERNE_DX_ORGANIZATION_REPOSCSV`                | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URI in the form of `https://your-serve/repos.csv`.            |
| `MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS`    | `false`  | All options available | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
-e MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS=Direct,Branch,Fork,PullRequest,ForkAndPullRequest \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                     | Required | Default | Description                                                                          |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------|
| `--moderne.dx.organization.reposCsv`              | `true`   |         | The path of your `repos.csv` file that provides organization information. This could also be an unauthenticated HTTP/S URI in the form of `https://your-serve/repos.csv`.            |
| `--moderne.dx.organization.defaultCommitOptions`  | `false`  | All options available | Use to restrict which commit options are available in Moderne. Acceptable values: `Direct`, `Branch`, `Fork`, `PullRequest`, `ForkAndPullRequest`. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
--moderne.dx.organization.defaultCommitOptions=Direct,Branch,Fork,PullRequest,ForkAndPullRequest \
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
