---
title: "Find `apiextensions.k8s.io/v1beta1` CustomResourceDefinitions"
sidebar_label: "Find `apiextensions.k8s.io/v1beta1` CustomResourceDefinitions"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `apiextensions.k8s.io/v1beta1` CustomResourceDefinitions"}
  description={"Find `CustomResourceDefinition` resources still on the `apiextensions.k8s.io/v1beta1` API removed in Kubernetes v1.22. Moving to `apiextensions.k8s.io/v1` is not a version swap: `spec.validation`, `spec.subresources` and `spec.additionalPrinterColumns` move under each entry of `spec.versions`, `spec.version` is dropped in favour of `spec.versions`, a structural schema and an explicit `spec.preserveUnknownFields: false` become mandatory, and `spec.conversion.webhookClientConfig` moves to `spec.conversion.webhook.clientConfig` alongside a required `spec.conversion.webhook.conversionReviewVersions`."}
  fqName={"org.openrewrite.kubernetes.search.FindCustomResourceDefinitionV1beta1"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindCustomResourceDefinitionV1beta1"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindCustomResourceDefinitionV1beta1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findcustomresourcedefinitionv1beta1.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `apiextensions.k8s.io/v1beta1` CustomResourceDefinitions</RecipeHeader.Title>

<RecipeHeader.Description>Find `CustomResourceDefinition` resources still on the `apiextensions.k8s.io/v1beta1` API removed in Kubernetes v1.22. Moving to `apiextensions.k8s.io/v1` is not a version swap: `spec.validation`, `spec.subresources` and `spec.additionalPrinterColumns` move under each entry of `spec.versions`, `spec.version` is dropped in favour of `spec.versions`, a structural schema and an explicit `spec.preserveUnknownFields: false` become mandatory, and `spec.conversion.webhookClientConfig` moves to `spec.conversion.webhook.clientConfig` alongside a required `spec.conversion.webhook.conversionReviewVersions`.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/crd-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\nmetadata:\n  name: crontabs.stable.example.com\nspec:\n  group: stable.example.com\n  version: v1\n  validation:\n    openAPIV3Schema:\n      type: object\n---\napiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: widgets.stable.example.com\n","after":"~~(CustomResourceDefinition schemas move under spec.versions in apiextensions.k8s.io/v1)~~>apiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\nmetadata:\n  name: crontabs.stable.example.com\nspec:\n  group: stable.example.com\n  version: v1\n  validation:\n    openAPIV3Schema:\n      type: object\n---\napiVersion: apiextensions.k8s.io/v1\nkind: CustomResourceDefinition\nmetadata:\n  name: widgets.stable.example.com\n","diff":"@@ -1,1 +1,1 @@\n-apiVersion: apiextensions.k8s.io/v1beta1\n+~~(CustomResourceDefinition schemas move under spec.versions in apiextensions.k8s.io/v1)~~>apiVersion: apiextensions.k8s.io/v1beta1\nkind: CustomResourceDefinition\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindCustomResourceDefinitionV1beta1","displayName":"Find `apiextensions.k8s.io/v1beta1` CustomResourceDefinitions","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

