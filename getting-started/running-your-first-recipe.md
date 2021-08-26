# Quick Start: Running your first recipe

To help orient you to Moderne, let's run a couple of recipes on some open source projects that we have imported into Moderne.

In this guide, we will

- [ ] **Login with GitHub**
- [ ] **Find a recipe to search across multiple repositories**
- [ ] **Examine the results of our recipe**
- [ ] **Narrow our focus and run a recipe to transform a repository based on the search**
- [ ] **Verify the results and issue a Pull Request to transform the code**

## Step 1: Go to [app.moderne.io](https://app.moderne.io) and _Login_

![](../.gitbook/assets/authentication-login.png)

## Step 2: Sign in with GitHub

The first time you sign in to Moderne through GitHub, you are presented with an authorization prompt for a few permissions to help enhance your experience.

{% hint style="info" %}
For a better understanding of the permissions requested, please see [GitHub Permissions](../references/github-permissions.md#oauth-permission).
{% endhint %}

![](../.gitbook/assets/authentication-github-signin.png)

## Step 3: Exploring the recipe catalog

Let's start by exploring Recipes organized by language. As you navigate down into the catalog, you'll find different topical categories of recipes.

![](../.gitbook/assets/recipe-catalog.png)

## Step 4: Selecting a recipe

Let's find a good recipe to start from to help illustrate how to search across multiple repositories.

1. Select [_Browse_](https://app.moderne.io/browse) \_\_from the left-hand menu
2. Then select [_Java_](https://app.moderne.io/recipes/org.openrewrite.java) \_\_ from the list of languages
3. Select the [_Spring_](https://app.moderne.io/recipes/org.openrewrite.java.spring) category
4. Select the [_Core_](https://app.moderne.io/recipes/org.openrewrite.java.spring.core) category
5. Click on [_Remove `@RequestMapping` annotation_](https://app.moderne.io/recipes/org.openrewrite.java.spring.NoRequestMappingAnnotation) to expand the listing and then click [_More Details_](https://app.moderne.io/recipes/org.openrewrite.java.spring.NoRequestMappingAnnotation) \_\_ to go to the recipe details

## Step 5: Selecting repositories

To narrow our scope a little bit, from the Recipe details page for _SpringBoot 2.x Best Practices:_

- Click the _Select Repositories_ button
- In the search dropdown field, enter _OpenRewrite_
- Click ![](../.gitbook/assets/select-only.png) to select the search results

Now we should see a number in the _Select Repositories_ button indicating how many repositories we to search.

## Step 6: Running a search recipe

Click _Dry Run_ to start the recipe.

On the results page, you see a summary of your recipe criteria and an indication of progress.

![](../.gitbook/assets/results-summary.png)

Each result for a repository shows files searched and changes detected.

![](../.gitbook/assets/recipe-results-pet-clinic.png)

Click on either ![](../.gitbook/assets/diff-button.png) button or the name of the repository \(e.g. _spring-cloud/spring-cloud-aws_\) to view the proposed changes.

## Step 7: Viewing results

The resulting diff allows you to preview the changes from the recipe and then decide what to do.

![](../.gitbook/assets/recipe-results-pet-clinic-diff.png)

As an example, the screenshot above illustrates how this recipe converts `@RequestMapping(…)` to the more specific HTTP Verb `@GetMapping(…)`.

## Step 8: Creating a Branch & Pull Request

The next course of action is to commit the changes. There are a few options available:

- Download a patch ![](../.gitbook/assets/result-diff-download-patch.png) of the change to test locally.
- Create a branch and open a pull request ![](../.gitbook/assets/result-diff-create-branch.png).

Clicking ![](../.gitbook/assets/result-diff-create-branch.png) present you with a prompt to select whether or not you wish to create a fork of the project into your personal GitHub.

![](../.gitbook/assets/results-diff-create-branch.png)

From this prompt, you can customize either the _Branch Name_ or _Commit Message_ to match the contributing guidelines of a particular repository.

{% hint style="info" %}
If you have committer access to the repository, create a branch directly on the project.
{% endhint %}

## Step 9: 🎉 Profit
