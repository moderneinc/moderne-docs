---
title: "JUnit Jupiter best practices"
sidebar_label: "JUnit Jupiter best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/junit/jupiterbestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"JUnit Jupiter best practices"}
  description={"Applies best practices to tests."}
  fqName={"org.openrewrite.java.testing.junit.JupiterBestPractices"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit-jupiter.yml"}
/>

<RecipeHeader
  displayName={"JUnit Jupiter best practices"}
  description={"Applies best practices to tests."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["junit","testing"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.junit.JupiterBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.junit.JupiterBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/junit/jupiterbestpractices.md"}
/>

<RecipeList recipes={[{"name":"Migrate Hamcrest assertions to JUnit Jupiter","href":"java/testing/hamcrest/migratehamcresttojunit5"},{"name":"Statically import JUnit Jupiter assertions","href":"java/testing/junit5/staticimports"},{"name":"Remove JUnit 5 static Assertions imports in Kotlin when wildcard import is present","href":"java/testing/junit5/cleanupkotlinjunit5assertionimports"},{"name":"Clean Up Assertions","href":"java/testing/junit5/cleanupassertions"},{"name":"Replace `@CsvSource` with `@ValueSource` for single method arguments","href":"java/testing/junit5/csvsourcetovaluesource"},{"name":"Remove unnecessary `assertEquals` delta argument for integral types","href":"java/testing/cleanup/assertequalsintegraldeltatoassertequals"},{"name":"Replace JUnit `assertTrue(false)` and `assertFalse(true)` with `fail()`","href":"java/testing/cleanup/assertliteralbooleantofailrecipes"},{"name":"Remove JUnit `assertTrue(true)` and `assertFalse(false)`","href":"java/testing/cleanup/assertliteralbooleanremovedrecipe"},{"name":"Kotlin test methods should have return type `Unit`","href":"java/testing/cleanup/kotlintestmethodsshouldreturnunit"},{"name":"Remove `test` prefix from JUnit 5 tests","href":"java/testing/cleanup/removetestprefix"},{"name":"Simplify `throws` statements of tests","href":"java/testing/cleanup/simplifytestthrows"},{"name":"Remove `public` visibility of JUnit 5 tests","href":"java/testing/cleanup/testsshouldnotbepublic"},{"name":"Test methods should have void return type","href":"java/testing/cleanup/testmethodsshouldbevoid"},{"name":"Add missing `@ParameterizedTest` annotation when `@ValueSource` is used or replace `@Test` with `@ParameterizedTest`","href":"java/testing/junit5/addparameterizedtestannotation"},{"name":"Remove duplicates uses of @TestTemplate implementations for a single method","href":"java/testing/junit5/removeduplicatetesttemplates"},{"name":"Replace `fail()` in `try-catch` blocks with `Assertions.assertDoesNotThrow(() -> { ... })`","href":"java/testing/junit5/removetrycatchfailblocks"},{"name":"Make lifecycle methods non private","href":"java/testing/junit5/lifecyclenonprivate"},{"name":"Applies JUnit 5 `assertThrows` on last statement in lambda block only","href":"java/testing/junit5/assertthrowsonlaststatement"},{"name":"`assertTrue(x instanceof y)` to `assertInstanceOf(y.class, x)`","href":"java/testing/junit5/asserttrueinstanceoftoassertinstanceof"},{"name":"Make implausibly long `@Timeout` values explicit in minutes","href":"java/testing/junit5/implausibletimeouttominutes"},{"name":"Use JUnit5's `assertSame` or `assertNotSame` instead of `assertTrue(... == ...)`","href":"java/testing/junit5/useassertsame"},{"name":"Remove JUnit Jupiter migrationsupport","href":"java/testing/junit/removejupitermigrationsupport"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.junit.JupiterBestPractices","displayName":"JUnit Jupiter best practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

