---
title: "Refaster rules related to AssertJ assertions over `Path`s"
sidebar_label: "Refaster rules related to AssertJ assertions over `Path`s"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjpathrulesrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Refaster rules related to AssertJ assertions over `Path`s"}
  description={"These rules simplify and improve the readability of tests by using `Path`-specific\n AssertJ assertion methods instead of generic assertions.\n[Source](https://error-prone.picnic.tech/refasterrules/AssertJPathRules)."}
  fqName={"tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes"}
/>

<RecipeHeader
  displayName={"Refaster rules related to AssertJ assertions over `Path`s"}
  description={"These rules simplify and improve the readability of tests by using `Path`-specific\n AssertJ assertion methods instead of generic assertions.\n[Source](https://error-prone.picnic.tech/refasterrules/AssertJPathRules)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjpathrulesrecipes.md"}
/>

<RecipeList recipes={[{"name":"Refaster template `AssertJPathRules.AssertThatExists`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatexistsrecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatDoesNotExist`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatdoesnotexistrecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsRegularFile`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisregularfilerecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsDirectory`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisdirectoryrecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsSymbolicLink`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatissymboliclinkrecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsAbsolute`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisabsoluterecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsRelative`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisrelativerecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsReadable`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisreadablerecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsWritable`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatiswritablerecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatIsExecutable`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisexecutablerecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatHasFileName`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthathasfilenamerecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatHasParentRaw`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthathasparentrawrecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatHasNoParent`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthathasnoparentrecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatStartsWithRaw`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatstartswithrawrecipe"},{"name":"Refaster template `AssertJPathRules.AssertThatEndsWithRaw`","href":"picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatendswithrawrecipe"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes","displayName":"Refaster rules related to AssertJ assertions over `Path`s","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

