---
title: "Build the resource CRUD matrix"
sidebar_label: "Build the resource CRUD matrix"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Build the resource CRUD matrix"}
  description={"Report which programs create, read, update and delete which files, queues, DB2 tables and IMS segments. A mainframe program reaches its data four different ways — CICS commands, DL/I calls, embedded SQL and native file I/O — and each is normally reported on its own, which is what makes \"who else writes this\" hard to answer. Here a VSAM file read through CICS in one program and through `READ` in another is one resource with two readers."}
  fqName={"io.moderne.mainframe.analysis.FindResourceCrud"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.analysis.FindResourceCrud"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.analysis.FindResourceCrud"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/analysis/findresourcecrud.md"}
  moderneOnly
>

<RecipeHeader.Title>Build the resource CRUD matrix</RecipeHeader.Title>

<RecipeHeader.Description>Report which programs create, read, update and delete which files, queues, DB2 tables and IMS segments. A mainframe program reaches its data four different ways — CICS commands, DL/I calls, embedded SQL and native file I/O — and each is normally reported on its own, which is what makes "who else writes this" hard to answer. Here a VSAM file read through CICS in one program and through `READ` in another is one resource with two readers.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.analysis.FindResourceCrud","displayName":"Build the resource CRUD matrix","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.ResourceCrud","displayName":"Resource CRUD matrix","description":"Which programs create, read, update and delete which files, queues, DB2 tables and IMS segments, across CICS, DL/I, SQL and native file I/O.","columns":[{"name":"Program","description":"The COBOL program."},{"name":"Paragraph","description":"The paragraph or section containing the statement."},{"name":"Resource kind","description":"Whether the store is a file, a temporary storage or transient data queue, a DB2 table or an IMS segment."},{"name":"Resource","description":"The resource as the program names it."},{"name":"External name","description":"What the resource is called outside the program — the `ASSIGN` name for a native file. This is the column two programs have to agree on before they can be said to share a store."},{"name":"CRUD","description":"`CREATE`, `READ`, `UPDATE` or `DELETE`."},{"name":"Operation","description":"The statement as written. Two accesses that agree on CRUD can still differ in ways worth seeing."},{"name":"Dynamic","description":"Whether the resource name came from a data item rather than a literal."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

