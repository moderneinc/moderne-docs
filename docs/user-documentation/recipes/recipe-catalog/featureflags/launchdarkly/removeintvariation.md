---
title: "Remove LaunchDarkly's `intVariation` for feature key"
sidebar_label: "Remove LaunchDarkly's `intVariation` for feature key"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/featureflags/launchdarkly/removeintvariation" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove LaunchDarkly's `intVariation` for feature key"}
  description={"Replace `intVariation` invocations for feature key with value, and simplify constant if branch execution."}
  fqName={"org.openrewrite.featureflags.launchdarkly.RemoveIntVariation"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-feature-flags/blob/main/src/main/java/org/openrewrite/featureflags/launchdarkly/RemoveIntVariation.java"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.featureflags.launchdarkly.RemoveIntVariation"}
  artifact={"org.openrewrite.recipe:rewrite-feature-flags"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.featureflags.launchdarkly.RemoveIntVariation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/featureflags/launchdarkly/removeintvariation.md"}
>

<RecipeHeader.Title>Remove LaunchDarkly's `intVariation` for feature key</RecipeHeader.Title>

<RecipeHeader.Description>Replace `intVariation` invocations for feature key with value, and simplify constant if branch execution.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Remove an integer feature flag for feature key","href":"/user-documentation/recipes/recipe-catalog/featureflags/removeintegerflag/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"featureKey","required":true,"description":"The key of the feature flag to remove.","example":"flag-key-123abc"},{"type":"Integer","name":"replacementValue","required":true,"description":"The value to replace the feature flag check with.","example":"42"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"featureKey","value":"flag-key-123abc"},{"parameter":"replacementValue","value":"100"}],"variants":[{"language":"java","before":"import com.launchdarkly.sdk.LDContext;\nimport com.launchdarkly.sdk.server.LDClient;\nclass Foo {\n    private LDClient client = new LDClient(\"sdk-key-123abc\");\n    void bar() {\n        LDContext context = null;\n        int maxRetries = client.intVariation(\"flag-key-123abc\", context, 3);\n        System.out.println(\"Max retries: \" + maxRetries);\n    }\n}\n","after":"class Foo {\n    void bar() {\n        System.out.println(\"Max retries: \" + 100);\n    }\n}\n","diff":"@@ -1,2 +1,0 @@\n-import com.launchdarkly.sdk.LDContext;\n-import com.launchdarkly.sdk.server.LDClient;\nclass Foo {\n@@ -4,1 +2,0 @@\nimport com.launchdarkly.sdk.server.LDClient;\nclass Foo {\n-   private LDClient client = new LDClient(\"sdk-key-123abc\");\n    void bar() {\n@@ -6,3 +3,1 @@\n    private LDClient client = new LDClient(\"sdk-key-123abc\");\n    void bar() {\n-       LDContext context = null;\n-       int maxRetries = client.intVariation(\"flag-key-123abc\", context, 3);\n-       System.out.println(\"Max retries: \" + maxRetries);\n+       System.out.println(\"Max retries: \" + 100);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.featureflags.launchdarkly.RemoveIntVariation","displayName":"Remove LaunchDarkly's `intVariation` for feature key","groupId":"org.openrewrite.recipe","artifactId":"rewrite-feature-flags","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS","requiresConfiguration":true,"cliOptions":" --recipe-option \"featureKey=flag-key-123abc\" --recipe-option \"replacementValue=42\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

