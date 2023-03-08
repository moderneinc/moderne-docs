# Quickstart: Running your first recipe

To help orient you to Moderne, let's walk through how to run a [recipe ](https://docs.openrewrite.org/v1beta/recipes)on some open-source projects that we have imported into Moderne.

In this guide, we will:

* [**Sign in to Moderne**](running-your-first-recipe.md#step-1-sign-in)
* [**Create a repository group**](running-your-first-recipe.md#step-3-optionally-create-a-repository-group)
* [**Find a recipe to run**](running-your-first-recipe.md#step-5-select-a-recipe)
* [**Run a recipe**](running-your-first-recipe.md#step-6-run-the-recipe)
* [**Examine the results**](running-your-first-recipe.md#step-7-view-the-results)
* [**Commit the changes**](running-your-first-recipe.md#step-8-commit-your-changes)

## Step 1: Sign in

If you're an enterprise user, you'll need to navigate to and sign in with the link your company has provided you. Please do that and skip to [step 3](running-your-first-recipe.md#step-3-optionally-create-a-repository-group).

If you're not an enterprise user, go to [https://public.moderne.io](https://public.moderne.io) and press "Sign-in with GitHub" as seen below:

<figure><img src="../.gitbook/assets/GitHubLogin.png" alt="Moderne Login Button"><figcaption></figcaption></figure>

## Step 2: Configure GitHub permissions

The first time you sign in to Moderne through GitHub, you will be presented with an authorization prompt for a few permissions to help enhance your experience.

{% hint style="info" %}
For a better understanding of the permissions requested, please see [GitHub Permissions](../references/github-permissions.md#oauth-permission).
{% endhint %}

<figure><img src="../.gitbook/assets/authentication-github-signin.png" alt="GitHub login permissions"><figcaption><p>GitHub permission request</p></figcaption></figure>

## Step 3: (Optionally) create a repository group

After you've logged in and granted the appropriate permissions, you'll arrive at the [Moderne home page](https://public.moderne.io/).

If you went to run a recipe right now, your recipes would run on a default grouping of repositories. In public Moderne, the default group is a diverse selection of open-source repositories. In an enterprise instance of Moderne, the default group is every repository in your instance unless your company has configured an [Organizations service](/references/organizations-service.md). In that case, it will be all repositories in your organization.

If you'd prefer to run the recipes against a different group of repositories so that you can get relevant results more quickly, please follow [these instructions](../references/managing-repository-groups.md#how-to-create-a-repository-group) on how to make a repository group.

## Step 4: Navigate to the recipe catalog

Once you've decided what repositories you want to run recipes against, click on `Catalog` on the left side of the screen:

<figure><img src="../.gitbook/assets/ModerneCatalog.png" alt="Moderne Home Page"><figcaption><p>Moderne home page</p></figcaption></figure>

This will take you to a page that lists all of the recipe categories:

<figure><img src="../.gitbook/assets/ModerneCatalog2.png" alt="Moderne Recipe Catalog"><figcaption><p>Moderne recipe catalog</p></figcaption></figure>

## Step 5: Select a recipe

Let's find a good recipe to start from to help illustrate how to search across multiple repositories.

1. From the [Catalog ](https://public.moderne.io/catalog)page, click on [Java ](https://public.moderne.io/catalog/org.openrewrite.java)from the list of categories.
2. Select the [Cleanup ](https://public.moderne.io/catalog/org.openrewrite.java.cleanup)sub-category.
3. Click on the `Common static analysis issues` recipe.

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

For instance, in the above example, `= null` was removed due to the [Explicit initialization rule](https://public.moderne.io/recipes/org.openrewrite.java.cleanup.ExplicitInitialization).

## Step 8: Commit your changes

Once you've confirmed you want to make the changes, the next course of action is to commit everything.

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
