---
title: "Find expensive allocations on hot paths"
sidebar_label: "Find expensive allocations on hot paths"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find expensive allocations on hot paths"}
  description={"Search-only recipes that flag heavyweight allocations sitting on a path the runtime exercises repeatedly — inside a loop, inside `View.onDraw`/`onMeasure`/`onLayout`. Each match shows up as a `SearchResult` for review; nothing is rewritten automatically."}
  fqName={"org.openrewrite.kotlin.performance.FindAllocationsInHotPaths$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.performance.FindAllocationsInHotPaths$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.performance.FindAllocationsInHotPaths$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinhotpaths$ktrecipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Find expensive allocations on hot paths</RecipeHeader.Title>

<RecipeHeader.Description>Search-only recipes that flag heavyweight allocations sitting on a path the runtime exercises repeatedly — inside a loop, inside `View.onDraw`/`onMeasure`/`onLayout`. Each match shows up as a `SearchResult` for review; nothing is rewritten automatically.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find `Regex` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findregexallocationsinloops$ktrecipe/"},{"name":"Find `Pattern.compile` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findpatterncompileinloops$ktrecipe/"},{"name":"Find `SimpleDateFormat` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findsimpledateformatinloops$ktrecipe/"},{"name":"Find `DateTimeFormatter.ofPattern` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/finddatetimeformatterinloops$ktrecipe/"},{"name":"Find `BigDecimal(\"...\")` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findbigdecimalfromstringinloops$ktrecipe/"},{"name":"Find `BigInteger(\"...\")` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findbigintegerfromstringinloops$ktrecipe/"},{"name":"Find `BigInteger.valueOf(long)` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findbigintegervalueofinloops$ktrecipe/"},{"name":"Find `Calendar.getInstance()` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findcalendargetinstanceinloops$ktrecipe/"},{"name":"Find `Locale(...)` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findlocaleconstructioninloops$ktrecipe/"},{"name":"Find `File(...).bufferedReader()` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findfilenewbufferedreaderinloops$ktrecipe/"},{"name":"Find `URL(\"...\")` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findurlconstructorinloops$ktrecipe/"},{"name":"Find `URI(\"...\")` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/finduriconstructorinloops$ktrecipe/"},{"name":"Find `Base64.getDecoder()` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findbase64getdecoderinloops$ktrecipe/"},{"name":"Find `Charset.forName(...)` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findcharsetfornameinloops$ktrecipe/"},{"name":"Find `Optional.get()` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findoptionalgetinloops$ktrecipe/"},{"name":"Find `LoggerFactory.getLogger` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findloggerfactorygetloggerinloops$ktrecipe/"},{"name":"Find `Class.forName` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findclassfornameinloops$ktrecipe/"},{"name":"Find `String.format` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findstringformatinloops$ktrecipe/"},{"name":"Find `MessageDigest.getInstance` calls inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findmessagedigestgetinstanceinloops$ktrecipe/"},{"name":"Find Jackson `ObjectMapper()` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findobjectmapperinloops$ktrecipe/"},{"name":"Find `Gson()` allocations inside loops","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findgsoninloops$ktrecipe/"},{"name":"Find graphics allocations inside `View.onDraw`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinondraw$ktrecipe/"},{"name":"Find graphics allocations inside `View.onMeasure`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinonmeasure$ktrecipe/"},{"name":"Find graphics allocations inside `View.onLayout`","href":"/user-documentation/recipes/recipe-catalog/kotlin/performance/findallocationsinonlayout$ktrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.performance.FindAllocationsInHotPaths$KtRecipe","displayName":"Find expensive allocations on hot paths","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

