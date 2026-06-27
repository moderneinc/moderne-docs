---
title: "Update SCM with Git origin"
sidebar_label: "Update SCM with Git origin"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/updatescmfromgitorigin" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Update SCM with Git origin"}
  description={"Updates or adds the Maven `<scm>` tag based on the Git remote origin. By default, only existing Source Control Management (SCM) sections are updated. Set `addIfMissing` to `true` to also add missing SCM sections to root POMs (POMs without a parent element)."}
  fqName={"org.openrewrite.maven.UpdateScmFromGitOrigin"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/UpdateScmFromGitOrigin.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.UpdateScmFromGitOrigin"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.UpdateScmFromGitOrigin"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/updatescmfromgitorigin.md"}
>

<RecipeHeader.Title>Update SCM with Git origin</RecipeHeader.Title>

<RecipeHeader.Description>Updates or adds the Maven `<scm>` tag based on the Git remote origin. By default, only existing Source Control Management (SCM) sections are updated. Set `addIfMissing` to `true` to also add missing SCM sections to root POMs (POMs without a parent element).</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"Boolean","name":"addIfMissing","required":false,"description":"If set to `true`, the recipe will add a `<scm>` section if it is missing. If set to `false` (default), the recipe will only update existing `<scm>` sections."}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"addIfMissing","value":"true"}],"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <scm>\n    <url>https://server.example.com/org/repo</url>\n    <connection>scm:git:https://server.example.com/org/repo.git</connection>\n    <developerConnection>scm:git:git@server.example.com:org/repo.git</developerConnection>\n  </scm>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -6,0 +6,5 @@\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n+ <scm>\n+   <url>https://server.example.com/org/repo</url>\n+   <connection>scm:git:https://server.example.com/org/repo.git</connection>\n+   <developerConnection>scm:git:git@server.example.com:org/repo.git</developerConnection>\n+ </scm>\n</project>\n","newFile":false}]},{"parameters":[{"parameter":"addIfMissing","value":"null"}],"variants":[{"language":"xml","before":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <scm>\n    <url>https://old-server.example.com/org/repo</url>\n    <connection>scm:git:https://old-server.example.com/org/repo.git</connection>\n    <developerConnection>scm:git:git@old-server.example.com:org/repo.git</developerConnection>\n  </scm>\n</project>\n","after":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <scm>\n    <url>https://new-server.example.com/username/repo</url>\n    <connection>scm:git:https://new-server.example.com/username/repo.git</connection>\n    <developerConnection>scm:git:git@new-server.example.com:username/repo.git</developerConnection>\n  </scm>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -7,3 +7,3 @@\n  <version>1</version>\n  <scm>\n-   <url>https://old-server.example.com/org/repo</url>\n-   <connection>scm:git:https://old-server.example.com/org/repo.git</connection>\n-   <developerConnection>scm:git:git@old-server.example.com:org/repo.git</developerConnection>\n+   <url>https://new-server.example.com/username/repo</url>\n+   <connection>scm:git:https://new-server.example.com/username/repo.git</connection>\n+   <developerConnection>scm:git:git@new-server.example.com:username/repo.git</developerConnection>\n  </scm>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.UpdateScmFromGitOrigin","displayName":"Update SCM with Git origin","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

