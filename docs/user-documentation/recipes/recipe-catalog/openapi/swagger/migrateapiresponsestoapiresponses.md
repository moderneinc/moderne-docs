---
title: "Migrate from `@ApiResponses` to `@ApiResponses`"
sidebar_label: "Migrate from `@ApiResponses` to `@ApiResponses`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/openapi/swagger/migrateapiresponsestoapiresponses" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from `@ApiResponses` to `@ApiResponses`"}
  description={"Changes the namespace of the `@ApiResponses` and `@ApiResponse` annotations and converts its attributes (ex. code -> responseCode, message -> description, response -> content)."}
  fqName={"org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-openapi/blob/main/src/main/resources/META-INF/rewrite/swagger-2.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["openapi","swagger"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses"}
  artifact={"org.openrewrite.recipe:rewrite-openapi"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/openapi/swagger/migrateapiresponsestoapiresponses.md"}
>

<RecipeHeader.Title>Migrate from `@ApiResponses` to `@ApiResponses`</RecipeHeader.Title>

<RecipeHeader.Description>Changes the namespace of the `@ApiResponses` and `@ApiResponse` annotations and converts its attributes (ex. code -> responseCode, message -> description, response -> content).</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change annotation attribute name","href":"/user-documentation/recipes/recipe-catalog/java/changeannotationattributename/"},{"name":"Change annotation attribute name","href":"/user-documentation/recipes/recipe-catalog/java/changeannotationattributename/"},{"name":"Convert API response codes to strings","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/convertapiresponsecodestostrings/"},{"name":"Convert API response to content annotation","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/convertapiresponsetocontent/"},{"name":"Convert API responseHeaders to headers","href":"/user-documentation/recipes/recipe-catalog/openapi/swagger/convertapiresponseheaderstoheaders/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import io.swagger.annotations.ApiResponse;\nimport org.springframework.http.ResponseEntity;\n\nclass A {\n    @ApiResponse(code = 200, message = \"OK\", response = User.class)\n    ResponseEntity<User> method() { return null; }\n}\n","after":"import io.swagger.v3.oas.annotations.media.Content;\nimport io.swagger.v3.oas.annotations.media.Schema;\nimport io.swagger.v3.oas.annotations.responses.ApiResponse;\nimport org.springframework.http.ResponseEntity;\n\nclass A {\n    @ApiResponse(responseCode = \"200\", description = \"OK\", content = @Content(mediaType = \"application/json\", schema = @Schema(implementation = User.class)))\n    ResponseEntity<User> method() { return null; }\n}\n","diff":"@@ -1,1 +1,3 @@\n-import io.swagger.annotations.ApiResponse;\n+import io.swagger.v3.oas.annotations.media.Content;\n+import io.swagger.v3.oas.annotations.media.Schema;\n+import io.swagger.v3.oas.annotations.responses.ApiResponse;\nimport org.springframework.http.ResponseEntity;\n@@ -5,1 +7,1 @@\n\nclass A {\n-   @ApiResponse(code = 200, message = \"OK\", response = User.class)\n+   @ApiResponse(responseCode = \"200\", description = \"OK\", content = @Content(mediaType = \"application/json\", schema = @Schema(implementation = User.class)))\n    ResponseEntity<User> method() { return null; }\n","newFile":false}]},{"variants":[{"language":"java","before":"import io.swagger.annotations.ApiResponse;\nimport org.springframework.http.ResponseEntity;\n\nclass A {\n    @ApiResponse(code = 200, message = \"OK\", response = User.class)\n    ResponseEntity<User> method() { return null; }\n}\n","after":"import io.swagger.v3.oas.annotations.media.Content;\nimport io.swagger.v3.oas.annotations.media.Schema;\nimport io.swagger.v3.oas.annotations.responses.ApiResponse;\nimport org.springframework.http.ResponseEntity;\n\nclass A {\n    @ApiResponse(responseCode = \"200\", description = \"OK\", content = @Content(mediaType = \"application/json\", schema = @Schema(implementation = User.class)))\n    ResponseEntity<User> method() { return null; }\n}\n","diff":"@@ -1,1 +1,3 @@\n-import io.swagger.annotations.ApiResponse;\n+import io.swagger.v3.oas.annotations.media.Content;\n+import io.swagger.v3.oas.annotations.media.Schema;\n+import io.swagger.v3.oas.annotations.responses.ApiResponse;\nimport org.springframework.http.ResponseEntity;\n@@ -5,1 +7,1 @@\n\nclass A {\n-   @ApiResponse(code = 200, message = \"OK\", response = User.class)\n+   @ApiResponse(responseCode = \"200\", description = \"OK\", content = @Content(mediaType = \"application/json\", schema = @Schema(implementation = User.class)))\n    ResponseEntity<User> method() { return null; }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses","displayName":"Migrate from `@ApiResponses` to `@ApiResponses`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-openapi","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

