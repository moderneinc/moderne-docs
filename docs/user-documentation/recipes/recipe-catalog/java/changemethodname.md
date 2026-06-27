---
title: "Change method name"
sidebar_label: "Change method name"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/changemethodname" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change method name"}
  description={"Rename a method."}
  fqName={"org.openrewrite.java.ChangeMethodName"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodName.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.ChangeMethodName"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.ChangeMethodName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/changemethodname.md"}
>

<RecipeHeader.Title>Change method name</RecipeHeader.Title>

<RecipeHeader.Description>Rename a method.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results.","example":"org.mockito.Matchers anyVararg()"},{"type":"String","name":"newMethodName","required":true,"description":"The method name that will replace the existing name.","example":"any"},{"type":"Boolean","name":"matchOverrides","required":false,"description":"When enabled, find methods that are overrides of the method pattern."},{"type":"Boolean","name":"ignoreDefinition","required":false,"description":"When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"com.abc.B singleArg(String)"},{"parameter":"newMethodName","value":"bar"},{"parameter":"matchOverrides","value":"null"},{"parameter":"ignoreDefinition","value":"null"}],"variants":[{"language":"java","before":"package com.abc;\nclass A {\n   public void test() {\n       new B().singleArg(\"boo\");\n   }\n}\n","after":"package com.abc;\nclass A {\n   public void test() {\n       new B().bar(\"boo\");\n   }\n}\n","diff":"@@ -4,1 +4,1 @@\nclass A {\n   public void test() {\n-      new B().singleArg(\"boo\");\n+      new B().bar(\"boo\");\n   }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.ChangeMethodName","displayName":"Change method name","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=org.mockito.Matchers anyVararg()\" --recipe-option \"newMethodName=any\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

