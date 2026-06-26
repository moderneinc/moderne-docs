---
title: "Migrate to Spring Framework 6.2 for WebLogic 15.1.1"
sidebar_label: "Migrate to Spring Framework 6.2 for WebLogic 15.1.1"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/oracle/weblogic/rewrite/spring/framework/upgradetospringframework_6_2" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Spring Framework 6.2 for WebLogic 15.1.1"}
  description={"Migrate applications to the Spring Framework 6.2 release and compatibility with WebLogic 15.1.1."}
  fqName={"com.oracle.weblogic.rewrite.spring.framework.UpgradeToSpringFramework_6_2"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/search?type=code&q=com.oracle.weblogic.rewrite.spring.framework.UpgradeToSpringFramework_6_2"}
/>

<RecipeHeader
  displayName={"Migrate to Spring Framework 6.2 for WebLogic 15.1.1"}
  description={"Migrate applications to the Spring Framework 6.2 release and compatibility with WebLogic 15.1.1."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["weblogic","springframework"]}
  license={"Apache License Version 2.0"}
  fqName={"com.oracle.weblogic.rewrite.spring.framework.UpgradeToSpringFramework_6_2"}
  artifact={"org.openrewrite.recipe:rewrite-third-party"}
  appLink={"https://app.moderne.io/recipes/com.oracle.weblogic.rewrite.spring.framework.UpgradeToSpringFramework_6_2"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/oracle/weblogic/rewrite/spring/framework/upgradetospringframework_6_2.md"}
/>

<RecipeList recipes={[{"name":"Migrate to Spring Framework 6.1","href":"java/spring/framework/upgradespringframework_6_1"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Update Default Servlet Handler for Spring Framework if empty","href":"oracle/weblogic/rewrite/spring/framework/defaultservlethandler"},{"name":"Replace Removed WebLogicJtaTransactionManager from Spring Framework 5.3.x to 6.2.x","href":"oracle/weblogic/rewrite/spring/framework/replaceweblogicjtatransactionmanager"},{"name":"Replace Removed WebLogicLoadTimeWeaver from Spring Framework 5.3.x to 6.2.x","href":"oracle/weblogic/rewrite/spring/framework/replaceweblogicloadtimeweaver"},{"name":"Upgrade Spring Data BOM to 2024.1.x","href":"oracle/weblogic/rewrite/spring/data/upgradespringdatabom"},{"name":"Upgrade Spring Data JPA to 3.4.6","href":"oracle/weblogic/rewrite/spring/data/upgradespringdatajpa"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"com.oracle.weblogic.rewrite.spring.framework.UpgradeToSpringFramework_6_2","displayName":"Migrate to Spring Framework 6.2 for WebLogic 15.1.1","groupId":"org.openrewrite.recipe","artifactId":"rewrite-third-party","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

