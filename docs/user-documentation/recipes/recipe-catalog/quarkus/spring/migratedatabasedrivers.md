---
title: "Migrate database drivers to Quarkus JDBC extensions"
sidebar_label: "Migrate database drivers to Quarkus JDBC extensions"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/spring/migratedatabasedrivers" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate database drivers to Quarkus JDBC extensions"}
  description={"Replaces Spring Boot database driver dependencies with their Quarkus JDBC extension equivalents."}
  fqName={"org.openrewrite.quarkus.spring.MigrateDatabaseDrivers"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/database-drivers.yml"}
/>

<RecipeHeader
  displayName={"Migrate database drivers to Quarkus JDBC extensions"}
  description={"Replaces Spring Boot database driver dependencies with their Quarkus JDBC extension equivalents."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","database","quarkus","jdbc"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.quarkus.spring.MigrateDatabaseDrivers"}
  artifact={"org.openrewrite.recipe:rewrite-spring-to-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.MigrateDatabaseDrivers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/spring/migratedatabasedrivers.md"}
/>

<RecipeList recipes={[{"name":"Replace H2 driver with Quarkus JDBC H2","href":"quarkus/spring/h2drivertoquarkus"},{"name":"Replace H2 test driver with Quarkus JDBC H2 (test scope)","href":"quarkus/spring/h2testdrivertoquarkus"},{"name":"Replace Derby driver with Quarkus JDBC Derby","href":"quarkus/spring/derbydrivertoquarkus"},{"name":"Replace Derby test driver with Quarkus JDBC Derby (test scope)","href":"quarkus/spring/derbytestdrivertoquarkus"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Change Maven dependency scope","href":"maven/changedependencyscope"},{"name":"Remove redundant explicit dependency and plugin versions","href":"maven/removeredundantdependencyversions"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.26.4</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.postgresql</groupId>\n            <artifactId>postgresql</artifactId>\n            <version>42.7.7</version>\n            <scope>runtime</scope>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.26.4</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>io.quarkus</groupId>\n            <artifactId>quarkus-jdbc-postgresql</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -19,4 +19,2 @@\n    <dependencies>\n        <dependency>\n-           <groupId>org.postgresql</groupId>\n-           <artifactId>postgresql</artifactId>\n-           <version>42.7.7</version>\n-           <scope>runtime</scope>\n+           <groupId>io.quarkus</groupId>\n+           <artifactId>quarkus-jdbc-postgresql</artifactId>\n        </dependency>\n","newFile":false}]},{"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.26.4</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.postgresql</groupId>\n            <artifactId>postgresql</artifactId>\n            <version>42.7.7</version>\n            <scope>runtime</scope>\n        </dependency>\n    </dependencies>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.example</groupId>\n    <artifactId>demo</artifactId>\n    <version>0.0.1-SNAPSHOT</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>io.quarkus.platform</groupId>\n                <artifactId>quarkus-bom</artifactId>\n                <version>3.26.4</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>io.quarkus</groupId>\n            <artifactId>quarkus-jdbc-postgresql</artifactId>\n        </dependency>\n    </dependencies>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -19,4 +19,2 @@\n    <dependencies>\n        <dependency>\n-           <groupId>org.postgresql</groupId>\n-           <artifactId>postgresql</artifactId>\n-           <version>42.7.7</version>\n-           <scope>runtime</scope>\n+           <groupId>io.quarkus</groupId>\n+           <artifactId>quarkus-jdbc-postgresql</artifactId>\n        </dependency>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.spring.MigrateDatabaseDrivers","displayName":"Migrate database drivers to Quarkus JDBC extensions","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring-to-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

