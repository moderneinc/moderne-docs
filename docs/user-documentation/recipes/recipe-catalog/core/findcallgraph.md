---
title: "Find call graph"
sidebar_label: "Find call graph"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/core/findcallgraph" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find call graph"}
  description={"Produces a data table where each row represents a method call."}
  fqName={"org.openrewrite.FindCallGraph"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-all/blob/main/src/main/java/org/openrewrite/FindCallGraph.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.FindCallGraph"}
  artifact={"org.openrewrite.recipe:rewrite-all"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.FindCallGraph"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/core/findcallgraph.md"}
>

<RecipeHeader.Title>Find call graph</RecipeHeader.Title>

<RecipeHeader.Description>Produces a data table where each row represents a method call.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"boolean","name":"includeStdLib","required":false,"description":"When enabled calls to methods in packages beginning with \"java\", \"groovy\", and \"kotlin\" will be included in the report. By default these are omitted."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"includeStdLib","value":"true"}],"variants":[{"language":"java","before":"class A {\n    String s = foo();\n}\n","after":"class A {\n    String s = /*~~(Method type not found)~~>*/foo();\n}\n","diff":"@@ -2,1 +2,1 @@\nclass A {\n-   String s = foo();\n+   String s = /*~~(Method type not found)~~>*/foo();\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.FindCallGraph","displayName":"Find call graph","groupId":"org.openrewrite.recipe","artifactId":"rewrite-all","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ALL","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.CallGraph","displayName":"Method call graph","description":"Records method callers and the methods they invoke.","columns":[{"name":"From source set","description":"The source set from which the action is issued."},{"name":"From class","description":"The fully qualified name of the class from which the action is issued."},{"name":"From name","description":"The name of the method or scope from which the action is issued."},{"name":"From arguments","description":"The argument types, if any, to the method or scope from which the action is issued. Expressed as a comma-separated list"},{"name":"From type","description":"The type of resource the action is being issued from."},{"name":"Action","description":"The type of access being made to the resource."},{"name":"To class","description":"The fully-qualified name of the class containing the resource being accessed."},{"name":"To name","description":"The name of the resource being accessed."},{"name":"To arguments","description":"The argument types, if any, to the resource being accessed. Expressed as a comma-separated list"},{"name":"To type","description":"The type of resource being accessed."},{"name":"Return type","description":"The return type of the method."}]},{"name":"org.openrewrite.table.FactoryEdges","displayName":"Factory-method construction edges","description":"Construction edges where the caller's declared return type is assignable from the constructed class (the caller semantically produces an instance of the target type).","columns":[{"name":"From class","description":"Fully-qualified name of the class containing the factory method."},{"name":"From method","description":"Simple name of the factory method."},{"name":"To class","description":"Fully-qualified name of the class being constructed."}]},{"name":"org.openrewrite.table.LowConfidenceFiles","displayName":"Files with incomplete call-graph extraction","description":"Source files where call-graph construction skipped an edge because the underlying LST had a null type. Used as a confidence signal during test selection: any row for a file means that file's outbound edges may be undercounted.","columns":[{"name":"Source path","description":"Path of the source file as recorded on the LST."},{"name":"Reason","description":"Short label for the kind of type-attribution gap encountered (e.g. \"call.declaringType\", \"call.returnType\", \"reference.scope\")."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

