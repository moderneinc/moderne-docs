---
title: "Measure program complexity"
sidebar_label: "Measure program complexity"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Measure program complexity"}
  description={"Measure size and complexity per program: source and comment lines as written and with copybooks inlined, McCabe cyclomatic complexity, statement and paragraph counts, copybook and call coupling, Halstead volume and a maintainability index. The point is triage — which of several thousand programs are the risky, expensive ones, and which are small enough to move without ceremony. Programs crossing thresholds drawn from published operating experience are flagged."}
  fqName={"io.moderne.mainframe.analysis.FindProgramComplexity"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.analysis.FindProgramComplexity"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.analysis.FindProgramComplexity"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/analysis/findprogramcomplexity.md"}
  moderneOnly
>

<RecipeHeader.Title>Measure program complexity</RecipeHeader.Title>

<RecipeHeader.Description>Measure size and complexity per program: source and comment lines as written and with copybooks inlined, McCabe cyclomatic complexity, statement and paragraph counts, copybook and call coupling, Halstead volume and a maintainability index. The point is triage — which of several thousand programs are the risky, expensive ones, and which are small enough to move without ceremony. Programs crossing thresholds drawn from published operating experience are flagged.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.analysis.FindProgramComplexity","displayName":"Measure program complexity","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.ProgramComplexity","displayName":"Program complexity","description":"Size and complexity per program, for ranking a portfolio by risk and effort.","columns":[{"name":"Program","description":"The COBOL program."},{"name":"Cyclomatic complexity","description":"McCabe: one plus every decision the program can take, counting each operand of a compound condition separately."},{"name":"Statements","description":"Procedure division statements."},{"name":"Source lines","description":"Lines of the program as written."},{"name":"Comment lines","description":"Source lines that are comments: an asterisk or slash in the indicator column."},{"name":"Expanded lines","description":"Lines with every copybook inlined where it is copied, which is what the compiler reads. A copybook that was not found adds nothing."},{"name":"Expanded comment lines","description":"Comment lines with every copybook inlined."},{"name":"Paragraphs","description":"Paragraphs declared."},{"name":"Sections","description":"Sections declared."},{"name":"Data items","description":"Data items declared, including those copied in."},{"name":"Copybooks","description":"Distinct copybooks copied in. More than twenty marks a program that is expensive to change, because its shape is set by files it does not own."},{"name":"Calls","description":"Distinct programs called."},{"name":"Halstead volume","description":"Volume over COBOL operators and operands. The absolute value means little; the spread across a portfolio is what ranks programs."},{"name":"Maintainability index","description":"The conventional 171-based index. Below about 65 reads as hard to maintain, below 20 as effectively unmaintainable."},{"name":"Flags","description":"Thresholds crossed, from published operating experience rather than invented: more than 20 copybooks, more than 100 statements per paragraph on average, cyclomatic complexity over 50, or a maintainability index under 65."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

