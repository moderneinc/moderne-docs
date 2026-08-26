---
title: "Find Kubernetes manifest flavors"
sidebar_label: "Find Kubernetes manifest flavors"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Kubernetes manifest flavors"}
  description={"Classify every YAML file in a repository by what it actually is — a manifest, a Helm chart template, a kustomization, something else entirely — and by whether an edit to it would mean what it appears to mean. This is the denominator every other Kubernetes report is a fraction of."}
  fqName={"org.openrewrite.kubernetes.search.FindManifestFlavors"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindManifestFlavors"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindManifestFlavors"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findmanifestflavors.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Kubernetes manifest flavors</RecipeHeader.Title>

<RecipeHeader.Description>Classify every YAML file in a repository by what it actually is — a manifest, a Helm chart template, a kustomization, something else entirely — and by whether an edit to it would mean what it appears to mean. This is the denominator every other Kubernetes report is a fraction of.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Only report on matching files. This is a glob expression. The whole repository is classified either way, because deciding what `charts/app/templates/deploy.yaml` is requires finding `charts/app/Chart.yaml`.","example":"**/*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"unchanged":{"language":"yaml","code":"apiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: widgets.example.com\n"},"variants":[{"language":"yaml","before":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ .Release.Name }}\n","after":"~~(HelmTemplate)~~>apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: {{ .Release.Name }}\n","diff":"--- charts/app/templates/deployment.yaml\n+++ charts/app/templates/deployment.yaml\n@@ -1,1 +1,1 @@\n-apiVersion: apps/v1\n+~~(HelmTemplate)~~>apiVersion: apps/v1\nkind: Deployment\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindManifestFlavors","displayName":"Find Kubernetes manifest flavors","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.table.ManifestFlavors","displayName":"Manifest flavors","description":"Every YAML file in the repository, classified by what it actually is and by whether an edit to it would mean what it appears to mean. The denominator for the coverage of every other table here.","columns":[{"name":"Source path","description":"The path of the YAML file relative to the root of the repository."},{"name":"Flavor","description":"What the file is: a plain manifest, a chart's `templates/`, `crds/`, `Chart.yaml` or `values.yaml`, a kustomization, something else templated, YAML that declares no resource, or YAML that did not parse."},{"name":"Safe to edit","description":"Whether a write recipe may edit this file. False for anything whose text is not the resource, such as a chart template or a kustomization patch."},{"name":"Document count","description":"How many YAML documents the file holds, counting each one separated by `---`."},{"name":"Kubernetes document count","description":"How many of those documents declare both `apiVersion` and `kind`."},{"name":"Helm expression count","description":"How many `{{ }}` template expressions the file holds. A GitHub Actions `${{ }}` is not one of them."},{"name":"Substitution count","description":"How many `${VAR}` substitutions the file holds, which envsubst, Flux's `postBuild.substitute` or kustomize resolves before the manifest reaches a cluster. Counted only for files that declare a Kubernetes resource, because elsewhere the same text is an ordinary shell variable."},{"name":"Chart path","description":"The directory of the `Chart.yaml` this file belongs to, or `null` when it belongs to no chart. The deepest such directory, so a subchart claims its own files."},{"name":"Reason","description":"Why the file was classified this way, in the terms a reader would use to argue with it."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

