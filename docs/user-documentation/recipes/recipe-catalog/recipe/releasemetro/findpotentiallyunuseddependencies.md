---
title: "Find potentially unused dependencies"
sidebar_label: "Find potentially unused dependencies"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Find potentially unused dependencies"}
  description={"Collects import information to help identify potentially unused dependencies."}
  fqName={"io.moderne.recipe.releasemetro.FindPotentiallyUnusedDependencies"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Find potentially unused dependencies"}
  description={"Collects import information to help identify potentially unused dependencies."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.recipe.releasemetro.FindPotentiallyUnusedDependencies"}
  artifact={"io.moderne.recipe:rewrite-release-metromap"}
  appLink={"https://app.moderne.io/recipes/io.moderne.recipe.releasemetro.FindPotentiallyUnusedDependencies"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/recipe/releasemetro/findpotentiallyunuseddependencies.md"}
  moderneOnly
/>

<ExampleList examples={[{"variants":[{"language":"java","before":"package com.example;\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.boot.SpringApplication;\nimport java.util.List;\n\npublic class MyApp {\n    // Simple class without method calls to avoid type resolution issues\n}\n","after":"/*~~(Uses packages: java.util, org.springframework)~~>*/package com.example;\n\nimport org.springframework.context.ApplicationContext;\nimport org.springframework.boot.SpringApplication;\nimport java.util.List;\n\npublic class MyApp {\n    // Simple class without method calls to avoid type resolution issues\n}\n","diff":"@@ -1,1 +1,1 @@\n-package com.example;\n+/*~~(Uses packages: java.util, org.springframework)~~>*/package com.example;\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.recipe.releasemetro.FindPotentiallyUnusedDependencies","displayName":"Find potentially unused dependencies","groupId":"io.moderne.recipe","artifactId":"rewrite-release-metromap","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_RELEASE_METROMAP","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"io.moderne.recipe.releasemetro.table.UnusedDependencies","displayName":"Potentially Unused Dependencies","description":"Dependencies that are declared in build files but may not be used based on import analysis.","columns":[{"name":"dependencyGroupId","description":"Group ID of the potentially unused dependency"},{"name":"dependencyArtifactId","description":"Artifact ID of the potentially unused dependency"},{"name":"dependencyVersion","description":"Version of the potentially unused dependency"},{"name":"dependencyScope","description":"Scope of the dependency (compile, test, etc.)"},{"name":"isDirect","description":"Whether this is a direct dependency (not transitive)"},{"name":"reasonSuspected","description":"Reason why this dependency is suspected to be unused"}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

