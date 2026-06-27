---
title: "Install an orb"
sidebar_label: "Install an orb"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Install an orb"}
  description={"Install a CircleCI [orb](https://circleci.com/docs/2.0/orb-intro/) if it is not already installed."}
  fqName={"org.openrewrite.circleci.InstallOrb"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.circleci.InstallOrb"}
  artifact={"org.openrewrite.recipe:rewrite-circleci"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.circleci.InstallOrb"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/circleci/installorb.md"}
  moderneOnly
>

<RecipeHeader.Title>Install an orb</RecipeHeader.Title>

<RecipeHeader.Description>Install a CircleCI [orb](https://circleci.com/docs/2.0/orb-intro/) if it is not already installed.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"orbKey","required":true,"description":"The orb key to be followed by an orb slug identifying a specific orb version.","example":"kube"},{"type":"String","name":"slug","required":true,"description":"A specific orb to install, in the form `<namespace>/<orb-name>@1.2.3`.","example":"circleci/kubernetes@0.11.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"orbKey","value":"java"},{"parameter":"slug","value":"circleci/openjdk:jdk"}],"variants":[{"language":"yaml","before":"version: 2.1\norbs:\n  node: circleci/node@1.0\n","after":"version: 2.1\norbs:\n  node: circleci/node@1.0\n  java: circleci/openjdk:jdk\n","diff":"--- .circleci/config.yml\n+++ .circleci/config.yml\n@@ -4,0 +4,1 @@\norbs:\n  node: circleci/node@1.0\n+ java: circleci/openjdk:jdk\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.circleci.InstallOrb","displayName":"Install an orb","groupId":"org.openrewrite.recipe","artifactId":"rewrite-circleci","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CIRCLECI","requiresConfiguration":true,"cliOptions":" --recipe-option \"orbKey=kube\" --recipe-option \"slug=circleci/kubernetes@0.11.0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

