---
title: "Add Kubernetes configuration"
sidebar_label: "Add Kubernetes configuration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add Kubernetes configuration"}
  description={"Add default required configuration when it is missing."}
  fqName={"org.openrewrite.kubernetes.AddConfiguration"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.AddConfiguration"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.AddConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/addconfiguration.md"}
  moderneOnly
>

<RecipeHeader.Title>Add Kubernetes configuration</RecipeHeader.Title>

<RecipeHeader.Description>Add default required configuration when it is missing.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"apiVersion","required":false,"description":"The Kubernetes resource API version to use.","example":"policy/v1beta1"},{"type":"String","name":"resourceKind","required":true,"description":"The Kubernetes resource type the configured is required on.","example":"PodSecurityPolicy"},{"type":"String","name":"configurationPath","required":true,"description":"A JsonPath expression to locate Kubernetes configuration. Must be an absolute path.","example":"$.spec"},{"type":"String","name":"value","required":true,"description":"The configuration that is added when necessary, including the key.","example":"privileged: false"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"apiVersion","value":"null"},{"parameter":"resourceKind","value":"Pod"},{"parameter":"configurationPath","value":"$.spec"},{"parameter":"value","value":"privileged: false"}],"variants":[{"language":"yaml","before":"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n","after":"apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n  privileged: false\n","diff":"@@ -9,0 +9,1 @@\n    - name: nginx\n      image: nginx\n+ privileged: false\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.AddConfiguration","displayName":"Add Kubernetes configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"apiVersion=policy/v1beta1\" --recipe-option \"resourceKind=PodSecurityPolicy\" --recipe-option \"configurationPath=$.spec\" --recipe-option \"value='privileged: false'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

