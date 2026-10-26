---
title: "Migrate System Rules `ExpectedSystemExit` to System Stubs `catchSystemExit(..)`"
sidebar_label: "Migrate System Rules `ExpectedSystemExit` to System Stubs `catchSystemExit(..)`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/junit5/expectedsystemexittocatchsystemexit" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate System Rules `ExpectedSystemExit` to System Stubs `catchSystemExit(..)`"}
  description={"Replaces System Rules' `ExpectedSystemExit` rule with System Stubs' `catchSystemExit(..)`, which runs the rest of the test in a lambda and returns the exit status for an `assertEquals(..)`. Assertions registered through `checkAssertionAfterwards(..)` are inlined after it. Rules that other classes may use, or that set expectations outside of the test method body, get a `TODO` comment instead."}
  fqName={"org.openrewrite.java.testing.junit5.ExpectedSystemExitToCatchSystemExit"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/ExpectedSystemExitToCatchSystemExit.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.junit5.ExpectedSystemExitToCatchSystemExit"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.ExpectedSystemExitToCatchSystemExit"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/junit5/expectedsystemexittocatchsystemexit.md"}
>

<RecipeHeader.Title>Migrate System Rules `ExpectedSystemExit` to System Stubs `catchSystemExit(..)`</RecipeHeader.Title>

<RecipeHeader.Description>Replaces System Rules' `ExpectedSystemExit` rule with System Stubs' `catchSystemExit(..)`, which runs the rest of the test in a lambda and returns the exit status for an `assertEquals(..)`. Assertions registered through `checkAssertionAfterwards(..)` are inlined after it. Rules that other classes may use, or that set expectations outside of the test method body, get a `TODO` comment instead.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.junit.Rule;\nimport org.junit.contrib.java.lang.system.ExpectedSystemExit;\nimport org.junit.jupiter.api.Test;\n\nimport java.io.File;\n\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n\nclass CliTest {\n    @Rule\n    public final ExpectedSystemExit exit = ExpectedSystemExit.none();\n\n    @Test\n    void exitsWithError() {\n        String[] args = {\"--bogus\"};\n        exit.expectSystemExitWithStatus(2);\n        exit.checkAssertionAfterwards(() -> assertTrue(new File(\"error.log\").exists()));\n        run(args);\n    }\n\n    private static void run(String[] args) {\n        System.exit(2);\n    }\n}\n","after":"import org.junit.jupiter.api.Test;\n\nimport java.io.File;\n\nimport static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\nimport static uk.org.webcompere.systemstubs.SystemStubs.catchSystemExit;\n\nclass CliTest {\n\n    @Test\n    void exitsWithError() throws Exception {\n        String[] args = {\"--bogus\"};\n        int status = catchSystemExit(() -> run(args));\n        assertEquals(2, status);\n        assertTrue(new File(\"error.log\").exists());\n    }\n\n    private static void run(String[] args) {\n        System.exit(2);\n    }\n}\n","diff":"@@ -1,2 +1,0 @@\n-import org.junit.Rule;\n-import org.junit.contrib.java.lang.system.ExpectedSystemExit;\nimport org.junit.jupiter.api.Test;\n@@ -7,0 +5,1 @@\nimport java.io.File;\n\n+import static org.junit.jupiter.api.Assertions.assertEquals;\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n@@ -8,0 +7,1 @@\n\nimport static org.junit.jupiter.api.Assertions.assertTrue;\n+import static uk.org.webcompere.systemstubs.SystemStubs.catchSystemExit;\n\n@@ -10,2 +10,0 @@\n\nclass CliTest {\n-   @Rule\n-   public final ExpectedSystemExit exit = ExpectedSystemExit.none();\n\n@@ -14,1 +12,1 @@\n\n    @Test\n-   void exitsWithError() {\n+   void exitsWithError() throws Exception {\n        String[] args = {\"--bogus\"};\n@@ -16,3 +14,3 @@\n    void exitsWithError() {\n        String[] args = {\"--bogus\"};\n-       exit.expectSystemExitWithStatus(2);\n-       exit.checkAssertionAfterwards(() -> assertTrue(new File(\"error.log\").exists()));\n-       run(args);\n+       int status = catchSystemExit(() -> run(args));\n+       assertEquals(2, status);\n+       assertTrue(new File(\"error.log\").exists());\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.junit5.ExpectedSystemExitToCatchSystemExit","displayName":"Migrate System Rules `ExpectedSystemExit` to System Stubs `catchSystemExit(..)`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

