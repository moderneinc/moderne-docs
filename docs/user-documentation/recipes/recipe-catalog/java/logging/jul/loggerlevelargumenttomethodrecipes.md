---
title: "Replace JUL Level arguments with the corresponding method calls"
sidebar_label: "Replace JUL Level arguments with the corresponding method calls"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/jul/loggerlevelargumenttomethodrecipes" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace JUL Level arguments with the corresponding method calls"}
  description={"Replace calls to `Logger.log(Level, String)` with the corresponding method calls."}
  fqName={"org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/jul/LoggerLevelArgumentToMethod.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes.md"}
>

<RecipeHeader.Title>Replace JUL Level arguments with the corresponding method calls</RecipeHeader.Title>

<RecipeHeader.Description>Replace calls to `Logger.log(Level, String)` with the corresponding method calls.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace JUL `Logger.log(Level.FINEST, String)` with `Logger.finest(String)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesttomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.FINEST, Supplier<String>)` with `Logger.finest(Supplier<String>)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinestsuppliertomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.FINER, String)` with `Logger.finer(String)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinertomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.FINER, Supplier<String>)` with `Logger.finer(Supplier<String>)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinersuppliertomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.FINE, String)` with `Logger.fine(String)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinetomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.FINE, Supplier<String>)` with `Logger.fine(Supplier<String>)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesuppliertomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.INFO, String)` with `Logger.info(String)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfotomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.INFO, Supplier<String>)` with `Logger.info(Supplier<String>)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfosuppliertomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.WARNING, String)` with `Logger.warning(String)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningtomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.WARNING, Supplier<String>)` with `Logger.warning(Supplier<String>)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningsuppliertomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.SEVERE, String)` with `Logger.severe(String)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveretomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.SEVERE, Supplier<String>)` with `Logger.severe(Supplier<String>)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveresuppliertomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.CONFIG, String)` with `Logger.config(String)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigtomethodrecipe/"},{"name":"Replace JUL `Logger.log(Level.CONFIG, Supplier<String>)` with `Logger.config(Supplier<String>)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigsuppliertomethodrecipe/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.logging.Level;\nimport java.util.logging.Logger;\n\nclass Test {\n    void test(Logger logger, String message) {\n        logger.log(Level.FINEST, message);\n        logger.log(Level.FINER, message);\n        logger.log(Level.FINE, message);\n        logger.log(Level.INFO, message);\n        logger.log(Level.WARNING, message);\n        logger.log(Level.SEVERE, message);\n        logger.log(Level.CONFIG, message);\n    }\n}\n","after":"import java.util.logging.Logger;\n\nclass Test {\n    void test(Logger logger, String message) {\n        logger.finest(message);\n        logger.finer(message);\n        logger.fine(message);\n        logger.info(message);\n        logger.warning(message);\n        logger.severe(message);\n        logger.config(message);\n    }\n}\n","diff":"@@ -1,1 +1,0 @@\n-import java.util.logging.Level;\nimport java.util.logging.Logger;\n@@ -6,7 +5,7 @@\nclass Test {\n    void test(Logger logger, String message) {\n-       logger.log(Level.FINEST, message);\n-       logger.log(Level.FINER, message);\n-       logger.log(Level.FINE, message);\n-       logger.log(Level.INFO, message);\n-       logger.log(Level.WARNING, message);\n-       logger.log(Level.SEVERE, message);\n-       logger.log(Level.CONFIG, message);\n+       logger.finest(message);\n+       logger.finer(message);\n+       logger.fine(message);\n+       logger.info(message);\n+       logger.warning(message);\n+       logger.severe(message);\n+       logger.config(message);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes","displayName":"Replace JUL Level arguments with the corresponding method calls","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

