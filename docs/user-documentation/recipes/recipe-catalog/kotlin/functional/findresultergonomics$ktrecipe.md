---
title: "Find `Result&lt;T&gt;` API ergonomics opportunities"
sidebar_label: "Find `Result&lt;T&gt;` API ergonomics opportunities"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `Result<T>` API ergonomics opportunities"}
  description={"Search-only bundle for `Result<T>` call sites where a different operator would be clearer: `if (result.isSuccess) … else …` (use `.fold(...)`), `Result.map { … }.getOrThrow()` (drop the Result wrapper or use `.fold(...)`), and `getOrElse { default }` whose lambda ignores the failure (use `getOrDefault(default)`)."}
  fqName={"org.openrewrite.kotlin.functional.FindResultErgonomics$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find `Result<T>` API ergonomics opportunities"}
  description={"Search-only bundle for `Result<T>` call sites where a different operator would be clearer: `if (result.isSuccess) … else …` (use `.fold(...)`), `Result.map { … }.getOrThrow()` (drop the Result wrapper or use `.fold(...)`), and `getOrElse { default }` whose lambda ignores the failure (use `getOrDefault(default)`)."}
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.functional.FindResultErgonomics$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.functional.FindResultErgonomics$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/functional/findresultergonomics$ktrecipe.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find `if (result.isSuccess) … else …` patterns","href":"kotlin/functional/findresultfoldimperative$ktrecipe"},{"name":"Find `Result.map { }.getOrThrow()` chains","href":"kotlin/functional/findresultmapwithouterrorhandling$ktrecipe"},{"name":"Find `Result.getOrElse { }` whose lambda ignores the failure parameter","href":"kotlin/functional/findresultgetorelseignoringfailure$ktrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.functional.FindResultErgonomics$KtRecipe","displayName":"Find `Result<T>` API ergonomics opportunities","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

