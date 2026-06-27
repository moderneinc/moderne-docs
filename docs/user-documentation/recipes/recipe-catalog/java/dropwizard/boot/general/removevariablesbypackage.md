---
title: "Remove class variables matching package filter"
sidebar_label: "Remove class variables matching package filter"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Remove class variables matching package filter"}
  description={"Removes variable declarations whose type belongs to the specified package."}
  fqName={"io.moderne.java.dropwizard.boot.general.RemoveVariablesByPackage"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.java.dropwizard.boot.general.RemoveVariablesByPackage"}
  artifact={"io.moderne.recipe:rewrite-dropwizard"}
  appLink={"https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.general.RemoveVariablesByPackage"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/general/removevariablesbypackage.md"}
  moderneOnly
>

<RecipeHeader.Title>Remove class variables matching package filter</RecipeHeader.Title>

<RecipeHeader.Description>Removes variable declarations whose type belongs to the specified package.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"packageFilter","required":true,"description":"The package name to filter by. Variables with types in this package (or subpackages) will be removed.","example":"com.example.unwanted"},{"type":"Boolean","name":"removeOnlyClassScope","required":true,"description":"When true, only removes class-level field declarations; local variables within methods are left unchanged.","example":"true"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"packageFilter","value":"com.codahale.metrics"},{"parameter":"removeOnlyClassScope","value":"false"}],"variants":[{"language":"java","before":"package com.example;\n\nimport com.codahale.metrics.MetricRegistry;\n\nclass MyService {\n    private MetricRegistry registry;\n}\n","after":"package com.example;\n\nimport io.micrometer.core.instrument.MeterRegistry;\n\nclass MyService {\n    private MeterRegistry registry;\n}\n","diff":"@@ -3,1 +3,1 @@\npackage com.example;\n\n-import com.codahale.metrics.MetricRegistry;\n+import io.micrometer.core.instrument.MeterRegistry;\n\n@@ -6,1 +6,1 @@\n\nclass MyService {\n-   private MetricRegistry registry;\n+   private MeterRegistry registry;\n}\n","newFile":false}]},{"parameters":[{"parameter":"packageFilter","value":"java.lang"},{"parameter":"removeOnlyClassScope","value":"false"}],"variants":[{"language":"java","before":"package com.example;\n\nclass TestClass {\n    private String shouldBeRemoved = \"test\";\n    private static final int STAYS = 42;\n\n    public void method() {\n        String localVar = \"REMOVED\";\n    }\n}\n","after":"package com.example;\n\nclass TestClass {\n    private static final int STAYS = 42;\n\n    public void method() {\n    }\n}\n","diff":"@@ -4,1 +4,0 @@\n\nclass TestClass {\n-   private String shouldBeRemoved = \"test\";\n    private static final int STAYS = 42;\n@@ -8,1 +7,0 @@\n\n    public void method() {\n-       String localVar = \"REMOVED\";\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.java.dropwizard.boot.general.RemoveVariablesByPackage","displayName":"Remove class variables matching package filter","groupId":"io.moderne.recipe","artifactId":"rewrite-dropwizard","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD","requiresConfiguration":true,"cliOptions":" --recipe-option \"packageFilter=com.example.unwanted\" --recipe-option \"removeOnlyClassScope=true\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

