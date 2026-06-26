---
title: "Compose JSpecify best practices (intra-body nullability inference)"
sidebar_label: "Compose JSpecify best practices (intra-body nullability inference)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Compose JSpecify best practices (intra-body nullability inference)"}
  description={"The intra-body nullability inference pass. After [StandardizeNullabilityAnnotationsToJSpecify](https://docs.openrewrite.org) has normalized every annotation flavor onto a single [JSpecify](https://jspecify.dev) form, this recipe runs the OpenRewrite static-analysis inference recipes that derive nullability from signals *inside* each method body: methods whose bodies can return `null` (including standard library awareness such as `Map.get`/`Queue.poll`) and parameters that are null-checked in the body. These complement the cross-file inference recipes (`AddNullableToReturnType`, `AddNullableToParameterCrossFile`, `AddNullableToField`, `PropagateNullableAcrossOverrides`) which reason across files; this pass should run AFTER `StandardizeNullabilityAnnotationsToJSpecify` and alongside those cross-file inference recipes. All annotations are emitted as JSpecify (`org.jspecify.annotations.@Nullable` / `@NonNull`)."}
  fqName={"io.moderne.nullability.infer.ComposeJSpecifyBestPractices"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Compose JSpecify best practices (intra-body nullability inference)"}
  description={"The intra-body nullability inference pass. After [StandardizeNullabilityAnnotationsToJSpecify](https://docs.openrewrite.org) has normalized every annotation flavor onto a single [JSpecify](https://jspecify.dev) form, this recipe runs the OpenRewrite static-analysis inference recipes that derive nullability from signals *inside* each method body: methods whose bodies can return `null` (including standard library awareness such as `Map.get`/`Queue.poll`) and parameters that are null-checked in the body. These complement the cross-file inference recipes (`AddNullableToReturnType`, `AddNullableToParameterCrossFile`, `AddNullableToField`, `PropagateNullableAcrossOverrides`) which reason across files; this pass should run AFTER `StandardizeNullabilityAnnotationsToJSpecify` and alongside those cross-file inference recipes. All annotations are emitted as JSpecify (`org.jspecify.annotations.@Nullable` / `@NonNull`)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["jspecify","nullability"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.infer.ComposeJSpecifyBestPractices"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.infer.ComposeJSpecifyBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/infer/composejspecifybestpractices.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Annotate methods which may return `null` with `@Nullable`","href":"staticanalysis/annotatenullablemethods"},{"name":"Annotate null-checked method parameters with `@Nullable`","href":"staticanalysis/annotatenullableparameters"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    public String find() {\n        return null;\n    }\n}\n","after":"import org.jspecify.annotations.Nullable;\n\nclass Test {\n    public @Nullable String find() {\n        return null;\n    }\n}\n","diff":"@@ -1,0 +1,2 @@\n+import org.jspecify.annotations.Nullable;\n+\nclass Test {\n@@ -2,1 +4,1 @@\nclass Test {\n-   public String find() {\n+   public @Nullable String find() {\n        return null;\n","newFile":false}]},{"variants":[{"language":"java","before":"class Test {\n    public String find() {\n        return null;\n    }\n}\n","after":"import org.jspecify.annotations.Nullable;\n\nclass Test {\n    public @Nullable String find() {\n        return null;\n    }\n}\n","diff":"@@ -1,0 +1,2 @@\n+import org.jspecify.annotations.Nullable;\n+\nclass Test {\n@@ -2,1 +4,1 @@\nclass Test {\n-   public String find() {\n+   public @Nullable String find() {\n        return null;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.nullability.infer.ComposeJSpecifyBestPractices","displayName":"Compose JSpecify best practices (intra-body nullability inference)","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

