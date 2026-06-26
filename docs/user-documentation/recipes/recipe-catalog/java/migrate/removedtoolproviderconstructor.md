---
title: "Change `javax.tools.ToolProvider` methods calls to static"
sidebar_label: "Change `javax.tools.ToolProvider` methods calls to static"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/removedtoolproviderconstructor" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change `javax.tools.ToolProvider` methods calls to static"}
  description={"The `javax.tools.ToolProvider()` constructor has been removed in Java SE 16 since the class only contains static methods. The recipe converts `javax.tools.ToolProvider getSystemJavaCompiler()`, `javax.tools.ToolProvider getSystemDocumentationTool()` and `javax.tools.ToolProvider getSystemToolClassLoader()` to static methods."}
  fqName={"org.openrewrite.java.migrate.RemovedToolProviderConstructor"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-17.yml"}
/>

<RecipeHeader
  displayName={"Change `javax.tools.ToolProvider` methods calls to static"}
  description={"The `javax.tools.ToolProvider()` constructor has been removed in Java SE 16 since the class only contains static methods. The recipe converts `javax.tools.ToolProvider getSystemJavaCompiler()`, `javax.tools.ToolProvider getSystemDocumentationTool()` and `javax.tools.ToolProvider getSystemToolClassLoader()` to static methods."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.RemovedToolProviderConstructor"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.RemovedToolProviderConstructor"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/removedtoolproviderconstructor.md"}
/>

<RecipeList recipes={[{"name":"Change method target to static","href":"java/changemethodtargettostatic"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import javax.tools.ToolProvider;\nimport javax.tools.JavaCompiler;\nimport javax.tools.DocumentationTool;\nimport java.lang.ClassLoader;\n\nclass RemovedToolProviderConstructorApp {\n     void test() throws Exception {\n         ToolProvider tp = null;\n         JavaCompiler compiler = tp.getSystemJavaCompiler();\n         DocumentationTool dT = tp.getSystemDocumentationTool();\n         ClassLoader cl = tp.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n         tp.getSystemJavaCompiler().getSourceVersions();\n     }\n}\n","after":"import javax.tools.ToolProvider;\nimport javax.tools.JavaCompiler;\nimport javax.tools.DocumentationTool;\nimport java.lang.ClassLoader;\n\nclass RemovedToolProviderConstructorApp {\n     void test() throws Exception {\n         ToolProvider tp = null;\n         JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();\n         DocumentationTool dT = ToolProvider.getSystemDocumentationTool();\n         ClassLoader cl = ToolProvider.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n         ToolProvider.getSystemJavaCompiler().getSourceVersions();\n     }\n}\n","diff":"@@ -9,3 +9,3 @@\n     void test() throws Exception {\n         ToolProvider tp = null;\n-        JavaCompiler compiler = tp.getSystemJavaCompiler();\n-        DocumentationTool dT = tp.getSystemDocumentationTool();\n-        ClassLoader cl = tp.getSystemToolClassLoader();\n+        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();\n+        DocumentationTool dT = ToolProvider.getSystemDocumentationTool();\n+        ClassLoader cl = ToolProvider.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n@@ -13,1 +13,1 @@\n         ClassLoader cl = tp.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n-        tp.getSystemJavaCompiler().getSourceVersions();\n+        ToolProvider.getSystemJavaCompiler().getSourceVersions();\n     }\n","newFile":false}]},{"variants":[{"language":"java","before":"import javax.tools.ToolProvider;\nimport javax.tools.JavaCompiler;\nimport javax.tools.DocumentationTool;\nimport java.lang.ClassLoader;\n\nclass RemovedToolProviderConstructorApp {\n     void test() throws Exception {\n         ToolProvider tp = null;\n         JavaCompiler compiler = tp.getSystemJavaCompiler();\n         DocumentationTool dT = tp.getSystemDocumentationTool();\n         ClassLoader cl = tp.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n         tp.getSystemJavaCompiler().getSourceVersions();\n     }\n}\n","after":"import javax.tools.ToolProvider;\nimport javax.tools.JavaCompiler;\nimport javax.tools.DocumentationTool;\nimport java.lang.ClassLoader;\n\nclass RemovedToolProviderConstructorApp {\n     void test() throws Exception {\n         ToolProvider tp = null;\n         JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();\n         DocumentationTool dT = ToolProvider.getSystemDocumentationTool();\n         ClassLoader cl = ToolProvider.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n         ToolProvider.getSystemJavaCompiler().getSourceVersions();\n     }\n}\n","diff":"@@ -9,3 +9,3 @@\n     void test() throws Exception {\n         ToolProvider tp = null;\n-        JavaCompiler compiler = tp.getSystemJavaCompiler();\n-        DocumentationTool dT = tp.getSystemDocumentationTool();\n-        ClassLoader cl = tp.getSystemToolClassLoader();\n+        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();\n+        DocumentationTool dT = ToolProvider.getSystemDocumentationTool();\n+        ClassLoader cl = ToolProvider.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n@@ -13,1 +13,1 @@\n         ClassLoader cl = tp.getSystemToolClassLoader();\n         System.out.println(ToolProvider.getSystemJavaCompiler());\n-        tp.getSystemJavaCompiler().getSourceVersions();\n+        ToolProvider.getSystemJavaCompiler().getSourceVersions();\n     }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.RemovedToolProviderConstructor","displayName":"Change `javax.tools.ToolProvider` methods calls to static","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

