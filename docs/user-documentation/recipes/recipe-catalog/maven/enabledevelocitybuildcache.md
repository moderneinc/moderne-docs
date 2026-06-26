---
title: "Enable Develocity build cache"
sidebar_label: "Enable Develocity build cache"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/enabledevelocitybuildcache" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Enable Develocity build cache"}
  description={"Add Develocity build cache configuration to any `.mvn/` Develocity configuration file that lack existing configuration."}
  fqName={"org.openrewrite.maven.EnableDevelocityBuildCache"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/EnableDevelocityBuildCache.java"}
/>

<RecipeHeader
  displayName={"Enable Develocity build cache"}
  description={"Add Develocity build cache configuration to any `.mvn/` Develocity configuration file that lack existing configuration."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.EnableDevelocityBuildCache"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.EnableDevelocityBuildCache"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/enabledevelocitybuildcache.md"}
/>

<OptionsTable options={[{"type":"String","name":"localEnabled","required":false,"description":"Value for `//develocity/buildCache/local/enabled`.","example":"true"},{"type":"String","name":"remoteEnabled","required":false,"description":"Value for `//develocity/buildCache/remote/enabled`.","example":"true"},{"type":"String","name":"remoteStoreEnabled","required":false,"description":"Value for `//develocity/buildCache/remote/storeEnabled`.","example":"#{isTrue(env['CI'])}"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"localEnabled","value":"true"},{"parameter":"remoteEnabled","value":"true"},{"parameter":"remoteStoreEnabled","value":"#{isTrue(env['CI'])}"}],"variants":[{"language":"xml","before":"<develocity>\n</develocity>\n","after":"<develocity>\n  <buildCache>\n    <local>\n      <enabled>true</enabled>\n    </local>\n    <remote>\n      <enabled>true</enabled>\n      <storeEnabled>#{isTrue(env['CI'])}</storeEnabled>\n    </remote>\n  </buildCache>\n</develocity>\n","diff":"--- .mvn/develocity.xml\n+++ .mvn/develocity.xml\n@@ -2,0 +2,9 @@\n<develocity>\n+ <buildCache>\n+   <local>\n+     <enabled>true</enabled>\n+   </local>\n+   <remote>\n+     <enabled>true</enabled>\n+     <storeEnabled>#{isTrue(env['CI'])}</storeEnabled>\n+   </remote>\n+ </buildCache>\n</develocity>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.EnableDevelocityBuildCache","displayName":"Enable Develocity build cache","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

