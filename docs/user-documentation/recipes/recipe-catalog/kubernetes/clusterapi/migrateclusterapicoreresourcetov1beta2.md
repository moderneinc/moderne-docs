---
title: "Migrate the Cluster API core group to `v1beta2`"
sidebar_label: "Migrate the Cluster API core group to `v1beta2`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate the Cluster API core group to `v1beta2`"}
  description={"Rewrite `cluster.x-k8s.io/v1beta1` resources into their `v1beta2` form, fields and `apiVersion` together. `v1beta1` has been deprecated since Cluster API v1.11 and stops being served in v1.16. A resource moves as a whole or not at all: where `v1beta2` dropped a field outright, or a duration cannot be read exactly, it stays on `v1beta1` and the reason is reported."}
  fqName={"org.openrewrite.kubernetes.clusterapi.MigrateClusterApiCoreResourceToV1beta2"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.clusterapi.MigrateClusterApiCoreResourceToV1beta2"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.clusterapi.MigrateClusterApiCoreResourceToV1beta2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/clusterapi/migrateclusterapicoreresourcetov1beta2.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate the Cluster API core group to `v1beta2`</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite `cluster.x-k8s.io/v1beta1` resources into their `v1beta2` form, fields and `apiVersion` together. `v1beta1` has been deprecated since Cluster API v1.11 and stops being served in v1.16. A resource moves as a whole or not at all: where `v1beta2` dropped a field outright, or a duration cannot be read exactly, it stays on `v1beta1` and the reason is reported.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"kind","required":false,"description":"Only migrate this kind. Omit to migrate every kind the core group owns, though `org.openrewrite.kubernetes.clusterapi.MigrateClusterApiCoreToV1beta2` names them one by one and is the better entry point.","example":"MachineDeployment"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/cluster-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"kind","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: cluster.x-k8s.io/v1beta1\nkind: Cluster\nmetadata:\n  name: demo\nspec:\n  controlPlaneRef:\n    apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n    kind: K0sControlPlane\n    name: demo-cp\n  infrastructureRef:\n    apiVersion: infrastructure.cluster.x-k8s.io/v1beta2\n    kind: AWSCluster\n    name: demo\n---\napiVersion: cluster.x-k8s.io/v1beta1\nkind: MachineDeployment\nmetadata:\n  name: demo-md\nspec:\n  clusterName: demo\n  replicas: 3\n  template:\n    spec:\n      clusterName: demo\n      version: v1.34.0\n      bootstrap:\n        configRef:\n          apiVersion: bootstrap.cluster.x-k8s.io/v1beta1\n          kind: K0sWorkerConfigTemplate\n          name: demo-worker\n      infrastructureRef:\n        apiVersion: infrastructure.cluster.x-k8s.io/v1beta2\n        kind: AWSMachineTemplate\n        name: demo-worker\n      nodeDrainTimeout: 10m\n","after":"apiVersion: cluster.x-k8s.io/v1beta2\nkind: Cluster\nmetadata:\n  name: demo\nspec:\n  controlPlaneRef:\n    apiGroup: controlplane.cluster.x-k8s.io\n    kind: K0sControlPlane\n    name: demo-cp\n  infrastructureRef:\n    apiGroup: infrastructure.cluster.x-k8s.io\n    kind: AWSCluster\n    name: demo\n---\napiVersion: cluster.x-k8s.io/v1beta2\nkind: MachineDeployment\nmetadata:\n  name: demo-md\nspec:\n  clusterName: demo\n  replicas: 3\n  template:\n    spec:\n      clusterName: demo\n      version: v1.34.0\n      bootstrap:\n        configRef:\n          apiGroup: bootstrap.cluster.x-k8s.io\n          kind: K0sWorkerConfigTemplate\n          name: demo-worker\n      infrastructureRef:\n        apiGroup: infrastructure.cluster.x-k8s.io\n        kind: AWSMachineTemplate\n        name: demo-worker\n      deletion:\n        nodeDrainTimeoutSeconds: 600\n","diff":"@@ -1,1 +1,1 @@\n-apiVersion: cluster.x-k8s.io/v1beta1\n+apiVersion: cluster.x-k8s.io/v1beta2\nkind: Cluster\n@@ -7,1 +7,1 @@\nspec:\n  controlPlaneRef:\n-   apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n+   apiGroup: controlplane.cluster.x-k8s.io\n    kind: K0sControlPlane\n@@ -11,1 +11,1 @@\n    name: demo-cp\n  infrastructureRef:\n-   apiVersion: infrastructure.cluster.x-k8s.io/v1beta2\n+   apiGroup: infrastructure.cluster.x-k8s.io\n    kind: AWSCluster\n@@ -15,1 +15,1 @@\n    name: demo\n---\n-apiVersion: cluster.x-k8s.io/v1beta1\n+apiVersion: cluster.x-k8s.io/v1beta2\nkind: MachineDeployment\n@@ -28,1 +28,1 @@\n      bootstrap:\n        configRef:\n-         apiVersion: bootstrap.cluster.x-k8s.io/v1beta1\n+         apiGroup: bootstrap.cluster.x-k8s.io\n          kind: K0sWorkerConfigTemplate\n@@ -32,1 +32,1 @@\n          name: demo-worker\n      infrastructureRef:\n-       apiVersion: infrastructure.cluster.x-k8s.io/v1beta2\n+       apiGroup: infrastructure.cluster.x-k8s.io\n        kind: AWSMachineTemplate\n@@ -35,1 +35,2 @@\n        kind: AWSMachineTemplate\n        name: demo-worker\n-     nodeDrainTimeout: 10m\n+     deletion:\n+       nodeDrainTimeoutSeconds: 600\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.clusterapi.MigrateClusterApiCoreResourceToV1beta2","displayName":"Migrate the Cluster API core group to `v1beta2`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.clusterapi.table.ClusterApiV1beta2Migrations","displayName":"Cluster API v1beta2 migrations","description":"Every `cluster.x-k8s.io/v1beta1` resource considered, what moving it to `v1beta2` rewrote, and why the ones left behind could not move.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Kind","description":"The `kind` of the resource."},{"name":"Name","description":"The `metadata.name` of the resource."},{"name":"Migration","description":"`automatic` when the resource was rewritten, `manual` when it was left alone."},{"name":"Changes","description":"The fields that moved or were renamed, empty when the resource only needed its `apiVersion` changed."},{"name":"Follow-up","description":"Values `v1beta2` has no field for, durations that lost sub-second precision on the way to whole seconds, and template references still naming a version this recipe cannot re-point. Empty when the rewrite carried everything over."},{"name":"Blocker","description":"Why the resource was left on `v1beta1`, empty when it was migrated."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

