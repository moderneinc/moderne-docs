---
title: "Find `PodDisruptionBudget` resources selecting every pod"
sidebar_label: "Find `PodDisruptionBudget` resources selecting every pod"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `PodDisruptionBudget` resources selecting every pod"}
  description={"Find `policy/v1` `PodDisruptionBudget` resources whose `spec.selector` is empty (`{}`), which selects every pod in the namespace and so can block all evictions in it — stalling node drains and cluster upgrades. This is occasionally deliberate, but it is also what a naive version bump from `policy/v1beta1` produces, because there the same empty selector selected no pods at all."}
  fqName={"org.openrewrite.kubernetes.search.FindPodDisruptionBudgetsSelectingAllPods"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindPodDisruptionBudgetsSelectingAllPods"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindPodDisruptionBudgetsSelectingAllPods"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findpoddisruptionbudgetsselectingallpods.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `PodDisruptionBudget` resources selecting every pod</RecipeHeader.Title>

<RecipeHeader.Description>Find `policy/v1` `PodDisruptionBudget` resources whose `spec.selector` is empty (`{}`), which selects every pod in the namespace and so can block all evictions in it — stalling node drains and cluster upgrades. This is occasionally deliberate, but it is also what a naive version bump from `policy/v1beta1` produces, because there the same empty selector selected no pods at all.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pdb-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: pdb\nspec:\n  minAvailable: 1\n  selector: {}\n","after":"~~(selects every pod in the namespace)~~>apiVersion: policy/v1\nkind: PodDisruptionBudget\nmetadata:\n  name: pdb\nspec:\n  minAvailable: 1\n  selector: {}\n","diff":"@@ -1,1 +1,1 @@\n-apiVersion: policy/v1\n+~~(selects every pod in the namespace)~~>apiVersion: policy/v1\nkind: PodDisruptionBudget\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindPodDisruptionBudgetsSelectingAllPods","displayName":"Find `PodDisruptionBudget` resources selecting every pod","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

