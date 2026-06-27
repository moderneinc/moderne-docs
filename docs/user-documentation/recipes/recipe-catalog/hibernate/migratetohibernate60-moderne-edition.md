---
title: "Migrate to Hibernate 6.0.x (Moderne Edition)"
sidebar_label: "Migrate to Hibernate 6.0.x (Moderne Edition)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Hibernate 6.0.x"}
  description={"This recipe will apply changes commonly needed when migrating to Hibernate 6.0.x."}
  fqName={"io.moderne.hibernate.MigrateToHibernate60"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.MigrateToHibernate60"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.MigrateToHibernate60"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate60-moderne-edition.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to Hibernate 6.0.x</RecipeHeader.Title>

<RecipeHeader.Description>This recipe will apply changes commonly needed when migrating to Hibernate 6.0.x.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to Hibernate 4.0.x","href":"/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate40/"},{"name":"Migrate to Hibernate 6.0.x","href":"/user-documentation/recipes/recipe-catalog/hibernate/migratetohibernate60-community-edition/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Migrate Hibernate Criteria API to JPA Criteria API","href":"/user-documentation/recipes/recipe-catalog/hibernate/update60/migratehibernatecriteriatojpacriteria/"},{"name":"Migrate removed Hibernate UUID `@Type` to `@JdbcTypeCode`","href":"/user-documentation/recipes/recipe-catalog/hibernate/update60/migrateremoveduuidtypes/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>com.fasterxml.jackson.datatype</groupId>\n      <artifactId>jackson-datatype-hibernate5</artifactId>\n      <version>2.13.0</version>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>com.fasterxml.jackson.datatype</groupId>\n      <artifactId>jackson-datatype-hibernate6</artifactId>\n      <version>2.15.0</version>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -8,2 +8,2 @@\n    <dependency>\n      <groupId>com.fasterxml.jackson.datatype</groupId>\n-     <artifactId>jackson-datatype-hibernate5</artifactId>\n-     <version>2.13.0</version>\n+     <artifactId>jackson-datatype-hibernate6</artifactId>\n+     <version>2.15.0</version>\n    </dependency>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>com.fasterxml.jackson.datatype</groupId>\n      <artifactId>jackson-datatype-hibernate5</artifactId>\n      <version>2.13.0</version>\n    </dependency>\n  </dependencies>\n</project>\n","after":"<project>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>com.fasterxml.jackson.datatype</groupId>\n      <artifactId>jackson-datatype-hibernate6</artifactId>\n      <version>2.15.0</version>\n    </dependency>\n  </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -8,2 +8,2 @@\n    <dependency>\n      <groupId>com.fasterxml.jackson.datatype</groupId>\n-     <artifactId>jackson-datatype-hibernate5</artifactId>\n-     <version>2.13.0</version>\n+     <artifactId>jackson-datatype-hibernate6</artifactId>\n+     <version>2.15.0</version>\n    </dependency>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.MigrateToHibernate60","displayName":"Migrate to Hibernate 6.0.x","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false,"useFullyQualifiedCliName":true}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

