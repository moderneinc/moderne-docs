---
title: "Applies a codemod to all source files"
sidebar_label: "Applies a codemod to all source files"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/codemods/applycodemod" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Applies a codemod to all source files"}
  description={"Applies a codemod represented by an NPM package to all source files."}
  fqName={"org.openrewrite.codemods.ApplyCodemod"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/java/org/openrewrite/codemods/ApplyCodemod.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.codemods.ApplyCodemod"}
  artifact={"org.openrewrite.recipe:rewrite-codemods"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.codemods.ApplyCodemod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/codemods/applycodemod.md"}
>

<RecipeHeader.Title>Applies a codemod to all source files</RecipeHeader.Title>

<RecipeHeader.Description>Applies a codemod represented by an NPM package to all source files.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"transform","required":true,"description":"Transform to be applied using the executable.","example":"-t path/to/transform/optimus-prime"},{"type":"String","name":"executable","required":false,"description":"Path to the codemod executable relative to the NPM directory. Defaults to `jscodeshift/bin/jscodeshift.js`.","example":"@next/codemod/bin/next-codemod.js"},{"type":"String","name":"fileFilter","required":true,"description":"Optional glob pattern to filter files to apply the codemod to. Defaults to all files. Note: not all codemods support file glob filtering.","example":"**/*.(j|t)sx"},{"type":"List","name":"codemodArgs","required":false,"description":"Arguments which get passed to the codemod command.","example":"--force --jscodeshift='--parser=${parser}'"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.codemods.ApplyCodemod","displayName":"Applies a codemod to all source files","groupId":"org.openrewrite.recipe","artifactId":"rewrite-codemods","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS","requiresConfiguration":true,"cliOptions":" --recipe-option \"transform='-t path/to/transform/optimus-prime'\" --recipe-option \"executable='@next/codemod/bin/next-codemod.js'\" --recipe-option \"fileFilter='**/*.(j|t)sx'\" --recipe-option \"codemodArgs=--force --jscodeshift='--parser=${parser}'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

