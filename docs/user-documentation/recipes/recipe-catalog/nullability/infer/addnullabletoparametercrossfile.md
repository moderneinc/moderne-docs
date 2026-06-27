---
title: "Add `@Nullable` to method parameters that can receive null"
sidebar_label: "Add `@Nullable` to method parameters that can receive null"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `@Nullable` to method parameters that can receive null"}
  description={"Adds the JSpecify `@Nullable` annotation to a Java method parameter when some call site anywhere in the project provably passes a nullable argument in that position: the `null` literal (directly, through a cast or parentheses, or via either branch of a ternary), or a call to a method whose return is itself nullable. Nullability therefore propagates from the call site to the callee's declaration across the whole project. This prepares the code for NullAway. Conservative by design: it skips primitive parameters, parameters that already carry a nullability annotation, varargs parameters, and `@Override` methods (where widening a parameter would break override consistency). Kotlin and Groovy express parameter nullability in the type system (`T?`), which the compiler already enforces, so those sources are generally left unchanged."}
  fqName={"io.moderne.nullability.infer.AddNullableToParameterCrossFile"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.infer.AddNullableToParameterCrossFile"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.infer.AddNullableToParameterCrossFile"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/infer/addnullabletoparametercrossfile.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `@Nullable` to method parameters that can receive null</RecipeHeader.Title>

<RecipeHeader.Description>Adds the JSpecify `@Nullable` annotation to a Java method parameter when some call site anywhere in the project provably passes a nullable argument in that position: the `null` literal (directly, through a cast or parentheses, or via either branch of a ternary), or a call to a method whose return is itself nullable. Nullability therefore propagates from the call site to the callee's declaration across the whole project. This prepares the code for NullAway. Conservative by design: it skips primitive parameters, parameters that already carry a nullability annotation, varargs parameters, and `@Override` methods (where widening a parameter would break override consistency). Kotlin and Groovy express parameter nullability in the type system (`T?`), which the compiler already enforces, so those sources are generally left unchanged.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    void use(String name) {\n    }\n\n    void caller() {\n        use(null);\n    }\n}\n","after":"import org.jspecify.annotations.Nullable;\n\nclass Test {\n    void use(@Nullable String name) {\n    }\n\n    void caller() {\n        use(null);\n    }\n}\n","diff":"@@ -1,0 +1,2 @@\n+import org.jspecify.annotations.Nullable;\n+\nclass Test {\n@@ -2,1 +4,1 @@\nclass Test {\n-   void use(String name) {\n+   void use(@Nullable String name) {\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.nullability.infer.AddNullableToParameterCrossFile","displayName":"Add `@Nullable` to method parameters that can receive null","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

