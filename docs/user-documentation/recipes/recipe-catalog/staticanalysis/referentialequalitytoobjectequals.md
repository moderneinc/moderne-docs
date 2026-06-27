---
title: "Replace referential equality operators with Object equals method invocations when the operands both override `Object.equals(Object obj)`"
sidebar_label: "Replace referential equality operators with Object equals method invocations when the operands both override `Object.equals(Object obj)`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/referentialequalitytoobjectequals" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace referential equality operators with Object equals method invocations when the operands both override `Object.equals(Object obj)`"}
  description={"Using `==` or `!=` compares object references, not the equality of two objects. This modifies code where both sides of a binary operation (`==` or `!=`) override `Object.equals(Object obj)` except when the comparison is within an overridden `Object.equals(Object obj)` method declaration itself. The resulting transformation must be carefully reviewed since any modifications change the program's semantics. When a class defines its own notion of equality through `equals`, using reference comparison is almost always a bug that causes logically identical objects to be treated as different."}
  fqName={"org.openrewrite.staticanalysis.ReferentialEqualityToObjectEquals"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReferentialEqualityToObjectEquals.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1698"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.ReferentialEqualityToObjectEquals"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReferentialEqualityToObjectEquals"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/referentialequalitytoobjectequals.md"}
>

<RecipeHeader.Title>Replace referential equality operators with Object equals method invocations when the operands both override `Object.equals(Object obj)`</RecipeHeader.Title>

<RecipeHeader.Description>Using `==` or `!=` compares object references, not the equality of two objects. This modifies code where both sides of a binary operation (`==` or `!=`) override `Object.equals(Object obj)` except when the comparison is within an overridden `Object.equals(Object obj)` method declaration itself. The resulting transformation must be carefully reviewed since any modifications change the program's semantics. When a class defines its own notion of equality through `equals`, using reference comparison is almost always a bug that causes logically identical objects to be treated as different.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class T {\n    void doSomething() {\n        A a1 = new A();\n        A a2 = new A();\n        if (a1 == a2) {}\n    }\n    class A {\n        @Override\n        public boolean equals(Object anObject) {return true;}\n    }\n}\n","after":"class T {\n    void doSomething() {\n        A a1 = new A();\n        A a2 = new A();\n        if (a1.equals(a2)) {}\n    }\n    class A {\n        @Override\n        public boolean equals(Object anObject) {return true;}\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\n        A a1 = new A();\n        A a2 = new A();\n-       if (a1 == a2) {}\n+       if (a1.equals(a2)) {}\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.ReferentialEqualityToObjectEquals","displayName":"Replace referential equality operators with Object equals method invocations when the operands both override `Object.equals(Object obj)`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

