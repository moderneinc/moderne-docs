---
title: "Inline method calls"
sidebar_label: "Inline method calls"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/inlinemethodcalls" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Inline method calls"}
  description={"Inline method calls using a template replacement pattern. Supports both method invocations and constructor calls, with optional imports."}
  fqName={"org.openrewrite.java.InlineMethodCalls"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/InlineMethodCalls.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.InlineMethodCalls"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.InlineMethodCalls"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/inlinemethodcalls.md"}
>

<RecipeHeader.Title>Inline method calls</RecipeHeader.Title>

<RecipeHeader.Description>Inline method calls using a template replacement pattern. Supports both method invocations and constructor calls, with optional imports.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern that is used to find matching method invocations.","example":"com.google.common.base.Preconditions checkNotNull(..)"},{"type":"String","name":"replacement","required":true,"description":"The replacement template for the method invocation. Parameters can be referenced using their names from the original method.","example":"java.util.Objects.requireNonNull(#{p0})"},{"type":"Set","name":"imports","required":false,"description":"List of regular imports to add when the replacement is made.","example":"[\"java.util.Objects\"]"},{"type":"Set","name":"staticImports","required":false,"description":"List of static imports to add when the replacement is made.","example":"[\"java.util.Collections.emptyList\"]"},{"type":"Set","name":"classpathFromResources","required":false,"description":"List of paths to JAR files on the classpath for parsing the replacement template.","example":"[\"guava-33.4.8-jre\"]"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"Lib deprecated()"},{"parameter":"replacement","value":"this.replacement()"},{"parameter":"imports","value":"null"},{"parameter":"staticImports","value":"null"},{"parameter":"classpathFromResources","value":"null"}],"variants":[{"language":"java","before":"class Lib {\n    @Deprecated\n    public void deprecated() {}\n\n    public void replacement() {}\n\n    public static void usage(Lib lib) {\n        lib.deprecated();\n    }\n}\n","after":"class Lib {\n    @Deprecated\n    public void deprecated() {}\n\n    public void replacement() {}\n\n    public static void usage(Lib lib) {\n        lib.replacement();\n    }\n}\n","diff":"@@ -8,1 +8,1 @@\n\n    public static void usage(Lib lib) {\n-       lib.deprecated();\n+       lib.replacement();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.InlineMethodCalls","displayName":"Inline method calls","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=com.google.common.base.Preconditions checkNotNull(..)\" --recipe-option \"replacement=java.util.Objects.requireNonNull(#{p0})\" --recipe-option \"imports=[\"java.util.Objects\"]\" --recipe-option \"staticImports=[\"java.util.Collections.emptyList\"]\" --recipe-option \"classpathFromResources=[\"guava-33.4.8-jre\"]\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

