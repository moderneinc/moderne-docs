---
title: "Find the control flow between paragraphs and sections"
sidebar_label: "Find the control flow between paragraphs and sections"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find the control flow between paragraphs and sections"}
  description={"Report every transfer of control between the procedures of a program as edges from `MAINLINE`, the statements before the first paragraph, down: `PERFORM` and each further procedure its `THRU` range runs through, `GO TO` including `DEPENDING ON`, the branch targets `EXEC CICS HANDLE` registers, and the fall-through from a paragraph that does not transfer away into the next. Each edge carries the line it is written at and whether it leads to a procedure that abends, with `EXEC CICS ABEND` or a call to `CEE3ABD`, so the error paths can be drawn apart from the rest. The graph is the one `FindUnreachableProcedures` walks, and programs containing `ALTER` are skipped for the same reason: `ALTER` retargets a `GO TO` at run time and leaves the program with no static control flow."}
  fqName={"io.moderne.mainframe.analysis.controlflow.FindControlFlowEdges"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.analysis.controlflow.FindControlFlowEdges"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.analysis.controlflow.FindControlFlowEdges"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/analysis/controlflow/findcontrolflowedges.md"}
  moderneOnly
>

<RecipeHeader.Title>Find the control flow between paragraphs and sections</RecipeHeader.Title>

<RecipeHeader.Description>Report every transfer of control between the procedures of a program as edges from `MAINLINE`, the statements before the first paragraph, down: `PERFORM` and each further procedure its `THRU` range runs through, `GO TO` including `DEPENDING ON`, the branch targets `EXEC CICS HANDLE` registers, and the fall-through from a paragraph that does not transfer away into the next. Each edge carries the line it is written at and whether it leads to a procedure that abends, with `EXEC CICS ABEND` or a call to `CEE3ABD`, so the error paths can be drawn apart from the rest. The graph is the one `FindUnreachableProcedures` walks, and programs containing `ALTER` are skipped for the same reason: `ALTER` retargets a `GO TO` at run time and leaves the program with no static control flow.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.analysis.controlflow.FindControlFlowEdges","displayName":"Find the control flow between paragraphs and sections","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.ControlFlowEdges","displayName":"Control flow edges","description":"Every transfer of control between the paragraphs and sections of a program, from `MAINLINE` down: the flowchart, as edges.","columns":[{"name":"Program","description":"The COBOL program."},{"name":"From procedure","description":"The paragraph or section control leaves, or `MAINLINE` for the statements before the first paragraph, where the program starts."},{"name":"To procedure","description":"The paragraph or section control reaches."},{"name":"Kind","description":"How control gets there: `PERFORM`; `PERFORM_THRU` for a procedure a `THRU` range runs through after its first; `GO_TO`; `HANDLE` for a branch `EXEC CICS HANDLE` registers; or `FALL_THROUGH` when the procedure before does not transfer away."},{"name":"Line","description":"The line of the statement that transfers control, or of the procedure fallen into. 0 when it was copied in from a copybook and so has no line in the program."},{"name":"Column","description":"The column that statement or procedure name starts in, counted from 1."},{"name":"Abend target","description":"Whether the procedure reached ends the run abnormally, with `EXEC CICS ABEND` or a call to an abend service such as `CEE3ABD`. Decided by what it does, not by what it is called."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

