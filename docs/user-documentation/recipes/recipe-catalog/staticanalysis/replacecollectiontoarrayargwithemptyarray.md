---
title: "Use Empty Array for `Collection.toArray()`"
sidebar_label: "Use Empty Array for `Collection.toArray()`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/replacecollectiontoarrayargwithemptyarray" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Empty Array for `Collection.toArray()`"}
  description={"Changes new array creation with `Collection#toArray(T[])` to use an empty array argument, which is better for performance.\n\nAccording to the `Collection#toArray(T[])` documentation:\n\n> If the collection fits in the specified array, it is returned therein.\n\nHowever, although it's not intuitive, allocating a right-sized array ahead of time to pass to the API appears to be [generally worse for performance](https://shipilev.net/blog/2016/arrays-wisdom-ancients/#_conclusion) according to benchmarking and JVM developers due to a number of implementation details in both Java and the virtual machine.\n\nH2 achieved significant performance gains by [switching to empty arrays instead pre-sized ones](https://github.com/h2database/h2database/issues/311)."}
  fqName={"org.openrewrite.staticanalysis.ReplaceCollectionToArrayArgWithEmptyArray"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReplaceCollectionToArrayArgWithEmptyArray.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.ReplaceCollectionToArrayArgWithEmptyArray"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceCollectionToArrayArgWithEmptyArray"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/replacecollectiontoarrayargwithemptyarray.md"}
>

<RecipeHeader.Title>Use Empty Array for `Collection.toArray()`</RecipeHeader.Title>

<RecipeHeader.Description>Changes new array creation with `Collection#toArray(T[])` to use an empty array argument, which is better for performance.  According to the `Collection#toArray(T[])` documentation:  > If the collection fits in the specified array, it is returned therein.  However, although it's not intuitive, allocating a right-sized array ahead of time to pass to the API appears to be [generally worse for performance](https://shipilev.net/blog/2016/arrays-wisdom-ancients/#_conclusion) according to benchmarking and JVM developers due to a number of implementation details in both Java and the virtual machine.  H2 achieved significant performance gains by [switching to empty arrays instead pre-sized ones](https://github.com/h2database/h2database/issues/311).</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.Collection;\n\nclass A {\n    void test(Collection<Integer> args){\n        Integer [] array = args.toArray(new Integer[args.size()]);\n    }\n}\n","after":"import java.util.Collection;\n\nclass A {\n    void test(Collection<Integer> args){\n        Integer [] array = args.toArray(new Integer[0]);\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass A {\n    void test(Collection<Integer> args){\n-       Integer [] array = args.toArray(new Integer[args.size()]);\n+       Integer [] array = args.toArray(new Integer[0]);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.ReplaceCollectionToArrayArgWithEmptyArray","displayName":"Use Empty Array for `Collection.toArray()`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

