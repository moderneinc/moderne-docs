---
title: "Simplify ternary expressions"
sidebar_label: "Simplify ternary expressions"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/simplifyternaryrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify ternary expressions"}
  description={"Simplifies various types of ternary expressions to improve code readability. Ternaries that simply select between `true` and `false` are redundant wrappers around the condition itself and add unnecessary complexity."}
  fqName={"org.openrewrite.staticanalysis.SimplifyTernaryRecipes"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/SimplifyTernary.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1125"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.SimplifyTernaryRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.SimplifyTernaryRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/simplifyternaryrecipes.md"}
>

<RecipeHeader.Title>Simplify ternary expressions</RecipeHeader.Title>

<RecipeHeader.Description>Simplifies various types of ternary expressions to improve code readability. Ternaries that simply select between `true` and `false` are redundant wrappers around the condition itself and add unnecessary complexity.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace `booleanExpression ? true : false` with `booleanExpression`","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/simplifyternaryrecipes$simplifyternarytruefalserecipe/"},{"name":"Replace `booleanExpression ? false : true` with `!booleanExpression`","href":"/user-documentation/recipes/recipe-catalog/staticanalysis/simplifyternaryrecipes$simplifyternaryfalsetruerecipe/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    boolean trueCondition1 = true ? true : false;\n    boolean trueCondition2 = false ? false : true;\n    boolean trueCondition3 = booleanExpression() ? true : false;\n    boolean trueCondition4 = trueCondition1 && trueCondition2 ? true : false;\n    boolean trueCondition5 = !true ? false : true;\n    boolean trueCondition6 = !false ? true : false;\n\n    boolean falseCondition1 = true ? false : true;\n    boolean falseCondition2 = !false ? false : true;\n    boolean falseCondition3 = booleanExpression() ? false : true;\n    boolean falseCondition4 = trueCondition1 && trueCondition2 ? false : true;\n    boolean falseCondition5 = !false ? false : true;\n    boolean falseCondition6 = !true ? true : false;\n\n    boolean binary1 = booleanExpression() && booleanExpression() ? true : false;\n    boolean binary2 = booleanExpression() && booleanExpression() ? false : true;\n    boolean binary3 = booleanExpression() || booleanExpression() ? true : false;\n    boolean binary4 = booleanExpression() || booleanExpression() ? false : true;\n\n    boolean booleanExpression() {\n      return true;\n    }\n}\n","after":"class Test {\n    boolean trueCondition1 = true;\n    boolean trueCondition2 = true;\n    boolean trueCondition3 = booleanExpression();\n    boolean trueCondition4 = trueCondition1 && trueCondition2;\n    boolean trueCondition5 = true;\n    boolean trueCondition6 = true;\n\n    boolean falseCondition1 = false;\n    boolean falseCondition2 = false;\n    boolean falseCondition3 = !booleanExpression();\n    boolean falseCondition4 = !(trueCondition1 && trueCondition2);\n    boolean falseCondition5 = false;\n    boolean falseCondition6 = false;\n\n    boolean binary1 = booleanExpression() && booleanExpression();\n    boolean binary2 = !(booleanExpression() && booleanExpression());\n    boolean binary3 = booleanExpression() || booleanExpression();\n    boolean binary4 = !(booleanExpression() || booleanExpression());\n\n    boolean booleanExpression() {\n      return true;\n    }\n}\n","diff":"@@ -2,6 +2,6 @@\nclass Test {\n-   boolean trueCondition1 = true ? true : false;\n-   boolean trueCondition2 = false ? false : true;\n-   boolean trueCondition3 = booleanExpression() ? true : false;\n-   boolean trueCondition4 = trueCondition1 && trueCondition2 ? true : false;\n-   boolean trueCondition5 = !true ? false : true;\n-   boolean trueCondition6 = !false ? true : false;\n+   boolean trueCondition1 = true;\n+   boolean trueCondition2 = true;\n+   boolean trueCondition3 = booleanExpression();\n+   boolean trueCondition4 = trueCondition1 && trueCondition2;\n+   boolean trueCondition5 = true;\n+   boolean trueCondition6 = true;\n\n@@ -9,6 +9,6 @@\n    boolean trueCondition6 = !false ? true : false;\n\n-   boolean falseCondition1 = true ? false : true;\n-   boolean falseCondition2 = !false ? false : true;\n-   boolean falseCondition3 = booleanExpression() ? false : true;\n-   boolean falseCondition4 = trueCondition1 && trueCondition2 ? false : true;\n-   boolean falseCondition5 = !false ? false : true;\n-   boolean falseCondition6 = !true ? true : false;\n+   boolean falseCondition1 = false;\n+   boolean falseCondition2 = false;\n+   boolean falseCondition3 = !booleanExpression();\n+   boolean falseCondition4 = !(trueCondition1 && trueCondition2);\n+   boolean falseCondition5 = false;\n+   boolean falseCondition6 = false;\n\n@@ -16,4 +16,4 @@\n    boolean falseCondition6 = !true ? true : false;\n\n-   boolean binary1 = booleanExpression() && booleanExpression() ? true : false;\n-   boolean binary2 = booleanExpression() && booleanExpression() ? false : true;\n-   boolean binary3 = booleanExpression() || booleanExpression() ? true : false;\n-   boolean binary4 = booleanExpression() || booleanExpression() ? false : true;\n+   boolean binary1 = booleanExpression() && booleanExpression();\n+   boolean binary2 = !(booleanExpression() && booleanExpression());\n+   boolean binary3 = booleanExpression() || booleanExpression();\n+   boolean binary4 = !(booleanExpression() || booleanExpression());\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.SimplifyTernaryRecipes","displayName":"Simplify ternary expressions","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

