---
title: "Simplify redundant AssertJ assertion chains"
sidebar_label: "Simplify redundant AssertJ assertion chains"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/assertj/simplifyredundantassertjchains" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Simplify redundant AssertJ assertion chains"}
  description={"Removes redundant AssertJ assertions when chained methods already provide the same or stronger guarantees."}
  fqName={"org.openrewrite.java.testing.assertj.SimplifyRedundantAssertJChains"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/assertj/SimplifyRedundantAssertJChains.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.assertj.SimplifyRedundantAssertJChains"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.SimplifyRedundantAssertJChains"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/assertj/simplifyredundantassertjchains.md"}
>

<RecipeHeader.Title>Simplify redundant AssertJ assertion chains</RecipeHeader.Title>

<RecipeHeader.Description>Removes redundant AssertJ assertions when chained methods already provide the same or stronger guarantees.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import static org.assertj.core.api.Assertions.assertThat;\n\nclass Test {\n    void test(String str) {\n        assertThat(str).isNotNull().isNotEmpty();\n        assertThat(str).isNotNull().isEmpty();\n        assertThat(str).isNotNull().isBlank();\n        assertThat(str).isNotNull().isNotBlank();\n        assertThat(str).isNotNull().hasSize(5);\n        assertThat(str).isNotNull().contains(\"test\");\n        assertThat(str).isNotNull().startsWith(\"pre\");\n        assertThat(str).isNotNull().endsWith(\"fix\");\n        assertThat(str).isNotNull().matches(\".*pattern.*\");\n        assertThat(str).isNotNull().isEqualToIgnoringCase(\"TEST\");\n    }\n}\n","after":"import static org.assertj.core.api.Assertions.assertThat;\n\nclass Test {\n    void test(String str) {\n        assertThat(str).isNotEmpty();\n        assertThat(str).isEmpty();\n        assertThat(str).isBlank();\n        assertThat(str).isNotBlank();\n        assertThat(str).hasSize(5);\n        assertThat(str).contains(\"test\");\n        assertThat(str).startsWith(\"pre\");\n        assertThat(str).endsWith(\"fix\");\n        assertThat(str).matches(\".*pattern.*\");\n        assertThat(str).isEqualToIgnoringCase(\"TEST\");\n    }\n}\n","diff":"@@ -5,10 +5,10 @@\nclass Test {\n    void test(String str) {\n-       assertThat(str).isNotNull().isNotEmpty();\n-       assertThat(str).isNotNull().isEmpty();\n-       assertThat(str).isNotNull().isBlank();\n-       assertThat(str).isNotNull().isNotBlank();\n-       assertThat(str).isNotNull().hasSize(5);\n-       assertThat(str).isNotNull().contains(\"test\");\n-       assertThat(str).isNotNull().startsWith(\"pre\");\n-       assertThat(str).isNotNull().endsWith(\"fix\");\n-       assertThat(str).isNotNull().matches(\".*pattern.*\");\n-       assertThat(str).isNotNull().isEqualToIgnoringCase(\"TEST\");\n+       assertThat(str).isNotEmpty();\n+       assertThat(str).isEmpty();\n+       assertThat(str).isBlank();\n+       assertThat(str).isNotBlank();\n+       assertThat(str).hasSize(5);\n+       assertThat(str).contains(\"test\");\n+       assertThat(str).startsWith(\"pre\");\n+       assertThat(str).endsWith(\"fix\");\n+       assertThat(str).matches(\".*pattern.*\");\n+       assertThat(str).isEqualToIgnoringCase(\"TEST\");\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.assertj.SimplifyRedundantAssertJChains","displayName":"Simplify redundant AssertJ assertion chains","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

