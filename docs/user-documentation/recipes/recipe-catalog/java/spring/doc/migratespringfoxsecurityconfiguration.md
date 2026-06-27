---
title: "Migrate SpringFox `SecurityConfiguration` bean to Springdoc Swagger UI properties"
sidebar_label: "Migrate SpringFox `SecurityConfiguration` bean to Springdoc Swagger UI properties"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/doc/migratespringfoxsecurityconfiguration" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate SpringFox `SecurityConfiguration` bean to Springdoc Swagger UI properties"}
  description={"Replace `@Bean` methods that return `springfox.documentation.swagger.web.SecurityConfiguration` with the equivalent `springdoc.swagger-ui.*` configuration properties. Only literal builder arguments are migrated; beans with non-literal arguments or unsupported builder methods (`apiKey`, `apiKeyName`, `apiKeyVehicle`, `additionalQueryStringParams`) are left untouched for manual review. If no Spring application configuration file exists, the bean is left in place to avoid silently dropping configuration."}
  fqName={"org.openrewrite.java.spring.doc.MigrateSpringFoxSecurityConfiguration"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/doc/MigrateSpringFoxSecurityConfiguration.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.doc.MigrateSpringFoxSecurityConfiguration"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.doc.MigrateSpringFoxSecurityConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/doc/migratespringfoxsecurityconfiguration.md"}
>

<RecipeHeader.Title>Migrate SpringFox `SecurityConfiguration` bean to Springdoc Swagger UI properties</RecipeHeader.Title>

<RecipeHeader.Description>Replace `@Bean` methods that return `springfox.documentation.swagger.web.SecurityConfiguration` with the equivalent `springdoc.swagger-ui.*` configuration properties. Only literal builder arguments are migrated; beans with non-literal arguments or unsupported builder methods (`apiKey`, `apiKeyName`, `apiKeyVehicle`, `additionalQueryStringParams`) are left untouched for manual review. If no Spring application configuration file exists, the bean is left in place to avoid silently dropping configuration.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"java","before":"package com.example;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport springfox.documentation.swagger.web.SecurityConfiguration;\nimport springfox.documentation.swagger.web.SecurityConfigurationBuilder;\n\n@Configuration\npublic class SwaggerConfig {\n\n    @Bean\n    SecurityConfiguration security() {\n        return SecurityConfigurationBuilder.builder()\n                .enableCsrfSupport(true)\n                .build();\n    }\n}\n","after":"package com.example;\n\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class SwaggerConfig {\n}\n","diff":"@@ -3,1 +3,0 @@\npackage com.example;\n\n-import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n@@ -5,2 +4,0 @@\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n-import springfox.documentation.swagger.web.SecurityConfiguration;\n-import springfox.documentation.swagger.web.SecurityConfigurationBuilder;\n\n@@ -10,7 +7,0 @@\n@Configuration\npublic class SwaggerConfig {\n-\n-   @Bean\n-   SecurityConfiguration security() {\n-       return SecurityConfigurationBuilder.builder()\n-               .enableCsrfSupport(true)\n-               .build();\n-   }\n}\n","newFile":false},{"language":"properties","before":"spring.application.name=demo\n","after":"spring.application.name=demo\nspringdoc.swagger-ui.csrf.enabled=true\n","diff":"--- application.properties\n+++ application.properties\n@@ -2,0 +2,1 @@\nspring.application.name=demo\n+springdoc.swagger-ui.csrf.enabled=true\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.doc.MigrateSpringFoxSecurityConfiguration","displayName":"Migrate SpringFox `SecurityConfiguration` bean to Springdoc Swagger UI properties","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

