---
title: "Find XML namespace prefixes"
sidebar_label: "Find XML namespace prefixes"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/xml/search/findnamespaceprefix" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find XML namespace prefixes"}
  description={"Find XML namespace prefixes, optionally restricting the search by a XPath expression."}
  fqName={"org.openrewrite.xml.search.FindNamespacePrefix"}
  languages={["XML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/search/FindNamespacePrefix.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["XML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.xml.search.FindNamespacePrefix"}
  artifact={"org.openrewrite:rewrite-xml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.xml.search.FindNamespacePrefix"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/xml/search/findnamespaceprefix.md"}
>

<RecipeHeader.Title>Find XML namespace prefixes</RecipeHeader.Title>

<RecipeHeader.Description>Find XML namespace prefixes, optionally restricting the search by a XPath expression.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"namespacePrefix","required":true,"description":"The Namespace Prefix to find.","example":"http://www.w3.org/2001/XMLSchema-instance"},{"type":"String","name":"xPath","required":false,"description":"An XPath expression used to find namespace URIs.","example":"/dependencies/dependency"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"namespacePrefix","value":"xsi"},{"parameter":"xPath","value":"null"}],"variants":[{"language":"xml","before":"","after":"<!--~~>--><beans xmlns=\"http://www.springframework.org/schema/beans\"\n    xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n    xsi:schemaLocation=\"\n        http://cxf.apache.org/jaxws http://cxf.apache.org/schemas/jaxws.xsd\n        http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd\">\n\n    <jaxws:client name=\"{http://cxf.apache.org/hello_world_soap_http}SoapPort\" createdFromAPI=\"true\" xmlns:jaxws=\"http://cxf.apache.org/jaxws\">\n        <jaxws:conduitSelector>\n            <bean class=\"org.apache.cxf.endpoint.DeferredConduitSelector\"/>\n        </jaxws:conduitSelector>\n    </jaxws:client>\n</beans>\n","newFile":true}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.xml.search.FindNamespacePrefix","displayName":"Find XML namespace prefixes","groupId":"org.openrewrite","artifactId":"rewrite-xml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_XML","requiresConfiguration":true,"cliOptions":" --recipe-option \"namespacePrefix=http://www.w3.org/2001/XMLSchema-instance\" --recipe-option \"xPath=/dependencies/dependency\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

