---
title: "Find `COUNT` subqueries used as existence checks"
sidebar_label: "Find `COUNT` subqueries used as existence checks"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `COUNT` subqueries used as existence checks"}
  description={"A scalar `COUNT` subquery compared to `0` or `1` tallies every matching row even though the outcome is decided by the first one. `EXISTS` or `NOT EXISTS` lets the engine stop as soon as a match is found. Comparisons against other values, such as `> 5`, express a genuine cardinality requirement and are not flagged."}
  fqName={"org.openrewrite.sql.antipattern.FindCountAsExistenceCheck"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.sql.antipattern.FindCountAsExistenceCheck"}
  artifact={"org.openrewrite.recipe:rewrite-sql"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.sql.antipattern.FindCountAsExistenceCheck"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/sql/antipattern/findcountasexistencecheck.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `COUNT` subqueries used as existence checks</RecipeHeader.Title>

<RecipeHeader.Description>A scalar `COUNT` subquery compared to `0` or `1` tallies every matching row even though the outcome is decided by the first one. `EXISTS` or `NOT EXISTS` lets the engine stop as soon as a match is found. Comparisons against other values, such as `> 5`, express a genuine cardinality requirement and are not flagged.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    String sql = \"select id from users u where (select count(*) from orders o where o.user_id = u.id) > 0\";\n}\n","after":"class Test {\n    String sql = /*~~(count-as-existence-check: comparing a `COUNT` subquery to `0` or `1` keeps counting rows after the answer is known; `EXISTS` or `NOT EXISTS` stops at the first matching row)~~>*/\"select id from users u where (select count(*) from orders o where o.user_id = u.id) > 0\";\n}\n","diff":"@@ -2,1 +2,1 @@\nclass Test {\n-   String sql = \"select id from users u where (select count(*) from orders o where o.user_id = u.id) > 0\";\n+   String sql = /*~~(count-as-existence-check: comparing a `COUNT` subquery to `0` or `1` keeps counting rows after the answer is known; `EXISTS` or `NOT EXISTS` stops at the first matching row)~~>*/\"select id from users u where (select count(*) from orders o where o.user_id = u.id) > 0\";\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.sql.antipattern.FindCountAsExistenceCheck","displayName":"Find `COUNT` subqueries used as existence checks","groupId":"org.openrewrite.recipe","artifactId":"rewrite-sql","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SQL","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.sql.table.SqlAntiPatterns","displayName":"SQL anti-patterns","description":"SQL statements matching performance anti-pattern rules.","columns":[{"name":"Source path","description":"The path to the source file containing the SQL."},{"name":"Rule","description":"The identifier of the anti-pattern rule that matched."},{"name":"Severity","description":"How likely the pattern is to cause a measurable performance problem."},{"name":"Finding","description":"A description of the specific occurrence of the anti-pattern."},{"name":"Query","description":"The SQL statement the anti-pattern was found in."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

