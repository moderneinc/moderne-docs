---
title: "Find `DISTINCT` masking join fan-out"
sidebar_label: "Find `DISTINCT` masking join fan-out"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `DISTINCT` masking join fan-out"}
  description={"`DISTINCT` paired with a `JOIN` frequently compensates for row multiplication that a correct join condition or an `EXISTS` test would avoid, and `DISTINCT` alongside `GROUP BY` is redundant because grouping already collapses duplicate rows. A `DISTINCT` on a single-table query without `GROUP BY` is not flagged."}
  fqName={"org.openrewrite.sql.antipattern.FindDistinctWithJoin"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.sql.antipattern.FindDistinctWithJoin"}
  artifact={"org.openrewrite.recipe:rewrite-sql"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.sql.antipattern.FindDistinctWithJoin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/sql/antipattern/finddistinctwithjoin.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `DISTINCT` masking join fan-out</RecipeHeader.Title>

<RecipeHeader.Description>`DISTINCT` paired with a `JOIN` frequently compensates for row multiplication that a correct join condition or an `EXISTS` test would avoid, and `DISTINCT` alongside `GROUP BY` is redundant because grouping already collapses duplicate rows. A `DISTINCT` on a single-table query without `GROUP BY` is not flagged.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    String sql = \"select distinct u.id, u.name from users u join orders o on o.user_id = u.id\";\n}\n","after":"class Test {\n    String sql = /*~~(distinct-with-join: `DISTINCT` combined with `JOIN` frequently hides row multiplication caused by the join; an `EXISTS` test or a corrected join condition avoids the de-duplication)~~>*/\"select distinct u.id, u.name from users u join orders o on o.user_id = u.id\";\n}\n","diff":"@@ -2,1 +2,1 @@\nclass Test {\n-   String sql = \"select distinct u.id, u.name from users u join orders o on o.user_id = u.id\";\n+   String sql = /*~~(distinct-with-join: `DISTINCT` combined with `JOIN` frequently hides row multiplication caused by the join; an `EXISTS` test or a corrected join condition avoids the de-duplication)~~>*/\"select distinct u.id, u.name from users u join orders o on o.user_id = u.id\";\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.sql.antipattern.FindDistinctWithJoin","displayName":"Find `DISTINCT` masking join fan-out","groupId":"org.openrewrite.recipe","artifactId":"rewrite-sql","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SQL","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.sql.table.SqlAntiPatterns","displayName":"SQL anti-patterns","description":"SQL statements matching performance anti-pattern rules.","columns":[{"name":"Source path","description":"The path to the source file containing the SQL."},{"name":"Rule","description":"The identifier of the anti-pattern rule that matched."},{"name":"Severity","description":"How likely the pattern is to cause a measurable performance problem."},{"name":"Finding","description":"A description of the specific occurrence of the anti-pattern."},{"name":"Query","description":"The SQL statement the anti-pattern was found in."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

