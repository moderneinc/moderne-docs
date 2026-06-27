---
title: "Find source files with `ParseExceptionResult` markers"
sidebar_label: "Find source files with `ParseExceptionResult` markers"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/core/findparsefailures" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find source files with `ParseExceptionResult` markers"}
  description={"This recipe explores parse failures after an LST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems."}
  fqName={"org.openrewrite.FindParseFailures"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/FindParseFailures.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.FindParseFailures"}
  artifact={"org.openrewrite:rewrite-core"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.FindParseFailures"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/core/findparsefailures.md"}
>

<RecipeHeader.Title>Find source files with `ParseExceptionResult` markers</RecipeHeader.Title>

<RecipeHeader.Description>This recipe explores parse failures after an LST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Integer","name":"maxSnippetLength","required":false,"description":"When the failure occurs on a granular tree element, its source code will be included as a column in the data table up to this maximum snippet length."},{"type":"String","name":"parserType","required":false,"description":"Only display failures from parsers with this simple name.","example":"YamlParser"},{"type":"String","name":"stackTrace","required":false,"description":"Only mark stack traces with a message containing this text.","example":"RuntimeException"},{"type":"String","name":"createdAfter","required":false,"description":"Only report on source files that were created after this date.","example":"2025-01-01"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.FindParseFailures","displayName":"Find source files with `ParseExceptionResult` markers","groupId":"org.openrewrite","artifactId":"rewrite-core","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_CORE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.ParseFailures","displayName":"Parser failures","description":"A list of files that failed to parse along with stack traces of their failures.","columns":[{"name":"Parser","description":"The parser implementation that failed."},{"name":"Source path","description":"The file that failed to parse."},{"name":"Exception type","description":"The class name of the exception that produce the parse failure."},{"name":"Tree type","description":"The type of the tree element that was being parsed when the failure occurred. This can refer either to the intended target OpenRewrite Tree type or a parser or compiler internal tree type that we couldn't determine how to map."},{"name":"Snippet","description":"The code snippet that the failure occurred on. Omitted when the parser fails on the whole file."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

