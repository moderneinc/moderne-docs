---
title: "Find and replace literals in HCL files"
sidebar_label: "Find and replace literals in HCL files"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/hcl/search/findandreplaceliteral" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find and replace literals in HCL files"}
  description={"Find and replace literal values in HCL files. This recipe parses the source files on which it runs as HCL, meaning you can execute HCL language-specific recipes before and after this recipe in a single recipe run."}
  fqName={"org.openrewrite.hcl.search.FindAndReplaceLiteral"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-hcl/src/main/java/org/openrewrite/hcl/search/FindAndReplaceLiteral.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.hcl.search.FindAndReplaceLiteral"}
  artifact={"org.openrewrite:rewrite-hcl"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.hcl.search.FindAndReplaceLiteral"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/hcl/search/findandreplaceliteral.md"}
>

<RecipeHeader.Title>Find and replace literals in HCL files</RecipeHeader.Title>

<RecipeHeader.Description>Find and replace literal values in HCL files. This recipe parses the source files on which it runs as HCL, meaning you can execute HCL language-specific recipes before and after this recipe in a single recipe run.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"find","required":true,"description":"The literal to find (and replace)","example":"blacklist"},{"type":"String","name":"replace","required":false,"description":"The replacement literal for `find`. This snippet can be multiline.","example":"denylist"},{"type":"Boolean","name":"regex","required":false,"description":"Default false. If true, `find` will be interpreted as a Regular Expression, and capture group contents will be available in `replace`."},{"type":"Boolean","name":"caseSensitive","required":false,"description":"If `true` the search will be sensitive to case. Default `false`."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"find","value":"app-cluster"},{"parameter":"replace","value":"new-app-cluster"},{"parameter":"regex","value":"null"},{"parameter":"caseSensitive","value":"null"}],"variants":[{"language":"hcl","before":"config = {\n  app_deployment = {\n    cluster_name = \"app-cluster\"\n  }\n}\n","after":"config = {\n  app_deployment = {\n    cluster_name = \"new-app-cluster\"\n  }\n}\n","diff":"@@ -3,1 +3,1 @@\nconfig = {\n  app_deployment = {\n-   cluster_name = \"app-cluster\"\n+   cluster_name = \"new-app-cluster\"\n  }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.hcl.search.FindAndReplaceLiteral","displayName":"Find and replace literals in HCL files","groupId":"org.openrewrite","artifactId":"rewrite-hcl","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_HCL","requiresConfiguration":true,"cliOptions":" --recipe-option \"find=blacklist\" --recipe-option \"replace=denylist\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

