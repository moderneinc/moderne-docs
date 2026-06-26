---
title: "Find disallowed image tags"
sidebar_label: "Find disallowed image tags"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find disallowed image tags"}
  description={"The set of image tags to find which are considered disallowed."}
  fqName={"org.openrewrite.kubernetes.search.FindDisallowedImageTags"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find disallowed image tags"}
  description={"The set of image tags to find which are considered disallowed."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.kubernetes.search.FindDisallowedImageTags"}
  artifact={"org.openrewrite.recipe:rewrite-kubernetes"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.kubernetes.search.FindDisallowedImageTags"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kubernetes/search/finddisallowedimagetags.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"disallowedTags","required":true,"description":"The set of image tags to find which are considered disallowed. This is a comma-separated list of tags.","example":"latest"},{"type":"boolean","name":"includeInitContainers","required":false,"description":"Boolean to indicate whether or not to treat initContainers/image identically to containers/image.","example":"false"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pod-*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"disallowedTags","value":"latest, dev"},{"parameter":"includeInitContainers","value":"false"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"apiVersion: apps/v1\nkind: Deployment\nspec:\n  template:\n    spec:\n      containers:\n      - image: nginx:latest\n---\napiVersion: apps/v1\nkind: StatefulSet\nspec:\n  template:\n    spec:\n      containers:\n      - image: app:dev\n","after":"apiVersion: apps/v1\nkind: Deployment\nspec:\n  template:\n    spec:\n      containers:\n      - image: ~~(disallowed tag: [latest])~~>nginx:latest\n---\napiVersion: apps/v1\nkind: StatefulSet\nspec:\n  template:\n    spec:\n      containers:\n      - image: ~~(disallowed tag: [dev])~~>app:dev\n","diff":"@@ -7,1 +7,1 @@\n    spec:\n      containers:\n-     - image: nginx:latest\n+     - image: ~~(disallowed tag: [latest])~~>nginx:latest\n---\n@@ -15,1 +15,1 @@\n    spec:\n      containers:\n-     - image: app:dev\n+     - image: ~~(disallowed tag: [dev])~~>app:dev\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.kubernetes.search.FindDisallowedImageTags","displayName":"Find disallowed image tags","groupId":"org.openrewrite.recipe","artifactId":"rewrite-kubernetes","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES","requiresConfiguration":true,"cliOptions":" --recipe-option \"disallowedTags=latest\" --recipe-option \"includeInitContainers=false\" --recipe-option \"fileMatcher='**/pod-*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

