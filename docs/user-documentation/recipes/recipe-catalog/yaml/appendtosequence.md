---
title: "Append to sequence"
sidebar_label: "Append to sequence"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/yaml/appendtosequence" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Append to sequence"}
  description={"Append item to YAML sequence."}
  fqName={"org.openrewrite.yaml.AppendToSequence"}
  languages={["YAML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/AppendToSequence.java"}
/>

<RecipeHeader
  displayName={"Append to sequence"}
  description={"Append item to YAML sequence."}
  type={"Single recipe"}
  languages={["YAML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.yaml.AppendToSequence"}
  artifact={"org.openrewrite:rewrite-yaml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.yaml.AppendToSequence"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/yaml/appendtosequence.md"}
/>

<OptionsTable options={[{"type":"String","name":"sequencePath","required":true,"description":"A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression to locate a YAML sequence.","example":"$.universe.planets"},{"type":"String","name":"value","required":true,"description":"The new value to be appended to the sequence.","example":"earth"},{"type":"List","name":"existingSequenceValues","required":false,"description":"If specified, the item will only be appended if the existing sequence matches these values.","example":"existingValue1"},{"type":"Boolean","name":"matchExistingSequenceValuesInAnyOrder","required":false,"description":"If specified in combination with the above parameter, the item will only be appended if the existing sequence has the specified values in any order.","example":"true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sequencePath","value":"$.things.fruit"},{"parameter":"value","value":"strawberry"},{"parameter":"existingSequenceValues","value":"null"},{"parameter":"matchExistingSequenceValuesInAnyOrder","value":"null"}],"variants":[{"language":"yaml","before":"things:\n  fruit:\n    - apple\n    - blueberry\n","after":"things:\n  fruit:\n    - apple\n    - blueberry\n    - strawberry\n","diff":"@@ -5,0 +5,1 @@\n    - apple\n    - blueberry\n+   - strawberry\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.yaml.AppendToSequence","displayName":"Append to sequence","groupId":"org.openrewrite","artifactId":"rewrite-yaml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_YAML","requiresConfiguration":true,"cliOptions":" --recipe-option \"sequencePath=$.universe.planets\" --recipe-option \"value=earth\" --recipe-option \"existingSequenceValues=existingValue1\" --recipe-option \"matchExistingSequenceValuesInAnyOrder=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

