---
title: "Replace spread-`all*` calls in `configurations` blocks with `configurations.all { }`"
sidebar_label: "Replace spread-`all*` calls in `configurations` blocks with `configurations.all { }`"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/gradle/gradle9/rewritespreadallinconfigurationsblock" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace spread-`all*` calls in `configurations` blocks with `configurations.all { }`"}
  description={"Gradle 9 throws `Cannot mutate the dependencies of configuration ':all' after the configuration was resolved.` when a `configurations { }` closure uses Groovy's spread-dot form `all*.<method>(args)`. Rewrite each such call to the closure form `configurations.all { <method>(args) }`, which preserves eager-`all` semantics but is accepted by Gradle 9. Only applied when every statement in the `configurations { }` block uses the spread form; mixed blocks are left untouched for manual review."}
  fqName={"org.openrewrite.gradle.gradle9.RewriteSpreadAllInConfigurationsBlock"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/gradle9/RewriteSpreadAllInConfigurationsBlock.java"}
/>

<RecipeHeader
  displayName={"Replace spread-`all*` calls in `configurations` blocks with `configurations.all { }`"}
  description={"Gradle 9 throws `Cannot mutate the dependencies of configuration ':all' after the configuration was resolved.` when a `configurations { }` closure uses Groovy's spread-dot form `all*.<method>(args)`. Rewrite each such call to the closure form `configurations.all { <method>(args) }`, which preserves eager-`all` semantics but is accepted by Gradle 9. Only applied when every statement in the `configurations { }` block uses the spread form; mixed blocks are left untouched for manual review."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.gradle.gradle9.RewriteSpreadAllInConfigurationsBlock"}
  artifact={"org.openrewrite:rewrite-gradle"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.gradle.gradle9.RewriteSpreadAllInConfigurationsBlock"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/gradle/gradle9/rewritespreadallinconfigurationsblock.md"}
/>

<ExampleList examples={[{"variants":[{"language":"groovy","before":"configurations {\n    all*.exclude group: \"log4j\", module: \"log4j\"\n}\n","after":"configurations.all {\n    exclude group: \"log4j\", module: \"log4j\"\n}\n","diff":"--- build.gradle\n+++ build.gradle\n@@ -1,2 +1,2 @@\n-configurations {\n-   all*.exclude group: \"log4j\", module: \"log4j\"\n+configurations.all {\n+   exclude group: \"log4j\", module: \"log4j\"\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.gradle.gradle9.RewriteSpreadAllInConfigurationsBlock","displayName":"Replace spread-`all*` calls in `configurations` blocks with `configurations.all { }`","groupId":"org.openrewrite","artifactId":"rewrite-gradle","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_GRADLE","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

