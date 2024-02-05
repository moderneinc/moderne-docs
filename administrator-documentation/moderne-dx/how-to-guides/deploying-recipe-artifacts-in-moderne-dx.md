# Deploying recipe artifacts in Moderne DX

To deploy recipe artifacts into Moderne DX, you will make a POST request to `<moderne-dx>/graphql` in the following format:

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

You will need to set an `Authorization` header of the format `Bearer <token you set up when configuring DX>`.
