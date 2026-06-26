---
title: "Annotate null-checked method parameters with `@Nullable`"
sidebar_label: "Annotate null-checked method parameters with `@Nullable`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/annotatenullableparameters" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Annotate null-checked method parameters with `@Nullable`"}
  description={"Add `@Nullable` to parameters of public methods that are explicitly checked for `null`. By default `org.jspecify.annotations.Nullable` is used, but through the `nullableAnnotationClass` option a custom annotation can be provided. Both `@Target(TYPE_USE)` and declaration annotations (e.g. `javax.annotation.CheckForNull`) are supported. Parameters that already carry a known nullable annotation are skipped to avoid duplication. This recipe scans for methods that do not already have parameters annotated with a nullable annotation and checks their usages for potential null checks. Additional null-checking methods can be specified via the `additionalNullCheckingMethods` option."}
  fqName={"org.openrewrite.staticanalysis.AnnotateNullableParameters"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/AnnotateNullableParameters.java"}
/>

<RecipeHeader
  displayName={"Annotate null-checked method parameters with `@Nullable`"}
  description={"Add `@Nullable` to parameters of public methods that are explicitly checked for `null`. By default `org.jspecify.annotations.Nullable` is used, but through the `nullableAnnotationClass` option a custom annotation can be provided. Both `@Target(TYPE_USE)` and declaration annotations (e.g. `javax.annotation.CheckForNull`) are supported. Parameters that already carry a known nullable annotation are skipped to avoid duplication. This recipe scans for methods that do not already have parameters annotated with a nullable annotation and checks their usages for potential null checks. Additional null-checking methods can be specified via the `additionalNullCheckingMethods` option."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.AnnotateNullableParameters"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.AnnotateNullableParameters"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/annotatenullableparameters.md"}
/>

<OptionsTable options={[{"type":"String","name":"nullableAnnotationClass","required":false,"description":"The fully qualified name of the @Nullable annotation to add. Both `@Target(TYPE_USE)` and declaration annotations (e.g. `javax.annotation.CheckForNull`) are supported. Defaults to `org.jspecify.annotations.Nullable`.","example":"org.jspecify.annotations.Nullable"},{"type":"List","name":"additionalNullCheckingMethods","required":false,"description":"A list of method patterns (in OpenRewrite MethodMatcher format) that should be considered as null-checking methods. These will be added to the built-in list of known null-checking methods. Use `..` for any parameters, e.g., `com.mycompany.utils.StringUtil isEmpty(..)` or `com.mycompany.utils.CollectionUtil isNullOrEmpty(java.util.Collection)`","example":"com.mycompany.utils.StringUtil isEmpty(..), com.mycompany.utils.CollectionUtil isNullOrEmpty(..)"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"nullableAnnotationClass","value":"null"},{"parameter":"additionalNullCheckingMethods","value":"null"}],"variants":[{"language":"java","before":"public class PersonBuilder {\n    private String name = \"Unknown\";\n\n    public PersonBuilder setName(String name) {\n        if (name == null) {\n            return this;\n        }\n        this.name = name.substring(0, 1).toUpperCase() + name.substring(1);\n        return this;\n    }\n}\n","after":"import org.jspecify.annotations.Nullable;\n\npublic class PersonBuilder {\n    private String name = \"Unknown\";\n\n    public PersonBuilder setName(@Nullable String name) {\n        if (name == null) {\n            return this;\n        }\n        this.name = name.substring(0, 1).toUpperCase() + name.substring(1);\n        return this;\n    }\n}\n","diff":"@@ -1,0 +1,2 @@\n+import org.jspecify.annotations.Nullable;\n+\npublic class PersonBuilder {\n@@ -4,1 +6,1 @@\n    private String name = \"Unknown\";\n\n-   public PersonBuilder setName(String name) {\n+   public PersonBuilder setName(@Nullable String name) {\n        if (name == null) {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.AnnotateNullableParameters","displayName":"Annotate null-checked method parameters with `@Nullable`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

