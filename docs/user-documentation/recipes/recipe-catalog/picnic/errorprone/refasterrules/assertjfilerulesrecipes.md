---
title: "Refaster rules related to AssertJ assertions over `File`s"
sidebar_label: "Refaster rules related to AssertJ assertions over `File`s"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjfilerulesrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Refaster rules related to AssertJ assertions over `File`s"}
  description={"These rules simplify and improve the readability of tests by using `File`-specific\n AssertJ assertion methods instead of generic assertions.\n[Source](https://error-prone.picnic.tech/refasterrules/AssertJFileRules)."}
  fqName={"tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes"}
/>

<RecipeHeader
  displayName={"Refaster rules related to AssertJ assertions over `File`s"}
  description={"These rules simplify and improve the readability of tests by using `File`-specific\n AssertJ assertion methods instead of generic assertions.\n[Source](https://error-prone.picnic.tech/refasterrules/AssertJFileRules)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjfilerulesrecipes.md"}
/>

<RecipeList recipes={[{"name":"Refaster template `AssertJFileRules.AssertThatExists`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatexistsrecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatDoesNotExist`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatdoesnotexistrecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatIsFile`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisfilerecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatIsDirectory`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisdirectoryrecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatIsAbsolute`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisabsoluterecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatIsRelative`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisrelativerecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatIsReadable`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisreadablerecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatIsWritable`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatiswritablerecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatIsExecutable`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisexecutablerecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatHasFileName`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasfilenamerecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatHasParentFile`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasparentfilerecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatHasParentString`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasparentstringrecipe"},{"name":"Refaster template `AssertJFileRules.AssertThatHasNoParent`","href":"picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasnoparentrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes","displayName":"Refaster rules related to AssertJ assertions over `File`s","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

