---
title: "Changes an argument (or pair of arguments) to a `TimeValue` for matched method invocations"
sidebar_label: "Changes an argument (or pair of arguments) to a `TimeValue` for matched method invocations"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/apache/httpclient5/changeargumenttotimevalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Changes an argument (or pair of arguments) to a `TimeValue` for matched method invocations"}
  description={"In Apache Http Client 5.x migration, some methods that previously took a single `long` argument, or a pair of arguments of type `long` and `TimeUnit` respectively, have changed to take a `TimeValue`. Previously in 4.x, all these single `long` argument methods were implicitly having the value expressed in milliseconds. By default this recipe uses `TimeUnit.MILLISECONDS` for the `TimeUnit` when creating a `TimeValue`. It is possible to specify this as a option. The `timeUnit` option will be ignored for cases matching `*(long, TimeUnit)."}
  fqName={"org.openrewrite.apache.httpclient5.ChangeArgumentToTimeValue"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/httpclient5/ChangeArgumentToTimeValue.java"}
/>

<RecipeHeader
  displayName={"Changes an argument (or pair of arguments) to a `TimeValue` for matched method invocations"}
  description={"In Apache Http Client 5.x migration, some methods that previously took a single `long` argument, or a pair of arguments of type `long` and `TimeUnit` respectively, have changed to take a `TimeValue`. Previously in 4.x, all these single `long` argument methods were implicitly having the value expressed in milliseconds. By default this recipe uses `TimeUnit.MILLISECONDS` for the `TimeUnit` when creating a `TimeValue`. It is possible to specify this as a option. The `timeUnit` option will be ignored for cases matching `*(long, TimeUnit)."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.apache.httpclient5.ChangeArgumentToTimeValue"}
  artifact={"org.openrewrite.recipe:rewrite-apache"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.apache.httpclient5.ChangeArgumentToTimeValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/apache/httpclient5/changeargumenttotimevalue.md"}
/>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern that is used to find matching method invocations.","example":"org.apache.http.impl.nio.reactor.IOReactorConfig.Builder setSelectInterval(long)"},{"type":"TimeUnit","name":"timeUnit","required":false,"description":"The TimeUnit enum value we want to use to turn the original value into a TimeValue. Defaults to `MILLISECONDS`.","example":"MILLISECONDS"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"A method(long)"},{"parameter":"timeUnit","value":"null"}],"variants":[{"language":"java","before":"class B {\n    void test() {\n        A a = new A();\n        a.method(100);\n    }\n}\n","after":"import org.apache.hc.core5.util.TimeValue;\n\nimport java.util.concurrent.TimeUnit;\n\nclass B {\n    void test() {\n        A a = new A();\n        a.method(TimeValue.of(100, TimeUnit.MILLISECONDS));\n    }\n}\n","diff":"@@ -1,0 +1,4 @@\n+import org.apache.hc.core5.util.TimeValue;\n+\n+import java.util.concurrent.TimeUnit;\n+\nclass B {\n@@ -4,1 +8,1 @@\n    void test() {\n        A a = new A();\n-       a.method(100);\n+       a.method(TimeValue.of(100, TimeUnit.MILLISECONDS));\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.apache.httpclient5.ChangeArgumentToTimeValue","displayName":"Changes an argument (or pair of arguments) to a `TimeValue` for matched method invocations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-apache","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=org.apache.http.impl.nio.reactor.IOReactorConfig.Builder setSelectInterval(long)\" --recipe-option \"timeUnit=MILLISECONDS\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

