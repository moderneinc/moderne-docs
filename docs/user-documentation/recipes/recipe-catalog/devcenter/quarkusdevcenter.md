---
title: "DevCenter for Quarkus"
sidebar_label: "DevCenter for Quarkus"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"DevCenter for Quarkus"}
  description={"A DevCenter that tracks the latest Quarkus framework versions and applies best practices. This DevCenter includes recipes to upgrade Quarkus versions, migrate from deprecated APIs, and ensure compatibility with the latest Java versions and testing frameworks."}
  fqName={"io.moderne.devcenter.QuarkusDevCenter"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"io.moderne.devcenter.QuarkusDevCenter"}
  artifact={"io.moderne.recipe:rewrite-devcenter"}
  appLink={"https://app.moderne.io/recipes/io.moderne.devcenter.QuarkusDevCenter"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/devcenter/quarkusdevcenter.md"}
  moderneOnly
>

<RecipeHeader.Title>DevCenter for Quarkus</RecipeHeader.Title>

<RecipeHeader.Description>A DevCenter that tracks the latest Quarkus framework versions and applies best practices. This DevCenter includes recipes to upgrade Quarkus versions, migrate from deprecated APIs, and ensure compatibility with the latest Java versions and testing frameworks.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Library upgrade","href":"/user-documentation/recipes/recipe-catalog/devcenter/libraryupgrade/"},{"name":"Parent POM upgrade","href":"/user-documentation/recipes/recipe-catalog/devcenter/parentpomupgrade/"},{"name":"Move to a later Java version","href":"/user-documentation/recipes/recipe-catalog/devcenter/javaversionupgrade/"},{"name":"OWASP top ten","href":"/user-documentation/recipes/recipe-catalog/devcenter/securitystarter/"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"io.moderne.devcenter.QuarkusDevCenter","displayName":"DevCenter for Quarkus","groupId":"io.moderne.recipe","artifactId":"rewrite-devcenter","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DEVCENTER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.devcenter.table.UpgradesAndMigrations","displayName":"Upgrades and migrations","description":"Progress towards organizational objectives on library or language migrations and upgrades.","columns":[{"name":"Card","description":"The display name of the DevCenter card"},{"name":"Ordinal","description":"The ordinal position of this value relative to other values."},{"name":"Value","description":"The display value of the current state of this repository."},{"name":"Minimum version","description":"The minimum matching version that is currently in use."}]},{"name":"org.openrewrite.java.table.MethodCalls","displayName":"Method calls","description":"The text of matching method invocations.","columns":[{"name":"Source file","description":"The source file that the method call occurred in."},{"name":"Method call","description":"The text of the method call."},{"name":"Class name","description":"The class name of the method call."},{"name":"Method name","description":"The method name of the method call."},{"name":"Argument types","description":"The argument types of the method call."}]},{"name":"org.openrewrite.java.security.table.MissingAuthorization","displayName":"Missing authorization","description":"Spring MVC handler methods reachable to anonymous users without an explicit authorization annotation.","columns":[{"name":"Source path","description":"The path to the source file containing the handler method."},{"name":"Controller class","description":"The fully qualified name of the controller class."},{"name":"Handler method","description":"The name of the handler method."},{"name":"HTTP method","description":"The HTTP method served by the handler."},{"name":"URL pattern","description":"The combined class- and method-level request mapping pattern."},{"name":"Reason","description":"Why the handler is considered to be missing authorization."}]},{"name":"io.moderne.devcenter.table.SecurityIssues","displayName":"Security issues","description":"Security issues in the repository.","columns":[{"name":"Ordinal","description":"The ordinal position of this issue relative to other issues."},{"name":"Issue name","description":"The name of the security issue."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

