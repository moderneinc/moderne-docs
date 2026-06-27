---
title: "Change Concourse value"
sidebar_label: "Change Concourse value"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Concourse value"}
  description={"Change every value matching the key pattern."}
  fqName={"org.openrewrite.concourse.ChangeValue"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.concourse.ChangeValue"}
  artifact={"org.openrewrite.recipe:rewrite-concourse"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.concourse.ChangeValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/concourse/changevalue.md"}
  moderneOnly
>

<RecipeHeader.Title>Change Concourse value</RecipeHeader.Title>

<RecipeHeader.Description>Change every value matching the key pattern.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"keyPath","required":true,"description":"The key to match and replace.","example":"$.resources[?(@.type == 'git')].source.uri"},{"type":"String","name":"oldValue","required":false,"description":"Only change if the existing value matches.","example":"https://github.com/openrewrite/rewrite0"},{"type":"String","name":"newValue","required":true,"description":"New value to replace the old value with.","example":"git@github.com:openrewrite/rewrite1.git"},{"type":"String","name":"fileMatcher","required":false,"description":"Matching files will be modified. This is a glob expression.","example":"**/pipeline*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"keyPath","value":"$.resources[?(@.type == 'git')].source.uri"},{"parameter":"oldValue","value":"https://github.com/openrewrite/rewrite0"},{"parameter":"newValue","value":"git@github.com:openrewrite/rewrite1.git"},{"parameter":"fileMatcher","value":"null"}],"variants":[{"language":"yaml","before":"resources:\n- name: git-repo\n  type: git\n  source:\n    uri: https://github.com/openrewrite/rewrite0\n- name: custom\n  type: custom-type\n  source:\n    uri: https://github.com/openrewrite/rewrite0\n","after":"resources:\n- name: git-repo\n  type: git\n  source:\n    uri: git@github.com:openrewrite/rewrite1.git\n- name: custom\n  type: custom-type\n  source:\n    uri: https://github.com/openrewrite/rewrite0\n","diff":"@@ -5,1 +5,1 @@\n  type: git\n  source:\n-   uri: https://github.com/openrewrite/rewrite0\n+   uri: git@github.com:openrewrite/rewrite1.git\n- name: custom\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.concourse.ChangeValue","displayName":"Change Concourse value","groupId":"org.openrewrite.recipe","artifactId":"rewrite-concourse","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CONCOURSE","requiresConfiguration":true,"cliOptions":" --recipe-option \"keyPath=$.resources[?(@.type == 'git')].source.uri\" --recipe-option \"oldValue=https://github.com/openrewrite/rewrite0\" --recipe-option \"newValue=git@github.com:openrewrite/rewrite1.git\" --recipe-option \"fileMatcher='**/pipeline*.yml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

