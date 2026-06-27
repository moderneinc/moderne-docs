---
title: "Find property"
sidebar_label: "Find property"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/properties/search/findproperties" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find property"}
  description={"Finds occurrences of a property key."}
  fqName={"org.openrewrite.properties.search.FindProperties"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/search/FindProperties.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.properties.search.FindProperties"}
  artifact={"org.openrewrite:rewrite-properties"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.properties.search.FindProperties"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/properties/search/findproperties.md"}
>

<RecipeHeader.Title>Find property</RecipeHeader.Title>

<RecipeHeader.Description>Finds occurrences of a property key.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"propertyKey","required":true,"description":"The property key to look for.","example":"management.metrics.binders.files.enabled"},{"type":"Boolean","name":"relaxedBinding","required":false,"description":"Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false`  to use exact matching."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"propertyKey","value":"management.metrics.binders.files.enabled"},{"parameter":"relaxedBinding","value":"null"}],"variants":[{"language":"properties","before":"management.metrics.binders.files.enabled=true","after":"management.metrics.binders.files.enabled=~~>true","diff":"@@ -1,1 +1,1 @@\n-management.metrics.binders.files.enabled=true\n+management.metrics.binders.files.enabled=~~>true\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.properties.search.FindProperties","displayName":"Find property","groupId":"org.openrewrite","artifactId":"rewrite-properties","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_PROPERTIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"propertyKey=management.metrics.binders.files.enabled\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

