---
title: "Upgrade Gradle or Maven dependency versions"
sidebar_label: "Upgrade Gradle or Maven dependency versions"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/upgradedependencyversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Gradle or Maven dependency versions"}
  description={"For Gradle projects, upgrade the version of a dependency in a `build.gradle` file. Supports updating dependency declarations of various forms:\n * `String` notation: `\"group:artifact:version\"` \n * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`\nIt is possible to update version numbers which are defined earlier in the same file in variable declarations.\n\nFor Maven projects, upgrade the version of a dependency by specifying a group ID and (optionally) an artifact ID using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases."}
  fqName={"org.openrewrite.java.dependencies.UpgradeDependencyVersion"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/UpgradeDependencyVersion.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.UpgradeDependencyVersion"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.UpgradeDependencyVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion.md"}
>

<RecipeHeader.Title>Upgrade Gradle or Maven dependency versions</RecipeHeader.Title>

<RecipeHeader.Description>

For Gradle projects, upgrade the version of a dependency in a `build.gradle` file. Supports updating dependency declarations of various forms:
 * `String` notation: `"group:artifact:version"` 
 * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
It is possible to update version numbers which are defined earlier in the same file in variable declarations.

For Maven projects, upgrade the version of a dependency by specifying a group ID and (optionally) an artifact ID using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases.

</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"com.fasterxml.jackson*"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression.","example":"jackson-module*"},{"type":"String","name":"newVersion","required":true,"description":"An exact version number or node-style semver selector used to select the version number. ","example":"29.X"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select Guava 29.0-jre","example":"-jre"},{"type":"Boolean","name":"overrideManagedVersion","required":false,"description":"For Maven project only, This flag can be set to explicitly override a managed dependency's version. The default for this flag is `false`."},{"type":"List","name":"retainVersions","required":false,"description":"For Maven project only, accepts a list of GAVs. For each GAV, if it is a project direct dependency, and it is removed from dependency management after the changes from this recipe, then it will be retained with an explicit version. The version can be omitted from the GAV to use the old value from dependency management.","example":"com.jcraft:jsch"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupId","value":"com.google.guava"},{"parameter":"artifactId","value":"guava"},{"parameter":"newVersion","value":"30.x"},{"parameter":"versionPattern","value":"-jre"},{"parameter":"overrideManagedVersion","value":"null"},{"parameter":"retainVersions","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n  id 'java-library'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  compileOnly 'com.google.guava:guava:29.0-jre'\n  runtimeOnly ('com.google.guava:guava:29.0-jre')\n}\n","after":"plugins {\n  id 'java-library'\n}\n\nrepositories {\n  mavenCentral()\n}\n\ndependencies {\n  compileOnly 'com.google.guava:guava:30.1.1-jre'\n  runtimeOnly ('com.google.guava:guava:30.1.1-jre')\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -10,2 +10,2 @@\n\ndependencies {\n- compileOnly 'com.google.guava:guava:29.0-jre'\n- runtimeOnly ('com.google.guava:guava:29.0-jre')\n+ compileOnly 'com.google.guava:guava:30.1.1-jre'\n+ runtimeOnly ('com.google.guava:guava:30.1.1-jre')\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.UpgradeDependencyVersion","displayName":"Upgrade Gradle or Maven dependency versions","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=com.fasterxml.jackson*\" --recipe-option \"artifactId=jackson-module*\" --recipe-option \"newVersion=29.X\" --recipe-option \"versionPattern='-jre'\" --recipe-option \"retainVersions=com.jcraft:jsch\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

