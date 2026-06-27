---
title: "Add trailing slash to Spring routes"
sidebar_label: "Add trailing slash to Spring routes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/boot3/addroutetrailingslash" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add trailing slash to Spring routes"}
  description={"This is part of Spring MVC and WebFlux URL Matching Changes, as of Spring Framework 6.0, the trailing slash matching configuration option has been deprecated and its default value set to false. This means that previously, a controller `@GetMapping(\"/some/greeting\")` would match both `GET /some/greeting` and `GET /some/greeting/`, but it doesn't match `GET /some/greeting/` anymore by default and will result in an HTTP 404 error. This recipe is to add declaration of additional route explicitly on the controller handler (like `@GetMapping(\"/some/greeting\", \"/some/greeting/\")`."}
  fqName={"org.openrewrite.java.spring.boot3.AddRouteTrailingSlash"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot3/AddRouteTrailingSlash.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.boot3.AddRouteTrailingSlash"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.AddRouteTrailingSlash"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot3/addroutetrailingslash.md"}
>

<RecipeHeader.Title>Add trailing slash to Spring routes</RecipeHeader.Title>

<RecipeHeader.Description>This is part of Spring MVC and WebFlux URL Matching Changes, as of Spring Framework 6.0, the trailing slash matching configuration option has been deprecated and its default value set to false. This means that previously, a controller `@GetMapping("/some/greeting")` would match both `GET /some/greeting` and `GET /some/greeting/`, but it doesn't match `GET /some/greeting/` anymore by default and will result in an HTTP 404 error. This recipe is to add declaration of additional route explicitly on the controller handler (like `@GetMapping("/some/greeting", "/some/greeting/")`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.springframework.web.bind.annotation.*;\n\n@RestController\npublic class ExampleController {\n\n    @GetMapping(\"/get\")\n    public String getExample() {\n        return \"This is a GET example.\";\n    }\n}\n","after":"import org.springframework.web.bind.annotation.*;\n\n@RestController\npublic class ExampleController {\n\n    @GetMapping({\"/get\", \"/get/\"})\n    public String getExample() {\n        return \"This is a GET example.\";\n    }\n}\n","diff":"@@ -6,1 +6,1 @@\npublic class ExampleController {\n\n-   @GetMapping(\"/get\")\n+   @GetMapping({\"/get\", \"/get/\"})\n    public String getExample() {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.boot3.AddRouteTrailingSlash","displayName":"Add trailing slash to Spring routes","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

