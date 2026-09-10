---
title: "Find kustomize images"
sidebar_label: "Find kustomize images"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find kustomize images"}
  description={"An inventory of every image a kustomization overrides. The `images` block is where a repository's image pins actually live once kustomize is in play, and it is rewritten by `kustomize edit set image`, `sed`, `yq` and hand edits alike, so it is worth knowing where they all are."}
  fqName={"org.openrewrite.kubernetes.search.FindKustomizeImages"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindKustomizeImages"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindKustomizeImages"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findkustomizeimages.md"}
  moderneOnly
>

<RecipeHeader.Title>Find kustomize images</RecipeHeader.Title>

<RecipeHeader.Description>An inventory of every image a kustomization overrides. The `images` block is where a repository's image pins actually live once kustomize is in play, and it is rewritten by `kustomize edit set image`, `sed`, `yq` and hand edits alike, so it is worth knowing where they all are.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"imageName","required":false,"description":"Only inventory entries whose `name` matches this glob expression. When omitted, every entry is inventoried.","example":"ghcr.io/telekom/*"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be searched. This is a glob expression. When omitted, the file names kustomize itself recognizes are matched: `kustomization.yaml`, `kustomization.yml` and `Kustomization`.","example":"**/overlays/**/kustomization.yaml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"imageName","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nimages:\n- name: controller\n  newName: ghcr.io/telekom/das-schiff-network-operator\n  newTag: v1.2.3\n- name: gcr.io/k8s-staging-cluster-api/capd-manager\n  newTag: v1.12.8\n","after":"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nimages:\n- ~~(ghcr.io/telekom/das-schiff-network-operator:v1.2.3)~~>name: controller\n  newName: ghcr.io/telekom/das-schiff-network-operator\n  newTag: v1.2.3\n- ~~(gcr.io/k8s-staging-cluster-api/capd-manager:v1.12.8)~~>name: gcr.io/k8s-staging-cluster-api/capd-manager\n  newTag: v1.12.8\n","diff":"--- config/operator/kustomization.yaml\n+++ config/operator/kustomization.yaml\n@@ -4,1 +4,1 @@\nkind: Kustomization\nimages:\n-- name: controller\n+- ~~(ghcr.io/telekom/das-schiff-network-operator:v1.2.3)~~>name: controller\n  newName: ghcr.io/telekom/das-schiff-network-operator\n@@ -7,1 +7,1 @@\n  newName: ghcr.io/telekom/das-schiff-network-operator\n  newTag: v1.2.3\n-- name: gcr.io/k8s-staging-cluster-api/capd-manager\n+- ~~(gcr.io/k8s-staging-cluster-api/capd-manager:v1.12.8)~~>name: gcr.io/k8s-staging-cluster-api/capd-manager\n  newTag: v1.12.8\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindKustomizeImages","displayName":"Find kustomize images","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.table.KustomizeImages","displayName":"Kustomize images","description":"Every image a kustomization overrides, one row per entry in an `images` block.","columns":[{"name":"Source path","description":"The path of the kustomization relative to the root of the repository."},{"name":"Name","description":"The `name` the entry matches on, which is the image as it is written in the resources being overlaid."},{"name":"New name","description":"The `newName` the image is replaced with, or `null` when only the tag or digest is overridden."},{"name":"New tag","description":"The `newTag` the image is pinned to, or `null`."},{"name":"Digest","description":"The `digest` the image is pinned to, or `null`. Mutually exclusive with the tag."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

