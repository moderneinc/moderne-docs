---
title: "Find Struts actions"
sidebar_label: "Find Struts actions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Struts actions"}
  description={"Find actions and their associated definitions."}
  fqName={"org.openrewrite.java.struts.search.FindStrutsActions"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find Struts actions"}
  description={"Find actions and their associated definitions."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.struts.search.FindStrutsActions"}
  artifact={"org.openrewrite.recipe:rewrite-struts"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.struts.search.FindStrutsActions"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/struts/search/findstrutsactions.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"xml","before":"<struts>\n    <package name=\"basicstruts2\" extends=\"struts-default\">\n        <action name=\"index\">\n            <result>/index.jsp</result>\n        </action>\n        <action name=\"hello\" class=\"org.apache.struts.helloworld.action.HelloWorldAction\" method=\"execute\">\n            <result name=\"success\">/HelloWorld.jsp</result>\n        </action>\n    </package>\n</struts>\n","after":"<struts>\n    <package name=\"basicstruts2\" extends=\"struts-default\">\n        <!--~~>--><action name=\"index\">\n            <result>/index.jsp</result>\n        </action>\n        <!--~~>--><action name=\"hello\" class=\"org.apache.struts.helloworld.action.HelloWorldAction\" method=\"execute\">\n            <result name=\"success\">/HelloWorld.jsp</result>\n        </action>\n    </package>\n</struts>\n","diff":"@@ -3,1 +3,1 @@\n<struts>\n    <package name=\"basicstruts2\" extends=\"struts-default\">\n-       <action name=\"index\">\n+       <!--~~>--><action name=\"index\">\n            <result>/index.jsp</result>\n@@ -6,1 +6,1 @@\n            <result>/index.jsp</result>\n        </action>\n-       <action name=\"hello\" class=\"org.apache.struts.helloworld.action.HelloWorldAction\" method=\"execute\">\n+       <!--~~>--><action name=\"hello\" class=\"org.apache.struts.helloworld.action.HelloWorldAction\" method=\"execute\">\n            <result name=\"success\">/HelloWorld.jsp</result>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.struts.search.FindStrutsActions","displayName":"Find Struts actions","groupId":"org.openrewrite.recipe","artifactId":"rewrite-struts","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STRUTS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.struts.table.StrutsActions","displayName":"Struts actions","description":"Definition of struts action.","columns":[{"name":"Source file","description":"The source file that the action is defined in."},{"name":"Package","description":"The package of the action."},{"name":"Action name","description":"The name of the action."},{"name":"Class","description":"The action class."},{"name":"Method name","description":"The method name of the action method."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

