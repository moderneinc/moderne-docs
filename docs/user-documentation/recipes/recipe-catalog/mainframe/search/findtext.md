---
title: "Find a search term in the source or by name"
sidebar_label: "Find a search term in the source or by name"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find a search term in the source or by name"}
  description={"Report every place a search term matches, with the file and the line, and mark each one in the source. The interactive search is the trigram index the CLI builds, and this is not a second engine: it is the same question asked so that the answer can be counted and exported, which is what a parity run against an existing search tool compares. What it has that an index over printed text does not is the tree — a literal continued across a column-7 break is one string, a comment is text rather than a line to skip, and a variable name resolves to the item, so a search for a quoted name finds where it is used and not where it is declared. Searching by name instead finds the declaration: a data name nothing in the program refers to is not a result, and a `SET` of a level-88 condition refers to the item it is declared under. Names of programs, copybooks and the other components are `FindNames`, which types them; this reports the identifiers and the text."}
  fqName={"io.moderne.mainframe.search.FindText"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.search.FindText"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.search.FindText"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/search/findtext.md"}
  moderneOnly
>

<RecipeHeader.Title>Find a search term in the source or by name</RecipeHeader.Title>

<RecipeHeader.Description>Report every place a search term matches, with the file and the line, and mark each one in the source. The interactive search is the trigram index the CLI builds, and this is not a second engine: it is the same question asked so that the answer can be counted and exported, which is what a parity run against an existing search tool compares. What it has that an index over printed text does not is the tree — a literal continued across a column-7 break is one string, a comment is text rather than a line to skip, and a variable name resolves to the item, so a search for a quoted name finds where it is used and not where it is declared. Searching by name instead finds the declaration: a data name nothing in the program refers to is not a result, and a `SET` of a level-88 condition refers to the item it is declared under. Names of programs, copybooks and the other components are `FindNames`, which types them; this reports the identifiers and the text.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"searchTerm","required":true,"description":"What to look for. A term matches whole tokens, and a period, a hyphen and an underscore each end one, so `ACCT` finds `WS-ACCT-ID` and `ACC` finds nothing. Terms separated by a space are alternatives and a hit on any of them is a hit; quotes make one phrase of what they hold, matched in order and across a line break, a comment's asterisks and a column-7 continuation. A quoted variable name asks where the variable is used, so the declaration is left out.","example":"\"open input\" close"},{"type":"String","name":"mode","required":false,"description":"`SOURCE` to search the text a program is written in, which finds every occurrence, or `NAME` to search the names it declares, which finds the declaration. Defaults to `SOURCE`."},{"type":"String","name":"scope","required":false,"description":"Which layer of the text to read: `ALL`, `SOURCE_WITHOUT_COMMENTS`, `COMMENTS_ONLY`, `STRINGS_AND_LITERALS`, or `DOCUMENTATION` for the run book members and nothing else. Defaults to `ALL`. Outside COBOL a line is code or comment and nothing finer, so a scope of strings and literals finds nothing in JCL, BMS or a control card."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"io.moderne.mainframe.search.FindText","displayName":"Find a search term in the source or by name","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":true,"cliOptions":" --recipe-option \"searchTerm=\"open input\" close\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.mainframe.analysis.table.SearchMatches","displayName":"Search matches","description":"Every place a search term matches, with the line it is on. Core `TextMatches` says which file matched and what the match read; a parity count is compared per member and per line, which is what this adds.","columns":[{"name":"Source path","description":"The file the match is in. A match in a copybook belongs to the copybook, not to the programs that copy it."},{"name":"Line","description":"The line within the source path, counted from 1, or 0 where the match could not be placed. A phrase continued across a column-7 break is reported on the line it starts on."},{"name":"Layer","description":"The text the match is in: `CODE`, `COMMENT`, `STRING_LITERAL` or `NUMERIC_LITERAL`. Outside COBOL a line is code or comment and nothing finer, so a scope of strings and literals finds nothing there."},{"name":"Match","description":"The tokens that matched, as written and separated by a space. A phrase reads as one match however many lines it was written across."},{"name":"Context","description":"The line the match is on, as written."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

