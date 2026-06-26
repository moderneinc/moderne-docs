---
title: "Use Byteman JUnit 5 dependency"
sidebar_label: "Use Byteman JUnit 5 dependency"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/byteman/bytemanjunit4tobytemanjunit5" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use Byteman JUnit 5 dependency"}
  description={"Migrates Byteman JUnit 4 to JUnit 5."}
  fqName={"org.openrewrite.java.testing.byteman.BytemanJUnit4ToBytemanJUnit5"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/byteman.yml"}
/>

<RecipeHeader
  displayName={"Use Byteman JUnit 5 dependency"}
  description={"Migrates Byteman JUnit 4 to JUnit 5."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["junit","testing","byteman"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.byteman.BytemanJUnit4ToBytemanJUnit5"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.byteman.BytemanJUnit4ToBytemanJUnit5"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/byteman/bytemanjunit4tobytemanjunit5.md"}
/>

<RecipeList recipes={[{"name":"Change Gradle or Maven dependency","href":"java/dependencies/changedependency"},{"name":"Replace annotation","href":"java/replaceannotation"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.jboss.byteman.contrib.bmunit.BMRule;\nimport org.jboss.byteman.contrib.bmunit.BMUnitRunner;\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\n\n@RunWith(BMUnitRunner.class)\npublic class BytemanTest {\n\n    @Test\n    @BMRule(name = \"test rule\",\n        targetClass = \"java.lang.String\",\n        targetMethod = \"length()\",\n        action = \"return 42\")\n    public void testWithByteman() {\n        String test = \"hello\";\n        assert test.length() == 42;\n    }\n}\n","after":"import org.jboss.byteman.contrib.bmunit.BMRule;\nimport org.jboss.byteman.contrib.bmunit.WithByteman;\nimport org.junit.Test;\n\n@WithByteman\npublic class BytemanTest {\n\n    @Test\n    @BMRule(name = \"test rule\",\n        targetClass = \"java.lang.String\",\n        targetMethod = \"length()\",\n        action = \"return 42\")\n    public void testWithByteman() {\n        String test = \"hello\";\n        assert test.length() == 42;\n    }\n}\n","diff":"@@ -2,1 +2,1 @@\nimport org.jboss.byteman.contrib.bmunit.BMRule;\n-import org.jboss.byteman.contrib.bmunit.BMUnitRunner;\n+import org.jboss.byteman.contrib.bmunit.WithByteman;\nimport org.junit.Test;\n@@ -4,1 +4,0 @@\nimport org.jboss.byteman.contrib.bmunit.BMUnitRunner;\nimport org.junit.Test;\n-import org.junit.runner.RunWith;\n\n@@ -6,1 +5,1 @@\nimport org.junit.runner.RunWith;\n\n-@RunWith(BMUnitRunner.class)\n+@WithByteman\npublic class BytemanTest {\n","newFile":false}]},{"variants":[{"language":"java","before":"import org.jboss.byteman.contrib.bmunit.BMRule;\nimport org.jboss.byteman.contrib.bmunit.BMUnitRunner;\nimport org.junit.Test;\nimport org.junit.runner.RunWith;\n\n@RunWith(BMUnitRunner.class)\npublic class BytemanTest {\n\n    @Test\n    @BMRule(name = \"test rule\",\n        targetClass = \"java.lang.String\",\n        targetMethod = \"length()\",\n        action = \"return 42\")\n    public void testWithByteman() {\n        String test = \"hello\";\n        assert test.length() == 42;\n    }\n}\n","after":"import org.jboss.byteman.contrib.bmunit.BMRule;\nimport org.jboss.byteman.contrib.bmunit.WithByteman;\nimport org.junit.Test;\n\n@WithByteman\npublic class BytemanTest {\n\n    @Test\n    @BMRule(name = \"test rule\",\n        targetClass = \"java.lang.String\",\n        targetMethod = \"length()\",\n        action = \"return 42\")\n    public void testWithByteman() {\n        String test = \"hello\";\n        assert test.length() == 42;\n    }\n}\n","diff":"@@ -2,1 +2,1 @@\nimport org.jboss.byteman.contrib.bmunit.BMRule;\n-import org.jboss.byteman.contrib.bmunit.BMUnitRunner;\n+import org.jboss.byteman.contrib.bmunit.WithByteman;\nimport org.junit.Test;\n@@ -4,1 +4,0 @@\nimport org.jboss.byteman.contrib.bmunit.BMUnitRunner;\nimport org.junit.Test;\n-import org.junit.runner.RunWith;\n\n@@ -6,1 +5,1 @@\nimport org.junit.runner.RunWith;\n\n-@RunWith(BMUnitRunner.class)\n+@WithByteman\npublic class BytemanTest {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.byteman.BytemanJUnit4ToBytemanJUnit5","displayName":"Use Byteman JUnit 5 dependency","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

