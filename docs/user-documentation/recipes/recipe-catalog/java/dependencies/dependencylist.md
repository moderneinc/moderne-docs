---
title: "Dependency report"
sidebar_label: "Dependency report"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/dependencylist" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Dependency report"}
  description={"Emits a data table detailing all Gradle and Maven dependencies. This recipe makes no changes to any source file."}
  fqName={"org.openrewrite.java.dependencies.DependencyList"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/DependencyList.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.DependencyList"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyList"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/dependencylist.md"}
>

<RecipeHeader.Title>Dependency report</RecipeHeader.Title>

<RecipeHeader.Description>Emits a data table detailing all Gradle and Maven dependencies. This recipe makes no changes to any source file.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Scope","name":"scope","required":false,"description":"The scope of the dependencies to include in the report.Defaults to \"Compile\"","example":"Compile"},{"type":"boolean","name":"includeTransitive","required":false,"description":"Whether or not to include transitive dependencies in the report. Defaults to including only direct dependencies.Defaults to false.","example":"true"},{"type":"boolean","name":"validateResolvable","required":false,"description":"When enabled the recipe will attempt to download every dependency it encounters, reporting on any failures. This can be useful for identifying dependencies that have become unavailable since an LST was produced.Defaults to false.","example":"true"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.DependencyList","displayName":"Dependency report","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.dependencies.table.DependencyListReport","displayName":"Dependency report","description":"Lists all Gradle and Maven dependencies","columns":[{"name":"Build tool","description":"The build tool used to manage dependencies (Gradle or Maven)."},{"name":"Group id","description":"The Group ID of the Gradle project or Maven module requesting the dependency."},{"name":"Artifact id","description":"The Artifact ID of the Gradle project or Maven module requesting the dependency."},{"name":"Version","description":"The version of Gradle project or Maven module requesting the dependency."},{"name":"Dependency group id","description":"The Group ID of the dependency."},{"name":"Dependency artifact id","description":"The Artifact ID of the dependency."},{"name":"Dependency version","description":"The version of the dependency."},{"name":"Direct Dependency","description":"When `true` the project directly depends on the dependency. When `false` the project depends on the dependency transitively through at least one direct dependency."},{"name":"Resolution failure","description":"The reason why the dependency could not be resolved. Blank when resolution was not attempted."}]},{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

