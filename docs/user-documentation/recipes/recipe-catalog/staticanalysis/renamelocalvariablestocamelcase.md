---
title: "Reformat local variable names to camelCase"
sidebar_label: "Reformat local variable names to camelCase"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/renamelocalvariablestocamelcase" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Reformat local variable names to camelCase"}
  description={"Reformat local variable and method parameter names to camelCase to comply with Java naming convention. The recipe will not rename variables declared in for loop controls or catches with a single character. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed (unless the name starts with one). If a special character is removed the next valid alphanumeric will be capitalized. Currently, does not support renaming members of classes. The recipe will not rename a variable if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. Consistent naming conventions improve readability and reduce friction when navigating unfamiliar code."}
  fqName={"org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameLocalVariablesToCamelCase.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S117"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/renamelocalvariablestocamelcase.md"}
>

<RecipeHeader.Title>Reformat local variable names to camelCase</RecipeHeader.Title>

<RecipeHeader.Description>Reformat local variable and method parameter names to camelCase to comply with Java naming convention. The recipe will not rename variables declared in for loop controls or catches with a single character. The first character is set to lower case and existing capital letters are preserved. Special characters that are allowed in java field names `$` and `_` are removed (unless the name starts with one). If a special character is removed the next valid alphanumeric will be capitalized. Currently, does not support renaming members of classes. The recipe will not rename a variable if the result already exists in the class, conflicts with a java reserved keyword, or the result is blank. Consistent naming conventions improve readability and reduce friction when navigating unfamiliar code.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"kotlin","before":"fun foo() {\n    var EMPTY_METAS = HashMap<String, Any>()\n    EMPTY_METAS.isEmpty()\n}\n","after":"fun foo() {\n    var emptyMetas = HashMap<String, Any>()\n    emptyMetas.isEmpty()\n}\n","diff":"@@ -2,2 +2,2 @@\nfun foo() {\n-   var EMPTY_METAS = HashMap<String, Any>()\n-   EMPTY_METAS.isEmpty()\n+   var emptyMetas = HashMap<String, Any>()\n+   emptyMetas.isEmpty()\n}\n","newFile":false}]},{"variants":[{"language":"java","before":"class Test {\n    void test() {\n        String ID;\n    }\n}\n","after":"class Test {\n    void test() {\n        String id;\n    }\n}\n","diff":"@@ -3,1 +3,1 @@\nclass Test {\n    void test() {\n-       String ID;\n+       String id;\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.RenameLocalVariablesToCamelCase","displayName":"Reformat local variable names to camelCase","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

