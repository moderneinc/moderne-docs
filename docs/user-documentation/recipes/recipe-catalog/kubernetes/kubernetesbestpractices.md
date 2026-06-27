---
title: "Kubernetes best practices"
sidebar_label: "Kubernetes best practices"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Kubernetes best practices"}
  description={"Applies best practices to Kubernetes manifests."}
  fqName={"org.openrewrite.kubernetes.KubernetesBestPractices"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["kubernetes"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.KubernetesBestPractices"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.KubernetesBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/kubernetesbestpractices.md"}
  moderneOnly
>

<RecipeHeader.Title>Kubernetes best practices</RecipeHeader.Title>

<RecipeHeader.Description>Applies best practices to Kubernetes manifests.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Ensure liveness probe is configured","href":"/user-documentation/recipes/recipe-catalog/kubernetes/missingpodlivenessprobe/"},{"name":"Ensure readiness probe is configured","href":"/user-documentation/recipes/recipe-catalog/kubernetes/missingpodreadinessprobe/"},{"name":"Ensure CPU request is set","href":"/user-documentation/recipes/recipe-catalog/kubernetes/missingcpurequest/"},{"name":"Ensure CPU limits are set","href":"/user-documentation/recipes/recipe-catalog/kubernetes/missingcpulimits/"},{"name":"Ensure memory request is set","href":"/user-documentation/recipes/recipe-catalog/kubernetes/missingmemoryrequest/"},{"name":"Ensure memory limits are set","href":"/user-documentation/recipes/recipe-catalog/kubernetes/missingmemorylimits/"},{"name":"No privileged containers","href":"/user-documentation/recipes/recipe-catalog/kubernetes/noprivilegedcontainers/"},{"name":"Ensure lifecycle rule on `StorageBucket`","href":"/user-documentation/recipes/recipe-catalog/kubernetes/lifecycleruleonstoragebucket/"},{"name":"No host process ID sharing","href":"/user-documentation/recipes/recipe-catalog/kubernetes/nohostprocessidsharing/"},{"name":"No host IPC sharing","href":"/user-documentation/recipes/recipe-catalog/kubernetes/nohostipcsharing/"},{"name":"No root containers","href":"/user-documentation/recipes/recipe-catalog/kubernetes/norootcontainers/"},{"name":"Ensure image pull policy is `Always`","href":"/user-documentation/recipes/recipe-catalog/kubernetes/imagepullpolicyalways/"},{"name":"No privilege escalation","href":"/user-documentation/recipes/recipe-catalog/kubernetes/noprivilegeescalation/"},{"name":"No host network sharing","href":"/user-documentation/recipes/recipe-catalog/kubernetes/nohostnetworksharing/"},{"name":"Read-only root filesystem","href":"/user-documentation/recipes/recipe-catalog/kubernetes/readonlyrootfilesystem/"},{"name":"Limit root capabilities in a container","href":"/user-documentation/recipes/recipe-catalog/kubernetes/limitcontainercapabilities/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.KubernetesBestPractices","displayName":"Kubernetes best practices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

