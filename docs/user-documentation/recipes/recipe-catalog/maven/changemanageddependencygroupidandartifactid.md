---
title: "Change Maven managed dependency groupId, artifactId and optionally the version"
sidebar_label: "Change Maven managed dependency groupId, artifactId and optionally the version"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/changemanageddependencygroupidandartifactid" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Maven managed dependency groupId, artifactId and optionally the version"}
  description={"Change the groupId, artifactId and optionally the version of a specified Maven managed dependency."}
  fqName={"org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangeManagedDependencyGroupIdAndArtifactId.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/changemanageddependencygroupidandartifactid.md"}
>

<RecipeHeader.Title>Change Maven managed dependency groupId, artifactId and optionally the version</RecipeHeader.Title>

<RecipeHeader.Description>Change the groupId, artifactId and optionally the version of a specified Maven managed dependency.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldGroupId","required":true,"description":"The old groupId to replace. The groupId is the first part of a managed dependency coordinate `com.google.guava:guava:VERSION`. Supports glob expressions.","example":"org.openrewrite.recipe"},{"type":"String","name":"oldArtifactId","required":true,"description":"The old artifactId to replace. The artifactId is the second part of a managed dependency coordinate `com.google.guava:guava:VERSION`. Supports glob expressions.","example":"rewrite-testing-frameworks"},{"type":"String","name":"newGroupId","required":false,"description":"The new groupId to use. Defaults to the existing group id.","example":"corp.internal.openrewrite.recipe"},{"type":"String","name":"newArtifactId","required":false,"description":"The new artifactId to use. Defaults to the existing artifact id.","example":"rewrite-testing-frameworks"},{"type":"String","name":"newVersion","required":false,"description":"The new version to use.","example":"2.0.0"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select Guava 29.0-jre","example":"-jre"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldGroupId","value":"javax.activation"},{"parameter":"oldArtifactId","value":"javax.activation-api"},{"parameter":"newGroupId","value":"jakarta.activation"},{"parameter":"newArtifactId","value":"jakarta.activation-api"},{"parameter":"newVersion","value":"2.1.0"}],"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>javax.activation</groupId>\n                <artifactId>javax.activation-api</artifactId>\n                <version>1.2.0</version>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>jakarta.activation</groupId>\n                <artifactId>jakarta.activation-api</artifactId>\n                <version>2.1.0</version>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -9,3 +9,3 @@\n        <dependencies>\n            <dependency>\n-               <groupId>javax.activation</groupId>\n-               <artifactId>javax.activation-api</artifactId>\n-               <version>1.2.0</version>\n+               <groupId>jakarta.activation</groupId>\n+               <artifactId>jakarta.activation-api</artifactId>\n+               <version>2.1.0</version>\n            </dependency>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId","displayName":"Change Maven managed dependency groupId, artifactId and optionally the version","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldGroupId=org.openrewrite.recipe\" --recipe-option \"oldArtifactId=rewrite-testing-frameworks\" --recipe-option \"newGroupId=corp.internal.openrewrite.recipe\" --recipe-option \"newArtifactId=rewrite-testing-frameworks\" --recipe-option \"newVersion=2.0.0\" --recipe-option \"versionPattern='-jre'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

