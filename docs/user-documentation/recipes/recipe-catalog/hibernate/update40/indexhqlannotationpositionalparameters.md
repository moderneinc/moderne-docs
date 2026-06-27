---
title: "Index HQL/JPQL positional parameters in annotations"
sidebar_label: "Index HQL/JPQL positional parameters in annotations"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Index HQL/JPQL positional parameters in annotations"}
  description={"Replaces unindexed `?` positional parameters with indexed `?1`, `?2`, etc. in an HQL/JPQL query string held in an annotation attribute matching the given pattern."}
  fqName={"io.moderne.hibernate.update40.IndexHqlAnnotationPositionalParameters"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.hibernate.update40.IndexHqlAnnotationPositionalParameters"}
  artifact={"io.moderne.recipe:rewrite-hibernate"}
  appLink={"https://app.moderne.io/recipes/io.moderne.hibernate.update40.IndexHqlAnnotationPositionalParameters"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hibernate/update40/indexhqlannotationpositionalparameters.md"}
  moderneOnly
>

<RecipeHeader.Title>Index HQL/JPQL positional parameters in annotations</RecipeHeader.Title>

<RecipeHeader.Description>Replaces unindexed `?` positional parameters with indexed `?1`, `?2`, etc. in an HQL/JPQL query string held in an annotation attribute matching the given pattern.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"annotationPattern","required":true,"description":"An annotation pattern whose HQL/JPQL query string attribute should be indexed. Use `attributeName` to specify which attribute holds the query if it is not `value`.","example":"@jakarta.persistence.NamedQuery"},{"type":"String","name":"attributeName","required":false,"description":"The annotation attribute that holds the HQL/JPQL query string. Defaults to `value`.","example":"value"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"annotationPattern","value":"@example.HqlQuery"},{"parameter":"attributeName","value":"query"}],"unchanged":{"language":"java","code":"package example;\n\nimport java.lang.annotation.*;\n\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface HqlQuery {\n    String query();\n}\n"},"variants":[{"language":"java","before":"import example.HqlQuery;\n\n@HqlQuery(query = \"SELECT e FROM Employee e WHERE e.name = ?\")\nclass MyEntity {}\n","after":"import example.HqlQuery;\n\n@HqlQuery(query = \"SELECT e FROM Employee e WHERE e.name = ?1\")\nclass MyEntity {}\n","diff":"@@ -3,1 +3,1 @@\nimport example.HqlQuery;\n\n-@HqlQuery(query = \"SELECT e FROM Employee e WHERE e.name = ?\")\n+@HqlQuery(query = \"SELECT e FROM Employee e WHERE e.name = ?1\")\nclass MyEntity {}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.hibernate.update40.IndexHqlAnnotationPositionalParameters","displayName":"Index HQL/JPQL positional parameters in annotations","groupId":"io.moderne.recipe","artifactId":"rewrite-hibernate","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_HIBERNATE","requiresConfiguration":true,"cliOptions":" --recipe-option \"annotationPattern='@jakarta.persistence.NamedQuery'\" --recipe-option \"attributeName=value\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

