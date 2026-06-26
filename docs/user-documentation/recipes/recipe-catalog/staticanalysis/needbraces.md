---
title: "Fix missing braces"
sidebar_label: "Fix missing braces"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/needbraces" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Fix missing braces"}
  description={"Adds missing braces around code such as single-line `if`, `for`, `while`, and `do-while` block bodies. Omitting braces can lead to dangling-statement bugs when additional lines are later added to a block without realizing they fall outside the control structure."}
  fqName={"org.openrewrite.staticanalysis.NeedBraces"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/NeedBraces.java"}
/>

<RecipeHeader
  displayName={"Fix missing braces"}
  description={"Adds missing braces around code such as single-line `if`, `for`, `while`, and `do-while` block bodies. Omitting braces can lead to dangling-statement bugs when additional lines are later added to a block without realizing they fall outside the control structure."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S121"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.NeedBraces"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.NeedBraces"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/needbraces.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    static void addToWhile() {\n        while (true) ;\n    }\n\n    static void addToWhileWithBody() {\n        while (true) return;\n    }\n\n    static void addToIf(int n) {\n        if (n == 1) return;\n        // foo\n    }\n\n    static void addToIfElse(int n) {\n        if (n == 1) return;\n        else return;\n    }\n\n    static void addToIfElseIfElse(int n) {\n        if (n == 1) return;\n        else if (n == 2) return;\n        else return;\n    }\n\n    static void addToDoWhile(Object obj) {\n        do obj.notify(); while (true);\n    }\n\n    static void addToIterativeFor(Object obj) {\n        for (int i = 0; ; ) obj.notify();\n    }\n\n    static void addToForEach(int[] arr) {\n        for (int i : arr) System.out.println(i);\n    }\n}\n","after":"class Test {\n    static void addToWhile() {\n        while (true) {\n        }\n    }\n\n    static void addToWhileWithBody() {\n        while (true) {\n            return;\n        }\n    }\n\n    static void addToIf(int n) {\n        if (n == 1) {\n            return;\n        }\n        // foo\n    }\n\n    static void addToIfElse(int n) {\n        if (n == 1) {\n            return;\n        } else {\n            return;\n        }\n    }\n\n    static void addToIfElseIfElse(int n) {\n        if (n == 1) {\n            return;\n        } else if (n == 2) {\n            return;\n        } else {\n            return;\n        }\n    }\n\n    static void addToDoWhile(Object obj) {\n        do {\n            obj.notify();\n        } while (true);\n    }\n\n    static void addToIterativeFor(Object obj) {\n        for (int i = 0; ; ) {\n            obj.notify();\n        }\n    }\n\n    static void addToForEach(int[] arr) {\n        for (int i : arr) {\n            System.out.println(i);\n        }\n    }\n}\n","diff":"@@ -3,1 +3,2 @@\nclass Test {\n    static void addToWhile() {\n-       while (true) ;\n+       while (true) {\n+       }\n    }\n@@ -7,1 +8,3 @@\n\n    static void addToWhileWithBody() {\n-       while (true) return;\n+       while (true) {\n+           return;\n+       }\n    }\n@@ -11,1 +14,3 @@\n\n    static void addToIf(int n) {\n-       if (n == 1) return;\n+       if (n == 1) {\n+           return;\n+       }\n        // foo\n@@ -16,2 +21,5 @@\n\n    static void addToIfElse(int n) {\n-       if (n == 1) return;\n-       else return;\n+       if (n == 1) {\n+           return;\n+       } else {\n+           return;\n+       }\n    }\n@@ -21,3 +29,7 @@\n\n    static void addToIfElseIfElse(int n) {\n-       if (n == 1) return;\n-       else if (n == 2) return;\n-       else return;\n+       if (n == 1) {\n+           return;\n+       } else if (n == 2) {\n+           return;\n+       } else {\n+           return;\n+       }\n    }\n@@ -27,1 +39,3 @@\n\n    static void addToDoWhile(Object obj) {\n-       do obj.notify(); while (true);\n+       do {\n+           obj.notify();\n+       } while (true);\n    }\n@@ -31,1 +45,3 @@\n\n    static void addToIterativeFor(Object obj) {\n-       for (int i = 0; ; ) obj.notify();\n+       for (int i = 0; ; ) {\n+           obj.notify();\n+       }\n    }\n@@ -35,1 +51,3 @@\n\n    static void addToForEach(int[] arr) {\n-       for (int i : arr) System.out.println(i);\n+       for (int i : arr) {\n+           System.out.println(i);\n+       }\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.NeedBraces","displayName":"Fix missing braces","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

