---
title: "Update git resource `source.uri` references"
sidebar_label: "Update git resource `source.uri` references"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update git resource `source.uri` references"}
  description={"Update git resource `source.uri` URI values to point to a new URI value."}
  fqName={"org.openrewrite.concourse.UpdateGitResourceUri"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Update git resource `source.uri` references"}
  description={"Update git resource `source.uri` URI values to point to a new URI value."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.concourse.UpdateGitResourceUri"}
  artifact={"org.openrewrite.recipe:rewrite-concourse"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.concourse.UpdateGitResourceUri"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/concourse/updategitresourceuri.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Change Concourse value","href":"concourse/changevalue"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"oldURIPattern","required":false,"description":"The old URI value to replace. This can be a regex pattern. If left empty, replace all occurrences.","example":"https://github.com/openrewrite/rewrite"},{"type":"String","name":"newURI","required":true,"description":"New URI value to replace the old URI value with.","example":"git@gitlab.com:openrewrite/rewrite.git"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pipeline*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldURIPattern","value":"https://github.com/openrewrite/rewrite0"},{"parameter":"newURI","value":"git@github.com:openrewrite/rewrite1.git"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"resources:\n- name: git-repo\n  type: git\n  source:\n    uri: https://github.com/openrewrite/rewrite0\n- name: custom\n  type: custom-type\n  source:\n    uri: https://github.com/openrewrite/rewrite0\n","after":"resources:\n- name: git-repo\n  type: git\n  source:\n    uri: git@github.com:openrewrite/rewrite1.git\n- name: custom\n  type: custom-type\n  source:\n    uri: https://github.com/openrewrite/rewrite0\n","diff":"@@ -5,1 +5,1 @@\n  type: git\n  source:\n-   uri: https://github.com/openrewrite/rewrite0\n+   uri: git@github.com:openrewrite/rewrite1.git\n- name: custom\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.concourse.UpdateGitResourceUri","displayName":"Update git resource `source.uri` references","groupId":"org.openrewrite.recipe","artifactId":"rewrite-concourse","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CONCOURSE","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldURIPattern=https://github.com/openrewrite/rewrite\" --recipe-option \"newURI=git@gitlab.com:openrewrite/rewrite.git\" --recipe-option \"fileMatcher='**/pipeline*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

