---
title: "Analyze the mainframe a Java source reaches"
sidebar_label: "Analyze the mainframe a Java source reaches"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Analyze the mainframe a Java source reaches"}
  description={"Record the COBOL programs Java calls and the DB2 tables its SQL reads, on the same relationship table the COBOL, batch and scheduler analyses fill, so a program and a table carry their Java callers beside their COBOL ones. Three call shapes are matched, and they are the three real applications write: a JCICS `Program` given a name and linked to; a URL handed to an HTTP client, joined through the z/OS Connect service definition beside it, since the Java says only the path and the definition says which program that path runs; and a SQL statement written as a string, read by the same parser the SQL embedded in COBOL is read by, including one spelled as several literals joined together. A program name held in a constant is followed to the one value that constant holds, and otherwise the row is marked as a name only known at run time. The Java end of every row carries the file and the line it was written on, and the COBOL end carries the file where an analysed repository holds that program. A path written in an annotation is the endpoint the Java serves rather than one it calls, and is not an edge. An operation that names an IMS transaction code rather than a program has no row: nothing here joins a transaction code to the program that runs it. The `Find` recipe answers the same question and marks what it found in the source; this one produces the table and changes nothing."}
  fqName={"io.moderne.mainframe.java.AnalyzeMainframeReferences"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.mainframe.java.AnalyzeMainframeReferences"}
  artifact={"io.moderne.recipe:recipes-mainframe"}
  appLink={"https://app.moderne.io/recipes/io.moderne.mainframe.java.AnalyzeMainframeReferences"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/mainframe/java/analyzemainframereferences.md"}
  moderneOnly
>

<RecipeHeader.Title>Analyze the mainframe a Java source reaches</RecipeHeader.Title>

<RecipeHeader.Description>Record the COBOL programs Java calls and the DB2 tables its SQL reads, on the same relationship table the COBOL, batch and scheduler analyses fill, so a program and a table carry their Java callers beside their COBOL ones. Three call shapes are matched, and they are the three real applications write: a JCICS `Program` given a name and linked to; a URL handed to an HTTP client, joined through the z/OS Connect service definition beside it, since the Java says only the path and the definition says which program that path runs; and a SQL statement written as a string, read by the same parser the SQL embedded in COBOL is read by, including one spelled as several literals joined together. A program name held in a constant is followed to the one value that constant holds, and otherwise the row is marked as a name only known at run time. The Java end of every row carries the file and the line it was written on, and the COBOL end carries the file where an analysed repository holds that program. A path written in an annotation is the endpoint the Java serves rather than one it calls, and is not an edge. An operation that names an IMS transaction code rather than a program has no row: nothing here joins a transaction code to the program that runs it. The `Find` recipe answers the same question and marks what it found in the source; this one produces the table and changes nothing.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.mainframe.java.AnalyzeMainframeReferences","displayName":"Analyze the mainframe a Java source reaches","groupId":"io.moderne.recipe","artifactId":"recipes-mainframe","versionKey":"VERSION_IO_MODERNE_RECIPE_RECIPES_MAINFRAME","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.mainframe.cobol.table.CobolRelationships","displayName":"COBOL relationships","description":"Relationships between different COBOL resources.","columns":[{"name":"Dependent","description":"The resource that defines the relationship."},{"name":"Dependent type","description":"The resource type of the resource that defines the relationship."},{"name":"Action","description":"The action that links the dependent and dependency."},{"name":"Dependency","description":"The resource that is exercised or linked to."},{"name":"Dependency type","description":"The resource type of the resource that is exercised or linked to."},{"name":"Dependency missing","description":"Indicates whether the dependency is a known resource."},{"name":"Action metadata","description":"Additional data about the action."},{"name":"Dependent path","description":"The source file the dependent's statement was written in, or null when the dependent is a name that has no source here."},{"name":"Dependent line","description":"The one-based line the dependent's statement was written on, or null when it has no source here."},{"name":"Dependency path","description":"The source file the dependency was written in, or null when the dependency is a name that has no source here, such as a vendor copybook."},{"name":"Dependency line","description":"The one-based line the dependency's statement was written on, or null when the dependency is a whole file rather than a statement within one."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

