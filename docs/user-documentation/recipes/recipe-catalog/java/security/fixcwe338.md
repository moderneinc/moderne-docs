---
title: "Fix CWE-338 with `SecureRandom`"
sidebar_label: "Fix CWE-338 with `SecureRandom`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Fix CWE-338 with `SecureRandom`"}
  description={"Use a cryptographically strong pseudo-random number generator (PRNG)."}
  fqName={"org.openrewrite.java.security.FixCwe338"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["CWE-338"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.FixCwe338"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.FixCwe338"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/fixcwe338.md"}
  moderneOnly
>

<RecipeHeader.Title>Fix CWE-338 with `SecureRandom`</RecipeHeader.Title>

<RecipeHeader.Description>Use a cryptographically strong pseudo-random number generator (PRNG).</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"package au.com.suncorp.easyshare.services.util;\nimport org.apache.commons.lang.RandomStringUtils;\npublic final class RandomUtil {\n    private RandomUtil() {\n    }\n    public static String generateString(int count) {\n        return RandomStringUtils.randomAlphanumeric(count);\n    }\n}\n","after":"package au.com.suncorp.easyshare.services.util;\n\nimport org.apache.commons.lang.RandomStringUtils;\n\nimport java.security.SecureRandom;\n\npublic final class RandomUtil {\n    private static final SecureRandom SECURE_RANDOM = new SecureRandom();\n    private static final int DEF_COUNT = 20;\n\n    static {\n        SECURE_RANDOM.nextBytes(new byte[64]);\n    }\n\n    private RandomUtil() {\n    }\n\n    public static String generateString(int count) {\n        return generateRandomAlphanumericString();\n    }\n\n    private static String generateRandomAlphanumericString() {\n        return RandomStringUtils.random(DEF_COUNT, 0, 0, true, true, null, SECURE_RANDOM);\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\npackage au.com.suncorp.easyshare.services.util;\n+\nimport org.apache.commons.lang.RandomStringUtils;\n@@ -3,0 +4,3 @@\npackage au.com.suncorp.easyshare.services.util;\nimport org.apache.commons.lang.RandomStringUtils;\n+\n+import java.security.SecureRandom;\n+\npublic final class RandomUtil {\n@@ -4,0 +8,7 @@\nimport org.apache.commons.lang.RandomStringUtils;\npublic final class RandomUtil {\n+   private static final SecureRandom SECURE_RANDOM = new SecureRandom();\n+   private static final int DEF_COUNT = 20;\n+\n+   static {\n+       SECURE_RANDOM.nextBytes(new byte[64]);\n+   }\n+\n    private RandomUtil() {\n@@ -6,0 +17,1 @@\n    private RandomUtil() {\n    }\n+\n    public static String generateString(int count) {\n@@ -7,1 +19,1 @@\n    }\n    public static String generateString(int count) {\n-       return RandomStringUtils.randomAlphanumeric(count);\n+       return generateRandomAlphanumericString();\n    }\n@@ -9,0 +21,4 @@\n        return RandomStringUtils.randomAlphanumeric(count);\n    }\n+\n+   private static String generateRandomAlphanumericString() {\n+       return RandomStringUtils.random(DEF_COUNT, 0, 0, true, true, null, SECURE_RANDOM);\n+   }\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.FixCwe338","displayName":"Fix CWE-338 with `SecureRandom`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

