---
title: "Migrate `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to Sylva"
sidebar_label: "Migrate `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to Sylva"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to Sylva"}
  description={"Rewrite Das Schiff `VRFRouteConfiguration` and `Layer2NetworkConfiguration` resources into the `network-connector.sylvaproject.org` intent resources that replace them. Each becomes two: a `VRF` and a `Destination`, or a `Network` and a `Layer2Attachment`. Both kinds move here rather than in a recipe each, because a VRF moves whole or not at all. A resource whose meaning would change is reported rather than approximated."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateLowLevelNetworkConfigToIntent"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateLowLevelNetworkConfigToIntent"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateLowLevelNetworkConfigToIntent"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/migratelowlevelnetworkconfigtointent.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to Sylva</RecipeHeader.Title>

<RecipeHeader.Description>Rewrite Das Schiff `VRFRouteConfiguration` and `Layer2NetworkConfiguration` resources into the `network-connector.sylvaproject.org` intent resources that replace them. Each becomes two: a `VRF` and a `Destination`, or a `Network` and a `Layer2Attachment`. Both kinds move here rather than in a recipe each, because a VRF moves whole or not at all. A resource whose meaning would change is reported rather than approximated.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/network-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: c2m-test-vrf\nspec:\n  export:\n  - cidr: 10.250.30.0/24\n    le: 32\n    action: permit\n  import: []\n  sbrPrefixes:\n  - 10.250.5.0/24\n  aggregate:\n  - 10.250.6.0/30\n  seq: 10\n  vrf: c2m\n  vni: 2002027\n  routeTarget: 65188:2027\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: Layer2NetworkConfiguration\nmetadata:\n  name: vlan3\nspec:\n  anycastGateways:\n  - 10.250.30.1/24\n  - fd94:685b:30cf:503::1/64\n  anycastMac: 1a:ee:cf:2f:a7:a8\n  id: 503\n  mtu: 1500\n  vni: 4000004\n  vrf: c2m\n","after":"apiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: VRF\nmetadata:\n  name: c2m-test-vrf\nspec:\n  vrf: \"c2m\"\n  vni: 2002027\n  routeTarget: \"65188:2027\"\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Destination\nmetadata:\n  name: c2m-test-vrf\n  labels:\n    network-connector.sylvaproject.org/vrf: \"c2m\"\nspec:\n  vrfRef: \"c2m-test-vrf\"\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Network\nmetadata:\n  name: vlan3\nspec:\n  vlan: 503\n  vni: 4000004\n  ipv4:\n    cidr: 10.250.30.0/24\n  ipv6:\n    cidr: fd94:685b:30cf:503::/64\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Layer2Attachment\nmetadata:\n  name: vlan3\nspec:\n  networkRef: \"vlan3\"\n  mtu: 1500\n  destinations:\n    matchLabels:\n      network-connector.sylvaproject.org/vrf: \"c2m\"\n","diff":"@@ -1,2 +1,2 @@\n-apiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: VRFRouteConfiguration\n+apiVersion: network-connector.sylvaproject.org/v1alpha1\n+kind: VRF\nmetadata:\n@@ -6,11 +6,1 @@\n  name: c2m-test-vrf\nspec:\n- export:\n- - cidr: 10.250.30.0/24\n-   le: 32\n-   action: permit\n- import: []\n- sbrPrefixes:\n- - 10.250.5.0/24\n- aggregate:\n- - 10.250.6.0/30\n- seq: 10\n- vrf: c2m\n+ vrf: \"c2m\"\n  vni: 2002027\n@@ -18,1 +8,1 @@\n  vrf: c2m\n  vni: 2002027\n- routeTarget: 65188:2027\n+ routeTarget: \"65188:2027\"\n---\n@@ -20,2 +10,2 @@\n  routeTarget: 65188:2027\n---\n-apiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: Layer2NetworkConfiguration\n+apiVersion: network-connector.sylvaproject.org/v1alpha1\n+kind: Destination\nmetadata:\n@@ -23,0 +13,9 @@\nkind: Layer2NetworkConfiguration\nmetadata:\n+ name: c2m-test-vrf\n+ labels:\n+   network-connector.sylvaproject.org/vrf: \"c2m\"\n+spec:\n+ vrfRef: \"c2m-test-vrf\"\n+---\n+apiVersion: network-connector.sylvaproject.org/v1alpha1\n+kind: Network\n+metadata:\n  name: vlan3\n@@ -25,6 +24,1 @@\n  name: vlan3\nspec:\n- anycastGateways:\n- - 10.250.30.1/24\n- - fd94:685b:30cf:503::1/64\n- anycastMac: 1a:ee:cf:2f:a7:a8\n- id: 503\n- mtu: 1500\n+ vlan: 503\n  vni: 4000004\n@@ -32,1 +26,15 @@\n  mtu: 1500\n  vni: 4000004\n- vrf: c2m\n+ ipv4:\n+   cidr: 10.250.30.0/24\n+ ipv6:\n+   cidr: fd94:685b:30cf:503::/64\n+---\n+apiVersion: network-connector.sylvaproject.org/v1alpha1\n+kind: Layer2Attachment\n+metadata:\n+ name: vlan3\n+spec:\n+ networkRef: \"vlan3\"\n+ mtu: 1500\n+ destinations:\n+   matchLabels:\n+     network-connector.sylvaproject.org/vrf: \"c2m\"\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateLowLevelNetworkConfigToIntent","displayName":"Migrate `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to Sylva","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.LowLevelNetworkConfigs","displayName":"Low level network configurations","description":"Deutsche Telekom `network.t-caas.telekom.com` resources that the `network-connector.sylvaproject.org` intent group replaces, and whether each one can be moved mechanically.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Kind","description":"The legacy `kind`."},{"name":"Name","description":"The `metadata.name` of the legacy resource."},{"name":"VRF","description":"The VRF the resource declares or attaches to, empty when it names none."},{"name":"Migration","description":"`automatic` when `io.moderne.kubernetes.sylva.MigrateLowLevelNetworkConfigToIntent` rewrites this resource, `manual` otherwise."},{"name":"Intent kinds","description":"The intent resources it becomes, empty when it has to be moved by hand."},{"name":"Detail","description":"Why the resource cannot be moved mechanically, empty when it can."},{"name":"Manual follow-up","description":"Legacy fields with no intent field to hold them, which the operator derives or assigns instead. Empty when the move loses nothing."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

