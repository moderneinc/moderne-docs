# Configure the Organizations service with Moderne DX

Many organizations desire the ability to dynamically control the organizational structure (repository groupings) of their repositories within Moderne DX. To facilitate this need, Moderne provides an integration with an Organizations service that is hosted in your environment.

In order for Moderne to obtain information about your organizational structure, you will need to configure the Moderne DX service to point to your Organizations service. This guide will explain how to do that.

#### Prerequisites

This guide assumes that:

* You are an admin of Moderne DX
* You have deployed Moderne DX in your environment
* You have already [configured Moderne DX to connect to your Artifactory instance](configure-dx-with-artifactory-access.md)

## Organizations service template and API

You have two main options for building this service. You can:

1. (**Recommended**) Fork our [Organizations service template](https://github.com/moderneinc/moderne-organizations) and modify it to meet your needs. Please see the [README](https://github.com/moderneinc/moderne-organizations/blob/main/README.md) for how to spin this up quickly. It can be as simple as updating a CSV file.
2. Build your own service that fulfills the [GraphQL contract](https://github.com/moderneinc/moderne-organizations/blob/main/src/main/resources/schema/moderne-organizations.graphqls) using any GraphQL stack (e.g., NodeJS, Rust, C#, etc.)

We generally recommend forking the template and modifying it as, in most cases, that will be faster and easier than building it yourself. Regardless of which one you choose, however, some developer time will be required on your end.

## Generating repos.csv

If you choose to fork our Organizations service template, you will have to generate your `repos.csv` file. This file takes the following format:

<table><thead><tr><th width="171">cloneUrl</th><th width="99">branch</th><th>org1</th><th>org2</th><th>org3</th></tr></thead><tbody><tr><td><code>https://github.com/openrewrite/rewrite-recipe-bom</code></td><td>main</td><td>Open Source</td><td>ALL</td><td></td></tr><tr><td><code>https://github.com/Netflix/spectator-go</code></td><td>main</td><td>Netflix</td><td>Open Source</td><td>ALL</td></tr></tbody></table>

The organizations under `org1`, `org2`, `org3`, etc. represent the hierarchy of organizations. There is no limit to the number of organizations that can be provided via this CSV.&#x20;

The above example would be used in Moderne DX to generate an organizational listing of the following:

* ALL
  * Open Source
    * `https://github.com/openrewrite/rewrite-recipe-bom:main`
  * Netflix
    * `https://github.com/Netflix/spectator-go:main`

To generate this `repos.csv`, we recommend using "[repo fetchers](https://github.com/moderneinc/moderne-organizations/blob/main/repo-fetchers/README.md)" inside our Organizations service template.

## Deploying the service

How you deploy the service is largely up to your company. With that being said, there are a few important things to be aware of:

* Communication with the Organizations service is done through the [Moderne agent](../../moderne-platform/how-to-guides/agent-configuration/agent-configuration.md). Therefore, this service **must** be accessible from the agent.
* Moderne will make a request per repository to the Organizations service once every 10 minutes by default (you can change this interval in your [agent configuration](../../moderne-platform/how-to-guides/agent-configuration/configure-organizations-service.md)). Please ensure that you have metrics to track how this service is performing so you can adjust it over time.
* You'll want a minimum system spec of 2 CPU cores, 8 GB of memory, and at least 10 GB of persistent storage.

## Organizations service configuration

The following table contains all of the variables/arguments you need to add to your Moderne DX service run command in order for it to interact with your organizations service. Please note that these variables/arguments must be combined with ones found in other steps in the [Configuring the Moderne DX service guide](dx-configuration.md).

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
