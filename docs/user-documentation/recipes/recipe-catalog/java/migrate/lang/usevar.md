---
title: "Use local variable type inference"
sidebar_label: "Use local variable type inference"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/lang/usevar" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use local variable type inference"}
  description={"Apply local variable type inference (`var`) for primitives and objects. These recipes can cause unused imports, be advised to run `org.openrewrite.java.RemoveUnusedImports afterwards."}
  fqName={"org.openrewrite.java.migrate.lang.UseVar"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-lang-var.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["refactoring","var","java10"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.lang.UseVar"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.lang.UseVar"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/lang/usevar.md"}
>

<RecipeHeader.Title>Use local variable type inference</RecipeHeader.Title>

<RecipeHeader.Description>Apply local variable type inference (`var`) for primitives and objects. These recipes can cause unused imports, be advised to run `org.openrewrite.java.RemoveUnusedImports afterwards.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Use `var` for reference-typed variables","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforobject/"},{"name":"Use `var` for variables initialized with type casts","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarfortypecast/"},{"name":"Use `var` for constructor call assignments","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforconstructors/"},{"name":"Use `var` for primitive and String variables","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforprimitive/"},{"name":"Apply `var` to Generic Constructors","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforgenericsconstructors/"},{"name":"Apply `var` to generic method invocations","href":"/user-documentation/recipes/recipe-catalog/java/migrate/lang/var/usevarforgenericmethodinvocations/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.example.app;\n\nclass A {\n  void m() {\n      String str = \"I am a value\";\n  }\n}\n","after":"package com.example.app;\n\nclass A {\n  void m() {\n      var str = \"I am a value\";\n  }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass A {\n  void m() {\n-     String str = \"I am a value\";\n+     var str = \"I am a value\";\n  }\n","newFile":false}]},{"variants":[{"language":"java","before":"package com.example.app;\n\nimport java.util.List;\nimport java.util.ArrayList;\n\nclass A {\n  void m() {\n      List<String> strs = new ArrayList<>();\n  }\n}\n","after":"package com.example.app;\n\nimport java.util.ArrayList;\n\nclass A {\n  void m() {\n      var strs = new ArrayList<String>();\n  }\n}\n","diff":"@@ -3,1 +3,0 @@\npackage com.example.app;\n\n-import java.util.List;\nimport java.util.ArrayList;\n@@ -8,1 +7,1 @@\nclass A {\n  void m() {\n-     List<String> strs = new ArrayList<>();\n+     var strs = new ArrayList<String>();\n  }\n","newFile":false}]},{"variants":[{"language":"java","before":"package com.example.app;\n\nclass A {\n  void m() {\n      String str = \"I am a value\";\n  }\n}\n","after":"package com.example.app;\n\nclass A {\n  void m() {\n      var str = \"I am a value\";\n  }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass A {\n  void m() {\n-     String str = \"I am a value\";\n+     var str = \"I am a value\";\n  }\n","newFile":false}]},{"variants":[{"language":"java","before":"package com.example.app;\n\nimport java.util.List;\nimport java.util.ArrayList;\n\nclass A {\n  void m() {\n      List<String> strs = new ArrayList<>();\n  }\n}\n","after":"package com.example.app;\n\nimport java.util.ArrayList;\n\nclass A {\n  void m() {\n      var strs = new ArrayList<String>();\n  }\n}\n","diff":"@@ -3,1 +3,0 @@\npackage com.example.app;\n\n-import java.util.List;\nimport java.util.ArrayList;\n@@ -8,1 +7,1 @@\nclass A {\n  void m() {\n-     List<String> strs = new ArrayList<>();\n+     var strs = new ArrayList<String>();\n  }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.lang.UseVar","displayName":"Use local variable type inference","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

