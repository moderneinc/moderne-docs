# Creating a personal access token

In order to use the [Moderne GraphQL API](https://api.app.moderne.io/), you will need to create a Personal Access Token.

{% hint style="info" %}
If you want to learn how to use an access token, please go to [Accessing the Moderne API](../user-documentation/accessing-the-moderne-api.md)
{% endhint %}

In this doc, you can find out:

* [How to make a new access token](create-api-access-tokens.md#how-to-make-an-access-token)
* [How to view what access tokens already exist](create-api-access-tokens.md#how-to-view-your-access-tokens)
* [How to revoke access tokens you no longer want](create-api-access-tokens.md#how-to-revoke-an-access-token)
* [Some limitations around these access tokens](create-api-access-tokens.md#limitations)

## How to make an access token

1.  In the top right-hand corner of the app, click on your profile avatar and select _Account Settings_.

    ![Account Settings Menu](../.gitbook/assets/account-settings-menu.png)
2.  Click on _Access Tokens_ in the middle of the page:

    ![Access Token Menu](../.gitbook/assets/access-token-menu.png)
3.  You should now see a page that looks like:

    ![Access Tokens Page](../.gitbook/assets/access-token-page.png)
4. In the text box that says `Enter token name`, enter a descriptive name for your token so that it can easily be distinguished from other tokens.
5.  Press the `generate` button. You should see something that looks like:

    ![Hint: Click the clipboard icon to copy your access token](../.gitbook/assets/obfuscated-token.png)
6. Copy your token to a safe place such as a password manager. You won't be able to see the token again if you close the window.

## How to view your access tokens

From the [access token](https://app.moderne.io/settings/access-token) page (where you previously created the token), you can see a list of all the tokens:

![Access Token List](../.gitbook/assets/access-token-list.png)

## How to revoke an access token

From the [access token](https://app.moderne.io/settings/access-token) page, click _Delete_ next to the token you wish to revoke:

![Delete Access Token](../.gitbook/assets/delete-access-token.png)

## Limitations

* Personal access tokens have the lowest level of permissions possible. They do not have the same permissions as your user account. For instance, actions that require a specific role (such as deploying a recipe or uploading an AST) will fail as forbidden if attempted with an access token.
