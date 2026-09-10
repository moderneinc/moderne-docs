---
title: "Find custom resources using deprecated CRD fields"
sidebar_label: "Find custom resources using deprecated CRD fields"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find custom resources using deprecated CRD fields"}
  description={"Find custom resources that set a field which a CustomResourceDefinition in this repository marks deprecated, or that are on a version the CustomResourceDefinition deprecates. `controller-gen` copies Go doc comments verbatim into a CRD's OpenAPI schema `description`, so a field deprecated in Go ships its own deprecation notice inside the CRD and no per-CRD configuration is needed."}
  fqName={"org.openrewrite.kubernetes.crd.FindCustomResourcesUsingDeprecatedCrdFields"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.crd.FindCustomResourcesUsingDeprecatedCrdFields"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.crd.FindCustomResourcesUsingDeprecatedCrdFields"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/crd/findcustomresourcesusingdeprecatedcrdfields.md"}
  moderneOnly
>

<RecipeHeader.Title>Find custom resources using deprecated CRD fields</RecipeHeader.Title>

<RecipeHeader.Description>Find custom resources that set a field which a CustomResourceDefinition in this repository marks deprecated, or that are on a version the CustomResourceDefinition deprecates. `controller-gen` copies Go doc comments verbatim into a CRD's OpenAPI schema `description`, so a field deprecated in Go ships its own deprecation notice inside the CRD and no per-CRD configuration is needed.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"sensitivity","required":false,"description":"`strict`, the default, recognizes only the Go convention of a description whose line begins with `Deprecated` and a separator. `loose` additionally accepts `is deprecated`, `has been deprecated` and `will be removed in` anywhere in a description, at the cost of reporting prose that merely mentions a deprecation.","example":"loose"},{"type":"String","name":"additionalMarkerPattern","required":false,"description":"A regular expression matched against a property's description in addition to the built-in markers, for house deprecation conventions.","example":"@deprecated"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sensitivity","value":"null"},{"parameter":"additionalMarkerPattern","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: network.schiff.telekom.de/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: legacy\nspec:\n  community: \"1234:5678\"\n---\napiVersion: network.schiff.telekom.de/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: modern\nspec:\n  communities:\n    add: [\"1234:5678\"]\n","after":"apiVersion: network.schiff.telekom.de/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: legacy\nspec:\n  ~~(Deprecated: use Communities instead.)~~>community: \"1234:5678\"\n---\napiVersion: network.schiff.telekom.de/v1alpha1\nkind: VRFRouteConfiguration\nmetadata:\n  name: modern\nspec:\n  communities:\n    add: [\"1234:5678\"]\n","diff":"@@ -6,1 +6,1 @@\n  name: legacy\nspec:\n- community: \"1234:5678\"\n+ ~~(Deprecated: use Communities instead.)~~>community: \"1234:5678\"\n---\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.crd.FindCustomResourcesUsingDeprecatedCrdFields","displayName":"Find custom resources using deprecated CRD fields","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.kubernetes.table.DeprecatedCrdFieldUsages","displayName":"Deprecated CRD field usages","description":"Custom resources that use something a CustomResourceDefinition in this repository marks deprecated.","columns":[{"name":"Source path","description":"The path to the custom resource."},{"name":"API version","description":"The `apiVersion` of the custom resource."},{"name":"Kind","description":"The `kind` of the custom resource."},{"name":"Name","description":"The `metadata.name` of the custom resource."},{"name":"Finding","description":"Either `deprecated field` or `deprecated version`."},{"name":"Field path","description":"A slash-delimited path to the deprecated field, with `*` standing in for a sequence entry. Empty for a deprecated version."},{"name":"Reason","description":"The deprecation notice the CustomResourceDefinition carries, verbatim."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

