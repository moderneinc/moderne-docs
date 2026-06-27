---
title: "Migrate Spring annotations to CDI"
sidebar_label: "Migrate Spring annotations to CDI"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/spring/stereotypeannotationstocdi" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Spring annotations to CDI"}
  description={"Replace Spring stereotype and injection annotations with CDI equivalents."}
  fqName={"org.openrewrite.quarkus.spring.StereotypeAnnotationsToCDI"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/spring-boot-to-quarkus.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.quarkus.spring.StereotypeAnnotationsToCDI"}
  artifact={"org.openrewrite.recipe:rewrite-spring-to-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.StereotypeAnnotationsToCDI"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/spring/stereotypeannotationstocdi.md"}
>

<RecipeHeader.Title>Migrate Spring annotations to CDI</RecipeHeader.Title>

<RecipeHeader.Description>Replace Spring stereotype and injection annotations with CDI equivalents.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Replace Spring `@Bean` with CDI `@Produces`","href":"/user-documentation/recipes/recipe-catalog/quarkus/spring/springbeantocdiproduces/"},{"name":"Replace annotation","href":"/user-documentation/recipes/recipe-catalog/java/replaceannotation/"},{"name":"Replace annotation","href":"/user-documentation/recipes/recipe-catalog/java/replaceannotation/"},{"name":"Replace annotation","href":"/user-documentation/recipes/recipe-catalog/java/replaceannotation/"},{"name":"Replace annotation","href":"/user-documentation/recipes/recipe-catalog/java/replaceannotation/"},{"name":"Replace annotation","href":"/user-documentation/recipes/recipe-catalog/java/replaceannotation/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.client.RestTemplate;\n\n@Configuration\npublic class AppConfig {\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n","after":"import jakarta.enterprise.context.ApplicationScoped;\nimport jakarta.enterprise.inject.Produces;\nimport org.springframework.web.client.RestTemplate;\n\n@ApplicationScoped\npublic class AppConfig {\n    @Produces\n    @ApplicationScoped\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.springframework.context.annotation.Bean;\n-import org.springframework.context.annotation.Configuration;\n+import jakarta.enterprise.context.ApplicationScoped;\n+import jakarta.enterprise.inject.Produces;\nimport org.springframework.web.client.RestTemplate;\n@@ -5,1 +5,1 @@\nimport org.springframework.web.client.RestTemplate;\n\n-@Configuration\n+@ApplicationScoped\npublic class AppConfig {\n@@ -7,1 +7,2 @@\n@Configuration\npublic class AppConfig {\n-   @Bean\n+   @Produces\n+   @ApplicationScoped\n    public RestTemplate restTemplate() {\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.client.RestTemplate;\n\n@Configuration\npublic class AppConfig {\n    @Bean\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n","after":"import jakarta.enterprise.context.ApplicationScoped;\nimport jakarta.enterprise.inject.Produces;\nimport org.springframework.web.client.RestTemplate;\n\n@ApplicationScoped\npublic class AppConfig {\n    @Produces\n    @ApplicationScoped\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.springframework.context.annotation.Bean;\n-import org.springframework.context.annotation.Configuration;\n+import jakarta.enterprise.context.ApplicationScoped;\n+import jakarta.enterprise.inject.Produces;\nimport org.springframework.web.client.RestTemplate;\n@@ -5,1 +5,1 @@\nimport org.springframework.web.client.RestTemplate;\n\n-@Configuration\n+@ApplicationScoped\npublic class AppConfig {\n@@ -7,1 +7,2 @@\n@Configuration\npublic class AppConfig {\n-   @Bean\n+   @Produces\n+   @ApplicationScoped\n    public RestTemplate restTemplate() {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.spring.StereotypeAnnotationsToCDI","displayName":"Migrate Spring annotations to CDI","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring-to-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

