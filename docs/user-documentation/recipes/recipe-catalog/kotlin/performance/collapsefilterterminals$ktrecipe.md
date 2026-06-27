---
title: "Collapse `filter { p }.&lt;terminal&gt;()` chains"
sidebar_label: "Collapse `filter { p }.&lt;terminal&gt;()` chains"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Collapse `filter { p }.<terminal>()` chains"}
  description={"Folds predicate-taking terminals (`first`, `last`, `count`, `any`, `none`, `single`, `firstOrNull`, `lastOrNull`, `singleOrNull`) and `sumOf`/`maxOf`/`minOf` selectors into the upstream `filter` or `map`, avoiding the intermediate list materialization."}
  fqName={"org.openrewrite.kotlin.performance.CollapseFilterTerminals$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.performance.CollapseFilterTerminals$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.performance.CollapseFilterTerminals$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/performance/collapsefilterterminals$ktrecipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Collapse `filter { p }.<terminal>()` chains</RecipeHeader.Title>

<RecipeHeader.Description>Folds predicate-taking terminals (`first`, `last`, `count`, `any`, `none`, `single`, `firstOrNull`, `lastOrNull`, `singleOrNull`) and `sumOf`/`maxOf`/`minOf` selectors into the upstream `filter` or `map`, avoiding the intermediate list materialization.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Use `first { predicate }` instead of `filter { predicate }.first()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstwithpredicate$ktrecipe/"},{"name":"Use `last { predicate }` instead of `filter { predicate }.last()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/uselastwithpredicate$ktrecipe/"},{"name":"Use `count { predicate }` instead of `filter { predicate }.count()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usecountwithpredicate$ktrecipe/"},{"name":"Use `any { predicate }` instead of `filter { predicate }.isNotEmpty()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/useanywithpredicate$ktrecipe/"},{"name":"Use `none { predicate }` instead of `filter { predicate }.isEmpty()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usenonewithpredicate$ktrecipe/"},{"name":"Use `firstOrNull { predicate }` instead of `filter { predicate }.firstOrNull()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstornullwithpredicate$ktrecipe/"},{"name":"Use `lastOrNull { predicate }` instead of `filter { predicate }.lastOrNull()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/uselastornullwithpredicate$ktrecipe/"},{"name":"Use `single { predicate }` instead of `filter { predicate }.single()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usesinglewithpredicate$ktrecipe/"},{"name":"Use `singleOrNull { predicate }` instead of `filter { predicate }.singleOrNull()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usesingleornullwithpredicate$ktrecipe/"},{"name":"Use `any { predicate }` instead of `filter { predicate }.any()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/useanywithpredicateinsteadoffilterany$ktrecipe/"},{"name":"Use `none { predicate }` instead of `filter { predicate }.none()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usenonewithpredicateinsteadoffilternone$ktrecipe/"},{"name":"Use `sumOf { selector }` instead of `map { selector }.sum()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usesumofwithselector$ktrecipe/"},{"name":"Use `maxOf { selector }` instead of `map { selector }.max()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usemaxofwithselector$ktrecipe/"},{"name":"Use `minOf { selector }` instead of `map { selector }.min()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/useminofwithselector$ktrecipe/"},{"name":"Use `mapNotNull { f }` instead of `map { f }.filterNotNull()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usemapnotnullformapfilternotnull$ktrecipe/"},{"name":"Use `firstNotNullOf { f }` instead of `mapNotNull { f }.first()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstnotnullofformapfirst$ktrecipe/"},{"name":"Use `firstNotNullOfOrNull { f }` instead of `mapNotNull { f }.firstOrNull()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/usefirstnotnullofornullformapfirstornull$ktrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.performance.CollapseFilterTerminals$KtRecipe","displayName":"Collapse `filter { p }.<terminal>()` chains","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

