---
title: "Add Docker LABEL instruction"
sidebar_label: "Add Docker LABEL instruction"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/docker/addorupdatelabel" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add Docker LABEL instruction"}
  description={"Adds or updates a LABEL instruction in a Dockerfile. By default, adds to the final stage only."}
  fqName={"org.openrewrite.docker.AddOrUpdateLabel"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/java/org/openrewrite/docker/AddOrUpdateLabel.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.docker.AddOrUpdateLabel"}
  artifact={"org.openrewrite:rewrite-docker"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.docker.AddOrUpdateLabel"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/docker/addorupdatelabel.md"}
>

<RecipeHeader.Title>Add Docker LABEL instruction</RecipeHeader.Title>

<RecipeHeader.Description>Adds or updates a LABEL instruction in a Dockerfile. By default, adds to the final stage only.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"key","required":true,"description":"The key of the label to add.","example":"org.opencontainers.image.version"},{"type":"String","name":"value","required":true,"description":"The value of the label.","example":"1.0.0"},{"type":"Boolean","name":"overwriteExisting","required":false,"description":"If true, overwrite the label if it already exists. If false, skip if exists. Defaults to true."},{"type":"String","name":"stageName","required":false,"description":"Only add the label to this build stage. If null, adds to the final stage only.","example":"final"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"key","value":"version"},{"parameter":"value","value":"1.0.0"},{"parameter":"overwriteExisting","value":"null"},{"parameter":"stageName","value":"null"}],"variants":[{"language":"docker","before":"FROM ubuntu:22.04\nRUN apt-get update\n","after":"FROM ubuntu:22.04\nLABEL version=1.0.0\nRUN apt-get update\n","diff":"@@ -2,0 +2,1 @@\nFROM ubuntu:22.04\n+LABEL version=1.0.0\nRUN apt-get update\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.docker.AddOrUpdateLabel","displayName":"Add Docker LABEL instruction","groupId":"org.openrewrite","artifactId":"rewrite-docker","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_DOCKER","requiresConfiguration":true,"cliOptions":" --recipe-option \"key=org.opencontainers.image.version\" --recipe-option \"value=1.0.0\" --recipe-option \"stageName=final\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

