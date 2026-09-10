---
title: "Migrate `Service` `spec.loadBalancerIP` to the MetalLB annotation"
sidebar_label: "Migrate `Service` `spec.loadBalancerIP` to the MetalLB annotation"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `Service` `spec.loadBalancerIP` to the MetalLB annotation"}
  description={"Move the address a `type: LoadBalancer` `Service` pins in `spec.loadBalancerIP`, deprecated in Kubernetes 1.24, into the `metallb.io/loadBalancerIPs` annotation [MetalLB](https://metallb.io) reads in its place. `spec.loadBalancerIP` holds a single address, so a dual stack service can name only one of its two families there and silently takes whatever MetalLB allocates for the other; the annotation takes a comma separated list and is the only way to pin both.\n\nMetalLB refuses to allocate at all for a service that sets both the annotation and `spec.loadBalancerIP`. Where the annotation is already present this therefore drops `spec.loadBalancerIP` when the two agree, and reports it when they disagree rather than picking an address on the author's behalf.\n\nThis annotation means nothing to a cloud provider's load balancer controller, so run it only against manifests MetalLB serves."}
  fqName={"org.openrewrite.kubernetes.metallb.MigrateLoadBalancerIpToMetalLbAnnotation"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.metallb.MigrateLoadBalancerIpToMetalLbAnnotation"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.metallb.MigrateLoadBalancerIpToMetalLbAnnotation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/metallb/migrateloadbalanceriptometallbannotation.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `Service` `spec.loadBalancerIP` to the MetalLB annotation</RecipeHeader.Title>

<RecipeHeader.Description>Move the address a `type: LoadBalancer` `Service` pins in `spec.loadBalancerIP`, deprecated in Kubernetes 1.24, into the `metallb.io/loadBalancerIPs` annotation [MetalLB](https://metallb.io) reads in its place. `spec.loadBalancerIP` holds a single address, so a dual stack service can name only one of its two families there and silently takes whatever MetalLB allocates for the other; the annotation takes a comma separated list and is the only way to pin both.  MetalLB refuses to allocate at all for a service that sets both the annotation and `spec.loadBalancerIP`. Where the annotation is already present this therefore drops `spec.loadBalancerIP` when the two agree, and reports it when they disagree rather than picking an address on the author's behalf.  This annotation means nothing to a cloud provider's load balancer controller, so run it only against manifests MetalLB serves.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/service-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: podinfo\nspec:\n  replicas: 2\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.io/address-pool: m2m-pool\nspec:\n  type: LoadBalancer\n  loadBalancerIP: 10.250.4.10\n  ports:\n    - port: 80\n      targetPort: 9898\n","after":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: podinfo\nspec:\n  replicas: 2\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.io/address-pool: m2m-pool\n    metallb.io/loadBalancerIPs: 10.250.4.10\nspec:\n  type: LoadBalancer\n  ports:\n    - port: 80\n      targetPort: 9898\n","diff":"@@ -14,0 +14,1 @@\n  annotations:\n    metallb.io/address-pool: m2m-pool\n+   metallb.io/loadBalancerIPs: 10.250.4.10\nspec:\n@@ -16,1 +17,0 @@\nspec:\n  type: LoadBalancer\n- loadBalancerIP: 10.250.4.10\n  ports:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.metallb.MigrateLoadBalancerIpToMetalLbAnnotation","displayName":"Migrate `Service` `spec.loadBalancerIP` to the MetalLB annotation","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

