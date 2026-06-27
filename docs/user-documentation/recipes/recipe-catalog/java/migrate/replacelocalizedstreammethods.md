---
title: "Replace `getLocalizedInputStream` and `getLocalizedOutputStream` with direct assignment"
sidebar_label: "Replace `getLocalizedInputStream` and `getLocalizedOutputStream` with direct assignment"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/replacelocalizedstreammethods" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `getLocalizedInputStream` and `getLocalizedOutputStream` with direct assignment"}
  description={"Replaces `Runtime.getLocalizedInputStream(InputStream)` and `Runtime.getLocalizedOutputStream(OutputStream)` with their direct arguments. This modification is made because the previous implementation of `getLocalizedInputStream` and `getLocalizedOutputStream` merely returned the arguments provided."}
  fqName={"org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/ReplaceLocalizedStreamMethods.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/replacelocalizedstreammethods.md"}
>

<RecipeHeader.Title>Replace `getLocalizedInputStream` and `getLocalizedOutputStream` with direct assignment</RecipeHeader.Title>

<RecipeHeader.Description>Replaces `Runtime.getLocalizedInputStream(InputStream)` and `Runtime.getLocalizedOutputStream(OutputStream)` with their direct arguments. This modification is made because the previous implementation of `getLocalizedInputStream` and `getLocalizedOutputStream` merely returned the arguments provided.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"localizedInputStreamMethodMatcher","required":false,"description":"The method pattern to match and replace.","example":"java.lang.Runtime getLocalizedInputStream(java.io.InputStream)"},{"type":"String","name":"localizedOutputStreamMethodMatcher","required":false,"description":"The method pattern to match and replace.","example":"java.lang.Runtime getLocalizedOutputStream(java.io.OutputStream)"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"localizedInputStreamMethodMatcher","value":"com.test.Runtime1 getLocalizedInputStream1(java.io.InputStream)"},{"parameter":"localizedOutputStreamMethodMatcher","value":"com.test.Runtime1 getLocalizedOutputStream1(java.io.OutputStream)"}],"variants":[{"language":"java","before":"package com.test;\nimport java.io.InputStream;\n\nclass Test {\n    void exampleMethod(Runtime1 rt, InputStream in) {\n        InputStream newStream = rt.getLocalizedInputStream1(in);\n    }\n}\n","after":"package com.test;\nimport java.io.InputStream;\n\nclass Test {\n    void exampleMethod(Runtime1 rt, InputStream in) {\n        InputStream newStream = in;\n    }\n}\n","diff":"@@ -6,1 +6,1 @@\nclass Test {\n    void exampleMethod(Runtime1 rt, InputStream in) {\n-       InputStream newStream = rt.getLocalizedInputStream1(in);\n+       InputStream newStream = in;\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods","displayName":"Replace `getLocalizedInputStream` and `getLocalizedOutputStream` with direct assignment","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

