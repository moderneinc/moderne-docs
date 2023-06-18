# Recipe execution and commits with the Moderne API

Imagine you found a recipe you would like to run as part of your organization's automation process (such as updating the Gradle plugin version when a new release is published). Rather than manually running this recipe each time, you can use Moderne's GraphQL API to speed this process up with automation.

To help you understand how to automate recipe execution and commits, we'll walk through all the steps necessary to use Moderne's GraphQL API. By the end, you should know how to:

* [Execute recipes](recipe-execution-and-commits-with-graphql.md#recipe-execution)
* [Verify that recipes have been completed](recipe-execution-and-commits-with-graphql.md#verify-recipe-completion)
* [Retrieve repository results](recipe-execution-and-commits-with-graphql.md#retrieve-repositories-with-results)
* [Commit changes](recipe-execution-and-commits-with-graphql.md#creating-a-pull-request)
* [Ensure that committed changes are correct](recipe-execution-and-commits-with-graphql.md#verify-commit-job)

### Prerequisites:

This guide assumes that you:

1. Know how to use and interact with GraphQL APIs.
2. [Have created a Moderne personal access token](../references/create-api-access-tokens.md).
3. [Have created an SCM access token.](../references/create-scm-access-tokens.md)

### Recipe execution

1. To begin, you'll want to decide what repositories you want your recipe to run on. You have three options for selecting repositories: choosing an existing organization, creating a new repository group, or selecting an existing repository group. Once you've selected or created one, you can proceed to step 2.

  ![](../.gitbook/assets/repository-selection-options.png)

2.  Navigate to the recipe you wish to run and fill out the recipe options.

  ![](../.gitbook/assets/update-gradle-plugin.png)

3. Click the `See how to run against the API` link. This will provide you with the query that will be run when executing a recipe run. Additionally, the appropriate variables will be added to this query based on your repository selection from step 1.

4. You can then execute a recipe with the following mutation:

{% tabs %}
{% tab title="Execute Recipe Mutation" %}
```graphql
mutation executeRecipe($input: RecipeRunInput!) {
  runRecipe(run: $input) {
    id
  }
}
```
{% endtab %}

{% tab title="Mutation Variables" %}
Please note that the `repositoryFilter` section will be null if you've selected an organization. Instead, an `organizationId` will be added with the Id of the organization you selected.

```json
{
  "input": {
    "recipe": {
      "id": "org.openrewrite.gradle.plugins.UpgradePluginVersion",
      "options": [
        { "name": "pluginIdPattern", "value": "com.gradle.plugin-publish" },
        { "name": "newVersion", "value": "1.1.0" }
      ]
    },
    "repositoryFilter": [ 
      {
        "branch": "master",
        "origin": "github.com",
        "path": "gradle-dependency-analyze/gradle-dependency-analyze"
      },
      {
        "branch": "master",
        "origin": "github.com",
        "path": "gradle/gradle-checksum"
      }
    ]
  }
}
```
{% endtab %}

{% tab title="cURL" %}
{% code overflow="wrap" %}
```shell
curl --request POST
--url https://api.app.moderne.io/graphql
--header 'Authorization: Bearer <YOUR MODERNE TOKEN HERE>'
--header 'Content-Type: application/json'
--data '{"query":"# Moderne API: https://api.app.moderne.io/graphql\nmutation executeRecipe($input: RecipeRunInput!) {\nrunRecipe(run: $input) {\n id\n}\n}","variables":{"input":{"recipe":{"id":"org.openrewrite.gradle.plugins.UpgradePluginVersion","options":[{"name":"pluginIdPattern","value":"nebula.maven-nebula-publish"},{"name":"newVersion","value":"19"}]},"repositoryFilter":[{"branch":"main","origin":"github.com","path":"moderneinc/eureka-server"},{"branch":"main","origin":"github.com","path":"moderneinc/moderne-agent-model"},{"branch":"main","origin":"github.com","path":"moderneinc/moderne-agent"}]}},"operationName":"executeRecipe"}'
```
{% endcode %}
{% endtab %}
{% endtabs %}

5. The mutation will return a response that contains the `id` of the recipe run which will be used in the next step to poll for the completion of the recipe. Example response:

```graphql
{
  "data": {
    "runRecipe": {
      "id": "5LPSt"
    }
  }
}
```

### Verify recipe completion

1. You will now need to poll (Moderne's web interface uses a 3-second interval) with the query shown below using the `id` from the [recipe execution mutation](recipe-execution-and-commits-with-graphql.md#recipe-execution).

{% tabs %}
{% tab title="Query Recipe Run" %}
```graphql
query runRecipeName($id: ID!) {
  recipeRun(id: $id) {
    recipe {
      id
      name
    }
    state
  }
}
```
{% endtab %}

{% tab title="Query Variables" %}
```json
{ "id": "sI1M0" }
```
{% endtab %}

{% tab title="cURL" %}
{% code overflow="wrap" %}
```shell
curl --request POST
--url https://api.app.moderne.io/graphql
--header 'Authorization: Bearer <YOUR MODERNE TOKEN HERE>'
--header 'Content-Type: application/json'
--data '{"query":"# Moderne API: https://api.app.moderne.io/graphql\nquery runRecipeName($id: ID!) {\n recipeRun(id: $id) {\n recipe {\n id\n name\n **typename\n }\n state\n **typename\n }\n}","variables":{"id":"sI1M0"},"operationName":"runRecipeName"}'
```
{% endcode %}
{% endtab %}
{% endtabs %}

2\. Once you receive a response with a `FINISHED` or `ERROR` state, you can then retrieve the repositories where changes were made. Example response:

```json
{
  "data": {
    "recipeRun": {
      "recipe": {
        "id": "org.openrewrite.gradle.plugins.UpgradePluginVersion",
        "name": "Update a Gradle plugin by id"
      },
      "state": "FINISHED"
    }
  }
}
```

### Retrieve repositories with results

1. Using the `id` from the [recipe execution](recipe-execution-and-commits-with-graphql.md#recipe-execution) response, you can now retrieve the repositories where changes were made using the query below.

{% tabs %}
{% tab title="Retrieve Repositories Query" %}
```graphql
query selectAllRepositoriesWithResults($id: ID!, $first: Int, $after: String) {
  recipeRun(id: $id) {
    summaryResultsPages(
      first: $first
      after: $after
      filterBy: { onlyWithResults: true }
    ) {
      count
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          repository {
            __typename
            origin
            path
            branch
          }
          state
        }
      }
    }
  }
}
```
{% endtab %}

{% tab title="Query Variables" %}
```json
{
  "id": "XHxCx",
  "first": 100 // This is page size. Should your result set exceed this you will need to loop and re-query for the next page(s) until hasNextPage is false in the result.
}
```
{% endtab %}

{% tab title="cURL" %}
{% code overflow="wrap" %}
```shell
curl --request POST
--url https://api.app.moderne.io/graphql
--header 'Authorization: Bearer YOUR MODERNE TOKEN HERE'
--header 'Content-Type: application/json'
--data '{"query":"query selectAllRepositoriesWithResults($id: ID!, $first: Int, $after: String) {\n recipeRun(id: $id) {\n summaryResultsPages(\n first: $first\n after: $after\n filterBy: { onlyWithResults: true }\n ) {\n count\n pageInfo {\n hasNextPage\n endCursor\n }\n edges {\n node {\n repository {\n __typename\n origin\n path\n branch\n }\n state\n }\n }\n }\n\t}\n}","variables":{"id":"XHxCx"},"operationName":"selectAllRepositoriesWithResults"}'
```
{% endcode %}
{% endtab %}
{% endtabs %}

2. You can then use the `edges` array in the response, to build up the repository list used in the next step of creating a pull request. Example response:

```json
{
  "data": {
    "recipeRun": {
      "summaryResultsPages": {
        "count": 1,
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "0"
        },
        "edges": [
          {
            "node": {
              "repository": {
                "__typename": "GitHubRepository",
                "origin": "github.com",
                "path": "gradle/gradle-checksum",
                "branch": "master"
              },
              "state": "FINISHED"
            }
          }
        ]
      }
    }
  }
}
```

### Creating a pull request

1. Next, we will perform the `pullRequest` mutation to create a pull request with our changes. We will be using the`id` from [recipe execution ](recipe-execution-and-commits-with-graphql.md#recipe-execution)and the response from the previous step to construct the mutation variables for committing a pull request. See the mutation variables tab below.

{% tabs %}
{% tab title="Pull Request Mutation" %}
```graphql
mutation pullRequest {
	pullRequest(
		commit: {
			recipeRunId: "Dxvsv"
			branchName: "refactor/update-a-gradle-plugin-by-id"
			message: "refactor: Update a Gradle plugin by id"
			repositories: [
				{
					branch: "master"
					origin: "github.com"
					path: "gradle/gradle-checksum"
				}
			]
			scmAccessToken: "MY_SCM_ACCESS_TOKEN"
		}
		pullRequestTitle: "Example PR title"
		pullRequestBody: "Example PR body"
		draft: false
	) {
		id
		started
		email
		completed
		summaryResults {
			count
			successfulCount
			failedCount
			noChangeCount
		}
	}
}

```
{% endtab %}

{% tab title="Mutation Variables" %}
```graphql
{
  "isDraft": false,
  "commitInput": {
    "recipeRunId": "Dxvsv",
    "branchName": "refactor/update-a-gradle-plugin-by-id",
    "message": "refactor: Update a Gradle plugin by id",
    "repositories": [
      {
        "branch": "master",
        "origin": "github.com",
        "path": "gradle/gradle-checksum"
      },
      {
        "branch": "master",
        "origin": "github.com",
        "path": "gradle-nexus/publish-plugin"
      }
    ],
    # Optional
    "scmAccessToken": "MY_SCM_PERSONAL_ACCESS_TOKEN"
  },
  "pullRequestTitle": "refactor: Update a Gradle plugin by id", // Optional
  "pullRequestBody": "refactor: Update a Gradle plugin by id" // Optional
}
```
{% endtab %}

{% tab title="cURL" %}
{% code overflow="wrap" %}
```shell
curl --request POST
--url https://api.app.moderne.io/graphql
--header 'Authorization: Bearer <YOUR MODERNE TOKEN HERE>'
--header 'Content-Type: application/json'
--data '{"query":"mutation pullRequest(\n $commitInput: CommitInput!\n $pullRequestTitle: String\n $pullRequestBody: Base64\n $isDraft: Boolean! = false\n) {\n commit: pullRequest(\n commit: $commitInput\n pullRequestTitle: $pullRequestTitle\n pullRequestBody: $pullRequestBody\n draft: $isDraft\n scmAccessToken: $scmPersonalAccessToken) {\n id\n started\n email\n completed\n summaryResults {\n count\n successfulCount\n failedCount\n noChangeCount\n **typename\n }\n **typename\n }\n}","variables":{"isDraft":false,"commitInput":{"recipeRunId":"Dxvsv","branchName":"refactor/update-a-gradle-plugin-by-id","message":"refactor: Update a Gradle plugin by id","repositories":[{"branch":"master","origin":"github.com","path":"gradle/gradle-checksum"},{"branch":"master","origin":"github.com","path":"gradle-nexus/publish-plugin"}]},"pullRequestTitle":"refactor: Update a Gradle plugin by id","pullRequestBody":"refactor: Update a Gradle plugin by id", "scmPersonalAccessToken": "MY_SCM_PERSONAL_ACCESS_TOKEN"},"operationName":"pullRequest"}'
```
{% endcode %}
{% endtab %}
{% endtabs %}

2. Once the mutation is executed we will receive a response with the commit `id` that we can then poll for the completion of the commit. Example response:

```json
{
  "data": {
    "pullRequest": {
      "id": "c83315a1-397f-44cb-9ef2-9a2ca195dda6",
      "started": "2022-12-01T22:46:01.818313Z",
      "email": "dev@null",
      "completed": 0,
      "summaryResults": {
        "count": 1,
        "successfulCount": 0,
        "failedCount": 0,
        "noChangeCount": 0
      }
    }
  }
}
```

### Verify commit job

1. Using the `id` returned from the [pull request mutation](recipe-execution-and-commits-with-graphql.md#creating-a-pull-request) we can then poll for the completion of the commit job. When the response is returned with the `completed` property equal to the `commits.count` property the job has been completed. The `summaryResults` property will contain the count of success, failure, and no changes commit jobs. Detailed statuses are found on the `commits` property. This is a paginated query so you may need to loop through multiple pages if you wish to see detailed results for each commit.

{% tabs %}
{% tab title="Commit Job Query" %}
```graphql
query commitJob(
  $id: ID!
  $first: Int = 50
  $after: String
  $filterBy: CommitJobFilterInput
  $orderBy: CommitJobOrderInput
) {
  commitJob(id: $id) {
    id
    started
    email
    completed
    summaryResults {
      count
      successfulCount
      failedCount
      noChangeCount
    }
    recipeRunId
    message
    extendedMessage
    options {
      ... on PullRequestOptions {
        branchName
        draft
        pullRequestBody
        pullRequestTitle
      }
    }
    started
    commits(
      first: $first
      after: $after
      filterBy: $filterBy
      orderBy: $orderBy
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      count
      edges {
        node {
          state
          stateMessage
          modified
          repository {
            origin
            path
            branch
            ... on GitHubRepository {
              organization
              name
              ingested
            }
          }
          resultLink
        }
      }
    }
  }
}
```
{% endtab %}

{% tab title="Query Variables" %}
```json
{
  "first": 50, // Page size
  "id": "c83315a1-397f-44cb-9ef2-9a2ca195dda6"
}{
```
{% endtab %}

{% tab title="cURL" %}
{% code overflow="wrap" %}
```shell
curl --request POST \
  --url https://api.app.moderne.io/graphql \
  --header 'Authorization: Bearer <YOUR MODERNE TOKEN HERE>' \
  --header 'Content-Type: application/json' \
  --data '{"query":"query commitJob(\n  $id: ID!\n  $first: Int = 50\n  $after: String\n  $filterBy: CommitJobFilterInput\n  $orderBy: CommitJobOrderInput\n) {\n  commitJob(id: $id) {\n    id\n    started\n    email\n    completed\n    summaryResults {\n      count\n      successfulCount\n      failedCount\n      noChangeCount\n      __typename\n    }\n    __typename\n    recipeRunId\n    message\n    extendedMessage\n    options {\n      ... on PullRequestOptions {\n        branchName\n        draft\n        pullRequestBody\n        pullRequestTitle\n        __typename\n      }\n      __typename\n    }\n    started\n    commits(\n      first: $first\n      after: $after\n      filterBy: $filterBy\n      orderBy: $orderBy\n    ) {\n      pageInfo {\n        hasNextPage\n        endCursor\n        __typename\n      }\n      count\n      edges {\n        node {\n          state\n          stateMessage\n          modified\n          repository {\n            origin\n            path\n            branch\n            ... on GitHubRepository {\n              organization\n              name\n              ingested\n              __typename\n            }\n            __typename\n          }\n          resultLink\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n","variables":{"first":50,"id":"c83315a1-397f-44cb-9ef2-9a2ca195dda6"},"operationName":"commitJob"}'
```
{% endcode %}
{% endtab %}
{% endtabs %}

2. Example response:

```json
{
  "data": {
    "commitJob": {
      "id": "c83315a1-397f-44cb-9ef2-9a2ca195dda6",
      "started": "2022-12-01T22:46:01.818313Z",
      "email": "dev@null.com",
      "completed": 1,
      "summaryResults": {
        "count": 1,
        "successfulCount": 1,
        "failedCount": 0,
        "noChangeCount": 0
      },
      "recipeRunId": "NazKj",
      "message": "refactor: Update a Gradle plugin by id",
      "extendedMessage": null,
      "options": {
        "branchName": "refactor/update-a-gradle-plugin-by-id",
        "draft": false,
        "pullRequestBody": null,
        "pullRequestTitle": null
      },
      "commits": {
        "pageInfo": {
          "hasNextPage": false,
          "endCursor": "c2ltcGxlLWN1cnNvcjA="
        },
        "count": 1,
        "edges": [
          {
            "node": {
              "state": "COMPLETED",
              "stateMessage": null,
              "modified": "2022-12-01T22:46:01.818313Z",
              "repository": {
                "branch": "master",
                "origin": "github.com",
                "path": "gradle/gradle-checksum"
              },
              "resultLink": "https://github.com/gradle/gradle-checksum/pull/14"
            }
          }
        ]
      }
    }
  }
}
```
