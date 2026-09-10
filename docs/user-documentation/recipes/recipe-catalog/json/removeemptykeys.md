---
title: "Remove empty keys"
sidebar_label: "Remove empty keys"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/json/removeemptykeys" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove empty keys"}
  description={"Remove mapping entries whose value is an empty object or array, such as those left behind by `DeleteKey`. Entries are removed from the inside out, so a chain of objects holding nothing but the removed entry is removed entirely. Array elements are left alone, since removing one shifts the indexes of its siblings."}
  fqName={"org.openrewrite.json.RemoveEmptyKeys"}
  languages={["JSON"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-json/src/main/java/org/openrewrite/json/RemoveEmptyKeys.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["JSON"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.json.RemoveEmptyKeys"}
  artifact={"org.openrewrite:rewrite-json"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.json.RemoveEmptyKeys"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/json/removeemptykeys.md"}
>

<RecipeHeader.Title>Remove empty keys</RecipeHeader.Title>

<RecipeHeader.Description>Remove mapping entries whose value is an empty object or array, such as those left behind by `DeleteKey`. Entries are removed from the inside out, so a chain of objects holding nothing but the removed entry is removed entirely. Array elements are left alone, since removing one shifts the indexes of its siblings.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"keys","required":false,"description":"A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression bounding the cleanup. Keys it selects, and the keys nested within them, are eligible for removal. When omitted, the whole document is eligible.","example":"$..devDependencies"},{"type":"String","name":"cascadeTo","required":false,"description":"A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression letting removal continue outward past `keys`. A key this recipe empties is removed when `cascadeTo` selects it or nests it, so `keys` of `$.spec.template` with `cascadeTo` of `$.spec` goes on to remove `spec` once `template` is gone. Keys that were already empty outside `keys` are still left alone. When omitted, removal stops at the `keys` boundary.","example":"$.spec"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"keys","value":"null"},{"parameter":"cascadeTo","value":"null"}],"variants":[{"language":"json","before":"{\n  \"name\": \"my-package\",\n  \"engines\": {},\n  \"version\": \"1.0.0\"\n}\n","after":"{\n  \"name\": \"my-package\",\n  \"version\": \"1.0.0\"\n}\n","diff":"@@ -3,1 +3,0 @@\n{\n  \"name\": \"my-package\",\n- \"engines\": {},\n  \"version\": \"1.0.0\"\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.json.RemoveEmptyKeys","displayName":"Remove empty keys","groupId":"org.openrewrite","artifactId":"rewrite-json","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JSON","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

