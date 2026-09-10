---
title: "Remove duplicate annotations"
sidebar_label: "Remove duplicate annotations"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/staticanalysis/removeduplicateannotations" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove duplicate annotations"}
  description={"Remove annotations that are repeated on the same element, keeping only the first occurrence. Duplicates typically arise when several distinct annotations are migrated to a single new annotation, such as when both `javax.annotation.Nullable` and `javax.annotation.CheckForNull` become `org.jspecify.annotations.Nullable`. `@Repeatable` annotations are left alone, as repeating those is meaningful."}
  fqName={"org.openrewrite.staticanalysis.RemoveDuplicateAnnotations"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RemoveDuplicateAnnotations.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.staticanalysis.RemoveDuplicateAnnotations"}
  artifact={"org.openrewrite.recipe:rewrite-static-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RemoveDuplicateAnnotations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/staticanalysis/removeduplicateannotations.md"}
>

<RecipeHeader.Title>Remove duplicate annotations</RecipeHeader.Title>

<RecipeHeader.Description>Remove annotations that are repeated on the same element, keeping only the first occurrence. Duplicates typically arise when several distinct annotations are migrated to a single new annotation, such as when both `javax.annotation.Nullable` and `javax.annotation.CheckForNull` become `org.jspecify.annotations.Nullable`. `@Repeatable` annotations are left alone, as repeating those is meaningful.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"annotationType","required":false,"description":"The type of annotation to deduplicate, as a type pattern. Defaults to any annotation.","example":"org.jspecify.annotations.*"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"annotationType","value":"org.jspecify.annotations.*"}],"variants":[{"language":"java","before":"import org.jspecify.annotations.Nullable;\n\nclass Foo {\n    public void add(@Nullable @org.jspecify.annotations.Nullable final String bar) {\n    }\n}\n","after":"import org.jspecify.annotations.Nullable;\n\nclass Foo {\n    public void add(@Nullable final String bar) {\n    }\n}\n","diff":"@@ -4,1 +4,1 @@\n\nclass Foo {\n-   public void add(@Nullable @org.jspecify.annotations.Nullable final String bar) {\n+   public void add(@Nullable final String bar) {\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.staticanalysis.RemoveDuplicateAnnotations","displayName":"Remove duplicate annotations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-static-analysis","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

