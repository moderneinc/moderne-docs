---
title: "Find SQL usage"
sidebar_label: "Find SQL usage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find SQL usage"}
  description={"Locate SQL statements in code and resources, and attribute the physical tables and columns each touches to the class and method that issues it. Emits one row per statement per table, joining `sql-anti-patterns.csv` on source path and line number, and `method-quality-metrics.csv` and `test-gaps.csv` on class name and method signature."}
  fqName={"io.moderne.prethink.calm.FindSqlUsage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.prethink.calm.FindSqlUsage"}
  artifact={"io.moderne.recipe:rewrite-prethink"}
  appLink={"https://app.moderne.io/recipes/io.moderne.prethink.calm.FindSqlUsage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/prethink/calm/findsqlusage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find SQL usage</RecipeHeader.Title>

<RecipeHeader.Description>Locate SQL statements in code and resources, and attribute the physical tables and columns each touches to the class and method that issues it. Emits one row per statement per table, joining `sql-anti-patterns.csv` on source path and line number, and `method-quality-metrics.csv` and `test-gaps.csv` on class name and method signature.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"io.moderne.prethink.calm.FindSqlUsage","displayName":"Find SQL usage","groupId":"io.moderne.recipe","artifactId":"rewrite-prethink","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.prethink.table.SqlUsage","displayName":"SQL usage","description":"Physical tables and columns each SQL statement touches, attributed to the class and method that issues it.","columns":[{"name":"Source path","description":"The path to the source file containing the SQL."},{"name":"Line number","description":"The line the SQL statement begins on. Together with the source path this joins a row in `sql-anti-patterns.csv` to the method that issues the query."},{"name":"Class name","description":"The fully qualified name of the class issuing the statement, or of the MyBatis mapper interface a mapper XML declares as its `namespace`. Empty for a `.sql` file or any other resource that names no class."},{"name":"Method name","description":"The simple name of the method issuing the statement, or the `id` of the MyBatis statement, which is the mapper interface method it implements. Empty for SQL outside any method."},{"name":"Method signature","description":"The full method signature including parameter types, joining `method-quality-metrics.csv` and `test-gaps.csv`. Empty where the SQL is not inside a method, including in mapper XML, where the method is named but its parameter types are not known."},{"name":"Language","description":"The language of the file the statement is written in, e.g. `java`, `kotlin`, `csharp`, `python`, `xml`, or `sql` for a plain `.sql` file."},{"name":"Embedded in","description":"How the statement is written: `literal` for a single string literal, `concatenation` for one assembled with `+` or `StringBuilder.append`, `interpolation` for an interpolated or template string, or `file`, `xml`, `yaml` or `json` for a statement carried by a resource."},{"name":"Table","description":"The physical table this row reports on. A statement touching several tables contributes one row per table."},{"name":"Operations","description":"The operations the statement performs on this table, comma-separated in `SELECT,UPDATE,INSERT,DELETE,CREATE,ALTER` order. A write that also reads the table, as an `UPDATE ... WHERE` does, reports both."},{"name":"Columns","description":"The columns of this table the statement names, comma-separated, or `*` where it selects them all. Empty where no column can be attributed to the table with certainty, which a `DELETE` or an ambiguous join produces."},{"name":"Dynamic","description":"Whether the statement is assembled at runtime, from an interpolated string, from a concatenation with a non-constant operand, or from a mapper XML statement with conditional elements nested in it, in which case the query below is only the static part of what actually runs."},{"name":"Query","description":"The SQL statement, truncated to 200 characters. Read the source at the path and line above for the whole of a longer statement."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

