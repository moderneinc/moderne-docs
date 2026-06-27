---
title: "Migrate Log4j to SLF4J"
sidebar_label: "Migrate Log4j to SLF4J"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/slf4j/log4jtoslf4j" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Log4j to SLF4J"}
  description={"Migrates usage of Apache Log4j to using SLF4J directly. Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files."}
  fqName={"org.openrewrite.java.logging.slf4j.Log4jToSlf4j"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["slf4j","logging","log4j"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.slf4j.Log4jToSlf4j"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Log4jToSlf4j"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/slf4j/log4jtoslf4j.md"}
>

<RecipeHeader.Title>Migrate Log4j to SLF4J</RecipeHeader.Title>

<RecipeHeader.Description>Migrates usage of Apache Log4j to using SLF4J directly. Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate Log4j 1.x to SLF4J 1.x","href":"/user-documentation/recipes/recipe-catalog/java/logging/slf4j/log4j1toslf4j1/"},{"name":"Loggers should be named for their enclosing classes","href":"/user-documentation/recipes/recipe-catalog/java/logging/slf4j/loggersnamedforenclosingclass/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.slf4j.Log4jToSlf4j","displayName":"Migrate Log4j to SLF4J","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

