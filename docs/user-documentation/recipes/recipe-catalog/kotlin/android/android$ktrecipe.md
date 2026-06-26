---
title: "Find Android smells"
sidebar_label: "Find Android smells"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Android smells"}
  description={"Search-only Android recipe family covering the deprecated-API surface (Activity / Fragment / Handler / kotlinx.android.synthetic / parcel / Vibrator / registerReceiver), storage-layer footguns (`SharedPreferences.commit`, Room `@Query` shape, `ContentResolver.query`), lifecycle smells (`LiveData.observe(this, ...)`, public `MutableLiveData`), permissions/security (`requestPermissions`, `MODE_WORLD_*`), Android-specific performance (`findViewById` in `onDraw`, raw `BitmapFactory`, `Handler.postDelayed`, `runOnUiThread`), WebView smells (`loadUrl`, `setJavaScriptEnabled`), logging smells (`Log.*`, `System.out`), and modernization candidates (manual `Parcelable`/`Serializable`, RxJava, raw Dagger, manual `ViewModelProvider`, `ObjectAnimator`, `Runtime.exec`)."}
  fqName={"org.openrewrite.kotlin.android.Android$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Android smells"}
  description={"Search-only Android recipe family covering the deprecated-API surface (Activity / Fragment / Handler / kotlinx.android.synthetic / parcel / Vibrator / registerReceiver), storage-layer footguns (`SharedPreferences.commit`, Room `@Query` shape, `ContentResolver.query`), lifecycle smells (`LiveData.observe(this, ...)`, public `MutableLiveData`), permissions/security (`requestPermissions`, `MODE_WORLD_*`), Android-specific performance (`findViewById` in `onDraw`, raw `BitmapFactory`, `Handler.postDelayed`, `runOnUiThread`), WebView smells (`loadUrl`, `setJavaScriptEnabled`), logging smells (`Log.*`, `System.out`), and modernization candidates (manual `Parcelable`/`Serializable`, RxJava, raw Dagger, manual `ViewModelProvider`, `ObjectAnimator`, `Runtime.exec`)."}
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.android.Android$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.android.Android$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/android/android$ktrecipe.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Find deprecated Android APIs","href":"kotlin/android/finddeprecatedandroidapis$ktrecipe"},{"name":"Find Android storage / data-layer smells","href":"kotlin/android/findandroidstoragesmells$ktrecipe"},{"name":"Find Android lifecycle / LiveData smells","href":"kotlin/android/findandroidlifecyclesmells$ktrecipe"},{"name":"Find Android permissions / security smells","href":"kotlin/android/findandroidpermissionssmells$ktrecipe"},{"name":"Find Android-specific performance smells","href":"kotlin/android/findandroidperformancesmells$ktrecipe"},{"name":"Find Android WebView smells","href":"kotlin/android/findandroidwebviewsmells$ktrecipe"},{"name":"Find Android logging smells","href":"kotlin/android/findandroidloggingsmells$ktrecipe"},{"name":"Find Android modernization candidates","href":"kotlin/android/findandroidmodernizationcandidates$ktrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.android.Android$KtRecipe","displayName":"Find Android smells","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

