---
title: "Refaster template `TestNGToAssertJRules.AssertEqualWithMessage`"
sidebar_label: "Refaster template `TestNGToAssertJRules.AssertEqualWithMessage`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertequalwithmessagerecipe" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Refaster template `TestNGToAssertJRules.AssertEqualWithMessage`"}
  description={"Recipe created for the following Refaster template:\n```java\n@SuppressWarnings(value = \"java:S1448\")\nstatic final class AssertEqualWithMessage {\n    \n    @BeforeTemplate\n    void before(boolean actual, String message, boolean expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(boolean actual, String message, Boolean expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Boolean actual, String message, boolean expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Boolean actual, String message, Boolean expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(byte actual, String message, byte expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(byte actual, String message, Byte expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Byte actual, String message, byte expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Byte actual, String message, Byte expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(char actual, String message, char expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(char actual, String message, Character expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Character actual, String message, char expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Character actual, String message, Character expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(short actual, String message, short expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(short actual, String message, Short expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Short actual, String message, short expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Short actual, String message, Short expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(int actual, String message, int expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(int actual, String message, Integer expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Integer actual, String message, int expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Integer actual, String message, Integer expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(long actual, String message, long expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(long actual, String message, Long expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Long actual, String message, long expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Long actual, String message, Long expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(float actual, String message, float expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(float actual, String message, Float expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Float actual, String message, float expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Float actual, String message, Float expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(double actual, String message, double expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(double actual, String message, Double expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Double actual, String message, double expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Double actual, String message, Double expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Object actual, String message, Object expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(String actual, String message, String expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @BeforeTemplate\n    void before(Map<?, ?> actual, String message, Map<?, ?> expected) {\n        assertEquals(actual, expected, message);\n    }\n    \n    @AfterTemplate\n    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)\n    void after(Object actual, String message, Object expected) {\n        assertThat(actual).withFailMessage(message).isEqualTo(expected);\n    }\n}\n```\n."}
  fqName={"tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["RSPEC-S1448"]}
  license={"Apache License Version 2.0"}
  fqName={"tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertequalwithmessagerecipe.md"}
>

<RecipeHeader.Title>Refaster template `TestNGToAssertJRules.AssertEqualWithMessage`</RecipeHeader.Title>

<RecipeHeader.Description>

Recipe created for the following Refaster template:
```java
@SuppressWarnings(value = "java:S1448")
static final class AssertEqualWithMessage {
    
    @BeforeTemplate
    void before(boolean actual, String message, boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(boolean actual, String message, Boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Boolean actual, String message, boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Boolean actual, String message, Boolean expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte actual, String message, byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(byte actual, String message, Byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Byte actual, String message, byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Byte actual, String message, Byte expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char actual, String message, char expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(char actual, String message, Character expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Character actual, String message, char expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Character actual, String message, Character expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short actual, String message, short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(short actual, String message, Short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Short actual, String message, short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Short actual, String message, Short expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int actual, String message, int expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(int actual, String message, Integer expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Integer actual, String message, int expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Integer actual, String message, Integer expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long actual, String message, long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(long actual, String message, Long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Long actual, String message, long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Long actual, String message, Long expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float actual, String message, float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(float actual, String message, Float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Float actual, String message, float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Float actual, String message, Float expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double actual, String message, double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(double actual, String message, Double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Double actual, String message, double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Double actual, String message, Double expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Object actual, String message, Object expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(String actual, String message, String expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Map<?, ?> actual, String message, Map<?, ?> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Object expected) {
        assertThat(actual).withFailMessage(message).isEqualTo(expected);
    }
}
```
.

</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualWithMessageRecipe","displayName":"Refaster template `TestNGToAssertJRules.AssertEqualWithMessage`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

