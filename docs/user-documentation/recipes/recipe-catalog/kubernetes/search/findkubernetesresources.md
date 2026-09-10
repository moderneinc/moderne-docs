---
title: "Find Kubernetes resources"
sidebar_label: "Find Kubernetes resources"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Kubernetes resources"}
  description={"An inventory of every Kubernetes resource in a repository, one row per YAML document. The pod spec path column reports where each kind keeps its containers, so the workloads this module cannot reach are counted rather than quietly skipped."}
  fqName={"org.openrewrite.kubernetes.search.FindKubernetesResources"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindKubernetesResources"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindKubernetesResources"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findkubernetesresources.md"}
  moderneOnly
>

<RecipeHeader.Title>Find Kubernetes resources</RecipeHeader.Title>

<RecipeHeader.Description>An inventory of every Kubernetes resource in a repository, one row per YAML document. The pod spec path column reports where each kind keeps its containers, so the workloads this module cannot reach are counted rather than quietly skipped.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"apiVersion","required":false,"description":"Only inventory resources on this API version. This is a glob expression, so `apps/*` takes a whole group. When omitted, every resource is inventoried.","example":"apps/v1"},{"type":"String","name":"kind","required":false,"description":"Only inventory resources of this kind. This is a glob expression. When omitted, every resource is inventoried.","example":"Deployment"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression.","example":"**/*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"apiVersion","value":"null"},{"parameter":"kind","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\n  namespace: default\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: settings\ndata:\n  key: value\n","after":"~~(Deployment default/application)~~>apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\n  namespace: default\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx\n~~(ConfigMap settings)~~>---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: settings\ndata:\n  key: value\n","diff":"--- k8s/app.yaml\n+++ k8s/app.yaml\n@@ -1,1 +1,1 @@\n-apiVersion: apps/v1\n+~~(Deployment default/application)~~>apiVersion: apps/v1\nkind: Deployment\n@@ -12,1 +12,1 @@\n      - name: app\n        image: nginx\n----\n+~~(ConfigMap settings)~~>---\napiVersion: v1\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindKubernetesResources","displayName":"Find Kubernetes resources","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.table.KubernetesResources","displayName":"Kubernetes resources","description":"Every Kubernetes resource declared in the repository, one row per YAML document.","columns":[{"name":"Source path","description":"The path of the YAML file relative to the root of the repository."},{"name":"Document index","description":"The zero-based position of this document within its file. One file declares many resources when its documents are separated by `---`."},{"name":"API version","description":"The `apiVersion` of the resource, exactly as it is written."},{"name":"Kind","description":"The `kind` of the resource."},{"name":"Namespace","description":"The `metadata.namespace` of the resource, or `null` when the resource is cluster scoped or takes the namespace it is applied into."},{"name":"Name","description":"The `metadata.name` of the resource."},{"name":"Templated","description":"Whether the document holds a Go template expression, and so declares something other than what it says until it has been rendered."},{"name":"Group","description":"The group half of `apiVersion`. Empty for the core group, whose `apiVersion` is a bare version such as `v1` with no slash in it at all."},{"name":"Version","description":"The version half of `apiVersion`."},{"name":"Pod spec path","description":"A JsonPath to where this kind keeps its pod spec, or `null` when that is not known here. A workload that lands in this table with no pod spec path is a workload every container recipe silently passes over."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

