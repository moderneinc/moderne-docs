---
sidebar_label: Creating a personal access token
description: How to create a personal access token to use the CLI or the Moderne APIs.
---

# Creating a personal access token

In order to use the [Moderne GraphQL API](https://api.app.moderne.io/), you will need to create a Personal Access Token. These tokens have the same level of permissions as your account – meaning that if you are an admin, your tokens will have admin permissions.

:::info
If you want to learn how to use an access token, please go to the [Accessing the Moderne API doc](./accessing-the-moderne-api.md).

If you want to use this token with the Moderne CLI, please see the [CLI getting started guide](../../moderne-cli/getting-started/cli-intro.md#step-3-connect-the-cli-to-moderne) for instructions on how to do that.
:::

In this doc, you can find out:

* [How to make a new access token](#how-to-make-an-access-token)
* [How to view what access tokens already exist](#how-to-view-your-access-tokens)
* [How to revoke access tokens you no longer want](#how-to-revoke-an-access-token)

## How to make an access token

1. In the bottom top-right corner of the app, click on your profile picture and select _Account settings:_

<figure>
  ![](./assets/account-settings.png)
  <figcaption></figcaption>
</figure>

2. Click on _Access Tokens_ in the middle of the page:

<figure>
  ![](./assets/access-tokens.png)
  <figcaption></figcaption>
</figure>

3. You should now see a page that looks like:

<figure>
  ![](./assets/access-tokens-page.png)
  <figcaption></figcaption>
</figure>

4. In the text box that says `Enter token name`, enter a descriptive name for your token so that it can easily be distinguished from other tokens.

5. Set when the token should expire by clicking on the date selector next to the token name:

<figure>
  ![](./assets/access-token-expiration.png)
  <figcaption></figcaption>
</figure>

6. Press the `generate` button. You should see something that looks like:

<figure>
  ![](./assets/obfuscated-token.png)
  <figcaption>_Hint: Click the clipboard icon to copy your access token_</figcaption>
</figure>

6. Copy your token to a safe place such as a password manager. You won't be able to see the token again if you close the window.

## How to view your access tokens

From the [access token](https://app.moderne.io/settings/access-token) page (where you previously created the token), you can see a list of all the tokens:

<figure>
  ![](./assets/tokens-list.png)
  <figcaption></figcaption>
</figure>

## How to revoke an access token

From the [access token](https://app.moderne.io/settings/access-token) page, click _Delete_ icon next to the token you wish to revoke:

<figure>
  ![](./assets/revoke-token.png)
  <figcaption></figcaption>
</figure>

