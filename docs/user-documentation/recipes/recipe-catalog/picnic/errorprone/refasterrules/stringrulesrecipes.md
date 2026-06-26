---
title: "`StringRules` Refaster recipes"
sidebar_label: "`StringRules` Refaster recipes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/stringrulesrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"`StringRules` Refaster recipes"}
  description={"Refaster rules related to expressions dealing with `String`s.\n[Source](https://error-prone.picnic.tech/refasterrules/StringRules)."}
  fqName={"tech.picnic.errorprone.refasterrules.StringRulesRecipes"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.StringRulesRecipes"}
/>

<RecipeHeader
  displayName={"`StringRules` Refaster recipes"}
  description={"Refaster rules related to expressions dealing with `String`s.\n[Source](https://error-prone.picnic.tech/refasterrules/StringRules)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"tech.picnic.errorprone.refasterrules.StringRulesRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.StringRulesRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/stringrulesrecipes.md"}
/>

<RecipeList recipes={[{"name":"Refaster template `StringRules.EmptyString`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$emptystringrecipe"},{"name":"Refaster template `StringRules.StringIdentity`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringidentityrecipe"},{"name":"Refaster template `StringRules.StringIsEmpty`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptyrecipe"},{"name":"Refaster template `StringRules.StringIsEmptyPredicate`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptypredicaterecipe"},{"name":"Refaster template `StringRules.StringIsNotEmptyPredicate`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringisnotemptypredicaterecipe"},{"name":"Refaster template `StringRules.StringIsNullOrEmpty`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringisnulloremptyrecipe"},{"name":"Refaster template `StringRules.StringIsBlank`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringisblankrecipe"},{"name":"Refaster template `StringRules.OptionalNonEmptyString`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$optionalnonemptystringrecipe"},{"name":"Refaster template `StringRules.FilterEmptyString`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$filteremptystringrecipe"},{"name":"Refaster template `StringRules.JoinStrings`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$joinstringsrecipe"},{"name":"Refaster template `StringRules.StringJoinDelimiterVarargs`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringjoindelimitervarargsrecipe"},{"name":"Refaster template `StringRules.StringValueOf`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofrecipe"},{"name":"Refaster template `StringRules.NewStringFromCharArraySubSequence`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$newstringfromchararraysubsequencerecipe"},{"name":"Refaster template `StringRules.NewStringFromCharArray`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$newstringfromchararrayrecipe"},{"name":"Refaster template `StringRules.StringValueOfMethodReference`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofmethodreferencerecipe"},{"name":"Refaster template `StringRules.SubstringRemainder`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$substringremainderrecipe"},{"name":"Refaster template `StringRules.Utf8EncodedLength`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$utf8encodedlengthrecipe"},{"name":"Refaster template `StringRules.StringIndexOfCharFromIndex`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofcharfromindexrecipe"},{"name":"Refaster template `StringRules.StringIndexOfCharBetweenIndices`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofcharbetweenindicesrecipe"},{"name":"Refaster template `StringRules.StringIndexOfStringFromIndex`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofstringfromindexrecipe"},{"name":"Refaster template `StringRules.StringIndexOfStringBetweenIndices`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofstringbetweenindicesrecipe"},{"name":"Refaster template `StringRules.StringLastIndexOfChar`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofcharrecipe"},{"name":"Refaster template `StringRules.StringLastIndexOfString`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofstringrecipe"},{"name":"Refaster template `StringRules.StringLastIndexOfCharWithIndex`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofcharwithindexrecipe"},{"name":"Refaster template `StringRules.StringLastIndexOfStringWithIndex`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofstringwithindexrecipe"},{"name":"Refaster template `StringRules.StringStartsWith`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringstartswithrecipe"},{"name":"Refaster template `StringRules.StringFormatted`","href":"picnic/errorprone/refasterrules/stringrulesrecipes$stringformattedrecipe"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.Objects;\nclass Test {\n  String test(Object object) {\n    return Objects.toString(object);\n  }\n}\n","after":"class Test {\n  String test(Object object) {\n    return String.valueOf(object);\n  }\n}\n","diff":"@@ -1,1 +1,0 @@\n-import java.util.Objects;\nclass Test {\n@@ -4,1 +3,1 @@\nclass Test {\n  String test(Object object) {\n-   return Objects.toString(object);\n+   return String.valueOf(object);\n  }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"tech.picnic.errorprone.refasterrules.StringRulesRecipes","displayName":"`StringRules` Refaster recipes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

