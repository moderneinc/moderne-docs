---
title: "Find and fix SQL performance anti-patterns"
sidebar_label: "Find and fix SQL performance anti-patterns"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find and fix SQL performance anti-patterns"}
  description={"Analyzes SQL found in code and resource files for statically detectable performance anti-patterns such as `SELECT *`, `COUNT(*)` used as an existence check, scalar subqueries in the `SELECT` list, non-sargable predicates, and missing join conditions. Every occurrence is reported to the `SqlAntiPatterns` data table with a severity and suggested remediation, then fixed in place where a safe rewrite exists or marked in source otherwise."}
  fqName={"org.openrewrite.sql.antipattern.SqlAntiPatterns"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.sql.antipattern.SqlAntiPatterns"}
  artifact={"org.openrewrite.recipe:rewrite-sql"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.sql.antipattern.SqlAntiPatterns"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/sql/antipattern/sqlantipatterns.md"}
  moderneOnly
>

<RecipeHeader.Title>Find and fix SQL performance anti-patterns</RecipeHeader.Title>

<RecipeHeader.Description>Analyzes SQL found in code and resource files for statically detectable performance anti-patterns such as `SELECT *`, `COUNT(*)` used as an existence check, scalar subqueries in the `SELECT` list, non-sargable predicates, and missing join conditions. Every occurrence is reported to the `SqlAntiPatterns` data table with a severity and suggested remediation, then fixed in place where a safe rewrite exists or marked in source otherwise.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find `SELECT *` queries","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findselectstar/"},{"name":"Find `COUNT` subqueries used as existence checks","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findcountasexistencecheck/"},{"name":"Find scalar subqueries in the `SELECT` list","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findscalarsubqueryinselect/"},{"name":"Find non-sargable predicates","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findnonsargablepredicate/"},{"name":"Find `LIKE` patterns starting with a wildcard","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findleadingwildcardlike/"},{"name":"Find `NOT IN` with a subquery","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findnotinsubquery/"},{"name":"Find optional filters written as `OR` parameter `IS NULL`","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findoptionalparameteror/"},{"name":"Find `UPDATE` and `DELETE` statements without a `WHERE` clause","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/finddmlwithoutwhere/"},{"name":"Find `INSERT ... VALUES` statements that omit the column list","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findinsertwithoutcolumns/"},{"name":"Find `ORDER BY` on a random function","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findorderbyrandom/"},{"name":"Find `HAVING` conditions that use no aggregate","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findhavingwithoutaggregate/"},{"name":"Find oversized `IN` lists","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findoversizedinlist/"},{"name":"Find `UNION` where `UNION ALL` may suffice","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findunioninsteadofunionall/"},{"name":"Find `DISTINCT` masking join fan-out","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/finddistinctwithjoin/"},{"name":"Find cartesian joins","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findcartesianjoin/"},{"name":"Find constant predicates that are always true or always false","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findconstantpredicate/"},{"name":"Find `OFFSET`-based pagination","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findoffsetpagination/"},{"name":"Find correlated aggregate subqueries in `WHERE`","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findcorrelatedaggregatesubquery/"},{"name":"Replace `= NULL` and `<> NULL` with `IS NULL` and `IS NOT NULL`","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/replacenullcomparisonwithisnull/"},{"name":"Remove redundant `ORDER BY` from subqueries","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/removeorderbyinsubquery/"},{"name":"Find row limiters without an `ORDER BY`","href":"/user-documentation/recipes/recipe-catalog/sql/antipattern/findlimitwithoutorderby/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.sql.antipattern.SqlAntiPatterns","displayName":"Find and fix SQL performance anti-patterns","groupId":"org.openrewrite.recipe","artifactId":"rewrite-sql","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SQL","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.sql.table.SqlAntiPatterns","displayName":"SQL anti-patterns","description":"SQL statements matching performance anti-pattern rules.","columns":[{"name":"Source path","description":"The path to the source file containing the SQL."},{"name":"Rule","description":"The identifier of the anti-pattern rule that matched."},{"name":"Severity","description":"How likely the pattern is to cause a measurable performance problem."},{"name":"Finding","description":"A description of the specific occurrence of the anti-pattern."},{"name":"Query","description":"The SQL statement the anti-pattern was found in."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

