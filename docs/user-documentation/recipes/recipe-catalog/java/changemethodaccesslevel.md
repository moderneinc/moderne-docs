---
title: "Change method access level"
sidebar_label: "Change method access level"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/changemethodaccesslevel" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change method access level"}
  description={"Change the access level (public, protected, private, package private) of a method."}
  fqName={"org.openrewrite.java.ChangeMethodAccessLevel"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodAccessLevel.java"}
/>

<RecipeHeader
  displayName={"Change method access level"}
  description={"Change the access level (public, protected, private, package private) of a method."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.ChangeMethodAccessLevel"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.ChangeMethodAccessLevel"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/changemethodaccesslevel.md"}
/>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results.","example":"org.mockito.Matchers anyVararg()"},{"type":"String","name":"newAccessLevel","required":true,"description":"New method access level to apply to the method.","example":"public"},{"type":"Boolean","name":"matchOverrides","required":false,"description":"When enabled, find methods that are overrides of the method pattern."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"com.abc.A aMethod(..)"},{"parameter":"newAccessLevel","value":"private"},{"parameter":"matchOverrides","value":"null"}],"variants":[{"language":"java","before":"package com.abc;\n\nclass A {\n    @SuppressWarnings(\"ALL\") // comment\n    public void aMethod(String s) {\n    }\n\n    // comment\n    @SuppressWarnings(\"ALL\")\n    public void aMethod() {\n    }\n\n    // comment\n    public void aMethod(Integer i) {\n    }\n\n    public void aMethod(Double i) {\n    }\n}\n","after":"package com.abc;\n\nclass A {\n    @SuppressWarnings(\"ALL\") // comment\n    private void aMethod(String s) {\n    }\n\n    // comment\n    @SuppressWarnings(\"ALL\")\n    private void aMethod() {\n    }\n\n    // comment\n    private void aMethod(Integer i) {\n    }\n\n    private void aMethod(Double i) {\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass A {\n    @SuppressWarnings(\"ALL\") // comment\n-   public void aMethod(String s) {\n+   private void aMethod(String s) {\n    }\n@@ -10,1 +10,1 @@\n    // comment\n    @SuppressWarnings(\"ALL\")\n-   public void aMethod() {\n+   private void aMethod() {\n    }\n@@ -14,1 +14,1 @@\n\n    // comment\n-   public void aMethod(Integer i) {\n+   private void aMethod(Integer i) {\n    }\n@@ -17,1 +17,1 @@\n    }\n\n-   public void aMethod(Double i) {\n+   private void aMethod(Double i) {\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.ChangeMethodAccessLevel","displayName":"Change method access level","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=org.mockito.Matchers anyVararg()\" --recipe-option \"newAccessLevel=public\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

