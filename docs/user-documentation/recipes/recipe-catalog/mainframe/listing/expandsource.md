---
title: "Expand copybooks and procedures"
sidebar_label: "Expand copybooks and procedures"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Expand copybooks and procedures"}
  description={"Report every COBOL program and every job line by line as it runs rather than as it was written: each `COPY` and `EXEC SQL INCLUDE` replaced by what it brings in with `REPLACING` applied, each procedure and INCLUDE member exploded between `//*+` lines with its DD overrides merged in and its symbols filled in. Every line says which member supplied it, which is what tells a line somebody can change in this file from a line that belongs to a copybook thirty programs share.\n\nBoth expansions happened at parse time and nothing is read a second time: a copied word carries the copybook that wrote it and a resolved body is part of the job's tree, so this is a second printing of the same tree. The tree itself is untouched and still prints back byte for byte the way the file was written, which is what makes the two readings comparable rather than a substitute for one another."}
  fqName={"io.moderne.mainframe.listing.ExpandSource"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.listing.ExpandSource"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.listing.ExpandSource"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/listing/expandsource.md"}
  moderneOnly
>

<RecipeHeader.Title>Expand copybooks and procedures</RecipeHeader.Title>

<RecipeHeader.Description>

Report every COBOL program and every job line by line as it runs rather than as it was written: each `COPY` and `EXEC SQL INCLUDE` replaced by what it brings in with `REPLACING` applied, each procedure and INCLUDE member exploded between `//*+` lines with its DD overrides merged in and its symbols filled in. Every line says which member supplied it, which is what tells a line somebody can change in this file from a line that belongs to a copybook thirty programs share.

Both expansions happened at parse time and nothing is read a second time: a copied word carries the copybook that wrote it and a resolved body is part of the job's tree, so this is a second printing of the same tree. The tree itself is untouched and still prints back byte for byte the way the file was written, which is what makes the two readings comparable rather than a substitute for one another.

</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"writeExpandedSource","required":false,"description":"Write each expansion beside the file it came from as `<name>.expanded`. A job is written as a deck that could be submitted; a program is written as a listing, numbered over the expansion with the member each line came from beside the number, since it holds both a `COPY` statement and what the statement brought in and so was never a deck. Off by default, because a portfolio's expansion is larger than the portfolio."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.listing.ExpandSource","displayName":"Expand copybooks and procedures","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"writeExpandedSource=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.ExpandedSource","displayName":"Expanded source","description":"A program or job line by line as it runs rather than as it was written: every copybook in place with `REPLACING` applied, every procedure and INCLUDE member exploded and every symbol filled in, each line saying which member supplied it.","columns":[{"name":"Source path","description":"The program or job the expansion is of. A copybook and a procedure are expanded where they are used, so they have rows only when read on their own."},{"name":"Line","description":"The line within the expanded source, counted from 1. It is not the line of the file: a copybook of thirty lines moves everything after it down by thirty."},{"name":"Expanded line","description":"The line as it runs. For COBOL that is the card as the compiler reads it, columns and all; for JCL it is the card with its symbols substituted and its DD overrides merged in, less the sequence numbers in columns 73-80, which belong to the member and not to the job."},{"name":"Provenance","description":"The copybook, procedure or INCLUDE member the line came from, empty for a line the file wrote itself. A copybook that copies another names the inner one, which is the file somebody changing the line would open."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

