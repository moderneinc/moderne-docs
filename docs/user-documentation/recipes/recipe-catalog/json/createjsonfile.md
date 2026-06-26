---
title: "Create JSON file"
sidebar_label: "Create JSON file"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/json/createjsonfile" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Create JSON file"}
  description={"Create a new JSON file."}
  fqName={"org.openrewrite.json.CreateJsonFile"}
  languages={["JSON"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-json/src/main/java/org/openrewrite/json/CreateJsonFile.java"}
/>

<RecipeHeader
  displayName={"Create JSON file"}
  description={"Create a new JSON file."}
  type={"Single recipe"}
  languages={["JSON"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.json.CreateJsonFile"}
  artifact={"org.openrewrite:rewrite-json"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.json.CreateJsonFile"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/json/createjsonfile.md"}
/>

<OptionsTable options={[{"type":"String","name":"relativeFileName","required":true,"description":"File path of new file.","example":"foo/bar/baz.json"},{"type":"String","name":"fileContents","required":false,"description":"Multiline text content for the file.","example":"{\"a\": {\"property\": \"value\"}, \"another\": {\"property\": \"value\"}}"},{"type":"String","name":"fileContentsUrl","required":false,"description":"URL to file containing text content for the file. Use either `fileContents` or `fileContentsUrl` option.","example":"http://foo.bar/baz.json"},{"type":"Boolean","name":"overwriteExisting","required":false,"description":"If there is an existing file, should it be overwritten."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.json.CreateJsonFile","displayName":"Create JSON file","groupId":"org.openrewrite","artifactId":"rewrite-json","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JSON","requiresConfiguration":true,"cliOptions":" --recipe-option \"relativeFileName=foo/bar/baz.json\" --recipe-option \"fileContents='{\"a\": {\"property\": \"value\"}, \"another\": {\"property\": \"value\"}}'\" --recipe-option \"fileContentsUrl=http://foo.bar/baz.json\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

