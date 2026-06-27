---
title: "Adds a TimeUnit argument to the matched method invocations"
sidebar_label: "Adds a TimeUnit argument to the matched method invocations"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/httpclient5/addtimeunitargument" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Adds a TimeUnit argument to the matched method invocations"}
  description={"In Apache Http Client 5.x migration, an extra TimeUnit argument is required in the timeout and duration methods. Previously in 4.x, all these methods were implicitly having the timeout or duration expressed in milliseconds, but in 5.x the unit of the timeout or duration is required. So, by default this recipe adds `TimeUnit.MILLISECONDS`, it is possible to specify this as a parameter. Since all affected methods of the Apache Http Client 5.x migration only have one integer/long argument, the recipe applies with matched method invocations of exactly one parameter."}
  fqName={"org.openrewrite.apache.httpclient5.AddTimeUnitArgument"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/httpclient5/AddTimeUnitArgument.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.httpclient5.AddTimeUnitArgument"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.AddTimeUnitArgument"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/httpclient5/addtimeunitargument.md"}
>

<RecipeHeader.Title>Adds a TimeUnit argument to the matched method invocations</RecipeHeader.Title>

<RecipeHeader.Description>In Apache Http Client 5.x migration, an extra TimeUnit argument is required in the timeout and duration methods. Previously in 4.x, all these methods were implicitly having the timeout or duration expressed in milliseconds, but in 5.x the unit of the timeout or duration is required. So, by default this recipe adds `TimeUnit.MILLISECONDS`, it is possible to specify this as a parameter. Since all affected methods of the Apache Http Client 5.x migration only have one integer/long argument, the recipe applies with matched method invocations of exactly one parameter.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern that is used to find matching method invocations.","example":"org.apache.http.client.config.RequestConfig.Builder setConnectionRequestTimeout(int)"},{"type":"TimeUnit","name":"timeUnit","required":false,"description":"The TimeUnit enum value we want to add to the method invocation. Defaults to `MILLISECONDS`.","example":"MILLISECONDS"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"A method(int)"},{"parameter":"timeUnit","value":"null"}],"variants":[{"language":"java","before":"class B {\n    void test() {\n        A a = new A();\n        a.method(100);\n    }\n}\n","after":"import java.util.concurrent.TimeUnit;\n\nclass B {\n    void test() {\n        A a = new A();\n        a.method(100, TimeUnit.MILLISECONDS);\n    }\n}\n","diff":"@@ -1,0 +1,2 @@\n+import java.util.concurrent.TimeUnit;\n+\nclass B {\n@@ -4,1 +6,1 @@\n    void test() {\n        A a = new A();\n-       a.method(100);\n+       a.method(100, TimeUnit.MILLISECONDS);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.httpclient5.AddTimeUnitArgument","displayName":"Adds a TimeUnit argument to the matched method invocations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=org.apache.http.client.config.RequestConfig.Builder setConnectionRequestTimeout(int)\" --recipe-option \"timeUnit=MILLISECONDS\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

