---
title: "Upgrade transitive Gradle or Maven dependencies"
sidebar_label: "Upgrade transitive Gradle or Maven dependencies"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/dependencies/upgradetransitivedependencyversion" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade transitive Gradle or Maven dependencies"}
  description={"Upgrades the version of a transitive dependency in a Maven pom.xml or Gradle build.gradle. Leaves direct dependencies unmodified. Can be paired with the regular Upgrade Dependency Version recipe to upgrade a dependency everywhere, regardless of whether it is direct or transitive."}
  fqName={"org.openrewrite.java.dependencies.UpgradeTransitiveDependencyVersion"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/UpgradeTransitiveDependencyVersion.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.dependencies.UpgradeTransitiveDependencyVersion"}
  artifact={"org.openrewrite.recipe:rewrite-java-dependencies"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.dependencies.UpgradeTransitiveDependencyVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dependencies/upgradetransitivedependencyversion.md"}
>

<RecipeHeader.Title>Upgrade transitive Gradle or Maven dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Upgrades the version of a transitive dependency in a Maven pom.xml or Gradle build.gradle. Leaves direct dependencies unmodified. Can be paired with the regular Upgrade Dependency Version recipe to upgrade a dependency everywhere, regardless of whether it is direct or transitive.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupId","required":true,"description":"The first part of a dependency coordinate 'org.apache.logging.log4j:ARTIFACT_ID:VERSION'.","example":"org.apache.logging.log4j"},{"type":"String","name":"artifactId","required":true,"description":"The second part of a dependency coordinate 'org.apache.logging.log4j:log4j-bom:VERSION'.","example":"log4j-bom"},{"type":"String","name":"version","required":true,"description":"An exact version number or node-style semver selector used to select the version number.","example":"latest.release"},{"type":"String","name":"scope","required":false,"description":"An optional scope to use for the dependency management tag. Relevant only to Maven.","example":"import"},{"type":"String","name":"type","required":false,"description":"An optional type to use for the dependency management tag. Relevant only to Maven builds.","example":"pom"},{"type":"String","name":"classifier","required":false,"description":"An optional classifier to use for the dependency management tag. Relevant only to Maven.","example":"test"},{"type":"String","name":"versionPattern","required":false,"description":"Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to \"25-29\" can be paired with a metadata pattern of \"-jre\" to select 29.0-jre","example":"-jre"},{"type":"String","name":"because","required":false,"description":"The reason for upgrading the transitive dependency. For example, we could be responding to a vulnerability.","example":"CVE-2021-1234"},{"type":"Boolean","name":"releasesOnly","required":false,"description":"Whether to exclude snapshots from consideration when using a semver selector"},{"type":"String","name":"onlyIfUsing","required":false,"description":"Only add managed dependencies to projects having a dependency matching the expression.","example":"org.apache.logging.log4j:log4j*"},{"type":"Boolean","name":"addToRootPom","required":false,"description":"Add to the root pom where root is the eldest parent of the pom within the source set."}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.java.dependencies.UpgradeTransitiveDependencyVersion","displayName":"Upgrade transitive Gradle or Maven dependencies","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-dependencies","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupId=org.apache.logging.log4j\" --recipe-option \"artifactId=log4j-bom\" --recipe-option \"version=latest.release\" --recipe-option \"scope=import\" --recipe-option \"type=pom\" --recipe-option \"classifier=test\" --recipe-option \"versionPattern='-jre'\" --recipe-option \"because=CVE-2021-1234\" --recipe-option \"onlyIfUsing=org.apache.logging.log4j:log4j*\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

