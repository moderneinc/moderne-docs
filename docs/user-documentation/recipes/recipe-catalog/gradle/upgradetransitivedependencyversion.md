---
title: "Upgrade transitive Gradle dependencies"
sidebar_label: "Upgrade transitive Gradle dependencies"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/upgradetransitivedependencyversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade transitive Gradle dependencies"}
  description={"Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management."}
  fqName={"org.openrewrite.gradle.UpgradeTransitiveDependencyVersion"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpgradeTransitiveDependencyVersion.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.UpgradeTransitiveDependencyVersion"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.UpgradeTransitiveDependencyVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/upgradetransitivedependencyversion.md"}
>

<RecipeHeader.Title>Upgrade transitive Gradle dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Upgrades the version of a transitive dependency in a Gradle build file. There are many ways to do this in Gradle, so the mechanism for upgrading a transitive dependency must be considered carefully depending on your style of dependency management.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"com.fasterxml.jackson*"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"jackson-module*"},{"type":"String","name":"version","required":false,"description":"An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors). Defaults to `latest.release`.","example":"29.X"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'newVersion' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select Guava 29.0-jre","example":"-jre"},{"type":"String","name":"because","required":false,"description":"The reason for upgrading the transitive dependency. For example, we could be responding to a vulnerability.","example":"CVE-2021-1234"},{"type":"List","name":"onlyForConfigurations","required":false,"description":"A list of configurations to consider during the upgrade. For example, For example using `implementation, runtimeOnly`, we could be responding to a deployable asset vulnerability only (ignoring test scoped vulnerabilities).","example":"implementation, runtimeOnly"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"com.fasterxml*"},{"parameter":"artifactId","value":"jackson-core"},{"parameter":"version","value":"2.12.5"},{"parameter":"versionPattern","value":"null"},{"parameter":"because","value":"CVE-2024-BAD"},{"parameter":"onlyForConfigurations","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n  id 'java'\n}\nrepositories { mavenCentral() }\n\ndependencies {\n    implementation 'org.openrewrite:rewrite-java:7.0.0'\n}\n","after":"plugins {\n  id 'java'\n}\nrepositories { mavenCentral() }\n\ndependencies {\n    constraints {\n        implementation('com.fasterxml.jackson.core:jackson-core:2.12.5') {\n            because 'CVE-2024-BAD'\n        }\n    }\n\n    implementation 'org.openrewrite:rewrite-java:7.0.0'\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -7,0 +7,6 @@\n\ndependencies {\n+   constraints {\n+       implementation('com.fasterxml.jackson.core:jackson-core:2.12.5') {\n+           because 'CVE-2024-BAD'\n+       }\n+   }\n+\n    implementation 'org.openrewrite:rewrite-java:7.0.0'\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.UpgradeTransitiveDependencyVersion","displayName":"Upgrade transitive Gradle dependencies","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=com.fasterxml.jackson*\" --recipe-option \"artifactId=jackson-module*\" --recipe-option \"version=29.X\" --recipe-option \"versionPattern='-jre'\" --recipe-option \"because=CVE-2021-1234\" --recipe-option \"onlyForConfigurations=implementation, runtimeOnly\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

