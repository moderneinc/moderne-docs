---
title: "Find Gradle repository"
sidebar_label: "Find Gradle repository"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/search/findrepository" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find Gradle repository"}
  description={"Find a Gradle repository by url."}
  fqName={"org.openrewrite.gradle.search.FindRepository"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/FindRepository.java"}
/>

<RecipeHeader
  displayName={"Find Gradle repository"}
  description={"Find a Gradle repository by url."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.search.FindRepository"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.search.FindRepository"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/search/findrepository.md"}
/>

<OptionsTable options={[{"type":"String","name":"type","required":false,"description":"The type of the artifact repository","example":"maven"},{"type":"String","name":"url","required":false,"description":"The url of the artifact repository","example":"https://repo.spring.io"},{"type":"Purpose","name":"purpose","required":false,"description":"The purpose of this repository in terms of resolving project or plugin dependencies"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"type","value":"null"},{"parameter":"url","value":"https://central.sonatype.com/repository/maven-snapshots"},{"parameter":"purpose","value":"null"}],"variants":[{"language":"groovy","before":"buildscript {\n  repositories {\n    maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n    maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n  }\n}\n\nrepositories {\n  maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n  maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n  maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n  maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n}\n","after":"buildscript {\n  repositories {\n    /*~~>*/maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n    /*~~>*/maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    /*~~>*/maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    /*~~>*/maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n  }\n}\n\nrepositories {\n  /*~~>*/maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n  /*~~>*/maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n  /*~~>*/maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n  /*~~>*/maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -3,4 +3,4 @@\nbuildscript {\n  repositories {\n-   maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n-   maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n-   maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n-   maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n+   /*~~>*/maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n+   /*~~>*/maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n+   /*~~>*/maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n+   /*~~>*/maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n  }\n@@ -11,4 +11,4 @@\n\nrepositories {\n- maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n- maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n- maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n- maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n+ /*~~>*/maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n+ /*~~>*/maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n+ /*~~>*/maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n+ /*~~>*/maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n}\n","newFile":false},{"language":"settingsGradle","before":"pluginManagement {\n  repositories {\n    maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n    maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n  }\n}\n","after":"pluginManagement {\n  repositories {\n    /*~~>*/maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n    /*~~>*/maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    /*~~>*/maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n    /*~~>*/maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n  }\n}\n","diff":"@@ -3,4 +3,4 @@\npluginManagement {\n  repositories {\n-   maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n-   maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n-   maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n-   maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n+   /*~~>*/maven { url = \"https://central.sonatype.com/repository/maven-snapshots\" }\n+   /*~~>*/maven { url = uri(\"https://central.sonatype.com/repository/maven-snapshots\") }\n+   /*~~>*/maven { setUrl(\"https://central.sonatype.com/repository/maven-snapshots\") }\n+   /*~~>*/maven { setUrl(uri(\"https://central.sonatype.com/repository/maven-snapshots\")) }\n  }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.search.FindRepository","displayName":"Find Gradle repository","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

