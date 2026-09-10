---
title: "Change Helm chart version"
sidebar_label: "Change Helm chart version"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Helm chart version"}
  description={"Propagate a Helm chart version across every file that restates it: the chart's own `Chart.yaml`, the `dependencies` of the charts that consume it, Flux `HelmRelease` resources, k0rdent `ClusterTemplate`, `ProviderTemplate` and `ServiceTemplate` resources, and optionally files whose name encodes the version. `dependencies[].version` is a range, so by default a range that the new version already satisfies is left alone rather than pinned. `Chart.lock` is never edited, because its digest cannot be recomputed here; it is reported instead. Files under a chart's `templates` directory are Go template text and are left alone.\n\nA k0rdent template's `metadata.name` also encodes the chart version, but a name is an identity that `ClusterDeployment`, `Release` and `*TemplateChain` resources point at. Renaming it here would leave those references dangling, so this recipe changes only version fields; `org.openrewrite.kubernetes.k0rdent.ChangeTemplateVersion` moves the name and everything that references it together."}
  fqName={"org.openrewrite.kubernetes.helm.ChangeChartVersion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.helm.ChangeChartVersion"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.helm.ChangeChartVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/helm/changechartversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Change Helm chart version</RecipeHeader.Title>

<RecipeHeader.Description>Propagate a Helm chart version across every file that restates it: the chart's own `Chart.yaml`, the `dependencies` of the charts that consume it, Flux `HelmRelease` resources, k0rdent `ClusterTemplate`, `ProviderTemplate` and `ServiceTemplate` resources, and optionally files whose name encodes the version. `dependencies[].version` is a range, so by default a range that the new version already satisfies is left alone rather than pinned. `Chart.lock` is never edited, because its digest cannot be recomputed here; it is reported instead. Files under a chart's `templates` directory are Go template text and are left alone.  A k0rdent template's `metadata.name` also encodes the chart version, but a name is an identity that `ClusterDeployment`, `Release` and `*TemplateChain` resources point at. Renaming it here would leave those references dangling, so this recipe changes only version fields; `org.openrewrite.kubernetes.k0rdent.ChangeTemplateVersion` moves the name and everything that references it together.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"chartName","required":true,"description":"The `name` of the chart whose version is changing, as it is written in its `Chart.yaml` and in the `dependencies` of the charts that consume it.","example":"k0smotron"},{"type":"String","name":"oldVersion","required":false,"description":"The version being replaced. When omitted, the version the chart's own `Chart.yaml` currently declares is used, which is only knowable for a chart that lives in this repository.","example":"1.2.0"},{"type":"String","name":"newVersion","required":true,"description":"The new chart version. Must be an exact semantic version.","example":"1.3.0"},{"type":"String","name":"newAppVersion","required":false,"description":"The new `appVersion` for the chart. A chart's `appVersion` names the application it packages, which usually moves independently of the chart version, so it is left alone unless this is set.","example":"v1.3.0"},{"type":"MatchMode","name":"matchMode","required":false,"description":"How to treat the range-valued version fields, `dependencies[].version` in a `Chart.yaml` and `spec.chart.spec.version` in a Flux `HelmRelease`. The exact-valued fields, a chart's own `version` and `appVersion`, are always set exactly. Default is `Widen`."},{"type":"String","name":"renameFilesMatching","required":false,"description":"A glob expression selecting files whose name encodes the version. Matching files are renamed, substituting the new version for the old in either `1.2.3` or `1-2-3` spelling. When omitted, nothing is renamed.","example":"**/files/release/*.yaml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"chartName","value":"app"},{"parameter":"oldVersion","value":"null"},{"parameter":"newVersion","value":"2.0.0"},{"parameter":"newAppVersion","value":"null"},{"parameter":"matchMode","value":"null"},{"parameter":"renameFilesMatching","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: helm.toolkit.fluxcd.io/v2\nkind: HelmRelease\nmetadata:\n  name: app\nspec:\n  chart:\n    spec:\n      chart: app\n      version: 1.2.0\n---\napiVersion: helm.toolkit.fluxcd.io/v2\nkind: HelmRelease\nmetadata:\n  name: other\nspec:\n  chart:\n    spec:\n      chart: other\n      version: 1.2.0\n","after":"apiVersion: helm.toolkit.fluxcd.io/v2\nkind: HelmRelease\nmetadata:\n  name: app\nspec:\n  chart:\n    spec:\n      chart: app\n      version: 2.0.0\n---\napiVersion: helm.toolkit.fluxcd.io/v2\nkind: HelmRelease\nmetadata:\n  name: other\nspec:\n  chart:\n    spec:\n      chart: other\n      version: 1.2.0\n","diff":"--- clusters/dev/releases.yaml\n+++ clusters/dev/releases.yaml\n@@ -9,1 +9,1 @@\n    spec:\n      chart: app\n-     version: 1.2.0\n+     version: 2.0.0\n---\n","newFile":false},{"language":"yaml","before":"apiVersion: v2\nname: app\nversion: 1.2.0\n","after":"apiVersion: v2\nname: app\nversion: 2.0.0\n","diff":"--- charts/app/Chart.yaml\n+++ charts/app/Chart.yaml\n@@ -3,1 +3,1 @@\napiVersion: v2\nname: app\n-version: 1.2.0\n+version: 2.0.0\n\n","newFile":false},{"language":"yaml","before":"apiVersion: v2\nname: parent\nversion: 0.1.0\ndependencies:\n  - name: app\n    version: ^1.2.0\n    repository: file://../app\n","after":"apiVersion: v2\nname: parent\nversion: 0.1.0\ndependencies:\n  - name: app\n    version: ^2.0.0\n    repository: file://../app\n","diff":"--- charts/parent/Chart.yaml\n+++ charts/parent/Chart.yaml\n@@ -6,1 +6,1 @@\ndependencies:\n  - name: app\n-   version: ^1.2.0\n+   version: ^2.0.0\n    repository: file://../app\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.helm.ChangeChartVersion","displayName":"Change Helm chart version","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"chartName=k0smotron\" --recipe-option \"oldVersion=1.2.0\" --recipe-option \"newVersion=1.3.0\" --recipe-option \"newAppVersion=v1.3.0\" --recipe-option \"renameFilesMatching='**/files/release/*.yaml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.table.HelmChartVersionChanges","displayName":"Helm chart version changes","description":"Every place a chart version was propagated to, plus the places that were deliberately left alone.","columns":[{"name":"Source path","description":"The path of the file the version was found in."},{"name":"Field","description":"The field the version was found in, relative to the document root."},{"name":"Old value","description":"The value before the change. For a range this is the range, not a version."},{"name":"New value","description":"The value after the change, or the unchanged value when no change was made."},{"name":"Outcome","description":"One of `Changed`, `Renamed`, `Already satisfied` when the new version already satisfies an existing range, `Compound range` when the range is too complex to rewrite safely, or `Lock file` when a `Chart.lock` needs regenerating."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

