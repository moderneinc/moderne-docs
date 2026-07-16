---
title: "Migrate Log4j 1.x MDC to SLF4J MDC"
sidebar_label: "Migrate Log4j 1.x MDC to SLF4J MDC"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/slf4j/log4j1toslf4jmdc" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Log4j 1.x MDC to SLF4J MDC"}
  description={"Migrates `org.apache.log4j.MDC` to `org.slf4j.MDC`, wrapping non-`String` `put` values in `String.valueOf(...)` and converting `getContext()` to `getCopyOfContextMap()`."}
  fqName={"org.openrewrite.java.logging.slf4j.Log4j1ToSlf4jMdc"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["slf4j","logging","log4j"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.slf4j.Log4j1ToSlf4jMdc"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Log4j1ToSlf4jMdc"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/slf4j/log4j1toslf4jmdc.md"}
>

<RecipeHeader.Title>Migrate Log4j 1.x MDC to SLF4J MDC</RecipeHeader.Title>

<RecipeHeader.Description>Migrates `org.apache.log4j.MDC` to `org.slf4j.MDC`, wrapping non-`String` `put` values in `String.valueOf(...)` and converting `getContext()` to `getCopyOfContextMap()`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Wrap Log4j 1.x `MDC.put` values in `String.valueOf(...)`","href":"/user-documentation/recipes/recipe-catalog/java/logging/slf4j/wraplog4j1mdcputvalueinstringvalueof/"},{"name":"Convert Log4j 1.x `MDC.getContext()` to `getCopyOfContextMap()`","href":"/user-documentation/recipes/recipe-catalog/java/logging/slf4j/log4j1mdcgetcontexttocopyofcontextmap/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.log4j.MDC;\n\nimport java.util.Hashtable;\n\nclass Test {\n    void method(Object value, String text) {\n        MDC.put(\"obj\", value);\n        MDC.put(\"text\", text);\n        MDC.put(\"literal\", \"v\");\n        Hashtable context = MDC.getContext();\n        MDC.remove(\"obj\");\n        MDC.clear();\n    }\n}\n","after":"import org.slf4j.MDC;\n\nimport java.util.Map;\n\nclass Test {\n    void method(Object value, String text) {\n        MDC.put(\"obj\", String.valueOf(value));\n        MDC.put(\"text\", text);\n        MDC.put(\"literal\", \"v\");\n        Map<String, String> context = MDC.getCopyOfContextMap();\n        MDC.remove(\"obj\");\n        MDC.clear();\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.apache.log4j.MDC;\n+import org.slf4j.MDC;\n\n@@ -3,1 +3,1 @@\nimport org.apache.log4j.MDC;\n\n-import java.util.Hashtable;\n+import java.util.Map;\n\n@@ -7,1 +7,1 @@\nclass Test {\n    void method(Object value, String text) {\n-       MDC.put(\"obj\", value);\n+       MDC.put(\"obj\", String.valueOf(value));\n        MDC.put(\"text\", text);\n@@ -10,1 +10,1 @@\n        MDC.put(\"text\", text);\n        MDC.put(\"literal\", \"v\");\n-       Hashtable context = MDC.getContext();\n+       Map<String, String> context = MDC.getCopyOfContextMap();\n        MDC.remove(\"obj\");\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.apache.log4j.MDC;\n\nimport java.util.Hashtable;\n\nclass Test {\n    void method(Object value, String text) {\n        MDC.put(\"obj\", value);\n        MDC.put(\"text\", text);\n        MDC.put(\"literal\", \"v\");\n        Hashtable context = MDC.getContext();\n        MDC.remove(\"obj\");\n        MDC.clear();\n    }\n}\n","after":"import org.slf4j.MDC;\n\nimport java.util.Map;\n\nclass Test {\n    void method(Object value, String text) {\n        MDC.put(\"obj\", String.valueOf(value));\n        MDC.put(\"text\", text);\n        MDC.put(\"literal\", \"v\");\n        Map<String, String> context = MDC.getCopyOfContextMap();\n        MDC.remove(\"obj\");\n        MDC.clear();\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.apache.log4j.MDC;\n+import org.slf4j.MDC;\n\n@@ -3,1 +3,1 @@\nimport org.apache.log4j.MDC;\n\n-import java.util.Hashtable;\n+import java.util.Map;\n\n@@ -7,1 +7,1 @@\nclass Test {\n    void method(Object value, String text) {\n-       MDC.put(\"obj\", value);\n+       MDC.put(\"obj\", String.valueOf(value));\n        MDC.put(\"text\", text);\n@@ -10,1 +10,1 @@\n        MDC.put(\"text\", text);\n        MDC.put(\"literal\", \"v\");\n-       Hashtable context = MDC.getContext();\n+       Map<String, String> context = MDC.getCopyOfContextMap();\n        MDC.remove(\"obj\");\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.slf4j.Log4j1ToSlf4jMdc","displayName":"Migrate Log4j 1.x MDC to SLF4J MDC","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

