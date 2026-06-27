---
title: "Find unencrypted PII storage"
sidebar_label: "Find unencrypted PII storage"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find unencrypted PII storage"}
  description={"Identifies when personally identifiable information (PII) is stored in databases, files, or other persistent storage without encryption."}
  fqName={"org.openrewrite.analysis.java.security.FindUnencryptedPiiStorage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.analysis.java.security.FindUnencryptedPiiStorage"}
  artifact={"io.moderne.recipe:rewrite-program-analysis"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.analysis.java.security.FindUnencryptedPiiStorage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/analysis/java/security/findunencryptedpiistorage.md"}
  moderneOnly
>

<RecipeHeader.Title>Find unencrypted PII storage</RecipeHeader.Title>

<RecipeHeader.Description>Identifies when personally identifiable information (PII) is stored in databases, files, or other persistent storage without encryption.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.sql.PreparedStatement;\n\nclass UserDao {\n    void saveUser(PreparedStatement stmt, String ssn, String email) throws Exception {\n        stmt.setString(1, ssn);\n        stmt.setString(2, email);\n        stmt.executeUpdate();\n    }\n}\n","after":"import java.sql.PreparedStatement;\n\nclass UserDao {\n    void saveUser(PreparedStatement stmt, String ssn, String email) throws Exception {\n        /*~~(PII use)~~>*/stmt.setString(1, ssn);\n        /*~~(PII use)~~>*/stmt.setString(2, email);\n        stmt.executeUpdate();\n    }\n}\n","diff":"@@ -5,2 +5,2 @@\nclass UserDao {\n    void saveUser(PreparedStatement stmt, String ssn, String email) throws Exception {\n-       stmt.setString(1, ssn);\n-       stmt.setString(2, email);\n+       /*~~(PII use)~~>*/stmt.setString(1, ssn);\n+       /*~~(PII use)~~>*/stmt.setString(2, email);\n        stmt.executeUpdate();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.analysis.java.security.FindUnencryptedPiiStorage","displayName":"Find unencrypted PII storage","groupId":"io.moderne.recipe","artifactId":"rewrite-program-analysis","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_PROGRAM_ANALYSIS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.analysis.java.taint.table.TaintFlowTable","displayName":"Taint flow","description":"Records taint flows from sources to sinks with their taint types.","columns":[{"name":"Source file","description":"The source file that the method call occurred in."},{"name":"Source line","description":"The line number where the taint source is located."},{"name":"Source","description":"The source code where taint originates."},{"name":"Sink line","description":"The line number where the taint sink is located."},{"name":"Sink","description":"The sink code where taint flows to."},{"name":"Taint type","description":"The taint type that matched at the sink."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

