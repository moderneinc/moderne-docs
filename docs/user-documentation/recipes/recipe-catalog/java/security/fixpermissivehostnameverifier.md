---
title: "Fix permissive `HostnameVerifier` implementations"
sidebar_label: "Fix permissive `HostnameVerifier` implementations"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Fix permissive `HostnameVerifier` implementations"}
  description={"Replaces `javax.net.ssl.HostnameVerifier` implementations whose `verify(String, SSLSession)` method unconditionally returns `true` (matching `return true;`, `return Boolean.TRUE;`, or `return Boolean.valueOf(true);`) with a delegation to `HttpsURLConnection.getDefaultHostnameVerifier()`, restoring proper hostname verification."}
  fqName={"org.openrewrite.java.security.FixPermissiveHostnameVerifier"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["RSPEC-S5527","CWE-295"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.FixPermissiveHostnameVerifier"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.FixPermissiveHostnameVerifier"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/fixpermissivehostnameverifier.md"}
  moderneOnly
>

<RecipeHeader.Title>Fix permissive `HostnameVerifier` implementations</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `javax.net.ssl.HostnameVerifier` implementations whose `verify(String, SSLSession)` method unconditionally returns `true` (matching `return true;`, `return Boolean.TRUE;`, or `return Boolean.valueOf(true);`) with a delegation to `HttpsURLConnection.getDefaultHostnameVerifier()`, restoring proper hostname verification.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import javax.net.ssl.HostnameVerifier;\nimport javax.net.ssl.SSLSession;\n\nclass PermissiveVerifier implements HostnameVerifier {\n    @Override\n    public boolean verify(String hostname, SSLSession session) {\n        return true;\n    }\n}\n","after":"import javax.net.ssl.HostnameVerifier;\nimport javax.net.ssl.HttpsURLConnection;\nimport javax.net.ssl.SSLSession;\n\nclass PermissiveVerifier implements HostnameVerifier {\n    @Override\n    public boolean verify(String hostname, SSLSession session) {\n        return HttpsURLConnection.getDefaultHostnameVerifier().verify(hostname, session);\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport javax.net.ssl.HostnameVerifier;\n+import javax.net.ssl.HttpsURLConnection;\nimport javax.net.ssl.SSLSession;\n@@ -7,1 +8,1 @@\n    @Override\n    public boolean verify(String hostname, SSLSession session) {\n-       return true;\n+       return HttpsURLConnection.getDefaultHostnameVerifier().verify(hostname, session);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.FixPermissiveHostnameVerifier","displayName":"Fix permissive `HostnameVerifier` implementations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

