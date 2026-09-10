---
title: "Migrate MetalLB annotations to the `metallb.io` domain"
sidebar_label: "Migrate MetalLB annotations to the `metallb.io` domain"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate MetalLB annotations to the `metallb.io` domain"}
  description={"Rename the [MetalLB](https://metallb.io) `Service` annotations that moved from the `metallb.universe.tf` domain to `metallb.io` in MetalLB 0.14.9. The old domain still works, but the controller now raises a `deprecatedAnnotation` event against every service using it and the release notes reserve the right to drop the compatibility shim. Only the four annotations that genuinely moved are renamed — `address-pool`, `loadBalancerIPs`, `allow-shared-ip` and the controller-written `ip-allocated-from-pool` — so an unrelated `metallb.universe.tf` key keeps its domain.\n\nMetalLB prefers the `metallb.io` spelling wherever both are present, which makes the deprecated twin dead weight. Such a twin is dropped when it carries the same value and reported otherwise, rather than renamed into a duplicate key.\n\nThis is MetalLB's own annotation domain, not a Kubernetes API migration; a cluster load balanced by anything else is unaffected."}
  fqName={"org.openrewrite.kubernetes.metallb.MigrateMetalLbAnnotationPrefix"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.metallb.MigrateMetalLbAnnotationPrefix"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.metallb.MigrateMetalLbAnnotationPrefix"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/metallb/migratemetallbannotationprefix.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate MetalLB annotations to the `metallb.io` domain</RecipeHeader.Title>

<RecipeHeader.Description>Rename the [MetalLB](https://metallb.io) `Service` annotations that moved from the `metallb.universe.tf` domain to `metallb.io` in MetalLB 0.14.9. The old domain still works, but the controller now raises a `deprecatedAnnotation` event against every service using it and the release notes reserve the right to drop the compatibility shim. Only the four annotations that genuinely moved are renamed — `address-pool`, `loadBalancerIPs`, `allow-shared-ip` and the controller-written `ip-allocated-from-pool` — so an unrelated `metallb.universe.tf` key keeps its domain.  MetalLB prefers the `metallb.io` spelling wherever both are present, which makes the deprecated twin dead weight. Such a twin is dropped when it carries the same value and reported otherwise, rather than renamed into a duplicate key.  This is MetalLB's own annotation domain, not a Kubernetes API migration; a cluster load balanced by anything else is unaffected.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/service-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"# Simple test deployment + LoadBalancer Service\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: podinfo\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: podinfo\n  template:\n    metadata:\n      labels:\n        app: podinfo\n    spec:\n      containers:\n        - name: podinfo\n          image: stefanprodan/podinfo:6.7.1\n          ports:\n            - containerPort: 9898\n              name: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.universe.tf/address-pool: m2m-pool\nspec:\n  type: LoadBalancer\n  ipFamilyPolicy: PreferDualStack\n  ipFamilies:\n    - IPv4\n    - IPv6\n  ports:\n    - port: 80\n      targetPort: 9898\n      protocol: TCP\n  selector:\n    app: podinfo\n","after":"# Simple test deployment + LoadBalancer Service\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: podinfo\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: podinfo\n  template:\n    metadata:\n      labels:\n        app: podinfo\n    spec:\n      containers:\n        - name: podinfo\n          image: stefanprodan/podinfo:6.7.1\n          ports:\n            - containerPort: 9898\n              name: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: podinfo-lb\n  annotations:\n    metallb.io/address-pool: m2m-pool\nspec:\n  type: LoadBalancer\n  ipFamilyPolicy: PreferDualStack\n  ipFamilies:\n    - IPv4\n    - IPv6\n  ports:\n    - port: 80\n      targetPort: 9898\n      protocol: TCP\n  selector:\n    app: podinfo\n","diff":"@@ -28,1 +28,1 @@\n  name: podinfo-lb\n  annotations:\n-   metallb.universe.tf/address-pool: m2m-pool\n+   metallb.io/address-pool: m2m-pool\nspec:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.metallb.MigrateMetalLbAnnotationPrefix","displayName":"Migrate MetalLB annotations to the `metallb.io` domain","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

