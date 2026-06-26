---
title: "Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`"
sidebar_label: "Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/framework/httpcomponentsclienthttprequestfactoryreadtimeout" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`"}
  description={"`setReadTimeout(..)` was removed in Spring Framework 6.1."}
  fqName={"org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryReadTimeout"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/framework/HttpComponentsClientHttpRequestFactoryReadTimeout.java"}
/>

<RecipeHeader
  displayName={"Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`"}
  description={"`setReadTimeout(..)` was removed in Spring Framework 6.1."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryReadTimeout"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryReadTimeout"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework/httpcomponentsclienthttprequestfactoryreadtimeout.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.hc.core5.http.config.Registry;\nimport org.apache.hc.core5.http.config.RegistryBuilder;\nimport org.apache.hc.client5.http.socket.ConnectionSocketFactory;\nimport org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager;\nimport org.springframework.boot.web.client.RestTemplateBuilder;\nimport org.springframework.http.client.HttpComponentsClientHttpRequestFactory;\nimport org.springframework.web.client.RestTemplate;\n\nclass RestContextInitializer {\n    RestTemplate getRestTemplate() throws Exception {\n        Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create().build();\n        PoolingHttpClientConnectionManager poolingConnectionManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);\n\n        return new RestTemplateBuilder()\n                .requestFactory(() -> {\n                    HttpComponentsClientHttpRequestFactory clientHttpRequestFactory = new HttpComponentsClientHttpRequestFactory();\n                    clientHttpRequestFactory.setReadTimeout(30000);\n                    // ... set poolingConnectionManager on HttpClient\n                    return clientHttpRequestFactory;\n                })\n                .build();\n    }\n}\n","after":"import org.apache.hc.core5.http.config.Registry;\nimport org.apache.hc.core5.http.config.RegistryBuilder;\nimport org.apache.hc.core5.http.io.SocketConfig;\nimport org.apache.hc.client5.http.socket.ConnectionSocketFactory;\nimport org.apache.hc.client5.http.impl.io.PoolingHttpClientConnectionManager;\nimport org.springframework.boot.web.client.RestTemplateBuilder;\nimport org.springframework.http.client.HttpComponentsClientHttpRequestFactory;\nimport org.springframework.web.client.RestTemplate;\n\nimport java.util.concurrent.TimeUnit;\n\nclass RestContextInitializer {\n    RestTemplate getRestTemplate() throws Exception {\n        Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create().build();\n        PoolingHttpClientConnectionManager poolingConnectionManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);\n        poolingConnectionManager.setDefaultSocketConfig(SocketConfig.custom().setSoTimeout(30000, TimeUnit.MILLISECONDS).build());\n\n        return new RestTemplateBuilder()\n                .requestFactory(() -> {\n                    HttpComponentsClientHttpRequestFactory clientHttpRequestFactory = new HttpComponentsClientHttpRequestFactory();\n                    // ... set poolingConnectionManager on HttpClient\n                    return clientHttpRequestFactory;\n                })\n                .build();\n    }\n}\n","diff":"@@ -3,0 +3,1 @@\nimport org.apache.hc.core5.http.config.Registry;\nimport org.apache.hc.core5.http.config.RegistryBuilder;\n+import org.apache.hc.core5.http.io.SocketConfig;\nimport org.apache.hc.client5.http.socket.ConnectionSocketFactory;\n@@ -9,0 +10,2 @@\nimport org.springframework.web.client.RestTemplate;\n\n+import java.util.concurrent.TimeUnit;\n+\nclass RestContextInitializer {\n@@ -13,0 +16,1 @@\n        Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create().build();\n        PoolingHttpClientConnectionManager poolingConnectionManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);\n+       poolingConnectionManager.setDefaultSocketConfig(SocketConfig.custom().setSoTimeout(30000, TimeUnit.MILLISECONDS).build());\n\n@@ -17,1 +21,0 @@\n                .requestFactory(() -> {\n                    HttpComponentsClientHttpRequestFactory clientHttpRequestFactory = new HttpComponentsClientHttpRequestFactory();\n-                   clientHttpRequestFactory.setReadTimeout(30000);\n                    // ... set poolingConnectionManager on HttpClient\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryReadTimeout","displayName":"Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

