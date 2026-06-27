---
title: "NullAway readiness scorecard"
sidebar_label: "NullAway readiness scorecard"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"NullAway readiness scorecard"}
  description={"Produces a per-class readiness scorecard for a NullAway rollout as a data table, without modifying any source. For every Java class (top-level and nested) it counts the methods, fields, and parameters that already carry a `@Nullable` annotation, the instance fields that are non-null but uninitialized (the residual field-initialization risk NullAway flags once a scope is marked), and whether the class or its enclosing `package-info` is already `@NullMarked`. A consumer can use these numbers to compute annotation coverage and weigh it against field-init risk, then prioritize which packages or modules to mark `@NullMarked` first. This is a triage report, not a transformation: the recipe emits no source changes."}
  fqName={"io.moderne.nullability.search.NullAwayReadinessReport"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.search.NullAwayReadinessReport"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.search.NullAwayReadinessReport"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/search/nullawayreadinessreport.md"}
  moderneOnly
>

<RecipeHeader.Title>NullAway readiness scorecard</RecipeHeader.Title>

<RecipeHeader.Description>Produces a per-class readiness scorecard for a NullAway rollout as a data table, without modifying any source. For every Java class (top-level and nested) it counts the methods, fields, and parameters that already carry a `@Nullable` annotation, the instance fields that are non-null but uninitialized (the residual field-initialization risk NullAway flags once a scope is marked), and whether the class or its enclosing `package-info` is already `@NullMarked`. A consumer can use these numbers to compute annotation coverage and weigh it against field-init risk, then prioritize which packages or modules to mark `@NullMarked` first. This is a triage report, not a transformation: the recipe emits no source changes.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.nullability.search.NullAwayReadinessReport","displayName":"NullAway readiness scorecard","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.nullability.search.NullAwayReadinessReport$ReadinessReport","displayName":"NullAway readiness report","description":"A per-class scorecard of `@Nullable`/`@NullMarked` coverage and uninitialized non-null field risk, used to prioritize the order in which packages are marked `@NullMarked`.","columns":[{"name":"Source path","description":"The path of the source file the class was declared in."},{"name":"Package name","description":"The package the class belongs to (empty for the default package)."},{"name":"Class name","description":"The fully qualified name of the class (or its simple name when the type is unresolved)."},{"name":"Method count","description":"The number of non-constructor methods declared directly in the class."},{"name":"Nullable-annotated method count","description":"The number of methods whose return type already carries a `@Nullable` annotation."},{"name":"Field count","description":"The number of fields (named variables) declared directly in the class."},{"name":"Nullable-annotated field count","description":"The number of fields that already carry a `@Nullable` annotation."},{"name":"Uninitialized non-null field count","description":"The number of instance reference fields that are non-`@Nullable`, non-`final`, have no initializer, and are not unconditionally assigned in every constructor. This is the residual field-initialization risk NullAway flags once the scope is `@NullMarked`."},{"name":"Parameter count","description":"The total number of method and constructor parameters declared in the class."},{"name":"Nullable-annotated parameter count","description":"The number of parameters that already carry a `@Nullable` annotation."},{"name":"Already null-marked","description":"True if the class itself, or its enclosing `package-info`, carries `@NullMarked`."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

