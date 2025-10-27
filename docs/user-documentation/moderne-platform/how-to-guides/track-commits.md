---
sidebar_label: Working with commits and PRs
description: Working with commits and PRs in Moderne.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Working with commits and PRs in Moderne

When implementing code changes across repositories, effective commit and PR management is crucial for maintaining visibility and control over your codebase. Fortunately, Moderne provides powerful tools to help you create, track, and manage commits and PRs at scale.

In this guide, we'll walk you through the fundamentals of working with commits and PRs in Moderne. You'll learn about the extensive commit options we offer, how you can track the status of your changes, and the critical distinction between tracking PR operations and measuring actual migration progress in your codebase.

## Understanding migration progress vs. PR tracking

Before we look at how to work with commits and PRs in Moderne, it's important to understand the distinction between two different types of tracking:

* **Operational tracking**: Where you monitor the status of PR creation jobs, see which PRs are open/merged/closed, and manage the mechanics of getting changes into your SCM.
* **Migration progress tracking**: Where you measure how much of your codebase has actually been migrated or remediated.

### Why PR metrics don't reflect actual migration progress

While it's tempting to use PR metrics (merge rates, approval percentages, CI status) to measure migration progress, **PR status is not a reliable indicator of whether code has actually been changed in your repositories.**

There are several reasons for this:

1. **A PR might show as closed, but the code changes could still make it into your codebase.** For example, a developer might pull down a PR into a different branch, make additional updates, and merge that branch instead. The original PR shows as "closed" in your metrics, but the migration was actually completed.

2. **A PR might be merged, but developers could modify or undo those changes afterwards.** Someone might merge a PR but then make follow-up commits that partially undo the fix or introduce new issues.

3. **PR workflows could vary significantly across organizations.** Some teams squash commits, others rebase, and some use alternative merging strategies that make it difficult to track what actually landed in the codebase.

### The accurate way to track migration progress

**The only reliable way to measure actual migration progress is to rerun recipes or DevCenters on a cadence.** By periodically scanning your actual codebase, you can see what's truly in the code – regardless of how it got there.

This approach gives you:

* **Accurate measurement**: You're measuring the actual state of the code, not the state of PRs.
* **Validation**: You can confirm that fixes haven't been undone or modified.
* **True completion status**: You know a migration is complete when the recipe returns no results.

The operational tracking features described below are valuable for managing the PR creation process, but should not be used as a substitute for measuring actual code migration progress.

## Committing

Now that you understand the distinction between operational and migration tracking, let's look at how to create commits and PRs. After you've run a recipe and reviewed its results, the next step is to either commit it or create a pull request. 

Moderne supports five different commit strategies:

1. Committing directly
2. Creating a branch
3. Creating a fork
4. Creating a pull request
5. Creating a pull request from a fork

For each of those, there are a wide variety of options that you can configure to meet your needs:

<Tabs groupId="commit-type">
<TabItem value="direct-commit" label="Committing directly">

<figure>
  ![](./assets/direct-commit.png)
  <figcaption>_Options when committing directly_</figcaption>
</figure>

</TabItem>

<TabItem value="branch" label="Creating a branch">

<figure>
  ![](./assets/create-branch.png)
  <figcaption>_Options when creating a branch_</figcaption>
</figure>

</TabItem>

<TabItem value="fork" label="Creating a fork">

<figure>
  ![](./assets/create-fork.png)
  <figcaption>_Options when creating a fork_</figcaption>
</figure>

</TabItem>

<TabItem value="pull-request" label="Creating a PR">

<figure>
  ![](./assets/create-pr.png)
  <figcaption>_Options when creating a pull request_</figcaption>
</figure>

</TabItem>

<TabItem value="pull-request-fork" label="Creating a PR from a fork">

<figure>
  ![](./assets/create-pr-fork.png)
  <figcaption>_Options when creating a pull request from a fork_</figcaption>
</figure>

</TabItem>
</Tabs>

### Rate-limiting and retry logic

When creating commits and PRs at scale, it's not as simple as just making an API call and hoping for the best. You need to consider things like rate-limits and when you should retry a request vs. drop it.

Fortunately, Moderne takes care of all of this for you so you don't need to worry about it.

Moderne will create a commit job for each commit. This job will attempt to create a commit in the appropriate SCM. If it runs into a rate limit error, it will exponentially back off and retry again up to three times (at 2 minutes, 4 minutes, and 8 minutes). If it fails, it will provide you with context into why the job failed, so you can figure out what you need to fix.

## Tracking commits

Once you've created commits or PRs, you'll want to monitor their status. Without proper tracking of mass-created PRs and commits, it's easy to lose sight of pending changes. Fortunately, Moderne offers a commit view to help you track all commits and PRs in one place.

### How to get to the commit view

There are two ways to get to the page that tracks the status of commits or PRs:

1. **Automatically**: You will be taken there whenever you commit results or open PRs from a recipe run.

2. **Manually**: If you didn't run a recipe – or you ran one and wanted to get back to the commit view page, you can navigate there from the [activity view](../getting-started/activity-view.md).

<figure>
  ![](./assets/commit-activity-view.png)
  <figcaption>_A link to the commit view in the activity view._</figcaption>
</figure>

### How to use the commit view

From the commit view, you can take various actions depending on whether or not you committed the results directly or opened a PR.

#### If you opened PRs

<figure>
  ![](./assets/commit-view-prs.png)
  <figcaption>_What the commit view looks like if you've opened PRs._</figcaption>
</figure>

From this view, you can approve, merge, or close PRs by clicking on the triple vertical dots and selecting the action you want. Or, if you want to take action on multiple repositories at once, you can click the checkboxes next to the repositories you want and then press the buttons at the top.

To navigate to the open PRs themselves, you can either click on the repository name or you can click on the arrow under `Actions`.

If opening a PR failed for some reason, you can see the details of why on this screen. You can also press the `Re-run failed` button to try and open them again.

You might also see a PR status of `Blocked` if a review is required but the PR hasn't been reviewed yet. Likewise, you might see `Blocked` if the CI pipeline needs to complete before merging but it hasn't finished yet. If you mouse over the `Blocked` status, you'll get more information about it:

<figure>
  ![](./assets/blocked.png)
  <figcaption>_An example of a commit being blocked._</figcaption>
</figure>

Lastly, you can download all of this information as a data table by clicking on the `Export` button – which can be useful if you want to pipe the data into another system.

#### If you committed directly

<figure>
  ![](./assets/commit-view-commits.png)
  <figcaption>_What the commit view looks like if you've committed directly._</figcaption>
</figure>

From this view, you can see all of the commits that were created. You can navigate to the commit by either clicking on the repository or by clicking on the arrow button under the `Actions` column.

If a commit failed, you can see details of why it failed on this screen. Likewise, you can attempt to re-run the failed commits by clicking on the `Re-run failed` button.

Lastly, you can download all of this information as a data table by clicking on the `Export` button – which can be useful if you want to pipe the data into another system.

## Important considerations

**Be careful when running recipes against existing PRs.** Once you open a PR, you can continue pushing changes to that PR as long as they don't conflict with the current state of the branch. If you change a recipe and push again to the branch, or if you push changes manually to the branch, Moderne likely won't be able to push any further changes to that branch.

**Remember: Merging a PR doesn't mean the issue is resolved.** As explained in the [Understanding migration progress vs. PR tracking](#understanding-migration-progress-vs-pr-tracking) section above, you must rerun the recipe on your codebase to confirm that issues have actually been fixed and haven't been modified or undone. If no results appear when you rerun the recipe, then you can be confident the issue has been resolved.