# Creating SCM access tokens

In order to perform [commits](../user-documentation/recipe-execution-and-commits-with-graphql.md#creating-a-pull-request) using the [Moderne GraphQL API](https://api.public.moderne.io/), you will need to create an SCM Access Token.

Commit tasks like `pullRequest` now support optionally defining a Personal Access Token that you create through your SCM and provide as a GraphQL Mutation input.

You must grant sufficient permission when creating these Personal Access Tokens. These permissions will vary from provider to provider but generally include read/write access to Repositories and Pull Requests.

**Note:** _Bitbucket Data Center and Server requires version 5.5.x or later_

For more information on creating Personal Access Tokens, please see:

* [GitHub - Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* [GitLab - Personal access tokens](https://docs.gitlab.com/ee/user/profile/personal\_access\_tokens.html)
* [Bitbucket Cloud - Generating App Password / Personal Access Token](https://support.blubracket.com/hc/en-us/articles/4404687343124-How-to-Generate-an-App-Password-or-Personal-Access-Token-PAT-in-Bitbucket)
* [Bitbucket Data Center and Server - HTTP access tokens](https://confluence.atlassian.com/bitbucketserver/http-access-tokens-939515499.html)
