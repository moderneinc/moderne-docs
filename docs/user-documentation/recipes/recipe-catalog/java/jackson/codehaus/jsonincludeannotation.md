---
title: "Migrate to Jackson `@JsonInclude`"
sidebar_label: "Migrate to Jackson `@JsonInclude`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/jackson/codehaus/jsonincludeannotation" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Jackson `@JsonInclude`"}
  description={"Move Codehaus' `@JsonSerialize.include` argument to FasterXMLs `@JsonInclude` annotation."}
  fqName={"org.openrewrite.java.jackson.codehaus.JsonIncludeAnnotation"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/java/org/openrewrite/java/jackson/codehaus/JsonIncludeAnnotation.java"}
/>

<RecipeHeader
  displayName={"Migrate to Jackson `@JsonInclude`"}
  description={"Move Codehaus' `@JsonSerialize.include` argument to FasterXMLs `@JsonInclude` annotation."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.jackson.codehaus.JsonIncludeAnnotation"}
  artifact={"org.openrewrite.recipe:rewrite-jackson"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.jackson.codehaus.JsonIncludeAnnotation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/jackson/codehaus/jsonincludeannotation.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.codehaus.jackson.map.annotate.JsonSerialize;\nimport org.codehaus.jackson.map.JsonSerializer.None;\nimport static org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion.NON_NULL;\n\n@JsonSerialize(include = NON_NULL, using = None.class)\nclass Test {\n}\n","after":"import org.codehaus.jackson.map.annotate.JsonSerialize;\nimport com.fasterxml.jackson.annotation.JsonInclude;\nimport org.codehaus.jackson.map.JsonSerializer.None;\n\n@JsonInclude(value = JsonInclude.Include.NON_NULL)\n@JsonSerialize(using = None.class)\nclass Test {\n}\n","diff":"@@ -2,0 +2,1 @@\nimport org.codehaus.jackson.map.annotate.JsonSerialize;\n+import com.fasterxml.jackson.annotation.JsonInclude;\nimport org.codehaus.jackson.map.JsonSerializer.None;\n@@ -3,1 +4,0 @@\nimport org.codehaus.jackson.map.annotate.JsonSerialize;\nimport org.codehaus.jackson.map.JsonSerializer.None;\n-import static org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion.NON_NULL;\n\n@@ -5,1 +5,2 @@\nimport static org.codehaus.jackson.map.annotate.JsonSerialize.Inclusion.NON_NULL;\n\n-@JsonSerialize(include = NON_NULL, using = None.class)\n+@JsonInclude(value = JsonInclude.Include.NON_NULL)\n+@JsonSerialize(using = None.class)\nclass Test {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.jackson.codehaus.JsonIncludeAnnotation","displayName":"Migrate to Jackson `@JsonInclude`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jackson","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

