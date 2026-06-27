---
title: "Replace `@MockitoBean` and `@MockitoSpyBean` with `@Bean` methods in `@Configuration` classes"
sidebar_label: "Replace `@MockitoBean` and `@MockitoSpyBean` with `@Bean` methods in `@Configuration` classes"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `@MockitoBean` and `@MockitoSpyBean` with `@Bean` methods in `@Configuration` classes"}
  description={"`@MockitoBean` and `@MockitoSpyBean` only work in test classes, not in `@Configuration` classes. This recipe converts annotated fields into `@Bean` methods using `Mockito.mock()` or `Mockito.spy()`."}
  fqName={"io.moderne.java.spring.boot3.ReplaceMockitoBeanWithBeanMethod"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot3.ReplaceMockitoBeanWithBeanMethod"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot3.ReplaceMockitoBeanWithBeanMethod"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot3/replacemockitobeanwithbeanmethod.md"}
  moderneOnly
>

<RecipeHeader.Title>Replace `@MockitoBean` and `@MockitoSpyBean` with `@Bean` methods in `@Configuration` classes</RecipeHeader.Title>

<RecipeHeader.Description>`@MockitoBean` and `@MockitoSpyBean` only work in test classes, not in `@Configuration` classes. This recipe converts annotated fields into `@Bean` methods using `Mockito.mock()` or `Mockito.spy()`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"unchanged":{"language":"java","code":"public class AuditLogger {}\n"},"variants":[{"language":"java","before":"import org.springframework.context.annotation.Configuration;\nimport org.springframework.test.context.bean.override.mockito.MockitoBean;\n\n@Configuration\npublic class TestConfig {\n    @MockitoBean\n    private AuditLogger auditLogger;\n}\n","after":"import org.mockito.Mockito;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class TestConfig {\n\n    @Bean\n    public AuditLogger auditLogger() {\n        return Mockito.mock(AuditLogger.class);\n    }\n}\n","diff":"@@ -1,0 +1,2 @@\n+import org.mockito.Mockito;\n+import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n@@ -2,1 +4,0 @@\nimport org.springframework.context.annotation.Configuration;\n-import org.springframework.test.context.bean.override.mockito.MockitoBean;\n\n@@ -6,2 +7,5 @@\n@Configuration\npublic class TestConfig {\n-   @MockitoBean\n-   private AuditLogger auditLogger;\n+\n+   @Bean\n+   public AuditLogger auditLogger() {\n+       return Mockito.mock(AuditLogger.class);\n+   }\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot3.ReplaceMockitoBeanWithBeanMethod","displayName":"Replace `@MockitoBean` and `@MockitoSpyBean` with `@Bean` methods in `@Configuration` classes","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

