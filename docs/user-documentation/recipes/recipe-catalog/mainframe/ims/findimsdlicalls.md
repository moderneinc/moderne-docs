---
title: "Find IMS DL/I calls"
sidebar_label: "Find IMS DL/I calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find IMS DL/I calls"}
  description={"Locate IMS database and message calls, written either as `CALL 'CBLTDLI'` and its siblings or as `EXEC DLI`. A DL/I call is an ordinary COBOL `CALL`, so recognising one means applying the convention that the first argument is the function code, the second names a PCB and the rest are segment search arguments. Function codes held in a data item are resolved through the literals moved into it, since programs rarely pass the literal directly."}
  fqName={"io.moderne.mainframe.ims.FindImsDliCalls"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.ims.FindImsDliCalls"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.ims.FindImsDliCalls"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/ims/findimsdlicalls.md"}
  moderneOnly
>

<RecipeHeader.Title>Find IMS DL/I calls</RecipeHeader.Title>

<RecipeHeader.Description>Locate IMS database and message calls, written either as `CALL 'CBLTDLI'` and its siblings or as `EXEC DLI`. A DL/I call is an ordinary COBOL `CALL`, so recognising one means applying the convention that the first argument is the function code, the second names a PCB and the rest are segment search arguments. Function codes held in a data item are resolved through the literals moved into it, since programs rarely pass the literal directly.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"function","required":false,"description":"Only report calls issuing this DL/I function, such as `ISRT`. Reports every call when omitted.","example":"ISRT"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.ims.FindImsDliCalls","displayName":"Find IMS DL/I calls","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"function=ISRT\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.ImsDliCalls","displayName":"IMS DL/I calls","description":"Every DL/I database and message call, however it was written.","columns":[{"name":"Program","description":"The COBOL program making the call."},{"name":"Paragraph","description":"The paragraph or section containing the call."},{"name":"Interface","description":"The DL/I language interface: CBLTDLI, AIBTDLI, CEETDLI, PLITDLI, or EXEC DLI."},{"name":"Function","description":"The DL/I function, such as GU, GN, ISRT, REPL or DLET. Empty when the function code is supplied by a data item that more than one literal reaches."},{"name":"Function operand","description":"The argument the function code was passed in, whether or not it resolved."},{"name":"PCB","description":"The PCB the call was issued against."},{"name":"PCB position","description":"The PCB's position in the PSB, counting from zero, or -1 when the program does not declare it at its entry point. The PSB has to be joined on this position to name the database, because nothing in the COBOL does."},{"name":"Message call","description":"Whether the call is against the I/O PCB, making it a message queue read or write rather than a database call."},{"name":"Access","description":"What the call does: READ, CREATE, UPDATE, DELETE, CHECKPOINT or SYSTEM."},{"name":"Segments","description":"Segment names the call is qualified by, where they could be resolved."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

