---
title: "Remove annotation attribute"
sidebar_label: "Remove annotation attribute"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/removeannotationattribute" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove annotation attribute"}
  description={"Some annotations accept arguments. This recipe removes an existing attribute."}
  fqName={"org.openrewrite.java.RemoveAnnotationAttribute"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/RemoveAnnotationAttribute.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.RemoveAnnotationAttribute"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.RemoveAnnotationAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/removeannotationattribute.md"}
>

<RecipeHeader.Title>Remove annotation attribute</RecipeHeader.Title>

<RecipeHeader.Description>Some annotations accept arguments. This recipe removes an existing attribute.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"annotationType","required":true,"description":"The fully qualified name of the annotation.","example":"org.junit.Test"},{"type":"String","name":"attributeName","required":true,"description":"The name of attribute to remove.","example":"timeout"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"annotationType","value":"java.lang.Deprecated"},{"parameter":"attributeName","value":"since"}],"variants":[{"language":"java","before":"@Deprecated(since = \"1.0\", forRemoval = true)\nclass A {}\n","after":"@Deprecated(forRemoval = true)\nclass A {}\n","diff":"@@ -1,1 +1,1 @@\n-@Deprecated(since = \"1.0\", forRemoval = true)\n+@Deprecated(forRemoval = true)\nclass A {}\n","newFile":false}]},{"parameters":[{"parameter":"annotationType","value":"TestAnnotation"},{"parameter":"attributeName","value":"deletedAttribute"}],"variants":[{"language":"java","before":"@TestAnnotation(attributeA = \"attributeValue\", deletedAttribute = \"deletedAttributeValue\")\nclass SomeClass {}\n","after":"@TestAnnotation(attributeA = \"attributeValue\")\nclass SomeClass {}\n","diff":"@@ -1,1 +1,1 @@\n-@TestAnnotation(attributeA = \"attributeValue\", deletedAttribute = \"deletedAttributeValue\")\n+@TestAnnotation(attributeA = \"attributeValue\")\nclass SomeClass {}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.RemoveAnnotationAttribute","displayName":"Remove annotation attribute","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"annotationType=org.junit.Test\" --recipe-option \"attributeName=timeout\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

