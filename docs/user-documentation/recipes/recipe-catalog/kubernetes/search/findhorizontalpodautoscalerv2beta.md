---
title: "Find `autoscaling/v2beta1` and `autoscaling/v2beta2` HorizontalPodAutoscalers"
sidebar_label: "Find `autoscaling/v2beta1` and `autoscaling/v2beta2` HorizontalPodAutoscalers"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `autoscaling/v2beta1` and `autoscaling/v2beta2` HorizontalPodAutoscalers"}
  description={"Find `HorizontalPodAutoscaler` resources still on an `autoscaling` beta API; `v2beta1` was removed in Kubernetes v1.25 and `v2beta2` in v1.26. Moving to `autoscaling/v2` is not a version swap: each entry of `spec.metrics` carries a `target` object, so `targetAverageUtilization` becomes `target.averageUtilization` with `target.type: Utilization` and `targetAverageValue` becomes `target.averageValue` with `target.type: AverageValue`."}
  fqName={"org.openrewrite.kubernetes.search.FindHorizontalPodAutoscalerV2beta"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindHorizontalPodAutoscalerV2beta"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindHorizontalPodAutoscalerV2beta"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findhorizontalpodautoscalerv2beta.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `autoscaling/v2beta1` and `autoscaling/v2beta2` HorizontalPodAutoscalers</RecipeHeader.Title>

<RecipeHeader.Description>Find `HorizontalPodAutoscaler` resources still on an `autoscaling` beta API; `v2beta1` was removed in Kubernetes v1.25 and `v2beta2` in v1.26. Moving to `autoscaling/v2` is not a version swap: each entry of `spec.metrics` carries a `target` object, so `targetAverageUtilization` becomes `target.averageUtilization` with `target.type: Utilization` and `targetAverageValue` becomes `target.averageValue` with `target.type: AverageValue`.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/hpa-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hpa-one\nspec:\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        targetAverageUtilization: 80\n---\napiVersion: autoscaling/v2beta2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hpa-two\n---\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hpa-three\n","after":"~~(metric targets must be restructured for autoscaling/v2)~~>apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hpa-one\nspec:\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        targetAverageUtilization: 80\n~~(metric targets must be restructured for autoscaling/v2)~~>---\napiVersion: autoscaling/v2beta2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hpa-two\n---\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: hpa-three\n","diff":"@@ -1,1 +1,1 @@\n-apiVersion: autoscaling/v2beta1\n+~~(metric targets must be restructured for autoscaling/v2)~~>apiVersion: autoscaling/v2beta1\nkind: HorizontalPodAutoscaler\n@@ -11,1 +11,1 @@\n        name: cpu\n        targetAverageUtilization: 80\n----\n+~~(metric targets must be restructured for autoscaling/v2)~~>---\napiVersion: autoscaling/v2beta2\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindHorizontalPodAutoscalerV2beta","displayName":"Find `autoscaling/v2beta1` and `autoscaling/v2beta2` HorizontalPodAutoscalers","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

