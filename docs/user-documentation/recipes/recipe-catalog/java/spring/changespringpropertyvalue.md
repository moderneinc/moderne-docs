---
title: "Change the value of a spring application property"
sidebar_label: "Change the value of a spring application property"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/spring/changespringpropertyvalue" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change the value of a spring application property"}
  description={"Change Spring application property values existing in either Properties or YAML files, and in `@Value`, `@ConditionalOnProperty`, `@SpringBootTest`, or `@TestPropertySource` annotations."}
  fqName={"org.openrewrite.java.spring.ChangeSpringPropertyValue"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/ChangeSpringPropertyValue.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.spring.ChangeSpringPropertyValue"}
  artifact={"org.openrewrite.recipe:rewrite-spring"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.spring.ChangeSpringPropertyValue"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/spring/changespringpropertyvalue.md"}
>

<RecipeHeader.Title>Change the value of a spring application property</RecipeHeader.Title>

<RecipeHeader.Description>Change Spring application property values existing in either Properties or YAML files, and in `@Value`, `@ConditionalOnProperty`, `@SpringBootTest`, or `@TestPropertySource` annotations.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"propertyKey","required":true,"description":"The name of the property key whose value is to be changed.","example":"management.metrics.binders.files.enabled"},{"type":"String","name":"newValue","required":true,"description":"The new value to be used for key specified by `propertyKey`.","example":"management.metrics.enable.process.files"},{"type":"String","name":"oldValue","required":false,"description":"Only change the property value if it matches the configured `oldValue`.","example":"false"},{"type":"Boolean","name":"regex","required":false,"description":"Default false. If enabled, `oldValue` will be interpreted as a Regular Expression, and capture group contents will be available in `newValue`"},{"type":"Boolean","name":"relaxedBinding","required":false,"description":"Whether to match the `propertyKey` using [relaxed binding](https://docs.spring.io/spring-boot/docs/2.5.6/reference/html/features.html#features.external-config.typesafe-configuration-properties.relaxed-binding) rules. Default is `true`. Set to `false` to use exact matching."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"propertyKey","value":"server.port"},{"parameter":"newValue","value":"8081"},{"parameter":"oldValue","value":"null"},{"parameter":"regex","value":"null"},{"parameter":"relaxedBinding","value":"null"}],"unchanged":{"language":"mavenProject","code":"project"},"variants":[{"language":"properties","before":"server.port=8080","after":"server.port=8081","diff":"@@ -1,1 +1,1 @@\n-server.port=8080\n+server.port=8081\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.spring.ChangeSpringPropertyValue","displayName":"Change the value of a spring application property","groupId":"org.openrewrite.recipe","artifactId":"rewrite-spring","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING","requiresConfiguration":true,"cliOptions":" --recipe-option \"propertyKey=management.metrics.binders.files.enabled\" --recipe-option \"newValue=management.metrics.enable.process.files\" --recipe-option \"oldValue=false\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

