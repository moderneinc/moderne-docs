import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure Organizations with Moderne DX

Many users desire the ability to dynamically control the organizational structure (repository groupings) of their repositories within Moderne DX. There are two ways to achieve this, either by supplying DX with a file describing the organizational structure (via a `repos.csv`) or by integrating with an organization service. 

In order for Moderne to obtain information about your organizational structure, you will need to configure the Moderne DX service to point to your Organizations source. This guide will explain how to do that.

#### Prerequisites

This guide assumes that:

* You are an admin of Moderne DX
* You have deployed Moderne DX in your environment
* You have already [configured Moderne DX to connect to your Artifactory instance](./configure-dx-with-artifactory-access.md)

## File based organization structure

The simplest way to achieve the organization structure is to supply a `repos.csv` file directly in DX.

That being said, there are a few downsides of file based organization structure:
- You cannot configure any [DevCenter](../../moderne-platform/how-to-guides/dev-center.md)
- Organization based access control is not available

## Generating repos.csv

If you choose to fork our Organizations service template, you will have to generate your `repos.csv` file. This file takes the following format:

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

To generate this `repos.csv`, we recommend using "[repo fetchers](https://github.com/moderneinc/moderne-organizations/blob/main/repo-fetchers/README.md)" inside our Organizations service template.

## Service based organization structure

A more feature rich replacement of the file based approach is to create an [Organizations service](../../moderne-platform/how-to-guides/organizations-service.md). This allows you to use additional features like the DevCenter, organization based access control, and per organization commit options.

### Organizations service template and API

You have two main options for building this service. You can:

1. (**Recommended**) Fork our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. Please see the [README](https://github.com/moderneinc/moderne-organizations/blob/main/README.md) for how to spin this up quickly. It can be as simple as updating a CSV file.
2. Build your own service that fulfills the [GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls) using any GraphQL stack (e.g., NodeJS, Rust, C#, etc.)

We generally recommend forking the template and modifying it as, in most cases, that will be faster and easier than building it yourself. Regardless of which one you choose, however, some developer time will be required on your end.

### Deploying the service

How you deploy the service is largely up to your company. With that being said, there are a few important things to be aware of:

* Moderne will make a request per repository to the Organizations service once every 10 minutes by default (you can change this interval in your configuration). Please ensure that you have metrics to track how this service is performing so you can adjust it over time.
* You'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent storage.

## DX organization structure configuration

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to interact with your organization structure data source. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](./dx-configuration.md).

<Tabs groupId="dx-type">
<TabItem value="oci-container" label="OCI Container">

**Variables:**

| Variable Name                                     | Required | Default | Description                                                                                                                                                                                                                                      |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_DX_ORGANIZATION_URL`                     | `true`   |         | The URL of your GraphQL service that provides organization information. Cannot be combined with `MODERNE_DX_ORGANIZATION_REPOSCSV`.                                                                                                              |
| `MODERNE_DX_ORGANIZATION_REPOSCSV`                | `true`   |         | The path of your repos.csv file that provides organization information. Cannot be combined with `MODERNE_DX_ORGANIZATION_URL`.                                                                                                                   |
| `MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS`    | `false`  |         | The commit options used if not specified by the organization service.                                                                                                                                                                            |
| `MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS` | `false`  | `600`   | Specifies how often to request your organization information. Only used when combined with `MODERNE_DX_ORGANIZATION_URL`.                                                                                                                        |
| `MODERNE_DX_ORGANIZATION_SKIPSSL`                 | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `MODERNE_DX_ORGANIZATION_URL`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_DX_ORGANIZATION_URL=http://localhost:8091 \
-e MODERNE_DX_ORGANIZATION_UPDATE_INTERVAL_SECONDS=600 \
-e MODERNE_DX_ORGANIZATION_DEFAULTCOMMITOPTIONS=Direct,Branch,Fork,PullRequest,ForkAndPullRequest \
# ... Additional variables
```
</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument Name                                     | Required | Default | Description                                                                                                                                                                                                                                      |
|---------------------------------------------------|----------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.dx.organization.url`                     | `true`   |         | The URL of your GraphQL service that provides organization information. Cannot be combined with `MODERNE_DX_ORGANIZATION_REPOSCSV`.                                                                                                              |
| `--moderne.dx.organization.reposCsv`                | `true`   |         | The path of your repos.csv file that provides organization information. Cannot be combined with `MODERNE_DX_ORGANIZATION_URL`.                                                                                                                   |
| `--moderne.dx.organization.defaultCommitOptions`    | `false`  |         | The commit options used if not specified by the organization service.                                                                                                                                                                            |
| `--moderne.dx.organization.updateIntervalSeconds` | `false`  | `600`   | Specifies how often to request your organization information. Only used when combined with `--moderne.dx.organization.url`.                                                                                                                        |
| `--moderne.dx.organization.skipSsl`                 | `false`  | `false` | Specifies whether or not to skip SSL validation for HTTP connections to this Organization service instance. Only used when combined with `--moderne.dx.organization.url`. This must be set to `true` if you use a self-signed SSL/TLS certificate. |

**Example:**

```bash
java -jar moderne-dx-{version}.jar \
# ... Existing arguments
--moderne.dx.organization.url=http://localhost:8091 \
--moderne.dx.organization.updateIntervalSeconds=600 \
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
