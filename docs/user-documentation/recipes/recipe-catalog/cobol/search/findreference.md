---
title: "Find matching identifiers in COBOL, copybooks, and JCL"
sidebar_label: "Find matching identifiers in COBOL, copybooks, and JCL"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/cobol/search/findreference" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find matching identifiers in COBOL, copybooks, and JCL"}
  description={"Finds an identifier by an exact match or regex pattern in COBOL, copybooks, and/or JCL."}
  fqName={"org.openrewrite.cobol.search.FindReference"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/moderneinc/rewrite-cobol/blob/main/src/main/java/org/openrewrite/cobol/search/FindReference.java"}
/>

<RecipeHeader
  displayName={"Find matching identifiers in COBOL, copybooks, and JCL"}
  description={"Finds an identifier by an exact match or regex pattern in COBOL, copybooks, and/or JCL."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.cobol.search.FindReference"}
  artifact={"org.openrewrite:rewrite-cobol"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.cobol.search.FindReference"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cobol/search/findreference.md"}
/>

<OptionsTable options={[{"type":"String","name":"searchTerm","required":true,"description":"A word or regex pattern to find. By default the search term is case insensitive.","example":"CM102M or cm1.*"},{"type":"Boolean","name":"exactMatch","required":true,"description":"Search for a word based on an exact match of the search term.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.cobol.search.FindReference","displayName":"Find matching identifiers in COBOL, copybooks, and JCL","groupId":"org.openrewrite","artifactId":"rewrite-cobol","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_COBOL","requiresConfiguration":true,"cliOptions":" --recipe-option \"searchTerm=CM102M or cm1.*\" --recipe-option \"exactMatch=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.cobol.table.ReferenceSearchResult","displayName":"COBOL reference search results","description":"Identifier references found in COBOL, copybook, and JCL sources.","columns":[{"name":"Source path","description":"The source path of the file that contains the matching reference."},{"name":"Source type","description":"The type of source where the reference was found."},{"name":"Reference","description":"The identifier text that matched the search criteria."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

