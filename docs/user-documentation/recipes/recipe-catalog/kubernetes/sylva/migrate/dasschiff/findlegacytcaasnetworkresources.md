---
title: "Find legacy T-CaaS network resources"
sidebar_label: "Find legacy T-CaaS network resources"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find legacy T-CaaS network resources"}
  description={"Find resources still on the legacy `network.t-caas.telekom.com` group and report what supersedes each in `network-connector.sylvaproject.org`. No kind moves on `apiVersion` alone, not even `BGPPeering`, which exists in both groups under the same name but shares only four fields."}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindLegacyTCaasNetworkResources"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kubernetes.sylva.migrate.dasschiff.FindLegacyTCaasNetworkResources"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kubernetes.sylva.migrate.dasschiff.FindLegacyTCaasNetworkResources"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/sylva/migrate/dasschiff/findlegacytcaasnetworkresources.md"}
  moderneOnly
>

<RecipeHeader.Title>Find legacy T-CaaS network resources</RecipeHeader.Title>

<RecipeHeader.Description>Find resources still on the legacy `network.t-caas.telekom.com` group and report what supersedes each in `network-connector.sylvaproject.org`. No kind moves on `apiVersion` alone, not even `BGPPeering`, which exists in both groups under the same name but shares only four fields.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression.","example":"**/network-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network.t-caas.telekom.com/v1alpha1\nkind: MirrorTarget\nmetadata:\n  name: example-collector\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\nkind: MirrorSelector\nmetadata:\n  name: example-mirror\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Collector\nmetadata:\n  name: intent-collector\n","after":"apiVersion: network.t-caas.telekom.com/v1alpha1\n~~(replaced by Collector)~~>kind: MirrorTarget\nmetadata:\n  name: example-collector\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n~~(replaced by TrafficMirror)~~>kind: MirrorSelector\nmetadata:\n  name: example-mirror\n---\napiVersion: network-connector.sylvaproject.org/v1alpha1\nkind: Collector\nmetadata:\n  name: intent-collector\n","diff":"@@ -2,1 +2,1 @@\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: MirrorTarget\n+~~(replaced by Collector)~~>kind: MirrorTarget\nmetadata:\n@@ -7,1 +7,1 @@\n---\napiVersion: network.t-caas.telekom.com/v1alpha1\n-kind: MirrorSelector\n+~~(replaced by TrafficMirror)~~>kind: MirrorSelector\nmetadata:\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kubernetes.sylva.migrate.dasschiff.FindLegacyTCaasNetworkResources","displayName":"Find legacy T-CaaS network resources","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

