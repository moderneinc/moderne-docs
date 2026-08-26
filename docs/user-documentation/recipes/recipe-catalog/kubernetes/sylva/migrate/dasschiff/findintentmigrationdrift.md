---
title: "Find drift between Das Schiff and Sylva intent network resources"
sidebar_label: "Find drift between Das Schiff and Sylva intent network resources"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find drift between Das Schiff and Sylva intent network resources"}
  description={"Compare the `network.t-caas.telekom.com` resources in a repository against the `network-connector.sylvaproject.org` resources meant to replace them, and report every field the two no longer agree on. They are paired by VRF name and VLAN id, so a hand written translation is checked as readily as a generated one."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindIntentMigrationDrift"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindIntentMigrationDrift"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.FindIntentMigrationDrift"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/findintentmigrationdrift.md"}
  moderneOnly
>

<RecipeHeader.Title>Find drift between Das Schiff and Sylva intent network resources</RecipeHeader.Title>

<RecipeHeader.Description>Compare the `network.t-caas.telekom.com` resources in a repository against the `network-connector.sylvaproject.org` resources meant to replace them, and report every field the two no longer agree on. They are paired by VRF name and VLAN id, so a hand written translation is checked as readily as a generated one.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be compared. This is a glob expression.","example":"**/network/**.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"unchanged":{"language":"yaml","code":"apiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: VRF\nmetadata:\n  name: vrf-m2m\n  namespace: default\nspec:\n  vrf: \"m2m\"\n  vni: 2002026\n  routeTarget: \"65188:2026\"\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Network\nmetadata:\n  name: net-vlan501\n  namespace: default\nspec:\n  vlan: 501\n  vni: 4000002\n  ipv4:\n    cidr: \"10.250.0.0/24\"\n  ipv6:\n    cidr: \"fd94:685b:30cf:501::/64\"\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Destination\nmetadata:\n  name: dest-dcgw\n  namespace: default\n  labels:\n    type: gateway\nspec:\n  vrfRef: \"vrf-m2m\"\n  prefixes:\n    - \"10.102.0.0/16\"\n    - \"fda5:25c1:193c::/48\"\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Layer2Attachment\nmetadata:\n  name: l2a-base-vlan501\n  namespace: default\nspec:\n  networkRef: \"net-vlan501\"\n  destinations:\n    matchLabels:\n      type: gateway\n"},"variants":[{"language":"yaml","before":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: m2m-test-vrf\nspec:\n  export:\n  - cidr: 10.250.0.0/24\n    le: 32\n    action: permit\n  import:\n  - cidr: 10.102.0.1/32\n    action: permit\n  - cidr: fda5:25c1:193c::/64\n    le: 128\n    action: permit\n  seq: 10\n  vrf: m2m\n  vni: 2002026\n  routeTarget: 65188:2026\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: Layer2NetworkConfiguration\nmetadata:\n  name: vlan1\nspec:\n  anycastGateways:\n  - 10.250.0.1/24\n  - fd94:685b:30cf:501::1/64\n  anycastMac: 1a:ee:cf:2f:a7:a8\n  id: 501\n  mtu: 1500\n  vni: 4000002\n  vrf: m2m\n","after":"apiVersion: network.t-caas.telekom.com/v1alpha1\n~~(spec.import differs)~~>kind: VRFRouteConfiguration\nmetadata:\n  name: m2m-test-vrf\nspec:\n  export:\n  - cidr: 10.250.0.0/24\n    le: 32\n    action: permit\n  import:\n  - cidr: 10.102.0.1/32\n    action: permit\n  - cidr: fda5:25c1:193c::/64\n    le: 128\n    action: permit\n  seq: 10\n  vrf: m2m\n  vni: 2002026\n  routeTarget: 65188:2026\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n~~(spec.anycastMac dropped)~~>kind: Layer2NetworkConfiguration\nmetadata:\n  name: vlan1\nspec:\n  anycastGateways:\n  - 10.250.0.1/24\n  - fd94:685b:30cf:501::1/64\n  anycastMac: 1a:ee:cf:2f:a7:a8\n  id: 501\n  mtu: 1500\n  vni: 4000002\n  vrf: m2m\n","diff":"--- e2etests/testdata/network-operator-configs.yaml\n+++ e2etests/testdata/network-operator-configs.yaml\n@@ -2,1 +2,1 @@\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: VRFRouteConfiguration\n+~~(spec.import differs)~~>kind: VRFRouteConfiguration\nmetadata:\n@@ -22,1 +22,1 @@\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: Layer2NetworkConfiguration\n+~~(spec.anycastMac dropped)~~>kind: Layer2NetworkConfiguration\nmetadata:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.FindIntentMigrationDrift","displayName":"Find drift between Das Schiff and Sylva intent network resources","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.IntentDrift","displayName":"Intent drift","description":"Where the `network-connector.sylvaproject.org` resources in a repository do not say what the `network.t-caas.telekom.com` resources beside them said.","columns":[{"name":"Source path","description":"The path to the manifest holding the legacy resource."},{"name":"Kind","description":"The legacy `kind` the comparison is anchored on."},{"name":"Name","description":"The `metadata.name` of the legacy resource."},{"name":"Intent resource","description":"The intent resource compared against, as `kind name`. Empty when none was found."},{"name":"Field","description":"The legacy field compared, empty when the finding is about the resource as a whole."},{"name":"Legacy value","description":"What the legacy resource says. Empty when only the intent side says anything."},{"name":"Intent value","description":"What the intent resources say. Empty when they say nothing."},{"name":"Verdict","description":"`differs` when both groups express the field and disagree, `dropped` when the intent group has nowhere to put the legacy value, `unverifiable` when the intent group leaves it to the operator, `unpaired` when no counterpart was found, and `ambiguous` when more than one counterpart was."},{"name":"Detail","description":"What the difference does to the network."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

