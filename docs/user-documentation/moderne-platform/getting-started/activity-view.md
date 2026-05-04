---
sidebar_label: Using the activity view
description: Describes what the activity view is, where to find it, and what each part does.
---

import ReactPlayer from '@site/src/components/VideoPlayer';
import VersionBanner from '@site/src/components/VersionBanner';

<VersionBanner version="v2" linkPath="/user-documentation/moderne-platform-v1/getting-started/activity-view" />

# Using the activity view

As you run recipes, commit code, and examine visualizations, you might find it beneficial to get a higher level picture of what's happened in a specific organization. Did you commit that one recipe run? Has someone else already run a visualization you wanted? Maybe someone has run a recipe you've never heard of before, and you want to learn more about it for yourself. All of these can be answered with the Moderne activity view.

In this guide, we'll help you navigate to the activity view, and we'll make sure you understand each part of the page.

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=0v3fMELfa-8' controls="true" />

## Accessing the activity view

From the left-hand navigation bar, click on `Activity`:

<figure>
  ![Left navigation bar with the Activity link highlighted](./assets/activity-link.png)
  <figcaption></figcaption>
</figure>

That will take you to the [activity view](https://app.moderne.io/recent-activity) for the **organization you have selected**.

<figure>
  ![Activity view](./assets/activity-view.png)
  <figcaption></figcaption>
</figure>

:::info
If your organizations are hierarchical (meaning that one organization contains 1 or more sub-organizations), you will see all of the repositories in both the selected organization and its sub-organizations.
:::

## Parts of the activity view

### Navigate to the recipe, commit, or visualization

If you want to get more information about a recipe, commit, or a visualization, you can click on the activity name. That will redirect you to the specific recipe run, commit, or visualization, so you can see the results for yourself:

<figure>
  ![Clicking an activity name to navigate to the recipe run details page](./assets/activity-name-link.gif)
  <figcaption></figcaption>
</figure>

### Recipe information

If you want to see what recipe was run, get a link to said recipe, or see what options the recipe was run with, you can click on the information icon. A modal will pop up with more details about the recipe along with a link to the recipe itself:

<figure>
  ![Hovering over the info icon to reveal recipe details and a link to the recipe](./assets/activity-info.gif)
  <figcaption></figcaption>
</figure>

### More detailed time tracking

If you want more specific times for when things happened rather than "about 2 hours ago" or "1 day ago", you can click on any of the times in the `Start time` column to cycle through various date time formats:

<figure>
  ![Start time column showing relative timestamps that can be clicked to cycle formats](./assets/activity-time.gif)
</figure>
