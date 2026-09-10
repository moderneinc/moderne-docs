---
title: "Find `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to migrate"
sidebar_label: "Find `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to migrate"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to migrate"}
  description={"Find the Das Schiff `VRFRouteConfiguration` and `Layer2NetworkConfiguration` resources the Sylva intent group replaces, and report for each whether it moves automatically or why it has to be moved by hand. Resources that do move also report the fields the intent group derives rather than stores, which are the ones worth re-reading in review."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindLowLevelNetworkConfig"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindLowLevelNetworkConfig"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.FindLowLevelNetworkConfig"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/findlowlevelnetworkconfig.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to migrate</RecipeHeader.Title>

<RecipeHeader.Description>Find the Das Schiff `VRFRouteConfiguration` and `Layer2NetworkConfiguration` resources the Sylva intent group replaces, and report for each whether it moves automatically or why it has to be moved by hand. Resources that do move also report the fields the intent group derives rather than stores, which are the ones worth re-reading in review.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression.","example":"**/network-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: m2m-gw-vrf\nspec:\n  import: []\n  seq: 10\n  vrf: m2m\n  vni: 2002026\n  routeTarget: 65188:2026\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: Layer2NetworkConfiguration\nmetadata:\n  name: gw-vlan-m2m\nspec:\n  anycastGateways:\n  - 10.102.0.254/24\n  - fda5:25c1:193c::fe/64\n  anycastMac: 1a:ee:cf:2f:b7:a8\n  id: 601\n  mtu: 1500\n  vni: 5000002\n  vrf: m2m\n","after":"apiVersion: network.t-caas.telekom.com/v1alpha1\n~~(`Layer2NetworkConfiguration` gw-vlan-m2m attaches to VRF `m2m` and cannot move; moving the VRF without it would drop the `spec.export` entries advertising that network, which the intent group derives from the attached `Network` instead)~~>kind: VRFRouteConfiguration\nmetadata:\n  name: m2m-gw-vrf\nspec:\n  import: []\n  seq: 10\n  vrf: m2m\n  vni: 2002026\n  routeTarget: 65188:2026\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n~~(anycast gateway `10.102.0.254/24` is not the gateway the intent group derives from the subnet holding it, so moving it would change the gateway address)~~>kind: Layer2NetworkConfiguration\nmetadata:\n  name: gw-vlan-m2m\nspec:\n  anycastGateways:\n  - 10.102.0.254/24\n  - fda5:25c1:193c::fe/64\n  anycastMac: 1a:ee:cf:2f:b7:a8\n  id: 601\n  mtu: 1500\n  vni: 5000002\n  vrf: m2m\n","diff":"@@ -2,1 +2,1 @@\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: VRFRouteConfiguration\n+~~(`Layer2NetworkConfiguration` gw-vlan-m2m attaches to VRF `m2m` and cannot move; moving the VRF without it would drop the `spec.export` entries advertising that network, which the intent group derives from the attached `Network` instead)~~>kind: VRFRouteConfiguration\nmetadata:\n@@ -13,1 +13,1 @@\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: Layer2NetworkConfiguration\n+~~(anycast gateway `10.102.0.254/24` is not the gateway the intent group derives from the subnet holding it, so moving it would change the gateway address)~~>kind: Layer2NetworkConfiguration\nmetadata:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.FindLowLevelNetworkConfig","displayName":"Find `VRFRouteConfiguration` and `Layer2NetworkConfiguration` to migrate","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.LowLevelNetworkConfigs","displayName":"Low level network configurations","description":"Deutsche Telekom `network.t-caas.telekom.com` resources that the `network-connector.sylvaproject.org` intent group replaces, and whether each one can be moved mechanically.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Kind","description":"The legacy `kind`."},{"name":"Name","description":"The `metadata.name` of the legacy resource."},{"name":"VRF","description":"The VRF the resource declares or attaches to, empty when it names none."},{"name":"Migration","description":"`automatic` when `io.moderne.kubernetes.sylva.MigrateLowLevelNetworkConfigToIntent` rewrites this resource, `manual` otherwise."},{"name":"Intent kinds","description":"The intent resources it becomes, empty when it has to be moved by hand."},{"name":"Detail","description":"Why the resource cannot be moved mechanically, empty when it can."},{"name":"Manual follow-up","description":"Legacy fields with no intent field to hold them, which the operator derives or assigns instead. Empty when the move loses nothing."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

