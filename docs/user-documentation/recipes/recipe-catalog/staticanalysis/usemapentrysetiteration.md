---
title: "Iterate a `Map`'s `entrySet()` rather than its `keySet()`"
sidebar_label: "Iterate a `Map`'s `entrySet()` rather than its `keySet()`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/usemapentrysetiteration" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Iterate a `Map`'s `entrySet()` rather than its `keySet()`"}
  description={"A loop over `map.keySet()` that calls `map.get(key)` hashes and probes the map again for every element, which on a `TreeMap` costs an extra `O(log n)` lookup per iteration. Iterating `map.entrySet()` instead hands the loop both the key and the value. The loop is only rewritten when:\n - The map is a simple reference that is neither modified nor reassigned inside the loop.\n - `get` is called only with the loop variable.\n - The loop variable is neither reassigned nor captured by a lambda or anonymous class.\n\nEvery candidate loop, converted or not, is recorded in a data table along with the reason it was left alone."}
  fqName={"org.openrewrite.staticanalysis.UseMapEntrySetIteration"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UseMapEntrySetIteration.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S2864"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.UseMapEntrySetIteration"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UseMapEntrySetIteration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/usemapentrysetiteration.md"}
>

<RecipeHeader.Title>Iterate a `Map`'s `entrySet()` rather than its `keySet()`</RecipeHeader.Title>

<RecipeHeader.Description>

A loop over `map.keySet()` that calls `map.get(key)` hashes and probes the map again for every element, which on a `TreeMap` costs an extra `O(log n)` lookup per iteration. Iterating `map.entrySet()` instead hands the loop both the key and the value. The loop is only rewritten when:
 - The map is a simple reference that is neither modified nor reassigned inside the loop.
 - `get` is called only with the loop variable.
 - The loop variable is neither reassigned nor captured by a lambda or anonymous class.

Every candidate loop, converted or not, is recorded in a data table along with the reason it was left alone.

</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.Map;\n\nclass Test {\n    void test(Map<String, Integer> map) {\n        for (String key : map.keySet()) {\n            Integer w = map.get(key);\n            System.out.println(key + \"=\" + w);\n        }\n    }\n}\n","after":"import java.util.Map;\n\nclass Test {\n    void test(Map<String, Integer> map) {\n        for (Map.Entry<String, Integer> entry : map.entrySet()) {\n            Integer w = entry.getValue();\n            System.out.println(entry.getKey() + \"=\" + w);\n        }\n    }\n}\n","diff":"@@ -5,3 +5,3 @@\nclass Test {\n    void test(Map<String, Integer> map) {\n-       for (String key : map.keySet()) {\n-           Integer w = map.get(key);\n-           System.out.println(key + \"=\" + w);\n+       for (Map.Entry<String, Integer> entry : map.entrySet()) {\n+           Integer w = entry.getValue();\n+           System.out.println(entry.getKey() + \"=\" + w);\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.UseMapEntrySetIteration","displayName":"Iterate a `Map`'s `entrySet()` rather than its `keySet()`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.staticanalysis.table.MapKeySetIterations","displayName":"Map `keySet()` iterations","description":"Loops that iterate a map's `keySet()` and look the value up again with `get(key)`, and whether they were converted to `entrySet()` iteration.","columns":[{"name":"Source path","description":"The path to the source file containing the loop."},{"name":"Class","description":"The fully qualified name of the class containing the loop."},{"name":"Map expression","description":"The expression the `keySet()` and `get(key)` calls are made on."},{"name":"Updated","description":"Whether the loop was rewritten to iterate `entrySet()`."},{"name":"Reason","description":"Why the loop was left unchanged. Empty when the loop was updated."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

