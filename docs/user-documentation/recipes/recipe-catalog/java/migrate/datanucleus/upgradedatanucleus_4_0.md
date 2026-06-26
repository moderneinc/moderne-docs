---
title: "Migrate to DataNucleus 4.0"
sidebar_label: "Migrate to DataNucleus 4.0"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/migrate/datanucleus/upgradedatanucleus_4_0" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to DataNucleus 4.0"}
  description={"Migrate DataNucleus 3.x applications to 4.0. This recipe handles package relocations, type renames, property key changes, and dependency updates introduced in AccessPlatform 4.0."}
  fqName={"org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_4_0"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/datanucleus-4.0.yml"}
/>

<RecipeHeader
  displayName={"Migrate to DataNucleus 4.0"}
  description={"Migrate DataNucleus 3.x applications to 4.0. This recipe handles package relocations, type renames, property key changes, and dependency updates introduced in AccessPlatform 4.0."}
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["datanucleus","jdo","jpa"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_4_0"}
  artifact={"org.openrewrite.recipe:rewrite-migrate-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_4_0"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/migrate/datanucleus/upgradedatanucleus_4_0.md"}
/>

<RecipeList recipes={[{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Remove a Gradle or Maven dependency","href":"java/dependencies/removedependency"},{"name":"DataNucleus 4.0 package moves","href":"java/migrate/datanucleus/datanucleuspackagemoves_4_0"},{"name":"DataNucleus 4.0 type changes","href":"java/migrate/datanucleus/datanucleustypechanges_4_0"},{"name":"DataNucleus 4.0 property migrations","href":"java/migrate/datanucleus/datanucleusproperties_4_0"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"properties","before":"datanucleus.autoCreateSchema=true\ndatanucleus.autoCreateTables=true\ndatanucleus.autoCreateColumns=true\ndatanucleus.autoCreateConstraints=true\ndatanucleus.validateSchema=true\ndatanucleus.validateTables=true\ndatanucleus.validateColumns=true\ndatanucleus.validateConstraints=true\n","after":"datanucleus.schema.autoCreateAll=true\ndatanucleus.schema.autoCreateTables=true\ndatanucleus.schema.autoCreateColumns=true\ndatanucleus.schema.autoCreateConstraints=true\ndatanucleus.schema.validateAll=true\ndatanucleus.schema.validateTables=true\ndatanucleus.schema.validateColumns=true\ndatanucleus.schema.validateConstraints=true\n","diff":"@@ -1,8 +1,8 @@\n-datanucleus.autoCreateSchema=true\n-datanucleus.autoCreateTables=true\n-datanucleus.autoCreateColumns=true\n-datanucleus.autoCreateConstraints=true\n-datanucleus.validateSchema=true\n-datanucleus.validateTables=true\n-datanucleus.validateColumns=true\n-datanucleus.validateConstraints=true\n+datanucleus.schema.autoCreateAll=true\n+datanucleus.schema.autoCreateTables=true\n+datanucleus.schema.autoCreateColumns=true\n+datanucleus.schema.autoCreateConstraints=true\n+datanucleus.schema.validateAll=true\n+datanucleus.schema.validateTables=true\n+datanucleus.schema.validateColumns=true\n+datanucleus.schema.validateConstraints=true\n\n","newFile":false}]},{"variants":[{"language":"properties","before":"datanucleus.autoCreateSchema=true\ndatanucleus.autoCreateTables=true\ndatanucleus.autoCreateColumns=true\ndatanucleus.autoCreateConstraints=true\ndatanucleus.validateSchema=true\ndatanucleus.validateTables=true\ndatanucleus.validateColumns=true\ndatanucleus.validateConstraints=true\n","after":"datanucleus.schema.autoCreateAll=true\ndatanucleus.schema.autoCreateTables=true\ndatanucleus.schema.autoCreateColumns=true\ndatanucleus.schema.autoCreateConstraints=true\ndatanucleus.schema.validateAll=true\ndatanucleus.schema.validateTables=true\ndatanucleus.schema.validateColumns=true\ndatanucleus.schema.validateConstraints=true\n","diff":"@@ -1,8 +1,8 @@\n-datanucleus.autoCreateSchema=true\n-datanucleus.autoCreateTables=true\n-datanucleus.autoCreateColumns=true\n-datanucleus.autoCreateConstraints=true\n-datanucleus.validateSchema=true\n-datanucleus.validateTables=true\n-datanucleus.validateColumns=true\n-datanucleus.validateConstraints=true\n+datanucleus.schema.autoCreateAll=true\n+datanucleus.schema.autoCreateTables=true\n+datanucleus.schema.autoCreateColumns=true\n+datanucleus.schema.autoCreateConstraints=true\n+datanucleus.schema.validateAll=true\n+datanucleus.schema.validateTables=true\n+datanucleus.schema.validateColumns=true\n+datanucleus.schema.validateConstraints=true\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.migrate.datanucleus.UpgradeDataNucleus_4_0","displayName":"Migrate to DataNucleus 4.0","groupId":"org.openrewrite.recipe","artifactId":"rewrite-migrate-java","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

