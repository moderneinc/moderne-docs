---
title: "Rename methods named `hashcode`, `equal`, or `tostring`"
sidebar_label: "Rename methods named `hashcode`, `equal`, or `tostring`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/renamemethodsnamedhashcodeequalortostring" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename methods named `hashcode`, `equal`, or `tostring`"}
  description={"Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive. These near-miss names are almost certainly spelling mistakes that silently introduce a new method instead of overriding the intended one."}
  fqName={"org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameMethodsNamedHashcodeEqualOrToString.java"}
/>

<RecipeHeader
  displayName={"Rename methods named `hashcode`, `equal`, or `tostring`"}
  description={"Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive. These near-miss names are almost certainly spelling mistakes that silently introduce a new method instead of overriding the intended one."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1221"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/renamemethodsnamedhashcodeequalortostring.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"interface ITest {\n    int HASHcoDE();\n\n    boolean equal(Object obj);\n\n    String tostring();\n}\n\nclass Test {\n    public int hashcode() {\n        return 0;\n    }\n\n    public boolean equal(Object obj) {\n        return false;\n    }\n\n    public String tostring() {\n        return \"\";\n    }\n}\n","after":"interface ITest {\n    int hashCode();\n\n    boolean equals(Object obj);\n\n    String toString();\n}\n\nclass Test {\n    public int hashCode() {\n        return 0;\n    }\n\n    public boolean equals(Object obj) {\n        return false;\n    }\n\n    public String toString() {\n        return \"\";\n    }\n}\n","diff":"@@ -2,1 +2,1 @@\ninterface ITest {\n-   int HASHcoDE();\n+   int hashCode();\n\n@@ -4,1 +4,1 @@\n    int HASHcoDE();\n\n-   boolean equal(Object obj);\n+   boolean equals(Object obj);\n\n@@ -6,1 +6,1 @@\n    boolean equal(Object obj);\n\n-   String tostring();\n+   String toString();\n}\n@@ -10,1 +10,1 @@\n\nclass Test {\n-   public int hashcode() {\n+   public int hashCode() {\n        return 0;\n@@ -14,1 +14,1 @@\n    }\n\n-   public boolean equal(Object obj) {\n+   public boolean equals(Object obj) {\n        return false;\n@@ -18,1 +18,1 @@\n    }\n\n-   public String tostring() {\n+   public String toString() {\n        return \"\";\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString","displayName":"Rename methods named `hashcode`, `equal`, or `tostring`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

