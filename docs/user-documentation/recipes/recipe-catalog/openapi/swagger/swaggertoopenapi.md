---
title: "Migrate from Swagger to OpenAPI"
sidebar_label: "Migrate from Swagger to OpenAPI"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/openapi/swagger/swaggertoopenapi" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from Swagger to OpenAPI"}
  description={"Migrate from Swagger to OpenAPI."}
  fqName={"org.openrewrite.openapi.swagger.SwaggerToOpenAPI"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-openapi/blob/main/src/main/resources/META-INF/rewrite/swagger-2.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["openapi","swagger"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.openapi.swagger.SwaggerToOpenAPI"}
  artifact={"org.openrewrite.recipe:rewrite-openapi"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.openapi.swagger.SwaggerToOpenAPI"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/openapi/swagger/swaggertoopenapi.md"}
>

<RecipeHeader.Title>Migrate from Swagger to OpenAPI</RecipeHeader.Title>

<RecipeHeader.Description>Migrate from Swagger to OpenAPI.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/changedependency/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Replace springfox `@ApiIgnore` on method parameters with `@Parameter(hidden = true)`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapiignoreparametertoparameterhidden/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Migrate from `@ApiOperation` to `@Operation`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapioperationtooperation/"},{"name":"Migrate from `@ApiResponses` to `@ApiResponses`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapiresponsestoapiresponses/"},{"name":"Migrate from `@ApiImplicitParams`  to `@Parameters`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapiimplicitparamstoparameters/"},{"name":"Migrate from `@Api` to `@Tag`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapitotag/"},{"name":"Migrate from `@ApiParam` to `@Parameter`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapiparamtoparameter/"},{"name":"Migrate from `@ApiModelProperty` to `@Schema`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapimodelpropertytoschema/"},{"name":"Migrate from `@ApiModel` to `@Schema`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapimodeltoschema/"},{"name":"Migrate from `@SwaggerDefinition` to `@OpenAPIDefinition`","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateswaggerdefinitiontoopenapidefinition/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-annotations</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-models</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-core</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-jersey2-jaxrs</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-jaxrs</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n  </dependencies>\n</project>\n"},"variants":[{"language":"java","before":"import io.swagger.annotations.ApiModel;\nimport io.swagger.annotations.ApiModelProperty;\n\n@ApiModel(value=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n  @ApiModelProperty(value = \"ApiModelPropertyExampleValue\", position = 1)\n  private String example;\n}\n","after":"import io.swagger.v3.oas.annotations.media.Schema;\n\n@Schema(name=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n  @Schema(description = \"ApiModelPropertyExampleValue\")\n  private String example;\n}\n","diff":"@@ -1,2 +1,1 @@\n-import io.swagger.annotations.ApiModel;\n-import io.swagger.annotations.ApiModelProperty;\n+import io.swagger.v3.oas.annotations.media.Schema;\n\n@@ -4,1 +3,1 @@\nimport io.swagger.annotations.ApiModelProperty;\n\n-@ApiModel(value=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\n+@Schema(name=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n@@ -6,1 +5,1 @@\n@ApiModel(value=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n- @ApiModelProperty(value = \"ApiModelPropertyExampleValue\", position = 1)\n+ @Schema(description = \"ApiModelPropertyExampleValue\")\n  private String example;\n","newFile":false}]},{"unchanged":{"language":"xml","code":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>demo</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <dependencies>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-annotations</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-models</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-core</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-jersey2-jaxrs</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n    <dependency>\n      <groupId>io.swagger</groupId>\n      <artifactId>swagger-jaxrs</artifactId>\n      <version>1.6.14</version>\n    </dependency>\n  </dependencies>\n</project>\n"},"variants":[{"language":"java","before":"import io.swagger.annotations.ApiModel;\nimport io.swagger.annotations.ApiModelProperty;\n\n@ApiModel(value=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n  @ApiModelProperty(value = \"ApiModelPropertyExampleValue\", position = 1)\n  private String example;\n}\n","after":"import io.swagger.v3.oas.annotations.media.Schema;\n\n@Schema(name=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n  @Schema(description = \"ApiModelPropertyExampleValue\")\n  private String example;\n}\n","diff":"@@ -1,2 +1,1 @@\n-import io.swagger.annotations.ApiModel;\n-import io.swagger.annotations.ApiModelProperty;\n+import io.swagger.v3.oas.annotations.media.Schema;\n\n@@ -4,1 +3,1 @@\nimport io.swagger.annotations.ApiModelProperty;\n\n-@ApiModel(value=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\n+@Schema(name=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n@@ -6,1 +5,1 @@\n@ApiModel(value=\"ApiModelExampleValue\", description=\"ApiModelExampleDescription\")\nclass Example {\n- @ApiModelProperty(value = \"ApiModelPropertyExampleValue\", position = 1)\n+ @Schema(description = \"ApiModelPropertyExampleValue\")\n  private String example;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.openapi.swagger.SwaggerToOpenAPI","displayName":"Migrate from Swagger to OpenAPI","groupId":"org.openrewrite.recipe","artifactId":"rewrite-openapi","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

