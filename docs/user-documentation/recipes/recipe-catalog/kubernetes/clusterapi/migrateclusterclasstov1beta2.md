---
title: "Migrate `ClusterClass` to `cluster.x-k8s.io/v1beta2`"
sidebar_label: "Migrate `ClusterClass` to `cluster.x-k8s.io/v1beta2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `ClusterClass` to `cluster.x-k8s.io/v1beta2`"}
  description={"Rewrite a `ClusterClass` into its `v1beta2` form. Templates are named through `templateRef` without the `template` wrapper. A `templateRef` still carries an `apiVersion`, so which are safe to re-point belongs to the provider serving each kind and is reported rather than guessed."}
  fqName={"org.openrewrite.kubernetes.clusterapi.MigrateClusterClassToV1beta2"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["kubernetes","clusterapi"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.clusterapi.MigrateClusterClassToV1beta2"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.clusterapi.MigrateClusterClassToV1beta2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/clusterapi/migrateclusterclasstov1beta2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `ClusterClass` to `cluster.x-k8s.io/v1beta2`</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite a `ClusterClass` into its `v1beta2` form. Templates are named through `templateRef` without the `template` wrapper. A `templateRef` still carries an `apiVersion`, so which are safe to re-point belongs to the provider serving each kind and is reported rather than guessed.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate the Cluster API core group to `v1beta2`","href":"/user-documentation/recipes/recipe-catalog/kubernetes/clusterapi/migrateclusterapicoreresourcetov1beta2/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.clusterapi.MigrateClusterClassToV1beta2","displayName":"Migrate `ClusterClass` to `cluster.x-k8s.io/v1beta2`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.clusterapi.table.ClusterApiV1beta2Migrations","displayName":"Cluster API v1beta2 migrations","description":"Every `cluster.x-k8s.io/v1beta1` resource considered, what moving it to `v1beta2` rewrote, and why the ones left behind could not move.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Kind","description":"The `kind` of the resource."},{"name":"Name","description":"The `metadata.name` of the resource."},{"name":"Migration","description":"`automatic` when the resource was rewritten, `manual` when it was left alone."},{"name":"Changes","description":"The fields that moved or were renamed, empty when the resource only needed its `apiVersion` changed."},{"name":"Follow-up","description":"Values `v1beta2` has no field for, durations that lost sub-second precision on the way to whole seconds, and template references still naming a version this recipe cannot re-point. Empty when the rewrite carried everything over."},{"name":"Blocker","description":"Why the resource was left on `v1beta1`, empty when it was migrated."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

