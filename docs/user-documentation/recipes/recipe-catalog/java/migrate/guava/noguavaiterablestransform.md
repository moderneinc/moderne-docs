---
title: "Prefer `Collection.stream().map(Function)` over `Iterables.transform`"
sidebar_label: "Prefer `Collection.stream().map(Function)` over `Iterables.transform`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaiterablestransform" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Prefer `Collection.stream().map(Function)` over `Iterables.transform`"}
  description={"Prefer `Collection.stream().map(Function)` over `Iterables.transform(Collection, Function)`."}
  fqName={"org.openrewrite.java.migrate.guava.NoGuavaIterablesTransform"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaIterablesTransform.java"}
/>

<RecipeHeader
  displayName={"Prefer `Collection.stream().map(Function)` over `Iterables.transform`"}
  description={"Prefer `Collection.stream().map(Function)` over `Iterables.transform(Collection, Function)`."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={["guava"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.guava.NoGuavaIterablesTransform"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuavaIterablesTransform"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/guava/noguavaiterablestransform.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.Collection;\n\nimport com.google.common.base.Function;\nimport com.google.common.collect.Iterables;\n\nclass Test {\n    Iterable<Integer> test(Collection<String> collection, Function<String, Integer> toSize) {\n        return Iterables.transform(collection, toSize);\n    }\n}\n","after":"import java.util.Collection;\nimport java.util.stream.Collectors;\n\nimport com.google.common.base.Function;\n\nclass Test {\n    Iterable<Integer> test(Collection<String> collection, Function<String, Integer> toSize) {\n        return collection.stream().map(toSize).collect(Collectors.toList());\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport java.util.Collection;\n+import java.util.stream.Collectors;\n\n@@ -4,1 +5,0 @@\n\nimport com.google.common.base.Function;\n-import com.google.common.collect.Iterables;\n\n@@ -8,1 +8,1 @@\nclass Test {\n    Iterable<Integer> test(Collection<String> collection, Function<String, Integer> toSize) {\n-       return Iterables.transform(collection, toSize);\n+       return collection.stream().map(toSize).collect(Collectors.toList());\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.guava.NoGuavaIterablesTransform","displayName":"Prefer `Collection.stream().map(Function)` over `Iterables.transform`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

