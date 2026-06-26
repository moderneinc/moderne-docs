---
title: "Replace EasyMock `verify` calls with Mockito `verify` calls"
sidebar_label: "Replace EasyMock `verify` calls with Mockito `verify` calls"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/easymock/easymockverifytomockitoverify" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace EasyMock `verify` calls with Mockito `verify` calls"}
  description={"Replace `EasyMock.verify(dependency)` with individual `Mockito.verify(dependency).method()` calls based on expected methods."}
  fqName={"org.openrewrite.java.testing.easymock.EasyMockVerifyToMockitoVerify"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/easymock/EasyMockVerifyToMockitoVerify.java"}
/>

<RecipeHeader
  displayName={"Replace EasyMock `verify` calls with Mockito `verify` calls"}
  description={"Replace `EasyMock.verify(dependency)` with individual `Mockito.verify(dependency).method()` calls based on expected methods."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.easymock.EasyMockVerifyToMockitoVerify"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.easymock.EasyMockVerifyToMockitoVerify"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/easymock/easymockverifytomockitoverify.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import static org.easymock.EasyMock.*;\n\npublic class ExampleTest {\n    public void testServiceMethod() {\n        Dependency dependency = createNiceMock(Dependency.class);\n        expect(dependency.action(\"\", 2)).andReturn(\"result\");\n\n        Dependency dependency2 = createNiceMock(Dependency.class);\n        expect(dependency2.action(\"\", 2)).andReturn(\"result\");\n        expect(dependency2.action2());\n\n        Dependency dependency3 = createNiceMock(Dependency.class);\n        expect(dependency3.action(\"A\", 1)).andReturn(\"result\");\n        expect(dependency3.action2()).andReturn(\"result\");\n        expect(dependency3.action3(3.3)).andReturn(\"result\");\n\n        verify(dependency);\n        verify(dependency2);\n        verify(dependency3);\n    }\n\n    interface Dependency {\n        String action(String s, int i);\n        String action2();\n        String action3(double d);\n    }\n}\n","after":"import static org.easymock.EasyMock.expect;\nimport static org.mockito.Mockito.verify;\nimport static org.easymock.EasyMock.createNiceMock;\n\npublic class ExampleTest {\n    public void testServiceMethod() {\n        Dependency dependency = createNiceMock(Dependency.class);\n        expect(dependency.action(\"\", 2)).andReturn(\"result\");\n\n        Dependency dependency2 = createNiceMock(Dependency.class);\n        expect(dependency2.action(\"\", 2)).andReturn(\"result\");\n        expect(dependency2.action2());\n\n        Dependency dependency3 = createNiceMock(Dependency.class);\n        expect(dependency3.action(\"A\", 1)).andReturn(\"result\");\n        expect(dependency3.action2()).andReturn(\"result\");\n        expect(dependency3.action3(3.3)).andReturn(\"result\");\n\n        verify(dependency).action(\"\", 2);\n        verify(dependency2).action(\"\", 2);\n        verify(dependency2).action2();\n        verify(dependency3).action(\"A\", 1);\n        verify(dependency3).action2();\n        verify(dependency3).action3(3.3);\n    }\n\n    interface Dependency {\n        String action(String s, int i);\n        String action2();\n        String action3(double d);\n    }\n}\n","diff":"@@ -1,1 +1,3 @@\n-import static org.easymock.EasyMock.*;\n+import static org.easymock.EasyMock.expect;\n+import static org.mockito.Mockito.verify;\n+import static org.easymock.EasyMock.createNiceMock;\n\n@@ -17,3 +19,6 @@\n        expect(dependency3.action3(3.3)).andReturn(\"result\");\n\n-       verify(dependency);\n-       verify(dependency2);\n-       verify(dependency3);\n+       verify(dependency).action(\"\", 2);\n+       verify(dependency2).action(\"\", 2);\n+       verify(dependency2).action2();\n+       verify(dependency3).action(\"A\", 1);\n+       verify(dependency3).action2();\n+       verify(dependency3).action3(3.3);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.easymock.EasyMockVerifyToMockitoVerify","displayName":"Replace EasyMock `verify` calls with Mockito `verify` calls","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

