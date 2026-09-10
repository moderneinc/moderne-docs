---
title: "Find Das Schiff traffic mirror configuration"
sidebar_label: "Find Das Schiff traffic mirror configuration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Das Schiff traffic mirror configuration"}
  description={"Find the Das Schiff `MirrorTarget` and `MirrorSelector` resources the Sylva `Collector` and `TrafficMirror` replace, and report for each whether it moves automatically or why it has to be moved by hand. Reports only; nothing is rewritten."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindMirrorConfig"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindMirrorConfig"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.FindMirrorConfig"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/findmirrorconfig.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Das Schiff traffic mirror configuration</RecipeHeader.Title>

<RecipeHeader.Description>Find the Das Schiff `MirrorTarget` and `MirrorSelector` resources the Sylva `Collector` and `TrafficMirror` replace, and report for each whether it moves automatically or why it has to be moved by hand. Reports only; nothing is rewritten.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression.","example":"**/mirror-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: mirror-test-vrf\nspec:\n  vrf: mirror\n  loopbacks:\n  - name: lo.mir\n    subnet: 10.250.91.0/29\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: MirrorTarget\nmetadata:\n  name: collector-prod\nspec:\n  type: l3gre\n  destinationIP: 10.250.90.100\n  destinationVrf: mirror\n  sourceLoopback: lo.mir\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: MirrorSelector\nmetadata:\n  name: mirror-vrf-egress\nspec:\n  mirrorTarget:\n    kind: MirrorTarget\n    name: collector-prod\n  mirrorSource:\n    kind: VRFRouteConfiguration\n    name: mirror-test-vrf\n  direction: egress\n","after":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: mirror-test-vrf\nspec:\n  vrf: mirror\n  loopbacks:\n  - name: lo.mir\n    subnet: 10.250.91.0/29\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n~~(becomes `Collector`)~~>kind: MirrorTarget\nmetadata:\n  name: collector-prod\nspec:\n  type: l3gre\n  destinationIP: 10.250.90.100\n  destinationVrf: mirror\n  sourceLoopback: lo.mir\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n~~(mirrors `VRFRouteConfiguration` mirror-test-vrf, and `TrafficMirror.spec.source.kind` is one of `Layer2Attachment`, `Inbound` or `Outbound`, none of which is a whole VRF)~~>kind: MirrorSelector\nmetadata:\n  name: mirror-vrf-egress\nspec:\n  mirrorTarget:\n    kind: MirrorTarget\n    name: collector-prod\n  mirrorSource:\n    kind: VRFRouteConfiguration\n    name: mirror-test-vrf\n  direction: egress\n","diff":"@@ -12,1 +12,1 @@\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: MirrorTarget\n+~~(becomes `Collector`)~~>kind: MirrorTarget\nmetadata:\n@@ -22,1 +22,1 @@\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: MirrorSelector\n+~~(mirrors `VRFRouteConfiguration` mirror-test-vrf, and `TrafficMirror.spec.source.kind` is one of `Layer2Attachment`, `Inbound` or `Outbound`, none of which is a whole VRF)~~>kind: MirrorSelector\nmetadata:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.FindMirrorConfig","displayName":"Find Das Schiff traffic mirror configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.kubernetes.sylva.migrate.dasschiff.table.MirrorConfigs","displayName":"Traffic mirror configurations","description":"Deutsche Telekom `MirrorTarget` and `MirrorSelector` resources that the `network-connector.sylvaproject.org` `Collector` and `TrafficMirror` replace, and whether each one can be moved mechanically.","columns":[{"name":"Source path","description":"The path to the manifest."},{"name":"Kind","description":"The legacy `kind`."},{"name":"Name","description":"The `metadata.name` of the legacy resource."},{"name":"Reference","description":"The VRF a `MirrorTarget` tunnels through, or the `MirrorTarget` a `MirrorSelector` sends to. Empty when it names none."},{"name":"Migration","description":"`automatic` when `io.moderne.kubernetes.sylva.migrate.dasschiff.MigrateMirrorConfigToIntent` rewrites this resource, `manual` otherwise."},{"name":"Intent kinds","description":"The intent resource it becomes, empty when it has to be moved by hand."},{"name":"Detail","description":"Why the resource cannot be moved mechanically, empty when it can."},{"name":"Manual follow-up","description":"What still has to be done by hand once the resource has moved, which is mostly the resources it names that the intent group has not generated yet. Empty when the move leaves nothing behind."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

