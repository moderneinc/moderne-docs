---
title: "Replace DataSourceFactory build chain with @Autowired DataSource"
sidebar_label: "Replace DataSourceFactory build chain with @Autowired DataSource"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace DataSourceFactory build chain with @Autowired DataSource"}
  description={"Replaces `DataSourceFactory.build(MetricRegistry, String)` variable declarations with `@Autowired DataSource` fields. Spring Boot auto-configures the DataSource from `spring.datasource.*` properties. Note: connection pool metrics previously wired via `MetricRegistry` require `spring-boot-starter-actuator` for equivalent observability."}
  fqName={"io.moderne.java.dropwizard.boot.datasource.RemoveDataSourceFactoryBuildChain"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Replace DataSourceFactory build chain with @Autowired DataSource"}
  description={"Replaces `DataSourceFactory.build(MetricRegistry, String)` variable declarations with `@Autowired DataSource` fields. Spring Boot auto-configures the DataSource from `spring.datasource.*` properties. Note: connection pool metrics previously wired via `MetricRegistry` require `spring-boot-starter-actuator` for equivalent observability."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.dropwizard.boot.datasource.RemoveDataSourceFactoryBuildChain"}
  artifact={"io.moderne.recipe:rewrite-dropwizard"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.datasource.RemoveDataSourceFactoryBuildChain"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/datasource/removedatasourcefactorybuildchain.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.example;\n\nimport com.codahale.metrics.MetricRegistry;\nimport io.dropwizard.db.DataSourceFactory;\nimport io.dropwizard.db.ManagedDataSource;\n\npublic class App {\n    void run(DataSourceFactory factory, MetricRegistry metrics) throws Exception {\n        ManagedDataSource dataSource = factory.build(metrics, \"assessmentdb\");\n        System.out.println(\"started\");\n    }\n}\n","after":"package com.example;\n\nimport com.codahale.metrics.MetricRegistry;\nimport io.dropwizard.db.DataSourceFactory;\nimport org.springframework.beans.factory.annotation.Autowired;\n\nimport javax.sql.DataSource;\n\npublic class App {\n    @Autowired\n    private DataSource dataSource;\n    void run(DataSourceFactory factory, MetricRegistry metrics) throws Exception {\n        System.out.println(\"started\");\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nimport com.codahale.metrics.MetricRegistry;\nimport io.dropwizard.db.DataSourceFactory;\n-import io.dropwizard.db.ManagedDataSource;\n+import org.springframework.beans.factory.annotation.Autowired;\n\n@@ -7,0 +7,2 @@\nimport io.dropwizard.db.ManagedDataSource;\n\n+import javax.sql.DataSource;\n+\npublic class App {\n@@ -8,0 +10,2 @@\n\npublic class App {\n+   @Autowired\n+   private DataSource dataSource;\n    void run(DataSourceFactory factory, MetricRegistry metrics) throws Exception {\n@@ -9,1 +13,0 @@\npublic class App {\n    void run(DataSourceFactory factory, MetricRegistry metrics) throws Exception {\n-       ManagedDataSource dataSource = factory.build(metrics, \"assessmentdb\");\n        System.out.println(\"started\");\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.dropwizard.boot.datasource.RemoveDataSourceFactoryBuildChain","displayName":"Replace DataSourceFactory build chain with @Autowired DataSource","groupId":"io.moderne.recipe","artifactId":"rewrite-dropwizard","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

