---
title: "Migrate `cucumber.api` to `io.cucumber`"
sidebar_label: "Migrate `cucumber.api` to `io.cucumber`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/cucumber/jvm/cucumberapitoiocucumber" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `cucumber.api` to `io.cucumber`"}
  description={"Cucumber-JVM 5.0.0 moved the `cucumber.api` types to `io.cucumber`, but not as a single package rename: types were spread over `io.cucumber.java`, `io.cucumber.junit`, `io.cucumber.testng`, `io.cucumber.plugin` and `io.cucumber.core`. This recipe maps each `cucumber.api` type onto the package it actually moved to."}
  fqName={"org.openrewrite.cucumber.jvm.CucumberApiToIoCucumber"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/resources/META-INF/rewrite/cucumber.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["cucumber","testing"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.cucumber.jvm.CucumberApiToIoCucumber"}
  artifact={"org.openrewrite.recipe:rewrite-cucumber-jvm"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.CucumberApiToIoCucumber"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cucumber/jvm/cucumberapitoiocucumber.md"}
>

<RecipeHeader.Title>Migrate `cucumber.api` to `io.cucumber`</RecipeHeader.Title>

<RecipeHeader.Description>Cucumber-JVM 5.0.0 moved the `cucumber.api` types to `io.cucumber`, but not as a single package rename: types were spread over `io.cucumber.java`, `io.cucumber.junit`, `io.cucumber.testng`, `io.cucumber.plugin` and `io.cucumber.core`. This recipe maps each `cucumber.api` type onto the package it actually moved to.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate `cucumber.api.CucumberOptions` to `io.cucumber.testng.CucumberOptions`","href":"/user-documentation/recipes/recipe-catalog/cucumber/jvm/cucumberoptionstotestngcucumberoptions/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.example.app;\n\nimport cucumber.api.TypeRegistry;\nimport cucumber.api.TypeRegistryConfigurer;\n\nimport java.util.Locale;\n\npublic class DataTableConfigurer implements TypeRegistryConfigurer {\n    @Override\n    public Locale locale() {\n        return Locale.ENGLISH;\n    }\n\n    @Override\n    public void configureTypeRegistry(TypeRegistry typeRegistry) {\n    }\n}\n","after":"package com.example.app;\n\nimport io.cucumber.core.api.TypeRegistry;\nimport io.cucumber.core.api.TypeRegistryConfigurer;\n\nimport java.util.Locale;\n\npublic class DataTableConfigurer implements TypeRegistryConfigurer {\n    @Override\n    public Locale locale() {\n        return Locale.ENGLISH;\n    }\n\n    @Override\n    public void configureTypeRegistry(TypeRegistry typeRegistry) {\n    }\n}\n","diff":"@@ -3,2 +3,2 @@\npackage com.example.app;\n\n-import cucumber.api.TypeRegistry;\n-import cucumber.api.TypeRegistryConfigurer;\n+import io.cucumber.core.api.TypeRegistry;\n+import io.cucumber.core.api.TypeRegistryConfigurer;\n\n","newFile":false}]},{"variants":[{"language":"java","before":"package com.example.app;\n\nimport cucumber.api.TypeRegistry;\nimport cucumber.api.TypeRegistryConfigurer;\n\nimport java.util.Locale;\n\npublic class DataTableConfigurer implements TypeRegistryConfigurer {\n    @Override\n    public Locale locale() {\n        return Locale.ENGLISH;\n    }\n\n    @Override\n    public void configureTypeRegistry(TypeRegistry typeRegistry) {\n    }\n}\n","after":"package com.example.app;\n\nimport io.cucumber.core.api.TypeRegistry;\nimport io.cucumber.core.api.TypeRegistryConfigurer;\n\nimport java.util.Locale;\n\npublic class DataTableConfigurer implements TypeRegistryConfigurer {\n    @Override\n    public Locale locale() {\n        return Locale.ENGLISH;\n    }\n\n    @Override\n    public void configureTypeRegistry(TypeRegistry typeRegistry) {\n    }\n}\n","diff":"@@ -3,2 +3,2 @@\npackage com.example.app;\n\n-import cucumber.api.TypeRegistry;\n-import cucumber.api.TypeRegistryConfigurer;\n+import io.cucumber.core.api.TypeRegistry;\n+import io.cucumber.core.api.TypeRegistryConfigurer;\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.cucumber.jvm.CucumberApiToIoCucumber","displayName":"Migrate `cucumber.api` to `io.cucumber`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-cucumber-jvm","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CUCUMBER_JVM","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

