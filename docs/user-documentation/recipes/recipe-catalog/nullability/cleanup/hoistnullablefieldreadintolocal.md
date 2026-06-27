---
title: "Hoist a guarded `@Nullable` field read into a local variable"
sidebar_label: "Hoist a guarded `@Nullable` field read into a local variable"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Hoist a guarded `@Nullable` field read into a local variable"}
  description={"NullAway cannot refine a `@Nullable` field across a dereference, because the field could be mutated between the null check and the use, so `if (this.f != null) { this.f.foo(); }` is rejected. This recipe reads the field into a local once — `String f = this.f; if (f != null) { f.foo(); }` — which NullAway can refine. It matches an `if` whose condition is `<field> != null` (or `null != <field>`) for an instance field declared with a nullability annotation, and whose then-block dereferences the field, then introduces a local of the field's type before the `if` and replaces the field reads in the condition and then-block with that local. The else-block is left untouched (the field is still nullable there). Conservative by design: it skips locals (which NullAway already refines), non-`@Nullable` fields, fields reassigned inside the then-block, and cases where the chosen local name would collide with an in-scope name. Only Java sources are modified."}
  fqName={"io.moderne.nullability.cleanup.HoistNullableFieldReadIntoLocal"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.cleanup.HoistNullableFieldReadIntoLocal"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.cleanup.HoistNullableFieldReadIntoLocal"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/cleanup/hoistnullablefieldreadintolocal.md"}
  moderneOnly
>

<RecipeHeader.Title>Hoist a guarded `@Nullable` field read into a local variable</RecipeHeader.Title>

<RecipeHeader.Description>NullAway cannot refine a `@Nullable` field across a dereference, because the field could be mutated between the null check and the use, so `if (this.f != null) { this.f.foo(); }` is rejected. This recipe reads the field into a local once — `String f = this.f; if (f != null) { f.foo(); }` — which NullAway can refine. It matches an `if` whose condition is `<field> != null` (or `null != <field>`) for an instance field declared with a nullability annotation, and whose then-block dereferences the field, then introduces a local of the field's type before the `if` and replaces the field reads in the condition and then-block with that local. The else-block is left untouched (the field is still nullable there). Conservative by design: it skips locals (which NullAway already refines), non-`@Nullable` fields, fields reassigned inside the then-block, and cases where the chosen local name would collide with an in-scope name. Only Java sources are modified.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.jspecify.annotations.Nullable;\n\nclass Test {\n    @Nullable String f;\n\n    void m() {\n        if (this.f != null) {\n            System.out.println(this.f.length());\n        }\n    }\n}\n","after":"import org.jspecify.annotations.Nullable;\n\nclass Test {\n    @Nullable String f;\n\n    void m() {\n        String f = this.f;\n        if (f != null) {\n            System.out.println(f.length());\n        }\n    }\n}\n","diff":"@@ -7,2 +7,3 @@\n\n    void m() {\n-       if (this.f != null) {\n-           System.out.println(this.f.length());\n+       String f = this.f;\n+       if (f != null) {\n+           System.out.println(f.length());\n        }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.nullability.cleanup.HoistNullableFieldReadIntoLocal","displayName":"Hoist a guarded `@Nullable` field read into a local variable","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

