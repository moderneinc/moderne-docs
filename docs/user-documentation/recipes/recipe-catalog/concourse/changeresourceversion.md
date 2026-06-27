---
title: "Change resource version"
sidebar_label: "Change resource version"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change resource version"}
  description={"Pin or unpin a resource to a particular version."}
  fqName={"org.openrewrite.concourse.ChangeResourceVersion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.concourse.ChangeResourceVersion"}
  artifact={"org.openrewrite.recipe:rewrite-concourse"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.concourse.ChangeResourceVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/concourse/changeresourceversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Change resource version</RecipeHeader.Title>

<RecipeHeader.Description>Pin or unpin a resource to a particular version.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"resourceType","required":true,"description":"Update any resources of this type","example":"git"},{"type":"String","name":"version","required":false,"description":"If less than this version, update. If not provided, clears pins.","example":"2.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"resourceType","value":"git"},{"parameter":"version","value":"2.0"}],"variants":[{"language":"yaml","before":"resources:\n  - name: git-repo\n    type: git\n    version: 1.0\n  - name: git-repo2\n    type: git\n    version: 2.0\n  - name: git-repo3\n    type: git\n","after":"resources:\n  - name: git-repo\n    type: git\n    version: 2.0\n  - name: git-repo2\n    type: git\n    version: 2.0\n  - name: git-repo3\n    type: git\n    version: 2.0\n","diff":"@@ -4,1 +4,1 @@\n  - name: git-repo\n    type: git\n-   version: 1.0\n+   version: 2.0\n  - name: git-repo2\n@@ -10,0 +10,1 @@\n  - name: git-repo3\n    type: git\n+   version: 2.0\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.concourse.ChangeResourceVersion","displayName":"Change resource version","groupId":"org.openrewrite.recipe","artifactId":"rewrite-concourse","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CONCOURSE","requiresConfiguration":true,"cliOptions":" --recipe-option \"resourceType=git\" --recipe-option \"version=2.0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

