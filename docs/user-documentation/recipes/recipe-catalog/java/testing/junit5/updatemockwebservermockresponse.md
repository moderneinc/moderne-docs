---
title: "OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`"
sidebar_label: "OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/junit5/updatemockwebservermockresponse" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`"}
  description={"Replace usages of OkHttp MockWebServer `MockResponse` with 5.x MockWebServer3 `MockResponse` and it's `Builder`."}
  fqName={"org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/UpdateMockWebServerMockResponse.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/junit5/updatemockwebservermockresponse.md"}
>

<RecipeHeader.Title>OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`</RecipeHeader.Title>

<RecipeHeader.Description>Replace usages of OkHttp MockWebServer `MockResponse` with 5.x MockWebServer3 `MockResponse` and it's `Builder`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method invocation return type","href":"/user-documentation/recipes/recipe-catalog/java/changemethodinvocationreturntype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Preserve `MockResponse` return type for `Dispatcher.dispatch()` overrides","href":"/user-documentation/recipes/recipe-catalog/java/testing/junit5/updatemockwebserverdispatcher/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import okhttp3.mockwebserver.MockResponse;\nimport okhttp3.mockwebserver.MockWebServer;\n\nclass ApiUnitTest {\n    private MockWebServer mockWebServer = new MockWebServer();\n    void testGet() {\n        String body = \"{\\\"message\\\":\\\"Hello, World!\\\"}\";\n        mockWebServer.enqueue(new MockResponse()\n                .setHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n                .setBody(body)\n                .setResponseCode(200));\n    }\n}\n","after":"import mockwebserver3.MockResponse;\nimport mockwebserver3.MockWebServer;\n\nclass ApiUnitTest {\n    private MockWebServer mockWebServer = new MockWebServer();\n    void testGet() {\n        String body = \"{\\\"message\\\":\\\"Hello, World!\\\"}\";\n        mockWebServer.enqueue(new MockResponse.Builder()\n                .setHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n                .body(body)\n                .code(200)\n                .build());\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import okhttp3.mockwebserver.MockResponse;\n-import okhttp3.mockwebserver.MockWebServer;\n+import mockwebserver3.MockResponse;\n+import mockwebserver3.MockWebServer;\n\n@@ -8,1 +8,1 @@\n    void testGet() {\n        String body = \"{\\\"message\\\":\\\"Hello, World!\\\"}\";\n-       mockWebServer.enqueue(new MockResponse()\n+       mockWebServer.enqueue(new MockResponse.Builder()\n                .setHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n@@ -10,2 +10,3 @@\n        mockWebServer.enqueue(new MockResponse()\n                .setHeader(\"Content-Type\", \"application/json; charset=utf-8\")\n-               .setBody(body)\n-               .setResponseCode(200));\n+               .body(body)\n+               .code(200)\n+               .build());\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse","displayName":"OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

