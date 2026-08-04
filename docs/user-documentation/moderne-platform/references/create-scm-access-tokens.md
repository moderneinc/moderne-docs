---
title: SCM access tokens
sidebar_label: SCM access tokens
description: Explains how Moderne obtains a credential for your source code management system, both by connecting your account and by accepting a token you supply for automation.
---

import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/user-documentation/moderne-platform-v1/references/create-scm-access-tokens" />

# SCM access tokens

Before Moderne can show you source code, display the diffs a recipe produced, or deliver those changes back to your repositories, it needs a credential for your source code management (SCM) system. This is separate from your [Moderne tokens](./moderne-tokens.md), which only authenticate you to the Platform itself.

There are two ways Moderne can get that credential:

* **[Connecting your SCM account](#connecting-your-scm-account)** runs an authorization flow in your browser and stores the resulting token against your user. This is how the Platform UI works, and it is the right choice for day-to-day interactive use.
* **[Supplying your own token](#supplying-your-own-token-for-automation)** passes an access token that you created in your SCM directly to the Moderne API. This is what you should use for automation and scripting, where a browser-based flow isn't practical.

## How Moderne uses your SCM credentials

In both cases the credential is yours, and Moderne acts as you. A token never grants Moderne access beyond what your own SCM account already has, which has two consequences worth knowing about:

* You will only see diffs for repositories you can read. If a recipe changed a repository you don't have access to, you will still see its file and change counts, but not the underlying changes.
* A commit will only succeed for repositories you can push to.

This applies to administrators too. Being an administrator in Moderne does not grant access to repositories your SCM account cannot reach. For more on how this interacts with the rest of the permission model, please read the [user roles reference](../../../administrator-documentation/moderne-platform/references/user-roles.md).

## Connecting your SCM account

The Platform manages these connections under **Account settings** → **SCM connections**, where your providers are split into **Connected SCMs** and **Disconnected SCMs**. Press **Connect** next to a disconnected provider to authorize it. Authorization runs in a popup window, so if nothing seems to happen when you press **Connect**, check whether your browser blocked it.

You don't have to start from the settings page, though. Moderne also prompts you in context whenever you attempt something that needs a connection you don't have yet:

* Opening a diff for a repository you haven't authorized shows an `SCM authorization required` message with a **Connect** button.
* Committing changes, or approving, merging, and closing pull requests in bulk, prompts you to authorize the providers involved before it will continue.
* Clicking your avatar in the top right corner reveals a row of provider icons, where you can click any provider you haven't connected yet to authorize it directly.

Whichever route you take, the resulting OAuth token is stored against your Moderne user rather than your browser session, so it stays in place when you log out and log back in. A connected account is what backs most of the SCM-related work you do in the Platform, including viewing the source code and diffs behind recipe results, committing changes and opening pull requests, and seeing the current status of pull requests Moderne opened.

The permissions Moderne requests during this flow are determined by the SCM application your administrator configured. If your organization uses GitHub, the [GitHub permissions reference](../../../administrator-documentation/moderne-platform/references/github-permissions.md) covers exactly what a GitHub App or OAuth App asks for and why.

### Reviewing and disconnecting

The **Connected SCMs** table lists each provider you have authorized, along with when its current token was created and when that token expires. Where a provider issues credentials that expire, Moderne renews them for you automatically as they approach that date, so a connection normally keeps working without any action on your part. Connections you don't use for 90 days are removed, and you will need to authorize again the next time you need one.

To drop a connection, press **Disconnect** and confirm. There is no separate reconnect action: the provider simply moves back to **Disconnected SCMs**, where you can press **Connect** again. Doing this is also the fix if you see an error telling you your SCM token is invalid or has expired.

## Supplying your own token for automation

The `commit` mutation in the [Moderne GraphQL API](https://api.app.moderne.io/) accepts an `scmAccessTokens` field, which lets you provide an access token you created yourself, keyed by origin. When you provide one, Moderne uses it instead of looking up the account you connected for that origin:

```json
"scmAccessTokens": [
  { "origin": "github.com", "value": "MY_SCM_PERSONAL_ACCESS_TOKEN" }
]
```

This is the mechanism to use when you are [running recipes and creating pull requests through the API](../how-to-guides/recipe-execution-and-commits-with-graphql.md#creating-a-pull-request), since it requires no browser interaction. The token is still your own credential, so everything in [how Moderne uses your SCM credentials](#how-moderne-uses-your-scm-credentials) continues to apply.

:::warning
The `scmAccessTokens` field applies only to the `commit` mutation. Other operations that reach your SCM, such as resolving pull request status or approving and merging pull requests in bulk, always use the account you connected. If you need those operations as well, you will still have to [connect your SCM account](#connecting-your-scm-account) at least once.
:::

### Granting the right permissions

The exact permissions vary from provider to provider, but a token you create for this purpose generally needs read and write access to repositories and pull requests. On GitHub, pushing changes that touch `.github/workflows` files additionally requires workflow permissions.

:::note
Bitbucket Data Center and Server requires version 5.5.x or later.
:::

For instructions on creating a token in your provider, please see:

* [GitHub: creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)
* [GitLab: personal access tokens](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
* [Bitbucket Cloud: generating an app password or personal access token](https://confluence.atlassian.com/bamboo/personal-access-tokens-976779873.html)
* [Bitbucket Data Center and Server: HTTP access tokens](https://confluence.atlassian.com/bitbucketserver/http-access-tokens-939515499.html)
