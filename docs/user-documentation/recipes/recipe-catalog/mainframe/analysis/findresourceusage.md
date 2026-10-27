---
title: "Build the resource side of the CRUD matrix"
sidebar_label: "Build the resource side of the CRUD matrix"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Build the resource side of the CRUD matrix"}
  description={"Report which programs and jobs reach each file, queue, DB2 table, data set and IMS segment, one row per resource and program carrying the letters of everything done to it. This is the matrix `FindResourceCrud` and `FindBatchCrud` build, turned on its side: theirs answers what one program touches, this one answers who else touches a store, which is the question asked before a file is changed or retired. The same rows are pivoted rather than the portfolio being read again, so a VSAM file read through CICS in one program, read natively in another and allocated by a job under its real data set name is three rows about one store — and every segment a DL/I call names carries its own letters, the last one written and the ones above it read to reach it."}
  fqName={"io.moderne.mainframe.analysis.FindResourceUsage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.analysis.FindResourceUsage"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.analysis.FindResourceUsage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/analysis/findresourceusage.md"}
  moderneOnly
>

<RecipeHeader.Title>Build the resource side of the CRUD matrix</RecipeHeader.Title>

<RecipeHeader.Description>Report which programs and jobs reach each file, queue, DB2 table, data set and IMS segment, one row per resource and program carrying the letters of everything done to it. This is the matrix `FindResourceCrud` and `FindBatchCrud` build, turned on its side: theirs answers what one program touches, this one answers who else touches a store, which is the question asked before a file is changed or retired. The same rows are pivoted rather than the portfolio being read again, so a VSAM file read through CICS in one program, read natively in another and allocated by a job under its real data set name is three rows about one store — and every segment a DL/I call names carries its own letters, the last one written and the ones above it read to reach it.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.analysis.FindResourceUsage","displayName":"Build the resource side of the CRUD matrix","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.ResourceUsage","displayName":"Resource usage matrix","description":"Which programs and jobs reach each file, queue, DB2 table, data set and IMS segment, one row per resource and program, with the letters of everything they do to it.","columns":[{"name":"Resource kind","description":"Whether the resource is a file, a temporary storage or transient data queue, a DB2 table, an IMS segment, or a data set, a generation or a library member the JCL names."},{"name":"Resource","description":"The resource by the name the outside world knows it by: the `ASSIGN` name of a native file, the data set name behind a DD, and the resource's own name for a CICS file, a DB2 table or an IMS segment."},{"name":"Program","description":"The program that reaches it, empty for a data set a job allocates and no program among the sources read opens."},{"name":"Job","description":"The job whose step binds it, empty where the program names the resource itself."},{"name":"CRUD","description":"The letters of everything done to the resource — `C`, `R`, `U`, `D`, in that order. Empty where a job names a data set and nothing says what becomes of it."},{"name":"Via JCL","description":"Whether the row was read from the JCL rather than from the program. A JCL row names the data set as the installation knows it; a program row names what the program itself calls the store."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

