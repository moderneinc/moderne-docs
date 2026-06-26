---
title: "Apply Kotlin null-safety and scope-function idioms"
sidebar_label: "Apply Kotlin null-safety and scope-function idioms"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Apply Kotlin null-safety and scope-function idioms"}
  description={"Search-only recipes covering the two most-cited stylistic categories in IntelliJ's Kotlin inspections: null-safety (`if (x != null)` ladders, `!!`, `requireNotNull` polish, `mapNotNull` / `listOfNotNull` adoption, unsafe casts) and scope-function ergonomics (the 12 well-defined `let`/`run`/`with`/`apply`/`also` correctness rules). Each match is a `SearchResult` for review — nothing is rewritten automatically."}
  fqName={"org.openrewrite.kotlin.idiom.NullSafetyAndScopeFunctions$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Apply Kotlin null-safety and scope-function idioms"}
  description={"Search-only recipes covering the two most-cited stylistic categories in IntelliJ's Kotlin inspections: null-safety (`if (x != null)` ladders, `!!`, `requireNotNull` polish, `mapNotNull` / `listOfNotNull` adoption, unsafe casts) and scope-function ergonomics (the 12 well-defined `let`/`run`/`with`/`apply`/`also` correctness rules). Each match is a `SearchResult` for review — nothing is rewritten automatically."}
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.idiom.NullSafetyAndScopeFunctions$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.idiom.NullSafetyAndScopeFunctions$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/idiom/nullsafetyandscopefunctions$ktrecipe.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find manual null-check idioms","href":"kotlin/idiom/findnullcheckidioms$ktrecipe"},{"name":"Find `let { }` ergonomics","href":"kotlin/idiom/findletidioms$ktrecipe"},{"name":"Find scope-function correctness swaps","href":"kotlin/idiom/findscopefunctionswaps$ktrecipe"},{"name":"Find null-assertion polish opportunities","href":"kotlin/idiom/findnullassertionpolish$ktrecipe"},{"name":"Find collection null-safety idioms","href":"kotlin/idiom/findcollectionnullsafety$ktrecipe"},{"name":"Find cast and nullable-shape idioms","href":"kotlin/idiom/findcastandnullableshapes$ktrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.idiom.NullSafetyAndScopeFunctions$KtRecipe","displayName":"Apply Kotlin null-safety and scope-function idioms","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

