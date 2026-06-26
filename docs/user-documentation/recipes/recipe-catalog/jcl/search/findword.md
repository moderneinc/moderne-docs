---
title: "Find matching words in JCL source code"
sidebar_label: "Find matching words in JCL source code"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/jcl/search/findword" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find matching words in JCL source code"}
  description={"Search for JCL words based on a search term."}
  fqName={"org.openrewrite.jcl.search.FindWord"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/moderneinc/rewrite-cobol/blob/main/src/main/java/org/openrewrite/jcl/search/FindWord.java"}
/>

<RecipeHeader
  displayName={"Find matching words in JCL source code"}
  description={"Search for JCL words based on a search term."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.jcl.search.FindWord"}
  artifact={"org.openrewrite:rewrite-cobol"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.jcl.search.FindWord"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/jcl/search/findword.md"}
/>

<OptionsTable options={[{"type":"String","name":"searchTerm","required":true,"description":"A word or regex pattern to find. By default the search term is case insensitive.","example":"SYSOUT or sys.*"},{"type":"Boolean","name":"exactMatch","required":true,"description":"Search for a word based on an exact match of the search term.","example":"true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"searchTerm","value":"DD"},{"parameter":"exactMatch","value":"true"}],"variants":[{"language":"jcl","before":"//JOB1 JOB ,'H.H. MORRILL'\n//SYSPRINT DD SYSOUT=*\n","after":"//JOB1 JOB ,'H.H. MORRILL'\n//SYSPRINT ~~>DD SYSOUT=*\n","diff":"@@ -2,1 +2,1 @@\n//JOB1 JOB ,'H.H. MORRILL'\n-//SYSPRINT DD SYSOUT=*\n+//SYSPRINT ~~>DD SYSOUT=*\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.jcl.search.FindWord","displayName":"Find matching words in JCL source code","groupId":"org.openrewrite","artifactId":"rewrite-cobol","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_COBOL","requiresConfiguration":true,"cliOptions":" --recipe-option \"searchTerm=SYSOUT or sys.*\" --recipe-option \"exactMatch=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.jcl.table.JclWordSearchResult","displayName":"JCL word search results","description":"Words in JCL source code that match the search criteria.","columns":[{"name":"Source path","description":"The source path of the file that contains the matching word."},{"name":"Matched word","description":"The word text that matched the search criteria."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

