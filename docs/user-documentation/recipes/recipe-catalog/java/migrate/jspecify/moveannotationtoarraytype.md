---
title: "Move annotation to array type"
sidebar_label: "Move annotation to array type"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/jspecify/moveannotationtoarraytype" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Move annotation to array type"}
  description={"When an annotation like `@Nullable` is applied to an array type in declaration position, this recipe moves it to the array brackets. For example, `@Nullable byte[]` becomes `byte @Nullable[]`. Best used before `ChangeType` in a migration pipeline, targeting the pre-migration annotation type."}
  fqName={"org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/jspecify/MoveAnnotationToArrayType.java"}
/>

<RecipeHeader
  displayName={"Move annotation to array type"}
  description={"When an annotation like `@Nullable` is applied to an array type in declaration position, this recipe moves it to the array brackets. For example, `@Nullable byte[]` becomes `byte @Nullable[]`. Best used before `ChangeType` in a migration pipeline, targeting the pre-migration annotation type."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/jspecify/moveannotationtoarraytype.md"}
/>

<OptionsTable options={[{"type":"String","name":"annotationType","required":true,"description":"The type of annotation to move to the array type. Should target the pre-migration annotation type to avoid changing the semantics of pre-existing type-use annotations on object arrays.","example":"javax.annotation.*ull*"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"annotationType","value":"javax.annotation.*ull*"}],"variants":[{"language":"java","before":"import javax.annotation.Nullable;\n\nclass Foo {\n    @Nullable\n    public byte[] bar() {\n        return null;\n    }\n}\n","after":"import javax.annotation.Nullable;\n\nclass Foo {\n    public byte @Nullable[] bar() {\n        return null;\n    }\n}\n","diff":"@@ -4,2 +4,1 @@\n\nclass Foo {\n-   @Nullable\n-   public byte[] bar() {\n+   public byte @Nullable[] bar() {\n        return null;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType","displayName":"Move annotation to array type","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"annotationType=javax.annotation.*ull*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

