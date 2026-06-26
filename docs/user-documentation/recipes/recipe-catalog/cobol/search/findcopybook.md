---
title: "Find copybook usage"
sidebar_label: "Find copybook usage"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/cobol/search/findcopybook" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find copybook usage"}
  description={"Find all copy statements with the copybook name."}
  fqName={"org.openrewrite.cobol.search.FindCopybook"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/moderneinc/rewrite-cobol/blob/main/src/main/java/org/openrewrite/cobol/search/FindCopybook.java"}
/>

<RecipeHeader
  displayName={"Find copybook usage"}
  description={"Find all copy statements with the copybook name."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.cobol.search.FindCopybook"}
  artifact={"org.openrewrite:rewrite-cobol"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.cobol.search.FindCopybook"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cobol/search/findcopybook.md"}
/>

<OptionsTable options={[{"type":"String","name":"copybookName","required":false,"description":"The copybook name to search for. If not provided, all copy statements will be returned.","example":"KP008"},{"type":"Boolean","name":"onlyMissingCopybooks","required":false,"description":"Only find copy statements and exec sql include statements that are missing copybooks.","example":"True"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"copybookName","value":"INCEPTION"},{"parameter":"onlyMissingCopybooks","value":"false"}],"variants":[{"language":"cobol","before":"000000 IDENTIFICATION DIVISION.                                         *\n       PROGRAM-ID. IC109A.                                              *\n       DATA DIVISION.                                                   *\n       LINKAGE SECTION.                                                 *\n           01  GRP-01.                                                  *\n               COPY INCEPTION.                                          *\n","after":"000000 IDENTIFICATION DIVISION.                                         *\n       PROGRAM-ID. IC109A.                                              *\n       DATA DIVISION.                                                   *\n       LINKAGE SECTION.                                                 *\n           01  GRP-01.                                                  *\n               COPY ~~>INCEPTION.                                          *\n","diff":"@@ -6,1 +6,1 @@\n       LINKAGE SECTION.                                                 *\n           01  GRP-01.                                                  *\n-              COPY INCEPTION.                                          *\n+              COPY ~~>INCEPTION.                                          *\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.cobol.search.FindCopybook","displayName":"Find copybook usage","groupId":"org.openrewrite","artifactId":"rewrite-cobol","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_COBOL","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.cobol.table.CopybookSource","displayName":"Copybook source information","description":"Information about copybook references in a COBOL source.","columns":[{"name":"Source path","description":"The source path of the file that contains the copy statement."},{"name":"Copybook name","description":"The copybook name from a copy statement in a COBOL source."},{"name":"Copybook source path","description":"The source path of the copybook that was resolved during resolution of copybooks."},{"name":"Resolution status","description":"The status of the resolved copybook in a copy statement."},{"name":"Marked word","description":"The current word being visited from the post-processed LST."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

