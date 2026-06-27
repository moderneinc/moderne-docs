---
title: "Upgrade Node.js dependencies"
sidebar_label: "Upgrade Node.js dependencies"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Upgrade Node.js dependencies"}
  description={"Upgrade matching Node.js direct dependencies."}
  fqName={"org.openrewrite.nodejs.UpgradeDependencyVersion"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.nodejs.UpgradeDependencyVersion"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.nodejs.UpgradeDependencyVersion"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nodejs/upgradedependencyversion.md"}
  moderneOnly
>

<RecipeHeader.Title>Upgrade Node.js dependencies</RecipeHeader.Title>

<RecipeHeader.Description>Upgrade matching Node.js direct dependencies.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"namePattern","required":true,"description":"Name glob pattern used to match dependencies","example":"@apollo*"},{"type":"String","name":"version","required":true,"description":"Set the version to upgrade to.Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used.","example":"1.x"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"namePattern","value":"lodash*"},{"parameter":"version","value":"^4"}],"unchanged":{"language":"json","code":"{\n  \"name\": \"example\",\n  \"version\": \"1.0.0\",\n  \"lockfileVersion\": 3,\n  \"requires\": true,\n  \"packages\": {\n    \"\": {\n      \"name\": \"example\",\n      \"version\": \"1.0.0\",\n      \"dependencies\": {\n        \"jwt-decode\": \"^4.0.0\",\n        \"lodash.camelcase\": \"^4.3.0\",\n        \"lodash.kebabcase\": \"^4.1.0\"\n      }\n    },\n    \"node_modules/jwt-decode\": {\n      \"version\": \"4.0.0\",\n      \"resolved\": \"https://registry.npmjs.org/jwt-decode/-/jwt-decode-4.0.0.tgz\",\n      \"integrity\": \"sha512-+KJGIyHgkGuIq3IEBNftfhW/LfWhXUIY6OmyVWjliu5KH1y0fw7VQ8YndE2O4qZdMSd9SqbnC8GOcZEy0Om7sA==\",\n      \"engines\": {\n        \"node\": \">=18\"\n      }\n    },\n    \"node_modules/lodash.camelcase\": {\n      \"version\": \"4.3.0\",\n      \"resolved\": \"https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz\",\n      \"integrity\": \"sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==\"\n    },\n    \"node_modules/lodash.kebabcase\": {\n      \"version\": \"4.1.1\",\n      \"resolved\": \"https://registry.npmjs.org/lodash.kebabcase/-/lodash.kebabcase-4.1.1.tgz\",\n      \"integrity\": \"sha512-N8XRTIMMqqDgSy4VLKPnJ/+hpGZN+PHQiJnSenYqPaVV/NCqEogTnAdZLQiGKhxX+JCs8waWq2t1XHWKOmlY8g==\"\n    }\n  }\n}\n"},"variants":[{"language":"json","before":"{\n  \"name\": \"example\",\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"jwt-decode\": \"^4.0.0\",\n    \"lodash.camelcase\": \"^4.3.0\",\n    \"lodash.kebabcase\": \"^4.1.0\"\n  }\n}\n","after":"{\n  \"name\": \"example\",\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"jwt-decode\": \"^4.0.0\",\n    \"lodash.camelcase\": \"^4\",\n    \"lodash.kebabcase\": \"^4\"\n  }\n}\n","diff":"--- package.json\n+++ package.json\n@@ -6,2 +6,2 @@\n  \"dependencies\": {\n    \"jwt-decode\": \"^4.0.0\",\n-   \"lodash.camelcase\": \"^4.3.0\",\n-   \"lodash.kebabcase\": \"^4.1.0\"\n+   \"lodash.camelcase\": \"^4\",\n+   \"lodash.kebabcase\": \"^4\"\n  }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.nodejs.UpgradeDependencyVersion","displayName":"Upgrade Node.js dependencies","groupId":"org.openrewrite.recipe","artifactId":"rewrite-nodejs","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NODEJS","requiresConfiguration":true,"cliOptions":" --recipe-option \"namePattern='@apollo*'\" --recipe-option \"version=1.x\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

