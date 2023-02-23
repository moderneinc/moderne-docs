---
description: >-
  Describing the relationship between source code and the artifacts that Moderne
  consumes.
---

# How LST artifacts are produced

Moderne operates on a format-preserving and type-attributed Lossless Semantic Tree (LST) which is an intermediate, compiler-produced representation of the code. This LST can be projected losslessly back to the original source code (including all its original formatting), but contains far more information than the text of the original code.

Moderne build plugins produce this LST, generally in CI jobs, and outputs a series of LST artifacts that are designed to be published to an artifact repository alongside other artifacts (like the binary jar, javadocs, sources, etc.).

Below is an illustration of the relationship between the various components: source control, a commit, a CI build, the Moderne plugins, and the artifact repository.

1. **Git commit.** To make an updated representation of code for a source code repository on a particular branch, commits to that branch should trigger a build of the repository that has the Moderne build plugins applied.
2. **CI build.** The CI build compiles the source code at this commit, executing a Maven or Gradle build that has the relevant Moderne build plugin applied. The CI system in use doesn't matter. It can be Jenkins, GitHub Actions, CircleCI, Concourse, etc.
3. **Moderne build plugin.** The build plugin produces one LST artifact per subproject in a multimodule project. In general, for every binary artifact that would normally be published from a build, the Moderne plugin will also publish an LST artifact. In some cases, there are subprojects that do not normally publish binaries (e.g. benchmark subprojects, test or sample subprojects), and the Moderne plugin is designed to publish LST artifacts for those subprojects anyway. The build plugin generates a unique correlation identifier for this particular build process (`buildId`), and populates that identifier in a `scm.properties` file along with information about the Git changeset and remote.
4. **LST artifacts.** Each artifact contains the serialized representation of the LST along with the `scm.properties` file. The same `scm.properties` file is present in each artifact produced from a given build, which allows Moderne to group them together later and understand that all of these distinct artifacts together form a complete picture of the repository built from this build process.

![The flow of data from source control to LST artifacts in Artifactory](<../.gitbook/assets/image (13) (3).png>)

{% hint style="info" %}
The `buildId` correlation identifier is necessary to identify artifacts emanating from a particular build _process_. Not every build of the same git changeset will produce the same LST, as the project may have dependencies with dynamic version constraints that resolve to different versions for different builds of the same changeset. We still preserve the changeset, as this is the starting point of any later commit workflow after a recipe run in Moderne, but `buildId` is how we group artifacts from the same build process together to form an overall understanding of the code at the time this build occurred.
{% endhint %}
