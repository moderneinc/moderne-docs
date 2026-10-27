---
title: "Find references to a name"
sidebar_label: "Find references to a name"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find references to a name"}
  description={"Report every place a data name, program, copybook, data set, DD name or paragraph is declared or referred to, with the file and line, and mark each one in the source. A search over the text finds the name wherever its letters appear; this finds the thing: a `CALL` through a field whose `VALUE` names the program, a condition name standing for the item it qualifies, a declaration copied in from a copybook, the DD a `SELECT` binds and the step that allocates it. What the rest of the portfolio knows about the name — what a program does with a field and where it reaches, who calls a program, who copies a copybook — is written beside its declaration."}
  fqName={"io.moderne.mainframe.analysis.FindReferences"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.analysis.FindReferences"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.analysis.FindReferences"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/analysis/findreferences.md"}
  moderneOnly
>

<RecipeHeader.Title>Find references to a name</RecipeHeader.Title>

<RecipeHeader.Description>Report every place a data name, program, copybook, data set, DD name or paragraph is declared or referred to, with the file and line, and mark each one in the source. A search over the text finds the name wherever its letters appear; this finds the thing: a `CALL` through a field whose `VALUE` names the program, a condition name standing for the item it qualifies, a declaration copied in from a copybook, the DD a `SELECT` binds and the step that allocates it. What the rest of the portfolio knows about the name — what a program does with a field and where it reaches, who calls a program, who copies a copybook — is written beside its declaration.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"searchTerm","required":true,"description":"The name to find every reference to, matched against the whole name without regard to case. Accepts a regular expression.","example":"CA-CUSTOMER-NUM"},{"type":"String","name":"kind","required":false,"description":"What the name is: `DATA_NAME`, `PROGRAM`, `COPYBOOK`, `DATA_SET`, `DD_NAME` or `PARAGRAPH`. Defaults to every kind, since one name can be a program to COBOL and a `PGM=` to JCL, or a DD to both."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.analysis.FindReferences","displayName":"Find references to a name","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":true,"cliOptions":" --recipe-option \"searchTerm=CA-CUSTOMER-NUM\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.References","displayName":"References","description":"Every place a named data item, program, copybook, data set, DD name or paragraph is declared or referred to, with the line it is on.","columns":[{"name":"Kind","description":"What the name is: `DATA_NAME`, `PROGRAM`, `COPYBOOK`, `DATA_SET`, `DD_NAME` or `PARAGRAPH`."},{"name":"Name","description":"The name, as written where it was found."},{"name":"Program","description":"The COBOL program or JCL member the reference is in. For a declaration copied in from a copybook, the program it is copied into."},{"name":"Source path","description":"The file the reference is in. For a declaration copied in from a copybook, the copybook."},{"name":"Line","description":"The line within the source path, counted from 1, or 0 where nothing was written at a line of its own."},{"name":"Reference kind","description":"`definition` where the name is declared. For a data name, `usage` wherever it is read, written or tested, a condition name standing for the item it qualifies. For a program, `call`, `link`, `xctl` and `cancel` as the statement says, and `exec` for the job step that runs it. `copy` for a copybook, `assign` for a DD name the program's `SELECT` binds and `usage` for one a later DD refers back to, `allocate` for the DD naming a data set, and `perform`, `goto` and `alter` for a paragraph."},{"name":"Context","description":"The source line the reference is on, or every line of a `COPY`, `INCLUDE` or `EXEC` that spans several. On a declaration, what the rest of the portfolio says about the name follows it: whether the program reads or writes a field and what it reaches, which programs `CALL` a program, which programs copy a copybook."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

