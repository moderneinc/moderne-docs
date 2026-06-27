---
title: "Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`"
sidebar_label: "Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/hibernate/emptyinterceptortointerface" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`"}
  description={"In Hibernate 6.0 the `Interceptor` interface received default implementations therefore the NOOP implementation that could be extended was no longer needed. This recipe migrates 5.x `Interceptor#onPrepareStatement(String)` to 6.0 `StatementInspector#inspect()`."}
  fqName={"org.openrewrite.hibernate.EmptyInterceptorToInterface"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/java/org/openrewrite/hibernate/EmptyInterceptorToInterface.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.hibernate.EmptyInterceptorToInterface"}
  artifact={"org.openrewrite.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.hibernate.EmptyInterceptorToInterface"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/emptyinterceptortointerface.md"}
>

<RecipeHeader.Title>Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`</RecipeHeader.Title>

<RecipeHeader.Description>In Hibernate 6.0 the `Interceptor` interface received default implementations therefore the NOOP implementation that could be extended was no longer needed. This recipe migrates 5.x `Interceptor#onPrepareStatement(String)` to 6.0 `StatementInspector#inspect()`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.hibernate.EmptyInterceptor;\n\nclass MyInterceptor extends EmptyInterceptor {\n\n    @Override\n    public String onPrepareStatement(String sql) {\n        return sql;\n    }\n}\n","after":"import org.hibernate.Interceptor;\nimport org.hibernate.resource.jdbc.spi.StatementInspector;\n\nclass MyInterceptor implements Interceptor, StatementInspector {\n\n    @Override\n    public String inspect(String sql) {\n        return sql;\n    }\n}\n","diff":"@@ -1,1 +1,2 @@\n-import org.hibernate.EmptyInterceptor;\n+import org.hibernate.Interceptor;\n+import org.hibernate.resource.jdbc.spi.StatementInspector;\n\n@@ -3,1 +4,1 @@\nimport org.hibernate.EmptyInterceptor;\n\n-class MyInterceptor extends EmptyInterceptor {\n+class MyInterceptor implements Interceptor, StatementInspector {\n\n@@ -6,1 +7,1 @@\n\n    @Override\n-   public String onPrepareStatement(String sql) {\n+   public String inspect(String sql) {\n        return sql;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.hibernate.EmptyInterceptorToInterface","displayName":"Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

