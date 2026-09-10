---
title: "Find containers with missing configuration"
sidebar_label: "Find containers with missing configuration"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find containers with missing configuration"}
  description={"Find containers of a Kubernetes workload that are missing a given piece of configuration. Every container is evaluated on its own, so a sidecar that omits the configuration is reported even when the application container next to it sets it."}
  fqName={"org.openrewrite.kubernetes.search.FindContainerMissingConfiguration"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindContainerMissingConfiguration"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindContainerMissingConfiguration"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/findcontainermissingconfiguration.md"}
  moderneOnly
>

<RecipeHeader.Title>Find containers with missing configuration</RecipeHeader.Title>

<RecipeHeader.Description>Find containers of a Kubernetes workload that are missing a given piece of configuration. Every container is evaluated on its own, so a sidecar that omits the configuration is reported even when the application container next to it sets it.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"configurationPath","required":true,"description":"A dot-separated path to configuration expected on every container, relative to the container itself.","example":"resources.limits.cpu"},{"type":"String","name":"resourceKind","required":false,"description":"Only search containers belonging to this kind of workload. This is a glob expression. When omitted, every workload kind that has a pod spec is searched.","example":"Deployment"},{"type":"Set","name":"containerTypes","required":false,"description":"Which container lists to search. Defaults to all of `containers`, `initContainers` and `ephemeralContainers`.","example":"containers"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pod-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"configurationPath","value":"resources.limits.cpu"},{"parameter":"resourceKind","value":"null"},{"parameter":"containerTypes","value":"null"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx:latest\n        resources:\n          limits:\n            cpu: \"1\"\n      - name: sidecar\n        image: envoy:latest\n","after":"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: application\nspec:\n  template:\n    spec:\n      containers:\n      - name: app\n        image: nginx:latest\n        resources:\n          limits:\n            cpu: \"1\"\n      - ~~(missing: resources.limits.cpu)~~>name: sidecar\n        image: envoy:latest\n","diff":"@@ -14,1 +14,1 @@\n          limits:\n            cpu: \"1\"\n-     - name: sidecar\n+     - ~~(missing: resources.limits.cpu)~~>name: sidecar\n        image: envoy:latest\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindContainerMissingConfiguration","displayName":"Find containers with missing configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"configurationPath=resources.limits.cpu\" --recipe-option \"resourceKind=Deployment\" --recipe-option \"containerTypes=containers\" --recipe-option \"fileMatcher='**/pod-*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

