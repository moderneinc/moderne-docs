---
title: "Find `Security.setProperty(..)` calls for certain properties"
sidebar_label: "Find `Security.setProperty(..)` calls for certain properties"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find `Security.setProperty(..)` calls for certain properties"}
  description={"There is a defined set of properties that should not be set using `Security.setProperty(..)` as they can lead to security vulnerabilities."}
  fqName={"io.moderne.cryptography.FindSecuritySetProperties"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.cryptography.FindSecuritySetProperties"}
  artifact={"io.moderne.recipe:rewrite-cryptography"}
  appLink={"https://app.moderne.io/recipes/io.moderne.cryptography.FindSecuritySetProperties"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/cryptography/findsecuritysetproperties.md"}
  moderneOnly
>

<RecipeHeader.Title>Find `Security.setProperty(..)` calls for certain properties</RecipeHeader.Title>

<RecipeHeader.Description>There is a defined set of properties that should not be set using `Security.setProperty(..)` as they can lead to security vulnerabilities.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"List","name":"properties","required":false,"description":"A list of the properties we want to prevent being set with `Security.setProperty(..)`.","example":"crypto.policy"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"properties","value":"List.of(\"crypto.policy\")"}],"variants":[{"language":"java","before":"import java.security.Security;\n\nclass C {\n    void update() {\n        String key = \"crypto.policy\";\n        Security.setProperty(key, \"unlimited\");\n    }\n}\n","after":"import java.security.Security;\n\nclass C {\n    void update() {\n        String key = /*~~>*/\"crypto.policy\";\n        Security.setProperty(key, \"unlimited\");\n    }\n}\n","diff":"@@ -5,1 +5,1 @@\nclass C {\n    void update() {\n-       String key = \"crypto.policy\";\n+       String key = /*~~>*/\"crypto.policy\";\n        Security.setProperty(key, \"unlimited\");\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.cryptography.FindSecuritySetProperties","displayName":"Find `Security.setProperty(..)` calls for certain properties","groupId":"io.moderne.recipe","artifactId":"rewrite-cryptography","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_CRYPTOGRAPHY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.cryptography.table.InsecureSetProperties","displayName":"Insecure `Security.setProperty(..)` uses.","description":"An itemization of the properties used in such calls","columns":[{"name":"Source file","description":"Path to the file where the result was found"},{"name":"Source code","description":"The source code where the insecure property is defined, which may not contain a `Security.setProperty(..)` call directly if the property was defined somewhere and through data flow analysis we've concluded that it is later used in a `Security.setProperty(..)` call."},{"name":"Property","description":"The property that is set insecurely, e.g. `crypto.policy`."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

