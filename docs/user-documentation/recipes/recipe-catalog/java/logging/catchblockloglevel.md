---
title: "Catch block log level"
sidebar_label: "Catch block log level"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/catchblockloglevel" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Catch block log level"}
  description={"Sometimes exceptions are caught and logged at the wrong log level. This will set the log level of logging statements within a catch block not containing an exception to \"warn\", and the log level of logging statements containing an exception to \"error\". This supports SLF4J, Log4J1, Log4j2, and Logback."}
  fqName={"org.openrewrite.java.logging.CatchBlockLogLevel"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/CatchBlockLogLevel.java"}
/>

<RecipeHeader
  displayName={"Catch block log level"}
  description={"Sometimes exceptions are caught and logged at the wrong log level. This will set the log level of logging statements within a catch block not containing an exception to \"warn\", and the log level of logging statements containing an exception to \"error\". This supports SLF4J, Log4J1, Log4j2, and Logback."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.CatchBlockLogLevel"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.CatchBlockLogLevel"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/catchblockloglevel.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.log4j.Logger;\n\nclass A {\n    Logger log = Logger.getLogger(A.class);\n    void test() {\n        try {\n            log.info(\"unchanged\");\n            throw new RuntimeException();\n        } catch (Exception e) {\n            log.info(\"Some context\");\n            log.info(\"Caught exception\", e);\n        }\n    }\n}\n","after":"import org.apache.log4j.Logger;\n\nclass A {\n    Logger log = Logger.getLogger(A.class);\n    void test() {\n        try {\n            log.info(\"unchanged\");\n            throw new RuntimeException();\n        } catch (Exception e) {\n            log.warn(\"Some context\");\n            log.error(\"Caught exception\", e);\n        }\n    }\n}\n","diff":"@@ -10,2 +10,2 @@\n            throw new RuntimeException();\n        } catch (Exception e) {\n-           log.info(\"Some context\");\n-           log.info(\"Caught exception\", e);\n+           log.warn(\"Some context\");\n+           log.error(\"Caught exception\", e);\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.CatchBlockLogLevel","displayName":"Catch block log level","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

