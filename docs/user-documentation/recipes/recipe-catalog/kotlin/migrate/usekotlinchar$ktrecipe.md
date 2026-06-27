---
title: "Use `Char` extensions instead of `java.lang.Character`"
sidebar_label: "Use `Char` extensions instead of `java.lang.Character`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `Char` extensions instead of `java.lang.Character`"}
  description={"Replaces JVM-only static helpers on `java.lang.Character` (`isDigit(c)`, `isLetter(c)`, `toUpperCase(c)`, `digit(c, radix)`, `compare(a, b)`, `toString(c)`, surrogate predicates) with the multiplatform Kotlin extensions on `Char` (`c.isDigit()`, `c.uppercaseChar()`, `c.digitToInt(radix)`, …)."}
  fqName={"org.openrewrite.kotlin.migrate.UseKotlinChar$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.migrate.UseKotlinChar$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.migrate.UseKotlinChar$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/migrate/usekotlinchar$ktrecipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Use `Char` extensions instead of `java.lang.Character`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces JVM-only static helpers on `java.lang.Character` (`isDigit(c)`, `isLetter(c)`, `toUpperCase(c)`, `digit(c, radix)`, `compare(a, b)`, `toString(c)`, surrogate predicates) with the multiplatform Kotlin extensions on `Char` (`c.isDigit()`, `c.uppercaseChar()`, `c.digitToInt(radix)`, …).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Use `Char.isDigit()` instead of `Character.isDigit(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisdigit$ktrecipe/"},{"name":"Use `Char.isLetter()` instead of `Character.isLetter(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisletter$ktrecipe/"},{"name":"Use `Char.isLetterOrDigit()` instead of `Character.isLetterOrDigit(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisletterordigit$ktrecipe/"},{"name":"Use `Char.isWhitespace()` instead of `Character.isWhitespace(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechariswhitespace$ktrecipe/"},{"name":"Use `Char.isUpperCase()` instead of `Character.isUpperCase(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisuppercase$ktrecipe/"},{"name":"Use `Char.isLowerCase()` instead of `Character.isLowerCase(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharislowercase$ktrecipe/"},{"name":"Use `Char.isDefined()` instead of `Character.isDefined(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisdefined$ktrecipe/"},{"name":"Use `Char.isISOControl()` instead of `Character.isISOControl(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharisisocontrol$ktrecipe/"},{"name":"Use `Char.isHighSurrogate()` instead of `Character.isHighSurrogate(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharishighsurrogate$ktrecipe/"},{"name":"Use `Char.isLowSurrogate()` instead of `Character.isLowSurrogate(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharislowsurrogate$ktrecipe/"},{"name":"Use `Char.isTitleCase()` instead of `Character.isTitleCase(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharistitlecase$ktrecipe/"},{"name":"Use `Char.uppercaseChar()` instead of `Character.toUpperCase(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharuppercasecharforcharacter$ktrecipe/"},{"name":"Use `Char.lowercaseChar()` instead of `Character.toLowerCase(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharlowercasecharforcharacter$ktrecipe/"},{"name":"Use `Char.digitToInt(radix)` instead of `Character.digit(c, radix)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechardigittoint$ktrecipe/"},{"name":"Use `Int.digitToChar(radix)` instead of `Character.forDigit(digit, radix)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/useintdigittochar$ktrecipe/"},{"name":"Use `Char.compareTo` instead of `java.lang.Character.compare`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usecharcompareto$ktrecipe/"},{"name":"Use `Char.toString()` instead of `Character.toString(c)`","href":"/user-documentation/recipes/recipe-catalog/kotlin/migrate/usechartostring$ktrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.migrate.UseKotlinChar$KtRecipe","displayName":"Use `Char` extensions instead of `java.lang.Character`","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

