---
title: "Index HQL/JPQL positional parameters in method calls"
sidebar_label: "Index HQL/JPQL positional parameters in method calls"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Index HQL/JPQL positional parameters in method calls"}
  description={"Replaces unindexed `?` positional parameters with indexed `?1`, `?2`, etc. in an HQL/JPQL query string passed as the first argument of a method matching the given pattern."}
  fqName={"io.moderne.hibernate.update40.IndexHqlMethodPositionalParameters"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Index HQL/JPQL positional parameters in method calls"}
  description={"Replaces unindexed `?` positional parameters with indexed `?1`, `?2`, etc. in an HQL/JPQL query string passed as the first argument of a method matching the given pattern."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.update40.IndexHqlMethodPositionalParameters"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.update40.IndexHqlMethodPositionalParameters"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/update40/indexhqlmethodpositionalparameters.md"}
  moderneOnly
/>

<OptionsTable options={[{"type":"String","name":"methodPattern","required":true,"description":"A method pattern whose first argument is an HQL/JPQL query string. Example: `org.hibernate.Session createQuery(String,..)`.","example":"org.hibernate.Session createQuery(String,..)"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"methodPattern","value":"org.hibernate.Session createQuery(String,..)"}],"variants":[{"language":"java","before":"import org.hibernate.Session;\n\nclass MyDao {\n    void query(Session session) {\n        session.createQuery(\"from Foo where a = ? and b = ?\", Object.class);\n    }\n}\n","after":"import org.hibernate.Session;\n\nclass MyDao {\n    void query(Session session) {\n        session.createQuery(\"from Foo where a = ?1 and b = ?2\", Object.class);\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass MyDao {\n    void query(Session session) {\n-       session.createQuery(\"from Foo where a = ? and b = ?\", Object.class);\n+       session.createQuery(\"from Foo where a = ?1 and b = ?2\", Object.class);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.update40.IndexHqlMethodPositionalParameters","displayName":"Index HQL/JPQL positional parameters in method calls","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":true,"cliOptions":" --recipe-option \"methodPattern=org.hibernate.Session createQuery(String,..)\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

