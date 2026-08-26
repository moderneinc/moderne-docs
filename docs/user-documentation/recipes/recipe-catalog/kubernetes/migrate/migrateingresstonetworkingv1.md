---
title: "Migrate `Ingress` to `networking.k8s.io/v1`"
sidebar_label: "Migrate `Ingress` to `networking.k8s.io/v1`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `Ingress` to `networking.k8s.io/v1`"}
  description={"Move `Ingress` from `extensions/v1beta1` and `networking.k8s.io/v1beta1`, both removed in Kubernetes v1.22, to `networking.k8s.io/v1`, restructuring the body the new version requires. `spec.backend` becomes `spec.defaultBackend`, every `backend.serviceName` and `backend.servicePort` pair becomes `backend.service.name` and `backend.service.port`, and every path gains the explicit `pathType: ImplementationSpecific` that `v1beta1` used to default to.\n\n`servicePort` is an int-or-string, so how it is written decides where it lands: an unquoted `8080` is the port number and becomes `port.number`, while a quoted `\"8080\"` or a bare `http` is the port's name and becomes `port.name`.\n\nAn Ingress the restructuring cannot carry over in full is left on its old API version and marked with the reason, rather than being handed to the apiserver in a shape it rejects."}
  fqName={"org.openrewrite.kubernetes.migrate.MigrateIngressToNetworkingV1"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.migrate.MigrateIngressToNetworkingV1"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.migrate.MigrateIngressToNetworkingV1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/migrate/migrateingresstonetworkingv1.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `Ingress` to `networking.k8s.io/v1`</RecipeHeader.Title>

<RecipeHeader.Description>Move `Ingress` from `extensions/v1beta1` and `networking.k8s.io/v1beta1`, both removed in Kubernetes v1.22, to `networking.k8s.io/v1`, restructuring the body the new version requires. `spec.backend` becomes `spec.defaultBackend`, every `backend.serviceName` and `backend.servicePort` pair becomes `backend.service.name` and `backend.service.port`, and every path gains the explicit `pathType: ImplementationSpecific` that `v1beta1` used to default to.  `servicePort` is an int-or-string, so how it is written decides where it lands: an unquoted `8080` is the port number and becomes `port.number`, while a quoted `"8080"` or a bare `http` is the port's name and becomes `port.name`.  An Ingress the restructuring cannot carry over in full is left on its old API version and marked with the reason, rather than being handed to the apiserver in a shape it rejects.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"migrateIngressClassAnnotation","required":false,"description":"Also move the deprecated `kubernetes.io/ingress.class` annotation to `spec.ingressClassName`. Off by default, and off in `kubectl convert`, because the two are not the same thing: the annotation is a free-form string each controller interprets for itself, while `ingressClassName` names an `IngressClass` resource that has to exist in the cluster. Turning this on for a cluster whose controller reads only the annotation, or that has no matching `IngressClass`, leaves the Ingress unclaimed."},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/ingress-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"migrateIngressClassAnnotation","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: store\nspec:\n  backend:\n    serviceName: default-backend\n    servicePort: 80\n  rules:\n    - host: store.example.com\n      http:\n        paths:\n          - path: /cart\n            backend:\n              serviceName: cart\n              servicePort: 8080\n          - path: /images\n            backend:\n              serviceName: images\n              servicePort: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: cart\nspec:\n  ports:\n    - port: 8080\n","after":"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: store\nspec:\n  defaultBackend:\n    service:\n      name: default-backend\n      port:\n        number: 80\n  rules:\n    - host: store.example.com\n      http:\n        paths:\n          - path: /cart\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: cart\n                port:\n                  number: 8080\n          - path: /images\n            pathType: ImplementationSpecific\n            backend:\n              service:\n                name: images\n                port:\n                  name: http\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: cart\nspec:\n  ports:\n    - port: 8080\n","diff":"@@ -1,1 +1,1 @@\n-apiVersion: networking.k8s.io/v1beta1\n+apiVersion: networking.k8s.io/v1\nkind: Ingress\n@@ -6,3 +6,5 @@\n  name: store\nspec:\n- backend:\n-   serviceName: default-backend\n-   servicePort: 80\n+ defaultBackend:\n+   service:\n+     name: default-backend\n+     port:\n+       number: 80\n  rules:\n@@ -14,0 +16,1 @@\n        paths:\n          - path: /cart\n+           pathType: ImplementationSpecific\n            backend:\n@@ -15,2 +18,4 @@\n          - path: /cart\n            backend:\n-             serviceName: cart\n-             servicePort: 8080\n+             service:\n+               name: cart\n+               port:\n+                 number: 8080\n          - path: /images\n@@ -18,0 +23,1 @@\n              servicePort: 8080\n          - path: /images\n+           pathType: ImplementationSpecific\n            backend:\n@@ -19,2 +25,4 @@\n          - path: /images\n            backend:\n-             serviceName: images\n-             servicePort: http\n+             service:\n+               name: images\n+               port:\n+                 name: http\n---\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.migrate.MigrateIngressToNetworkingV1","displayName":"Migrate `Ingress` to `networking.k8s.io/v1`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

