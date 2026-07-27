---
title: "Wrap Log4j 1.x `MDC.put` values in `String.valueOf(...)`"
sidebar_label: "Wrap Log4j 1.x `MDC.put` values in `String.valueOf(...)`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/slf4j/wraplog4j1mdcputvalueinstringvalueof" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Wrap Log4j 1.x `MDC.put` values in `String.valueOf(...)`"}
  description={"SLF4J `MDC.put(String, String)` requires a `String` value, but Log4j 1.x `MDC.put(String, Object)` accepts any object. Wrap non-`String` values in `String.valueOf(...)`, skipping values already typed `String`, `null` literals, and existing `String.valueOf(...)` calls. Does not change the `org.apache.log4j.MDC` type; compose with a `ChangeType` to complete the migration to `org.slf4j.MDC`."}
  fqName={"org.openrewrite.java.logging.slf4j.WrapLog4j1MdcPutValueInStringValueOf"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/WrapLog4j1MdcPutValueInStringValueOf.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["slf4j","logging","log4j"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.slf4j.WrapLog4j1MdcPutValueInStringValueOf"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.WrapLog4j1MdcPutValueInStringValueOf"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/slf4j/wraplog4j1mdcputvalueinstringvalueof.md"}
>

<RecipeHeader.Title>Wrap Log4j 1.x `MDC.put` values in `String.valueOf(...)`</RecipeHeader.Title>

<RecipeHeader.Description>SLF4J `MDC.put(String, String)` requires a `String` value, but Log4j 1.x `MDC.put(String, Object)` accepts any object. Wrap non-`String` values in `String.valueOf(...)`, skipping values already typed `String`, `null` literals, and existing `String.valueOf(...)` calls. Does not change the `org.apache.log4j.MDC` type; compose with a `ChangeType` to complete the migration to `org.slf4j.MDC`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.log4j.MDC;\n\nimport java.util.Map;\nimport java.util.function.Supplier;\n\nclass Test {\n    void method(Map<String, String> map, Object obj, Throwable t, Supplier<String> supplier, int count) {\n        MDC.put(\"map\", map);\n        MDC.put(\"obj\", obj);\n        MDC.put(\"throwable\", t);\n        MDC.put(\"supplier\", supplier);\n        MDC.put(\"count\", count);\n        MDC.put(\"call\", compute());\n    }\n\n    Object compute() {\n        return new Object();\n    }\n}\n","after":"import org.apache.log4j.MDC;\n\nimport java.util.Map;\nimport java.util.function.Supplier;\n\nclass Test {\n    void method(Map<String, String> map, Object obj, Throwable t, Supplier<String> supplier, int count) {\n        MDC.put(\"map\", String.valueOf(map));\n        MDC.put(\"obj\", String.valueOf(obj));\n        MDC.put(\"throwable\", String.valueOf(t));\n        MDC.put(\"supplier\", String.valueOf(supplier));\n        MDC.put(\"count\", String.valueOf(count));\n        MDC.put(\"call\", String.valueOf(compute()));\n    }\n\n    Object compute() {\n        return new Object();\n    }\n}\n","diff":"@@ -8,6 +8,6 @@\nclass Test {\n    void method(Map<String, String> map, Object obj, Throwable t, Supplier<String> supplier, int count) {\n-       MDC.put(\"map\", map);\n-       MDC.put(\"obj\", obj);\n-       MDC.put(\"throwable\", t);\n-       MDC.put(\"supplier\", supplier);\n-       MDC.put(\"count\", count);\n-       MDC.put(\"call\", compute());\n+       MDC.put(\"map\", String.valueOf(map));\n+       MDC.put(\"obj\", String.valueOf(obj));\n+       MDC.put(\"throwable\", String.valueOf(t));\n+       MDC.put(\"supplier\", String.valueOf(supplier));\n+       MDC.put(\"count\", String.valueOf(count));\n+       MDC.put(\"call\", String.valueOf(compute()));\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.slf4j.WrapLog4j1MdcPutValueInStringValueOf","displayName":"Wrap Log4j 1.x `MDC.put` values in `String.valueOf(...)`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

