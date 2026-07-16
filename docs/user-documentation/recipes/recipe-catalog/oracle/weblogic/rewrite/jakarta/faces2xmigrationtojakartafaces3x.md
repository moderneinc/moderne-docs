---
title: "JSF 2.x to Jakarta Server Faces 3.x"
sidebar_label: "JSF 2.x to Jakarta Server Faces 3.x"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/oracle/weblogic/rewrite/jakarta/faces2xmigrationtojakartafaces3x" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"JSF 2.x to Jakarta Server Faces 3.x"}
  description={"Jakarta EE 9 uses Faces 3.0 a major upgrade to Jakarta packages and XML namespaces."}
  fqName={"com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["faces","jsf","jakarta","jakartaee"]}
  license={"Apache License Version 2.0"}
  fqName={"com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/faces2xmigrationtojakartafaces3x.md"}
>

<RecipeHeader.Title>JSF 2.x to Jakarta Server Faces 3.x</RecipeHeader.Title>

<RecipeHeader.Description>Jakarta EE 9 uses Faces 3.0 a major upgrade to Jakarta packages and XML namespaces.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate JSF values inside EcmaScript files","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/jakartafacesecmascript/"},{"name":"Replace `CURRENT_COMPONENT` and `CURRENT_COMPOSITE_COMPONENT` with `getCurrentComponent()` and `getCurrentCompositeComponent()`","href":"/user-documentation/recipes/recipe-catalog/java/migrate/jakarta/removeduicomponentconstant/"},{"name":"Faces XHTML migration for Jakarta EE 9","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/jakartafaces3xhtml/"},{"name":"Migrate xmlns entries in `faces-config.xml` files for Jakarta Server Faces 3","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxfacesconfigxmltojakartafaces3configxml/"},{"name":"Migrate xmlns entries in `*taglib*.xml` files for Jakarta Server Faces 3","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxfacestaglibraryxmltojakartafaces3taglibraryxml/"},{"name":"Migrate xmlns entries in `test-web.xml` files for Jakarta Server Faces 3 using test interfaces","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxtestwebxmltojakartatestwebxml5/"},{"name":"Migrate xmlns entries in `web-fragment.xml` files for Jakarta Server Faces 3","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxwebfragmentxmltojakartawebfragmentxml5/"},{"name":"Migrate xmlns entries in `web.xml` files for Jakarta Server Faces 3","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/javaxwebxmltojakartawebxml5/"},{"name":"JNDI name `jsf/ClientSideSecretKey` has been renamed to `faces/ClientSideSecretKey`, and the `jsf/FlashSecretKey` JNDI name has been renamed to `faces/FlashSecretKey`.","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/facesjndinameschanged3/"},{"name":"Use `jakarta.el` instead of `jakarta.faces.el` and `javax.faces.el`","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/removedjakartafaces3expressionlanguageclasses/"},{"name":"Update deprecated Faces method calls","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/updatejakartafacesmethodcalls/"},{"name":"Replace `ResourceResolver` with `ResourceHandler`","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/removedjakartafaces3resourceresolver/"},{"name":"Use `StateManagementStrategy`","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/removedstatemanagermethods3/"},{"name":"Substitute deprecated Faces Managed Beans","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/facesmanagedbeansremoved3/"},{"name":"Upgrade Faces open source libraries","href":"/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/upgradefacesopensourcelibraries3/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x","displayName":"JSF 2.x to Jakarta Server Faces 3.x","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

