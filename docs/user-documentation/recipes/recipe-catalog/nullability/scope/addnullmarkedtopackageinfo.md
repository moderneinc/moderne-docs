---
title: "Add `@NullMarked` to `package-info.java` for an allowlist of packages"
sidebar_label: "Add `@NullMarked` to `package-info.java` for an allowlist of packages"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `@NullMarked` to `package-info.java` for an allowlist of packages"}
  description={"Adds the JSpecify `@NullMarked` annotation to the `package-info.java` of an explicit allowlist of packages, for a controlled, package-at-a-time rollout toward NullAway. The allowlist supports exact package names and a trailing `.*` prefix wildcard; an empty allowlist is a no-op for safety. When `generateMissing` is enabled, an allowlisted package that has Java sources but no `package-info.java` gets one generated with `@NullMarked`. Idempotent and never double-marks. Only Java sources are considered. Pair with `AddNullMarkedToCleanPackages` for automatic gating."}
  fqName={"io.moderne.nullability.scope.AddNullMarkedToPackageInfo"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Add `@NullMarked` to `package-info.java` for an allowlist of packages"}
  description={"Adds the JSpecify `@NullMarked` annotation to the `package-info.java` of an explicit allowlist of packages, for a controlled, package-at-a-time rollout toward NullAway. The allowlist supports exact package names and a trailing `.*` prefix wildcard; an empty allowlist is a no-op for safety. When `generateMissing` is enabled, an allowlisted package that has Java sources but no `package-info.java` gets one generated with `@NullMarked`. Idempotent and never double-marks. Only Java sources are considered. Pair with `AddNullMarkedToCleanPackages` for automatic gating."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.scope.AddNullMarkedToPackageInfo"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.scope.AddNullMarkedToPackageInfo"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/scope/addnullmarkedtopackageinfo.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"List","name":"packages","required":true,"description":"The explicit allowlist of packages to null-mark. Each entry is either an exact package name (for example `com.airbnb.payments`) or a trailing `.*` prefix wildcard (for example `com.airbnb.payments.*`, which matches that package and every sub-package). If empty, the recipe is a no-op for safety.","example":"com.airbnb.payments.*"},{"type":"Boolean","name":"generateMissing","required":false,"description":"When `true`, for an allowlisted package that has at least one Java source but no `package-info.java`, generate one containing `@NullMarked`. Defaults to `false`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.airbnb.payments;\n","after":"@NullMarked\npackage com.airbnb.payments;\n\nimport org.jspecify.annotations.NullMarked;\n","diff":"--- src/main/java/com/airbnb/payments/package-info.java\n+++ src/main/java/com/airbnb/payments/package-info.java\n@@ -1,0 +1,1 @@\n+@NullMarked\npackage com.airbnb.payments;\n@@ -3,0 +4,2 @@\npackage com.airbnb.payments;\n\n+import org.jspecify.annotations.NullMarked;\n+\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.nullability.scope.AddNullMarkedToPackageInfo","displayName":"Add `@NullMarked` to `package-info.java` for an allowlist of packages","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":true,"cliOptions":" --recipe-option \"packages=com.airbnb.payments.*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

