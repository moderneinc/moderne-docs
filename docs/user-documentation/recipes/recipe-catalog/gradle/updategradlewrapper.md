---
title: "Update Gradle wrapper"
sidebar_label: "Update Gradle wrapper"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/updategradlewrapper" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update Gradle wrapper"}
  description={"Update the version of Gradle used in an existing Gradle wrapper. Queries `downloads.gradle.org` to determine the available releases, but prefers the artifact repository URL which already exists within the wrapper properties file. If your artifact repository does not contain the same Gradle distributions as `downloads.gradle.org`, then the recipe may suggest a version which is not available in your artifact repository."}
  fqName={"org.openrewrite.gradle.UpdateGradleWrapper"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpdateGradleWrapper.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.UpdateGradleWrapper"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.UpdateGradleWrapper"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/updategradlewrapper.md"}
>

<RecipeHeader.Title>Update Gradle wrapper</RecipeHeader.Title>

<RecipeHeader.Description>Update the version of Gradle used in an existing Gradle wrapper. Queries `downloads.gradle.org` to determine the available releases, but prefers the artifact repository URL which already exists within the wrapper properties file. If your artifact repository does not contain the same Gradle distributions as `downloads.gradle.org`, then the recipe may suggest a version which is not available in your artifact repository.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"version","required":false,"description":"An exact version number or node-style semver selector used to select the version number. Defaults to the latest release available from `downloads.gradle.org` if not specified.","example":"7.x"},{"type":"String","name":"distribution","required":false,"description":"The distribution of Gradle to use. \"bin\" includes Gradle binaries. \"all\" includes Gradle binaries, source code, and documentation. Defaults to the distribution type of the existing wrapper properties file, or \"bin\" if no wrapper properties file exists."},{"type":"Boolean","name":"addIfMissing","required":false,"description":"Add a Gradle wrapper, if it's missing. Defaults to `true`."},{"type":"String","name":"wrapperUri","required":false,"description":"The URI of the Gradle wrapper distribution.\nSpecifies a custom location from which to download the Gradle wrapper scripts (gradlew, gradlew.bat, etc.). This is useful for setting up the Gradle wrapper without relying on Gradle's official distribution services.\n\nWhen this option is set, the version and distribution fields must not be specified — only one source of truth is allowed. The URI should point to a valid and reachable Gradle wrapper distribution (typically a .zip archive containing the wrapper files).\nThis is particularly helpful in environments where access to Gradle's central services is restricted or where custom Gradle wrapper setups are required.\nIf the URI is inaccessible, the recipe will leave the existing wrapper files in the repository unchanged, as they are generally compatible with various Gradle versions.","example":"https://downloads.gradle.org/distributions/gradle-8.5-bin.zip"},{"type":"String","name":"distributionChecksum","required":false,"description":"The SHA-256 checksum of the Gradle distribution. If specified, the recipe will add the checksum along with the custom distribution URL.","example":"29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"version","value":"7.4.2"},{"parameter":"distribution","value":"null"},{"parameter":"addIfMissing","value":"null"},{"parameter":"wrapperUri","value":"null"},{"parameter":"distributionChecksum","value":"null"}],"variants":[{"language":"properties","before":"distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://downloads.gradle.org/distributions/gradle-7.4-bin.zip\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n","after":"distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://downloads.gradle.org/distributions/gradle-7.4.2-bin.zip\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\ndistributionSha256Sum=29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda\n","diff":"@@ -3,1 +3,1 @@\ndistributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\n-distributionUrl=https\\://downloads.gradle.org/distributions/gradle-7.4-bin.zip\n+distributionUrl=https\\://downloads.gradle.org/distributions/gradle-7.4.2-bin.zip\nzipStoreBase=GRADLE_USER_HOME\n@@ -6,0 +6,1 @@\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n+distributionSha256Sum=29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.UpdateGradleWrapper","displayName":"Update Gradle wrapper","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

