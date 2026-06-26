---
title: "Delete TOML key"
sidebar_label: "Delete TOML key"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/toml/deletekey" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Delete TOML key"}
  description={"Delete a TOML key-value pair."}
  fqName={"org.openrewrite.toml.DeleteKey"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-toml/src/main/java/org/openrewrite/toml/DeleteKey.java"}
/>

<RecipeHeader
  displayName={"Delete TOML key"}
  description={"Delete a TOML key-value pair."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.toml.DeleteKey"}
  artifact={"org.openrewrite:rewrite-toml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.toml.DeleteKey"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/toml/deletekey.md"}
/>

<OptionsTable options={[{"type":"String","name":"keyPath","required":true,"description":"A TOML path expression to locate a key.","example":"package.keywords"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"keyPath","value":"description"}],"variants":[{"language":"toml","before":"name = \"my-project\"\ndescription = \"A sample project\"\nversion = \"1.0.0\"\n","after":"name = \"my-project\"\nversion = \"1.0.0\"\n","diff":"@@ -2,1 +2,0 @@\nname = \"my-project\"\n-description = \"A sample project\"\nversion = \"1.0.0\"\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.toml.DeleteKey","displayName":"Delete TOML key","groupId":"org.openrewrite","artifactId":"rewrite-toml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_TOML","requiresConfiguration":true,"cliOptions":" --recipe-option \"keyPath=package.keywords\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

