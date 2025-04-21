---
sidebar_label: Publishing batch change results
description: How to publish batch change results to the Moderne platform.
---

import ReactPlayer from 'react-player';

# How to publish batch change results to the Moderne platform

The `mod batch publish` command allows users to upload repository changes, created using ad hoc scripts or third-party tools, to the Moderne platform. For example, the following commands first use `mod exec` to run a simple `sed` script across a list of repositories, and then use `mod batch publish` to upload the resulting changes to Moderne:

```bash
mod exec . -- find . -name '*.java' -exec sed -i '' 's/Collections.emptySet()/Set.of()/g' {} ';'
mod batch publish . --recipe com.acme.CollectionsEmptySetToSetOf --recipe-name "Prefer Set#of over Collections#emptySet" --recipe-description "Migrate uses of java.util.Collections#emptySet to Java 9's java.util.Set#of" --recipe-run ChangeCampaign20250419 -- git diff
```
:::info
The `mod batch publish` command can run on a single git repository or recursively over a set of repositories.
:::

<ReactPlayer className="reactPlayer" url='https://www.youtube.com/watch?v=Em-4by2EJO8' controls="true" />

After uploading the results, users can navigate to the batch changes activity page by clicking on **Batch Changes** in the Moderne UI's sidebar.

<figure>
  ![](./assets/batch-changes-sidenav.png)
  <figcaption>_Batch changes activity view_</figcaption>
</figure>

Clicking on a batch change run will display the run's results page. From there, users can view diffs and issue pull requests using the same workflows available for Moderne recipe run results.

<figure>
  ![](./assets/batch-changes-results-page.png)
  <figcaption>_Batch changes results_</figcaption>
</figure>

## Additional information

* [Learn how to commit results and issue PRs in Moderne](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/track-commits)
