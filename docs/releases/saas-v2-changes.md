---
sidebar_label: What's changed in SaaS v2
description: An overview of new features, performance improvements, and functional changes in Moderne SaaS v2.
---

# What's changed in SaaS v2

Moderne SaaS v2 brings substantial changes across the platform: more scalable recipe execution, support for more languages, new ways track activity, etc. This doc walks through what's new, what's faster, and what's changed compared to SaaS v1.

## New features

### Changelog

:::info
This feature can be enabled/disabled upon request. Please reach out to your account representative if you wish to use it.
:::

You can now view all code changes across your organization in one place. The Moderne Changelog tracks pull requests, commits, and activity across every repository — so you no longer need to jump between tools to understand what's happening.

<figure>
  ![The Changelog view showing pull requests, commits, and check results across multiple repositories in a single table](./assets/saas-v2-changelog.png)
  <figcaption>_The Changelog brings PR and commit activity from across your organization into one view._</figcaption>
</figure>

### Atlas status pages

[Atlas](https://github.com/Netflix/atlas) status pages surface significantly more insight into what's happening across the platform, making it easier to monitor service health and pinpoint issues when they arise.

<figure>
  ![An Atlas status page reporting the health of the recipe marketplace](./assets/saas-v2-atlas-status.png)
  <figcaption>_Atlas status pages give you a clearer view into platform health and ongoing issues._</figcaption>
</figure>

You can access this page by clicking on **?** icon in the top-right of the SaaS and then selecting **Status**:

<figure>
  ![Status page link](./assets/saas-v2-status-link.png)
  <figcaption>_Status page link._</figcaption>
</figure>

### Continuous profiling across the platform

:::info
This feature can be enabled/disabled upon request. Please reach out to your account representative if you wish to use it.
:::

SaaS v2 ships with [Pyroscope-based](https://grafana.com/oss/pyroscope/) continuous profiling for every microservice in the platform — authorization, organization, the recipe worker, Moddy, the marketplace, and more. You can inspect CPU usage, memory allocation, mutex contention, and blocking time as flamegraphs, making it much easier to track down performance regressions wherever they live in the stack. When a recipe is running slowly, profiling the `modernecli` application can pinpoint exactly which code path is responsible.

<figure>
  ![A Pyroscope page showing CPU analysis of the recipe worker](./assets/saas-v2-recipe-profiling.png)
  <figcaption>_Pyroscope exposes CPU, memory, mutex, and blocking profiles for every microservice in SaaS v2._</figcaption>
</figure>

To enable profiling, you'll need to be an admin. Then click on the gear icon in the top-right and select **Settings**. You should then see a profiling enable button. Please note that performance may decrease while profiling is enabled.

<figure>
  ![Profiling enable button](./assets/saas-v2-profiling-button.png)
  <figcaption>_You can turn profiling on/off in admin settings._</figcaption>
</figure>

### Native recipes in more languages

SaaS v2 can run native recipes written in more languages now. These include JavaScript, TypeScript, Python, C#, and Go.

<figure>
  ![A native recipe authored in TypeScript running in the Moderne Platform](./assets/saas-v2-native-languages.png)
  <figcaption>_Native recipes can now be authored in JavaScript, TypeScript, Python, C#, Go, and Scala._</figcaption>
</figure>

### Customizable marketplaces

Marketplaces can now be configured differently for different organizations, allowing you to create mini sandbox environments for testing specific recipes within a subset of your org. The marketplace UI has also been redesigned based on customer feedback.

<figure>
  ![The redesigned marketplace UI showing a curated set of recipes for a specific organization](./assets/saas-v2-marketplace.png)
  <figcaption>_The redesigned marketplace can be tailored per organization for sandboxed recipe testing._</figcaption>
</figure>

### Fast and slow lanes for recipe runs

Recipe runs are now split across two queues so that a short run doesn't have to wait behind a long one. When you start a run, Moderne counts the repositories in the organization you're running against and assigns the run to a lane:

* **Fast lane**: organizations with 100 or fewer repositories.
* **Slow lane**: organizations with more than 100 repositories.

Part of the recipe worker fleet is reserved for the fast lane, so small runs keep moving even while a large organization works its way through the slow lane. The remaining workers take slow lane work first and pick up fast lane runs as capacity frees up.

There's nothing to choose or configure. When a run takes the slow lane, an indicator appears next to its status in the [activity view](../user-documentation/moderne-platform/getting-started/activity-view.md#slow-lane-indicator), and hovering over it explains why.

<figure>
  ![The activity view showing a running recipe run with a slow lane indicator beside its Running status](./assets/slow-lane-indicator.png)
  <figcaption>_Runs against large organizations take the slow lane so that smaller runs keep moving._</figcaption>
</figure>

## Performance improvements

### Recipe scalability

Recipes can now run against substantially larger organizations than before. As part of this work, data tables that previously could not be generated due to the number of repositories involved can now be produced reliably.

### Moddy works in restricted environments

Previously, Moddy did not work in locked-down environments because it relied on server-sent events. Moddy now polls for updates instead, so it works in restricted environments where server-sent events are blocked.

### Faster builder for large recipes

The recipe builder has been improved in two ways:

* Referential de-duping for pre-packaged recipes reduces redundant text while keeping descriptions accurate.
* Builds are substantially faster for larger recipes.

## Functional changes

### Moderne Agent renamed to Moderne Connector

The Moderne Agent has been renamed to the Moderne Connector to avoid confusion with AI agents. Configuration has also been reorganized to more clearly separate settings per microservice and functional component.

### Redesigned org viewer

The org viewer has been redesigned based on customer feedback:

* The org selector now shows how many repositories are in each org.
* Search is more visually clear and provides more context about what you're searching for.
* You can search for a parent org and quickly navigate to its child orgs.

<figure>
  ![The redesigned org viewer with the org selector showing repository counts for each organization](./assets/saas-v2-org-viewer.png)
  <figcaption>_The org viewer shows repository counts and lets you quickly navigate between parent and child orgs._</figcaption>
</figure>

<figure>
  ![The redesigned search viewer](./assets/saas-v2-org-search.png)
  <figcaption>_Search improvements let you see more context on the org you're searching for.._</figcaption>
</figure>

### Per-repository LST status replaces Lost and Found

The repositories table now reports LST status for each repository, rather than collecting problem repositories into a separate view. An **LST available** column shows one of three states, alongside a **Last published** column recording when an LST was last produced:

* `Available`: an LST has been published and is reachable for recipe runs.
* `Unavailable`: an LST was published previously, but it can't be reached now. Where the Connector recorded a reason for the failure, the pill carries it.
* `Not ingested`: no LST has ever been published for the repository.

<figure>
  ![The v2 repositories table showing Organization, Repository, Branch, Changeset, LST available, Origin, Last published, and Partition columns](./assets/saas-v2-repositories-table.png)
  <figcaption>_The repositories table reports LST status for each repository._</figcaption>
</figure>

By default the table lists only repositories whose LST is available. The **Show all repositories** toggle in the toolbar widens it to every repository in the organization, which includes those in the `Unavailable` state as well as those that were never ingested.

Because this information is now per repository, the `lostAndFound` GraphQL query has been removed. Lost and Found had itself replaced the Orphaned organization, which was removed back in v1, so neither is available in v2. To find repositories in an organization that have no usable LST, filter `repositories` on `lstArtifact` instead, as described in [Troubleshooting LST issues](../administrator-documentation/moderne-platform/how-to-guides/troubleshooting-lst-issues.md#finding-repositories-without-a-usable-lst).

Lost and Found also worked in the reverse direction, listing repositories that had been ingested but weren't named in `repos.csv`. In v2 the organization hierarchy is the source of truth for which repositories the platform tracks, so that check happens against the hierarchy itself: turn on **Show all repositories** and compare what the organization contains against what you expect it to.

### Global org

There is now a global org that encompasses every organization, including user orgs. This makes it easier to run recipes and view activity at the highest level of your org hierarchy.

### Updated deploy page

The deploy page has been substantially updated:

* You can now deploy recipes from ecosystems like pip and NuGet, which was not previously supported.
* The **Add artifact** modal has smart defaults and clearer ecosystem-specific syntax, making it easier to understand what to enter for each ecosystem. 
  * For instance, if you wanted to deploy an NPM artifact, the version dropdown would let you specify a specific version or use the latest/next tag - with descriptions of what each did. In contrast, if you tried to deploy a Pip artifact, the version dropdown would not include a "next" tag as that doesn't apply to Pip artifacts.

<figure>
  ![The updated deploy modal showing ecosystem-specific defaults for a pip package](./assets/saas-v2-deploy-modal.png)
  <figcaption>_The Add artifact modal now supports pip, NuGet, and other ecosystems, with smart defaults for each._</figcaption>
</figure>

### Audit log changes

The audit log UI has been removed. Audit logs are now available only as a CSV or CEF download.

### Activity view surfaces data tables

The activity view has been expanded to include data tables. If someone in your organization has already generated a data table, you can find it in the activity view instead of regenerating it yourself.

<figure>
  ![The activity view showing data tables alongside recent recipe runs, commits, and deployments](./assets/saas-v2-activity-data-tables.png)
  <figcaption>_Data tables now appear directly in the activity view, so you can find previously generated tables without rerunning the recipe._</figcaption>
</figure>

### Failed repositories now appear in results

Previously, if a repository failed during a recipe run, it did not appear in the results view — you had to check the status tab to see why it was missing. Failed repositories are now included in the results view and clearly labeled as failures.

<figure>
  ![The results view showing a failed repository clearly labeled as a failure alongside successful results](./assets/saas-v2-failed-repos.png)
  <figcaption>_Failed repositories now appear in the results view, clearly labeled instead of being hidden in a separate status tab._</figcaption>
</figure>

### Recipe results persist between deployments

Recipe results, data tables, and visualizations now persist between deployments. Previously, they were wiped on every deployment. Now, they stick around - giving you context into what happened over a longer period of time.
