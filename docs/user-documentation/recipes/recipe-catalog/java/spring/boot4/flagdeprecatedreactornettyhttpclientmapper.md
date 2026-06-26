---
title: "Flag deprecated ReactorNettyHttpClientMapper for migration"
sidebar_label: "Flag deprecated ReactorNettyHttpClientMapper for migration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Flag deprecated ReactorNettyHttpClientMapper for migration"}
  description={"Adds a TODO comment to classes implementing the deprecated `ReactorNettyHttpClientMapper` interface. Migration to `ClientHttpConnectorBuilderCustomizer<ReactorClientHttpConnectorBuilder>` requires wrapping the HttpClient configuration in `builder.withHttpClientCustomizer(...)`."}
  fqName={"io.moderne.java.spring.boot4.FlagDeprecatedReactorNettyHttpClientMapper"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Flag deprecated ReactorNettyHttpClientMapper for migration"}
  description={"Adds a TODO comment to classes implementing the deprecated `ReactorNettyHttpClientMapper` interface. Migration to `ClientHttpConnectorBuilderCustomizer<ReactorClientHttpConnectorBuilder>` requires wrapping the HttpClient configuration in `builder.withHttpClientCustomizer(...)`."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.FlagDeprecatedReactorNettyHttpClientMapper"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.FlagDeprecatedReactorNettyHttpClientMapper"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/flagdeprecatedreactornettyhttpclientmapper.md"}
  moderneOnly
/>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package reactor.netty.http.client;\npublic class HttpClient {\n    public HttpClient responseTimeout(java.time.Duration timeout) { return this; }\n}\n"},"variants":[{"language":"java","before":"import org.springframework.boot.autoconfigure.web.reactive.function.client.ReactorNettyHttpClientMapper;\nimport org.springframework.stereotype.Component;\nimport reactor.netty.http.client.HttpClient;\n\nimport java.time.Duration;\n\n@Component\npublic class CustomHttpClientMapper implements ReactorNettyHttpClientMapper {\n    @Override\n    public HttpClient configure(HttpClient httpClient) {\n        return httpClient.responseTimeout(Duration.ofSeconds(30));\n    }\n}\n","after":"import org.springframework.boot.autoconfigure.web.reactive.function.client.ReactorNettyHttpClientMapper;\nimport org.springframework.stereotype.Component;\nimport reactor.netty.http.client.HttpClient;\n\nimport java.time.Duration;\n\n// TODO: Migrate to ClientHttpConnectorBuilderCustomizer<ReactorClientHttpConnectorBuilder>. See https://docs.spring.io/spring-boot/3.5/api/java/org/springframework/boot/autoconfigure/http/client/reactive/ClientHttpConnectorBuilderCustomizer.html\n/*~~(ReactorNettyHttpClientMapper is deprecated and will be removed in Spring Boot 4.0. Migrate to ClientHttpConnectorBuilderCustomizer<ReactorClientHttpConnectorBuilder>.)~~>*/@Component\npublic class CustomHttpClientMapper implements ReactorNettyHttpClientMapper {\n    @Override\n    public HttpClient configure(HttpClient httpClient) {\n        return httpClient.responseTimeout(Duration.ofSeconds(30));\n    }\n}\n","diff":"@@ -7,1 +7,2 @@\nimport java.time.Duration;\n\n-@Component\n+// TODO: Migrate to ClientHttpConnectorBuilderCustomizer<ReactorClientHttpConnectorBuilder>. See https://docs.spring.io/spring-boot/3.5/api/java/org/springframework/boot/autoconfigure/http/client/reactive/ClientHttpConnectorBuilderCustomizer.html\n+/*~~(ReactorNettyHttpClientMapper is deprecated and will be removed in Spring Boot 4.0. Migrate to ClientHttpConnectorBuilderCustomizer<ReactorClientHttpConnectorBuilder>.)~~>*/@Component\npublic class CustomHttpClientMapper implements ReactorNettyHttpClientMapper {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.FlagDeprecatedReactorNettyHttpClientMapper","displayName":"Flag deprecated ReactorNettyHttpClientMapper for migration","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

