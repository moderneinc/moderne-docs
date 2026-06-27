---
title: "Enhances logging of exceptions by including the full stack trace in addition to the exception message"
sidebar_label: "Enhances logging of exceptions by including the full stack trace in addition to the exception message"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/slf4j/completeexceptionlogging" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Enhances logging of exceptions by including the full stack trace in addition to the exception message"}
  description={"It is a common mistake to call `Exception.getMessage()` when passing an exception into a log method. Not all exception types have useful messages, and even if the message is useful this omits the stack trace. Including a complete stack trace of the error along with the exception message in the log allows developers to better understand the context of the exception and identify the source of the error more quickly and accurately. \nIf the method invocation includes any call to `Exception.getMessage()` or `Exception.getLocalizedMessage()` and not an exception is already passed as the last parameter to the log method, then we will append the exception as the last parameter in the log method. Additionally, if an exception is passed directly as a format argument that fills a `{}` placeholder, the placeholder is removed so that the exception is treated as the trailing argument, ensuring the full stack trace is logged."}
  fqName={"org.openrewrite.java.logging.slf4j.CompleteExceptionLogging"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/CompleteExceptionLogging.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["slf4j","logging"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.slf4j.CompleteExceptionLogging"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.CompleteExceptionLogging"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/slf4j/completeexceptionlogging.md"}
>

<RecipeHeader.Title>Enhances logging of exceptions by including the full stack trace in addition to the exception message</RecipeHeader.Title>

<RecipeHeader.Description>It is a common mistake to call `Exception.getMessage()` when passing an exception into a log method. Not all exception types have useful messages, and even if the message is useful this omits the stack trace. Including a complete stack trace of the error along with the exception message in the log allows developers to better understand the context of the exception and identify the source of the error more quickly and accurately.  If the method invocation includes any call to `Exception.getMessage()` or `Exception.getLocalizedMessage()` and not an exception is already passed as the last parameter to the log method, then we will append the exception as the last parameter in the log method. Additionally, if an exception is passed directly as a format argument that fills a `{}` placeholder, the placeholder is removed so that the exception is treated as the trailing argument, ensuring the full stack trace is logged.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nclass Test {\n    Logger logger = LoggerFactory.getLogger(Test.class);\n    void doSomething() {\n        try {\n            Integer num = Integer.valueOf(\"a\");\n        } catch (NumberFormatException e) {\n            // TEST CASE #1:\n            logger.error(e.getMessage());\n\n            // TEST CASE #2:\n            logger.error(\"BEFORE MESSAGE \" + e.getMessage());\n\n            // TEST CASE #3:\n            logger.error(\"BEFORE MESSAGE \" + e.getMessage() + \" AFTER MESSAGE\");\n\n            // TEST CASE #4: No Changes, since stack trace already being logged\n            logger.error(\"BEFORE MESSAGE \" + e.getMessage() + \" AFTER MESSAGE\", e);\n        }\n    }\n}\n","after":"\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nclass Test {\n    Logger logger = LoggerFactory.getLogger(Test.class);\n    void doSomething() {\n        try {\n            Integer num = Integer.valueOf(\"a\");\n        } catch (NumberFormatException e) {\n            // TEST CASE #1:\n            logger.error(\"\", e);\n\n            // TEST CASE #2:\n            logger.error(\"BEFORE MESSAGE \" + e.getMessage(), e);\n\n            // TEST CASE #3:\n            logger.error(\"BEFORE MESSAGE \" + e.getMessage() + \" AFTER MESSAGE\", e);\n\n            // TEST CASE #4: No Changes, since stack trace already being logged\n            logger.error(\"BEFORE MESSAGE \" + e.getMessage() + \" AFTER MESSAGE\", e);\n        }\n    }\n}\n","diff":"@@ -1,0 +1,1 @@\n+\nimport org.slf4j.Logger;\n@@ -11,1 +12,1 @@\n        } catch (NumberFormatException e) {\n            // TEST CASE #1:\n-           logger.error(e.getMessage());\n+           logger.error(\"\", e);\n\n@@ -14,1 +15,1 @@\n\n            // TEST CASE #2:\n-           logger.error(\"BEFORE MESSAGE \" + e.getMessage());\n+           logger.error(\"BEFORE MESSAGE \" + e.getMessage(), e);\n\n@@ -17,1 +18,1 @@\n\n            // TEST CASE #3:\n-           logger.error(\"BEFORE MESSAGE \" + e.getMessage() + \" AFTER MESSAGE\");\n+           logger.error(\"BEFORE MESSAGE \" + e.getMessage() + \" AFTER MESSAGE\", e);\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.slf4j.CompleteExceptionLogging","displayName":"Enhances logging of exceptions by including the full stack trace in addition to the exception message","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

