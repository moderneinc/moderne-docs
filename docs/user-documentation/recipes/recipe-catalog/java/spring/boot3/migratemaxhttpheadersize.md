---
title: "Rename `server.max-http-header-size` to `server.max-http-request-header-size`"
sidebar_label: "Rename `server.max-http-header-size` to `server.max-http-request-header-size`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot3/migratemaxhttpheadersize" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename `server.max-http-header-size` to `server.max-http-request-header-size`"}
  description={"Previously, the server.max-http-header-size was treated inconsistently across the four supported embedded web servers. When using Jetty, Netty, or Undertow it would configure the max HTTP request header size. When using Tomcat it would configure the max HTTP request and response header sizes. The renamed property is used to configure the http request header size in Spring Boot 3.0. **To limit the max header size of an HTTP response on Tomcat or Jetty (the only two servers that support such a setting), use a `WebServerFactoryCustomizer`**."}
  fqName={"org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml"}
/>

<RecipeHeader
  displayName={"Rename `server.max-http-header-size` to `server.max-http-request-header-size`"}
  description={"Previously, the server.max-http-header-size was treated inconsistently across the four supported embedded web servers. When using Jetty, Netty, or Undertow it would configure the max HTTP request header size. When using Tomcat it would configure the max HTTP request and response header sizes. The renamed property is used to configure the http request header size in Spring Boot 3.0. **To limit the max header size of an HTTP response on Tomcat or Jetty (the only two servers that support such a setting), use a `WebServerFactoryCustomizer`**."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["spring","boot"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot3/migratemaxhttpheadersize.md"}
/>

<RecipeList recipes={[{"name":"Change the key of a Spring application property","href":"java/spring/changespringpropertykey"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"test"},"variants":[{"language":"properties","before":"# application.properties\nserver.max-http-header-size=10KB\n","after":"# application.properties\nserver.max-http-request-header-size=10KB\n","diff":"--- src/main/resources/application.properties\n+++ src/main/resources/application.properties\n@@ -2,1 +2,1 @@\n# application.properties\n-server.max-http-header-size=10KB\n+server.max-http-request-header-size=10KB\n\n","newFile":false},{"language":"yaml","before":"    server:\n      max-http-header-size: 10KB\n","after":"    server:\n      max-http-request-header-size: 10KB\n","diff":"--- src/main/resources/application.yml\n+++ src/main/resources/application.yml\n@@ -2,1 +2,1 @@\n    server:\n-     max-http-header-size: 10KB\n+     max-http-request-header-size: 10KB\n\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"test"},"variants":[{"language":"properties","before":"# application.properties\nserver.max-http-header-size=10KB\n","after":"# application.properties\nserver.max-http-request-header-size=10KB\n","diff":"--- src/main/resources/application.properties\n+++ src/main/resources/application.properties\n@@ -2,1 +2,1 @@\n# application.properties\n-server.max-http-header-size=10KB\n+server.max-http-request-header-size=10KB\n\n","newFile":false},{"language":"yaml","before":"    server:\n      max-http-header-size: 10KB\n","after":"    server:\n      max-http-request-header-size: 10KB\n","diff":"--- src/main/resources/application.yml\n+++ src/main/resources/application.yml\n@@ -2,1 +2,1 @@\n    server:\n-     max-http-header-size: 10KB\n+     max-http-request-header-size: 10KB\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize","displayName":"Rename `server.max-http-header-size` to `server.max-http-request-header-size`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

