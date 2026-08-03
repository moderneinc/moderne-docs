---
title: "Rename header in .setHeader()/.getHeader() calls"
sidebar_label: "Rename header in .setHeader()/.getHeader() calls"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/camel/upgrade/camel418_3/renameheaderinjavamethod" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename header in .setHeader()/.getHeader() calls"}
  description={"Renames header references in Message.setHeader() and Message.getHeader() method calls. Only migrates string literals in safe contexts. Does NOT migrate dynamic header names or Map.get() calls."}
  fqName={"org.apache.camel.upgrade.camel418_3.RenameHeaderInJavaMethod"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=org.apache.camel.upgrade.camel418_3.RenameHeaderInJavaMethod"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.apache.camel.upgrade.camel418_3.RenameHeaderInJavaMethod"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/org.apache.camel.upgrade.camel418_3.RenameHeaderInJavaMethod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/camel/upgrade/camel418_3/renameheaderinjavamethod.md"}
>

<RecipeHeader.Title>Rename header in .setHeader()/.getHeader() calls</RecipeHeader.Title>

<RecipeHeader.Description>Renames header references in Message.setHeader() and Message.getHeader() method calls. Only migrates string literals in safe contexts. Does NOT migrate dynamic header names or Map.get() calls.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldHeaderName","required":true,"description":"The old header name to replace (as string literal)","example":"kafka.TOPIC"},{"type":"String","name":"newHeaderName","required":true,"description":"The new header name to use","example":"CamelKafkaTopic"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.apache.camel.upgrade.camel418_3.RenameHeaderInJavaMethod","displayName":"Rename header in .setHeader()/.getHeader() calls","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldHeaderName=kafka.TOPIC\" --recipe-option \"newHeaderName=CamelKafkaTopic\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

