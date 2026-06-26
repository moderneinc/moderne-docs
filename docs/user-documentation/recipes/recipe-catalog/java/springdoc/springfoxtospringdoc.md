---
title: "Migrate from SpringFox Swagger to SpringDoc and OpenAPI"
sidebar_label: "Migrate from SpringFox Swagger to SpringDoc and OpenAPI"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/springdoc/springfoxtospringdoc" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from SpringFox Swagger to SpringDoc and OpenAPI"}
  description={"Migrate from SpringFox Swagger to SpringDoc and OpenAPI."}
  fqName={"org.openrewrite.java.springdoc.SpringFoxToSpringDoc"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/springdoc.yml"}
/>

<RecipeHeader
  displayName={"Migrate from SpringFox Swagger to SpringDoc and OpenAPI"}
  description={"Migrate from SpringFox Swagger to SpringDoc and OpenAPI."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["springfox","openapi","springdoc","swagger"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.springdoc.SpringFoxToSpringDoc"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.springdoc.SpringFoxToSpringDoc"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/springdoc/springfoxtospringdoc.md"}
/>

<RecipeList recipes={[{"name":"Add comment to method invocations","href":"java/addcommenttomethodinvocations"},{"name":"Add comment to method invocations","href":"java/addcommenttomethodinvocations"},{"name":"Migrate from Swagger to SpringDoc and OpenAPI","href":"java/springdoc/swaggertospringdoc"},{"name":"Replace SpringFox Dependencies","href":"java/springdoc/replacespringfoxdependencies"},{"name":"Migrate `ApiInfoBuilder` to `Info`","href":"java/spring/doc/apiinfobuildertoinfo"},{"name":"Replace elements of SpringFox's security with Swagger's security models","href":"java/spring/doc/securitycontexttosecurityscheme"},{"name":"Migrate SpringFox `SecurityConfiguration` bean to Springdoc Swagger UI properties","href":"java/spring/doc/migratespringfoxsecurityconfiguration"},{"name":"Migrate from springdoc-openapi-common to springdoc-openapi-starter-common","href":"java/springdoc/migratespringdoccommon"},{"name":"Remove remaining Springfox dead code","href":"java/springdoc/cleanupremainingspringfox"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import springfox.documentation.spring.web.json.JacksonModuleRegistrar;\nimport springfox.documentation.spring.web.json.JsonSerializer;\nimport java.util.List;\n\nclass SwaggerConfig {\n\n    public JsonSerializer jsonSerializer(List<JacksonModuleRegistrar> registrars) {\n        return new JsonSerializer(registrars);\n    }\n}\n","after":"import springfox.documentation.spring.web.json.JacksonModuleRegistrar;\nimport springfox.documentation.spring.web.json.JsonSerializer;\nimport java.util.List;\n\nclass SwaggerConfig {\n\n    public JsonSerializer jsonSerializer(List<JacksonModuleRegistrar> registrars) {\n        return /* TODO: springfox.documentation.spring.web.json types have no SpringDoc equivalent. Remove this Springfox-internal code and use Jackson ObjectMapper directly if JSON serialization is still needed. See https://springdoc.org/migrating-from-springfox.html for guidance. */ new JsonSerializer(registrars);\n    }\n}\n","diff":"@@ -8,1 +8,1 @@\n\n    public JsonSerializer jsonSerializer(List<JacksonModuleRegistrar> registrars) {\n-       return new JsonSerializer(registrars);\n+       return /* TODO: springfox.documentation.spring.web.json types have no SpringDoc equivalent. Remove this Springfox-internal code and use Jackson ObjectMapper directly if JSON serialization is still needed. See https://springdoc.org/migrating-from-springfox.html for guidance. */ new JsonSerializer(registrars);\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"import springfox.documentation.spring.web.json.JacksonModuleRegistrar;\nimport springfox.documentation.spring.web.json.JsonSerializer;\nimport java.util.List;\n\nclass SwaggerConfig {\n\n    public JsonSerializer jsonSerializer(List<JacksonModuleRegistrar> registrars) {\n        return new JsonSerializer(registrars);\n    }\n}\n","after":"import springfox.documentation.spring.web.json.JacksonModuleRegistrar;\nimport springfox.documentation.spring.web.json.JsonSerializer;\nimport java.util.List;\n\nclass SwaggerConfig {\n\n    public JsonSerializer jsonSerializer(List<JacksonModuleRegistrar> registrars) {\n        return /* TODO: springfox.documentation.spring.web.json types have no SpringDoc equivalent. Remove this Springfox-internal code and use Jackson ObjectMapper directly if JSON serialization is still needed. See https://springdoc.org/migrating-from-springfox.html for guidance. */ new JsonSerializer(registrars);\n    }\n}\n","diff":"@@ -8,1 +8,1 @@\n\n    public JsonSerializer jsonSerializer(List<JacksonModuleRegistrar> registrars) {\n-       return new JsonSerializer(registrars);\n+       return /* TODO: springfox.documentation.spring.web.json types have no SpringDoc equivalent. Remove this Springfox-internal code and use Jackson ObjectMapper directly if JSON serialization is still needed. See https://springdoc.org/migrating-from-springfox.html for guidance. */ new JsonSerializer(registrars);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.springdoc.SpringFoxToSpringDoc","displayName":"Migrate from SpringFox Swagger to SpringDoc and OpenAPI","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

