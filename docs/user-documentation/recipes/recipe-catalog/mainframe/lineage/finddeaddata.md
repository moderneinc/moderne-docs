---
title: "Find dead data"
sidebar_label: "Find dead data"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find dead data"}
  description={"Find declared fields that nothing reads, and fields written but never read back. Carrying data nobody uses is the cheapest thing to drop from a migration, and unused fields accumulate over decades because nothing makes them visible. Reading is counted through the record structure — a field read as part of a group move counts — and includes being tested in a condition, which moves no value. FILE and LINKAGE items are excluded, since something outside the program supplies and consumes them."}
  fqName={"io.moderne.mainframe.lineage.FindDeadData"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.lineage.FindDeadData"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.lineage.FindDeadData"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/lineage/finddeaddata.md"}
  moderneOnly
>

<RecipeHeader.Title>Find dead data</RecipeHeader.Title>

<RecipeHeader.Description>Find declared fields that nothing reads, and fields written but never read back. Carrying data nobody uses is the cheapest thing to drop from a migration, and unused fields accumulate over decades because nothing makes them visible. Reading is counted through the record structure — a field read as part of a group move counts — and includes being tested in a condition, which moves no value. FILE and LINKAGE items are excluded, since something outside the program supplies and consumes them.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"includeCopybookFields","required":false,"description":"Whether to report fields copied in from a copybook. They are off by default because a field unused here is often used by another program copying the same book, and only a portfolio-wide answer can tell them apart. Defaults to false."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.lineage.FindDeadData","displayName":"Find dead data","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"includeCopybookFields=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.DeadData","displayName":"Dead data","description":"Declared fields that nothing reads, and fields written but never read back.","columns":[{"name":"Program","description":"The COBOL program."},{"name":"Field","description":"The field, qualified by the records containing it."},{"name":"Section","description":"Where it is declared. LINKAGE and FILE items are read and written by something outside this program, so they are reported separately rather than treated as unused."},{"name":"Verdict","description":"`UNUSED` for a field neither read nor written; `DEAD_STORE` for one written but never read back."},{"name":"Picture","description":"The declared picture, for sizing what would be saved by dropping it."},{"name":"Copybook","description":"The copybook the field came from, where it came from one. A field dead in this program may well be live in another that copies the same book, so a copybook field is only safe to drop once every program is checked."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

