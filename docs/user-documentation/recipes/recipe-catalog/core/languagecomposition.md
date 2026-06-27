---
title: "Language composition report"
sidebar_label: "Language composition report"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/core/languagecomposition" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Language composition report"}
  description={"Counts the number of lines of the various kinds of source code and data formats parsed by OpenRewrite. Comments are not included in line counts. This recipe emits its results as two data tables, making no changes to any source file. One data table is per-file, the other is per-repository."}
  fqName={"org.openrewrite.LanguageComposition"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-all/blob/main/src/main/java/org/openrewrite/LanguageComposition.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.LanguageComposition"}
  artifact={"org.openrewrite.recipe:rewrite-all"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.LanguageComposition"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/core/languagecomposition.md"}
>

<RecipeHeader.Title>Language composition report</RecipeHeader.Title>

<RecipeHeader.Description>Counts the number of lines of the various kinds of source code and data formats parsed by OpenRewrite. Comments are not included in line counts. This recipe emits its results as two data tables, making no changes to any source file. One data table is per-file, the other is per-repository.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.LanguageComposition","displayName":"Language composition report","groupId":"org.openrewrite.recipe","artifactId":"rewrite-all","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ALL","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.LanguageCompositionPerRepository","displayName":"Language composition report","description":"Counts the number of files and lines of source code in the various formats OpenRewrite knows how to parse.","columns":[{"name":"Language","description":"Language of the source file."},{"name":"File count","description":"Count of files of this language."},{"name":"Line count","description":"Count of lines of this language."}]},{"name":"org.openrewrite.table.LanguageCompositionPerFolder","displayName":"Per-folder language composition report","description":"A list of folders and the language composition and line counts of their contents.","columns":[{"name":"Folder path","description":"The path to the folder relative to repository root."},{"name":"Language","description":"Language of the source file."},{"name":"File count","description":"Count of files of this language."},{"name":"Line count","description":"Count of lines of this language."}]},{"name":"org.openrewrite.table.LanguageCompositionPerFile","displayName":"Per-file language composition report","description":"A list of individual files and their language composition.","columns":[{"name":"Source path","description":"The path to the source file."},{"name":"Language","description":"The language of the source file."},{"name":"LST type","description":"The Lossless Semantic Tree type of this source file."},{"name":"Lines of text","description":"The number of lines of text in the source file. No language-specific knowledge to skip comments, blank lines, or any other non-code line."},{"name":"Has parse failures","description":"True if the file failed to parse, otherwise false."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

