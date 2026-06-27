---
title: "Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`"
sidebar_label: "Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/util/replacestreamcollectwithtolist" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`"}
  description={"Replace `Stream.collect(Collectors.toUnmodifiableList())` with Java 16+ `Stream.toList()`. Also replaces `Stream.collect(Collectors.toList())` if `convertToList` is set to `true`."}
  fqName={"org.openrewrite.java.migrate.util.ReplaceStreamCollectWithToList"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/util/ReplaceStreamCollectWithToList.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["RSPEC-S6204"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.util.ReplaceStreamCollectWithToList"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.util.ReplaceStreamCollectWithToList"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/util/replacestreamcollectwithtolist.md"}
>

<RecipeHeader.Title>Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`</RecipeHeader.Title>

<RecipeHeader.Description>Replace `Stream.collect(Collectors.toUnmodifiableList())` with Java 16+ `Stream.toList()`. Also replaces `Stream.collect(Collectors.toList())` if `convertToList` is set to `true`.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"convertToList","required":false,"description":"Also replace `Stream.collect(Collectors.toList())` with `Stream.toList()`. *BEWARE*: Attempts to modify the returned list, result in an `UnsupportedOperationException`!"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"convertToList","value":"false"}],"variants":[{"language":"java","before":"import java.util.stream.Collectors;\nimport java.util.stream.Stream;\nimport java.util.List;\n\nclass Example {\n    List<String> test(Stream<String> stream) {\n        return stream.collect(Collectors.toUnmodifiableList());\n    }\n}\n","after":"import java.util.stream.Stream;\nimport java.util.List;\n\nclass Example {\n    List<String> test(Stream<String> stream) {\n        return stream.toList();\n    }\n}\n","diff":"@@ -1,1 +1,0 @@\n-import java.util.stream.Collectors;\nimport java.util.stream.Stream;\n@@ -7,1 +6,1 @@\nclass Example {\n    List<String> test(Stream<String> stream) {\n-       return stream.collect(Collectors.toUnmodifiableList());\n+       return stream.toList();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.util.ReplaceStreamCollectWithToList","displayName":"Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

