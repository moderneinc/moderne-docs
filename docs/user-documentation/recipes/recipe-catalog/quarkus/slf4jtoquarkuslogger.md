---
title: "Migrate SLF4J Logger injection and usage to Quarkus static `Log`"
sidebar_label: "Migrate SLF4J Logger injection and usage to Quarkus static `Log`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/slf4jtoquarkuslogger" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate SLF4J Logger injection and usage to Quarkus static `Log`"}
  description={"Removes usage of SLF4J Logger fields, adjusts imports, and replaces logger method calls with static Quarkus Log calls, including message formatting and method renaming for parameterized logging."}
  fqName={"org.openrewrite.quarkus.Slf4jToQuarkusLogger"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/Slf4jToQuarkusLogger.java"}
/>

<RecipeHeader
  displayName={"Migrate SLF4J Logger injection and usage to Quarkus static `Log`"}
  description={"Removes usage of SLF4J Logger fields, adjusts imports, and replaces logger method calls with static Quarkus Log calls, including message formatting and method renaming for parameterized logging."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.quarkus.Slf4jToQuarkusLogger"}
  artifact={"org.openrewrite.recipe:rewrite-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.Slf4jToQuarkusLogger"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/slf4jtoquarkuslogger.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import jakarta.enterprise.event.Observes;\nimport jakarta.inject.Inject;\nimport org.slf4j.Logger;\n\nclass AppInitializer {\n\n    @Inject\n    Logger logger;\n\n    public void startService(@Observes Object ev) {\n        logger.info(\"My Quarkus App - Starting\");\n    }\n\n    public void stopService(@Observes Object ev) {\n        logger.info(\"My Quarkus App - Stopping\");\n    }\n}\n","after":"import io.quarkus.logging.Log;\nimport jakarta.enterprise.event.Observes;\n\nclass AppInitializer {\n\n    public void startService(@Observes Object ev) {\n        Log.info(\"My Quarkus App - Starting\");\n    }\n\n    public void stopService(@Observes Object ev) {\n        Log.info(\"My Quarkus App - Stopping\");\n    }\n}\n","diff":"@@ -1,0 +1,1 @@\n+import io.quarkus.logging.Log;\nimport jakarta.enterprise.event.Observes;\n@@ -2,2 +3,0 @@\nimport jakarta.enterprise.event.Observes;\n-import jakarta.inject.Inject;\n-import org.slf4j.Logger;\n\n@@ -7,3 +6,0 @@\nclass AppInitializer {\n\n-   @Inject\n-   Logger logger;\n-\n    public void startService(@Observes Object ev) {\n@@ -11,1 +7,1 @@\n\n    public void startService(@Observes Object ev) {\n-       logger.info(\"My Quarkus App - Starting\");\n+       Log.info(\"My Quarkus App - Starting\");\n    }\n@@ -15,1 +11,1 @@\n\n    public void stopService(@Observes Object ev) {\n-       logger.info(\"My Quarkus App - Stopping\");\n+       Log.info(\"My Quarkus App - Stopping\");\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.Slf4jToQuarkusLogger","displayName":"Migrate SLF4J Logger injection and usage to Quarkus static `Log`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

