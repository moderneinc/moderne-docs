---
title: "Upgrade group, artifact ID and version of an artifactItem, of a maven plugin execution configuration"
sidebar_label: "Upgrade group, artifact ID and version of an artifactItem, of a maven plugin execution configuration"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/oracle/weblogic/rewrite/jakarta/upgrademavenpluginartifactitems" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade group, artifact ID and version of an artifactItem, of a maven plugin execution configuration"}
  description={"Change the groupId and the artifactId of an artifactItem in the configuration section of a plugin's execution. This recipe does not perform any validation and assumes all values passed are valid."}
  fqName={"com.oracle.weblogic.rewrite.jakarta.UpgradeMavenPluginArtifactItems"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=com.oracle.weblogic.rewrite.jakarta.UpgradeMavenPluginArtifactItems"}
/>

<RecipeHeader
  displayName={"Upgrade group, artifact ID and version of an artifactItem, of a maven plugin execution configuration"}
  description={"Change the groupId and the artifactId of an artifactItem in the configuration section of a plugin's execution. This recipe does not perform any validation and assumes all values passed are valid."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"com.oracle.weblogic.rewrite.jakarta.UpgradeMavenPluginArtifactItems"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/com.oracle.weblogic.rewrite.jakarta.UpgradeMavenPluginArtifactItems"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/jakarta/upgrademavenpluginartifactitems.md"}
/>

<OptionsTable options={[{"type":"String","name":"oldGroupId","required":true,"description":"The old group ID to replace.","example":"javax"},{"type":"String","name":"oldArtifactId","required":true,"description":"The old artifact ID to replace.","example":"javax"},{"type":"String","name":"newGroupId","required":true,"description":"The new group ID to use.","example":"jakarta.platform"},{"type":"String","name":"newArtifactId","required":true,"description":"The new artifact ID to use.","example":"javaee-api"},{"type":"String","name":"newVersion","required":false,"description":"An exact version number.","example":"9.1"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"com.oracle.weblogic.rewrite.jakarta.UpgradeMavenPluginArtifactItems","displayName":"Upgrade group, artifact ID and version of an artifactItem, of a maven plugin execution configuration","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldGroupId=javax\" --recipe-option \"oldArtifactId=javax\" --recipe-option \"newGroupId=jakarta.platform\" --recipe-option \"newArtifactId=javaee-api\" --recipe-option \"newVersion=9.1\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

