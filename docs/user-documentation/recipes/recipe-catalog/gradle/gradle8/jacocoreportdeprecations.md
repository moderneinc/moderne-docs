---
title: "Replace Gradle 8 introduced deprecations in JaCoCo report task"
sidebar_label: "Replace Gradle 8 introduced deprecations in JaCoCo report task"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/gradle8/jacocoreportdeprecations" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace Gradle 8 introduced deprecations in JaCoCo report task"}
  description={"Set the `enabled` to `required` and the `destination` to `outputLocation` for Reports deprecations that were removed in gradle 8. See [the gradle docs on this topic](https://docs.gradle.org/current/userguide/upgrading_version_7.html#report_and_testreport_api_cleanup)."}
  fqName={"org.openrewrite.gradle.gradle8.JacocoReportDeprecations"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/gradle8/JacocoReportDeprecations.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.gradle8.JacocoReportDeprecations"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.gradle8.JacocoReportDeprecations"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/gradle8/jacocoreportdeprecations.md"}
>

<RecipeHeader.Title>Replace Gradle 8 introduced deprecations in JaCoCo report task</RecipeHeader.Title>

<RecipeHeader.Description>Set the `enabled` to `required` and the `destination` to `outputLocation` for Reports deprecations that were removed in gradle 8. See [the gradle docs on this topic](https://docs.gradle.org/current/userguide/upgrading_version_7.html#report_and_testreport_api_cleanup).</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"groovy","before":"plugins {\n    id \"java\"\n    id \"jacoco\"\n}\n\njacocoTestReport {\n    reports {\n        xml.enabled = false\n        csv.enabled = true\n        html.enabled = false\n\n        xml.destination = layout.buildDirectory.dir('jacocoXml')\n        csv.destination = layout.buildDirectory.dir('jacocoCsv')\n        html.destination = layout.buildDirectory.dir('jacocoHtml')\n    }\n}\n","after":"plugins {\n    id \"java\"\n    id \"jacoco\"\n}\n\njacocoTestReport {\n    reports {\n        xml.required = false\n        csv.required = true\n        html.required = false\n\n        xml.outputLocation = layout.buildDirectory.dir('jacocoXml')\n        csv.outputLocation = layout.buildDirectory.dir('jacocoCsv')\n        html.outputLocation = layout.buildDirectory.dir('jacocoHtml')\n    }\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -8,3 +8,3 @@\njacocoTestReport {\n    reports {\n-       xml.enabled = false\n-       csv.enabled = true\n-       html.enabled = false\n+       xml.required = false\n+       csv.required = true\n+       html.required = false\n\n@@ -12,3 +12,3 @@\n        html.enabled = false\n\n-       xml.destination = layout.buildDirectory.dir('jacocoXml')\n-       csv.destination = layout.buildDirectory.dir('jacocoCsv')\n-       html.destination = layout.buildDirectory.dir('jacocoHtml')\n+       xml.outputLocation = layout.buildDirectory.dir('jacocoXml')\n+       csv.outputLocation = layout.buildDirectory.dir('jacocoCsv')\n+       html.outputLocation = layout.buildDirectory.dir('jacocoHtml')\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.gradle8.JacocoReportDeprecations","displayName":"Replace Gradle 8 introduced deprecations in JaCoCo report task","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

