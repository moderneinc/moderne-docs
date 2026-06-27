---
title: "`AssertJStringRules` Refaster recipes"
sidebar_label: "`AssertJStringRules` Refaster recipes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/assertjstringrulesrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"`AssertJStringRules` Refaster recipes"}
  description={"Refaster rules related to AssertJ assertions over `String`s.\n[Source](https://error-prone.picnic.tech/refasterrules/AssertJStringRules)."}
  fqName={"tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes.md"}
>

<RecipeHeader.Title>`AssertJStringRules` Refaster recipes</RecipeHeader.Title>

<RecipeHeader.Description>Refaster rules related to AssertJ assertions over `String`s. [Source](https://error-prone.picnic.tech/refasterrules/AssertJStringRules).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Refaster template `AssertJStringRules.AbstractStringAssertStringIsEmpty`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$abstractstringassertstringisemptyrecipe/"},{"name":"Refaster template `AssertJStringRules.AbstractStringAssertStringIsNotEmpty`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$abstractstringassertstringisnotemptyrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatStringStartsWith`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringstartswithrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatStringDoesNotStartWith`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringdoesnotstartwithrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatStringEndsWith`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringendswithrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatStringDoesNotEndWith`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringdoesnotendwithrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatStringContains`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringcontainsrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatStringDoesNotContain`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringdoesnotcontainrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatIsEqualToIgnoringCase`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisequaltoignoringcaserecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatIsNotEqualToIgnoringCase`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisnotequaltoignoringcaserecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatIsBlank`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisblankrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatIsNotBlank`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisnotblankrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatMatches`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatmatchesrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatDoesNotMatch`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatdoesnotmatchrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatPathContent`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatpathcontentrecipe/"},{"name":"Refaster template `AssertJStringRules.AssertThatPathContentUtf8`","href":"/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatpathcontentutf8recipe/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import static org.assertj.core.api.Assertions.assertThat;\n\nclass Test {\n    void test(String actual) {\n        assertThat(actual).isEqualTo(\"\");\n    }\n}\n","after":"import static org.assertj.core.api.Assertions.assertThat;\n\nclass Test {\n    void test(String actual) {\n        assertThat(actual).isEmpty();\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass Test {\n    void test(String actual) {\n-       assertThat(actual).isEqualTo(\"\");\n+       assertThat(actual).isEmpty();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes","displayName":"`AssertJStringRules` Refaster recipes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

