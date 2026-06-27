---
title: "Merge YAML snippet"
sidebar_label: "Merge YAML snippet"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/yaml/mergeyaml" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Merge YAML snippet"}
  description={"Merge a YAML snippet with an existing YAML document."}
  fqName={"org.openrewrite.yaml.MergeYaml"}
  languages={["YAML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/MergeYaml.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["YAML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.yaml.MergeYaml"}
  artifact={"org.openrewrite:rewrite-yaml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.yaml.MergeYaml"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/yaml/mergeyaml.md"}
>

<RecipeHeader.Title>Merge YAML snippet</RecipeHeader.Title>

<RecipeHeader.Description>Merge a YAML snippet with an existing YAML document.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"key","required":true,"description":"A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression used to find matching keys.","example":"$.metadata"},{"type":"String","name":"yaml","required":true,"description":"The YAML snippet to insert. The snippet will be indented to match the style of its surroundings.","example":"labels:\n  label-one: \"value-one\""},{"type":"Boolean","name":"acceptTheirs","required":false,"description":"When the YAML snippet to insert conflicts with an existing key value pair and an existing key has a different value, prefer the original value."},{"type":"String","name":"objectIdentifyingProperty","required":false,"description":"Name of a property which will be used to identify objects (mapping). This serves as the key to match on when merging entries of a sequence.","example":"name"},{"type":"String","name":"filePattern","required":false,"description":"A glob expression representing a file path to search for (relative to the project root). Blank/null matches all.","example":".github/workflows/*.yml"},{"type":"InsertMode","name":"insertMode","required":false,"description":"Choose an insertion point when multiple mappings exist. Default is `Last`."},{"type":"String","name":"insertProperty","required":false,"description":"Define the key for the insertion mode. Takes the `key` JsonPath into account. Only useful when `insert mode` is either `Before` or `After`.","example":"some-key"},{"type":"Boolean","name":"createNewKeys","required":false,"description":"When the key path does _not_ match any keys, create new keys on the spot. Default is `true`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"key","value":"$.spec"},{"parameter":"yaml","value":"lifecycleRule:\n    - action:\n          type: Delete\n      condition:\n          age: 7\n"},{"parameter":"acceptTheirs","value":"false"},{"parameter":"objectIdentifyingProperty","value":"null"},{"parameter":"filePattern","value":"null"},{"parameter":"insertMode","value":"null"},{"parameter":"insertProperty","value":"null"},{"parameter":"createNewKeys","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: storage.cnrm.cloud.google.com/v1beta1\nkind: StorageBucket\nspec:\n    bucketPolicyOnly: true\n","after":"apiVersion: storage.cnrm.cloud.google.com/v1beta1\nkind: StorageBucket\nspec:\n    bucketPolicyOnly: true\n    lifecycleRule:\n        - action:\n              type: Delete\n          condition:\n              age: 7\n","diff":"@@ -5,0 +5,5 @@\nspec:\n    bucketPolicyOnly: true\n+   lifecycleRule:\n+       - action:\n+             type: Delete\n+         condition:\n+             age: 7\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.yaml.MergeYaml","displayName":"Merge YAML snippet","groupId":"org.openrewrite","artifactId":"rewrite-yaml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_YAML","requiresConfiguration":true,"cliOptions":" --recipe-option \"key=$.metadata\" --recipe-option \"yaml='labels:\n  label-one: \"value-one\"'\" --recipe-option \"objectIdentifyingProperty=name\" --recipe-option \"filePattern=.github/workflows/*.yml\" --recipe-option \"insertProperty=some-key\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

