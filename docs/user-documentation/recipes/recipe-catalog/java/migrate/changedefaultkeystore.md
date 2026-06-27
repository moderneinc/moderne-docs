---
title: "Return String `jks` when  `KeyStore.getDefaultType()` is called"
sidebar_label: "Return String `jks` when  `KeyStore.getDefaultType()` is called"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/changedefaultkeystore" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Return String `jks` when  `KeyStore.getDefaultType()` is called"}
  description={"In Java 11 the default keystore was updated from JKS to PKCS12. As a result, applications relying on KeyStore.getDefaultType() may encounter issues after migrating, unless their JKS keystore has been converted to PKCS12. This recipe returns default key store of `jks` when `KeyStore.getDefaultType()` method is called to use the pre Java 11 default keystore."}
  fqName={"org.openrewrite.java.migrate.ChangeDefaultKeyStore"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/ChangeDefaultKeyStore.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.ChangeDefaultKeyStore"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.ChangeDefaultKeyStore"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/changedefaultkeystore.md"}
>

<RecipeHeader.Title>Return String `jks` when  `KeyStore.getDefaultType()` is called</RecipeHeader.Title>

<RecipeHeader.Description>In Java 11 the default keystore was updated from JKS to PKCS12. As a result, applications relying on KeyStore.getDefaultType() may encounter issues after migrating, unless their JKS keystore has been converted to PKCS12. This recipe returns default key store of `jks` when `KeyStore.getDefaultType()` method is called to use the pre Java 11 default keystore.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"","after":"import java.io.FileInputStream;\nimport java.io.IOException;\nimport java.security.Key;\nimport java.security.KeyStore;\n\nclass Foo {\n \tvoid bar() {\n \t\ttry{\n \t\t\tKeyStore keystore = KeyStore.getInstance(\"jks\");\n \t\t\tchar[] password = \"your_keystore_password\".toCharArray();\n \t\t\tFileInputStream keystoreFile = new FileInputStream(\"path_to_your_keystore_file.jks\");\n \t\t\tkeystore.load(keystoreFile, password);\n \t\t}\n \t\tcatch (Exception e) {\n \t\t\te.printStackTrace();\n \t\t}\n \t}\n}\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.ChangeDefaultKeyStore","displayName":"Return String `jks` when  `KeyStore.getDefaultType()` is called","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

