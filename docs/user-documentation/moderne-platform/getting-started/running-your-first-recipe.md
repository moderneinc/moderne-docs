---
description: A step-by-step walkthrough of running a recipe, from signing in to committing the changes.
---

import ReactPlayer from 'react-player';

# Quickstart: Running your first recipe

To help orient you to Moderne, let's walk through how to run a [recipe](https://docs.openrewrite.org/concepts-and-explanations/recipes) on some open-source projects that we have imported into Moderne.

In this guide, we will:

* [**Sign in to Moderne**](#step-1-sign-in)
* [**Select an organization**](#step-3-optionally-select-an-organization)
* [**Find a recipe to run**](#step-5-select-a-recipe)
* [**Run a recipe**](#step-6-run-the-recipe)
* [**Examine the results**](#step-7-view-the-results)
* [**Commit the changes**](#step-8-commit-your-changes)

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=cHRi6jRPMUI' controls="true" />

## Step 1: Sign in

If you're an enterprise user, you'll need to navigate to and sign in with the link your company has provided you. Please do that and skip to [step 3](#step-3-optionally-select-an-organization).

If you're not an enterprise user, go to [https://app.moderne.io](https://app.moderne.io) and sign in:

<figure>
  ![Moderne Login Button](./assets/login-page.png)
  <figcaption></figcaption>
</figure>

## Step 2: Configure your source code manager permissions

The first time you sign in to Moderne, you will be presented with an authorization prompt for a few permissions to help enhance your experience. This authorization screen will depend on which source code manager you signed in with.

:::info
For a better understanding of the permissions requested, please see [GitHub Permissions](../../../administrator-documentation/moderne-platform/references/github-permissions.md#oauth-permission).
:::

<figure>
  ![GitHub login permissions](./assets/authentication-github-signin.png)
  <figcaption>_An example of what the GitHub permission request might look like._</figcaption>
</figure>

## Step 3: (Optionally) select an organization

After you've logged in and granted the appropriate permissions, you'll arrive at the [Moderne home page](https://app.moderne.io/).

If you went to run a recipe right now, you would find that some repositories are already selected to run against. In public Moderne, the `Default` organization is selected (a diverse selection of open-source repositories). In an enterprise instance of Moderne, the `All` organization is selected if you haven't set up an organizational hierarchy (meaning all recipes will run against every repository in the tenant). If you have configured an organizational hierarchy, it will be whatever that service returns for your user.

If you'd prefer to run against a different group of repositories so that you can get relevant results more quickly, you can: select the organization that matches your needs, set up an [Organization hierarchy](../../../administrator-documentation/moderne-platform/how-to-guides/agent-configuration/configure-organizations-hierarchy.md) (for enterprise users), or follow our [instructions for defining user configured organizations](../how-to-guides/managing-user-configured-organizations.md#how-to-create-a-user-configured-organization).

<figure>
  ![](./assets/organization-selector.png)
  <figcaption>_Selecting an organization_</figcaption>
</figure>

## Step 4: Navigate to the recipe marketplace

Once you've decided what repositories you want to run recipes against, click on `Marketplace` on the left side of the screen (If you aren't already there):

<figure>
  ![Moderne Home Page](./assets/marketplace.png)
  <figcaption>_Moderne home page_</figcaption>
</figure>

This will take you to a page that lists all of the recipe categories. This is the default page you see when you log in.

## Step 5: Select a recipe

Let's find a good recipe to start from to help illustrate how to search across multiple repositories.

1. From the [Marketplace](https://app.moderne.io/marketplace), click on [Static analysis and remediation](https://app.moderne.io/marketplace/org.openrewrite.staticanalysis) and then [Core](https://app.moderne.io/marketplace/org.openrewrite.staticanalysis.core).
2. Click on the `Common static analysis issues` recipe.

## Step 6: Run the recipe

Click _Dry Run_ to start the recipe. You might be asked for additional GitHub permissions after you click this button.

<figure>
  ![Dry run selection](./assets/DryRun.png)
  <figcaption>Dry run selection</figcaption>
</figure>

On the results page, you will see a summary of your recipe criteria, an indication of progress, and some of the results that were found.

<figure>
  ![Example results](./assets/recipe-results.png)
  <figcaption>Example results</figcaption>
</figure>

## Step 7: View the results

You can click on any repository to check out the changes. 

The resulting diff allows you to preview the changes from the recipe before you decide what you want to do.

<figure>
  ![Recipe diff](./assets/RecipeDiff.png)
  <figcaption>Recipe diff</figcaption>
</figure>

If you're unsure why something changed, you can click on the three dots (`...`) at the top right of any file and select `Why did this change?`

For instance, in the above example, we modified initializations based on the [explicit initialization recipe](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ExplicitInitialization).

## Step 8: Commit your changes

Once you've confirmed you want to make the changes, the next course of action is to commit everything.

:::warn
Depending on what organization you ran the recipe against, you may not have access to commit code or create a PR. Please don't try and open PRs against random projects that aren't your own.
:::

In the results view, select the repositories you want to commit and then click _Commit selected results_ in the bottom left.

<figure>
  ![Repositories selected to commit changes on](./assets/CommitSelected.png)
  <figcaption>Repositories selected to commit changes on</figcaption>
</figure>

This will open a prompt that allows you to select different actions such as committing directly, opening a pull request, etc.

<figure>
  ![Commit change dialogue box](./assets/CommitDialogue.png)
  <figcaption>Commit change dialogue box</figcaption>
</figure>

From this prompt, you can customize either the _Branch Name_ or the _Commit Message_ to match the contributing guidelines of a particular repository.

:::info
You will need to have [specific permissions](../../../administrator-documentation/moderne-platform/references/github-permissions.md) depending on the commit strategy you decide to go with.
:::

## Step 9: 🎉 Profit

You've now run and committed your first recipe. Way to go!!
