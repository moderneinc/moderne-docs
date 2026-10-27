---
title: "Assess the impact of a copybook change"
sidebar_label: "Assess the impact of a copybook change"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Assess the impact of a copybook change"}
  description={"For every program that copies a copybook, report what it does with each field and what those fields reach there. A copybook is the closest thing a COBOL portfolio has to a shared schema, and changing one is the change teams are least able to size: the answer is not the list of programs that copy it but the much shorter list that actually use the fields being changed. Fields reported as unused are the difference between the two."}
  fqName={"io.moderne.mainframe.lineage.FindCopybookImpact"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.lineage.FindCopybookImpact"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.lineage.FindCopybookImpact"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/lineage/findcopybookimpact.md"}
  moderneOnly
>

<RecipeHeader.Title>Assess the impact of a copybook change</RecipeHeader.Title>

<RecipeHeader.Description>For every program that copies a copybook, report what it does with each field and what those fields reach there. A copybook is the closest thing a COBOL portfolio has to a shared schema, and changing one is the change teams are least able to size: the answer is not the list of programs that copy it but the much shorter list that actually use the fields being changed. Fields reported as unused are the difference between the two.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"copybook","required":true,"description":"The copybook to assess, matched against the name as written in the `COPY` statement. Accepts a regular expression.","example":"CVACT01Y"},{"type":"String","name":"fieldName","required":false,"description":"Restricts the assessment to fields matching this regular expression. Defaults to every field the copybook declares.","example":"ACCT-.*"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.lineage.FindCopybookImpact","displayName":"Assess the impact of a copybook change","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":true,"cliOptions":" --recipe-option \"copybook=CVACT01Y\"","optionalCliOptions":" --recipe-option \"fieldName=ACCT-.*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.CopybookImpact","displayName":"Copybook impact","description":"Every program that copies a copybook, what it does with each field, and what those fields reach there.","columns":[{"name":"Copybook","description":"The copybook the field is declared in."},{"name":"Field","description":"The field, qualified by the records containing it."},{"name":"Picture","description":"The picture as written in this program. A field whose picture differs between programs is not one field, whatever the copybook says."},{"name":"Program","description":"A program that copies the copybook."},{"name":"Usage","description":"`READ`, `WRITTEN`, `BOTH`, or `UNUSED` where the program copies the field and never touches it. Unused is the common case and the useful one: it is what makes a copybook change smaller than it looks."},{"name":"Endpoints","description":"What the field reaches in this program — the files, queues, maps and IMS segments a change to it would be visible at."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

