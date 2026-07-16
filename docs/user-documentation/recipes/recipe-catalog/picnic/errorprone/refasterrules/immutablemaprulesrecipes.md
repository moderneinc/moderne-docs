---
title: "`ImmutableMapRules` Refaster recipes"
sidebar_label: "`ImmutableMapRules` Refaster recipes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/immutablemaprulesrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"`ImmutableMapRules` Refaster recipes"}
  description={"Refaster rules related to expressions dealing with `ImmutableMap`s.\n[Source](https://error-prone.picnic.tech/refasterrules/ImmutableMapRules)."}
  fqName={"tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes.md"}
>

<RecipeHeader.Title>`ImmutableMapRules` Refaster recipes</RecipeHeader.Title>

<RecipeHeader.Description>Refaster rules related to expressions dealing with `ImmutableMap`s. [Source](https://error-prone.picnic.tech/refasterrules/ImmutableMapRules).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Refaster template `ImmutableMapRules.ImmutableMapBuilder`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapbuilderrecipe/"},{"name":"Refaster template `ImmutableMapRules.BuilderBuildOrThrow`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$builderbuildorthrowrecipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOfEntryGetKeyEntryGetValue`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapofentrygetkeyentrygetvaluerecipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapCopyOf`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapcopyofrecipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOf0`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof0recipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOf2`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof2recipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOf4`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof4recipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOf6`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof6recipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOf8`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof8recipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOf10`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof10recipe/"},{"name":"Refaster template `ImmutableMapRules.ImmutableMapOfEntries`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapofentriesrecipe/"},{"name":"Refaster template `ImmutableMapRules.BuilderPut`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/immutablemaprulesrecipes$builderputrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes","displayName":"`ImmutableMapRules` Refaster recipes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

