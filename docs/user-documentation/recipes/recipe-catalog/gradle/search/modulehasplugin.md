---
title: "Module has plugin"
sidebar_label: "Module has plugin"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/search/modulehasplugin" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Module has plugin"}
  description={"Searches for Gradle Projects (modules) that have a plugin matching the specified id or implementing class. Places a `SearchResult` marker on all sources within a project with a matching plugin. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that apply the spring dependency management plugin, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindPlugins` recipe instead."}
  fqName={"org.openrewrite.gradle.search.ModuleHasPlugin"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/ModuleHasPlugin.java"}
/>

<RecipeHeader
  displayName={"Module has plugin"}
  description={"Searches for Gradle Projects (modules) that have a plugin matching the specified id or implementing class. Places a `SearchResult` marker on all sources within a project with a matching plugin. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that apply the spring dependency management plugin, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindPlugins` recipe instead."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.search.ModuleHasPlugin"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.search.ModuleHasPlugin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/search/modulehasplugin.md"}
/>

<OptionsTable options={[{"type":"String","name":"pluginId","required":true,"description":"The unique identifier used to apply a plugin in the `plugins` block. Note that this alone is insufficient to search for plugins applied by fully qualified class name and the `buildscript` block.","example":"`com.jfrog.bintray`"},{"type":"String","name":"pluginClass","required":false,"description":"The fully qualified name of a class implementing a Gradle plugin. ","example":"com.jfrog.bintray.gradle.BintrayPlugin"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"pluginId","value":"org.openrewrite.rewrite"},{"parameter":"pluginClass","value":"org.openrewrite.gradle.RewritePlugin"}],"unchanged":{"language":"groovy","code":"plugins {\n    id 'java'\n}\n"},"variants":[{"language":"groovy","before":"plugins {\n    id 'java'\n    id 'org.openrewrite.rewrite' version '6.18.0'\n}\n","after":"/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/plugins {\n    id 'java'\n    id 'org.openrewrite.rewrite' version '6.18.0'\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -1,1 +1,1 @@\n-plugins {\n+/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/plugins {\n    id 'java'\n","newFile":false},{"language":"java","before":"class A {}\n","after":"/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/class A {}\n","diff":"@@ -1,1 +1,1 @@\n-class A {}\n+/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/class A {}\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.search.ModuleHasPlugin","displayName":"Module has plugin","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":true,"cliOptions":" --recipe-option \"pluginId='`com.jfrog.bintray`'\" --recipe-option \"pluginClass=com.jfrog.bintray.gradle.BintrayPlugin\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

