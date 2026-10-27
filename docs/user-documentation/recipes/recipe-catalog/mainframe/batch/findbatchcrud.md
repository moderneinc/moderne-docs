---
title: "Build the batch CRUD matrix"
sidebar_label: "Build the batch CRUD matrix"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Build the batch CRUD matrix"}
  description={"Report which job step runs which program against which data set, and what the program does with it. Neither source says this on its own: `//ACCTDD DD DSN=PROD.ACCOUNT.MASTER` names a data set without saying what happens to it, and `SELECT ACCT-FILE ASSIGN TO ACCTDD` says what happens without saying to what. The DD name is the only word both files contain, so joining on it is what turns a pile of jobs and a pile of programs into a batch application. Every `ASSIGN` and every DD appears, bound or with the reason it is not: a step is a run unit rather than a program, so a subprogram's files are bound by the step that runs its caller."}
  fqName={"io.moderne.mainframe.batch.FindBatchCrud"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.batch.FindBatchCrud"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.batch.FindBatchCrud"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/batch/findbatchcrud.md"}
  moderneOnly
>

<RecipeHeader.Title>Build the batch CRUD matrix</RecipeHeader.Title>

<RecipeHeader.Description>Report which job step runs which program against which data set, and what the program does with it. Neither source says this on its own: `//ACCTDD DD DSN=PROD.ACCOUNT.MASTER` names a data set without saying what happens to it, and `SELECT ACCT-FILE ASSIGN TO ACCTDD` says what happens without saying to what. The DD name is the only word both files contain, so joining on it is what turns a pile of jobs and a pile of programs into a batch application. Every `ASSIGN` and every DD appears, bound or with the reason it is not: a step is a run unit rather than a program, so a subprogram's files are bound by the step that runs its caller.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.batch.FindBatchCrud","displayName":"Build the batch CRUD matrix","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.BatchCrud","displayName":"Batch CRUD matrix","description":"Which job step runs which program against which data set, and what the program does with it.","columns":[{"name":"Job","description":"The job name, empty for a member with no JOB card."},{"name":"Member","description":"The JCL member."},{"name":"Step","description":"The step name. An unnamed step is empty, and cannot be referred to by a later step or by a scheduler."},{"name":"Step program","description":"The program the step names on `PGM=`."},{"name":"Program","description":"The program that names the file. Not always the step's program: a subprogram opens the DDs of the step that runs its caller."},{"name":"DD name","description":"The DD name, which is the only word the JCL and the program both contain."},{"name":"File","description":"The file as the program names it, from `SELECT`."},{"name":"Written in","description":"The member that asked for the DD, where the program's own text does not — a SAS `%INCLUDE` reads another member in where the statement stands, so what that member needs the step has to allocate. Empty for a DD the program names itself."},{"name":"Data set","description":"The data set as the installation knows it, with any member."},{"name":"Data set kind","description":"Whether the DD names a catalogued data set, a generation, a library member, something temporary, in-stream data, `DUMMY`, `SYSOUT`, or a data set passed by an earlier step."},{"name":"Disposition","description":"The `DISP` operand as written. The status is what says whether the step expects the data set to exist."},{"name":"CRUD","description":"`CREATE`, `READ`, `UPDATE` or `DELETE`, empty where nothing is bound."},{"name":"Operations","description":"The statements the CRUD was read from."},{"name":"Binding","description":"How far the DD name and the `ASSIGN` clause got towards meeting. Anything other than `BOUND` is a gap between the JCL and the program, or a limit of what the sources read can say."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

