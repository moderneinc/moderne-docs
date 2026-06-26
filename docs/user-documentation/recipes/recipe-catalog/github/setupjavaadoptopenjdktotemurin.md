---
title: "Use `actions/setup-java` `temurin` distribution"
sidebar_label: "Use `actions/setup-java` `temurin` distribution"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/github/setupjavaadoptopenjdktotemurin" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Use `actions/setup-java` `temurin` distribution"}
  description={"Adopt OpenJDK got moved to Eclipse Temurin and won't be updated anymore. It is highly recommended to migrate workflows from adopt to temurin to keep receiving software and security updates. See more details in the [Good-bye AdoptOpenJDK post](https://blog.adoptopenjdk.net/2021/08/goodbye-adoptopenjdk-hello-adoptium/)."}
  fqName={"org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin"}
  languages={["OpenRewrite"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/SetupJavaAdoptOpenJDKToTemurin.java"}
/>

<RecipeHeader
  displayName={"Use `actions/setup-java` `temurin` distribution"}
  description={"Adopt OpenJDK got moved to Eclipse Temurin and won't be updated anymore. It is highly recommended to migrate workflows from adopt to temurin to keep receiving software and security updates. See more details in the [Good-bye AdoptOpenJDK post](https://blog.adoptopenjdk.net/2021/08/goodbye-adoptopenjdk-hello-adoptium/)."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={["security"]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin"}
  artifact={"org.openrewrite.recipe:rewrite-github-actions"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/github/setupjavaadoptopenjdktotemurin.md"}
/>

<ExampleList examples={[{"variants":[{"language":"yaml","before":"jobs:\n  build:\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: set-up-jdk-0\n        uses: actions/setup-java@v2.3.0\n        with:\n          distribution: \"adopt\"\n          java-version: \"11\"\n      - name: set-up-jdk-1\n        uses: actions/setup-java@v2.3.0\n        with:\n          distribution: \"adopt-hotspot\"\n          java-version: \"11\"\n      - name: set-up-jdk-2\n        uses: actions/setup-java@v2.3.0\n        with:\n          distribution: \"adopt-openj9\"\n          java-version: \"11\"\n      - name: build\n        run: ./gradlew build test\n","after":"jobs:\n  build:\n    steps:\n      - uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: set-up-jdk-0\n        uses: actions/setup-java@v2.3.0\n        with:\n          distribution: \"temurin\"\n          java-version: \"11\"\n      - name: set-up-jdk-1\n        uses: actions/setup-java@v2.3.0\n        with:\n          distribution: \"temurin\"\n          java-version: \"11\"\n      - name: set-up-jdk-2\n        uses: actions/setup-java@v2.3.0\n        with:\n          distribution: \"adopt-openj9\"\n          java-version: \"11\"\n      - name: build\n        run: ./gradlew build test\n","diff":"--- .github/workflows/ci.yml\n+++ .github/workflows/ci.yml\n@@ -10,1 +10,1 @@\n        uses: actions/setup-java@v2.3.0\n        with:\n-         distribution: \"adopt\"\n+         distribution: \"temurin\"\n          java-version: \"11\"\n@@ -15,1 +15,1 @@\n        uses: actions/setup-java@v2.3.0\n        with:\n-         distribution: \"adopt-hotspot\"\n+         distribution: \"temurin\"\n          java-version: \"11\"\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.github.SetupJavaAdoptOpenJDKToTemurin","displayName":"Use `actions/setup-java` `temurin` distribution","groupId":"org.openrewrite.recipe","artifactId":"rewrite-github-actions","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

