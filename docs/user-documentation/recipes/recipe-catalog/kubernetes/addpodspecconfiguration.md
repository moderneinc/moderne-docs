---
title: "Add Kubernetes pod spec configuration"
sidebar_label: "Add Kubernetes pod spec configuration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add Kubernetes pod spec configuration"}
  description={"Add default required configuration to a workload's pod spec when it is missing. The pod spec is located by kind, so a `Deployment`, `StatefulSet`, `DaemonSet`, `ReplicaSet`, `ReplicationController`, `Job` or `CronJob` is configured as well as a bare `Pod`."}
  fqName={"org.openrewrite.kubernetes.AddPodSpecConfiguration"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.AddPodSpecConfiguration"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.AddPodSpecConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/addpodspecconfiguration.md"}
  moderneOnly
>

<RecipeHeader.Title>Add Kubernetes pod spec configuration</RecipeHeader.Title>

<RecipeHeader.Description>Add default required configuration to a workload's pod spec when it is missing. The pod spec is located by kind, so a `Deployment`, `StatefulSet`, `DaemonSet`, `ReplicaSet`, `ReplicationController`, `Job` or `CronJob` is configured as well as a bare `Pod`.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"configurationPath","required":false,"description":"A dot-separated path relative to the pod spec. Omit to configure the pod spec itself; use `containers` to configure every container in it.","example":"containers"},{"type":"String","name":"value","required":true,"description":"The configuration that is added when necessary, including the key.","example":"privileged: false"},{"type":"String","name":"resourceKind","required":false,"description":"Only configure workloads of this kind. This is a glob expression. When omitted, every workload kind that has a pod spec is configured.","example":"Deployment"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pod-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"configurationPath","value":"null"},{"parameter":"value","value":"hostPID: false"},{"parameter":"resourceKind","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\n","after":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: nginx\n        image: nginx\n      hostPID: false\n","diff":"@@ -11,0 +11,1 @@\n      - name: nginx\n        image: nginx\n+     hostPID: false\n\n","newFile":false}]},{"parameters":[{"parameter":"configurationPath","value":"null"},{"parameter":"value","value":"hostPID: false"},{"parameter":"resourceKind","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: cluster.x-k8s.io/v1beta1\nkind: MachineDeployment\nmetadata:\n  name: workers\nspec:\n  clusterName: capi-quickstart\n  template:\n    spec:\n      clusterName: capi-quickstart\n      version: v1.31.0\n      bootstrap:\n        configRef:\n          kind: KubeadmConfigTemplate\n          name: workers\n      infrastructureRef:\n        kind: DockerMachineTemplate\n        name: workers\n---\napiVersion: controlplane.cluster.x-k8s.io/v1beta1\nkind: KubeadmControlPlane\nmetadata:\n  name: control-plane\nspec:\n  version: v1.31.0\n  machineTemplate:\n    infrastructureRef:\n      kind: DockerMachineTemplate\n      name: control-plane\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx\n","after":"apiVersion: cluster.x-k8s.io/v1beta1\nkind: MachineDeployment\nmetadata:\n  name: workers\nspec:\n  clusterName: capi-quickstart\n  template:\n    spec:\n      clusterName: capi-quickstart\n      version: v1.31.0\n      bootstrap:\n        configRef:\n          kind: KubeadmConfigTemplate\n          name: workers\n      infrastructureRef:\n        kind: DockerMachineTemplate\n        name: workers\n---\napiVersion: controlplane.cluster.x-k8s.io/v1beta1\nkind: KubeadmControlPlane\nmetadata:\n  name: control-plane\nspec:\n  version: v1.31.0\n  machineTemplate:\n    infrastructureRef:\n      kind: DockerMachineTemplate\n      name: control-plane\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx\n      hostPID: false\n","diff":"@@ -40,0 +40,1 @@\n      - name: app\n        image: nginx\n+     hostPID: false\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.AddPodSpecConfiguration","displayName":"Add Kubernetes pod spec configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"configurationPath=containers\" --recipe-option \"value='privileged: false'\" --recipe-option \"resourceKind=Deployment\" --recipe-option \"fileMatcher='**/pod-*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

