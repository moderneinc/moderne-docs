---
title: "Add an API dependency for explicit imports"
sidebar_label: "Add an API dependency for explicit imports"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/javax/addapidependencyforimports" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add an API dependency for explicit imports"}
  description={"Add an API dependency to the nearest Maven module importing the package, including imports whose types could not be resolved by the parser because the JDK used to provide them. A module that already has the API in the needed scope, or from a dependency it declares as provided, is left alone."}
  fqName={"org.openrewrite.java.migrate.javax.AddApiDependencyForImports"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/javax/AddApiDependencyForImports.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.javax.AddApiDependencyForImports"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddApiDependencyForImports"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/javax/addapidependencyforimports.md"}
>

<RecipeHeader.Title>Add an API dependency for explicit imports</RecipeHeader.Title>

<RecipeHeader.Description>Add an API dependency to the nearest Maven module importing the package, including imports whose types could not be resolved by the parser because the JDK used to provide them. A module that already has the API in the needed scope, or from a dependency it declares as provided, is left alone.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packageName","required":true,"description":"The package whose imports need the API. A `jakarta` package also matches imports of its `javax` predecessor.","example":"jakarta.xml.bind"},{"type":"String","name":"groupId","required":true,"description":"The group ID of the API dependency.","example":"jakarta.xml.bind"},{"type":"String","name":"artifactId","required":true,"description":"The artifact ID of the API dependency.","example":"jakarta.xml.bind-api"},{"type":"String","name":"version","required":true,"description":"The version of the API dependency to add.","example":"3.0.x"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.javax.AddApiDependencyForImports","displayName":"Add an API dependency for explicit imports","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"packageName=jakarta.xml.bind\" --recipe-option \"groupId=jakarta.xml.bind\" --recipe-option \"artifactId=jakarta.xml.bind-api\" --recipe-option \"version=3.0.x\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

