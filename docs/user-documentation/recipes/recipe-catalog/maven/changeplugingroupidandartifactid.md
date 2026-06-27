---
title: "Change Maven plugin group and artifact ID"
sidebar_label: "Change Maven plugin group and artifact ID"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/changeplugingroupidandartifactid" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Maven plugin group and artifact ID"}
  description={"Change the groupId and/or the artifactId of a specified Maven plugin. Optionally update the plugin version. This recipe does not perform any validation and assumes all values passed are valid."}
  fqName={"org.openrewrite.maven.ChangePluginGroupIdAndArtifactId"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePluginGroupIdAndArtifactId.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.ChangePluginGroupIdAndArtifactId"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.ChangePluginGroupIdAndArtifactId"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/changeplugingroupidandartifactid.md"}
>

<RecipeHeader.Title>Change Maven plugin group and artifact ID</RecipeHeader.Title>

<RecipeHeader.Description>Change the groupId and/or the artifactId of a specified Maven plugin. Optionally update the plugin version. This recipe does not perform any validation and assumes all values passed are valid.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldGroupId","required":true,"description":"The old group ID to replace. The group ID is the first part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions.","example":"org.openrewrite.recipe"},{"type":"String","name":"oldArtifactId","required":true,"description":"The old artifactId to replace. The artifact ID is the second part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions.","example":"my-deprecated-maven-plugin"},{"type":"String","name":"newGroupId","required":false,"description":"The new group ID to use.","example":"corp.internal.openrewrite.recipe"},{"type":"String","name":"newArtifactId","required":false,"description":"The new artifact ID to use.","example":"my-new-maven-plugin"},{"type":"String","name":"newVersion","required":false,"description":"An exact version number.","example":"29.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldGroupId","value":"io.quarkus"},{"parameter":"oldArtifactId","value":"quarkus-bootstrap-maven-plugin"},{"parameter":"newGroupId","value":"null"},{"parameter":"newArtifactId","value":"quarkus-extension-maven-plugin"},{"parameter":"newVersion","value":"null"}],"variants":[{"language":"xml","before":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>io.quarkus</groupId>\n                <artifactId>quarkus-bootstrap-maven-plugin</artifactId>\n                <version>3.0.0.Beta1</version>\n            </plugin>\n        </plugins>\n    </build>\n    <profiles>\n        <profile>\n            <id>profile</id>\n            <build>\n                <plugins>\n                    <plugin>\n                        <groupId>io.quarkus</groupId>\n                        <artifactId>quarkus-bootstrap-maven-plugin</artifactId>\n                        <version>3.0.0.Beta1</version>\n                    </plugin>\n                </plugins>\n            </build>\n        </profile>\n    </profiles>\n</project>\n","after":"<project>\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.mycompany.app</groupId>\n    <artifactId>my-app</artifactId>\n    <version>1</version>\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>io.quarkus</groupId>\n                <artifactId>quarkus-extension-maven-plugin</artifactId>\n                <version>3.0.0.Beta1</version>\n            </plugin>\n        </plugins>\n    </build>\n    <profiles>\n        <profile>\n            <id>profile</id>\n            <build>\n                <plugins>\n                    <plugin>\n                        <groupId>io.quarkus</groupId>\n                        <artifactId>quarkus-extension-maven-plugin</artifactId>\n                        <version>3.0.0.Beta1</version>\n                    </plugin>\n                </plugins>\n            </build>\n        </profile>\n    </profiles>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -10,1 +10,1 @@\n            <plugin>\n                <groupId>io.quarkus</groupId>\n-               <artifactId>quarkus-bootstrap-maven-plugin</artifactId>\n+               <artifactId>quarkus-extension-maven-plugin</artifactId>\n                <version>3.0.0.Beta1</version>\n@@ -22,1 +22,1 @@\n                    <plugin>\n                        <groupId>io.quarkus</groupId>\n-                       <artifactId>quarkus-bootstrap-maven-plugin</artifactId>\n+                       <artifactId>quarkus-extension-maven-plugin</artifactId>\n                        <version>3.0.0.Beta1</version>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.ChangePluginGroupIdAndArtifactId","displayName":"Change Maven plugin group and artifact ID","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldGroupId=org.openrewrite.recipe\" --recipe-option \"oldArtifactId=my-deprecated-maven-plugin\" --recipe-option \"newGroupId=corp.internal.openrewrite.recipe\" --recipe-option \"newArtifactId=my-new-maven-plugin\" --recipe-option \"newVersion=29.0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

