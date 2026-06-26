---
title: "Migrate to Spring Boot 4.1"
sidebar_label: "Migrate to Spring Boot 4.1"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Spring Boot 4.1"}
  description={"Migrate applications to the latest Spring Boot 4.1 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 4.1."}
  fqName={"io.moderne.java.spring.boot4.UpgradeSpringBoot_4_1"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate to Spring Boot 4.1"}
  description={"Migrate applications to the latest Spring Boot 4.1 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 4.1."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","boot"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.boot4.UpgradeSpringBoot_4_1"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.boot4.UpgradeSpringBoot_4_1"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradespringboot_4_1.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Migrate to Spring Boot 4.0","href":"java/spring/boot4/upgradespringboot_4_0-moderne-edition"},{"name":"Migrate Spring Boot properties to 4.1","href":"java/spring/boot4/springbootproperties_4_1"},{"name":"Migrate `layertools` jarmode to `tools`","href":"java/spring/boot4/migratelayertoolstotools_4_1"},{"name":"Comment out deprecated DevTools LiveReload properties","href":"java/spring/boot4/removedevtoolslivereloadproperties_4_1"},{"name":"Preserve system-proxy defaults on Reactor HTTP client builders","href":"java/spring/boot4/addwithhttpclientdefaultstoreactorbuilders"},{"name":"Simplify null checks on `Optional` `@ConfigurationProperties` parameters","href":"java/spring/boot4/simplifyoptionalconfigurationpropertiesnullchecks"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Upgrade Maven plugin version","href":"maven/upgradepluginversion"},{"name":"Upgrade Maven parent project version","href":"maven/upgradeparentversion"},{"name":"Update a Gradle plugin by id","href":"gradle/plugins/upgradepluginversion"},{"name":"Migrate to Spring Boot 4.1 modular starters","href":"java/spring/boot4/migratetomodularstarters_4_1"},{"name":"Update a Gradle plugin by id","href":"gradle/plugins/upgradepluginversion"},{"name":"Upgrade Maven plugin version","href":"maven/upgradepluginversion"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Sync Gradle ext properties with BOM","href":"gradle/syncgradleextpropertieswithbom"}]} preconditions={[{"name":"Singleton","href":"core/singleton"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.boot4.UpgradeSpringBoot_4_1","displayName":"Migrate to Spring Boot 4.1","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

