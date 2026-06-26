---
title: "Update the Micronaut Data library"
sidebar_label: "Update the Micronaut Data library"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/micronaut/updatemicronautdata" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update the Micronaut Data library"}
  description={"This recipe will make the necessary updates for using Micronaut Data with Micronaut Framework 4."}
  fqName={"org.openrewrite.java.micronaut.UpdateMicronautData"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml"}
/>

<RecipeHeader
  displayName={"Update the Micronaut Data library"}
  description={"This recipe will make the necessary updates for using Micronaut Data with Micronaut Framework 4."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.micronaut.UpdateMicronautData"}
  artifact={"org.openrewrite.recipe:rewrite-micronaut"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.micronaut.UpdateMicronautData"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/micronaut/updatemicronautdata.md"}
/>

<RecipeList recipes={[{"name":"Remove XML tag","href":"xml/removexmltag"},{"name":"Rename package name","href":"java/changepackage"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"},{"name":"Change type","href":"java/changetype"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"java","before":"import io.micronaut.data.jdbc.annotation.ColumnTransformer;\nimport io.micronaut.data.jdbc.annotation.JoinColumn;\nimport io.micronaut.data.jdbc.annotation.JoinColumns;\nimport io.micronaut.data.jdbc.annotation.JoinTable;\n\npublic class MyEntity {\n\n    @JoinTable(\n                name = \"m2m_address_association\",\n                joinColumns = @JoinColumns({\n                                      @JoinColumn(name=\"ADDR_ID\", referencedColumnName=\"ID\"),\n                                      @JoinColumn(name=\"ADDR_ZIP\", referencedColumnName=\"ZIP\")\n                                  }))\n    List<String> addresses;\n\n    @ColumnTransformer(read = \"UPPER(org)\")\n    private String name;\n\n}\n","after":"import io.micronaut.data.annotation.sql.ColumnTransformer;\nimport io.micronaut.data.annotation.sql.JoinColumn;\nimport io.micronaut.data.annotation.sql.JoinColumns;\nimport io.micronaut.data.annotation.sql.JoinTable;\n\npublic class MyEntity {\n\n    @JoinTable(\n                name = \"m2m_address_association\",\n                joinColumns = @JoinColumns({\n                                      @JoinColumn(name=\"ADDR_ID\", referencedColumnName=\"ID\"),\n                                      @JoinColumn(name=\"ADDR_ZIP\", referencedColumnName=\"ZIP\")\n                                  }))\n    List<String> addresses;\n\n    @ColumnTransformer(read = \"UPPER(org)\")\n    private String name;\n\n}\n","diff":"@@ -1,4 +1,4 @@\n-import io.micronaut.data.jdbc.annotation.ColumnTransformer;\n-import io.micronaut.data.jdbc.annotation.JoinColumn;\n-import io.micronaut.data.jdbc.annotation.JoinColumns;\n-import io.micronaut.data.jdbc.annotation.JoinTable;\n+import io.micronaut.data.annotation.sql.ColumnTransformer;\n+import io.micronaut.data.annotation.sql.JoinColumn;\n+import io.micronaut.data.annotation.sql.JoinColumns;\n+import io.micronaut.data.annotation.sql.JoinTable;\n\n","newFile":false}]},{"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"java","before":"import io.micronaut.data.jdbc.annotation.ColumnTransformer;\nimport io.micronaut.data.jdbc.annotation.JoinColumn;\nimport io.micronaut.data.jdbc.annotation.JoinColumns;\nimport io.micronaut.data.jdbc.annotation.JoinTable;\n\npublic class MyEntity {\n\n    @JoinTable(\n                name = \"m2m_address_association\",\n                joinColumns = @JoinColumns({\n                                      @JoinColumn(name=\"ADDR_ID\", referencedColumnName=\"ID\"),\n                                      @JoinColumn(name=\"ADDR_ZIP\", referencedColumnName=\"ZIP\")\n                                  }))\n    List<String> addresses;\n\n    @ColumnTransformer(read = \"UPPER(org)\")\n    private String name;\n\n}\n","after":"import io.micronaut.data.annotation.sql.ColumnTransformer;\nimport io.micronaut.data.annotation.sql.JoinColumn;\nimport io.micronaut.data.annotation.sql.JoinColumns;\nimport io.micronaut.data.annotation.sql.JoinTable;\n\npublic class MyEntity {\n\n    @JoinTable(\n                name = \"m2m_address_association\",\n                joinColumns = @JoinColumns({\n                                      @JoinColumn(name=\"ADDR_ID\", referencedColumnName=\"ID\"),\n                                      @JoinColumn(name=\"ADDR_ZIP\", referencedColumnName=\"ZIP\")\n                                  }))\n    List<String> addresses;\n\n    @ColumnTransformer(read = \"UPPER(org)\")\n    private String name;\n\n}\n","diff":"@@ -1,4 +1,4 @@\n-import io.micronaut.data.jdbc.annotation.ColumnTransformer;\n-import io.micronaut.data.jdbc.annotation.JoinColumn;\n-import io.micronaut.data.jdbc.annotation.JoinColumns;\n-import io.micronaut.data.jdbc.annotation.JoinTable;\n+import io.micronaut.data.annotation.sql.ColumnTransformer;\n+import io.micronaut.data.annotation.sql.JoinColumn;\n+import io.micronaut.data.annotation.sql.JoinColumns;\n+import io.micronaut.data.annotation.sql.JoinTable;\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.micronaut.UpdateMicronautData","displayName":"Update the Micronaut Data library","groupId":"org.openrewrite.recipe","artifactId":"rewrite-micronaut","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

