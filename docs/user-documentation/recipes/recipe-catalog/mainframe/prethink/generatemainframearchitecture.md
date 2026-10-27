---
title: "Generate mainframe CALM architecture"
sidebar_label: "Generate mainframe CALM architecture"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Generate mainframe [CALM](https://calm.finos.org/) architecture"}
  description={"Write the jobs, programs, load modules, data sets, DB2 tables, CICS resources, IMS databases, segments and the PSBs that reach them, control cards and scheduled jobs of a mainframe portfolio, and the relationships between them, as a FINOS CALM (Common Architecture Language Model) document. Control transfers become `interacts` edges, resource access becomes `connects`, and what the build composes becomes `composed-of`, so a reader can tell a runtime path from a build-time fact. Every node and every edge carries the file and line it was read from, the application and environment it belongs to and the technology it is, so the document can be filtered as well as drawn. A dependency the analysis could not resolve is kept as a node and marked, because a job running a program nobody can find is a finding rather than an edge to drop.\n\nThis recipe reads data tables that other recipes populate, so it produces nothing on its own. Run it as part of `io.moderne.mainframe.prethink.UpdateMainframePrethinkContext`."}
  fqName={"io.moderne.mainframe.prethink.GenerateMainframeArchitecture"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.prethink.GenerateMainframeArchitecture"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.prethink.GenerateMainframeArchitecture"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/prethink/generatemainframearchitecture.md"}
  moderneOnly
>

<RecipeHeader.Title>Generate mainframe [CALM](https://calm.finos.org/) architecture</RecipeHeader.Title>

<RecipeHeader.Description>

Write the jobs, programs, load modules, data sets, DB2 tables, CICS resources, IMS databases, segments and the PSBs that reach them, control cards and scheduled jobs of a mainframe portfolio, and the relationships between them, as a FINOS CALM (Common Architecture Language Model) document. Control transfers become `interacts` edges, resource access becomes `connects`, and what the build composes becomes `composed-of`, so a reader can tell a runtime path from a build-time fact. Every node and every edge carries the file and line it was read from, the application and environment it belongs to and the technology it is, so the document can be filtered as well as drawn. A dependency the analysis could not resolve is kept as a node and marked, because a job running a program nobody can find is a finding rather than an edge to drop.

This recipe reads data tables that other recipes populate, so it produces nothing on its own. Run it as part of `io.moderne.mainframe.prethink.UpdateMainframePrethinkContext`.

</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"views","required":false,"description":"Also write one document per view defined in `architecture-views.json`, each a filter over the same architecture: the nodes of one technology and its neighbours, and the relationships between them. Off by default, because a reader who wants the whole estate wants one file."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.prethink.GenerateMainframeArchitecture","displayName":"Generate mainframe [CALM](https://calm.finos.org/) architecture","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"views=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

