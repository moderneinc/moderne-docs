---
title: "Trace field lineage"
sidebar_label: "Trace field lineage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Trace field lineage"}
  description={"Trace where a field's value comes from and where it goes, following it through moves, computations and the records that carry it, out to the files, queues, maps, IMS segments and screens on the program's boundary. This answers the question impact analysis and regulatory reporting both ask: what feeds this value, and where does it end up. Each answer carries the route it took, so it can be checked rather than trusted."}
  fqName={"io.moderne.mainframe.lineage.FindFieldLineage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.lineage.FindFieldLineage"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.lineage.FindFieldLineage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/lineage/findfieldlineage.md"}
  moderneOnly
>

<RecipeHeader.Title>Trace field lineage</RecipeHeader.Title>

<RecipeHeader.Description>Trace where a field's value comes from and where it goes, following it through moves, computations and the records that carry it, out to the files, queues, maps, IMS segments and screens on the program's boundary. This answers the question impact analysis and regulatory reporting both ask: what feeds this value, and where does it end up. Each answer carries the route it took, so it can be checked rather than trusted.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fieldName","required":true,"description":"The field to trace, matched against the declared name. Accepts a regular expression, so a family of fields can be traced at once.","example":"WS-SSN"},{"type":"String","name":"direction","required":false,"description":"`SINK` for where the field's value ends up, `SOURCE` for where it came from, `BOTH` for each. Defaults to `BOTH`."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.lineage.FindFieldLineage","displayName":"Trace field lineage","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":true,"cliOptions":" --recipe-option \"fieldName=WS-SSN\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.FieldLineage","displayName":"Field lineage","description":"Where a field's value comes from and where it goes, with the route it takes.","columns":[{"name":"Program","description":"The COBOL program."},{"name":"Field","description":"The field the trace started from, qualified by the records containing it."},{"name":"Direction","description":"`SOURCE` for where the value came from, `SINK` for where it goes."},{"name":"Endpoint kind","description":"What the value crosses the program boundary through: a file, a queue, a map, an IMS segment, the terminal, or a called program."},{"name":"Endpoint","description":"The resource name, where the statement names one."},{"name":"Steps","description":"How many assignments separate the field from the endpoint. Zero means the field is read or written directly."},{"name":"Path","description":"The route the value takes, statement by statement. This is what makes the answer reviewable rather than something to be taken on trust."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

