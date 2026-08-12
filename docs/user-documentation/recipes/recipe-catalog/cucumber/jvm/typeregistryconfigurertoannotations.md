---
title: "Replace `TypeRegistryConfigurer` with cucumber-java annotations"
sidebar_label: "Replace `TypeRegistryConfigurer` with cucumber-java annotations"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/cucumber/jvm/typeregistryconfigurertoannotations" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `TypeRegistryConfigurer` with cucumber-java annotations"}
  description={"Cucumber-JVM 7.0.0 removed `TypeRegistryConfigurer`; replace implementations with `@ParameterType`, `@DataTableType`, `@DocStringType` and `@Default*Transformer` annotated glue methods. Classes whose `configureTypeRegistry` method cannot be converted in full are left untouched, with a `TODO` comment added above the registration that could not be converted."}
  fqName={"org.openrewrite.cucumber.jvm.TypeRegistryConfigurerToAnnotations"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/java/org/openrewrite/cucumber/jvm/TypeRegistryConfigurerToAnnotations.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.cucumber.jvm.TypeRegistryConfigurerToAnnotations"}
  artifact={"org.openrewrite.recipe:rewrite-cucumber-jvm"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.TypeRegistryConfigurerToAnnotations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cucumber/jvm/typeregistryconfigurertoannotations.md"}
>

<RecipeHeader.Title>Replace `TypeRegistryConfigurer` with cucumber-java annotations</RecipeHeader.Title>

<RecipeHeader.Description>Cucumber-JVM 7.0.0 removed `TypeRegistryConfigurer`; replace implementations with `@ParameterType`, `@DataTableType`, `@DocStringType` and `@Default*Transformer` annotated glue methods. Classes whose `configureTypeRegistry` method cannot be converted in full are left untouched, with a `TODO` comment added above the registration that could not be converted.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.example.app;\n\nimport io.cucumber.core.api.TypeRegistry;\nimport io.cucumber.core.api.TypeRegistryConfigurer;\nimport io.cucumber.cucumberexpressions.ParameterType;\nimport io.cucumber.datatable.DataTableType;\n\nimport java.util.Locale;\nimport java.util.Map;\n\npublic class DataTableConfigurer implements TypeRegistryConfigurer {\n    @Override\n    public Locale locale() {\n        return Locale.ENGLISH;\n    }\n\n    @Override\n    public void configureTypeRegistry(TypeRegistry typeRegistry) {\n        typeRegistry.defineParameterType(new ParameterType<>(\n                \"author\", \"[A-Z][a-z]+\", Author.class, (String name) -> new Author(name)));\n        typeRegistry.defineDataTableType(new DataTableType(\n                Author.class, (Map<String, String> entry) -> new Author(entry.get(\"name\"))));\n    }\n}\n","after":"package com.example.app;\n\nimport io.cucumber.java.DataTableType;\nimport io.cucumber.java.ParameterType;\n\nimport java.util.Map;\n\npublic class DataTableConfigurer {\n    @ParameterType(\"[A-Z][a-z]+\")\n    public Author author(String name) {\n        return new Author(name);\n    }\n\n    @DataTableType\n    public Author author2(Map<String, String> entry) {\n        return new Author(entry.get(\"name\"));\n    }\n}\n","diff":"@@ -3,4 +3,2 @@\npackage com.example.app;\n\n-import io.cucumber.core.api.TypeRegistry;\n-import io.cucumber.core.api.TypeRegistryConfigurer;\n-import io.cucumber.cucumberexpressions.ParameterType;\n-import io.cucumber.datatable.DataTableType;\n+import io.cucumber.java.DataTableType;\n+import io.cucumber.java.ParameterType;\n\n@@ -8,1 +6,0 @@\nimport io.cucumber.datatable.DataTableType;\n\n-import java.util.Locale;\nimport java.util.Map;\n@@ -11,4 +8,4 @@\nimport java.util.Map;\n\n-public class DataTableConfigurer implements TypeRegistryConfigurer {\n-   @Override\n-   public Locale locale() {\n-       return Locale.ENGLISH;\n+public class DataTableConfigurer {\n+   @ParameterType(\"[A-Z][a-z]+\")\n+   public Author author(String name) {\n+       return new Author(name);\n    }\n@@ -17,6 +14,3 @@\n    }\n\n-   @Override\n-   public void configureTypeRegistry(TypeRegistry typeRegistry) {\n-       typeRegistry.defineParameterType(new ParameterType<>(\n-               \"author\", \"[A-Z][a-z]+\", Author.class, (String name) -> new Author(name)));\n-       typeRegistry.defineDataTableType(new DataTableType(\n-               Author.class, (Map<String, String> entry) -> new Author(entry.get(\"name\"))));\n+   @DataTableType\n+   public Author author2(Map<String, String> entry) {\n+       return new Author(entry.get(\"name\"));\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.cucumber.jvm.TypeRegistryConfigurerToAnnotations","displayName":"Replace `TypeRegistryConfigurer` with cucumber-java annotations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-cucumber-jvm","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CUCUMBER_JVM","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

