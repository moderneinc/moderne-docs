---
title: "Convert Log4j 1.x `MDC.getContext()` to `getCopyOfContextMap()`"
sidebar_label: "Convert Log4j 1.x `MDC.getContext()` to `getCopyOfContextMap()`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/logging/slf4j/log4j1mdcgetcontexttocopyofcontextmap" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert Log4j 1.x `MDC.getContext()` to `getCopyOfContextMap()`"}
  description={"Renames Log4j 1.x `org.apache.log4j.MDC.getContext()` (returns `Hashtable`) to `getCopyOfContextMap()` (returns `Map`) at every call site, and retypes any `Hashtable` declaration — local variable, field, method parameter, or method return type — that receives the result, whether initialized directly from the call, directly assigned it in a later statement, or returning it, to `Map<String, String>`, since `Map` is not assignable to `Hashtable`. Retyping a parameter or return type changes the method's signature; overriding methods are left unchanged to avoid breaking the override, so they need a manual fix. Does not change the `org.apache.log4j.MDC` type; compose with a `ChangeType` to complete the migration."}
  fqName={"org.openrewrite.java.logging.slf4j.Log4j1MdcGetContextToCopyOfContextMap"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/Log4j1MdcGetContextToCopyOfContextMap.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["slf4j","logging","log4j"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.logging.slf4j.Log4j1MdcGetContextToCopyOfContextMap"}
  artifact={"org.openrewrite.recipe:rewrite-logging-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Log4j1MdcGetContextToCopyOfContextMap"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/logging/slf4j/log4j1mdcgetcontexttocopyofcontextmap.md"}
>

<RecipeHeader.Title>Convert Log4j 1.x `MDC.getContext()` to `getCopyOfContextMap()`</RecipeHeader.Title>

<RecipeHeader.Description>Renames Log4j 1.x `org.apache.log4j.MDC.getContext()` (returns `Hashtable`) to `getCopyOfContextMap()` (returns `Map`) at every call site, and retypes any `Hashtable` declaration — local variable, field, method parameter, or method return type — that receives the result, whether initialized directly from the call, directly assigned it in a later statement, or returning it, to `Map<String, String>`, since `Map` is not assignable to `Hashtable`. Retyping a parameter or return type changes the method's signature; overriding methods are left unchanged to avoid breaking the override, so they need a manual fix. Does not change the `org.apache.log4j.MDC` type; compose with a `ChangeType` to complete the migration.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.log4j.MDC;\n\nimport java.util.Hashtable;\n\nclass Test {\n    Hashtable field = MDC.getContext();\n\n    static void method() {\n        Hashtable local = MDC.getContext();\n        final Hashtable finalLocal = MDC.getContext();\n        Hashtable<String, String> parameterized = MDC.getContext();\n        Hashtable a = MDC.getContext(), b = a;\n        Hashtable assignedLater;\n        assignedLater = MDC.getContext();\n        Hashtable other = new Hashtable();\n    }\n\n    Hashtable returnsContext() {\n        return MDC.getContext();\n    }\n\n    static void reassignParam(Hashtable param) {\n        param = MDC.getContext();\n    }\n}\n","after":"import org.apache.log4j.MDC;\n\nimport java.util.Hashtable;\nimport java.util.Map;\n\nclass Test {\n    Map<String, String> field = MDC.getCopyOfContextMap();\n\n    static void method() {\n        Map<String, String> local = MDC.getCopyOfContextMap();\n        final Map<String, String> finalLocal = MDC.getCopyOfContextMap();\n        Map<String, String> parameterized = MDC.getCopyOfContextMap();\n        Map<String, String> a = MDC.getCopyOfContextMap(), b = a;\n        Map<String, String> assignedLater;\n        assignedLater = MDC.getCopyOfContextMap();\n        Hashtable other = new Hashtable();\n    }\n\n    Map<String, String> returnsContext() {\n        return MDC.getCopyOfContextMap();\n    }\n\n    static void reassignParam(Map<String, String> param) {\n        param = MDC.getCopyOfContextMap();\n    }\n}\n","diff":"@@ -4,0 +4,1 @@\n\nimport java.util.Hashtable;\n+import java.util.Map;\n\n@@ -6,1 +7,1 @@\n\nclass Test {\n-   Hashtable field = MDC.getContext();\n+   Map<String, String> field = MDC.getCopyOfContextMap();\n\n@@ -9,6 +10,6 @@\n\n    static void method() {\n-       Hashtable local = MDC.getContext();\n-       final Hashtable finalLocal = MDC.getContext();\n-       Hashtable<String, String> parameterized = MDC.getContext();\n-       Hashtable a = MDC.getContext(), b = a;\n-       Hashtable assignedLater;\n-       assignedLater = MDC.getContext();\n+       Map<String, String> local = MDC.getCopyOfContextMap();\n+       final Map<String, String> finalLocal = MDC.getCopyOfContextMap();\n+       Map<String, String> parameterized = MDC.getCopyOfContextMap();\n+       Map<String, String> a = MDC.getCopyOfContextMap(), b = a;\n+       Map<String, String> assignedLater;\n+       assignedLater = MDC.getCopyOfContextMap();\n        Hashtable other = new Hashtable();\n@@ -18,2 +19,2 @@\n    }\n\n-   Hashtable returnsContext() {\n-       return MDC.getContext();\n+   Map<String, String> returnsContext() {\n+       return MDC.getCopyOfContextMap();\n    }\n@@ -22,2 +23,2 @@\n    }\n\n-   static void reassignParam(Hashtable param) {\n-       param = MDC.getContext();\n+   static void reassignParam(Map<String, String> param) {\n+       param = MDC.getCopyOfContextMap();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.logging.slf4j.Log4j1MdcGetContextToCopyOfContextMap","displayName":"Convert Log4j 1.x `MDC.getContext()` to `getCopyOfContextMap()`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-logging-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

