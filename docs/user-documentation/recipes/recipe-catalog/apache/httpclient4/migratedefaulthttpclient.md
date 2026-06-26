---
title: "Migrates deprecated `DefaultHttpClient`"
sidebar_label: "Migrates deprecated `DefaultHttpClient`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/httpclient4/migratedefaulthttpclient" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrates deprecated `DefaultHttpClient`"}
  description={"Since `DefaultHttpClient` is deprecated, we need to change it to the `CloseableHttpClient`. It only covers the default scenario with no custom `HttpParams` or `ConnectionManager`.\n\nOf note: the `DefaultHttpClient` [does not support TLS 1.2](https://find-sec-bugs.github.io/bugs.htm#DEFAULT_HTTP_CLIENT).\n\nReferences:\n - [Find Sec Bugs](https://find-sec-bugs.github.io/bugs.htm#DEFAULT_HTTP_CLIENT).\n - [IBM Support Pages](https://www.ibm.com/support/pages/im-using-apache-httpclient-make-outbound-call-my-web-application-running-websphere-application-server-traditional-and-im-getting-ssl-handshake-error-how-can-i-debug)."}
  fqName={"org.openrewrite.apache.httpclient4.MigrateDefaultHttpClient"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/httpclient4/MigrateDefaultHttpClient.java"}
/>

<RecipeHeader
  displayName={"Migrates deprecated `DefaultHttpClient`"}
  description={"Since `DefaultHttpClient` is deprecated, we need to change it to the `CloseableHttpClient`. It only covers the default scenario with no custom `HttpParams` or `ConnectionManager`.\n\nOf note: the `DefaultHttpClient` [does not support TLS 1.2](https://find-sec-bugs.github.io/bugs.htm#DEFAULT_HTTP_CLIENT).\n\nReferences:\n - [Find Sec Bugs](https://find-sec-bugs.github.io/bugs.htm#DEFAULT_HTTP_CLIENT).\n - [IBM Support Pages](https://www.ibm.com/support/pages/im-using-apache-httpclient-make-outbound-call-my-web-application-running-websphere-application-server-traditional-and-im-getting-ssl-handshake-error-how-can-i-debug)."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["CWE-326"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.httpclient4.MigrateDefaultHttpClient"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.httpclient4.MigrateDefaultHttpClient"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/httpclient4/migratedefaulthttpclient.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.http.HttpResponse;\nimport org.apache.http.client.methods.HttpPost;\nimport org.apache.http.impl.client.DefaultHttpClient;\n\nimport java.io.IOException;\n\nclass A {\n    void method() throws IOException {\n        DefaultHttpClient httpClient = new DefaultHttpClient();\n        HttpPost httpPost = new HttpPost(\"https://moderne.io\");\n        HttpResponse httpResponse = httpClient.execute(httpPost);\n    }\n}\n","after":"import org.apache.http.HttpResponse;\nimport org.apache.http.client.methods.HttpPost;\nimport org.apache.http.impl.client.CloseableHttpClient;\nimport org.apache.http.impl.client.HttpClients;\n\nimport java.io.IOException;\n\nclass A {\n    void method() throws IOException {\n        CloseableHttpClient httpClient = HttpClients.createDefault();\n        HttpPost httpPost = new HttpPost(\"https://moderne.io\");\n        HttpResponse httpResponse = httpClient.execute(httpPost);\n    }\n}\n","diff":"@@ -3,1 +3,2 @@\nimport org.apache.http.HttpResponse;\nimport org.apache.http.client.methods.HttpPost;\n-import org.apache.http.impl.client.DefaultHttpClient;\n+import org.apache.http.impl.client.CloseableHttpClient;\n+import org.apache.http.impl.client.HttpClients;\n\n@@ -9,1 +10,1 @@\nclass A {\n    void method() throws IOException {\n-       DefaultHttpClient httpClient = new DefaultHttpClient();\n+       CloseableHttpClient httpClient = HttpClients.createDefault();\n        HttpPost httpPost = new HttpPost(\"https://moderne.io\");\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.httpclient4.MigrateDefaultHttpClient","displayName":"Migrates deprecated `DefaultHttpClient`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

