---
title: "Create Java class"
sidebar_label: "Create Java class"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/createemptyjavaclass" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Create Java class"}
  description={"Create a new, empty Java class."}
  fqName={"org.openrewrite.java.CreateEmptyJavaClass"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/CreateEmptyJavaClass.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.CreateEmptyJavaClass"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.CreateEmptyJavaClass"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/createemptyjavaclass.md"}
>

<RecipeHeader.Title>Create Java class</RecipeHeader.Title>

<RecipeHeader.Description>Create a new, empty Java class.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"sourceRoot","required":true,"description":"The source root of the new class file.","example":"src/main/java"},{"type":"String","name":"packageName","required":true,"description":"The package of the new class.","example":"org.openrewrite.example"},{"type":"String","name":"modifier","required":true,"description":"The class modifier.","example":"public"},{"type":"String","name":"className","required":true,"description":"File path of new file.","example":"ExampleClass"},{"type":"Boolean","name":"overwriteExisting","required":false,"description":"If there is an existing file, should it be overwritten."},{"type":"String","name":"relativePath","required":false,"description":"Directory path of new class.","example":"foo/bar"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sourceRoot","value":"src/main/java"},{"parameter":"packageName","value":"org.openrewrite.example"},{"parameter":"modifier","value":"public"},{"parameter":"className","value":"ExampleClass"},{"parameter":"overwriteExisting","value":"null"},{"parameter":"relativePath","value":"foo/bar/"}],"variants":[{"language":"java","before":"","after":"package org.openrewrite.example;\n\npublic class ExampleClass {\n}\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.CreateEmptyJavaClass","displayName":"Create Java class","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"sourceRoot=src/main/java\" --recipe-option \"packageName=org.openrewrite.example\" --recipe-option \"modifier=public\" --recipe-option \"className=ExampleClass\" --recipe-option \"relativePath=foo/bar\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

