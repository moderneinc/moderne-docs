---
title: "Add `@Nullable` to collection and map type arguments that hold null elements"
sidebar_label: "Add `@Nullable` to collection and map type arguments that hold null elements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `@Nullable` to collection and map type arguments that hold null elements"}
  description={"Places the JSpecify `@Nullable` annotation on a collection or map type argument when its elements or values are provably nullable, producing `List<@Nullable String>` or `Map<String, @Nullable String>`. JSpecify distinguishes `List<@Nullable String>` (the list may hold `null` elements) from `@Nullable List<String>` (the list reference may be `null`); this recipe annotates the type argument, which NullAway enforces in JSpecify mode. A type argument is annotated when `Collection.add(...)` is called with a provably-null element, `Map.put(...)` is called with a provably-null value, or the declaration's initializer is a `List.of(...)`/`Set.of(...)`/`Arrays.asList(...)` containing a `null`. The receiver is resolved to its declaration within the same compilation unit (cross-file declarations are not handled). Conservative by design: it skips wildcard (`?`) and raw type arguments, and arguments that are already `@Nullable`, so it is idempotent."}
  fqName={"io.moderne.nullability.infer.AddNullableToTypeArgument"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Add `@Nullable` to collection and map type arguments that hold null elements"}
  description={"Places the JSpecify `@Nullable` annotation on a collection or map type argument when its elements or values are provably nullable, producing `List<@Nullable String>` or `Map<String, @Nullable String>`. JSpecify distinguishes `List<@Nullable String>` (the list may hold `null` elements) from `@Nullable List<String>` (the list reference may be `null`); this recipe annotates the type argument, which NullAway enforces in JSpecify mode. A type argument is annotated when `Collection.add(...)` is called with a provably-null element, `Map.put(...)` is called with a provably-null value, or the declaration's initializer is a `List.of(...)`/`Set.of(...)`/`Arrays.asList(...)` containing a `null`. The receiver is resolved to its declaration within the same compilation unit (cross-file declarations are not handled). Conservative by design: it skips wildcard (`?`) and raw type arguments, and arguments that are already `@Nullable`, so it is idempotent."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.infer.AddNullableToTypeArgument"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.infer.AddNullableToTypeArgument"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletotypeargument.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.ArrayList;\nimport java.util.List;\n\nclass Test {\n    void m() {\n        List<String> l = new ArrayList<>();\n        l.add(null);\n    }\n}\n","after":"import org.jspecify.annotations.Nullable;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\nclass Test {\n    void m() {\n        List<@Nullable String> l = new ArrayList<>();\n        l.add(null);\n    }\n}\n","diff":"@@ -1,0 +1,2 @@\n+import org.jspecify.annotations.Nullable;\n+\nimport java.util.ArrayList;\n@@ -6,1 +8,1 @@\nclass Test {\n    void m() {\n-       List<String> l = new ArrayList<>();\n+       List<@Nullable String> l = new ArrayList<>();\n        l.add(null);\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.nullability.infer.AddNullableToTypeArgument","displayName":"Add `@Nullable` to collection and map type arguments that hold null elements","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

