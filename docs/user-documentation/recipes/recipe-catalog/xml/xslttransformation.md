---
title: "XSLT transformation"
sidebar_label: "XSLT transformation"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/xml/xslttransformation" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"XSLT transformation"}
  description={"Apply the specified XSLT transformation on matching files. Note that there are no format matching guarantees when running this recipe."}
  fqName={"org.openrewrite.xml.XsltTransformation"}
  languages={["XML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/XsltTransformation.java"}
/>

<RecipeHeader
  displayName={"XSLT transformation"}
  description={"Apply the specified XSLT transformation on matching files. Note that there are no format matching guarantees when running this recipe."}
  type={"Single recipe"}
  languages={["XML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.xml.XsltTransformation"}
  artifact={"org.openrewrite:rewrite-xml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.xml.XsltTransformation"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/xml/xslttransformation.md"}
/>

<OptionsTable options={[{"type":"String","name":"xslt","required":false,"description":"The transformation to be applied.","example":"<xsl:stylesheet ...>...</xsl:stylesheet>"},{"type":"String","name":"xsltResource","required":false,"description":"Recipe transformation provided as a classpath resource.","example":"/changePlugin.xslt"},{"type":"String","name":"filePattern","required":true,"description":"A glob expression that can be used to constrain which directories or source files should be searched. Multiple patterns may be specified, separated by a semicolon `;`. If multiple patterns are supplied any of the patterns matching will be interpreted as a match.","example":"**/*.xml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"xslt","value":"xslt"},{"parameter":"xsltResource","value":"null"},{"parameter":"filePattern","value":"**/*.xml"}],"variants":[{"language":"xml","before":"<configuration>\n    <activeRecipes>\n        <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>\n    </activeRecipes>\n</configuration>\n","after":"<configuration>\n    <activeRecipes>\n        <activeRecipe>org.openrewrite.java.cleanup.UnnecessaryThrows</activeRecipe>\n    </activeRecipes>\n</configuration>\n","diff":"@@ -3,1 +3,1 @@\n<configuration>\n    <activeRecipes>\n-       <recipe>org.openrewrite.java.cleanup.UnnecessaryThrows</recipe>\n+       <activeRecipe>org.openrewrite.java.cleanup.UnnecessaryThrows</activeRecipe>\n    </activeRecipes>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.xml.XsltTransformation","displayName":"XSLT transformation","groupId":"org.openrewrite","artifactId":"rewrite-xml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_XML","requiresConfiguration":true,"cliOptions":" --recipe-option \"xslt=<xsl:stylesheet ...>...</xsl:stylesheet>\" --recipe-option \"xsltResource=/changePlugin.xslt\" --recipe-option \"filePattern='**/*.xml'\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

