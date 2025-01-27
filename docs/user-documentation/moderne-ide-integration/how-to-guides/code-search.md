---
sidebar_label: Multi-repository code search
description: How to search for code across many repositories at once.
---

# Multi-repository code search

Regardless of whether you're a new developer or someone with decades of experience writing code, you will often find yourself wanting to look for examples of how particular pieces of code are used. In fact, about [one third of all Google code searches are attempting to find examples of how others have done something](https://www.oreilly.com/library/view/software-engineering-at/9781492082781/ch17.html#whyquestion_mark). Unfortunately, these searches will often lead to examples that aren't quite right – they might match the same _text_, but they often will not match the _types_. If you attempt to restrict searching to only the repositories on your local machine (such as using `grep` for instance), you will often run into a similar issue.

Fortunately, this is where the Moderne plugin really shines. With a simple right-click, you can quickly perform type-aware searches across thousands of repositories – all without leaving your IDE.

Let's walk through how to use this feature.

## "Find Usages on All Repos" menu

To begin, find some API that you're interested in searching for. Then right-click on one of its usages and select `Find Usages on All Repos`.

<figure>
  ![](./assets/find-usages.png)
  <figcaption>_The `Find Usages on All Repos` action is available next to the `Find Usages` action that the IDE provides._</figcaption>
</figure>

This opens a small menu which allows you to do three things:

1. Search across all of the repositories in your multi-repo list, regardless of which one you happen to have open in the IDE currently. Behind the scenes, this uses the [Find method usages recipe](https://docs.openrewrite.org/recipes/java/search/findmethods).
2. Generate a [Refaster recipe](https://docs.openrewrite.org/authoring-recipes/refaster-recipes) that matches the API you've selected.
3. Generate an [imperative visitor-based recipe](https://docs.openrewrite.org/authoring-recipes/types-of-recipes#imperative-recipes) that matches the API you've selected.

:::info
For more information about creating search recipes using the Moderne plugin, check out our [recipe creation guide](creating-recipes.md).
:::

<figure>
  ![](./assets/run-find-recipe.png)
  <figcaption>_`Run Find Recipe` kicks off a recipe run using OpenRewrite's `Find method usages`._</figcaption>
</figure>

If you choose to initiate the search via `Run Find Recipe`, you will immediately see a new Usages window open in the IDE, and a progress bar that shows which repository in the multi-repo the recipe is currently running on. Amazingly, the results of this OpenRewrite recipe have been brought directly back into the IDE and surfaced in the Usages view that engineers are already familiar with.

<figure>
  ![](./assets/usages-view.png)
  <figcaption>_No need to learn another user interface. Engineers are already familiar with the Usages view._</figcaption>
</figure>
