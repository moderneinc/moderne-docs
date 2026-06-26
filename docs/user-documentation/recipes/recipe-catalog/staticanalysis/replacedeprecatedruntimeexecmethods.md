---
title: "Replace deprecated `Runtime#exec()` methods"
sidebar_label: "Replace deprecated `Runtime#exec()` methods"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/replacedeprecatedruntimeexecmethods" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace deprecated `Runtime#exec()` methods"}
  description={"Replace `Runtime#exec(String)` methods to use `exec(String[])` instead because the former is deprecated after Java 18 and is no longer recommended for use by the Java documentation."}
  fqName={"org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReplaceDeprecatedRuntimeExecMethods.java"}
/>

<RecipeHeader
  displayName={"Replace deprecated `Runtime#exec()` methods"}
  description={"Replace `Runtime#exec(String)` methods to use `exec(String[])` instead because the former is deprecated after Java 18 and is no longer recommended for use by the Java documentation."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/replacedeprecatedruntimeexecmethods.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.io.File;\nimport java.io.IOException;\n\nclass A {\n    void method() throws IOException {\n        Runtime runtime = Runtime.getRuntime();\n        String[] envp = { \"E1=1\", \"E2=2\"};\n        File dir = new File(\"/tmp\");\n\n        Process process1 = runtime.exec(\"ls -a -l\");\n        Process process2 = runtime.exec(\"ls -a -l\", envp);\n        Process process3 = runtime.exec(\"ls -a -l\", envp, dir);\n    }\n}\n","after":"import java.io.File;\nimport java.io.IOException;\n\nclass A {\n    void method() throws IOException {\n        Runtime runtime = Runtime.getRuntime();\n        String[] envp = { \"E1=1\", \"E2=2\"};\n        File dir = new File(\"/tmp\");\n\n        Process process1 = runtime.exec(new String[]{\"ls\", \"-a\", \"-l\"});\n        Process process2 = runtime.exec(new String[]{\"ls\", \"-a\", \"-l\"}, envp);\n        Process process3 = runtime.exec(new String[]{\"ls\", \"-a\", \"-l\"}, envp, dir);\n    }\n}\n","diff":"@@ -10,3 +10,3 @@\n        File dir = new File(\"/tmp\");\n\n-       Process process1 = runtime.exec(\"ls -a -l\");\n-       Process process2 = runtime.exec(\"ls -a -l\", envp);\n-       Process process3 = runtime.exec(\"ls -a -l\", envp, dir);\n+       Process process1 = runtime.exec(new String[]{\"ls\", \"-a\", \"-l\"});\n+       Process process2 = runtime.exec(new String[]{\"ls\", \"-a\", \"-l\"}, envp);\n+       Process process3 = runtime.exec(new String[]{\"ls\", \"-a\", \"-l\"}, envp, dir);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.ReplaceDeprecatedRuntimeExecMethods","displayName":"Replace deprecated `Runtime#exec()` methods","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

