---
title: "Convert Dropwizard test rule calls to RestTemplate"
sidebar_label: "Convert Dropwizard test rule calls to RestTemplate"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Convert Dropwizard test rule calls to RestTemplate"}
  description={"Transforms Dropwizard AppRule and ResourceTestRule testing calls to their equivalent RestTemplate calls."}
  fqName={"io.moderne.java.dropwizard.boot.test.TransformDropwizardRuleInvocations"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Convert Dropwizard test rule calls to RestTemplate"}
  description={"Transforms Dropwizard AppRule and ResourceTestRule testing calls to their equivalent RestTemplate calls."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.dropwizard.boot.test.TransformDropwizardRuleInvocations"}
  artifact={"io.moderne.recipe:rewrite-dropwizard"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.test.TransformDropwizardRuleInvocations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/test/transformdropwizardruleinvocations.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"import io.dropwizard.testing.junit.DropwizardAppRule;\nimport org.springframework.web.client.RestTemplate;\nimport javax.ws.rs.client.Entity;\nimport javax.ws.rs.core.MediaType;\n\nclass TestApi {\n    private final DropwizardAppRule<Object> RULE = new DropwizardAppRule<>(Object.class);\n    private final RestTemplate restTemplate = new RestTemplate();\n\n    private Object postObject(Object person) {\n        return RULE.client().target(\"http://localhost:8080/people\")\n            .request()\n            .post(Entity.entity(person, MediaType.APPLICATION_JSON_TYPE))\n            .readEntity(Object.class);\n    }\n}\n","after":"import io.dropwizard.testing.junit.DropwizardAppRule;\nimport org.springframework.http.HttpEntity;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.http.MediaType;\nimport org.springframework.web.client.RestTemplate;\nimport javax.ws.rs.client.Entity;\n\nimport java.util.Collections;\n\nclass TestApi {\n    private final DropwizardAppRule<Object> RULE = new DropwizardAppRule<>(Object.class);\n    private final RestTemplate restTemplate = new RestTemplate();\n\n    private Object postObject(Object person) {\n        return restTemplate.exchange(\"/people\", HttpMethod.POST, new HttpEntity<>(person, new HttpHeaders() {\n            {\n                setContentType(MediaType.APPLICATION_JSON);\n                setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));\n            }\n        }), java.lang.Object.class).getBody();\n    }\n}\n","diff":"@@ -2,0 +2,4 @@\nimport io.dropwizard.testing.junit.DropwizardAppRule;\n+import org.springframework.http.HttpEntity;\n+import org.springframework.http.HttpHeaders;\n+import org.springframework.http.HttpMethod;\n+import org.springframework.http.MediaType;\nimport org.springframework.web.client.RestTemplate;\n@@ -4,1 +8,0 @@\nimport org.springframework.web.client.RestTemplate;\nimport javax.ws.rs.client.Entity;\n-import javax.ws.rs.core.MediaType;\n\n@@ -6,0 +9,2 @@\nimport javax.ws.rs.core.MediaType;\n\n+import java.util.Collections;\n+\nclass TestApi {\n@@ -11,4 +16,6 @@\n\n    private Object postObject(Object person) {\n-       return RULE.client().target(\"http://localhost:8080/people\")\n-           .request()\n-           .post(Entity.entity(person, MediaType.APPLICATION_JSON_TYPE))\n-           .readEntity(Object.class);\n+       return restTemplate.exchange(\"/people\", HttpMethod.POST, new HttpEntity<>(person, new HttpHeaders() {\n+           {\n+               setContentType(MediaType.APPLICATION_JSON);\n+               setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));\n+           }\n+       }), java.lang.Object.class).getBody();\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.dropwizard.boot.test.TransformDropwizardRuleInvocations","displayName":"Convert Dropwizard test rule calls to RestTemplate","groupId":"io.moderne.recipe","artifactId":"rewrite-dropwizard","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

