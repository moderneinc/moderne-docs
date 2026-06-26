---
title: "Explicit initialization"
sidebar_label: "Explicit initialization"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/explicitinitialization" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Explicit initialization"}
  description={"Checks if any class or object member is explicitly initialized to default for its type value:\n - `null` for object references\n - zero for numeric types and `char`\n - and `false` for `boolean`\nRemoves explicit initializations where they aren't necessary. Since the JVM already guarantees these defaults, restating them adds visual noise and can obscure fields that are intentionally initialized to non-default values."}
  fqName={"org.openrewrite.staticanalysis.ExplicitInitialization"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ExplicitInitialization.java"}
/>

<RecipeHeader
  displayName={"Explicit initialization"}
  description={"Checks if any class or object member is explicitly initialized to default for its type value:\n - `null` for object references\n - zero for numeric types and `char`\n - and `false` for `boolean`\nRemoves explicit initializations where they aren't necessary. Since the JVM already guarantees these defaults, restating them adds visual noise and can obscure fields that are intentionally initialized to non-default values."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S3052"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.ExplicitInitialization"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ExplicitInitialization"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/explicitinitialization.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    private int a = 0;\n    private long b = 0L;\n    private short c = 0;\n    private int d = 1;\n    private long e = 2L;\n    private int f;\n    private char g = '\\0';\n\n    private boolean h = false;\n    private boolean i = true;\n\n    private Object j = new Object();\n    private Object k = null;\n\n    int[] l = null;\n    int[] m = new int[0];\n\n    private final Long n = null;\n}\n","after":"class Test {\n    private int a;\n    private long b;\n    private short c;\n    private int d = 1;\n    private long e = 2L;\n    private int f;\n    private char g;\n\n    private boolean h;\n    private boolean i = true;\n\n    private Object j = new Object();\n    private Object k;\n\n    int[] l;\n    int[] m = new int[0];\n\n    private final Long n = null;\n}\n","diff":"@@ -2,3 +2,3 @@\nclass Test {\n-   private int a = 0;\n-   private long b = 0L;\n-   private short c = 0;\n+   private int a;\n+   private long b;\n+   private short c;\n    private int d = 1;\n@@ -8,1 +8,1 @@\n    private long e = 2L;\n    private int f;\n-   private char g = '\\0';\n+   private char g;\n\n@@ -10,1 +10,1 @@\n    private char g = '\\0';\n\n-   private boolean h = false;\n+   private boolean h;\n    private boolean i = true;\n@@ -14,1 +14,1 @@\n\n    private Object j = new Object();\n-   private Object k = null;\n+   private Object k;\n\n@@ -16,1 +16,1 @@\n    private Object k = null;\n\n-   int[] l = null;\n+   int[] l;\n    int[] m = new int[0];\n","newFile":false}]},{"variants":[{"language":"java","before":"class A {\n    // C#: int? a\n    Nullable<Integer> a = null;\n    // C#: int? a = 0\n    Nullable<Integer> a = new Nullable<>(0);\n}\n","after":"class A {\n    // C#: int? a\n    Nullable<Integer> a;\n    // C#: int? a = 0\n    Nullable<Integer> a = new Nullable<>(0);\n}\n","diff":"@@ -3,1 +3,1 @@\nclass A {\n    // C#: int? a\n-   Nullable<Integer> a = null;\n+   Nullable<Integer> a;\n    // C#: int? a = 0\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.ExplicitInitialization","displayName":"Explicit initialization","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

