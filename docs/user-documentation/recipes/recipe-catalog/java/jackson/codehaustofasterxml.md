---
title: "Migrate from Jackson Codehaus (legacy) to Jackson FasterXML"
sidebar_label: "Migrate from Jackson Codehaus (legacy) to Jackson FasterXML"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/jackson/codehaustofasterxml" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from Jackson Codehaus (legacy) to Jackson FasterXML"}
  description={"In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML."}
  fqName={"org.openrewrite.java.jackson.CodehausToFasterXML"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/codehaus-to-fasterxml.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["jackson-2"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.jackson.CodehausToFasterXML"}
  artifact={"org.openrewrite.recipe:rewrite-jackson"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.jackson.CodehausToFasterXML"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/jackson/codehaustofasterxml.md"}
>

<RecipeHeader.Title>Migrate from Jackson Codehaus (legacy) to Jackson FasterXML</RecipeHeader.Title>

<RecipeHeader.Description>In Jackson 2, the package and dependency coordinates moved from Codehaus to FasterXML.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Transfer @JsonSerialize arguments from Codehaus to FasterXML","href":"/user-documentation/recipes/recipe-catalog/java/jackson/codehaus/transferjsonserializeargumentsfromcodehaustofasterxml/"},{"name":"Migrate classes from Jackson Codehaus (legacy) to Jackson FasterXML","href":"/user-documentation/recipes/recipe-catalog/java/jackson/codehausclassestofasterxml/"},{"name":"Migrate dependencies from Jackson Codehaus (legacy) to FasterXML","href":"/user-documentation/recipes/recipe-catalog/java/jackson/codehaus/codehausdependencytofasterxml/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.codehaus.jackson.map.ObjectMapper;\nimport org.codehaus.jackson.map.annotate.JsonSerialize;\n\nclass Test {\n    private static ObjectMapper initializeObjectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n        return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);\n    }\n}\n","after":"import com.fasterxml.jackson.annotation.JsonInclude.Include;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nclass Test {\n    private static ObjectMapper initializeObjectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n        return mapper.setSerializationInclusion(Include.NON_NULL);\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.codehaus.jackson.map.ObjectMapper;\n-import org.codehaus.jackson.map.annotate.JsonSerialize;\n+import com.fasterxml.jackson.annotation.JsonInclude.Include;\n+import com.fasterxml.jackson.databind.ObjectMapper;\n\n@@ -7,1 +7,1 @@\n    private static ObjectMapper initializeObjectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n-       return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);\n+       return mapper.setSerializationInclusion(Include.NON_NULL);\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.codehaus.jackson.map.ObjectMapper;\nimport org.codehaus.jackson.map.annotate.JsonSerialize;\n\nclass Test {\n    private static ObjectMapper initializeObjectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n        return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);\n    }\n}\n","after":"import com.fasterxml.jackson.annotation.JsonInclude.Include;\nimport com.fasterxml.jackson.databind.ObjectMapper;\n\nclass Test {\n    private static ObjectMapper initializeObjectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n        return mapper.setSerializationInclusion(Include.NON_NULL);\n    }\n}\n","diff":"@@ -1,2 +1,2 @@\n-import org.codehaus.jackson.map.ObjectMapper;\n-import org.codehaus.jackson.map.annotate.JsonSerialize;\n+import com.fasterxml.jackson.annotation.JsonInclude.Include;\n+import com.fasterxml.jackson.databind.ObjectMapper;\n\n@@ -7,1 +7,1 @@\n    private static ObjectMapper initializeObjectMapper() {\n        ObjectMapper mapper = new ObjectMapper();\n-       return mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);\n+       return mapper.setSerializationInclusion(Include.NON_NULL);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.jackson.CodehausToFasterXML","displayName":"Migrate from Jackson Codehaus (legacy) to Jackson FasterXML","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jackson","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

