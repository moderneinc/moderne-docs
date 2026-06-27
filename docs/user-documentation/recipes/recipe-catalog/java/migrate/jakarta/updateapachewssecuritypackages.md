---
title: "Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages"
sidebar_label: "Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jakarta/updateapachewssecuritypackages" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages"}
  description={"Java EE has been rebranded to Jakarta EE.  This recipe replaces Apache security packages to migrate to Apache `wss4j`."}
  fqName={"org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/updateapachewssecuritypackages.md"}
>

<RecipeHeader.Title>Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages</RecipeHeader.Title>

<RecipeHeader.Description>Java EE has been rebranded to Jakarta EE.  This recipe replaces Apache security packages to migrate to Apache `wss4j`.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"},{"name":"Rename package name","href":"/user-documentation/recipes/recipe-catalog/java/changepackage/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.ws.security.WSSecurityException;\nimport org.apache.ws.security.components.crypto.CryptoBase;\nclass Test {\n    void foo() {\n        WSSecurityException x = new WSSecurityException(1,\"\");\n        CryptoBase base = null;\n    }\n}\n","after":"import org.apache.wss4j.common.ext.WSSecurityException;\nimport org.apache.wss4j.common.ext.components.crypto.CryptoBase;\nclass Test {\n    void foo() {\n        WSSecurityException x = new WSSecurityException(1,\"\");\n        CryptoBase base = null;\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.apache.ws.security.WSSecurityException;\n-import org.apache.ws.security.components.crypto.CryptoBase;\n+import org.apache.wss4j.common.ext.WSSecurityException;\n+import org.apache.wss4j.common.ext.components.crypto.CryptoBase;\nclass Test {\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.apache.ws.security.WSSecurityException;\nimport org.apache.ws.security.components.crypto.CryptoBase;\nclass Test {\n    void foo() {\n        WSSecurityException x = new WSSecurityException(1,\"\");\n        CryptoBase base = null;\n    }\n}\n","after":"import org.apache.wss4j.common.ext.WSSecurityException;\nimport org.apache.wss4j.common.ext.components.crypto.CryptoBase;\nclass Test {\n    void foo() {\n        WSSecurityException x = new WSSecurityException(1,\"\");\n        CryptoBase base = null;\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.apache.ws.security.WSSecurityException;\n-import org.apache.ws.security.components.crypto.CryptoBase;\n+import org.apache.wss4j.common.ext.WSSecurityException;\n+import org.apache.wss4j.common.ext.components.crypto.CryptoBase;\nclass Test {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages","displayName":"Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

