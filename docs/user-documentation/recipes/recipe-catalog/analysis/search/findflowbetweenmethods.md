---
title: "Finds flow between two methods"
sidebar_label: "Finds flow between two methods"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/analysis/search/findflowbetweenmethods" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Finds flow between two methods"}
  description={"Takes two patterns for the start/end methods to find flow between."}
  fqName={"org.openrewrite.analysis.search.FindFlowBetweenMethods"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-analysis/blob/main/src/main/java/org/openrewrite/analysis/search/FindFlowBetweenMethods.java"}
/>

<RecipeHeader
  displayName={"Finds flow between two methods"}
  description={"Takes two patterns for the start/end methods to find flow between."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.analysis.search.FindFlowBetweenMethods"}
  artifact={"org.openrewrite.meta:rewrite-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.analysis.search.FindFlowBetweenMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/analysis/search/findflowbetweenmethods.md"}
/>

<OptionsTable options={[{"type":"String","name":"startMethodPattern","required":true,"description":"A method pattern that is used to find matching the start point's method invocations.","example":"java.util.List add(..)"},{"type":"Boolean","name":"startMatchOverrides","required":false,"description":"When enabled, find methods that are overrides of the method pattern."},{"type":"String","name":"endMethodPattern","required":true,"description":"A method pattern that is used to find matching the end point's method invocations.","example":"java.util.List add(..)"},{"type":"Boolean","name":"endMatchOverrides","required":false,"description":"When enabled, find methods that are overrides of the method pattern."},{"type":"String","name":"target","required":true,"description":"The part of the method flow should traverse to"},{"type":"String","name":"flow","required":true,"description":"When enabled, show the data or taint flow of the method invocation."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"startMethodPattern","value":"java.util.LinkedList <constructor>()"},{"parameter":"startMatchOverrides","value":"true"},{"parameter":"endMethodPattern","value":"java.util.LinkedList remove()"},{"parameter":"endMatchOverrides","value":"true"},{"parameter":"target","value":"Select"},{"parameter":"flow","value":"Taint"}],"variants":[{"language":"java","before":"import java.util.LinkedList;\nclass Test {\n    void test() {\n        LinkedList<Integer> l = new LinkedList<>();\n        l.add(5);\n        System.out.println(l);\n        l.remove();\n    }\n}\n","after":"import java.util.LinkedList;\nclass Test {\n    void test() {\n        LinkedList<Integer> l = /*~~(source)~~>*/new LinkedList<>();\n        /*~~>*/l.add(5);\n        System.out.println(/*~~>*/l);\n        /*~~(sink)~~>*/l.remove();\n    }\n}\n","diff":"@@ -4,4 +4,4 @@\nclass Test {\n    void test() {\n-       LinkedList<Integer> l = new LinkedList<>();\n-       l.add(5);\n-       System.out.println(l);\n-       l.remove();\n+       LinkedList<Integer> l = /*~~(source)~~>*/new LinkedList<>();\n+       /*~~>*/l.add(5);\n+       System.out.println(/*~~>*/l);\n+       /*~~(sink)~~>*/l.remove();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.analysis.search.FindFlowBetweenMethods","displayName":"Finds flow between two methods","groupId":"org.openrewrite.meta","artifactId":"rewrite-analysis","versionKey":"VERSION_ORG_OPENREWRITE_META_REWRITE_ANALYSIS","requiresConfiguration":true,"cliOptions":" --recipe-option \"startMethodPattern=java.util.List add(..)\" --recipe-option \"endMethodPattern=java.util.List add(..)\" --recipe-option \"target=null\" --recipe-option \"flow=null\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

