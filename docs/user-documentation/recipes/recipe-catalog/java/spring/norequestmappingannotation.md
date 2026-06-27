---
title: "Remove `@RequestMapping` annotations"
sidebar_label: "Remove `@RequestMapping` annotations"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/norequestmappingannotation" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove `@RequestMapping` annotations"}
  description={"Replace method declaration `@RequestMapping` annotations with `@GetMapping`, `@PostMapping`, etc. when possible."}
  fqName={"org.openrewrite.java.spring.NoRequestMappingAnnotation"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/NoRequestMappingAnnotation.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["RSPEC-S4488"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.NoRequestMappingAnnotation"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.NoRequestMappingAnnotation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/norequestmappingannotation.md"}
>

<RecipeHeader.Title>Remove `@RequestMapping` annotations</RecipeHeader.Title>

<RecipeHeader.Description>Replace method declaration `@RequestMapping` annotations with `@GetMapping`, `@PostMapping`, etc. when possible.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import java.util.*;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport static org.springframework.web.bind.annotation.RequestMethod.GET;\nimport static org.springframework.web.bind.annotation.RequestMethod.HEAD;\n\n@RestController\n@RequestMapping(\"/users\")\npublic class UsersController {\n    @RequestMapping(method = HEAD)\n    public ResponseEntity<List<String>> getUsersHead() {\n        return null;\n    }\n\n    @RequestMapping(method = GET)\n    public ResponseEntity<List<String>> getUsers() {\n        return null;\n    }\n\n    @RequestMapping(path = \"/{id}\", method = RequestMethod.GET)\n    public ResponseEntity<String> getUser(@PathVariable(\"id\") Long id) {\n        return null;\n    }\n\n    @RequestMapping\n    public ResponseEntity<List<String>> getUsersNoRequestMethod() {\n        return null;\n    }\n}\n","after":"import java.util.*;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport static org.springframework.web.bind.annotation.RequestMethod.HEAD;\n\n@RestController\n@RequestMapping(\"/users\")\npublic class UsersController {\n    @RequestMapping(method = HEAD)\n    public ResponseEntity<List<String>> getUsersHead() {\n        return null;\n    }\n\n    @GetMapping\n    public ResponseEntity<List<String>> getUsers() {\n        return null;\n    }\n\n    @GetMapping(\"/{id}\")\n    public ResponseEntity<String> getUser(@PathVariable(\"id\") Long id) {\n        return null;\n    }\n\n    @RequestMapping\n    public ResponseEntity<List<String>> getUsersNoRequestMethod() {\n        return null;\n    }\n}\n","diff":"@@ -3,0 +3,1 @@\nimport java.util.*;\nimport org.springframework.http.ResponseEntity;\n+import org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RequestMapping;\n@@ -4,1 +5,0 @@\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.RequestMapping;\n-import static org.springframework.web.bind.annotation.RequestMethod.GET;\nimport static org.springframework.web.bind.annotation.RequestMethod.HEAD;\n@@ -15,1 +15,1 @@\n    }\n\n-   @RequestMapping(method = GET)\n+   @GetMapping\n    public ResponseEntity<List<String>> getUsers() {\n@@ -20,1 +20,1 @@\n    }\n\n-   @RequestMapping(path = \"/{id}\", method = RequestMethod.GET)\n+   @GetMapping(\"/{id}\")\n    public ResponseEntity<String> getUser(@PathVariable(\"id\") Long id) {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.NoRequestMappingAnnotation","displayName":"Remove `@RequestMapping` annotations","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

