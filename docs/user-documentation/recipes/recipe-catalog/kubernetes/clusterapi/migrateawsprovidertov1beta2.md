---
title: "Migrate Cluster API Provider AWS resources to `v1beta2`"
sidebar_label: "Migrate Cluster API Provider AWS resources to `v1beta2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Cluster API Provider AWS resources to `v1beta2`"}
  description={"Change the `apiVersion` of the resources served by Cluster API Provider AWS to `v1beta2`, across the `infrastructure`, `bootstrap` and `controlplane` groups it contributes to. `ROSA*` and `Nodeadm*` are absent because they were introduced at `v1beta2` and never had a `v1beta1`. This recipe changes `apiVersion` only. Whatever else this provider reshaped in `v1beta2` is defined by the provider rather than by the Cluster API contract, so review the resources it touches against the provider's own migration notes."}
  fqName={"org.openrewrite.kubernetes.clusterapi.MigrateAwsProviderToV1beta2"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["cluster-api","kubernetes"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.clusterapi.MigrateAwsProviderToV1beta2"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.clusterapi.MigrateAwsProviderToV1beta2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/clusterapi/migrateawsprovidertov1beta2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate Cluster API Provider AWS resources to `v1beta2`</RecipeHeader.Title>

<RecipeHeader.Description>Change the `apiVersion` of the resources served by Cluster API Provider AWS to `v1beta2`, across the `infrastructure`, `bootstrap` and `controlplane` groups it contributes to. `ROSA*` and `Nodeadm*` are absent because they were introduced at `v1beta2` and never had a `v1beta1`. This recipe changes `apiVersion` only. Whatever else this provider reshaped in `v1beta2` is defined by the provider rather than by the Cluster API contract, so review the resources it touches against the provider's own migration notes.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Change Kubernetes API version","href":"/user-documentation/recipes/recipe-catalog/kubernetes/changeapiversion/"},{"name":"Change Kubernetes API version","href":"/user-documentation/recipes/recipe-catalog/kubernetes/changeapiversion/"},{"name":"Change Kubernetes API version","href":"/user-documentation/recipes/recipe-catalog/kubernetes/changeapiversion/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.clusterapi.MigrateAwsProviderToV1beta2","displayName":"Migrate Cluster API Provider AWS resources to `v1beta2`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

