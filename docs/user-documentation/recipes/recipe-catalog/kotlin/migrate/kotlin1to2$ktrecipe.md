---
title: "Migrate to Kotlin 2.x"
sidebar_label: "Migrate to Kotlin 2.x"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Kotlin 2.x"}
  description={"Modernizes a Kotlin 1.x codebase for Kotlin 2.x: replaces stdlib APIs deprecated between 1.4 and 2.0 with their modern equivalents, swaps JVM-only `java.lang`/`java.util` helpers for multiplatform Kotlin extensions, migrates `inline class` to `@JvmInline value class`, and removes `@OptIn` annotations for experimental markers that have since graduated to stable."}
  fqName={"org.openrewrite.kotlin.migrate.Kotlin1To2$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate to Kotlin 2.x"}
  description={"Modernizes a Kotlin 1.x codebase for Kotlin 2.x: replaces stdlib APIs deprecated between 1.4 and 2.0 with their modern equivalents, swaps JVM-only `java.lang`/`java.util` helpers for multiplatform Kotlin extensions, migrates `inline class` to `@JvmInline value class`, and removes `@OptIn` annotations for experimental markers that have since graduated to stable."}
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.migrate.Kotlin1To2$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.migrate.Kotlin1To2$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/migrate/kotlin1to2$ktrecipe.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Use modern Kotlin stdlib idioms","href":"kotlin/migrate/usemodernkotlinstdlibapis$ktrecipe"},{"name":"Use `kotlin.math` instead of `java.lang.Math`","href":"kotlin/migrate/usekotlinmath$ktrecipe"},{"name":"Use Kotlin number extensions instead of `java.lang.Integer`/`Long`/`Double`/`Float`/`Boolean`","href":"kotlin/migrate/usekotlinnumberapis$ktrecipe"},{"name":"Use `Char` extensions instead of `java.lang.Character`","href":"kotlin/migrate/usekotlinchar$ktrecipe"},{"name":"Use Kotlin collection extensions instead of `java.util.Collections`","href":"kotlin/migrate/usekotlincollections$ktrecipe"},{"name":"Use Kotlin array extensions instead of `java.util.Arrays`","href":"kotlin/migrate/usekotlinarray$ktrecipe"},{"name":"Use `kotlin.text.Regex` instead of `java.util.regex.Pattern`","href":"kotlin/migrate/usekotlinregex$ktrecipe"},{"name":"Use `@JvmInline value class` instead of `inline class`","href":"kotlin/migrate/usevalueclass$ktrecipe"},{"name":"Remove redundant `@OptIn` annotations","href":"kotlin/migrate/removeredundantoptins$ktrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.migrate.Kotlin1To2$KtRecipe","displayName":"Migrate to Kotlin 2.x","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

