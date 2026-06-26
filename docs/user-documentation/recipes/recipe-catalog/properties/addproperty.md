---
title: "Add a new property"
sidebar_label: "Add a new property"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/properties/addproperty" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add a new property"}
  description={"Adds a new property to a property file. Attempts to place the new property in alphabetical order by the property keys. Whitespace before and after the `=` must be included in the property and value."}
  fqName={"org.openrewrite.properties.AddProperty"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/AddProperty.java"}
/>

<RecipeHeader
  displayName={"Add a new property"}
  description={"Adds a new property to a property file. Attempts to place the new property in alphabetical order by the property keys. Whitespace before and after the `=` must be included in the property and value."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.properties.AddProperty"}
  artifact={"org.openrewrite:rewrite-properties"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.properties.AddProperty"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/properties/addproperty.md"}
/>

<OptionsTable options={[{"type":"String","name":"property","required":true,"description":"The property key to add.","example":"management.metrics.enable.process.files"},{"type":"String","name":"value","required":true,"description":"The value of the new property key.","example":"newPropValue"},{"type":"String","name":"comment","required":false,"description":"A comment that will be added to the new property.","example":"This is a comment"},{"type":"String","name":"delimiter","required":false,"description":"Property entries support different delimiters (`=`, `:`, or whitespace). The default value is `=` unless provided the delimiter of the new property entry.","example":":"},{"type":"Boolean","name":"orderedInsertion","required":false,"description":"Whether to attempt adding the property in an order following alphabetic sorting. The default value is `true`.","example":"false"},{"type":"InsertMode","name":"insertMode","required":false,"description":"Choose an insertion point relative to an existing property. Default is `Last`. Takes precedence over `orderedInsertion`. If the referenced property does not exist, falls back to default behavior."},{"type":"String","name":"insertProperty","required":false,"description":"The key of an existing property to use as the reference point for the insert mode. Required when `insertMode` is `Before` or `After`.","example":"server.port"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.properties.AddProperty","displayName":"Add a new property","groupId":"org.openrewrite","artifactId":"rewrite-properties","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PROPERTIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"property=management.metrics.enable.process.files\" --recipe-option \"value=newPropValue\" --recipe-option \"comment=This is a comment\" --recipe-option \"delimiter=:\" --recipe-option \"orderedInsertion=false\" --recipe-option \"insertProperty=server.port\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

