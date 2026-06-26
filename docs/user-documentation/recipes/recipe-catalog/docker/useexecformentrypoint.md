---
title: "Use exec form for `ENTRYPOINT` and `CMD`"
sidebar_label: "Use exec form for `ENTRYPOINT` and `CMD`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/docker/useexecformentrypoint" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use exec form for `ENTRYPOINT` and `CMD`"}
  description={"Converts shell form `ENTRYPOINT` and `CMD` instructions to exec form (JSON array). Exec form is preferred because it runs the command as PID 1, allowing it to receive Unix signals properly. Shell form wraps commands in `/bin/sh -c` which can cause signal handling issues."}
  fqName={"org.openrewrite.docker.UseExecFormEntrypoint"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/java/org/openrewrite/docker/UseExecFormEntrypoint.java"}
/>

<RecipeHeader
  displayName={"Use exec form for `ENTRYPOINT` and `CMD`"}
  description={"Converts shell form `ENTRYPOINT` and `CMD` instructions to exec form (JSON array). Exec form is preferred because it runs the command as PID 1, allowing it to receive Unix signals properly. Shell form wraps commands in `/bin/sh -c` which can cause signal handling issues."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.docker.UseExecFormEntrypoint"}
  artifact={"org.openrewrite:rewrite-docker"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.docker.UseExecFormEntrypoint"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/docker/useexecformentrypoint.md"}
/>

<OptionsTable options={[{"type":"Boolean","name":"convertEntrypoint","required":false,"description":"Whether to convert ENTRYPOINT instructions. Defaults to true."},{"type":"Boolean","name":"convertCmd","required":false,"description":"Whether to convert CMD instructions. Defaults to true."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"convertEntrypoint","value":"null"},{"parameter":"convertCmd","value":"null"}],"variants":[{"language":"docker","before":"FROM ubuntu:22.04\nENTRYPOINT /app/server\n","after":"FROM ubuntu:22.04\nENTRYPOINT [\"/app/server\"]\n","diff":"@@ -2,1 +2,1 @@\nFROM ubuntu:22.04\n-ENTRYPOINT /app/server\n+ENTRYPOINT [\"/app/server\"]\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.docker.UseExecFormEntrypoint","displayName":"Use exec form for `ENTRYPOINT` and `CMD`","groupId":"org.openrewrite","artifactId":"rewrite-docker","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_DOCKER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

