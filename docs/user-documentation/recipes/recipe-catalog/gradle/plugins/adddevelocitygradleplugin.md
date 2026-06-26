---
title: "Add the Develocity Gradle plugin"
sidebar_label: "Add the Develocity Gradle plugin"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/plugins/adddevelocitygradleplugin" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add the Develocity Gradle plugin"}
  description={"Add the Develocity Gradle plugin to settings.gradle files."}
  fqName={"org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/plugins/AddDevelocityGradlePlugin.java"}
/>

<RecipeHeader
  displayName={"Add the Develocity Gradle plugin"}
  description={"Add the Develocity Gradle plugin to settings.gradle files."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/plugins/adddevelocitygradleplugin.md"}
/>

<OptionsTable options={[{"type":"String","name":"version","required":false,"description":"An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors). Defaults to `latest.release`.","example":"3.x"},{"type":"String","name":"server","required":false,"description":"The URL of the Develocity server. If omitted the recipe will set no URL and Gradle will direct scans to https://scans.gradle.com/","example":"https://scans.gradle.com/"},{"type":"Boolean","name":"allowUntrustedServer","required":false,"description":"When set to `true` the plugin will be configured to allow unencrypted http connections with the server. If set to `false` or omitted, the plugin will refuse to communicate without transport layer security enabled.","example":"true"},{"type":"Boolean","name":"captureTaskInputFiles","required":false,"description":"When set to `true` the plugin will capture additional information about the inputs to Gradle tasks. This increases the size of build scans, but is useful for diagnosing issues with task caching. ","example":"true"},{"type":"Boolean","name":"uploadInBackground","required":false,"description":"When set to `true` the plugin will capture additional information about the outputs of Gradle tasks. This increases the size of build scans, but is useful for diagnosing issues with task caching. ","example":"true"},{"type":"PublishCriteria","name":"publishCriteria","required":false,"description":"When set to `Always` the plugin will publish build scans of every single build. When set to `Failure` the plugin will only publish build scans when the build fails. When omitted scans will be published only when the `--scan` option is passed to the build.","example":"Always"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.plugins.AddDevelocityGradlePlugin","displayName":"Add the Develocity Gradle plugin","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

