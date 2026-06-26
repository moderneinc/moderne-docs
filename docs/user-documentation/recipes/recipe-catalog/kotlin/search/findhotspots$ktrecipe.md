---
title: "Find hotspots and complexity points"
sidebar_label: "Find hotspots and complexity points"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find hotspots and complexity points"}
  description={"Surface large classes, long functions, wide parameter lists, sprawling `when` expressions, deep nesting, god classes, magic numbers, and unmarked self-recursion. Each match is a candidate for a reviewer (or LLM agent) to refactor or to read carefully when building a mental model of the file."}
  fqName={"org.openrewrite.kotlin.search.FindHotspots$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find hotspots and complexity points"}
  description={"Surface large classes, long functions, wide parameter lists, sprawling `when` expressions, deep nesting, god classes, magic numbers, and unmarked self-recursion. Each match is a candidate for a reviewer (or LLM agent) to refactor or to read carefully when building a mental model of the file."}
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.search.FindHotspots$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.search.FindHotspots$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/search/findhotspots$ktrecipe.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find classes with more than 200 statements","href":"kotlin/search/findlargeclasses$ktrecipe"},{"name":"Find functions with more than 30 statements","href":"kotlin/search/findlongfunctions$ktrecipe"},{"name":"Find functions with more than 5 parameters","href":"kotlin/search/findmanyparameters$ktrecipe"},{"name":"Find `when` expressions with more than 10 branches","href":"kotlin/search/findlargewhenbranches$ktrecipe"},{"name":"Find functions with nesting depth greater than 4","href":"kotlin/search/finddeepnesting$ktrecipe"},{"name":"Find classes with more than 25 methods","href":"kotlin/search/findgodclasses$ktrecipe"},{"name":"Find numeric literals other than 0, 1, -1","href":"kotlin/search/findmagicnumbers$ktrecipe"},{"name":"Find recursive functions not marked `tailrec`","href":"kotlin/search/findrecursionwithouttailrec$ktrecipe"},{"name":"Find functions with empty bodies","href":"kotlin/search/findemptyfunctions$ktrecipe"},{"name":"Find `!!` not-null assertions","href":"kotlin/search/findnotnullassertions$ktrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.search.FindHotspots$KtRecipe","displayName":"Find hotspots and complexity points","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

