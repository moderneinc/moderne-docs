# Deploying recipe artifacts in Moderne DX

To deploy recipe artifacts into Moderne DX, you can make a GraphQL mutation using `https://<moderne-dx-host>:8080/graphql` similar to the following:

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

```shell
{"Authorization": "Bearer <access token used to configure DX>"}
```

{% hint style="info" %}
Postman has a brief primer on how to issue GraphQL requests [here](https://learning.postman.com/docs/sending-requests/graphql/graphql-http/).
{% endhint %}

