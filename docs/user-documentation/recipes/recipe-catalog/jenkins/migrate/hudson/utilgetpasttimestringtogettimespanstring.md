---
title: "Replace `hudson.Util.getPastTimeString` with `getTimeSpanString`"
sidebar_label: "Replace `hudson.Util.getPastTimeString` with `getTimeSpanString`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/jenkins/migrate/hudson/utilgetpasttimestringtogettimespanstring" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace `hudson.Util.getPastTimeString` with `getTimeSpanString`"}
  description={"`hudson.Util.getPastTimeString` has been [deprecated](https://github.com/jenkinsci/jenkins/pull/4174) since the [2.204.1 LTS release](https://www.jenkins.io/changelog-stable/#v2.204.1) on 2019-12-18."}
  fqName={"org.openrewrite.jenkins.migrate.hudson.UtilGetPastTimeStringToGetTimeSpanString"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-jenkins/blob/main/src/main/resources/META-INF/rewrite/hudson-migrations.yml"}
/>

<RecipeHeader
  displayName={"Replace `hudson.Util.getPastTimeString` with `getTimeSpanString`"}
  description={"`hudson.Util.getPastTimeString` has been [deprecated](https://github.com/jenkinsci/jenkins/pull/4174) since the [2.204.1 LTS release](https://www.jenkins.io/changelog-stable/#v2.204.1) on 2019-12-18."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.jenkins.migrate.hudson.UtilGetPastTimeStringToGetTimeSpanString"}
  artifact={"org.openrewrite.recipe:rewrite-jenkins"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.jenkins.migrate.hudson.UtilGetPastTimeStringToGetTimeSpanString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/jenkins/migrate/hudson/utilgetpasttimestringtogettimespanstring.md"}
/>

<RecipeList recipes={[{"name":"Change method name","href":"java/changemethodname"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"package org.example;\n\nclass MyConsumer {\n    String format(long timestamp) {\n        return hudson.Util.getPastTimeString(timestamp);\n    }\n}\n","after":"package org.example;\n\nclass MyConsumer {\n    String format(long timestamp) {\n        return hudson.Util.getTimeSpanString(timestamp);\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass MyConsumer {\n    String format(long timestamp) {\n-       return hudson.Util.getPastTimeString(timestamp);\n+       return hudson.Util.getTimeSpanString(timestamp);\n    }\n","newFile":false}]},{"variants":[{"language":"java","before":"package org.example;\n\nclass MyConsumer {\n    String format(long timestamp) {\n        return hudson.Util.getPastTimeString(timestamp);\n    }\n}\n","after":"package org.example;\n\nclass MyConsumer {\n    String format(long timestamp) {\n        return hudson.Util.getTimeSpanString(timestamp);\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass MyConsumer {\n    String format(long timestamp) {\n-       return hudson.Util.getPastTimeString(timestamp);\n+       return hudson.Util.getTimeSpanString(timestamp);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.jenkins.migrate.hudson.UtilGetPastTimeStringToGetTimeSpanString","displayName":"Replace `hudson.Util.getPastTimeString` with `getTimeSpanString`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-jenkins","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JENKINS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

