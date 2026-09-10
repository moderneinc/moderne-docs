---
title: "Find Das Schiff network operator `ConfigMap`s"
sidebar_label: "Find Das Schiff network operator `ConfigMap`s"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Das Schiff network operator `ConfigMap`s"}
  description={"Inventory the `ConfigMap`s that configure Das Schiff's network operator, reporting for each `data` key how the value is written and how large it is. Each key is a whole embedded document the operator hands to its node agents as a file, not a setting. Nothing here reads those documents, so the report holds for any version of them."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindNetworkOperatorConfigMap"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindNetworkOperatorConfigMap"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.FindNetworkOperatorConfigMap"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/findnetworkoperatorconfigmap.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Das Schiff network operator `ConfigMap`s</RecipeHeader.Title>

<RecipeHeader.Description>Inventory the `ConfigMap`s that configure Das Schiff's network operator, reporting for each `data` key how the value is written and how large it is. Each key is a whole embedded document the operator hands to its node agents as a file, not a setting. Nothing here reads those documents, so the report holds for any version of them.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"configMapName","required":false,"description":"A glob matched against `metadata.name`. Replaces the default `network-operator-*`, the `namePrefix` that `config/default` gives every resource the operator ships, so a deployment that renames them is matched by this instead rather than as well. A `ConfigMap` still qualifies on either of the other two signals, so one carrying the operator label or a `base-config.yaml` key is reported whatever this is set to.","example":"schiff-network"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"configMapName","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: v1\ndata:\n  base-config.yaml: |\n    vtepLoopbackIP: \"\"\n    exportCIDRs: []\n    localASN: \"\"\n    trunkInterfaceName: hbn\n    underlayNeighbors: []\n    clusterNeighbors: []\n    clusterVRF:\n      name: cluster\n      vni: \"\"\n      evpnRouteTarget: \"\"\n  10-base.yaml: |\n    network:\n      version: 2\n      ethernets:\n        hbn:\n          addresses:\n          - fd00:7:caa5::/127\n          mtu: 1500\nkind: ConfigMap\nmetadata:\n  labels:\n    app.kubernetes.io/name: network-operator\n  name: network-operator-base-config\n  namespace: kube-system\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: calico-config\n  namespace: kube-system\ndata:\n  calico_backend: bird\n  veth_mtu: \"1500\"\n","after":"apiVersion: v1\ndata:\n  base-config.yaml: |\n    vtepLoopbackIP: \"\"\n    exportCIDRs: []\n    localASN: \"\"\n    trunkInterfaceName: hbn\n    underlayNeighbors: []\n    clusterNeighbors: []\n    clusterVRF:\n      name: cluster\n      vni: \"\"\n      evpnRouteTarget: \"\"\n  10-base.yaml: |\n    network:\n      version: 2\n      ethernets:\n        hbn:\n          addresses:\n          - fd00:7:caa5::/127\n          mtu: 1500\n~~(base-config.yaml (block), 10-base.yaml (block); matched by name, label, data key)~~>kind: ConfigMap\nmetadata:\n  labels:\n    app.kubernetes.io/name: network-operator\n  name: network-operator-base-config\n  namespace: kube-system\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: calico-config\n  namespace: kube-system\ndata:\n  calico_backend: bird\n  veth_mtu: \"1500\"\n","diff":"@@ -22,1 +22,1 @@\n          - fd00:7:caa5::/127\n          mtu: 1500\n-kind: ConfigMap\n+~~(base-config.yaml (block), 10-base.yaml (block); matched by name, label, data key)~~>kind: ConfigMap\nmetadata:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.FindNetworkOperatorConfigMap","displayName":"Find Das Schiff network operator `ConfigMap`s","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.NetworkOperatorConfigMaps","displayName":"Das Schiff network operator ConfigMaps","description":"One row per `data` key of every `ConfigMap` that configures Deutsche Telekom's `das-schiff-network-operator`, describing where it lives and what shape it is in. A `ConfigMap` that declares no keys still gets a row, so that the inventory is of `ConfigMap`s and not only of keys.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Namespace","description":"The `metadata.namespace`, empty when the manifest leaves it to the applying context, as a Kustomize overlay or a Helm release does."},{"name":"Name","description":"The `metadata.name` of the `ConfigMap`. A Kustomize `namePrefix` is not applied here, so the name in the cluster may carry a prefix this one does not."},{"name":"Key","description":"One key of `data`, or of `binaryData`. Empty when the `ConfigMap` declares neither."},{"name":"Style","description":"How the value is written: `block` for a literal block scalar (`|`), `folded` (`>`), `plain`, `single quoted`, `double quoted`, or `binary` for a `binaryData` key. A `mapping` or `sequence` is malformed, because every `ConfigMap` value is a string."},{"name":"Size","description":"Characters in the value, block scalars dedented, so that the number is the size of the embedded document rather than of its indentation. For `binaryData`, the length of the base64 text."},{"name":"Matched by","description":"Which signals identified this as a network operator `ConfigMap`: `name`, `label` for `app.kubernetes.io/name: network-operator`, `data key` for a `base-config.yaml` key. Listed so that a row can be judged rather than trusted."},{"name":"Templated","description":"`yes` when the document contains a Helm expression, in which case the keys and sizes here are those of the template and not of what the cluster receives."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

