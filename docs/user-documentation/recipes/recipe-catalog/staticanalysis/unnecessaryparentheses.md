---
title: "Remove unnecessary parentheses"
sidebar_label: "Remove unnecessary parentheses"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/unnecessaryparentheses" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove unnecessary parentheses"}
  description={"Removes unnecessary parentheses from code where extra parentheses pairs are redundant. Redundant parentheses add visual noise and can obscure the actual structure of an expression, making code harder to read at a glance."}
  fqName={"org.openrewrite.staticanalysis.UnnecessaryParentheses"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UnnecessaryParentheses.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1110","RSPEC-S1611"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.UnnecessaryParentheses"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UnnecessaryParentheses"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/unnecessaryparentheses.md"}
>

<RecipeHeader.Title>Remove unnecessary parentheses</RecipeHeader.Title>

<RecipeHeader.Description>Removes unnecessary parentheses from code where extra parentheses pairs are redundant. Redundant parentheses add visual noise and can obscure the actual structure of an expression, making code harder to read at a glance.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.*;\n\nclass Test {\n    int square(int a, int b) {\n        int square = (a * b);\n\n        int sumOfSquares = 0;\n        for (int i = (0); i < 10; i++) {\n            sumOfSquares += (square(i * i, i));\n        }\n        double num = (10.0);\n\n        List<String> list = Arrays.asList(\"a1\", \"b1\", \"c1\");\n        list.stream()\n                .filter((s) -> s.startsWith(\"c\"))\n                .forEach(System.out::println);\n\n        return (square);\n    }\n}\n","after":"import java.util.*;\n\nclass Test {\n    int square(int a, int b) {\n        int square = a * b;\n\n        int sumOfSquares = 0;\n        for (int i = 0; i < 10; i++) {\n            sumOfSquares += square(i * i, i);\n        }\n        double num = 10.0;\n\n        List<String> list = Arrays.asList(\"a1\", \"b1\", \"c1\");\n        list.stream()\n                .filter(s -> s.startsWith(\"c\"))\n                .forEach(System.out::println);\n\n        return square;\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass Test {\n    int square(int a, int b) {\n-       int square = (a * b);\n+       int square = a * b;\n\n@@ -8,2 +8,2 @@\n\n        int sumOfSquares = 0;\n-       for (int i = (0); i < 10; i++) {\n-           sumOfSquares += (square(i * i, i));\n+       for (int i = 0; i < 10; i++) {\n+           sumOfSquares += square(i * i, i);\n        }\n@@ -11,1 +11,1 @@\n            sumOfSquares += (square(i * i, i));\n        }\n-       double num = (10.0);\n+       double num = 10.0;\n\n@@ -15,1 +15,1 @@\n        List<String> list = Arrays.asList(\"a1\", \"b1\", \"c1\");\n        list.stream()\n-               .filter((s) -> s.startsWith(\"c\"))\n+               .filter(s -> s.startsWith(\"c\"))\n                .forEach(System.out::println);\n@@ -18,1 +18,1 @@\n                .forEach(System.out::println);\n\n-       return (square);\n+       return square;\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.UnnecessaryParentheses","displayName":"Remove unnecessary parentheses","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

