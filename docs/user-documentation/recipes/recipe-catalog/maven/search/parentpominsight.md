---
title: "Maven parent insight"
sidebar_label: "Maven parent insight"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/search/parentpominsight" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Maven parent insight"}
  description={"Find Maven parents matching a `groupId` and `artifactId`."}
  fqName={"org.openrewrite.maven.search.ParentPomInsight"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/ParentPomInsight.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.search.ParentPomInsight"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.search.ParentPomInsight"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/search/parentpominsight.md"}
>

<RecipeHeader.Title>Maven parent insight</RecipeHeader.Title>

<RecipeHeader.Description>Find Maven parents matching a `groupId` and `artifactId`.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"groupIdPattern","required":true,"description":"Group glob pattern used to match dependencies.","example":"org.springframework.boot"},{"type":"String","name":"artifactIdPattern","required":true,"description":"Artifact glob pattern used to match dependencies.","example":"spring-boot-starter-*"},{"type":"String","name":"version","required":false,"description":"Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used.All versions are searched by default.","example":"1.x"},{"type":"Boolean","name":"recursive","required":false,"description":"Whether to search recursively through the parents. True by default."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"groupIdPattern","value":"org.springframework.boot"},{"parameter":"artifactIdPattern","value":"spring-boot-starter-parent"},{"parameter":"version","value":"null"},{"parameter":"recursive","value":"null"}],"unchanged":{"language":"mavenProject","code":"demo"},"variants":[{"language":"xml","before":"<project>\n\t<modelVersion>4.0.0</modelVersion>\n\t<parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>3.1.4</version>\n\t\t<relativePath/> <!-- lookup parent from repository -->\n\t</parent>\n\t<groupId>com.example</groupId>\n\t<artifactId>demo</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n</project>\n","after":"<project>\n\t<modelVersion>4.0.0</modelVersion>\n\t<!--~~>--><parent>\n\t\t<groupId>org.springframework.boot</groupId>\n\t\t<artifactId>spring-boot-starter-parent</artifactId>\n\t\t<version>3.1.4</version>\n\t\t<relativePath/> <!-- lookup parent from repository -->\n\t</parent>\n\t<groupId>com.example</groupId>\n\t<artifactId>demo</artifactId>\n\t<version>0.0.1-SNAPSHOT</version>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -3,1 +3,1 @@\n<project>\n\t<modelVersion>4.0.0</modelVersion>\n-\t<parent>\n+\t<!--~~>--><parent>\n\t\t<groupId>org.springframework.boot</groupId>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.search.ParentPomInsight","displayName":"Maven parent insight","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"groupIdPattern=org.springframework.boot\" --recipe-option \"artifactIdPattern=spring-boot-starter-*\" --recipe-option \"version=1.x\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.ParentPomsInUse","displayName":"Maven parent POMs in use","description":"Projects, GAVs and relativePaths for Maven parent POMs in use.","columns":[{"name":"Project artifactId","description":"The artifactId of the project that contains the parent."},{"name":"Group","description":"The first part of a parent coordinate `org.springframework.boot`."},{"name":"Artifact","description":"The second part of a parent coordinate `spring-boot-starter-*`."},{"name":"Version","description":"The resolved version."},{"name":"Relative path","description":"The relative path to the parent."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

