---
title: "Copy YAML value"
sidebar_label: "Copy YAML value"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/yaml/copyvalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Copy YAML value"}
  description={"Copies a YAML value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to merge the copied value into the new key if it already exists. By default, attempts to create the new key if it does not exist."}
  fqName={"org.openrewrite.yaml.CopyValue"}
  languages={["YAML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/CopyValue.java"}
/>

<RecipeHeader
  displayName={"Copy YAML value"}
  description={"Copies a YAML value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to merge the copied value into the new key if it already exists. By default, attempts to create the new key if it does not exist."}
  type={"Single recipe"}
  languages={["YAML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.yaml.CopyValue"}
  artifact={"org.openrewrite:rewrite-yaml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.yaml.CopyValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/yaml/copyvalue.md"}
/>

<OptionsTable options={[{"type":"String","name":"oldKeyPath","required":true,"description":"A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression to locate a YAML key/value pair to copy.","example":"$.source.kind"},{"type":"String","name":"oldFilePath","required":false,"description":"The file path to the YAML file to copy the value from. If `null` then the value will be copied from any yaml file it appears within.","example":"src/main/resources/application.yaml"},{"type":"String","name":"newKey","required":true,"description":"A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression defining where the value should be written.","example":"$.dest.kind"},{"type":"String","name":"newFilePath","required":false,"description":"The file path to the YAML file to copy the value to. If `null` then the value will be copied only into the same file it was found in.","example":"src/main/resources/application.yaml"},{"type":"Boolean","name":"createNewKeys","required":false,"description":"When the key path does _not_ match any keys, create new keys on the spot. Default is `true`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldKeyPath","value":"$.source"},{"parameter":"oldFilePath","value":"null"},{"parameter":"newKey","value":"$.destination"},{"parameter":"newFilePath","value":"null"},{"parameter":"createNewKeys","value":"null"}],"variants":[{"language":"yaml","before":"source: value\ndestination: original\n","after":"source: value\ndestination: value\n","diff":"@@ -2,1 +2,1 @@\nsource: value\n-destination: original\n+destination: value\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.yaml.CopyValue","displayName":"Copy YAML value","groupId":"org.openrewrite","artifactId":"rewrite-yaml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_YAML","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldKeyPath=$.source.kind\" --recipe-option \"oldFilePath=src/main/resources/application.yaml\" --recipe-option \"newKey=$.dest.kind\" --recipe-option \"newFilePath=src/main/resources/application.yaml\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

