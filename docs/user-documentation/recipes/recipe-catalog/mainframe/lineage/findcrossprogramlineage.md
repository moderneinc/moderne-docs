---
title: "Trace field lineage across programs"
sidebar_label: "Trace field lineage across programs"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Trace field lineage across programs"}
  description={"Follow a field out of the program that declares it, through every `CALL` that passes it, into the files, queues, maps and IMS segments it reaches in the programs it is passed to. COBOL binds arguments to parameters by position and carries no names across the boundary, so this is the join no repository scan or regular expression can make. Each answer carries the chain of programs and argument positions it was derived from, so it can be checked rather than trusted."}
  fqName={"io.moderne.mainframe.lineage.FindCrossProgramLineage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.lineage.FindCrossProgramLineage"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.lineage.FindCrossProgramLineage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/lineage/findcrossprogramlineage.md"}
  moderneOnly
>

<RecipeHeader.Title>Trace field lineage across programs</RecipeHeader.Title>

<RecipeHeader.Description>Follow a field out of the program that declares it, through every `CALL` that passes it, into the files, queues, maps and IMS segments it reaches in the programs it is passed to. COBOL binds arguments to parameters by position and carries no names across the boundary, so this is the join no repository scan or regular expression can make. Each answer carries the chain of programs and argument positions it was derived from, so it can be checked rather than trusted.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fieldName","required":true,"description":"The field to trace, matched against the declared name. Accepts a regular expression, so a family of fields can be traced at once.","example":"WS-ACCT-ID"},{"type":"Integer","name":"maximumDepth","required":false,"description":"How many `CALL` boundaries to cross. Defaults to 10, which is past the depth of any call chain worth reading as a single answer."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.lineage.FindCrossProgramLineage","displayName":"Trace field lineage across programs","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":true,"cliOptions":" --recipe-option \"fieldName=WS-ACCT-ID\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.CrossProgramLineage","displayName":"Cross program lineage","description":"Where a field's value goes once it leaves the program that declares it, followed through CALL boundaries into every program it reaches.","columns":[{"name":"Origin program","description":"The program the trace started from."},{"name":"Origin field","description":"The field the trace started from, as declared in the origin program."},{"name":"Program","description":"The program this row reports on, which is the origin program at depth zero and a called program below that."},{"name":"Field","description":"What the value is called here. A called program names its own parameters, so the name changes at every boundary even though the storage does not."},{"name":"Depth","description":"How many CALL boundaries were crossed to get here. Zero is the origin."},{"name":"Call chain","description":"The programs crossed to reach this one, with the argument position bound at each step. Position is all COBOL passes, so it is the whole of the evidence that these two fields are the same storage."},{"name":"Endpoint kind","description":"What the value crosses this program's boundary through: a file, a queue, a map, an IMS segment, the terminal, or a further called program. Empty when the value arrives here but goes no further."},{"name":"Endpoint","description":"The resource name, where the statement names one."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

