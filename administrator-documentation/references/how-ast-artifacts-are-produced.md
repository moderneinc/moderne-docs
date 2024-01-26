---
description: >-
  Describing the relationship between source code and the artifacts that Moderne
  consumes.
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# How LST artifacts are produced

Moderne operates on a format-preserving and type-attributed Lossless Semantic Tree (LST) which is an intermediate, compiler-produced representation of the code. This LST can be projected losslessly back to the original source code (including all of its original formatting) but contains far more information than the text of the original code.

This LST artifact is built and published to your artifact repository alongside other artifacts (such as binary JARs, JavaDocs, sources, etc.) by the [Moderne CLI](../../user-documentation/getting-started/cli-intro.md). For information on how to set that up, please see our [integrating private code doc](/administrator-documentation/how-to-guides/integrating-private-code.md).

In this doc, we'll illustrate the relationship between the various components: source control, commits, the Moderne CLI, and the artifact repository.

## Moderne CLI flow

After setting up mass ingestion in the Moderne CLI, one LST artifact (not in a JAR format) will be produced per subproject. Once all of these artifacts have been built, the Moderne CLI will combine them all into a JAR and add a `scm.properties` file to it that provides key information about the build (such as a unique `buildId` that identifies this particular build process). After all of that is done, the Moderne CLI will push this JAR to the artifact repository of your choice.

{% hint style="info" %}
Some subprojects might not publish artifacts – such as benchmarking, testing, or sample subprojects. The Moderne CLI is designed to publish LST artifacts for these subprojects anyway.
{% endhint %}

![The flow of data from source control to LST artifacts in Artifactory](../../.gitbook/assets/cli-lst-flow.png)

{% hint style="info" %}
The `buildId` correlation identifier is necessary to identify artifacts emanating from a particular build _process_. This is because builds of the same git changeset will not necessarily produce the same LST, as the project may have dependencies with dynamic version constraints that resolve to different versions for different builds of the same changeset.

We still preserve the changeset, as this is the starting point of any later commit workflow after a recipe run in Moderne, but `buildId` is how we group artifacts from the same build process together to form an overall understanding of the code at the time this build occurred.

Build IDs increase over time; so newer LSTs will have a higher `buildId`.
{% endhint %}

