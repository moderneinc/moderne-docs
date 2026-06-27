---
title: "Find NPM secrets"
sidebar_label: "Find NPM secrets"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find NPM secrets"}
  description={"Locates NPM secrets stored in plain text in code."}
  fqName={"org.openrewrite.java.security.secrets.FindNpmSecrets"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["Java"]}
  tags={["security"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.secrets.FindNpmSecrets"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.secrets.FindNpmSecrets"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/secrets/findnpmsecrets.md"}
  moderneOnly
>

<RecipeHeader.Title>Find NPM secrets</RecipeHeader.Title>

<RecipeHeader.Description>Locates NPM secrets stored in plain text in code.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Find secrets with regular expressions","href":"/user-documentation/recipes/recipe-catalog/java/security/secrets/findsecretsbypattern/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"java","before":"class Test {\n    void npmTest() {\n        String[] npmSecrets = {\n            \"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n            \"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n        String[] notNmpSecrets = {\n            \"//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"foo\",\n            \"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\"};\n    }\n}\n","after":"class Test {\n    void npmTest() {\n        String[] npmSecrets = {\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n        String[] notNmpSecrets = {\n            \"//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"foo\",\n            \"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\"};\n    }\n}\n","diff":"@@ -4,4 +4,4 @@\n    void npmTest() {\n        String[] npmSecrets = {\n-           \"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n-           \"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n-           \"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n-           \"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n        String[] notNmpSecrets = {\n","newFile":false}]},{"variants":[{"language":"java","before":"class Test {\n    void npmTest() {\n        String[] npmSecrets = {\n            \"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n            \"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n        String[] notNmpSecrets = {\n            \"//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"foo\",\n            \"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\"};\n    }\n}\n","after":"class Test {\n    void npmTest() {\n        String[] npmSecrets = {\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n            /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n        String[] notNmpSecrets = {\n            \"//registry.npmjs.org:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"///:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n            \"foo\",\n            \"//registry.npmjs.org/:_authToken=${NPM_TOKEN}\"};\n    }\n}\n","diff":"@@ -4,4 +4,4 @@\n    void npmTest() {\n        String[] npmSecrets = {\n-           \"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n-           \"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n-           \"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n-           \"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=743b294a-cd03-11ec-9d64-0242ac120002\",\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=346a14f2-a672-4668-a892-956a462ab56e\",\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken= 743b294a-cd03-11ec-9d64-0242ac120002\",\n+           /*~~(NPM)~~>*/\"//registry.npmjs.org/:_authToken=npm_xxxxxxxxxxx\"};\n        String[] notNmpSecrets = {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.secrets.FindNpmSecrets","displayName":"Find NPM secrets","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

