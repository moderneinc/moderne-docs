---
title: "Changes code to use Java 17's `instanceof` pattern matching"
sidebar_label: "Changes code to use Java 17's `instanceof` pattern matching"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/instanceofpatternmatch" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Changes code to use Java 17's `instanceof` pattern matching"}
  description={"Adds pattern variables to `instanceof` expressions wherever the same (side effect free) expression is referenced in a corresponding type cast expression within the flow scope of the `instanceof`. Currently, this recipe supports `if` statements and ternary operator expressions. Pattern matching for `instanceof` collapses the type check, cast, and variable declaration into a single expression, reducing boilerplate and eliminating the risk of an incorrect cast."}
  fqName={"org.openrewrite.staticanalysis.InstanceOfPatternMatch"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/InstanceOfPatternMatch.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S6201"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.InstanceOfPatternMatch"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.InstanceOfPatternMatch"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/instanceofpatternmatch.md"}
>

<RecipeHeader.Title>Changes code to use Java 17's `instanceof` pattern matching</RecipeHeader.Title>

<RecipeHeader.Description>Adds pattern variables to `instanceof` expressions wherever the same (side effect free) expression is referenced in a corresponding type cast expression within the flow scope of the `instanceof`. Currently, this recipe supports `if` statements and ternary operator expressions. Pattern matching for `instanceof` collapses the type check, cast, and variable declaration into a single expression, reducing boilerplate and eliminating the risk of an incorrect cast.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class LeftNode {\n    int bar() {\n        return 0;\n    }\n}\nclass RightNode {\n    int bar() {\n        return 1;\n    }\n}\n\nclass Foo {\n    void bar(Object o1, Object o2) {\n        if (o1 instanceof LeftNode && o2 instanceof RightNode) {\n          ((LeftNode)o1).bar();\n          ((RightNode)o2).bar();\n        }\n        else if (o1 instanceof RightNode && o2 instanceof LeftNode) {\n          ((RightNode)o1).bar();\n          ((LeftNode)o2).bar();\n        }\n    }\n}\n","after":"class LeftNode {\n    int bar() {\n        return 0;\n    }\n}\nclass RightNode {\n    int bar() {\n        return 1;\n    }\n}\n\nclass Foo {\n    void bar(Object o1, Object o2) {\n        if (o1 instanceof LeftNode node2 && o2 instanceof RightNode node3) {\n          node2.bar();\n          node3.bar();\n        }\n        else if (o1 instanceof RightNode node && o2 instanceof LeftNode node1) {\n          node.bar();\n          node1.bar();\n        }\n    }\n}\n","diff":"@@ -14,3 +14,3 @@\nclass Foo {\n    void bar(Object o1, Object o2) {\n-       if (o1 instanceof LeftNode && o2 instanceof RightNode) {\n-         ((LeftNode)o1).bar();\n-         ((RightNode)o2).bar();\n+       if (o1 instanceof LeftNode node2 && o2 instanceof RightNode node3) {\n+         node2.bar();\n+         node3.bar();\n        }\n@@ -18,3 +18,3 @@\n          ((RightNode)o2).bar();\n        }\n-       else if (o1 instanceof RightNode && o2 instanceof LeftNode) {\n-         ((RightNode)o1).bar();\n-         ((LeftNode)o2).bar();\n+       else if (o1 instanceof RightNode node && o2 instanceof LeftNode node1) {\n+         node.bar();\n+         node1.bar();\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.InstanceOfPatternMatch","displayName":"Changes code to use Java 17's `instanceof` pattern matching","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

