---
title: "Migrate Das Schiff traffic mirror configuration to intent resources"
sidebar_label: "Migrate Das Schiff traffic mirror configuration to intent resources"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate Das Schiff traffic mirror configuration to intent resources"}
  description={"Rewrite Das Schiff `MirrorTarget` and `MirrorSelector` resources into the `Collector` and `TrafficMirror` that replace them. A `Collector` repeats its loopback's subnet inline, so a target whose mirror VRF is not declared in the same manifest is reported rather than moved."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateMirrorConfigToIntent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateMirrorConfigToIntent"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateMirrorConfigToIntent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/migratemirrorconfigtointent.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate Das Schiff traffic mirror configuration to intent resources</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite Das Schiff `MirrorTarget` and `MirrorSelector` resources into the `Collector` and `TrafficMirror` that replace them. A `Collector` repeats its loopback's subnet inline, so a target whose mirror VRF is not declared in the same manifest is reported rather than moved.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/mirror-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: mirror-test-vrf\nspec:\n  vrf: mirror\n  vni: 2002099\n  routeTarget: \"65188:2099\"\n  loopbacks:\n  - name: lo.mir\n    subnet: 10.250.91.0/29\n  - name: lo.mir6\n    subnet: \"fd94:685b:30cf:591::/125\"\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: MirrorTarget\nmetadata:\n  name: collector-prod\nspec:\n  type: l3gre\n  destinationIP: 10.250.90.100\n  key: 1001\n  destinationVrf: mirror\n  sourceLoopback: lo.mir\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: MirrorSelector\nmetadata:\n  name: mirror-vlan590-ingress\nspec:\n  trafficMatch:\n    protocol: icmp\n  mirrorTarget:\n    apiGroup: network.t-caas.telekom.com\n    kind: MirrorTarget\n    name: collector-prod\n  mirrorSource:\n    apiGroup: network.t-caas.telekom.com\n    kind: Layer2NetworkConfiguration\n    name: vlan590\n  direction: ingress\n","after":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: mirror-test-vrf\nspec:\n  vrf: mirror\n  vni: 2002099\n  routeTarget: \"65188:2099\"\n  loopbacks:\n  - name: lo.mir\n    subnet: 10.250.91.0/29\n  - name: lo.mir6\n    subnet: \"fd94:685b:30cf:591::/125\"\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Collector\nmetadata:\n  name: collector-prod\nspec:\n  address: \"10.250.90.100\"\n  protocol: l3gre\n  key: 1001\n  mirrorVRF:\n    name: \"mirror-test-vrf\"\n    loopback:\n      name: \"lo.mir\"\n      subnet: \"10.250.91.0/29\"\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: TrafficMirror\nmetadata:\n  name: mirror-vlan590-ingress\nspec:\n  source:\n    kind: Layer2Attachment\n    name: \"vlan590\"\n  collector: \"collector-prod\"\n  direction: ingress\n  trafficMatch:\n    protocol: ICMP\n","diff":"@@ -15,2 +15,2 @@\n    subnet: \"fd94:685b:30cf:591::/125\"\n---\n-apiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: MirrorTarget\n+apiVersion: network-connector.sylvaproject.org/v1alpha1\n+kind: Collector\nmetadata:\n@@ -20,2 +20,2 @@\n  name: collector-prod\nspec:\n- type: l3gre\n- destinationIP: 10.250.90.100\n+ address: \"10.250.90.100\"\n+ protocol: l3gre\n  key: 1001\n@@ -23,2 +23,5 @@\n  destinationIP: 10.250.90.100\n  key: 1001\n- destinationVrf: mirror\n- sourceLoopback: lo.mir\n+ mirrorVRF:\n+   name: \"mirror-test-vrf\"\n+   loopback:\n+     name: \"lo.mir\"\n+     subnet: \"10.250.91.0/29\"\n---\n@@ -26,2 +29,2 @@\n  sourceLoopback: lo.mir\n---\n-apiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: MirrorSelector\n+apiVersion: network-connector.sylvaproject.org/v1alpha1\n+kind: TrafficMirror\nmetadata:\n@@ -31,10 +34,4 @@\n  name: mirror-vlan590-ingress\nspec:\n- trafficMatch:\n-   protocol: icmp\n- mirrorTarget:\n-   apiGroup: network.t-caas.telekom.com\n-   kind: MirrorTarget\n-   name: collector-prod\n- mirrorSource:\n-   apiGroup: network.t-caas.telekom.com\n-   kind: Layer2NetworkConfiguration\n-   name: vlan590\n+ source:\n+   kind: Layer2Attachment\n+   name: \"vlan590\"\n+ collector: \"collector-prod\"\n  direction: ingress\n@@ -42,0 +39,2 @@\n    name: vlan590\n  direction: ingress\n+ trafficMatch:\n+   protocol: ICMP\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateMirrorConfigToIntent","displayName":"Migrate Das Schiff traffic mirror configuration to intent resources","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.MirrorConfigs","displayName":"Traffic mirror configurations","description":"Deutsche Telekom `MirrorTarget` and `MirrorSelector` resources that the `network-connector.sylvaproject.org` `Collector` and `TrafficMirror` replace, and whether each one can be moved mechanically.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Kind","description":"The legacy `kind`."},{"name":"Name","description":"The `metadata.name` of the legacy resource."},{"name":"Reference","description":"The VRF a `MirrorTarget` tunnels through, or the `MirrorTarget` a `MirrorSelector` sends to. Empty when it names none."},{"name":"Migration","description":"`automatic` when `io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateMirrorConfigToIntent` rewrites this resource, `manual` otherwise."},{"name":"Intent kinds","description":"The intent resource it becomes, empty when it has to be moved by hand."},{"name":"Detail","description":"Why the resource cannot be moved mechanically, empty when it can."},{"name":"Manual follow-up","description":"What still has to be done by hand once the resource has moved, which is mostly the resources it names that the intent group has not generated yet. Empty when the move leaves nothing behind."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

