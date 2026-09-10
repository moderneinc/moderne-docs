---
title: "Find container resource coverage"
sidebar_label: "Find container resource coverage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find container resource coverage"}
  description={"Profile the compute resources and probes every container of every workload declares. Quantities are reported both as written and normalized to millicores and bytes, and each row carries the quality of service class the kubelet would give the pod the container belongs to."}
  fqName={"org.openrewrite.kubernetes.search.FindContainerResourceCoverage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindContainerResourceCoverage"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindContainerResourceCoverage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findcontainerresourcecoverage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find container resource coverage</RecipeHeader.Title>

<RecipeHeader.Description>Profile the compute resources and probes every container of every workload declares. Quantities are reported both as written and normalized to millicores and bytes, and each row carries the quality of service class the kubelet would give the pod the container belongs to.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"resourceKind","required":false,"description":"Only profile containers belonging to this kind of workload. This is a glob expression. When omitted, every workload kind that has a pod spec is profiled.","example":"Deployment"},{"type":"Set","name":"containerTypes","required":false,"description":"Which container lists to profile. Defaults to all of `containers`, `initContainers` and `ephemeralContainers`.","example":"containers"},{"type":"Boolean","name":"markEveryContainer","required":false,"description":"Mark every container rather than only those missing a request or a limit. The data table holds every container either way. Default `false`."},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression.","example":"**/*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"resourceKind","value":"null"},{"parameter":"containerTypes","value":"null"},{"parameter":"markEveryContainer","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx:1.27\n        resources:\n          requests:\n            cpu: 500m\n            memory: 512Mi\n          limits:\n            cpu: 1500m\n            memory: 1Gi\n        livenessProbe:\n          httpGet:\n            path: /healthz\n            port: 8080\n      - name: sidecar\n        image: envoy:latest\n","after":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx:1.27\n        resources:\n          requests:\n            cpu: 500m\n            memory: 512Mi\n          limits:\n            cpu: 1500m\n            memory: 1Gi\n        livenessProbe:\n          httpGet:\n            path: /healthz\n            port: 8080\n      - ~~(missing: resources.requests.cpu, resources.requests.memory, resources.limits.cpu, resources.limits.memory)~~>name: sidecar\n        image: envoy:latest\n","diff":"--- k8s/app.yaml\n+++ k8s/app.yaml\n@@ -22,1 +22,1 @@\n            path: /healthz\n            port: 8080\n-     - name: sidecar\n+     - ~~(missing: resources.requests.cpu, resources.requests.memory, resources.limits.cpu, resources.limits.memory)~~>name: sidecar\n        image: envoy:latest\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindContainerResourceCoverage","displayName":"Find container resource coverage","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.table.ContainerProfiles","displayName":"Container resource profiles","description":"Every container of every workload, with the compute resources and probes it declares. The raw columns answer what to change; the normalized columns answer what a cluster is being asked for.","columns":[{"name":"Source path","description":"The path of the YAML file relative to the root of the repository."},{"name":"Document index","description":"The zero-based position of this document within its file. One file declares many resources when its documents are separated by `---`."},{"name":"API version","description":"The `apiVersion` of the workload, exactly as it is written."},{"name":"Kind","description":"The `kind` of the workload."},{"name":"Namespace","description":"The `metadata.namespace` of the workload, or `null` when the workload takes the namespace it is applied into."},{"name":"Name","description":"The `metadata.name` of the workload."},{"name":"Templated","description":"Whether the document holds a Go template expression, and so declares something other than what it says until it has been rendered."},{"name":"Container type","description":"Which of `containers`, `initContainers` and `ephemeralContainers` this container was declared in."},{"name":"Container name","description":"The `name` of the container."},{"name":"Image","description":"The `image` of the container, exactly as it is written."},{"name":"CPU request","description":"`resources.requests.cpu` exactly as it is written, or `null` when it is not declared."},{"name":"CPU limit","description":"`resources.limits.cpu` exactly as it is written, or `null` when it is not declared."},{"name":"Memory request","description":"`resources.requests.memory` exactly as it is written, or `null` when it is not declared."},{"name":"Memory limit","description":"`resources.limits.memory` exactly as it is written, or `null` when it is not declared."},{"name":"CPU request in millicores","description":"`resources.requests.cpu` in millicores, or `null` when it is not declared or is a template expression that only has a value once rendered."},{"name":"CPU limit in millicores","description":"`resources.limits.cpu` in millicores, or `null` when it is not declared or is a template expression that only has a value once rendered."},{"name":"Memory request in bytes","description":"`resources.requests.memory` in bytes, or `null` when it is not declared or is a template expression that only has a value once rendered."},{"name":"Memory limit in bytes","description":"`resources.limits.memory` in bytes, or `null` when it is not declared or is a template expression that only has a value once rendered."},{"name":"Liveness probe","description":"Whether the container declares a `livenessProbe`. A key with nothing under it configures nothing and counts as absent."},{"name":"Readiness probe","description":"Whether the container declares a `readinessProbe`. A key with nothing under it configures nothing and counts as absent."},{"name":"Startup probe","description":"Whether the container declares a `startupProbe`. A key with nothing under it configures nothing and counts as absent."},{"name":"Declared QoS class","description":"The quality of service class the kubelet would assign the pod this container belongs to. A property of the whole pod repeated on each of its containers, because any one container that omits a limit spoils it for the rest. `Unknown` when a quantity is a template expression."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

