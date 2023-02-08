---
description: >-
  Many organizations desire the ability to control the organizational structure
  (repository groupings) of their repositories within the Moderne platform in a
  dynamic way.
---

# Organizations service

To facilitate this need, Moderne provides an optional integration with an Organizations service that is hosted inside your environment.

To integrate, you will need to deploy an Organizations service that fulfills the below GraphQL contract and [configure the service in your agent](../how-to/on-premise-agent/configure-repository-groups.md). Moderne provides a reference implementation that can be used as a starting point for deploying this service.

* [Reference implementation](https://github.com/moderneinc/moderne-organizations)
*   GraphQL Schema

    ```graphql
    type Query {
       """
        The list of organizations that a repository belongs to.
        """
        organizations(repository: RepositoryInput): [Organization!]
    }

    type Organization {
        id: ID!
        name: String!
    }

    input RepositoryInput {
        path: String!
        origin: String
        branch: String
    }
    ```
* Example query&#x20;

```
curl --request POST
--url http://<your-orgs-service>/graphql
--header 'Content-Type: application/json'
--data '{"query":"query orgs($repository: RepositoryInput) {\n\torganizations(repository: $repository) {\n\t\tid\n\t\tname\n\t}\n}","operationName":"orgs","variables":{"repository":{"origin":"github.com","path":"Netflix/curator","branch":"master"}}}'
```

The platform communicates with the Organizations service through the Moderne agent when configured and updates the global repository groupings through this service on an interval (10 mins or configured value). See the architecture diagram below.

<figure><img src="../.gitbook/assets/image (15) (2).png" alt=""><figcaption></figcaption></figure>

