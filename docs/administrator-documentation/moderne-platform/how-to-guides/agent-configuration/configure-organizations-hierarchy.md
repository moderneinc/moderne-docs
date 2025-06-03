---
sidebar_label: Organizational hierarchy configuration
description: How to configure your organizational hierarchy.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

Organizational structure is a configured via a `repos.csv` file, accessible to the Agent via the file system or network.

Please see our [creating a repos.csv guide](../../../references/repos-csv.md) for details into how to create and format this file.

## Agent configuration

The `repos.csv` source location is provided to the Agent by setting a variable in the Agent run command. Its value may be a
local path or an unauthenticated HTTP(S) URI. You can also configure how often the Agent looks for changes to this
file (by default it's every 10 minutes).

<Tabs groupId="agent-type">
<TabItem value="oci-container" label="OCI Container">

**Environment variables:**

| Environment variable                               | Required | Default | Description                                                                                                                                                                           |
|----------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MODERNE_AGENT_ORGANIZATION_REPOSCSV`              | `false`  |         | The path to the `repos.csv` file that defines your organizational structure. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`. |
| `MODERNE_AGENT_ORGANIZATION_UPDATEINTERVALSECONDS` | `false`  | 600     | The number of seconds that the agent should wait before it checks for an update to your `repos.csv` file.                                                                             |

**Example:**

```bash
docker run \
# ... Existing variables
-e MODERNE_AGENT_ORGANIZATION_REPOSCSV=/Users/MY_USER/Documents/repos.csv \
# ... Additional variables
```

</TabItem>

<TabItem value="executable-jar" label="Executable JAR">

**Arguments:**

| Argument name                                        | Required | Default | Description                                                                                                                                                                           |
|------------------------------------------------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--moderne.agent.organization.reposCsv`              | `false`  |         | The path to the `repos.csv` file that defines your organizational structure. This could also be an unauthenticated HTTP/S URL in the form of `https://<internal-endpoint>/repos.csv`. |
| `--moderne.agent.organization.updateIntervalSeconds` | `false`  | 600     | The number of seconds that the agent should wait before it checks for an update to your `repos.csv` file.                                                                             |

**Example:**

```bash
java -jar moderne-agent-{version}.jar \
# ... Existing arguments
--moderne.agent.organization.reposCsv=/Users/MY_USER/Documents/repos.csv \
# ... Additional arguments
```

</TabItem>
</Tabs>

## Confirming it works

After starting up the Moderne Agent again, you can now make the following GraphQL query using the embedded GraphiQL IDE found at `https://api.<your-tenant>/graphql`:

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