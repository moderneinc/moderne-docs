---
title: "Upgrade Android Gradle Plugin version"
sidebar_label: "Upgrade Android Gradle Plugin version"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Android Gradle Plugin version"}
  description={"Upgrade the Android Gradle Plugin (AGP) version. Handles both the legacy `buildscript { dependencies { classpath 'com.android.tools.build:gradle:...' } }` form (delegating to the upstream `UpgradeDependencyVersion` recipe for full DSL coverage) and the modern `plugins { id(\"com.android.application\") version \"...\" }` form."}
  fqName={"org.openrewrite.android.UpgradeAndroidGradlePluginVersion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.android.UpgradeAndroidGradlePluginVersion"}
  artifact={"org.openrewrite.recipe:rewrite-android"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.android.UpgradeAndroidGradlePluginVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/android/upgradeandroidgradlepluginversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade Android Gradle Plugin version</RecipeHeader.Title>

<RecipeHeader.Description>Upgrade the Android Gradle Plugin (AGP) version. Handles both the legacy `buildscript { dependencies { classpath 'com.android.tools.build:gradle:...' } }` form (delegating to the upstream `UpgradeDependencyVersion` recipe for full DSL coverage) and the modern `plugins { id("com.android.application") version "..." }` form.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade Gradle dependency versions","href":"/user-documentation/recipes/recipe-catalog/gradle/upgradedependencyversion/"}]}>

## Definition

</RecipeList>

<OptionsTable options={[{"type":"String","name":"newVersion","required":true,"description":"An exact version number or node-style semver selector used to select the version number.","example":"8.5.0"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics.","example":"8.5.0"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"newVersion","value":"8.5.0"},{"parameter":"versionPattern","value":"null"}],"variants":[{"language":"groovy","before":"plugins {\n    id 'com.android.application' version '8.0.0'\n}\n","after":"plugins {\n    id 'com.android.application' version '8.5.0'\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -2,1 +2,1 @@\nplugins {\n-   id 'com.android.application' version '8.0.0'\n+   id 'com.android.application' version '8.5.0'\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.android.UpgradeAndroidGradlePluginVersion","displayName":"Upgrade Android Gradle Plugin version","groupId":"org.openrewrite.recipe","artifactId":"rewrite-android","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ANDROID","requiresConfiguration":true,"cliOptions":" --recipe-option \"newVersion=8.5.0\" --recipe-option \"versionPattern=8.5.0\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

