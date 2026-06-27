---
title: "Order Kotlin imports"
sidebar_label: "Order Kotlin imports"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/kotlin/orderimports" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Order Kotlin imports"}
  description={"Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does."}
  fqName={"org.openrewrite.kotlin.OrderImports"}
  languages={["Kotlin"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-kotlin/src/main/java/org/openrewrite/kotlin/OrderImports.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.kotlin.OrderImports"}
  artifact={"org.openrewrite:rewrite-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.OrderImports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/orderimports.md"}
>

<RecipeHeader.Title>Order Kotlin imports</RecipeHeader.Title>

<RecipeHeader.Description>Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"kotlin","before":"import r.core.Flux\nimport s.core.Flux\nimport com.fasterxml.jackson.databind.ObjectMapper\nimport org.apache.commons.logging.Log\nimport reactor.core.publisher.Mono\n","after":"import com.fasterxml.jackson.databind.ObjectMapper\nimport org.apache.commons.logging.Log\nimport r.core.Flux\nimport reactor.core.publisher.Mono\nimport s.core.Flux\n","diff":"@@ -1,2 +1,0 @@\n-import r.core.Flux\n-import s.core.Flux\nimport com.fasterxml.jackson.databind.ObjectMapper\n@@ -5,0 +3,1 @@\nimport com.fasterxml.jackson.databind.ObjectMapper\nimport org.apache.commons.logging.Log\n+import r.core.Flux\nimport reactor.core.publisher.Mono\n@@ -6,0 +5,1 @@\nimport org.apache.commons.logging.Log\nimport reactor.core.publisher.Mono\n+import s.core.Flux\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.OrderImports","displayName":"Order Kotlin imports","groupId":"org.openrewrite","artifactId":"rewrite-kotlin","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

