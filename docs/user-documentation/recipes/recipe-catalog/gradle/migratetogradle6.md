---
title: "Migrate to Gradle 6 from Gradle 5"
sidebar_label: "Migrate to Gradle 6 from Gradle 5"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/migratetogradle6" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Gradle 6 from Gradle 5"}
  description={"Migrate to version 6.x. See the Gradle upgrade guide from [version 5.x to 6.0](https://docs.gradle.org/current/userguide/upgrading_version_5.html) for more information."}
  fqName={"org.openrewrite.gradle.MigrateToGradle6"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/resources/META-INF/rewrite/gradle-6.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.MigrateToGradle6"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.MigrateToGradle6"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/migratetogradle6.md"}
>

<RecipeHeader.Title>Migrate to Gradle 6 from Gradle 5</RecipeHeader.Title>

<RecipeHeader.Description>Migrate to version 6.x. See the Gradle upgrade guide from [version 5.x to 6.0](https://docs.gradle.org/current/userguide/upgrading_version_5.html) for more information.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to Gradle 5 from Gradle 4","href":"/user-documentation/recipes/recipe-catalog/gradle/migratetogradle5/"},{"name":"Update Gradle wrapper","href":"/user-documentation/recipes/recipe-catalog/gradle/updategradlewrapper/"},{"name":"Change a Gradle dependency configuration","href":"/user-documentation/recipes/recipe-catalog/gradle/changedependencyconfiguration/"},{"name":"Change a Gradle dependency configuration","href":"/user-documentation/recipes/recipe-catalog/gradle/changedependencyconfiguration/"},{"name":"Change a Gradle dependency configuration","href":"/user-documentation/recipes/recipe-catalog/gradle/changedependencyconfiguration/"},{"name":"Remove an enabled Gradle preview feature","href":"/user-documentation/recipes/recipe-catalog/gradle/removeenablefeaturepreview/"},{"name":"Remove an enabled Gradle preview feature","href":"/user-documentation/recipes/recipe-catalog/gradle/removeenablefeaturepreview/"},{"name":"Remove an enabled Gradle preview feature","href":"/user-documentation/recipes/recipe-catalog/gradle/removeenablefeaturepreview/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.MigrateToGradle6","displayName":"Migrate to Gradle 6 from Gradle 5","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

