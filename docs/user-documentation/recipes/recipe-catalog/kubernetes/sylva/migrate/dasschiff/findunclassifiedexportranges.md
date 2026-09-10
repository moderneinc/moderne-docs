---
title: "Find unclassified Das Schiff export ranges"
sidebar_label: "Find unclassified Das Schiff export ranges"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find unclassified Das Schiff export ranges"}
  description={"Report every `VRFRouteConfiguration.spec.export` range that has to be classified as a load balancer pool or an egress NAT pool before an `Inbound` or `Outbound` can be generated for it. Nothing in the legacy group tells the two apart."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindUnclassifiedExportRanges"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindUnclassifiedExportRanges"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.FindUnclassifiedExportRanges"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/findunclassifiedexportranges.md"}
  moderneOnly
>

<RecipeHeader.Title>Find unclassified Das Schiff export ranges</RecipeHeader.Title>

<RecipeHeader.Description>Report every `VRFRouteConfiguration.spec.export` range that has to be classified as a load balancer pool or an egress NAT pool before an `Inbound` or `Outbound` can be generated for it. Nothing in the legacy group tells the two apart.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"classifications","required":false,"description":"Ranges already classified, as `<vrf>/<cidr>=<role>:<networkRef>` separated by commas. The roles are `inbound-bgp`, `inbound-l2` and `outbound`. Leave empty to report every range.","example":"m2m/10.250.4.0/24=inbound-bgp:vlan1,m2m/10.250.2.0/30=outbound:vlan1"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression.","example":"**/network-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"classifications","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: c2m-test-vrf\nspec:\n  export:\n  # VLAN 3\n  - cidr: 10.250.30.0/24\n    le: 32\n    action: permit\n  - cidr: fd94:685b:30cf:503::/64\n    le: 128\n    action: permit\n  # c2m egress nat\n  - cidr: 10.250.6.0/30\n    le: 32\n    action: permit\n  # c2m ingress (LB)\n  - cidr: 10.250.5.0/24\n    le: 32\n    action: permit\n  import: []\n  seq: 10\n  vrf: c2m\n  vni: 2002027\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: Layer2NetworkConfiguration\nmetadata:\n  name: vlan3\nspec:\n  anycastGateways:\n  - 10.250.30.1/24\n  id: 503\n  vni: 4000004\n  vrf: c2m\n","after":"apiVersion: network.t-caas.telekom.com/v1alpha1\n~~(classify c2m/10.250.30.0/24, c2m/fd94:685b:30cf:503::/64, c2m/10.250.6.0/30, c2m/10.250.5.0/24 as `inbound-bgp`, `inbound-l2` or `outbound` and name the `Network` each allocates from)~~>kind: VRFRouteConfiguration\nmetadata:\n  name: c2m-test-vrf\nspec:\n  export:\n  # VLAN 3\n  - cidr: 10.250.30.0/24\n    le: 32\n    action: permit\n  - cidr: fd94:685b:30cf:503::/64\n    le: 128\n    action: permit\n  # c2m egress nat\n  - cidr: 10.250.6.0/30\n    le: 32\n    action: permit\n  # c2m ingress (LB)\n  - cidr: 10.250.5.0/24\n    le: 32\n    action: permit\n  import: []\n  seq: 10\n  vrf: c2m\n  vni: 2002027\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: Layer2NetworkConfiguration\nmetadata:\n  name: vlan3\nspec:\n  anycastGateways:\n  - 10.250.30.1/24\n  id: 503\n  vni: 4000004\n  vrf: c2m\n","diff":"@@ -2,1 +2,1 @@\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: VRFRouteConfiguration\n+~~(classify c2m/10.250.30.0/24, c2m/fd94:685b:30cf:503::/64, c2m/10.250.6.0/30, c2m/10.250.5.0/24 as `inbound-bgp`, `inbound-l2` or `outbound` and name the `Network` each allocates from)~~>kind: VRFRouteConfiguration\nmetadata:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.FindUnclassifiedExportRanges","displayName":"Find unclassified Das Schiff export ranges","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.ExportRanges","displayName":"Exported ranges","description":"Every `spec.export` range of a Deutsche Telekom `VRFRouteConfiguration`, and whether it is classified as the load balancer pool or the egress NAT pool the `network-connector.sylvaproject.org` intent group needs it to be.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Name","description":"The `metadata.name` of the `VRFRouteConfiguration` exporting the range."},{"name":"VRF","description":"The VRF the range is exported into."},{"name":"CIDR","description":"The exported range."},{"name":"Classification key","description":"The key that classifies this range, to be supplied as `<key>=<role>:<networkRef>`. Empty when no classification would help."},{"name":"Status","description":"`generated` when an `Inbound` or `Outbound` was produced, `unclassified` when the range needs a role, `not expressible` when no intent resource can hold it, and `templated` when the resource renders through a Helm expression."},{"name":"Role","description":"The supplied role: `inbound-bgp`, `inbound-l2` or `outbound`. Empty when unclassified."},{"name":"Network","description":"The `Network` the supplied classification allocates from. Empty when unclassified."},{"name":"Generated","description":"The intent resource this range landed in, empty when none was generated."},{"name":"Detail","description":"What has to be decided, why the range cannot move, or what generating it adds beyond the export the legacy resource performed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

