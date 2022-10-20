# Quick Start: Running your first recipe

To help orient you to Moderne, let's walk through how to run a [recipe ](https://docs.openrewrite.org/v1beta/recipes)on some open-source projects that we have imported into Moderne.

In this guide, we will:

* [**Sign in to Moderne**](#step-1-sign-in)
* [**Find a recipe to run**](#step-4-select-a-recipe)
* [**Filter the recipe to only run on specific repositories**](#step-5-select-specific-repositories)
* [**Run a recipe**](#step-6-run-the-recipe)
* [**Examine the results**](#step-7-view-the-results)
* [**Commit the changes**](#step-8-commit-your-changes)

## Step 1: Sign in

If you're an enterprise user, you'll need to navigate and sign in via the link your company has provided you. Please do that and skip to [step 3](running-your-first-recipe.md#step-3-navigate-to-the-recipe-catalog).&#x20;

If you're not an enterprise user, go to [https://public.moderne.io](https://public.moderne.io) and press "Sign-in with GitHub" as seen below:

<figure><img src="../.gitbook/assets/GitHubLogin.png" alt="Moderne Login Button"><figcaption></figcaption></figure>

## Step 2: Configure GitHub Permissions

The first time you sign in to Moderne through GitHub, you will be presented with an authorization prompt for a few permissions to help enhance your experience.

{% hint style="info" %}
For a better understanding of the permissions requested, please see [GitHub Permissions](../references/github-permissions.md#oauth-permission).
{% endhint %}

<figure><img src="../.gitbook/assets/authentication-github-signin.png" alt="GitHub login permissions"><figcaption><p>GitHub permission request</p></figcaption></figure>

## Step 3: Navigate to the recipe catalog

After you've logged in and granted the appropriate permissions, you'll arrive at the [Moderne home page](https://public.moderne.io/). To explore the catalog of recipes, click on `Catalog` on the left side of the screen:

<figure><img src="../.gitbook/assets/ModerneCatalog.png" alt="Moderne Home Page"><figcaption><p>Moderne home page</p></figcaption></figure>

This will take you to a page that lists all of the recipe categories:

<figure><img src="../.gitbook/assets/ModerneCatalog2.png" alt="Moderne Recipe Catalog"><figcaption><p>Moderne recipe catalog</p></figcaption></figure>

## Step 4: Select a recipe

Let's find a good recipe to start from to help illustrate how to search across multiple repositories.

1. From the [Catalog ](https://public.moderne.io/catalog)page, click on [Java ](https://public.moderne.io/catalog/org.openrewrite.java)from the list of categories.
2. Select the [Cleanup ](https://public.moderne.io/catalog/org.openrewrite.java.cleanup)sub-category.
3. Click on the `Common static analysis issues` recipe.

## Step 5: Select specific repositories

By default, all of the repositories are selected. Let's change that so we only run our recipe on the OpenRewrite repositories. &#x20;

1. Click on the _Select Repositories_ button.
2.  Click on the `<<` arrows at the bottom to clear the selected repositories.&#x20;

    <figure><img src="../.gitbook/assets/RemoveRepositories.png" alt="List of all repositories"><figcaption></figcaption></figure>
3. Press the _Add Filter_ button.
4.  Enter _openrewrite_ in the text box.                                                                                      &#x20;

    <figure><img src="../.gitbook/assets/OpenRewriteFilter.png" alt="OpenRewrite repositories not selected"><figcaption></figcaption></figure>
5. Press the `>>` arrows at the top to select all of the OpenRewrite repositories.
6.  You should now see all of the OpenRewrite repositories listed under _Selected repositories._

    <figure><img src="../.gitbook/assets/SelectedRepositories.png" alt="OpenRewrite repositories selected"><figcaption></figcaption></figure>
7. Click anywhere outside of the filter box to confirm your selection.

## Step 6: Run the recipe

Click _Dry Run_ to start the recipe. You might be asked for additional GitHub permissions after you click this button.

<figure><img src="../.gitbook/assets/DryRun.png" alt="Dry run selection"><figcaption></figcaption></figure>

On the results page, you will see a summary of your recipe criteria and an indication of progress.

<figure><img src="../.gitbook/assets/RecipeResults.png" alt="Example results"><figcaption></figcaption></figure>

Each result shows the number of files searched and how many changes were detected.

To see the proposed changes, click on either the ![](../.gitbook/assets/diff-button.png) button under `Actions` or the name of the repository (e.g. _openrewrite/rewrite_).

## Step 7: View the results

The resulting diff allows you to preview the changes from the recipe before you decide what you want to do.

<figure><img src="../.gitbook/assets/RecipeDiff.png" alt="Recipe diff"><figcaption></figcaption></figure>

If you're unsure why something changed, you can click on the three dots (`...`) at the top right of any file and select `Why did this change?`

For instance, in the above example, `= false` was removed due to the [Explicit initialization rule](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.ExplicitInitialization).&#x20;

## Step 8: Commit your changes

Once you've confirmed you want to make the changes, the next course of action is to commit everything.&#x20;

In the results view, select the repositories you want to commit and then click _Commit Selected_.

<figure><img src="../.gitbook/assets/CommitSelected.png" alt="Repositories selected to commit changes on"><figcaption></figcaption></figure>

This will open a prompt that allows you to select different actions such as committing directly, opening a pull request, etc.

<figure><img src="../.gitbook/assets/CommitDialogue.png" alt="Commit change dialogue box"><figcaption></figcaption></figure>

From this prompt, you can customize either the _Branch Name_ or the _Commit Message_ to match the contributing guidelines of a particular repository.

{% hint style="info" %}
You will need to have [specific permissions](https://docs.moderne.io/references/github-permissions) depending on the commit strategy you decide to go with.
{% endhint %}

## Step 9: 🎉 Profit

You've now run and committed your first recipe. Way to go!!