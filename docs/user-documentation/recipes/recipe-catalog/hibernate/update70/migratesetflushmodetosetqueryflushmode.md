---
title: "Migrate `setFlushMode()` to `setQueryFlushMode()`"
sidebar_label: "Migrate `setFlushMode()` to `setQueryFlushMode()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `setFlushMode()` to `setQueryFlushMode()`"}
  description={"In Hibernate 7.0, `CommonQueryContract.setFlushMode(FlushModeType)` has been replaced with `setQueryFlushMode(QueryFlushMode)`. This recipe migrates the method call and converts `FlushModeType` parameters to their `QueryFlushMode` equivalents."}
  fqName={"io.moderne.hibernate.update70.MigrateSetFlushModeToSetQueryFlushMode"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate `setFlushMode()` to `setQueryFlushMode()`"}
  description={"In Hibernate 7.0, `CommonQueryContract.setFlushMode(FlushModeType)` has been replaced with `setQueryFlushMode(QueryFlushMode)`. This recipe migrates the method call and converts `FlushModeType` parameters to their `QueryFlushMode` equivalents."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.update70.MigrateSetFlushModeToSetQueryFlushMode"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.update70.MigrateSetFlushModeToSetQueryFlushMode"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/update70/migratesetflushmodetosetqueryflushmode.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import jakarta.persistence.FlushModeType;\nimport org.hibernate.query.Query;\n\nclass SomeClass {\n    void configureQuery(Query<?> query) {\n        query.setFlushMode(FlushModeType.AUTO);\n    }\n}\n","after":"import org.hibernate.query.Query;\nimport org.hibernate.query.QueryFlushMode;\n\nclass SomeClass {\n    void configureQuery(Query<?> query) {\n        query.setQueryFlushMode(QueryFlushMode.FLUSH);\n    }\n}\n","diff":"@@ -1,1 +1,0 @@\n-import jakarta.persistence.FlushModeType;\nimport org.hibernate.query.Query;\n@@ -3,0 +2,1 @@\nimport jakarta.persistence.FlushModeType;\nimport org.hibernate.query.Query;\n+import org.hibernate.query.QueryFlushMode;\n\n@@ -6,1 +6,1 @@\nclass SomeClass {\n    void configureQuery(Query<?> query) {\n-       query.setFlushMode(FlushModeType.AUTO);\n+       query.setQueryFlushMode(QueryFlushMode.FLUSH);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.update70.MigrateSetFlushModeToSetQueryFlushMode","displayName":"Migrate `setFlushMode()` to `setQueryFlushMode()`","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

