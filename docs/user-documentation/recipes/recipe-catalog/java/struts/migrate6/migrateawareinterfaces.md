---
title: "Migrate Struts 2.0 interceptors to action &quot;aware&quot; interfaces"
sidebar_label: "Migrate Struts 2.0 interceptors to action &quot;aware&quot; interfaces"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Struts 2.0 interceptors to action \"aware\" interfaces"}
  description={"These types have moved to a new package in Struts 6.0 and their methods have been renamed from set* to with*."}
  fqName={"org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces"}
  artifact={"org.openrewrite.recipe:rewrite-struts"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/struts/migrate6/migrateawareinterfaces.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate Struts 2.0 interceptors to action "aware" interfaces</RecipeHeader.Title>

<RecipeHeader.Description>These types have moved to a new package in Struts 6.0 and their methods have been renamed from set* to with*.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change method name","href":"/user-documentation/recipes/recipe-catalog/java/changemethodname/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.opensymphony.xwork2.ActionInvocation;\nimport com.opensymphony.xwork2.interceptor.AbstractInterceptor;\nimport org.apache.struts2.interceptor.SessionAware;\n\nimport java.util.Map;\n\npublic class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {\n\n    private Map<String, Object> session;\n\n    @Override\n    public void setSession(Map<String, Object> session) {\n        this.session = session;\n    }\n\n    @Override\n    public String intercept(ActionInvocation invocation) throws Exception {\n        return invocation.invoke();\n    }\n}\n","after":"import com.opensymphony.xwork2.ActionInvocation;\nimport com.opensymphony.xwork2.interceptor.AbstractInterceptor;\nimport org.apache.struts2.action.SessionAware;\n\nimport java.util.Map;\n\npublic class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {\n\n    private Map<String, Object> session;\n\n    @Override\n    public void withSession(Map<String, Object> session) {\n        this.session = session;\n    }\n\n    @Override\n    public String intercept(ActionInvocation invocation) throws Exception {\n        return invocation.invoke();\n    }\n}\n","diff":"@@ -3,1 +3,1 @@\nimport com.opensymphony.xwork2.ActionInvocation;\nimport com.opensymphony.xwork2.interceptor.AbstractInterceptor;\n-import org.apache.struts2.interceptor.SessionAware;\n+import org.apache.struts2.action.SessionAware;\n\n@@ -12,1 +12,1 @@\n\n    @Override\n-   public void setSession(Map<String, Object> session) {\n+   public void withSession(Map<String, Object> session) {\n        this.session = session;\n","newFile":false}]},{"variants":[{"language":"java","before":"import com.opensymphony.xwork2.ActionInvocation;\nimport com.opensymphony.xwork2.interceptor.AbstractInterceptor;\nimport org.apache.struts2.interceptor.SessionAware;\n\nimport java.util.Map;\n\npublic class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {\n\n    private Map<String, Object> session;\n\n    @Override\n    public void setSession(Map<String, Object> session) {\n        this.session = session;\n    }\n\n    @Override\n    public String intercept(ActionInvocation invocation) throws Exception {\n        return invocation.invoke();\n    }\n}\n","after":"import com.opensymphony.xwork2.ActionInvocation;\nimport com.opensymphony.xwork2.interceptor.AbstractInterceptor;\nimport org.apache.struts2.action.SessionAware;\n\nimport java.util.Map;\n\npublic class CustomSecurityInterceptor extends AbstractInterceptor implements SessionAware {\n\n    private Map<String, Object> session;\n\n    @Override\n    public void withSession(Map<String, Object> session) {\n        this.session = session;\n    }\n\n    @Override\n    public String intercept(ActionInvocation invocation) throws Exception {\n        return invocation.invoke();\n    }\n}\n","diff":"@@ -3,1 +3,1 @@\nimport com.opensymphony.xwork2.ActionInvocation;\nimport com.opensymphony.xwork2.interceptor.AbstractInterceptor;\n-import org.apache.struts2.interceptor.SessionAware;\n+import org.apache.struts2.action.SessionAware;\n\n@@ -12,1 +12,1 @@\n\n    @Override\n-   public void setSession(Map<String, Object> session) {\n+   public void withSession(Map<String, Object> session) {\n        this.session = session;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.struts.migrate6.MigrateAwareInterfaces","displayName":"Migrate Struts 2.0 interceptors to action \"aware\" interfaces","groupId":"org.openrewrite.recipe","artifactId":"rewrite-struts","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

