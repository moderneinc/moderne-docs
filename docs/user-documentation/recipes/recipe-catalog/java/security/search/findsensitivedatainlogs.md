---
title: "Find sensitive data in log statements"
sidebar_label: "Find sensitive data in log statements"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find sensitive data in log statements"}
  description={"Finds logging statements where arguments include variables, fields, or method calls with names that suggest sensitive data (passwords, tokens, SSNs, credit card numbers, etc.). Logging sensitive data can lead to information disclosure through log files (CWE-532)."}
  fqName={"org.openrewrite.java.security.search.FindSensitiveDataInLogs"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["CWE-532","security"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.search.FindSensitiveDataInLogs"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindSensitiveDataInLogs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/search/findsensitivedatainlogs.md"}
  moderneOnly
>

<RecipeHeader.Title>Find sensitive data in log statements</RecipeHeader.Title>

<RecipeHeader.Description>Finds logging statements where arguments include variables, fields, or method calls with names that suggest sensitive data (passwords, tokens, SSNs, credit card numbers, etc.). Logging sensitive data can lead to information disclosure through log files (CWE-532).</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"List","name":"sensitiveFieldNames","required":false,"description":"Case-insensitive substrings to match against variable, field, and method names in log arguments. Defaults to common sensitive identifiers like password, token, ssn, etc.","example":"password,token,ssn,creditCard"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"sensitiveFieldNames","value":"null"}],"variants":[{"language":"java","before":"import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nclass LoginService {\n    private static final Logger logger = LoggerFactory.getLogger(LoginService.class);\n\n    void login(String user, String password) {\n        logger.info(\"Login attempt for user: {}\", password);\n    }\n}\n","after":"import org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nclass LoginService {\n    private static final Logger logger = LoggerFactory.getLogger(LoginService.class);\n\n    void login(String user, String password) {\n        /*~~(Sensitive data 'password' may be logged (CWE-532))~~>*/logger.info(\"Login attempt for user: {}\", password);\n    }\n}\n","diff":"@@ -8,1 +8,1 @@\n\n    void login(String user, String password) {\n-       logger.info(\"Login attempt for user: {}\", password);\n+       /*~~(Sensitive data 'password' may be logged (CWE-532))~~>*/logger.info(\"Login attempt for user: {}\", password);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.search.FindSensitiveDataInLogs","displayName":"Find sensitive data in log statements","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false,"optionalCliOptions":" --recipe-option \"sensitiveFieldNames=password,token,ssn,creditCard\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

