---
title: "Add `@NullMarked` to packages that are ready for NullAway"
sidebar_label: "Add `@NullMarked` to packages that are ready for NullAway"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `@NullMarked` to packages that are ready for NullAway"}
  description={"Automatically adds the JSpecify `@NullMarked` annotation to a package — by annotating its existing `package-info.java` or generating one — but only when every Java class in the package is \"ready\", i.e. would not produce a fresh NullAway error once the scope is marked. A package fails the readiness gate (and is left unmarked) if any class in it has: (1) an uninitialized non-null instance field (the `FindUninitializedNonNullField` condition: non-`@Nullable`, non-`final`, non-`static`, reference-typed, no initializer, not assigned in every constructor, not dependency-injection-annotated); (2) a method whose body can return a provably-null value but whose return type is not `@Nullable`; or (3) a field initialized to a provably-null value that is not `@Nullable`. An `@Override` method that returns null without `@Nullable` is also treated as a blocker. Packages whose sources live under a generated marker path (`/generated/`, `/build/generated`, `/generated-sources/`) or whose classes carry a `@Generated` annotation are skipped. The recipe is idempotent and operates per leaf package; it never marks parent packages transitively. Java sources only."}
  fqName={"io.moderne.nullability.scope.AddNullMarkedToCleanPackages"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.scope.AddNullMarkedToCleanPackages"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.scope.AddNullMarkedToCleanPackages"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/scope/addnullmarkedtocleanpackages.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `@NullMarked` to packages that are ready for NullAway</RecipeHeader.Title>

<RecipeHeader.Description>Automatically adds the JSpecify `@NullMarked` annotation to a package — by annotating its existing `package-info.java` or generating one — but only when every Java class in the package is "ready", i.e. would not produce a fresh NullAway error once the scope is marked. A package fails the readiness gate (and is left unmarked) if any class in it has: (1) an uninitialized non-null instance field (the `FindUninitializedNonNullField` condition: non-`@Nullable`, non-`final`, non-`static`, reference-typed, no initializer, not assigned in every constructor, not dependency-injection-annotated); (2) a method whose body can return a provably-null value but whose return type is not `@Nullable`; or (3) a field initialized to a provably-null value that is not `@Nullable`. An `@Override` method that returns null without `@Nullable` is also treated as a blocker. Packages whose sources live under a generated marker path (`/generated/`, `/build/generated`, `/generated-sources/`) or whose classes carry a `@Generated` annotation are skipped. The recipe is idempotent and operates per leaf package; it never marks parent packages transitively. Java sources only.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"package com.example;\n\nimport org.jspecify.annotations.Nullable;\n\nclass Clean {\n    String name = \"x\";\n\n    @Nullable\n    String maybeNull() {\n        return null;\n    }\n}\n"},"variants":[{"language":"java","before":"package com.example;\n","after":"@NullMarked\npackage com.example;\n\nimport org.jspecify.annotations.NullMarked;\n","diff":"--- src/main/java/com/example/package-info.java\n+++ src/main/java/com/example/package-info.java\n@@ -1,0 +1,1 @@\n+@NullMarked\npackage com.example;\n@@ -3,0 +4,2 @@\npackage com.example;\n\n+import org.jspecify.annotations.NullMarked;\n+\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.nullability.scope.AddNullMarkedToCleanPackages","displayName":"Add `@NullMarked` to packages that are ready for NullAway","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

