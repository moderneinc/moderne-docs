---
title: "Update Maven wrapper"
sidebar_label: "Update Maven wrapper"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/updatemavenwrapper" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update Maven wrapper"}
  description={"Update the version of Maven used in an existing Maven wrapper."}
  fqName={"org.openrewrite.maven.UpdateMavenWrapper"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/UpdateMavenWrapper.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.UpdateMavenWrapper"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.UpdateMavenWrapper"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/updatemavenwrapper.md"}
>

<RecipeHeader.Title>Update Maven wrapper</RecipeHeader.Title>

<RecipeHeader.Description>Update the version of Maven used in an existing Maven wrapper.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"wrapperVersion","required":false,"description":"An exact version number or node-style semver selector used to select the wrapper version number.","example":"3.x"},{"type":"String","name":"wrapperDistribution","required":false,"description":"The distribution of the Maven wrapper to use.\n\n* \"bin\" uses a `maven-wrapper.jar` compiled binary.\n* \"only-script\" uses a lite version of `mvnw`/`mvnw.cmd` using wget/curl or powershell. (required wrapper 3.2.0 or newer)\n* \"script\" downloads `maven-wrapper.jar` or `MavenWrapperDownloader.java` to then download a full distribution.\n* \"source\" uses `MavenWrapperDownloader.java` source file.\n\nDefaults to \"bin\"."},{"type":"String","name":"distributionVersion","required":false,"description":"An exact version number or node-style semver selector used to select the Maven version number.","example":"3.x"},{"type":"String","name":"repositoryUrl","required":false,"description":"The URL of the repository to download the Maven wrapper and distribution from. Supports repositories with a Maven layout. Defaults to `https://repo.maven.apache.org/maven2`.","example":"https://repo.maven.apache.org/maven2"},{"type":"Boolean","name":"addIfMissing","required":false,"description":"Add a Maven wrapper, if it's missing. Defaults to `true`."},{"type":"Boolean","name":"enforceWrapperChecksumVerification","required":false,"description":"Enforce checksum verification for the maven-wrapper.jar. Enabling this feature may sporadically result in build failures, such as [MWRAPPER-103](https://issues.apache.org/jira/browse/MWRAPPER-103). Defaults to `false`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"wrapperVersion","value":"3.1.x"},{"parameter":"wrapperDistribution","value":"null"},{"parameter":"distributionVersion","value":"3.8.x"},{"parameter":"repositoryUrl","value":"null"},{"parameter":"addIfMissing","value":"null"},{"parameter":"enforceWrapperChecksumVerification","value":"null"}],"unchanged":{"language":"xml","code":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>1.0.0</version>\n</project>\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.UpdateMavenWrapper","displayName":"Update Maven wrapper","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

