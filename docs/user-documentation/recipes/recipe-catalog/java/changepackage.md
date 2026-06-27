---
title: "Rename package name"
sidebar_label: "Rename package name"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/changepackage" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Rename package name"}
  description={"A recipe that will rename a package name in package statements, imports, and fully-qualified types."}
  fqName={"org.openrewrite.java.ChangePackage"}
  languages={["Java"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangePackage.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.java.ChangePackage"}
  artifact={"org.openrewrite:rewrite-java"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.ChangePackage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/changepackage.md"}
>

<RecipeHeader.Title>Rename package name</RecipeHeader.Title>

<RecipeHeader.Description>A recipe that will rename a package name in package statements, imports, and fully-qualified types.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"oldPackageName","required":true,"description":"The package name to replace.","example":"com.yourorg.foo"},{"type":"String","name":"newPackageName","required":true,"description":"New package name to replace the old package name with.","example":"com.yourorg.bar"},{"type":"Boolean","name":"recursive","required":false,"description":"Recursively change subpackage names"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldPackageName","value":"org.openrewrite"},{"parameter":"newPackageName","value":"openrewrite"},{"parameter":"recursive","value":"false"}],"variants":[{"language":"java","before":"import org.openrewrite.Foo;\nclass Test {\n}\n","after":"import openrewrite.Foo;\nclass Test {\n}\n","diff":"@@ -1,1 +1,1 @@\n-import org.openrewrite.Foo;\n+import openrewrite.Foo;\nclass Test {\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.ChangePackage","displayName":"Rename package name","groupId":"org.openrewrite","artifactId":"rewrite-java","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_JAVA","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldPackageName=com.yourorg.foo\" --recipe-option \"newPackageName=com.yourorg.bar\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

