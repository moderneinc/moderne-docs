---
title: "Copy JSON value"
sidebar_label: "Copy JSON value"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/json/copyvalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Copy JSON value"}
  description={"Copies a JSON value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to create the new key if it does not exist."}
  fqName={"org.openrewrite.json.CopyValue"}
  languages={["JSON"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-json/src/main/java/org/openrewrite/json/CopyValue.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["JSON"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.json.CopyValue"}
  artifact={"org.openrewrite:rewrite-json"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.json.CopyValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/json/copyvalue.md"}
>

<RecipeHeader.Title>Copy JSON value</RecipeHeader.Title>

<RecipeHeader.Description>Copies a JSON value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to create the new key if it does not exist.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"sourceKeyPath","required":true,"description":"A [JSONPath](https://www.rfc-editor.org/rfc/rfc9535.html) expression to locate a JSON value to copy.","example":"$.source.kind"},{"type":"String","name":"sourceFilePath","required":false,"description":"The file path to the JSON file to copy the value from. If `null` then the value will be copied from any JSON file it appears within.","example":"src/main/resources/application.json"},{"type":"String","name":"destinationKeyPath","required":true,"description":"A [JSONPath](https://www.rfc-editor.org/rfc/rfc9535.html) expression to locate the *parent* JSON entry.","example":"'$.subjects.*' or '$.' or '$.x[1].y.*' etc."},{"type":"String","name":"destinationKey","required":true,"description":"The key to create.","example":"myKey"},{"type":"String","name":"destinationFilePath","required":false,"description":"The file path to the JSON file to copy the value to. If `null` then the value will be copied only into the same file it was found in.","example":"src/main/resources/application.json"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sourceKeyPath","value":"$.source"},{"parameter":"sourceFilePath","value":"null"},{"parameter":"destinationKeyPath","value":"$"},{"parameter":"destinationKey","value":"copiedValue"},{"parameter":"destinationFilePath","value":"null"}],"variants":[{"language":"json","before":"{\n  \"source\": \"value\"\n}\n","after":"{\n  \"source\": \"value\",\n  \"copiedValue\": \"value\"\n}\n","diff":"--- a.json\n+++ a.json\n@@ -2,1 +2,2 @@\n{\n- \"source\": \"value\"\n+ \"source\": \"value\",\n+ \"copiedValue\": \"value\"\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.json.CopyValue","displayName":"Copy JSON value","groupId":"org.openrewrite","artifactId":"rewrite-json","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JSON","requiresConfiguration":true,"cliOptions":" --recipe-option \"sourceKeyPath=$.source.kind\" --recipe-option \"sourceFilePath=src/main/resources/application.json\" --recipe-option \"destinationKeyPath='$.subjects.*' or '$.' or '$.x[1].y.*' etc.\" --recipe-option \"destinationKey=myKey\" --recipe-option \"destinationFilePath=src/main/resources/application.json\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

