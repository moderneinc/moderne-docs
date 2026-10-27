---
title: "Analyze the mainframe architecture"
sidebar_label: "Analyze the mainframe architecture"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Analyze the mainframe architecture"}
  description={"Record which programs and procedures each job runs, which data sets it allocates, which copybooks each program is built from, which programs it hands control to, and which CICS resources, DB2 tables and IMS segments it reaches, as one typed edge list anchored at the statement that makes each edge. A program is one written in COBOL, in assembler or in SAS, so the copy members and macros an assembler subroutine is built from and the members a SAS report includes are edges of the same graph. The `Find` recipes answer the same question and mark what they found in the source; this one produces the table and changes nothing, which is what a run whose deliverable is a document needs."}
  fqName={"io.moderne.mainframe.prethink.AnalyzeMainframeArchitecture"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.prethink.AnalyzeMainframeArchitecture"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.prethink.AnalyzeMainframeArchitecture"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/prethink/analyzemainframearchitecture.md"}
  moderneOnly
>

<RecipeHeader.Title>Analyze the mainframe architecture</RecipeHeader.Title>

<RecipeHeader.Description>Record which programs and procedures each job runs, which data sets it allocates, which copybooks each program is built from, which programs it hands control to, and which CICS resources, DB2 tables and IMS segments it reaches, as one typed edge list anchored at the statement that makes each edge. A program is one written in COBOL, in assembler or in SAS, so the copy members and macros an assembler subroutine is built from and the members a SAS report includes are edges of the same graph. The `Find` recipes answer the same question and mark what they found in the source; this one produces the table and changes nothing, which is what a run whose deliverable is a document needs.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.prethink.AnalyzeMainframeArchitecture","displayName":"Analyze the mainframe architecture","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.mainframe.cobol.table.CobolRelationships","displayName":"COBOL relationships","description":"Relationships between different COBOL resources.","columns":[{"name":"Dependent","description":"The resource that defines the relationship."},{"name":"Dependent type","description":"The resource type of the resource that defines the relationship."},{"name":"Action","description":"The action that links the dependent and dependency."},{"name":"Dependency","description":"The resource that is exercised or linked to."},{"name":"Dependency type","description":"The resource type of the resource that is exercised or linked to."},{"name":"Dependency missing","description":"Indicates whether the dependency is a known resource."},{"name":"Action metadata","description":"Additional data about the action."},{"name":"Dependent path","description":"The source file the dependent's statement was written in, or null when the dependent is a name that has no source here."},{"name":"Dependent line","description":"The one-based line the dependent's statement was written on, or null when it has no source here."},{"name":"Dependency path","description":"The source file the dependency was written in, or null when the dependency is a name that has no source here, such as a vendor copybook."},{"name":"Dependency line","description":"The one-based line the dependency's statement was written on, or null when the dependency is a whole file rather than a statement within one."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

