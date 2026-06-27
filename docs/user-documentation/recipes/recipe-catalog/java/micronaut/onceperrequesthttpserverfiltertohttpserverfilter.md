---
title: "Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`"
sidebar_label: "Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/micronaut/onceperrequesthttpserverfiltertohttpserverfilter" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`"}
  description={"Starting in Micronaut 3.0 all filters are executed once per request. Directly implement `HttpServerFilter` instead of extending `OncePerRequestHttpServerFilter` and replace any usages of `micronaut.once` attributes with a custom attribute name."}
  fqName={"org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/OncePerRequestHttpServerFilterToHttpServerFilter.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter"}
  artifact={"org.openrewrite.recipe:rewrite-micronaut"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/micronaut/onceperrequesthttpserverfiltertohttpserverfilter.md"}
>

<RecipeHeader.Title>Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`</RecipeHeader.Title>

<RecipeHeader.Description>Starting in Micronaut 3.0 all filters are executed once per request. Directly implement `HttpServerFilter` instead of extending `OncePerRequestHttpServerFilter` and replace any usages of `micronaut.once` attributes with a custom attribute name.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"package a.b;\n\nimport io.micronaut.core.order.Ordered;\nimport io.micronaut.http.HttpRequest;\nimport io.micronaut.http.MutableHttpResponse;\nimport io.micronaut.http.filter.OncePerRequestHttpServerFilter;\nimport io.micronaut.http.filter.ServerFilterChain;\nimport org.reactivestreams.Publisher;\n\npublic class MyServerFilter extends OncePerRequestHttpServerFilter {\n    @Override\n    public int getOrder() {\n        return Ordered.LOWEST_PRECEDENCE;\n    }\n\n    @Override\n    public Publisher<MutableHttpResponse<?>> doFilterOnce(HttpRequest<?> request, ServerFilterChain chain) {\n        getKey(MyServerFilter.class);\n    }\n\n    @Override\n    public String getCName() {\n        return \"cname\";\n    }\n}\n","after":"package a.b;\n\nimport io.micronaut.core.order.Ordered;\nimport io.micronaut.http.HttpRequest;\nimport io.micronaut.http.MutableHttpResponse;\nimport io.micronaut.http.filter.HttpServerFilter;\nimport io.micronaut.http.filter.ServerFilterChain;\nimport org.reactivestreams.Publisher;\n\npublic class MyServerFilter implements HttpServerFilter {\n    @Override\n    public int getOrder() {\n        return Ordered.LOWEST_PRECEDENCE;\n    }\n\n    @Override\n    public Publisher<MutableHttpResponse<?>> doFilter(HttpRequest<?> request, ServerFilterChain chain) {\n        /*TODO: See `Server Filter Behavior` in https://docs.micronaut.io/3.0.x/guide/#breaks for details*/ getKey(MyServerFilter.class);\n    }\n\n    @Override\n    public String getCName() {\n        return \"cname\";\n    }\n}\n","diff":"@@ -6,1 +6,1 @@\nimport io.micronaut.http.HttpRequest;\nimport io.micronaut.http.MutableHttpResponse;\n-import io.micronaut.http.filter.OncePerRequestHttpServerFilter;\n+import io.micronaut.http.filter.HttpServerFilter;\nimport io.micronaut.http.filter.ServerFilterChain;\n@@ -10,1 +10,1 @@\nimport org.reactivestreams.Publisher;\n\n-public class MyServerFilter extends OncePerRequestHttpServerFilter {\n+public class MyServerFilter implements HttpServerFilter {\n    @Override\n@@ -17,2 +17,2 @@\n\n    @Override\n-   public Publisher<MutableHttpResponse<?>> doFilterOnce(HttpRequest<?> request, ServerFilterChain chain) {\n-       getKey(MyServerFilter.class);\n+   public Publisher<MutableHttpResponse<?>> doFilter(HttpRequest<?> request, ServerFilterChain chain) {\n+       /*TODO: See `Server Filter Behavior` in https://docs.micronaut.io/3.0.x/guide/#breaks for details*/ getKey(MyServerFilter.class);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.micronaut.OncePerRequestHttpServerFilterToHttpServerFilter","displayName":"Convert `OncePerRequestServerFilter` extensions to `HttpServerFilter`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-micronaut","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

