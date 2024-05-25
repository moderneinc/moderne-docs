---
description: Performing multi-repository code search and impact analysis.
---

# Code search with the Moderne plugin for JetBrains IDEs

When planning large scale code changes, it’s exciting to get directly to the business of writing the automation with an OpenRewrite recipe that’s going to immediately do the work. We’ve found over time that first building the recipe to focus on identification of all the potential edit sites is time well spent. It gives us a full impact analysis of what we are about to do before we do it. Real world code is complex and nuanced. Without a proper accounting of this nuance, the transformational recipe would not be as accurate as we wish.

## "Find Usages on All Repos" menu

To perform a code search for usages of an API, right click one of its usages and select `Find Usages on All Repos`. This example will search for uses of OpenRewrite's [Preconditions](../../moderne-platform/how-to-guides/preconditions.md) API on a multi-repo that contains all the OpenRewrite repositories, regardless of which one I happen to have open in the IDE currently.

<figure><img src="https://lh7-us.googleusercontent.com/hKUbOqpMIwi7SGFjwGrJEkMeFaj1OQkuyVSiaFiV4yd2QlM_sjrHFCjdNdCTVM3MUmwY4VDNaCVXreU600KDfb1ogZTpCQnXcW4RfqYnXIr78V8mbqsI_BsDf4cBrr8y-uOK-MRZjofbOvk_zYpanVs" alt=""><figcaption><p>The <code>Find Usages on All Repos</code> action is available next to the <code>Find Usages</code> action that the IDE provides. </p></figcaption></figure>

This opens a small menu which allows me to either generate a recipe in [Refaster](https://docs.openrewrite.org/authoring-recipes/refaster-recipes) or Visitor-based forms or initiate the search directly using the [Find method usages](https://docs.openrewrite.org/recipes/java/search/findmethods) recipe (`Run Find Recipe`).

<figure><img src="../../../.gitbook/assets/image (2).png" alt="" width="563"><figcaption><p><code>Run Find Recipe</code> kicks off a recipe run using OpenRewrite's <code>Find method usages</code>.</p></figcaption></figure>

If we choose to initiate the search via `Run Find Recipe`, we'll immediately see a new Usages window open in the IDE and a progress bar showing which repository in the multi-repo the recipe is currently running on. Amazingly, the results of this OpenRewrite recipe have been brought directly back into the IDE and surfaced in the Usages view that engineers are already familiar with.

<figure><img src="../../../.gitbook/assets/image (3).png" alt=""><figcaption><p>No need to learn another user interface. Engineers are already familiar with the Usages view.</p></figcaption></figure>

