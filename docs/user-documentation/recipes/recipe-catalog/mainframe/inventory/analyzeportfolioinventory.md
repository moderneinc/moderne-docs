---
title: "Count each application's files by type"
sidebar_label: "Count each application's files by type"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Count each application's files by type"}
  description={"Report how many files of each type every application supplied and how many lines they hold, one row per application and type, which is the shape an inventory report is read in and what a volumetry check reconciles against. Every file counts under one type, so the counts add up to the files received: a data set has no file of its own and a map lives in its map set's file, so `ComponentIndex` names both and neither is a file here. A file no parser could read is not counted either, and `CheckParseQuality` is what says which. Comment lines are counted where each language marks them — column 7 of COBOL and of a copybook, a JCL card beginning `//*`, column 1 of BMS and the control cards."}
  fqName={"io.moderne.mainframe.inventory.AnalyzePortfolioInventory"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.inventory.AnalyzePortfolioInventory"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.inventory.AnalyzePortfolioInventory"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/inventory/analyzeportfolioinventory.md"}
  moderneOnly
>

<RecipeHeader.Title>Count each application's files by type</RecipeHeader.Title>

<RecipeHeader.Description>Report how many files of each type every application supplied and how many lines they hold, one row per application and type, which is the shape an inventory report is read in and what a volumetry check reconciles against. Every file counts under one type, so the counts add up to the files received: a data set has no file of its own and a map lives in its map set's file, so `ComponentIndex` names both and neither is a file here. A file no parser could read is not counted either, and `CheckParseQuality` is what says which. Comment lines are counted where each language marks them — column 7 of COBOL and of a copybook, a JCL card beginning `//*`, column 1 of BMS and the control cards.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.inventory.AnalyzePortfolioInventory","displayName":"Count each application's files by type","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.PortfolioInventory","displayName":"Portfolio inventory","description":"How many files of each type each application supplied, and how many lines they hold. One row per application and type, which is the shape a files-received summary is read in.","columns":[{"name":"Application","description":"The top folder of the path, which is the repository an application is supplied as. Empty for a file at the root, which belongs to no application."},{"name":"Component type","description":"What the files are, in the types of `ComponentIndex`: `PROGRAM`, `COPYBOOK`, `JCL_JOB`, `JCL_PROC`, `JCL_INCLUDE` for a JCL member that is neither, `CONTROL_CARD`, `BMS_MAPSET`, `CONTROL_M_SCHEDULE` or `JAVA_CLASS`. A data set and a map have no file of their own, so neither has a row here."},{"name":"Files","description":"How many files. Every file counts under one type, so the column adds up to the files the application supplied."},{"name":"Lines","description":"Lines in those files as written, copybooks counted where they live rather than where they are copied."},{"name":"Comment lines","description":"How many of those lines are comments: an asterisk or a slash in column 7 of COBOL and of a copybook, a JCL card beginning `//*`, an asterisk in column 1 of BMS and the control cards, a `//` line or a line of a `/*` block in Java. A Control-M export writes none."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

