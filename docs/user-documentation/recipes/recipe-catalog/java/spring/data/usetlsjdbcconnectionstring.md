---
title: "Use TLS for JDBC connection strings"
sidebar_label: "Use TLS for JDBC connection strings"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/data/usetlsjdbcconnectionstring" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use TLS for JDBC connection strings"}
  description={"Increasingly, for compliance reasons (e.g. [NACHA](https://www.nacha.org/sites/default/files/2022-06/End_User_Briefing_Supplementing_Data_Security_UPDATED_FINAL.pdf)), JDBC connection strings should be TLS-enabled. This recipe will update the port and optionally add a connection attribute to indicate that the connection is TLS-enabled."}
  fqName={"org.openrewrite.java.spring.data.UseTlsJdbcConnectionString"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/data/UseTlsJdbcConnectionString.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.data.UseTlsJdbcConnectionString"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.data.UseTlsJdbcConnectionString"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/data/usetlsjdbcconnectionstring.md"}
>

<RecipeHeader.Title>Use TLS for JDBC connection strings</RecipeHeader.Title>

<RecipeHeader.Description>Increasingly, for compliance reasons (e.g. [NACHA](https://www.nacha.org/sites/default/files/2022-06/End_User_Briefing_Supplementing_Data_Security_UPDATED_FINAL.pdf)), JDBC connection strings should be TLS-enabled. This recipe will update the port and optionally add a connection attribute to indicate that the connection is TLS-enabled.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"propertyKey","required":true,"description":"The Spring property key to perform updates against. If this value is specified, the specified property will be used for searching, otherwise a default of `spring.datasource.url` will be used instead.","example":"spring.datasource.url"},{"type":"Integer","name":"oldPort","required":true,"description":"The non-TLS enabled port number to replace with the TLS-enabled port. If this value is specified, no changes will be made to jdbc connection strings which do not contain this port number. ","example":"1234"},{"type":"Integer","name":"port","required":true,"description":"The TLS-enabled port to use.","example":"1234"},{"type":"String","name":"attribute","required":true,"description":"A connection attribute, if any, indicating to the JDBC provider that this is a TLS connection.","example":"sslConnection=true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"propertyKey","value":"null"},{"parameter":"oldPort","value":"5021"},{"parameter":"port","value":"15021"},{"parameter":"attribute","value":"sslConnection=true;"}],"variants":[{"language":"properties","before":"spring.datasource.url=jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;\n","after":"spring.datasource.url=jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;\n","diff":"@@ -1,1 +1,1 @@\n-spring.datasource.url=jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;\n+spring.datasource.url=jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;\n\n","newFile":false},{"language":"yaml","before":"spring:\n  datasource:\n    url: 'jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;'\n","after":"spring:\n  datasource:\n    url: 'jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;'\n","diff":"@@ -3,1 +3,1 @@\nspring:\n  datasource:\n-   url: 'jdbc:db2://10.2.1.101:5021/DB2INST1:currentSchema=DEV;commandTimeout=30;'\n+   url: 'jdbc:db2://10.2.1.101:15021/DB2INST1:currentSchema=DEV;commandTimeout=30;sslConnection=true;'\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.data.UseTlsJdbcConnectionString","displayName":"Use TLS for JDBC connection strings","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":true,"cliOptions":" --recipe-option \"propertyKey=spring.datasource.url\" --recipe-option \"oldPort=1234\" --recipe-option \"port=1234\" --recipe-option \"attribute=sslConnection=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

