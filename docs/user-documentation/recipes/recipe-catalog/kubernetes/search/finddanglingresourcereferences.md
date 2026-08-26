---
title: "Find dangling Kubernetes resource references"
sidebar_label: "Find dangling Kubernetes resource references"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find dangling Kubernetes resource references"}
  description={"Find resources that refer by name to a ConfigMap, Secret, ServiceAccount, Service, PersistentVolumeClaim, Role, ClusterRole, PriorityClass or scale target that this repository declares nowhere. There is no safe automated fix for a dangling reference — the name is either a typo, a leftover, or satisfied out of band — so this only reports. Namespace is ignored when resolving, a kustomization's `namePrefix` and `nameSuffix` are replayed so that the name a cluster sees resolves as well as the one on disk, and references whose value is templated, whose target kind appears nowhere in the repository, or whose target kind has a name some template computes are all left alone."}
  fqName={"org.openrewrite.kubernetes.search.FindDanglingResourceReferences"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindDanglingResourceReferences"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindDanglingResourceReferences"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/finddanglingresourcereferences.md"}
  moderneOnly
>

<RecipeHeader.Title>Find dangling Kubernetes resource references</RecipeHeader.Title>

<RecipeHeader.Description>Find resources that refer by name to a ConfigMap, Secret, ServiceAccount, Service, PersistentVolumeClaim, Role, ClusterRole, PriorityClass or scale target that this repository declares nowhere. There is no safe automated fix for a dangling reference — the name is either a typo, a leftover, or satisfied out of band — so this only reports. Namespace is ignored when resolving, a kustomization's `namePrefix` and `nameSuffix` are replayed so that the name a cluster sees resolves as well as the one on disk, and references whose value is templated, whose target kind appears nowhere in the repository, or whose target kind has a name some template computes are all left alone.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"indexFileMatcher","required":false,"description":"Files to index resources from. This is a glob expression, and every YAML file is indexed when it is omitted. Narrowing this manufactures findings: a reference is dangling only when nothing anywhere declares its target.","example":"**/*.yaml"},{"type":"String","name":"fileMatcher","required":false,"description":"Only report references found in matching files. This is a glob expression. The whole repository is indexed either way.","example":"**/overlays/**/*.yaml"},{"type":"Boolean","name":"requireTargetKindPresent","required":false,"description":"Only report a reference when the repository declares at least one resource of the kind being referred to. A repository with no PersistentVolumeClaim in it has its claims satisfied by an operator or an administrator, and reporting them is noise. Default `true`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"indexFileMatcher","value":"null"},{"parameter":"fileMatcher","value":"null"},{"parameter":"requireTargetKindPresent","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: app:1\n        envFrom:\n        - configMapRef:\n            name: app-config\n        - configMapRef:\n            name: missing-config\n","after":"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: app-config\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: app:1\n        envFrom:\n        - configMapRef:\n            name: app-config\n        - configMapRef:\n            name: ~~(no ConfigMap named missing-config)~~>missing-config\n","diff":"@@ -20,1 +20,1 @@\n            name: app-config\n        - configMapRef:\n-           name: missing-config\n+           name: ~~(no ConfigMap named missing-config)~~>missing-config\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindDanglingResourceReferences","displayName":"Find dangling Kubernetes resource references","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.table.DanglingResourceReferences","displayName":"Dangling resource references","description":"References by name to a Kubernetes resource that this repository declares nowhere.","columns":[{"name":"Source path","description":"The path of the file holding the reference."},{"name":"Referrer kind","description":"The `kind` of the resource making the reference."},{"name":"Referrer name","description":"The `metadata.name` of the resource making the reference."},{"name":"Reference field","description":"A slash-delimited path to the reference from the document root, with `*` standing in for a sequence entry."},{"name":"Target kind","description":"The `kind` of the resource being referred to."},{"name":"Target name","description":"The name being referred to."},{"name":"Confidence","description":"`high` when the referring file means in a cluster what it says on disk, `medium` when it is a chart template, a kustomization, or something a kustomization renames, and so renders to something else."},{"name":"Reason","description":"Why the reference is reported, in the terms a reader would use to argue with it."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

