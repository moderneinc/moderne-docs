---
title: "Replace deprecated `kotlinx-coroutines-core` methods"
sidebar_label: "Replace deprecated `kotlinx-coroutines-core` methods"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `kotlinx-coroutines-core` methods"}
  description={"Automatically generated recipes to replace deprecated Kotlin methods based on `@Deprecated(replaceWith=ReplaceWith(...))` annotations."}
  fqName={"org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace deprecated `kotlinx-coroutines-core` methods"}
  description={"Automatically generated recipes to replace deprecated Kotlin methods based on `@Deprecated(replaceWith=ReplaceWith(...))` annotations."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/jetbrains/kotlinx/replacedeprecatedkotlinxcoroutinescore1methods.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"},{"name":"Replace Kotlin method","href":"kotlin/replace/replacekotlinmethod"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"kotlin","before":"import kotlinx.coroutines.channels.ReceiveChannel\n\n@Suppress(\"DEPRECATION\")\nfun <T> pollChannel(channel: ReceiveChannel<T>): T? {\n    return channel.poll()\n}\n","after":"import kotlinx.coroutines.channels.ReceiveChannel\n\n@Suppress(\"DEPRECATION\")\nfun <T> pollChannel(channel: ReceiveChannel<T>): T? {\n    return channel.tryReceive().getOrNull()\n}\n","diff":"@@ -5,1 +5,1 @@\n@Suppress(\"DEPRECATION\")\nfun <T> pollChannel(channel: ReceiveChannel<T>): T? {\n-   return channel.poll()\n+   return channel.tryReceive().getOrNull()\n}\n","newFile":false}]},{"variants":[{"language":"kotlin","before":"import kotlinx.coroutines.channels.ReceiveChannel\n\n@Suppress(\"DEPRECATION\")\nfun <T> pollChannel(channel: ReceiveChannel<T>): T? {\n    return channel.poll()\n}\n","after":"import kotlinx.coroutines.channels.ReceiveChannel\n\n@Suppress(\"DEPRECATION\")\nfun <T> pollChannel(channel: ReceiveChannel<T>): T? {\n    return channel.tryReceive().getOrNull()\n}\n","diff":"@@ -5,1 +5,1 @@\n@Suppress(\"DEPRECATION\")\nfun <T> pollChannel(channel: ReceiveChannel<T>): T? {\n-   return channel.poll()\n+   return channel.tryReceive().getOrNull()\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.jetbrains.kotlinx.ReplaceDeprecatedKotlinxCoroutinesCore1Methods","displayName":"Replace deprecated `kotlinx-coroutines-core` methods","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-kotlin","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

