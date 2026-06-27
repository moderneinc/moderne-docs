---
title: "Migrate `Filter` to `OncePerRequestFilter`"
sidebar_label: "Migrate `Filter` to `OncePerRequestFilter`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `Filter` to `OncePerRequestFilter`"}
  description={"Migrates classes that implement `javax.servlet.Filter` (or `jakarta.servlet.Filter`) to extend `org.springframework.web.filter.OncePerRequestFilter`. This transformation renames `doFilter` to `doFilterInternal`, changes parameter types to HTTP variants, removes manual casting, and removes empty `init()` and `destroy()` methods."}
  fqName={"io.moderne.java.spring.framework.MigrateFilterToOncePerRequestFilter"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.framework.MigrateFilterToOncePerRequestFilter"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.framework.MigrateFilterToOncePerRequestFilter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework/migratefiltertoonceperrequestfilter.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `Filter` to `OncePerRequestFilter`</RecipeHeader.Title>

<RecipeHeader.Description>Migrates classes that implement `javax.servlet.Filter` (or `jakarta.servlet.Filter`) to extend `org.springframework.web.filter.OncePerRequestFilter`. This transformation renames `doFilter` to `doFilterInternal`, changes parameter types to HTTP variants, removes manual casting, and removes empty `init()` and `destroy()` methods.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import javax.servlet.*;\nimport javax.servlet.http.*;\nimport java.io.IOException;\n\npublic class CustomFilter implements Filter {\n    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\n            throws IOException, ServletException {\n        // custom logic\n        chain.doFilter(request, response);\n    }\n}\n","after":"import org.springframework.web.filter.OncePerRequestFilter;\n\nimport javax.servlet.FilterChain;\nimport javax.servlet.ServletException;\nimport javax.servlet.ServletRequest;\nimport javax.servlet.ServletResponse;\nimport javax.servlet.http.*;\nimport java.io.IOException;\n\npublic class CustomFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)\n            throws IOException, ServletException {\n        // custom logic\n        chain.doFilter(request, response);\n    }\n}\n","diff":"@@ -1,1 +1,6 @@\n-import javax.servlet.*;\n+import org.springframework.web.filter.OncePerRequestFilter;\n+\n+import javax.servlet.FilterChain;\n+import javax.servlet.ServletException;\n+import javax.servlet.ServletRequest;\n+import javax.servlet.ServletResponse;\nimport javax.servlet.http.*;\n@@ -5,2 +10,3 @@\nimport java.io.IOException;\n\n-public class CustomFilter implements Filter {\n-   public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)\n+public class CustomFilter extends OncePerRequestFilter {\n+   @Override\n+   protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)\n            throws IOException, ServletException {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.framework.MigrateFilterToOncePerRequestFilter","displayName":"Migrate `Filter` to `OncePerRequestFilter`","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

