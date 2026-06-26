---
title: "JUnit 5 best practices"
sidebar_label: "JUnit 5 best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/junit5/junit5bestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"JUnit 5 best practices"}
  description={"Applies best practices to tests."}
  fqName={"org.openrewrite.java.testing.junit5.JUnit5BestPractices"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml"}
/>

<RecipeHeader
  displayName={"JUnit 5 best practices"}
  description={"Applies best practices to tests."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["junit","testing"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.junit5.JUnit5BestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnit5BestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/junit5/junit5bestpractices.md"}
/>

<RecipeList recipes={[{"name":"JUnit Jupiter migration from JUnit 4.x","href":"java/testing/junit5/junit4to5migration"},{"name":"Upgrade to JUnit 5.14","href":"java/testing/junit5/upgradetojunit514"},{"name":"JUnit Jupiter best practices","href":"java/testing/junit/jupiterbestpractices"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.junit.Before;\n\npublic class Example {\n    @Before\n    public void initialize() {\n    }\n}\n","after":"import org.junit.jupiter.api.BeforeEach;\n\nclass Example {\n    @BeforeEach\n    void initialize() {\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.junit.Before;\n+import org.junit.jupiter.api.BeforeEach;\n\n@@ -3,3 +3,3 @@\nimport org.junit.Before;\n\n-public class Example {\n-   @Before\n-   public void initialize() {\n+class Example {\n+   @BeforeEach\n+   void initialize() {\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.junit.Before;\n\npublic class Example {\n    @Before\n    public void initialize() {\n    }\n}\n","after":"import org.junit.jupiter.api.BeforeEach;\n\nclass Example {\n    @BeforeEach\n    void initialize() {\n    }\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.junit.Before;\n+import org.junit.jupiter.api.BeforeEach;\n\n@@ -3,3 +3,3 @@\nimport org.junit.Before;\n\n-public class Example {\n-   @Before\n-   public void initialize() {\n+class Example {\n+   @BeforeEach\n+   void initialize() {\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.junit5.JUnit5BestPractices","displayName":"JUnit 5 best practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

