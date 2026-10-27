---
title: "Lay out the portfolio's call trees"
sidebar_label: "Lay out the portfolio's call trees"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Lay out the portfolio's call trees"}
  description={"Record every job, procedure, program and subprogram as a tree from what runs it: a job's steps, the procedure or program each step runs, and the programs each program reaches by `CALL`, `EXEC CICS LINK` or `XCTL`, one row per position and depth first. A step names a load module, which is a position of its own with every program a link-edit deck says is bound into it beneath it. A target named by a data item resolved through the one literal it is given and flagged as dynamic, and a node already in its tree flagged as repeated. `FindCallTree` answers the same question and marks each step and transfer in the source; this one produces the table and changes nothing."}
  fqName={"io.moderne.mainframe.prethink.AnalyzeCallTree"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.prethink.AnalyzeCallTree"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.prethink.AnalyzeCallTree"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/prethink/analyzecalltree.md"}
  moderneOnly
>

<RecipeHeader.Title>Lay out the portfolio's call trees</RecipeHeader.Title>

<RecipeHeader.Description>Record every job, procedure, program and subprogram as a tree from what runs it: a job's steps, the procedure or program each step runs, and the programs each program reaches by `CALL`, `EXEC CICS LINK` or `XCTL`, one row per position and depth first. A step names a load module, which is a position of its own with every program a link-edit deck says is bound into it beneath it. A target named by a data item resolved through the one literal it is given and flagged as dynamic, and a node already in its tree flagged as repeated. `FindCallTree` answers the same question and marks each step and transfer in the source; this one produces the table and changes nothing.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.prethink.AnalyzeCallTree","displayName":"Lay out the portfolio's call trees","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.CallTree","displayName":"Call tree","description":"Every job, procedure, program and subprogram as a tree from what runs it, one row per position and depth first, so the rows alone lay the tree out.","columns":[{"name":"Root","description":"The job, procedure or program the tree starts from."},{"name":"Depth","description":"How far below the root this position is, 0 for the root itself."},{"name":"Parent","description":"The node this one is reached from, empty for the root."},{"name":"Node","description":"The job, step, procedure or program at this position. A transfer whose target is only known at run time names the data item that holds it."},{"name":"Node type","description":"`JOB`, `STEP`, `PROC`, `LOAD_MODULE` for what a step runs where a link-edit deck says what is in it, `PROGRAM` for what a step runs or a `LINK` or `XCTL` reaches, and `SUBPROGRAM` for what a `CALL` reaches."},{"name":"Edge kind","description":"How control gets here from the parent: `STEP` for a step of a job or procedure, `EXEC` for what a step runs, `INCLUDE` for a program bound into the load module above it, `CALL`, `LINK` or `XCTL`. Empty for the root."},{"name":"Dynamic","description":"Whether the target was named by a data item rather than written, resolved through the one literal the item is given where there is one."},{"name":"Repeated","description":"Whether the node already appeared earlier in this tree, in which case what it reaches is not written again. That is what keeps a cycle finite, and what a layout draws grayed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

