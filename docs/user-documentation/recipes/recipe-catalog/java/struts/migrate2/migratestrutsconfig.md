---
title: "Migrate `struts-config.xml` to `struts.xml`"
sidebar_label: "Migrate `struts-config.xml` to `struts.xml`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `struts-config.xml` to `struts.xml`"}
  description={"Transforms Struts 1.x `struts-config.xml` to Struts 2.x `struts.xml` format."}
  fqName={"org.openrewrite.java.struts.migrate2.MigrateStrutsConfig"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.struts.migrate2.MigrateStrutsConfig"}
  artifact={"org.openrewrite.recipe:rewrite-struts"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.struts.migrate2.MigrateStrutsConfig"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/struts/migrate2/migratestrutsconfig.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `struts-config.xml` to `struts.xml`</RecipeHeader.Title>

<RecipeHeader.Description>Transforms Struts 1.x `struts-config.xml` to Struts 2.x `struts.xml` format.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE struts-config PUBLIC\n    \"-//Apache Software Foundation//DTD Struts Configuration 1.2//EN\"\n    \"http://struts.apache.org/dtds/struts-config_1_2.dtd\">\n<struts-config>\n    <action-mappings>\n        <action path=\"/login\" type=\"com.example.LoginAction\">\n            <forward name=\"success\" path=\"/welcome.jsp\"/>\n        </action>\n    </action-mappings>\n</struts-config>\n","after":"<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE struts-config PUBLIC\n    \"-//Apache Software Foundation//DTD Struts Configuration 1.2//EN\"\n    \"http://struts.apache.org/dtds/struts-config_1_2.dtd\">\n<struts>\n    <package name=\"default\" extends=\"struts-default\">\n        <action name=\"login\" class=\"com.example.LoginAction\">\n            <result name=\"success\">/welcome.jsp</result>\n        </action>\n    </package>\n</struts>\n","diff":"@@ -5,4 +5,4 @@\n    \"-//Apache Software Foundation//DTD Struts Configuration 1.2//EN\"\n    \"http://struts.apache.org/dtds/struts-config_1_2.dtd\">\n-<struts-config>\n-   <action-mappings>\n-       <action path=\"/login\" type=\"com.example.LoginAction\">\n-           <forward name=\"success\" path=\"/welcome.jsp\"/>\n+<struts>\n+   <package name=\"default\" extends=\"struts-default\">\n+       <action name=\"login\" class=\"com.example.LoginAction\">\n+           <result name=\"success\">/welcome.jsp</result>\n        </action>\n@@ -10,2 +10,2 @@\n            <forward name=\"success\" path=\"/welcome.jsp\"/>\n        </action>\n-   </action-mappings>\n-</struts-config>\n+   </package>\n+</struts>\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.struts.migrate2.MigrateStrutsConfig","displayName":"Migrate `struts-config.xml` to `struts.xml`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-struts","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

