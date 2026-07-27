---
title: "Javascript real-time communication library insights"
sidebar_label: "Javascript real-time communication library insights"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Javascript real-time communication library insights"}
  description={"Discover which popular javascript real-time communication libraries (Socket.io, Ws, SockJS, etc.) are being used in your projects."}
  fqName={"org.openrewrite.nodejs.search.RealTimeCommunicationInsights"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.nodejs.search.RealTimeCommunicationInsights"}
  artifact={"org.openrewrite.recipe:rewrite-nodejs"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.nodejs.search.RealTimeCommunicationInsights"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/nodejs/search/realtimecommunicationinsights.md"}
  moderneOnly
>

<RecipeHeader.Title>Javascript real-time communication library insights</RecipeHeader.Title>

<RecipeHeader.Description>Discover which popular javascript real-time communication libraries (Socket.io, Ws, SockJS, etc.) are being used in your projects.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"},{"name":"Node.js dependency insight","href":"/user-documentation/recipes/recipe-catalog/javascript/search/dependencyinsight/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.nodejs.search.RealTimeCommunicationInsights","displayName":"Javascript real-time communication library insights","groupId":"org.openrewrite.recipe","artifactId":"rewrite-nodejs","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NODEJS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.javascript.table.NodeDependenciesInUse","displayName":"Node.js dependencies in use","description":"Direct and transitive dependencies in use in Node.js projects.","columns":[{"name":"Project name","description":"The name of the project that contains the dependency (from package.json)."},{"name":"Project path","description":"The path to the project."},{"name":"Package name","description":"The name of the npm package."},{"name":"Version","description":"The resolved version of the package."},{"name":"Version constraint","description":"The version constraint as declared in package.json."},{"name":"Scope","description":"Dependency scope: dependencies, devDependencies, peerDependencies, optionalDependencies, or bundledDependencies."},{"name":"Direct","description":"Whether this is a direct dependency (true) or transitive dependency (false)."},{"name":"Count","description":"How many times this dependency appears in the dependency tree."},{"name":"License","description":"The SPDX license identifier of the package, if available."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

