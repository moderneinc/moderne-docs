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

This LST artifact is built and published to a dedicated Maven repository by the [Moderne CLI](../../../user-documentation/moderne-cli/getting-started/cli-intro.md). For information on how to set that up, please see our [mass ingestion guide](/administrator-documentation/moderne-platform/how-to-guides/mass-ingest.md).

## Moderne CLI flow

After setting up mass ingestion in the Moderne CLI, one LST artifact (not in a JAR format) will be produced per subproject. A single CLI command (e.g., `mod build`) will build LST artifacts for every repository you've specified. Once all of these artifacts have been built, the Moderne CLI will combine them all into a JAR and add a `scm.properties` file to it that provides key information about the build (such as a unique `buildId` that identifies this particular build process). After all of that is done, the Moderne CLI will push this JAR to the artifact repository of your choice.

{% hint style="info" %}
Some subprojects might not publish artifacts – such as benchmarking, testing, or sample subprojects. The Moderne CLI is designed to publish LST artifacts for these subprojects anyway.
{% endhint %}
