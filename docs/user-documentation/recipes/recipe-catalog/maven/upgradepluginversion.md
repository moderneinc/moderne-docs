---
title: "Upgrade Maven plugin version"
sidebar_label: "Upgrade Maven plugin version"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/upgradepluginversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Maven plugin version"}
  description={"Upgrade the version of a plugin using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases."}
  fqName={"org.openrewrite.maven.UpgradePluginVersion"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/UpgradePluginVersion.java"}
/>

<RecipeHeader
  displayName={"Upgrade Maven plugin version"}
  description={"Upgrade the version of a plugin using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.UpgradePluginVersion"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.UpgradePluginVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/upgradepluginversion.md"}
/>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. Supports globs.","example":"org.openrewrite.maven"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. Supports globs.","example":"rewrite-maven-plugin"},{"type":"String","name":"newVersion","required":true,"description":"An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors)","example":"29.X"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select Guava 29.0-jre","example":"-jre"},{"type":"Boolean","name":"trustParent","required":false,"description":"Even if the parent suggests a version that is older than what we are trying to upgrade to, trust it anyway. Useful when you want to wait for the parent to catch up before upgrading. The parent is not trusted by default."},{"type":"Boolean","name":"addVersionIfMissing","required":false,"description":"If the plugin is missing a version, add the latest release. Defaults to false."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"io.quarkus"},{"parameter":"artifactId","value":"quarkus-maven-plugin"},{"parameter":"newVersion","value":"1.13.5.Final"},{"parameter":"versionPattern","value":"null"},{"parameter":"trustParent","value":"null"},{"parameter":"addVersionIfMissing","value":"null"}],"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>org.openrewrite.example</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>io.quarkus</groupId>\n        <artifactId>quarkus-maven-plugin</artifactId>\n        <version>1.13.3.Final</version>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>org.openrewrite.example</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>io.quarkus</groupId>\n        <artifactId>quarkus-maven-plugin</artifactId>\n        <version>1.13.5.Final</version>\n      </plugin>\n    </plugins>\n  </build>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -13,1 +13,1 @@\n        <groupId>io.quarkus</groupId>\n        <artifactId>quarkus-maven-plugin</artifactId>\n-       <version>1.13.3.Final</version>\n+       <version>1.13.5.Final</version>\n      </plugin>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.UpgradePluginVersion","displayName":"Upgrade Maven plugin version","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=org.openrewrite.maven\" --recipe-option \"artifactId=rewrite-maven-plugin\" --recipe-option \"newVersion=29.X\" --recipe-option \"versionPattern='-jre'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

