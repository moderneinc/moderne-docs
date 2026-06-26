---
title: "Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`"
sidebar_label: "Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/mockito/powermockitomockstatictomockito" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`"}
  description={"Replaces `PowerMockito.mockStatic()` by `Mockito.mockStatic()`. Removes the `@PrepareForTest` annotation."}
  fqName={"org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/mockito/PowerMockitoMockStaticToMockito.java"}
/>

<RecipeHeader
  displayName={"Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`"}
  description={"Replaces `PowerMockito.mockStatic()` by `Mockito.mockStatic()`. Removes the `@PrepareForTest` annotation."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/mockito/powermockitomockstatictomockito.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import static org.mockito.Mockito.mockStatic;\n\nimport java.util.Calendar;\n\nimport org.junit.jupiter.api.Test;\nimport org.powermock.core.classloader.annotations.PrepareForTest;\n\n@PrepareForTest({Calendar.class})\npublic class MyTest {\n\n    @Test\n    void testStaticMethod() {\n        mockStatic(Calendar.class);\n    }\n}\n","after":"import static org.mockito.Mockito.mockStatic;\n\nimport java.util.Calendar;\n\nimport org.junit.jupiter.api.AfterEach;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.mockito.MockedStatic;\n\npublic class MyTest {\n\n    private MockedStatic<Calendar> mockedCalendar;\n\n    @BeforeEach\n    void setUpStaticMocks() {\n        mockedCalendar = mockStatic(Calendar.class);\n    }\n\n    @AfterEach\n    void tearDownStaticMocks() {\n        mockedCalendar.closeOnDemand();\n    }\n\n    @Test\n    void testStaticMethod() {\n    }\n}\n","diff":"@@ -5,0 +5,2 @@\nimport java.util.Calendar;\n\n+import org.junit.jupiter.api.AfterEach;\n+import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\n@@ -6,1 +8,1 @@\n\nimport org.junit.jupiter.api.Test;\n-import org.powermock.core.classloader.annotations.PrepareForTest;\n+import org.mockito.MockedStatic;\n\n@@ -8,1 +10,0 @@\nimport org.powermock.core.classloader.annotations.PrepareForTest;\n\n-@PrepareForTest({Calendar.class})\npublic class MyTest {\n@@ -11,0 +12,12 @@\npublic class MyTest {\n\n+   private MockedStatic<Calendar> mockedCalendar;\n+\n+   @BeforeEach\n+   void setUpStaticMocks() {\n+       mockedCalendar = mockStatic(Calendar.class);\n+   }\n+\n+   @AfterEach\n+   void tearDownStaticMocks() {\n+       mockedCalendar.closeOnDemand();\n+   }\n+\n    @Test\n@@ -13,1 +26,0 @@\n    @Test\n    void testStaticMethod() {\n-       mockStatic(Calendar.class);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito","displayName":"Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

