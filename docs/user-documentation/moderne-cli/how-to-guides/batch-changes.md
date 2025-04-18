---
sidebar_label: Publish batch change results
description: How to add batch change results to the Moderne platform.
---

# How to add batch change results to the Moderne platform

The `mod batch publish` command allows users to add repository changes created using ad hoc scripts or third-party tools to the Moderne platform. For example, the following commands first leverages `mod exec` to execute a simple `sed` script on a list of repositories and then runs `mod batch publish` to upload the change results to Moderne:

```bash
mod exec . -- find . -name '*.java' -exec sed -i '' 's/Collections.emptySet()/Set.of()/g' {} ';'
mod batch publish . --recipe com.acme.CollectionsEmptySetToSetOf --recipe-name "Prefer Set#of over Collections#emptySet" --recipe-description "Migrate uses of java.util.Collections#emptySet to Java 9's java.util.Set#of" --recipe-run ChangeCampaign20250419 -- git diff
```

After uploading the results, users can view diffs and issue pull requests using the same workflows available for Moderne recipe run results.

<figure>
  ![](./assets/batch-changes-results-page.png)
  <figcaption>_Batch changes results page_</figcaption>
</figure>
