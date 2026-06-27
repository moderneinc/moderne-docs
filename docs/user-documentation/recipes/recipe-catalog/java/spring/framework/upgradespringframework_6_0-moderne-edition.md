---
title: "Migrate to Spring Framework 6.0 (Moderne Edition)"
sidebar_label: "Migrate to Spring Framework 6.0 (Moderne Edition)"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Spring Framework 6.0"}
  description={"Migrate applications to the latest Spring Framework 6.0 release. Chains through `UpgradeSpringFramework_5_3` (and transitively `_5_0`/`_4_0`/`_3_0`) and layers Spring Integration XML attribute migrations on top of the OSS Spring Framework 6.0 upgrade. The OSS recipe handles the `org.springframework:*` version bump and Jakarta EE 10 package moves; this composite additionally bumps `org.springframework.security:*` to 6.0.x (Spring Security tracks Spring's major) and cleans up Spring Integration XML configurations."}
  fqName={"io.moderne.java.spring.framework.UpgradeSpringFramework_6_0"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["spring","framework"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.spring.framework.UpgradeSpringFramework_6_0"}
  artifact={"io.moderne.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.spring.framework.UpgradeSpringFramework_6_0"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_6_0-moderne-edition.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate to Spring Framework 6.0</RecipeHeader.Title>

<RecipeHeader.Description>Migrate applications to the latest Spring Framework 6.0 release. Chains through `UpgradeSpringFramework_5_3` (and transitively `_5_0`/`_4_0`/`_3_0`) and layers Spring Integration XML attribute migrations on top of the OSS Spring Framework 6.0 upgrade. The OSS recipe handles the `org.springframework:*` version bump and Jakarta EE 10 package moves; this composite additionally bumps `org.springframework.security:*` to 6.0.x (Spring Security tracks Spring's major) and cleans up Spring Integration XML configurations.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Migrate to Spring Framework 5.3","href":"/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_5_3-moderne-edition/"},{"name":"Migrate to Spring Framework 6.0","href":"/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_6_0-community-edition/"},{"name":"Migrate `ListenableFuture` to `CompletableFuture`","href":"/user-documentation/recipes/recipe-catalog/java/spring/framework7/migratelistenablefuture/"},{"name":"Migrate `ResponseEntity#getStatusCodeValue()` to `getStatusCode().value()`","href":"/user-documentation/recipes/recipe-catalog/java/spring/framework7/migrateresponseentitygetstatuscodevaluemethod/"},{"name":"Migrate `AbstractClientHttpResponse` to `ClientHttpResponse`","href":"/user-documentation/recipes/recipe-catalog/java/spring/framework7/migrateabstractclienthttpresponse/"},{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x","href":"/user-documentation/recipes/recipe-catalog/java/spring/integration/migratespringframework6deprecatedintegrationxmlattributes/"}]} preconditions={[{"name":"Singleton","href":"/user-documentation/recipes/recipe-catalog/core/singleton/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.java.spring.framework.UpgradeSpringFramework_6_0","displayName":"Migrate to Spring Framework 6.0","groupId":"io.moderne.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING","requiresConfiguration":false,"useFullyQualifiedCliName":true}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

