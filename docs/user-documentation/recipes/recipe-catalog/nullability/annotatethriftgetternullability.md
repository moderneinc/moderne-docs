---
title: "Add `@Nullable` to generated Thrift getters of `optional` fields"
sidebar_label: "Add `@Nullable` to generated Thrift getters of `optional` fields"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add `@Nullable` to generated Thrift getters of `optional` fields"}
  description={"Annotates the generated-Java getter of a Thrift `optional` field with the JSpecify `@Nullable` annotation, reading the field's requiredness from the `.thrift` IDL (which appears as a plain-text source). In an Apache-Thrift-generated struct only an `optional` field may be left unset, so only its getter (`getFoo()`, or `isFoo()` for a `bool`) can return `null`; a `required` field, the Airbnb `non_null` extension, and an unqualified default field are populated and left untouched. A scanning pass parses each `.thrift` for `struct`/`union`/`exception` blocks and their `optional` fields; the edit pass annotates the matching getter on the generated Java class whose simple name equals the struct name and which implements `org.apache.thrift.TBase`. Adding `@Nullable` only states the contract the IDL already declares, so behavior is unchanged. Conservative by design: a getter is annotated only when its owning class is a recognized Thrift struct, its name matches an `optional` field, and it is not already nullable. Gated off the `NullSafety` apex (generated source); only Java sources are modified, and re-running after regeneration converges."}
  fqName={"io.moderne.nullability.AnnotateThriftGetterNullability"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.nullability.AnnotateThriftGetterNullability"}
  artifact={"io.moderne.recipe:rewrite-nullability"}
  appLink={"https://app.moderne.io/recipes/io.moderne.nullability.AnnotateThriftGetterNullability"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nullability/annotatethriftgetternullability.md"}
  moderneOnly
>

<RecipeHeader.Title>Add `@Nullable` to generated Thrift getters of `optional` fields</RecipeHeader.Title>

<RecipeHeader.Description>Annotates the generated-Java getter of a Thrift `optional` field with the JSpecify `@Nullable` annotation, reading the field's requiredness from the `.thrift` IDL (which appears as a plain-text source). In an Apache-Thrift-generated struct only an `optional` field may be left unset, so only its getter (`getFoo()`, or `isFoo()` for a `bool`) can return `null`; a `required` field, the Airbnb `non_null` extension, and an unqualified default field are populated and left untouched. A scanning pass parses each `.thrift` for `struct`/`union`/`exception` blocks and their `optional` fields; the edit pass annotates the matching getter on the generated Java class whose simple name equals the struct name and which implements `org.apache.thrift.TBase`. Adding `@Nullable` only states the contract the IDL already declares, so behavior is unchanged. Conservative by design: a getter is annotated only when its owning class is a recognized Thrift struct, its name matches an `optional` field, and it is not already nullable. Gated off the `NullSafety` apex (generated source); only Java sources are modified, and re-running after regeneration converges.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.nullability.AnnotateThriftGetterNullability","displayName":"Add `@Nullable` to generated Thrift getters of `optional` fields","groupId":"io.moderne.recipe","artifactId":"rewrite-nullability","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

