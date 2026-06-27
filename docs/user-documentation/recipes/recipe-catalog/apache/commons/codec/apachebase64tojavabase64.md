---
title: "Prefer `java.util.Base64`"
sidebar_label: "Prefer `java.util.Base64`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/commons/codec/apachebase64tojavabase64" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer `java.util.Base64`"}
  description={"Prefer the Java standard library's `java.util.Base64` over third-party usage of apache's `apache.commons.codec.binary.Base64`."}
  fqName={"org.openrewrite.apache.commons.codec.ApacheBase64ToJavaBase64"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/codec/ApacheBase64ToJavaBase64.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["apache","commons"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.commons.codec.ApacheBase64ToJavaBase64"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.commons.codec.ApacheBase64ToJavaBase64"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/commons/codec/apachebase64tojavabase64.md"}
>

<RecipeHeader.Title>Prefer `java.util.Base64`</RecipeHeader.Title>

<RecipeHeader.Description>Prefer the Java standard library's `java.util.Base64` over third-party usage of apache's `apache.commons.codec.binary.Base64`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.commons.codec.binary.Base64;\n\nclass Test {\n    static byte[] decodeBytes(byte[] encodedBytes) {\n        return Base64.decodeBase64(encodedBytes);\n    }\n    static byte[] decodeToBytes(String encodedString) {\n        return Base64.decodeBase64(encodedString);\n    }\n    static String encodeToString(byte[] decodedByteArr) {\n        return Base64.encodeBase64String(decodedByteArr);\n    }\n    static byte[] encodeBase64(byte[] binaryData) {\n        return Base64.encodeBase64(binaryData);\n    }\n    static byte[] encodeBytesUrlSafe(byte [] encodeBytes) {\n        return Base64.encodeBase64URLSafe(encodeBytes);\n    }\n    static String encodeBytesUrlSafeString(byte [] encodeBytes) {\n        return Base64.encodeBase64URLSafeString(encodeBytes);\n    }\n}\n","after":"import java.util.Base64;\n\nclass Test {\n    static byte[] decodeBytes(byte[] encodedBytes) {\n        return Base64.getMimeDecoder().decode(encodedBytes);\n    }\n    static byte[] decodeToBytes(String encodedString) {\n        return Base64.getMimeDecoder().decode(encodedString);\n    }\n    static String encodeToString(byte[] decodedByteArr) {\n        return Base64.getEncoder().encodeToString(decodedByteArr);\n    }\n    static byte[] encodeBase64(byte[] binaryData) {\n        return Base64.getEncoder().encode(binaryData);\n    }\n    static byte[] encodeBytesUrlSafe(byte [] encodeBytes) {\n        return Base64.getUrlEncoder().withoutPadding().encode(encodeBytes);\n    }\n    static String encodeBytesUrlSafeString(byte [] encodeBytes) {\n        return Base64.getUrlEncoder().withoutPadding().encodeToString(encodeBytes);\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.apache.commons.codec.binary.Base64;\n+import java.util.Base64;\n\n@@ -5,1 +5,1 @@\nclass Test {\n    static byte[] decodeBytes(byte[] encodedBytes) {\n-       return Base64.decodeBase64(encodedBytes);\n+       return Base64.getMimeDecoder().decode(encodedBytes);\n    }\n@@ -8,1 +8,1 @@\n    }\n    static byte[] decodeToBytes(String encodedString) {\n-       return Base64.decodeBase64(encodedString);\n+       return Base64.getMimeDecoder().decode(encodedString);\n    }\n@@ -11,1 +11,1 @@\n    }\n    static String encodeToString(byte[] decodedByteArr) {\n-       return Base64.encodeBase64String(decodedByteArr);\n+       return Base64.getEncoder().encodeToString(decodedByteArr);\n    }\n@@ -14,1 +14,1 @@\n    }\n    static byte[] encodeBase64(byte[] binaryData) {\n-       return Base64.encodeBase64(binaryData);\n+       return Base64.getEncoder().encode(binaryData);\n    }\n@@ -17,1 +17,1 @@\n    }\n    static byte[] encodeBytesUrlSafe(byte [] encodeBytes) {\n-       return Base64.encodeBase64URLSafe(encodeBytes);\n+       return Base64.getUrlEncoder().withoutPadding().encode(encodeBytes);\n    }\n@@ -20,1 +20,1 @@\n    }\n    static String encodeBytesUrlSafeString(byte [] encodeBytes) {\n-       return Base64.encodeBase64URLSafeString(encodeBytes);\n+       return Base64.getUrlEncoder().withoutPadding().encodeToString(encodeBytes);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.commons.codec.ApacheBase64ToJavaBase64","displayName":"Prefer `java.util.Base64`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

