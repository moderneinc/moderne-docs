---
title: "Has minimum Java version"
sidebar_label: "Has minimum Java version"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/search/hasminimumjavaversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Has minimum Java version"}
  description={"Finds source files when the oldest Java version in use meets the supplied minimum version. Java version is attributed per source set (for example `src/main/java` and `src/test/java`), so the oldest Java version in use is the lowest version across every source set of every subproject in a repository. For example, the main source set of a project may use Java 8 while its test source set uses Java 17; in that case the oldest Java version in use is Java 8."}
  fqName={"org.openrewrite.java.search.HasMinimumJavaVersion"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/HasMinimumJavaVersion.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.search.HasMinimumJavaVersion"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.search.HasMinimumJavaVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/search/hasminimumjavaversion.md"}
>

<RecipeHeader.Title>Has minimum Java version</RecipeHeader.Title>

<RecipeHeader.Description>Finds source files when the oldest Java version in use meets the supplied minimum version. Java version is attributed per source set (for example `src/main/java` and `src/test/java`), so the oldest Java version in use is the lowest version across every source set of every subproject in a repository. For example, the main source set of a project may use Java 8 while its test source set uses Java 17; in that case the oldest Java version in use is Java 8.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"version","required":true,"description":"A minimum version number or a node-style semver selector. Plain values like `17` or `17.0.1` match that version or higher. To match an exact version, use `HasJavaVersion` instead.","example":"17"},{"type":"Boolean","name":"checkTargetCompatibility","required":false,"description":"The source and target compatibility versions can be different. This option allows you to check against the target compatibility version instead of the source compatibility version.","example":"17.X"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"version","value":"8-21"},{"parameter":"checkTargetCompatibility","value":"false"}],"unchanged":{"language":"java","code":"class Higher {\n}\n"},"variants":[{"language":"java","before":"class Test {\n}\n","after":"/*~~(Java version 8)~~>*/class Test {\n}\n","diff":"@@ -1,1 +1,1 @@\n-class Test {\n+/*~~(Java version 8)~~>*/class Test {\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.search.HasMinimumJavaVersion","displayName":"Has minimum Java version","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"version=17\" --recipe-option \"checkTargetCompatibility=17.X\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

