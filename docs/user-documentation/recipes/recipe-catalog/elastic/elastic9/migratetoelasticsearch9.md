---
title: "Migrate from Elasticsearch 8 to 9"
sidebar_label: "Migrate from Elasticsearch 8 to 9"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate from Elasticsearch 8 to 9"}
  description={"This recipe performs a comprehensive migration from Elasticsearch 8 to Elasticsearch 9, addressing breaking changes, API removals, deprecations, and required code modifications."}
  fqName={"io.moderne.elastic.elastic9.MigrateToElasticsearch9"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["elasticsearch","migration"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.elastic.elastic9.MigrateToElasticsearch9"}
  artifact={"io.moderne.recipe:rewrite-elastic"}
  appLink={"https://app.moderne.io/recipes/io.moderne.elastic.elastic9.MigrateToElasticsearch9"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratetoelasticsearch9.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate from Elasticsearch 8 to 9</RecipeHeader.Title>

<RecipeHeader.Description>This recipe performs a comprehensive migration from Elasticsearch 8 to Elasticsearch 9, addressing breaking changes, API removals, deprecations, and required code modifications.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/upgradedependencyversion/"},{"name":"Add Gradle or Maven dependency","href":"/user-documentation/recipes/recipe-catalog/java/dependencies/adddependency/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Change type","href":"/user-documentation/recipes/recipe-catalog/java/changetype/"},{"name":"Rename API fields for Elasticsearch 9","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/renameapifields/"},{"name":"Change numeric field types for Elasticsearch 9","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/changeapinumericfieldtypes/"},{"name":"Use NamedValue parameters instead of Map","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/usenamedvalueparameters/"},{"name":"Migrate script source from String to Script/ScriptSource","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratescriptsource/"},{"name":"Migrate `matchedQueries` from List to Map","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratematchedqueries/"},{"name":"Migrate `SpanTermQuery.value()` from String to FieldValue","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratespantermqueryvalue/"},{"name":"Migrate DenseVectorProperty.elementType from String to DenseVectorElementType enum","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratedensevectorelementtype/"},{"name":"Migrate DenseVectorProperty.similarity from String to DenseVectorSimilarity enum","href":"/user-documentation/recipes/recipe-catalog/elastic/elastic9/migratedensevectorsimilarity/"},{"name":"Add comment to import statement","href":"/user-documentation/recipes/recipe-catalog/java/addcommenttoimport/"},{"name":"Add comment to import statement","href":"/user-documentation/recipes/recipe-catalog/java/addcommenttoimport/"},{"name":"Add comment to import statement","href":"/user-documentation/recipes/recipe-catalog/java/addcommenttoimport/"},{"name":"Add comment to import statement","href":"/user-documentation/recipes/recipe-catalog/java/addcommenttoimport/"},{"name":"Add comment to import statement","href":"/user-documentation/recipes/recipe-catalog/java/addcommenttoimport/"},{"name":"Add comment to import statement","href":"/user-documentation/recipes/recipe-catalog/java/addcommenttoimport/"},{"name":"Add comment to import statement","href":"/user-documentation/recipes/recipe-catalog/java/addcommenttoimport/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.elastic.elastic9.MigrateToElasticsearch9","displayName":"Migrate from Elasticsearch 8 to 9","groupId":"io.moderne.recipe","artifactId":"rewrite-elastic","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_ELASTIC","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

