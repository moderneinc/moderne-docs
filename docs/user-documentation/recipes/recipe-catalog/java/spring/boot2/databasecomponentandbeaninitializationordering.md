---
title: "Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`"
sidebar_label: "Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot2/databasecomponentandbeaninitializationordering" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`"}
  description={"Beans of certain well-known types, such as `JdbcTemplate`, will be ordered so that they are initialized after the database has been initialized. If you have a bean that works with the `DataSource` directly, annotate its class or `@Bean` method with `@DependsOnDatabaseInitialization` to ensure that it too is initialized after the database has been initialized. See the [release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#initialization-ordering) for more."}
  fqName={"org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25.yml"}
/>

<RecipeHeader
  displayName={"Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`"}
  description={"Beans of certain well-known types, such as `JdbcTemplate`, will be ordered so that they are initialized after the database has been initialized. If you have a bean that works with the `DataSource` directly, annotate its class or `@Bean` method with `@DependsOnDatabaseInitialization` to ensure that it too is initialized after the database has been initialized. See the [release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#initialization-ordering) for more."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot2/databasecomponentandbeaninitializationordering.md"}
/>

<RecipeList recipes={[{"name":"Unconditionally adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`","href":"java/spring/boot2/databasecomponentandbeaninitializationorderingunconditionally"}]} preconditions={[{"name":"Module has dependency","href":"java/dependencies/search/modulehasdependency"},{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project-maven"},"variants":[{"language":"java","before":"import org.jooq.impl.DSL;\nimport org.jooq.DSLContext;\nimport org.jooq.SQLDialect;\nimport javax.sql.DataSource;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Bean;\n\n@Configuration\nclass PersistenceConfiguration {\n\n    public static class A { private DataSource ds;}\n\n    @Bean\n    DSLContext dslContext(DataSource ds) {\n        return DSL.using(ds, SQLDialect.SQLITE);\n    }\n\n    @Bean\n    A a() {\n        return new A();\n    }\n}\n","after":"import org.jooq.impl.DSL;\nimport org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitialization;\nimport org.jooq.DSLContext;\nimport org.jooq.SQLDialect;\nimport javax.sql.DataSource;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Bean;\n\n@Configuration\nclass PersistenceConfiguration {\n\n    public static class A { private DataSource ds;}\n\n    @Bean\n    DSLContext dslContext(DataSource ds) {\n        return DSL.using(ds, SQLDialect.SQLITE);\n    }\n\n    @Bean\n    @DependsOnDatabaseInitialization\n    A a() {\n        return new A();\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport org.jooq.impl.DSL;\n+import org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitialization;\nimport org.jooq.DSLContext;\n@@ -19,0 +20,1 @@\n\n    @Bean\n+   @DependsOnDatabaseInitialization\n    A a() {\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"project-maven"},"variants":[{"language":"java","before":"import org.jooq.impl.DSL;\nimport org.jooq.DSLContext;\nimport org.jooq.SQLDialect;\nimport javax.sql.DataSource;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Bean;\n\n@Configuration\nclass PersistenceConfiguration {\n\n    public static class A { private DataSource ds;}\n\n    @Bean\n    DSLContext dslContext(DataSource ds) {\n        return DSL.using(ds, SQLDialect.SQLITE);\n    }\n\n    @Bean\n    A a() {\n        return new A();\n    }\n}\n","after":"import org.jooq.impl.DSL;\nimport org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitialization;\nimport org.jooq.DSLContext;\nimport org.jooq.SQLDialect;\nimport javax.sql.DataSource;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Bean;\n\n@Configuration\nclass PersistenceConfiguration {\n\n    public static class A { private DataSource ds;}\n\n    @Bean\n    DSLContext dslContext(DataSource ds) {\n        return DSL.using(ds, SQLDialect.SQLITE);\n    }\n\n    @Bean\n    @DependsOnDatabaseInitialization\n    A a() {\n        return new A();\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport org.jooq.impl.DSL;\n+import org.springframework.boot.sql.init.dependency.DependsOnDatabaseInitialization;\nimport org.jooq.DSLContext;\n@@ -19,0 +20,1 @@\n\n    @Bean\n+   @DependsOnDatabaseInitialization\n    A a() {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering","displayName":"Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

