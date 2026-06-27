---
title: "Find sensitive API endpoints"
sidebar_label: "Find sensitive API endpoints"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find sensitive API endpoints"}
  description={"Find data models exposed by REST APIs that contain sensitive information like PII and secrets."}
  fqName={"org.openrewrite.java.security.search.FindSensitiveApiEndpoints"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.search.FindSensitiveApiEndpoints"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindSensitiveApiEndpoints"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/search/findsensitiveapiendpoints.md"}
  moderneOnly
>

<RecipeHeader.Title>Find sensitive API endpoints</RecipeHeader.Title>

<RecipeHeader.Description>Find data models exposed by REST APIs that contain sensitive information like PII and secrets.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"List","name":"fieldNames","required":true,"description":"Field names to search for.","example":"password,dateOfBirth,dob,ssn"},{"type":"Boolean","name":"transitive","required":false,"description":"Find model objects that contain other model objects that contain sensitive data."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"fieldNames","value":"List.of(\"birthdate\")"},{"parameter":"transitive","value":"true"}],"variants":[{"language":"java","before":"import com.arakelian.faker.model.Person;\nimport com.arakelian.faker.service.RandomPerson;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n@RequestMapping(\"/person\")\nclass PersonController {\n    @GetMapping(\"/random\")\n    public Person randomPerson() {\n        return RandomPerson.get().next();\n    }\n}\n","after":"import com.arakelian.faker.model.Person;\nimport com.arakelian.faker.service.RandomPerson;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\n\n@RequestMapping(\"/person\")\nclass PersonController {\n    @GetMapping(\"/random\")\n    public /*~~(com.arakelian.faker.model.Person#getBirthdate)~~>*/Person randomPerson() {\n        return RandomPerson.get().next();\n    }\n}\n","diff":"@@ -9,1 +9,1 @@\nclass PersonController {\n    @GetMapping(\"/random\")\n-   public Person randomPerson() {\n+   public /*~~(com.arakelian.faker.model.Person#getBirthdate)~~>*/Person randomPerson() {\n        return RandomPerson.get().next();\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.search.FindSensitiveApiEndpoints","displayName":"Find sensitive API endpoints","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":true,"cliOptions":" --recipe-option \"fieldNames=password,dateOfBirth,dob,ssn\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.java.security.table.SensitiveApiEndpoints","displayName":"Sensitive API endpoints","description":"The API endpoints that expose sensitive data.","columns":[{"name":"Source path","description":"The path to the source file containing the API endpoint definition."},{"name":"Method name","description":"The name of the method that defines the API endpoint."},{"name":"Method","description":"The HTTP method of the API endpoint."},{"name":"Path","description":"The path of the API endpoint."},{"name":"Sensitive field","description":"The piece of sensitive data that is included."},{"name":"Sensitive data path","description":"The sensitive data exposed by the API endpoint."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

