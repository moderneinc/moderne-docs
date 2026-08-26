---
title: "Find what blocks a Das Schiff `BGPPeering` from moving to the Sylva network connector API"
sidebar_label: "Find what blocks a Das Schiff `BGPPeering` from moving to the Sylva network connector API"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find what blocks a Das Schiff `BGPPeering` from moving to the Sylva network connector API"}
  description={"Report what a human has to decide before a Das Schiff `BGPPeering` can move to the `network-connector.sylvaproject.org` group. Nothing is rewritten: the legacy `spec.export` is a reject-by-default prefix filter and the intent one is accept-by-default BGP communities, so a peering moved as it stands would advertise the whole VRF table."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindBgpPeeringMigrationBlockers"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindBgpPeeringMigrationBlockers"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.FindBgpPeeringMigrationBlockers"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/findbgppeeringmigrationblockers.md"}
  moderneOnly
>

<RecipeHeader.Title>Find what blocks a Das Schiff `BGPPeering` from moving to the Sylva network connector API</RecipeHeader.Title>

<RecipeHeader.Description>Report what a human has to decide before a Das Schiff `BGPPeering` can move to the `network-connector.sylvaproject.org` group. Nothing is rewritten: the legacy `spec.export` is a reject-by-default prefix filter and the intent one is accept-by-default BGP communities, so a peering moved as it stands would advertise the whole VRF table.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression.","example":"**/bgp-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Network\nmetadata:\n  name: net-bgp-clients\n  namespace: default\nspec:\n  ipv4:\n    cidr: 10.250.3.0/24\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Layer2Attachment\nmetadata:\n  name: gw-vlan-m2m\n  namespace: default\nspec:\n  networkRef: \"gw-vlan-m2m\"\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: BGPPeering\nmetadata:\n  name: m2m-clients\nspec:\n  peeringVlan:\n    name: gw-vlan-m2m\n  remoteASN: 65100\n  enableBFD: true\n  holdTime: 9s\n  keepaliveTime: 3s\n  maximumPrefixes: 100\n  import:\n    - action: permit\n      cidr: 10.250.3.0/24\n      le: 32\n  export: []\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: m2m-gw-vrf\nspec:\n  vrf: m2m\n","after":"apiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Network\nmetadata:\n  name: net-bgp-clients\n  namespace: default\nspec:\n  ipv4:\n    cidr: 10.250.3.0/24\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Layer2Attachment\nmetadata:\n  name: gw-vlan-m2m\n  namespace: default\nspec:\n  networkRef: \"gw-vlan-m2m\"\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n~~(sets an empty `spec.export`, and the legacy export filter defaults to reject, so this peer is told nothing at all. The intent group has no export filter: its `listenRange` peer is built with a default action of accept, so it tells the peer the whole VRF table, and its `spec.export` is a set of BGP communities tagging the prefixes it re-exports into the EVPN fabric rather than a filter on what the peer hears. What this peer is told therefore has to be decided again rather than carried across, and moving this peering as it stands would turn advertising nothing into advertising the whole VRF table)~~>kind: BGPPeering\nmetadata:\n  name: m2m-clients\nspec:\n  peeringVlan:\n    name: gw-vlan-m2m\n  remoteASN: 65100\n  enableBFD: true\n  holdTime: 9s\n  keepaliveTime: 3s\n  maximumPrefixes: 100\n  import:\n    - action: permit\n      cidr: 10.250.3.0/24\n      le: 32\n  export: []\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: m2m-gw-vrf\nspec:\n  vrf: m2m\n","diff":"@@ -19,1 +19,1 @@\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: BGPPeering\n+~~(sets an empty `spec.export`, and the legacy export filter defaults to reject, so this peer is told nothing at all. The intent group has no export filter: its `listenRange` peer is built with a default action of accept, so it tells the peer the whole VRF table, and its `spec.export` is a set of BGP communities tagging the prefixes it re-exports into the EVPN fabric rather than a filter on what the peer hears. What this peer is told therefore has to be decided again rather than carried across, and moving this peering as it stands would turn advertising nothing into advertising the whole VRF table)~~>kind: BGPPeering\nmetadata:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.FindBgpPeeringMigrationBlockers","displayName":"Find what blocks a Das Schiff `BGPPeering` from moving to the Sylva network connector API","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.BgpPeerings","displayName":"BGP peerings","description":"Deutsche Telekom `network.t-caas.telekom.com` `BGPPeering` resources, and what each one needs decided before it can be written against the `network-connector.sylvaproject.org` `BGPPeering` that shares its name.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Name","description":"The `metadata.name` of the legacy resource."},{"name":"Mode","description":"The intent `spec.mode` this peering maps onto: `listenRange` when it sets `spec.peeringVlan`, `loopbackPeer` when it sets `spec.loopbackPeer`, empty when neither is readable."},{"name":"Blocker","description":"What has to be decided before this peering can be written against the intent group. Checks run narrowest first, so a peering reported against `spec.export` is one whose every other field and reference already resolves."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

