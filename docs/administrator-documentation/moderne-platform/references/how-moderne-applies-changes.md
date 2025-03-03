---
sidebar_label: Git interactions
description: How Moderne interacts with Git to apply changes generated by recipes.
---

# Interactions with git when applying changes

The Moderne Platform consists of a set of serialized Lossless Semantic Trees (LSTs). Inside each LST is a record of the repository that the LST was produced from as well as the branch and commit that it was produced from.

When a recipe is run against that LST, a diff is produced that assumes the starting point for the change is the commit that the LST was produced from. However, there could have been further commits on that branch head since the LST was built.

:::info
The head of a branch is the latest commit of that branch from the perspective of the remote.
:::

Regardless of whether you choose to initiate an action to directly commit the changes, push to a branch, push to a fork branch, or create a pull request, Moderne must first reconcile the patch changes with the latest branch head. The action type dictates which branch we are reconciling against.

To illustrate the reconciliation process, suppose you are attempting to make a direct commit to the main branch of the remote.

![](./assets/commit-recon.png)

In this example, the LST that Moderne is operating on was produced from commit `b93f7b8`, which at that time was the latest head of the main branch. However, between the build of the LST and when we initiate this commit action, there have been more commits on the main branch.

1. Moderne first clones the main branch and then checks out `b93f7b8`.
2. We are now in a detached head state, so a local branch is created from that commit. The local branch is temporary and has a generated name that is different from any existing branch.
3. The diff generated by Moderne is applied and the results are committed. We are now at hash `95ba902`.
4. A rebase from main is performed, and we are now on commit `332922f`. If the rebase uncovers conflicts, the operation fails at this point. This prevents us from doing anything unsafe, and provided that you are regularly building LSTs from each branch head, the recipe can be reran in a few minutes once the new LST has been produced and published to the platform.
5. Checkout main (the branch we intend to push changes to).
6. Rebase from the temporary branch. This will always trivially succeed if the rebase in step 4 succeeded because any conflicts would have been uncovered there. We are now at commit `4976bb0`, a commit exactly one step ahead of the latest head on main incorporating changes from the patch and any commits that happened between when the LST was built and now.
7. If we have made it to this point, we can push the results!
