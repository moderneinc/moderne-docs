---
title: "Copy non-inherited annotations from super class"
sidebar_label: "Copy non-inherited annotations from super class"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/micronaut/copynoninheritedannotations" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Copy non-inherited annotations from super class"}
  description={"As of Micronaut 3.x only [annotations](https://github.com/micronaut-projects/micronaut-core/blob/3.0.x/src/main/docs/guide/appendix/breaks.adoc#annotation-inheritance) that are explicitly meta-annotated with `@Inherited` are inherited from parent classes and interfaces."}
  fqName={"org.openrewrite.java.micronaut.CopyNonInheritedAnnotations"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/CopyNonInheritedAnnotations.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.micronaut.CopyNonInheritedAnnotations"}
  artifact={"org.openrewrite.recipe:rewrite-micronaut"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.micronaut.CopyNonInheritedAnnotations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/micronaut/copynoninheritedannotations.md"}
>

<RecipeHeader.Title>Copy non-inherited annotations from super class</RecipeHeader.Title>

<RecipeHeader.Description>As of Micronaut 3.x only [annotations](https://github.com/micronaut-projects/micronaut-core/blob/3.0.x/src/main/docs/guide/appendix/breaks.adoc#annotation-inheritance) that are explicitly meta-annotated with `@Inherited` are inherited from parent classes and interfaces.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"package abc;\nimport io.micronaut.http.annotation.Controller;\nimport io.micronaut.http.annotation.Get;\n\npublic class SuperClass {\n\n    @Controller\n    public class MyController extends MiddleController {\n        @Get\n        public String info() {\n            return \"system info: \";\n        }\n    }\n}\n","after":"package abc;\nimport io.micronaut.http.annotation.Controller;\nimport io.micronaut.http.annotation.Get;\nimport io.micronaut.runtime.context.scope.Refreshable;\n\npublic class SuperClass {\n\n    @Controller\n    @Refreshable\n    public class MyController extends MiddleController {\n        @Get\n        public String info() {\n            return \"system info: \";\n        }\n    }\n}\n","diff":"@@ -4,0 +4,1 @@\nimport io.micronaut.http.annotation.Controller;\nimport io.micronaut.http.annotation.Get;\n+import io.micronaut.runtime.context.scope.Refreshable;\n\n@@ -8,0 +9,1 @@\n\n    @Controller\n+   @Refreshable\n    public class MyController extends MiddleController {\n","newFile":false},{"language":"java","before":"package abc;\nimport io.micronaut.runtime.context.scope.Refreshable;\n\n@Refreshable\npublic abstract class BaseController {\n}\n\npublic abstract class MiddleController extends BaseController {\n}\n","after":"package abc;\nimport io.micronaut.runtime.context.scope.Refreshable;\n\n@Refreshable\npublic abstract class BaseController {\n}\n\n@Refreshable\npublic abstract class MiddleController extends BaseController {\n}\n","diff":"@@ -8,0 +8,1 @@\n}\n\n+@Refreshable\npublic abstract class MiddleController extends BaseController {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.micronaut.CopyNonInheritedAnnotations","displayName":"Copy non-inherited annotations from super class","groupId":"org.openrewrite.recipe","artifactId":"rewrite-micronaut","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

