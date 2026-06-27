---
title: "Unfold YAML properties"
sidebar_label: "Unfold YAML properties"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/yaml/unfoldproperties" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Unfold YAML properties"}
  description={"Transforms dot-separated property keys in YAML files into nested map hierarchies to enhance clarity and readability, or for compatibility with tools expecting structured YAML."}
  fqName={"org.openrewrite.yaml.UnfoldProperties"}
  languages={["YAML"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/UnfoldProperties.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["YAML"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.yaml.UnfoldProperties"}
  artifact={"org.openrewrite:rewrite-yaml"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.yaml.UnfoldProperties"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/yaml/unfoldproperties.md"}
>

<RecipeHeader.Title>Unfold YAML properties</RecipeHeader.Title>

<RecipeHeader.Description>Transforms dot-separated property keys in YAML files into nested map hierarchies to enhance clarity and readability, or for compatibility with tools expecting structured YAML.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"List","name":"exclusions","required":true,"description":"An optional list of [JsonPath Plus](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expressions to specify keys that should not be unfolded.","example":"$..[org.springframework.security]"},{"type":"List","name":"applyTo","required":true,"description":"An optional list of [JsonPath Plus](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expressions that specify which keys the recipe should target only. Only the properties matching these expressions will be unfolded.","example":"$..[org.springframework.security]"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"exclusions","value":"List.of(\"$..[logging.level][?(@property.match(/.*/))]\", \"$..[enable.process.files]\")"},{"parameter":"applyTo","value":"null"}],"variants":[{"language":"yaml","before":"spring.application.name: my-app\nlogging.level:\n  root: INFO\n  org.springframework.web: DEBUG\nmanagement:\n  metrics.enable.process.files: true\n  endpoint.health:\n    show-components: always\n    show-details: always\n","after":"spring:\n  application:\n    name: my-app\nlogging:\n  level:\n    root: INFO\n    org.springframework.web: DEBUG\nmanagement:\n  metrics:\n    enable.process.files: true\n  endpoint:\n    health:\n      show-components: always\n      show-details: always\n","diff":"@@ -1,4 +1,7 @@\n-spring.application.name: my-app\n-logging.level:\n- root: INFO\n- org.springframework.web: DEBUG\n+spring:\n+ application:\n+   name: my-app\n+logging:\n+ level:\n+   root: INFO\n+   org.springframework.web: DEBUG\nmanagement:\n@@ -6,4 +9,6 @@\n  org.springframework.web: DEBUG\nmanagement:\n- metrics.enable.process.files: true\n- endpoint.health:\n-   show-components: always\n-   show-details: always\n+ metrics:\n+   enable.process.files: true\n+ endpoint:\n+   health:\n+     show-components: always\n+     show-details: always\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.yaml.UnfoldProperties","displayName":"Unfold YAML properties","groupId":"org.openrewrite","artifactId":"rewrite-yaml","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_YAML","requiresConfiguration":true,"cliOptions":" --recipe-option \"exclusions=$..[org.springframework.security]\" --recipe-option \"applyTo=$..[org.springframework.security]\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

