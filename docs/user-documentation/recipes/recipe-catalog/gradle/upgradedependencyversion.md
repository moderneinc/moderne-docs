---
title: "Upgrade Gradle dependency versions"
sidebar_label: "Upgrade Gradle dependency versions"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/upgradedependencyversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Gradle dependency versions"}
  description={"Upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:\n * `String` notation: `\"group:artifact:version\"` \n * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`\nCan update version numbers which are defined earlier in the same file in variable declarations."}
  fqName={"org.openrewrite.gradle.UpgradeDependencyVersion"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpgradeDependencyVersion.java"}
/>

<RecipeHeader
  displayName={"Upgrade Gradle dependency versions"}
  description={"Upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:\n * `String` notation: `\"group:artifact:version\"` \n * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`\nCan update version numbers which are defined earlier in the same file in variable declarations."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.UpgradeDependencyVersion"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.UpgradeDependencyVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/upgradedependencyversion.md"}
/>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"com.fasterxml.jackson*"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"jackson-module*"},{"type":"String","name":"newVersion","required":false,"description":"An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors). Defaults to `latest.release`.","example":"29.X"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'newVersion' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select Guava 29.0-jre","example":"-jre"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"com.fasterxml.jackson.core"},{"parameter":"artifactId","value":"jackson-*"},{"parameter":"newVersion","value":"2.17.0"},{"parameter":"versionPattern","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n  id 'java-library'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  implementation(\n    'com.fasterxml.jackson.core:jackson-databind:2.11.0',\n    'com.google.guava:guava:29.0-jre',\n    'com.fasterxml.jackson.core:jackson-core:2.11.0')\n}\n","after":"plugins {\n  id 'java-library'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  implementation(\n    'com.fasterxml.jackson.core:jackson-databind:2.17.0',\n    'com.google.guava:guava:29.0-jre',\n    'com.fasterxml.jackson.core:jackson-core:2.17.0')\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -11,1 +11,1 @@\ndependencies {\n  implementation(\n-   'com.fasterxml.jackson.core:jackson-databind:2.11.0',\n+   'com.fasterxml.jackson.core:jackson-databind:2.17.0',\n    'com.google.guava:guava:29.0-jre',\n@@ -13,1 +13,1 @@\n    'com.fasterxml.jackson.core:jackson-databind:2.11.0',\n    'com.google.guava:guava:29.0-jre',\n-   'com.fasterxml.jackson.core:jackson-core:2.11.0')\n+   'com.fasterxml.jackson.core:jackson-core:2.17.0')\n}\n","newFile":false}]},{"parameters":[{"parameter":"groupId","value":"com.google.guava"},{"parameter":"artifactId","value":"guava"},{"parameter":"newVersion","value":"30.x"},{"parameter":"versionPattern","value":"-jre"}],"variants":[{"language":"groovy","before":"plugins {\n  id 'java-library'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  compileOnly 'com.google.guava:guava:29.0-jre'\n  runtimeOnly ('com.google.guava:guava:29.0-jre')\n}\n","after":"plugins {\n  id 'java-library'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  compileOnly 'com.google.guava:guava:30.1.1-jre'\n  runtimeOnly ('com.google.guava:guava:30.1.1-jre')\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -10,2 +10,2 @@\n\ndependencies {\n- compileOnly 'com.google.guava:guava:29.0-jre'\n- runtimeOnly ('com.google.guava:guava:29.0-jre')\n+ compileOnly 'com.google.guava:guava:30.1.1-jre'\n+ runtimeOnly ('com.google.guava:guava:30.1.1-jre')\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.UpgradeDependencyVersion","displayName":"Upgrade Gradle dependency versions","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=com.fasterxml.jackson*\" --recipe-option \"artifactId=jackson-module*\" --recipe-option \"newVersion=29.X\" --recipe-option \"versionPattern='-jre'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

