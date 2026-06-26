---
title: "Change YAML property"
sidebar_label: "Change YAML property"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/yaml/changepropertyvalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change YAML property"}
  description={"Change a YAML property. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files."}
  fqName={"org.openrewrite.yaml.ChangePropertyValue"}
  languages={["YAML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/ChangePropertyValue.java"}
/>

<RecipeHeader
  displayName={"Change YAML property"}
  description={"Change a YAML property. Expects dot notation for nested YAML mappings, similar to how Spring Boot interprets `application.yml` files."}
  type={"Single recipe"}
  languages={["YAML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.yaml.ChangePropertyValue"}
  artifact={"org.openrewrite:rewrite-yaml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.yaml.ChangePropertyValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/yaml/changepropertyvalue.md"}
/>

<OptionsTable options={[{"type":"String","name":"propertyKey","required":true,"description":"The key to look for. Supports glob patterns.","example":"management.metrics.binders.*.enabled"},{"type":"String","name":"newValue","required":true,"description":"The new value to be used for key specified by `propertyKey`.","example":"newValue"},{"type":"String","name":"oldValue","required":false,"description":"Only change the property value if it matches the configured `oldValue`.","example":"oldValue"},{"type":"Boolean","name":"regex","required":false,"description":"Default `false`. If enabled, `oldValue` will be interpreted as a Regular Expression, to replace only all parts that match the regex. Capturing group can be used in `newValue`."},{"type":"Boolean","name":"relaxedBinding","required":false,"description":"Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false`  to use exact matching."},{"type":"String","name":"filePattern","required":false,"description":"A glob expression representing a file path to search for (relative to the project root). Blank/null matches all.","example":".github/workflows/*.yml"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"propertyKey","value":"my.prop"},{"parameter":"newValue","value":"bar"},{"parameter":"oldValue","value":"null"},{"parameter":"regex","value":"null"},{"parameter":"relaxedBinding","value":"null"},{"parameter":"filePattern","value":"null"}],"variants":[{"language":"yaml","before":"my.prop: foo\n","after":"my.prop: bar\n","diff":"@@ -1,1 +1,1 @@\n-my.prop: foo\n+my.prop: bar\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.yaml.ChangePropertyValue","displayName":"Change YAML property","groupId":"org.openrewrite","artifactId":"rewrite-yaml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_YAML","requiresConfiguration":true,"cliOptions":" --recipe-option \"propertyKey=management.metrics.binders.*.enabled\" --recipe-option \"newValue=newValue\" --recipe-option \"oldValue=oldValue\" --recipe-option \"filePattern=.github/workflows/*.yml\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

