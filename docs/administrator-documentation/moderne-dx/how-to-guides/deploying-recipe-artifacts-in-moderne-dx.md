---
sidebar_label: Deploying recipe artifacts
description: How to deploy recipe artifacts with Moderne DX and the Moderne CLI.
---

# Deploying recipe artifacts in Moderne DX

## Deploy using the Moderne GraphQL API

To deploy recipe artifacts using Moderne DX's GraphQL API, you can make a GraphQL mutation using `https://<moderne-dx-host>:8080/graphql` similar to the following (or issue the request through the UI at `https://<moderne-dx-host>:8080/graphiql`).

```graphql
mutation loadRecipes {
  loadRecipes(
    groupId: "org.openrewrite.recipe"
    artifactId: "rewrite-spring"
    version: "LATEST"
  ) {
    id
  }
}
```

In order to execute GraphQL mutations, it is required that an `Authorization` HTTP header be included in the request. You can set the header value in GraphiQL's _Headers_ tab as a JSON object:

```bash
{"Authorization": "Bearer <access token used to configure DX>"}
```

:::info
Postman has a brief primer on how to issue GraphQL requests [here](https://learning.postman.com/docs/sending-requests/graphql/graphql-http/).
:::

## Deploy using the Moderne CLI

To deploy recipe artifacts into Moderne DX, you must first install the recipe artifacts into the local CLI recipe marketplace. The following command downloads OpenRewrite's rewrite-spring recipes artifact from a pre-configured list of artifact repositories such as https://repo.maven.apache.org/maven2.

```bash
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:LATEST
```

Next, upload all recipe artifacts from the local CLI marketplace to Moderne DX using the command:

```bash
mod config recipes moderne push
```
