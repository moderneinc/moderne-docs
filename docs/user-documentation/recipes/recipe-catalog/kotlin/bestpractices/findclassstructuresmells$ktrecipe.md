---
title: "Find class-declaration smells"
sidebar_label: "Find class-declaration smells"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find class-declaration smells"}
  description={"Search-only bundle: flags class-level structural smells (empty companion, empty class body, redundant `: Any()`, manual `toString`/`equals`/`hashCode` trio, named companion of constants, multiple secondary constructors, sealed-class-without-state, marker-object-without-data, empty init, all-val classes that could be `data class`, mutable `data class`/object state, abstract classes without abstract members, and `open` classes with no overridable members)."}
  fqName={"org.openrewrite.kotlin.bestpractices.FindClassStructureSmells$KtRecipe"}
  languages={["Kotlin"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Kotlin"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kotlin.bestpractices.FindClassStructureSmells$KtRecipe"}
  artifact={"io.moderne.recipe:recipes-kotlin"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kotlin.bestpractices.FindClassStructureSmells$KtRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findclassstructuresmells$ktrecipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Find class-declaration smells</RecipeHeader.Title>

<RecipeHeader.Description>Search-only bundle: flags class-level structural smells (empty companion, empty class body, redundant `: Any()`, manual `toString`/`equals`/`hashCode` trio, named companion of constants, multiple secondary constructors, sealed-class-without-state, marker-object-without-data, empty init, all-val classes that could be `data class`, mutable `data class`/object state, abstract classes without abstract members, and `open` classes with no overridable members).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find marker `object` declarations that could be `data object`","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/finddataobjectcandidates$ktrecipe/"},{"name":"Find `sealed class` declarations that could be `sealed interface`","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findsealedclasswithoutstatecandidates$ktrecipe/"},{"name":"Find empty `companion object` declarations","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findemptycompanionobject$ktrecipe/"},{"name":"Find named `companion object Constants` patterns","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findnamedcompanionobjectofconstants$ktrecipe/"},{"name":"Find `class Foo : Any()` declarations","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findclassextendsany$ktrecipe/"},{"name":"Find `class Foo {}` declarations with an empty body","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findemptyclassbody$ktrecipe/"},{"name":"Find empty `init { }` blocks","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findemptyinitblock$ktrecipe/"},{"name":"Find classes with manual `toString`/`equals`/`hashCode` overrides","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findmanualtostringequalshashcode$ktrecipe/"},{"name":"Find classes with multiple overloaded secondary constructors","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findmultiplesecondaryconstructors$ktrecipe/"},{"name":"Find classes that could be `data class`","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findclasswithoutdataannotation$ktrecipe/"},{"name":"Find `data class` declarations with `var` properties","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/finddataclasswithmutableproperty$ktrecipe/"},{"name":"Find `object` declarations with `var` properties","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findobjectwithmutablestate$ktrecipe/"},{"name":"Find `abstract class` declarations without abstract members","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findabstractclasswithoutmembers$ktrecipe/"},{"name":"Find `open class` declarations without overridable members","href":"/user-documentation/recipes/recipe-catalog/kotlin/bestpractices/findopenclasswithoutoverrides$ktrecipe/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kotlin.bestpractices.FindClassStructureSmells$KtRecipe","displayName":"Find class-declaration smells","groupId":"io.moderne.recipe","artifactId":"recipes-kotlin","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_KOTLIN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

