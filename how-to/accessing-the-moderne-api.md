# 🚀 Accessing the Moderne API

Moderne.io offers a GraphQL API at https://api.public.moderne.io for customers to interact with through the usage of a personal access token.

Note: Personal access tokens do not retain roles that are granted to your user account. Actions that require roles (deploying recipes and uploading ASTs) will fail as forbidden if attempted with an access token.

{% hint style="info" %}
If you want to write and test GraphQL queries, you can use the graphql icon at the top right of the UI or go directly to [https://public.moderne.io/graphql](https://public.moderne.io/graphql).

![](../.gitbook/assets/image.png)
{% endhint %}

## Prerequisites

* Create a [Moderne Personal Access Token](../references/create-api-access-tokens.md)

## Go to the Moderne API

* [https://api.public.moderne.io](https://api.public.moderne.io)

## Configure your access token

In the `HTTP Headers` pane of GraphQL Playground, enter in your token for the `Authorization` header.&#x20;

![](../.gitbook/assets/graphql-playground.png)

## (Optional) View the Documentation

After you have configured your personal access token, you can click the _Docs_ tab on the right-hand side of the screen to explore the various Queries and Mutations offered by the API.

![](../.gitbook/assets/graphql-playground-docs.png)

## 🚀 Start Querying!
