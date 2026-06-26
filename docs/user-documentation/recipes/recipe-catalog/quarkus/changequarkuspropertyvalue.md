---
title: "Change Quarkus configuration property value"
sidebar_label: "Change Quarkus configuration property value"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/quarkus/changequarkuspropertyvalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Quarkus configuration property value"}
  description={"Change the value of a property in Quarkus configuration files."}
  fqName={"org.openrewrite.quarkus.ChangeQuarkusPropertyValue"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/java/org/openrewrite/quarkus/ChangeQuarkusPropertyValue.java"}
/>

<RecipeHeader
  displayName={"Change Quarkus configuration property value"}
  description={"Change the value of a property in Quarkus configuration files."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.quarkus.ChangeQuarkusPropertyValue"}
  artifact={"org.openrewrite.recipe:rewrite-quarkus"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.quarkus.ChangeQuarkusPropertyValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/quarkus/changequarkuspropertyvalue.md"}
/>

<OptionsTable options={[{"type":"String","name":"propertyKey","required":true,"description":"The name of the property key whose value is to be changed. Supports regex.","example":"quarkus.hibernate-search-orm.indexing.plan.synchronization.strategy"},{"type":"String","name":"newValue","required":true,"description":"The new value to be used for key specified by `propertyKey`.","example":"read-sync"},{"type":"String","name":"oldValue","required":false,"description":"Only change the property value if it matches the configured `oldValue`.","example":"read-sync"},{"type":"String","name":"profile","required":false,"description":"The profile where the property is defined. If not specified, the property will be changed on all profiles by default.","example":"dev"},{"type":"Boolean","name":"changeAllProfiles","required":false,"description":"If set to true, the property value will be changed on all available profiles. Defaults to `true` if a profile is not defined.","example":"false"},{"type":"List","name":"pathExpressions","required":false,"description":"Each value in this list represents a glob expression that is used to match which files will be modified. If this value is not present, this recipe will query the execution context for reasonable defaults. (\"**/application.yml\", \"**/application.yaml\", \"**/application.properties\" and \"**/META-INF/microprofile-config.properties\".","example":"[\"**/application.yaml\"]"}]}>

## Options

</OptionsTable>

<UsageList usage={{"recipeName":"org.openrewrite.quarkus.ChangeQuarkusPropertyValue","displayName":"Change Quarkus configuration property value","groupId":"org.openrewrite.recipe","artifactId":"rewrite-quarkus","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS","requiresConfiguration":true,"cliOptions":" --recipe-option \"propertyKey=quarkus.hibernate-search-orm.indexing.plan.synchronization.strategy\" --recipe-option \"newValue=read-sync\" --recipe-option \"oldValue=read-sync\" --recipe-option \"profile=dev\" --recipe-option \"changeAllProfiles=false\" --recipe-option \"pathExpressions=[\"**/application.yaml\"]\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

