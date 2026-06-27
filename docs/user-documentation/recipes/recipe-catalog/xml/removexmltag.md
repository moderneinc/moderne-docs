---
title: "Remove XML tag"
sidebar_label: "Remove XML tag"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/xml/removexmltag" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove XML tag"}
  description={"Removes XML tags matching the provided expression."}
  fqName={"org.openrewrite.xml.RemoveXmlTag"}
  languages={["XML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/RemoveXmlTag.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["XML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.xml.RemoveXmlTag"}
  artifact={"org.openrewrite:rewrite-xml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.xml.RemoveXmlTag"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/xml/removexmltag.md"}
>

<RecipeHeader.Title>Remove XML tag</RecipeHeader.Title>

<RecipeHeader.Description>Removes XML tags matching the provided expression.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"xPath","required":true,"description":"An XPath expression used to find matching tags.","example":"/project/dependencies/dependency"},{"type":"String","name":"fileMatcher","required":false,"description":"If provided only matching files will be modified. This is a glob expression.","example":"'**/application-*.xml'"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"xPath","value":"//bean"},{"parameter":"fileMatcher","value":"**/beans.xml"}],"variants":[{"language":"xml","before":"<beans>\n    <bean id='myBean.subpackage.subpackage2'/>\n    <other id='myBean.subpackage.subpackage2'/>\n</beans>\n","after":"<beans>\n    <other id='myBean.subpackage.subpackage2'/>\n</beans>\n","diff":"--- my/project/beans.xml\n+++ my/project/beans.xml\n@@ -2,1 +2,0 @@\n<beans>\n-   <bean id='myBean.subpackage.subpackage2'/>\n    <other id='myBean.subpackage.subpackage2'/>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.xml.RemoveXmlTag","displayName":"Remove XML tag","groupId":"org.openrewrite","artifactId":"rewrite-xml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_XML","requiresConfiguration":true,"cliOptions":" --recipe-option \"xPath=/project/dependencies/dependency\" --recipe-option \"fileMatcher='**/application-*.xml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

