---
title: "JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests"
sidebar_label: "JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/junit5/parameterizedrunnertoparameterized" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests"}
  description={"Convert JUnit 4 parameterized runner the JUnit Jupiter parameterized test equivalent."}
  fqName={"org.openrewrite.java.testing.junit5.ParameterizedRunnerToParameterized"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/ParameterizedRunnerToParameterized.java"}
/>

<RecipeHeader
  displayName={"JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests"}
  description={"Convert JUnit 4 parameterized runner the JUnit Jupiter parameterized test equivalent."}
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.junit5.ParameterizedRunnerToParameterized"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.ParameterizedRunnerToParameterized"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/junit5/parameterizedrunnertoparameterized.md"}
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.junit.Test;\nimport org.junit.runner.RunWith;\nimport org.junit.runners.Parameterized;\nimport org.junit.runners.Parameterized.Parameters;\n\nimport java.util.Arrays;\nimport java.util.List;\n\n@RunWith(Parameterized.class)\npublic class VetTests {\n\n    private String firstName;\n    private String lastName;\n    private Integer id;\n\n    public VetTests(String firstName, String lastName, Integer id) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.id = id;\n    }\n\n    @Test\n    public void testSerialization() {\n        Vet vet = new Vet();\n        vet.setFirstName(firstName);\n        vet.setLastName(lastName);\n        vet.setId(id);\n    }\n\n    @Parameters\n    public static List<Object[]> parameters() {\n        return Arrays.asList(\n            new Object[] { \"Otis\", \"TheDog\", 124 },\n            new Object[] { \"Garfield\", \"TheBoss\", 126 });\n    }\n}\n","after":"import org.junit.jupiter.params.ParameterizedTest;\nimport org.junit.jupiter.params.provider.MethodSource;\n\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class VetTests {\n\n    private String firstName;\n    private String lastName;\n    private Integer id;\n\n    public void initVetTests(String firstName, String lastName, Integer id) {\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.id = id;\n    }\n\n    @MethodSource(\"parameters\")\n    @ParameterizedTest\n    public void testSerialization(String firstName, String lastName, Integer id) {\n        initVetTests(firstName, lastName, id);\n        Vet vet = new Vet();\n        vet.setFirstName(firstName);\n        vet.setLastName(lastName);\n        vet.setId(id);\n    }\n\n    public static List<Object[]> parameters() {\n        return Arrays.asList(\n            new Object[] { \"Otis\", \"TheDog\", 124 },\n            new Object[] { \"Garfield\", \"TheBoss\", 126 });\n    }\n}\n","diff":"@@ -1,4 +1,2 @@\n-import org.junit.Test;\n-import org.junit.runner.RunWith;\n-import org.junit.runners.Parameterized;\n-import org.junit.runners.Parameterized.Parameters;\n+import org.junit.jupiter.params.ParameterizedTest;\n+import org.junit.jupiter.params.provider.MethodSource;\n\n@@ -9,1 +7,0 @@\nimport java.util.List;\n\n-@RunWith(Parameterized.class)\npublic class VetTests {\n@@ -16,1 +13,1 @@\n    private Integer id;\n\n-   public VetTests(String firstName, String lastName, Integer id) {\n+   public void initVetTests(String firstName, String lastName, Integer id) {\n        this.firstName = firstName;\n@@ -22,2 +19,4 @@\n    }\n\n-   @Test\n-   public void testSerialization() {\n+   @MethodSource(\"parameters\")\n+   @ParameterizedTest\n+   public void testSerialization(String firstName, String lastName, Integer id) {\n+       initVetTests(firstName, lastName, id);\n        Vet vet = new Vet();\n@@ -30,1 +29,0 @@\n    }\n\n-   @Parameters\n    public static List<Object[]> parameters() {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.junit5.ParameterizedRunnerToParameterized","displayName":"JUnit 4 `@RunWith(Parameterized.class)` to JUnit Jupiter parameterized tests","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

