# Configure the Organizations service with Moderne DX

In order for Moderne to obtain information about your organizational structure, you will need to configure the Moderne DX service to point to your [Organizations service](../../moderne-platform/how-to-guides/organizations-service.md). This guide will explain how to do that.

#### Prerequisites

This guide assumes that:

* You are an admin of Moderne DX
* You have deployed Moderne DX in your environment
* You have already [created and deployed an Organizations service in your environment](../../moderne-platform/how-to-guides/organizations-service.md)
* You have already [configured Moderne DX to connect to your Artifactory instance](configure-dx-with-artifactory-access.md)

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

After starting up Moderne DX again, you can now make a curl call to `https://<moderne-dx-url>/graphiql` with the following query:

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

Here's an example of what this call might look like:

{% code overflow="wrap" %}
```bash
curl -X POST -H "Content-Type: application/json" -d '{"query":"query orgs { organizations { id repositoriesPages { count edges { node { origin path branch } } } parent { id } } }"}' https://<moderne-dx-url>/graphql
```
{% endcode %}

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
mod config moderne edit --token=<token> --api=https://<moderne-dx> http://<moderne-dx>
```

This command will ask Moderne DX for all repositories inside the organization you selected and clone them to `<path>`:

```bash
mod git clone moderne <path> <organization-id>
```

Once these are both done, your developers can now start running recipes and committing the results!
