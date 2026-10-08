---
title: "Find invalid JDBC indices"
sidebar_label: "Find invalid JDBC indices"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find invalid JDBC indices"}
  description={"Finds `PreparedStatement.set...(int, ...)` and `ResultSet.get...(int, ...)` calls whose first argument is invalid: the literal `0` (both APIs are 1-based); for `PreparedStatement`, an index that exceeds the number of `?` placeholders in the SQL passed to `Connection.prepareStatement(...)` / `prepareCall(...)`; or a for-loop counter declared starting at `0`, which is a common off-by-one against JDBC's 1-based indexing. Each mistake throws `SQLException` at runtime."}
  fqName={"org.openrewrite.java.security.search.FindInvalidJdbcIndex"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["CWE-1023","RSPEC-S2695"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.search.FindInvalidJdbcIndex"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindInvalidJdbcIndex"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/search/findinvalidjdbcindex.md"}
  moderneOnly
>

<RecipeHeader.Title>Find invalid JDBC indices</RecipeHeader.Title>

<RecipeHeader.Description>Finds `PreparedStatement.set...(int, ...)` and `ResultSet.get...(int, ...)` calls whose first argument is invalid: the literal `0` (both APIs are 1-based); for `PreparedStatement`, an index that exceeds the number of `?` placeholders in the SQL passed to `Connection.prepareStatement(...)` / `prepareCall(...)`; or a for-loop counter declared starting at `0`, which is a common off-by-one against JDBC's 1-based indexing. Each mistake throws `SQLException` at runtime.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.sql.Connection;\nimport java.sql.PreparedStatement;\n\nclass A {\n    void bind(Connection c, String name) throws Exception {\n        PreparedStatement ps = c.prepareStatement(\"SELECT * FROM t WHERE name = ?\");\n        ps.setString(0, name);\n    }\n}\n","after":"import java.sql.Connection;\nimport java.sql.PreparedStatement;\n\nclass A {\n    void bind(Connection c, String name) throws Exception {\n        PreparedStatement ps = c.prepareStatement(\"SELECT * FROM t WHERE name = ?\");\n        /*~~(PreparedStatement indices start at 1; passing 0 will throw SQLException at runtime.)~~>*/ps.setString(0, name);\n    }\n}\n","diff":"@@ -7,1 +7,1 @@\n    void bind(Connection c, String name) throws Exception {\n        PreparedStatement ps = c.prepareStatement(\"SELECT * FROM t WHERE name = ?\");\n-       ps.setString(0, name);\n+       /*~~(PreparedStatement indices start at 1; passing 0 will throw SQLException at runtime.)~~>*/ps.setString(0, name);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.search.FindInvalidJdbcIndex","displayName":"Find invalid JDBC indices","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

