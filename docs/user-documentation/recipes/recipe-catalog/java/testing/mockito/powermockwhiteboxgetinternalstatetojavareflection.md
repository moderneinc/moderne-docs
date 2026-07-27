---
title: "Replace PowerMock `Whitebox.getInternalState()` with Java reflection"
sidebar_label: "Replace PowerMock `Whitebox.getInternalState()` with Java reflection"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/mockito/powermockwhiteboxgetinternalstatetojavareflection" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace PowerMock `Whitebox.getInternalState()` with Java reflection"}
  description={"Replace `Whitebox.getInternalState(Object, String)` with `java.lang.reflect.Field` access, casting to the declared result type where needed. The field lookup uses `getDeclaredField` on the target object's class, which differs from PowerMock's class-hierarchy traversal for fields inherited from a superclass."}
  fqName={"org.openrewrite.java.testing.mockito.PowerMockWhiteboxGetInternalStateToJavaReflection"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/mockito/PowerMockWhiteboxGetInternalStateToJavaReflection.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.mockito.PowerMockWhiteboxGetInternalStateToJavaReflection"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.PowerMockWhiteboxGetInternalStateToJavaReflection"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/mockito/powermockwhiteboxgetinternalstatetojavareflection.md"}
>

<RecipeHeader.Title>Replace PowerMock `Whitebox.getInternalState()` with Java reflection</RecipeHeader.Title>

<RecipeHeader.Description>Replace `Whitebox.getInternalState(Object, String)` with `java.lang.reflect.Field` access, casting to the declared result type where needed. The field lookup uses `getDeclaredField` on the target object's class, which differs from PowerMock's class-hierarchy traversal for fields inherited from a superclass.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"class MyService {\n    private String name = \"hello\";\n}\n"},"variants":[{"language":"java","before":"import org.powermock.reflect.Whitebox;\n\nclass MyServiceTest {\n    void testGetField() {\n        MyService service = new MyService();\n        String result = Whitebox.getInternalState(service, \"name\");\n    }\n}\n","after":"import java.lang.reflect.Field;\n\nclass MyServiceTest {\n    void testGetField() throws Exception {\n        MyService service = new MyService();\n        Field nameField = service.getClass().getDeclaredField(\"name\");\n        nameField.setAccessible(true);\n        String result = (String) nameField.get(service);\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.powermock.reflect.Whitebox;\n+import java.lang.reflect.Field;\n\n@@ -4,1 +4,1 @@\n\nclass MyServiceTest {\n-   void testGetField() {\n+   void testGetField() throws Exception {\n        MyService service = new MyService();\n@@ -6,1 +6,3 @@\n    void testGetField() {\n        MyService service = new MyService();\n-       String result = Whitebox.getInternalState(service, \"name\");\n+       Field nameField = service.getClass().getDeclaredField(\"name\");\n+       nameField.setAccessible(true);\n+       String result = (String) nameField.get(service);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.mockito.PowerMockWhiteboxGetInternalStateToJavaReflection","displayName":"Replace PowerMock `Whitebox.getInternalState()` with Java reflection","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

