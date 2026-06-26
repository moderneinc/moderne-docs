---
title: "Migrate JUnit 4 environmentVariables rule to JUnit 5 system stubs extension"
sidebar_label: "Migrate JUnit 4 environmentVariables rule to JUnit 5 system stubs extension"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/junit5/environmentvariables" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate JUnit 4 environmentVariables rule to JUnit 5 system stubs extension"}
  description={"Replaces usage of the JUnit 4 `@Rule EnvironmentVariables` with the JUnit 5-compatible `SystemStubsExtension` and `@SystemStub EnvironmentVariables` from the System Stubs library."}
  fqName={"org.openrewrite.java.testing.junit5.EnvironmentVariables"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/EnvironmentVariables.java"}
/>

<RecipeHeader
  displayName={"Migrate JUnit 4 environmentVariables rule to JUnit 5 system stubs extension"}
  description={"Replaces usage of the JUnit 4 `@Rule EnvironmentVariables` with the JUnit 5-compatible `SystemStubsExtension` and `@SystemStub EnvironmentVariables` from the System Stubs library."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.junit5.EnvironmentVariables"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.EnvironmentVariables"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/junit5/environmentvariables.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.junit.jupiter.api.BeforeEach;\nimport org.junit.contrib.java.lang.system.EnvironmentVariables;\nimport org.junit.Rule;\nimport org.junit.jupiter.api.Test;\n\npublic class RuleTest {\n    @Rule\n    public EnvironmentVariables environmentVariables = new EnvironmentVariables()\n            .set(\"testSetInline\", \"valueSetInline\").clear(\"testClearInline\");\n\n    @BeforeEach\n    public void setUp() {\n        System.out.println(\"Setting up...\");\n    }\n\n    @Test\n    public void test() {\n        environmentVariables.clear();\n        environmentVariables.set(\"testSet\", \"valueSet\").clear(\"testClear\");\n        environmentVariables.clear(\"clear1\", \"clear2\").clear();\n    }\n}\n","after":"import org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.junit.jupiter.api.extension.ExtendWith;\nimport uk.org.webcompere.systemstubs.environment.EnvironmentVariables;\nimport uk.org.webcompere.systemstubs.jupiter.SystemStub;\nimport uk.org.webcompere.systemstubs.jupiter.SystemStubsExtension;\n\n@ExtendWith(SystemStubsExtension.class)\npublic class RuleTest {\n    @SystemStub\n    public EnvironmentVariables environmentVariables = new EnvironmentVariables()\n            .set(\"testSetInline\", \"valueSetInline\").remove(\"testClearInline\");\n\n    @BeforeEach\n    public void setUp() {\n        System.out.println(\"Setting up...\");\n    }\n\n    @Test\n    public void test() {\n        environmentVariables.set(\"testSet\", \"valueSet\").remove(\"testClear\");\n        environmentVariables.remove(\"clear1\").remove(\"clear2\");\n    }\n}\n","diff":"@@ -2,2 +2,0 @@\nimport org.junit.jupiter.api.BeforeEach;\n-import org.junit.contrib.java.lang.system.EnvironmentVariables;\n-import org.junit.Rule;\nimport org.junit.jupiter.api.Test;\n@@ -5,0 +3,4 @@\nimport org.junit.Rule;\nimport org.junit.jupiter.api.Test;\n+import org.junit.jupiter.api.extension.ExtendWith;\n+import uk.org.webcompere.systemstubs.environment.EnvironmentVariables;\n+import uk.org.webcompere.systemstubs.jupiter.SystemStub;\n+import uk.org.webcompere.systemstubs.jupiter.SystemStubsExtension;\n\n@@ -6,0 +8,1 @@\nimport org.junit.jupiter.api.Test;\n\n+@ExtendWith(SystemStubsExtension.class)\npublic class RuleTest {\n@@ -7,1 +10,1 @@\n\npublic class RuleTest {\n-   @Rule\n+   @SystemStub\n    public EnvironmentVariables environmentVariables = new EnvironmentVariables()\n@@ -9,1 +12,1 @@\n    @Rule\n    public EnvironmentVariables environmentVariables = new EnvironmentVariables()\n-           .set(\"testSetInline\", \"valueSetInline\").clear(\"testClearInline\");\n+           .set(\"testSetInline\", \"valueSetInline\").remove(\"testClearInline\");\n\n@@ -18,3 +21,2 @@\n    @Test\n    public void test() {\n-       environmentVariables.clear();\n-       environmentVariables.set(\"testSet\", \"valueSet\").clear(\"testClear\");\n-       environmentVariables.clear(\"clear1\", \"clear2\").clear();\n+       environmentVariables.set(\"testSet\", \"valueSet\").remove(\"testClear\");\n+       environmentVariables.remove(\"clear1\").remove(\"clear2\");\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.junit5.EnvironmentVariables","displayName":"Migrate JUnit 4 environmentVariables rule to JUnit 5 system stubs extension","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

