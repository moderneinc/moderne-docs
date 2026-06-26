---
title: "Copy property value"
sidebar_label: "Copy property value"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/properties/copyvalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Copy property value"}
  description={"Copies a property value from one key to another. The existing key/value pair remains unaffected by this change. If the destination key already exists, its value will be replaced. By default, creates the destination key if it does not exist."}
  fqName={"org.openrewrite.properties.CopyValue"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/CopyValue.java"}
/>

<RecipeHeader
  displayName={"Copy property value"}
  description={"Copies a property value from one key to another. The existing key/value pair remains unaffected by this change. If the destination key already exists, its value will be replaced. By default, creates the destination key if it does not exist."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.properties.CopyValue"}
  artifact={"org.openrewrite:rewrite-properties"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.properties.CopyValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/properties/copyvalue.md"}
/>

<OptionsTable options={[{"type":"String","name":"oldPropertyKey","required":true,"description":"The property key to copy the value from. Supports glob patterns.","example":"app.source.property"},{"type":"String","name":"oldFilePath","required":false,"description":"The file path to the properties file to copy the value from. If `null` then the value will be copied from any properties file it appears within.","example":"src/main/resources/application.properties"},{"type":"String","name":"newPropertyKey","required":true,"description":"The property key to copy the value to.","example":"app.destination.property"},{"type":"String","name":"newFilePath","required":false,"description":"The file path to the properties file to copy the value to. If `null` then the value will be copied only into the same file it was found in.","example":"src/main/resources/application.properties"},{"type":"Boolean","name":"createNewKeys","required":false,"description":"When the destination key does _not_ already exist, create it. Default is `true`."},{"type":"Boolean","name":"relaxedBinding","required":false,"description":"Whether to match the `oldPropertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false` to use exact matching."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldPropertyKey","value":"source.key"},{"parameter":"oldFilePath","value":"null"},{"parameter":"newPropertyKey","value":"destination.key"},{"parameter":"newFilePath","value":"null"},{"parameter":"createNewKeys","value":"null"},{"parameter":"relaxedBinding","value":"null"}],"variants":[{"language":"properties","before":"source.key=myValue\ndestination.key=original\n","after":"source.key=myValue\ndestination.key=myValue\n","diff":"@@ -2,1 +2,1 @@\nsource.key=myValue\n-destination.key=original\n+destination.key=myValue\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.properties.CopyValue","displayName":"Copy property value","groupId":"org.openrewrite","artifactId":"rewrite-properties","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PROPERTIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldPropertyKey=app.source.property\" --recipe-option \"oldFilePath=src/main/resources/application.properties\" --recipe-option \"newPropertyKey=app.destination.property\" --recipe-option \"newFilePath=src/main/resources/application.properties\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

