---
title: "Find Compose stability and recomposition issues"
sidebar_label: "Find Compose stability and recomposition issues"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Compose stability and recomposition issues"}
  description={"Search-only recipes that surface Jetpack Compose anti-patterns the Android docs and Compose stability guide call out: unstable parameter types, mutable classes annotated `@Stable`/`@Immutable`, inline `Modifier` allocations, missing `remember` keys, effect-handler misuse, navigation inside composable bodies, single-child layout wrappers, lazy-list items without keys, and API-shape violations. Each match is a `SearchResult` for human review — Compose remedies are judgement calls (hoist? wrap? annotate? split?) that depend on context outside any one expression. For diff-only output on the small autofix set, use `ImproveKotlinCompose`."}
  fqName={"org.openrewrite.kotlin.compose.Compose$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Compose stability and recomposition issues"}
  description={"Search-only recipes that surface Jetpack Compose anti-patterns the Android docs and Compose stability guide call out: unstable parameter types, mutable classes annotated `@Stable`/`@Immutable`, inline `Modifier` allocations, missing `remember` keys, effect-handler misuse, navigation inside composable bodies, single-child layout wrappers, lazy-list items without keys, and API-shape violations. Each match is a `SearchResult` for human review — Compose remedies are judgement calls (hoist? wrap? annotate? split?) that depend on context outside any one expression. For diff-only output on the small autofix set, use `ImproveKotlinCompose`."}
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.compose.Compose$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.compose.Compose$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/compose/compose$ktrecipe.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find Compose stability issues","href":"kotlin/compose/findcomposestabilityissues$ktrecipe"},{"name":"Find Compose `Modifier` smells","href":"kotlin/compose/findcomposemodifierissues$ktrecipe"},{"name":"Find Compose layout hierarchy smells","href":"kotlin/compose/findcomposelayoutissues$ktrecipe"},{"name":"Find Compose state read/write issues","href":"kotlin/compose/findcomposestatereadissues$ktrecipe"},{"name":"Find Compose `remember` key issues","href":"kotlin/compose/findcomposerememberissues$ktrecipe"},{"name":"Find Compose effect handler issues","href":"kotlin/compose/findcomposeeffectissues$ktrecipe"},{"name":"Find Compose navigation / coroutine misuse","href":"kotlin/compose/findcomposenavigationissues$ktrecipe"},{"name":"Find Compose API design issues","href":"kotlin/compose/findcomposeapidesignissues$ktrecipe"},{"name":"Find Compose ViewModel wiring issues","href":"kotlin/compose/findcomposeviewmodelissues$ktrecipe"},{"name":"Find Compose `Modifier` ordering smells","href":"kotlin/compose/findmodifierorderingsmells$ktrecipe"},{"name":"Find `Modifier.padding(...)` shorthand opportunities","href":"kotlin/compose/findmodifiershorthands$ktrecipe"},{"name":"Find Compose state + remember misuse","href":"kotlin/compose/findstateandremembersmells$ktrecipe"},{"name":"Find Compose effect-handler misuse","href":"kotlin/compose/findsideeffectsmells$ktrecipe"},{"name":"Find Compose recomposition smells","href":"kotlin/compose/findrecompositionsmells$ktrecipe"},{"name":"Find lifecycle-naive flow / LiveData collection in Composables","href":"kotlin/compose/findlifecycleawareflowsmells$ktrecipe"},{"name":"Find Compose function-naming conventions","href":"kotlin/compose/findcomposableconventionsmells$ktrecipe"},{"name":"Find hardcoded color literals inside `@Composable`","href":"kotlin/compose/findhardcodeddesigntokens$ktrecipe"},{"name":"Find `remember { mutableStateOf(emptyList/Map()) }` candidates for snapshot-aware containers","href":"kotlin/compose/usespecializedcomposestatecontainers$ktrecipe"},{"name":"Find single-child wrapper composables (Material 3)","href":"kotlin/compose/findunnecessarycomposewrappers$ktrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.compose.Compose$KtRecipe","displayName":"Find Compose stability and recomposition issues","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

