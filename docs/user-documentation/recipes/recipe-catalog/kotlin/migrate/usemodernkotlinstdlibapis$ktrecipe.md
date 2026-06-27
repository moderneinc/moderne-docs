---
title: "Use modern Kotlin stdlib idioms"
sidebar_label: "Use modern Kotlin stdlib idioms"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use modern Kotlin stdlib idioms"}
  description={"Replaces Kotlin stdlib APIs deprecated between 1.4 and 2.0 with their modern equivalents, and adopts newer language features (open-ended range `..<`, `enumEntries<T>()`) where the older spelling still compiles but reads worse."}
  fqName={"org.openrewrite.kotlin.migrate.UseModernKotlinStdlibApis$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.migrate.UseModernKotlinStdlibApis$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.migrate.UseModernKotlinStdlibApis$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/migrate/usemodernkotlinstdlibapis$ktrecipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Use modern Kotlin stdlib idioms</RecipeHeader.Title>

<RecipeHeader.Description>Replaces Kotlin stdlib APIs deprecated between 1.4 and 2.0 with their modern equivalents, and adopts newer language features (open-ended range `..<`, `enumEntries<T>()`) where the older spelling still compiles but reads worse.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Use `uppercase()` instead of `toUpperCase()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useuppercase$ktrecipe/"},{"name":"Use `lowercase()` instead of `toLowerCase()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselowercase$ktrecipe/"},{"name":"Use `uppercase(locale)` instead of `toUpperCase(locale)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useuppercasewithlocale$ktrecipe/"},{"name":"Use `lowercase(locale)` instead of `toLowerCase(locale)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselowercasewithlocale$ktrecipe/"},{"name":"Use `replaceFirstChar { … }` instead of `capitalize()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecapitalize$ktrecipe/"},{"name":"Use `replaceFirstChar { it.lowercase() }` instead of `decapitalize()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usedecapitalize$ktrecipe/"},{"name":"Use `appendLine()` instead of `appendln()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendline$ktrecipe/"},{"name":"Use `appendLine(value)` instead of `appendln(value)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlinewithvalue$ktrecipe/"},{"name":"Use `appendLine(char)` instead of `appendln(char)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlinechar$ktrecipe/"},{"name":"Use `appendLine(cs)` instead of `appendln(cs)` (CharSequence)","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlinecharsequence$ktrecipe/"},{"name":"Use `appendLine(value)` instead of `appendln(value)` (Any?)","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useappendlineany$ktrecipe/"},{"name":"Use `Char.code` instead of `Char.toInt()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcode$ktrecipe/"},{"name":"Use `Char.code.toByte()` instead of `Char.toByte()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasbyte$ktrecipe/"},{"name":"Use `Char.code.toShort()` instead of `Char.toShort()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasshort$ktrecipe/"},{"name":"Use `Char.code.toLong()` instead of `Char.toLong()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeaslong$ktrecipe/"},{"name":"Use `Char.code.toFloat()` instead of `Char.toFloat()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasfloat$ktrecipe/"},{"name":"Use `Char.code.toDouble()` instead of `Char.toDouble()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcodeasdouble$ktrecipe/"},{"name":"Use `Char.uppercaseChar()` instead of `Char.toUpperCase()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useuppercasechar$ktrecipe/"},{"name":"Use `Char.lowercaseChar()` instead of `Char.toLowerCase()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/uselowercasechar$ktrecipe/"},{"name":"Use `Char(int)` instead of `Int.toChar()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharctor$ktrecipe/"},{"name":"Use `readlnOrNull()` instead of `readLine()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usereadlnornull$ktrecipe/"},{"name":"Use `readln()` instead of `readLine()!!`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usereadln$ktrecipe/"},{"name":"Use `sumOf` instead of `sumBy`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usesumof$ktrecipe/"},{"name":"Use `sumOf` instead of `sumByDouble`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usesumofdouble$ktrecipe/"},{"name":"Use `..<` instead of `until`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/userangeuntiloperator$ktrecipe/"},{"name":"Use `enumEntries<T>()` instead of `enumValues<T>()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useenumentries$ktrecipe/"},{"name":"Use `removeAt(0)` instead of `removeFirst()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useremoveatzeroforremovefirst$ktrecipe/"},{"name":"Use `removeAt(lastIndex)` instead of `removeLast()`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useremoveatlastindexforremovelast$ktrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.migrate.UseModernKotlinStdlibApis$KtRecipe","displayName":"Use modern Kotlin stdlib idioms","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

