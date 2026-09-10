---
title: "Update kustomize image"
sidebar_label: "Update kustomize image"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update kustomize image"}
  description={"Update the `newName`, `newTag` or `digest` of an entry in a kustomization's `images` block, which is where `kustomize edit set image` and the `sed`, `yq` and Python scripts that stand in for it write an image pin. Only an entry that is already there is updated; an image the kustomization does not already override is left alone rather than added. A commented out entry stays a comment."}
  fqName={"org.openrewrite.kubernetes.kustomize.UpdateImageTag"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.kustomize.UpdateImageTag"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.kustomize.UpdateImageTag"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/kustomize/updateimagetag.md"}
  moderneOnly
>

<RecipeHeader.Title>Update kustomize image</RecipeHeader.Title>

<RecipeHeader.Description>Update the `newName`, `newTag` or `digest` of an entry in a kustomization's `images` block, which is where `kustomize edit set image` and the `sed`, `yq` and Python scripts that stand in for it write an image pin. Only an entry that is already there is updated; an image the kustomization does not already override is left alone rather than added. A commented out entry stays a comment.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"imageName","required":true,"description":"The `name` of the `images` entry to update, which is the image as it is written in the resources being overlaid rather than the image it is replaced with.","example":"controller"},{"type":"String","name":"newName","required":false,"description":"The image name to override with. Leave unset to change only the tag or digest.","example":"ghcr.io/telekom/das-schiff-network-operator"},{"type":"String","name":"newTag","required":false,"description":"The tag to override with. Mutually exclusive with `digest`, so setting it removes a `digest` the entry already has.","example":"v1.2.3"},{"type":"String","name":"digest","required":false,"description":"The digest to override with, including its `sha256:` prefix. Mutually exclusive with `newTag`, so setting it removes a `newTag` the entry already has.","example":"sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression. When omitted, the file names kustomize itself recognizes are matched: `kustomization.yaml`, `kustomization.yml` and `Kustomization`.","example":"**/overlays/**/kustomization.yaml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"imageName","value":"controller"},{"parameter":"newName","value":"null"},{"parameter":"newTag","value":"v1.2.3"},{"parameter":"digest","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n- deployment.yaml\nimages:\n- name: controller\n  newName: ghcr.io/telekom/das-schiff-network-operator\n  newTag: latest\n- name: kube-rbac-proxy\n  newTag: v0.15.0\n","after":"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n- deployment.yaml\nimages:\n- name: controller\n  newName: ghcr.io/telekom/das-schiff-network-operator\n  newTag: v1.2.3\n- name: kube-rbac-proxy\n  newTag: v0.15.0\n","diff":"--- config/operator/kustomization.yaml\n+++ config/operator/kustomization.yaml\n@@ -8,1 +8,1 @@\n- name: controller\n  newName: ghcr.io/telekom/das-schiff-network-operator\n- newTag: latest\n+ newTag: v1.2.3\n- name: kube-rbac-proxy\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.kustomize.UpdateImageTag","displayName":"Update kustomize image","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"imageName=controller\" --recipe-option \"newName=ghcr.io/telekom/das-schiff-network-operator\" --recipe-option \"newTag=v1.2.3\" --recipe-option \"digest=sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229\" --recipe-option \"fileMatcher='**/overlays/**/kustomization.yaml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

