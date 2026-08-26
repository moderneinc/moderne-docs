---
title: "Migrate to current MetalLB `Service` configuration"
sidebar_label: "Migrate to current MetalLB `Service` configuration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to current MetalLB `Service` configuration"}
  description={"Bring the `Service` side of a [MetalLB](https://metallb.io) installation up to date: annotations move off the deprecated `metallb.universe.tf` domain onto `metallb.io`, and an address pinned in the deprecated `spec.loadBalancerIP` moves into the `metallb.io/loadBalancerIPs` annotation that replaced it.\nThese are MetalLB's own conventions rather than Kubernetes API migrations. Nothing here applies to a cluster whose `LoadBalancer` services are served by a cloud provider or by another bare metal load balancer, so scope the run to the manifests MetalLB serves.\nThe domain rename runs first, so that a service already carrying `metallb.universe.tf/loadBalancerIPs` is compared against its migrated name."}
  fqName={"org.openrewrite.kubernetes.metallb.MetalLB"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["metallb","kubernetes"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.metallb.MetalLB"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.metallb.MetalLB"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/metallb/metallb-recipe.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to current MetalLB `Service` configuration</RecipeHeader.Title>

<RecipeHeader.Description>Bring the `Service` side of a [MetalLB](https://metallb.io) installation up to date: annotations move off the deprecated `metallb.universe.tf` domain onto `metallb.io`, and an address pinned in the deprecated `spec.loadBalancerIP` moves into the `metallb.io/loadBalancerIPs` annotation that replaced it. These are MetalLB's own conventions rather than Kubernetes API migrations. Nothing here applies to a cluster whose `LoadBalancer` services are served by a cloud provider or by another bare metal load balancer, so scope the run to the manifests MetalLB serves. The domain rename runs first, so that a service already carrying `metallb.universe.tf/loadBalancerIPs` is compared against its migrated name.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate MetalLB annotations to the `metallb.io` domain","href":"/user-documentation/recipes/recipe-catalog/kubernetes/metallb/migratemetallbannotationprefix/"},{"name":"Migrate `Service` `spec.loadBalancerIP` to the MetalLB annotation","href":"/user-documentation/recipes/recipe-catalog/kubernetes/metallb/migrateloadbalanceriptometallbannotation/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"yaml","before":"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: m2m-pool\nspec:\n  addresses:\n    - 10.250.4.0/24\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.universe.tf/address-pool: m2m-pool\nspec:\n  type: LoadBalancer\n  loadBalancerIP: 10.250.4.10\n","after":"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: m2m-pool\nspec:\n  addresses:\n    - 10.250.4.0/24\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.io/address-pool: m2m-pool\n    metallb.io/loadBalancerIPs: 10.250.4.10\nspec:\n  type: LoadBalancer\n","diff":"@@ -14,1 +14,2 @@\n  name: podinfo-lb\n  annotations:\n-   metallb.universe.tf/address-pool: m2m-pool\n+   metallb.io/address-pool: m2m-pool\n+   metallb.io/loadBalancerIPs: 10.250.4.10\nspec:\n@@ -17,1 +18,0 @@\nspec:\n  type: LoadBalancer\n- loadBalancerIP: 10.250.4.10\n\n","newFile":false}]},{"variants":[{"language":"yaml","before":"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: m2m-pool\nspec:\n  addresses:\n    - 10.250.4.0/24\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.universe.tf/address-pool: m2m-pool\nspec:\n  type: LoadBalancer\n  loadBalancerIP: 10.250.4.10\n","after":"apiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: m2m-pool\nspec:\n  addresses:\n    - 10.250.4.0/24\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.io/address-pool: m2m-pool\n    metallb.io/loadBalancerIPs: 10.250.4.10\nspec:\n  type: LoadBalancer\n","diff":"@@ -14,1 +14,2 @@\n  name: podinfo-lb\n  annotations:\n-   metallb.universe.tf/address-pool: m2m-pool\n+   metallb.io/address-pool: m2m-pool\n+   metallb.io/loadBalancerIPs: 10.250.4.10\nspec:\n@@ -17,1 +18,0 @@\nspec:\n  type: LoadBalancer\n- loadBalancerIP: 10.250.4.10\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.metallb.MetalLB","displayName":"Migrate to current MetalLB `Service` configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

