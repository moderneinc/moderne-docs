---
title: "Remove Codehaus Jackson annotations if doubly annotated"
sidebar_label: "Remove Codehaus Jackson annotations if doubly annotated"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/jackson/codehaus/removedoublyannotatedcodehausannotations" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove Codehaus Jackson annotations if doubly annotated"}
  description={"Remove Codehaus Jackson annotations if they are doubly annotated with Jackson annotations from the `com.fasterxml.jackson` package."}
  fqName={"org.openrewrite.java.jackson.codehaus.RemoveDoublyAnnotatedCodehausAnnotations"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/java/org/openrewrite/java/jackson/codehaus/RemoveDoublyAnnotatedCodehausAnnotations.java"}
/>

<RecipeHeader
  displayName={"Remove Codehaus Jackson annotations if doubly annotated"}
  description={"Remove Codehaus Jackson annotations if they are doubly annotated with Jackson annotations from the `com.fasterxml.jackson` package."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.jackson.codehaus.RemoveDoublyAnnotatedCodehausAnnotations"}
  artifact={"org.openrewrite.recipe:rewrite-jackson"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.jackson.codehaus.RemoveDoublyAnnotatedCodehausAnnotations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/jackson/codehaus/removedoublyannotatedcodehausannotations.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.codehaus.jackson.map.annotate.JsonSerialize;\nimport org.codehaus.jackson.map.JsonSerializer.None;\nimport static org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion.NON_NULL;\n\n@JsonSerialize(include = NON_NULL, using = None.class)\n@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = com.fasterxml.jackson.databind.JsonSerializer.None.class)\nclass Test {\n}\n","after":"import com.fasterxml.jackson.databind.JsonSerializer;\nimport com.fasterxml.jackson.databind.annotation.JsonSerialize;\n\n@JsonSerialize(using = JsonSerializer.None.class)\nclass Test {\n}\n","diff":"@@ -1,3 +1,2 @@\n-import org.codehaus.jackson.map.annotate.JsonSerialize;\n-import org.codehaus.jackson.map.JsonSerializer.None;\n-import static org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion.NON_NULL;\n+import com.fasterxml.jackson.databind.JsonSerializer;\n+import com.fasterxml.jackson.databind.annotation.JsonSerialize;\n\n@@ -5,2 +4,1 @@\nimport static org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion.NON_NULL;\n\n-@JsonSerialize(include = NON_NULL, using = None.class)\n-@com.fasterxml.jackson.databind.annotation.JsonSerialize(using = com.fasterxml.jackson.databind.JsonSerializer.None.class)\n+@JsonSerialize(using = JsonSerializer.None.class)\nclass Test {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.jackson.codehaus.RemoveDoublyAnnotatedCodehausAnnotations","displayName":"Remove Codehaus Jackson annotations if doubly annotated","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jackson","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

