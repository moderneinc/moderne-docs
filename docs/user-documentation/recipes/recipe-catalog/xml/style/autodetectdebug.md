---
title: "XML style Auto-detection debug"
sidebar_label: "XML style Auto-detection debug"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/xml/style/autodetectdebug" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"XML style Auto-detection debug"}
  description={"Runs XML Autodetect and records the results in data tables and search markers. A debugging tool for figuring out why XML documents get styled the way they do."}
  fqName={"org.openrewrite.xml.style.AutodetectDebug"}
  languages={["XML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/style/AutodetectDebug.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["XML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.xml.style.AutodetectDebug"}
  artifact={"org.openrewrite:rewrite-xml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.xml.style.AutodetectDebug"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/xml/style/autodetectdebug.md"}
>

<RecipeHeader.Title>XML style Auto-detection debug</RecipeHeader.Title>

<RecipeHeader.Description>Runs XML Autodetect and records the results in data tables and search markers. A debugging tool for figuring out why XML documents get styled the way they do.</RecipeHeader.Description>

</RecipeHeader>

<UsageList usage={{"recipeName":"org.openrewrite.xml.style.AutodetectDebug","displayName":"XML style Auto-detection debug","groupId":"org.openrewrite","artifactId":"rewrite-xml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_XML","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.xml.table.XmlStyleReport","displayName":"XML style report","description":"Records style information about XML documents. Used for debugging style auto-detection issues.","columns":[{"name":"File name","description":"The name of the file that was analyzed."},{"name":"Use tabs","description":"When 'true', tabs are used for indentation. When 'false', spaces are used."},{"name":"Indent size","description":"The number of spaces that are used for each level of indentation."},{"name":"Tab size","description":"The number of spaces that a tab character represents."},{"name":"Continuation indent size","description":"The number of spaces that are used to indent an attribute that is on its own line."},{"name":"Indent count","description":"Count of tags in the file whose prefixes were evaluated."},{"name":"Indents matching own style","description":"Count of tags in the file whose prefix match the style of the file itself."},{"name":"Indents matching project style","description":"Count of tags in the file whose prefix match the overall style of the project."},{"name":"Continuation indent count","description":"Count of attributes in the file whose prefixes were evaluated."},{"name":"Continuation indents matching own style","description":"CCount of attributes in the file whose prefix matches  the style of the file itself."},{"name":"Continuation indents matching project style","description":"Count of attributes in the file whose prefix matches the overall style of the project."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

