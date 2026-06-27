---
title: "Migrate Hibernate dialect to the generic dialect"
sidebar_label: "Migrate Hibernate dialect to the generic dialect"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/hibernate/migratedialect" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Hibernate dialect to the generic dialect"}
  description={"Migrate all Hibernate version-specific dialect classes to their generic equivalents. Version-specific dialects were deprecated in Hibernate 6.0 and removed in Hibernate 6.2."}
  fqName={"org.openrewrite.hibernate.MigrateDialect"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.2.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.hibernate.MigrateDialect"}
  artifact={"org.openrewrite.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateDialect"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/migratedialect.md"}
>

<RecipeHeader.Title>Migrate Hibernate dialect to the generic dialect</RecipeHeader.Title>

<RecipeHeader.Description>Migrate all Hibernate version-specific dialect classes to their generic equivalents. Version-specific dialects were deprecated in Hibernate 6.0 and removed in Hibernate 6.2.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"yaml","before":"spring:\n  jpa:\n    database-platform: org.hibernate.dialect.MySQL5Dialect\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.MySQL5Dialect\n","after":"spring:\n  jpa:\n    database-platform: org.hibernate.dialect.MySQLDialect\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.MySQLDialect\n","diff":"--- src/main/resources/application.yml\n+++ src/main/resources/application.yml\n@@ -3,1 +3,1 @@\nspring:\n  jpa:\n-   database-platform: org.hibernate.dialect.MySQL5Dialect\n+   database-platform: org.hibernate.dialect.MySQLDialect\n    properties:\n@@ -6,1 +6,1 @@\n    properties:\n      hibernate:\n-       dialect: org.hibernate.dialect.MySQL5Dialect\n+       dialect: org.hibernate.dialect.MySQLDialect\n\n","newFile":false}]},{"variants":[{"language":"yaml","before":"spring:\n  jpa:\n    database-platform: org.hibernate.dialect.MySQL5Dialect\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.MySQL5Dialect\n","after":"spring:\n  jpa:\n    database-platform: org.hibernate.dialect.MySQLDialect\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.MySQLDialect\n","diff":"--- src/main/resources/application.yml\n+++ src/main/resources/application.yml\n@@ -3,1 +3,1 @@\nspring:\n  jpa:\n-   database-platform: org.hibernate.dialect.MySQL5Dialect\n+   database-platform: org.hibernate.dialect.MySQLDialect\n    properties:\n@@ -6,1 +6,1 @@\n    properties:\n      hibernate:\n-       dialect: org.hibernate.dialect.MySQL5Dialect\n+       dialect: org.hibernate.dialect.MySQLDialect\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.hibernate.MigrateDialect","displayName":"Migrate Hibernate dialect to the generic dialect","groupId":"org.openrewrite.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

