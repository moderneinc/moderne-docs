---
title: "`new BigDecimal(double)` should not be used"
sidebar_label: "`new BigDecimal(double)` should not be used"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/bigdecimaldoubleconstructorrecipe" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"`new BigDecimal(double)` should not be used"}
  description={"Use of `new BigDecimal(double)` constructor can lead to loss of precision. Use `BigDecimal.valueOf(double)` instead.\nFor example writing `new BigDecimal(0.1)` does not create a `BigDecimal` which is exactly equal to `0.1`, but it is equal to `0.1000000000000000055511151231257827021181583404541015625`. This is because `0.1` cannot be represented exactly as a double (or, for that matter, as a binary fraction of any finite length). `BigDecimal.valueOf` avoids this by converting through a string representation, preserving the value you actually intended."}
  fqName={"org.openrewrite.staticanalysis.BigDecimalDoubleConstructorRecipe"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/BigDecimalDoubleConstructor.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S2111"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.BigDecimalDoubleConstructorRecipe"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.BigDecimalDoubleConstructorRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/bigdecimaldoubleconstructorrecipe.md"}
>

<RecipeHeader.Title>`new BigDecimal(double)` should not be used</RecipeHeader.Title>

<RecipeHeader.Description>Use of `new BigDecimal(double)` constructor can lead to loss of precision. Use `BigDecimal.valueOf(double)` instead. For example writing `new BigDecimal(0.1)` does not create a `BigDecimal` which is exactly equal to `0.1`, but it is equal to `0.1000000000000000055511151231257827021181583404541015625`. This is because `0.1` cannot be represented exactly as a double (or, for that matter, as a binary fraction of any finite length). `BigDecimal.valueOf` avoids this by converting through a string representation, preserving the value you actually intended.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.math.BigDecimal;\nclass Test {\n    void test(double d) {\n        BigDecimal bd = new BigDecimal(1.0);\n        BigDecimal bd2 = new BigDecimal(d);\n    }\n}\n","after":"import java.math.BigDecimal;\nclass Test {\n    void test(double d) {\n        BigDecimal bd = BigDecimal.valueOf(1.0);\n        BigDecimal bd2 = BigDecimal.valueOf(d);\n    }\n}\n","diff":"@@ -4,2 +4,2 @@\nclass Test {\n    void test(double d) {\n-       BigDecimal bd = new BigDecimal(1.0);\n-       BigDecimal bd2 = new BigDecimal(d);\n+       BigDecimal bd = BigDecimal.valueOf(1.0);\n+       BigDecimal bd2 = BigDecimal.valueOf(d);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.BigDecimalDoubleConstructorRecipe","displayName":"`new BigDecimal(double)` should not be used","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

