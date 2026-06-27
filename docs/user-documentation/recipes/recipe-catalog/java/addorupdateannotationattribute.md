---
title: "Add or update annotation attribute"
sidebar_label: "Add or update annotation attribute"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/addorupdateannotationattribute" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add or update annotation attribute"}
  description={"Some annotations accept arguments. This recipe sets an existing argument to the specified value, or adds the argument if it is not already set."}
  fqName={"org.openrewrite.java.AddOrUpdateAnnotationAttribute"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/AddOrUpdateAnnotationAttribute.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.AddOrUpdateAnnotationAttribute"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.AddOrUpdateAnnotationAttribute"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/addorupdateannotationattribute.md"}
>

<RecipeHeader.Title>Add or update annotation attribute</RecipeHeader.Title>

<RecipeHeader.Description>Some annotations accept arguments. This recipe sets an existing argument to the specified value, or adds the argument if it is not already set.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"annotationType","required":true,"description":"The fully qualified name of the annotation.","example":"org.junit.Test"},{"type":"String","name":"attributeName","required":false,"description":"The name of attribute to change. If omitted defaults to 'value'.","example":"timeout"},{"type":"String","name":"attributeValue","required":false,"description":"The value to set the attribute to. If the attribute is an array, provide values separated by comma to add multiple attributes at once. Set to `null` to remove the attribute.","example":"500"},{"type":"String","name":"oldAttributeValue","required":false,"description":"The current value of the attribute, this can be used to filter where the change is applied. Set to `null` for wildcard behavior.","example":"400"},{"type":"Boolean","name":"addOnly","required":false,"description":"If `true`, disables upgrading existing annotation attribute values, thus the recipe will only add the attribute if it does not already exist. If omitted or `false`, the recipe adds the attribute if missing or updates its value if present."},{"type":"Boolean","name":"appendArray","required":false,"description":"If the attribute is an array and attribute is present, setting this option to `true` will append the value(s). Duplicate values will not be added. If omitted or `false`, the recipe will replace the existing value(s) with the new value(s)."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"annotationType","value":"org.example.Foo"},{"parameter":"attributeName","value":"null"},{"parameter":"attributeValue","value":"hello"},{"parameter":"oldAttributeValue","value":"null"},{"parameter":"addOnly","value":"null"},{"parameter":"appendArray","value":"null"}],"unchanged":{"language":"java","code":"package org.example;\npublic @interface Foo {\n    String value() default \"\";\n}\n"},"variants":[{"language":"java","before":"import org.example.Foo;\n\n@Foo\npublic class A {\n}\n","after":"import org.example.Foo;\n\n@Foo(\"hello\")\npublic class A {\n}\n","diff":"@@ -3,1 +3,1 @@\nimport org.example.Foo;\n\n-@Foo\n+@Foo(\"hello\")\npublic class A {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.AddOrUpdateAnnotationAttribute","displayName":"Add or update annotation attribute","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"annotationType=org.junit.Test\" --recipe-option \"attributeName=timeout\" --recipe-option \"attributeValue=500\" --recipe-option \"oldAttributeValue=400\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

