---
title: "Mark incompatible LaunchDarkly `EvaluationDetail` accessors"
sidebar_label: "Mark incompatible LaunchDarkly `EvaluationDetail` accessors"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/featureflags/launchdarkly/markincompatibleevaluationdetailaccessors" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Mark incompatible LaunchDarkly `EvaluationDetail` accessors"}
  description={"OpenFeature's `FlagEvaluationDetails` does not offer a direct replacement for every `EvaluationDetail` accessor. Add a `TODO` comment on `getVariationIndex()`, `isDefaultValue()` and `getReason()` calls so they are migrated by hand, since `getVariationIndex()` and `isDefaultValue()` have no equivalent and `getReason()` returns a `String` rather than an `EvaluationReason`."}
  fqName={"org.openrewrite.featureflags.launchdarkly.MarkIncompatibleEvaluationDetailAccessors"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-feature-flags/blob/main/src/main/java/org/openrewrite/featureflags/launchdarkly/MarkIncompatibleEvaluationDetailAccessors.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.featureflags.launchdarkly.MarkIncompatibleEvaluationDetailAccessors"}
  artifact={"org.openrewrite.recipe:rewrite-feature-flags"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.featureflags.launchdarkly.MarkIncompatibleEvaluationDetailAccessors"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/featureflags/launchdarkly/markincompatibleevaluationdetailaccessors.md"}
>

<RecipeHeader.Title>Mark incompatible LaunchDarkly `EvaluationDetail` accessors</RecipeHeader.Title>

<RecipeHeader.Description>OpenFeature's `FlagEvaluationDetails` does not offer a direct replacement for every `EvaluationDetail` accessor. Add a `TODO` comment on `getVariationIndex()`, `isDefaultValue()` and `getReason()` calls so they are migrated by hand, since `getVariationIndex()` and `isDefaultValue()` have no equivalent and `getReason()` returns a `String` rather than an `EvaluationReason`.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import com.launchdarkly.sdk.EvaluationDetail;\n\nclass A {\n    void inspect(EvaluationDetail<Boolean> detail) {\n        int index = detail.getVariationIndex();\n        boolean isDefault = detail.isDefaultValue();\n    }\n}\n","after":"import com.launchdarkly.sdk.EvaluationDetail;\n\nclass A {\n    void inspect(EvaluationDetail<Boolean> detail) {\n        int index = /* TODO OpenFeature migration: `getVariationIndex()` has no OpenFeature equivalent; `FlagEvaluationDetails` exposes `getVariant()` (a String) instead */ detail.getVariationIndex();\n        boolean isDefault = /* TODO OpenFeature migration: `isDefaultValue()` has no OpenFeature equivalent; inspect `getReason()` / `getErrorCode()` instead */ detail.isDefaultValue();\n    }\n}\n","diff":"@@ -5,2 +5,2 @@\nclass A {\n    void inspect(EvaluationDetail<Boolean> detail) {\n-       int index = detail.getVariationIndex();\n-       boolean isDefault = detail.isDefaultValue();\n+       int index = /* TODO OpenFeature migration: `getVariationIndex()` has no OpenFeature equivalent; `FlagEvaluationDetails` exposes `getVariant()` (a String) instead */ detail.getVariationIndex();\n+       boolean isDefault = /* TODO OpenFeature migration: `isDefaultValue()` has no OpenFeature equivalent; inspect `getReason()` / `getErrorCode()` instead */ detail.isDefaultValue();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.featureflags.launchdarkly.MarkIncompatibleEvaluationDetailAccessors","displayName":"Mark incompatible LaunchDarkly `EvaluationDetail` accessors","groupId":"org.openrewrite.recipe","artifactId":"rewrite-feature-flags","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_FEATURE_FLAGS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

