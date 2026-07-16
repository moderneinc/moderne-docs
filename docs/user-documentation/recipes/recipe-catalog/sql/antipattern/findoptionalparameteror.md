---
title: "Find optional filters written as `OR` parameter `IS NULL`"
sidebar_label: "Find optional filters written as `OR` parameter `IS NULL`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find optional filters written as `OR` parameter `IS NULL`"}
  description={"The `col = ? OR ? IS NULL` pattern turns a filter on and off at runtime, so the planner must settle on one generic plan that works for every parameter combination instead of an index-driven plan for the filtered case. An `IS NULL` test on a column inside an `OR` is ordinary SQL and is not flagged."}
  fqName={"org.openrewrite.sql.antipattern.FindOptionalParameterOr"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.sql.antipattern.FindOptionalParameterOr"}
  artifact={"org.openrewrite.recipe:rewrite-sql"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.sql.antipattern.FindOptionalParameterOr"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/sql/antipattern/findoptionalparameteror.md"}
  moderneOnly
>

<RecipeHeader.Title>Find optional filters written as `OR` parameter `IS NULL`</RecipeHeader.Title>

<RecipeHeader.Description>The `col = ? OR ? IS NULL` pattern turns a filter on and off at runtime, so the planner must settle on one generic plan that works for every parameter combination instead of an index-driven plan for the filtered case. An `IS NULL` test on a column inside an `OR` is ordinary SQL and is not flagged.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    String sql = \"select id from users where email = ? or ? is null\";\n}\n","after":"class Test {\n    String sql = /*~~(optional-parameter-or: `OR`-ing an `IS NULL` test on a bind parameter makes the filter optional at runtime, so the planner must pick one plan for all cases; build the SQL conditionally or split the query)~~>*/\"select id from users where email = ? or ? is null\";\n}\n","diff":"@@ -2,1 +2,1 @@\nclass Test {\n-   String sql = \"select id from users where email = ? or ? is null\";\n+   String sql = /*~~(optional-parameter-or: `OR`-ing an `IS NULL` test on a bind parameter makes the filter optional at runtime, so the planner must pick one plan for all cases; build the SQL conditionally or split the query)~~>*/\"select id from users where email = ? or ? is null\";\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.sql.antipattern.FindOptionalParameterOr","displayName":"Find optional filters written as `OR` parameter `IS NULL`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-sql","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SQL","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.sql.table.SqlAntiPatterns","displayName":"SQL anti-patterns","description":"SQL statements matching performance anti-pattern rules.","columns":[{"name":"Source path","description":"The path to the source file containing the SQL."},{"name":"Rule","description":"The identifier of the anti-pattern rule that matched."},{"name":"Severity","description":"How likely the pattern is to cause a measurable performance problem."},{"name":"Finding","description":"A description of the specific occurrence of the anti-pattern."},{"name":"Query","description":"The SQL statement the anti-pattern was found in."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

