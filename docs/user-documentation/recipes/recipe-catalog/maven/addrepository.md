---
title: "Add repository"
sidebar_label: "Add repository"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/maven/addrepository" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add repository"}
  description={"Adds a new Maven Repository or updates a matching repository."}
  fqName={"org.openrewrite.maven.AddRepository"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddRepository.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.maven.AddRepository"}
  artifact={"org.openrewrite:rewrite-maven"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.maven.AddRepository"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/maven/addrepository.md"}
>

<RecipeHeader.Title>Add repository</RecipeHeader.Title>

<RecipeHeader.Description>Adds a new Maven Repository or updates a matching repository.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"id","required":true,"description":"A unique name to describe the repository.","example":"repo-id"},{"type":"String","name":"url","required":true,"description":"The URL of the repository.","example":"http://myrepo.maven.com/repo"},{"type":"String","name":"repoName","required":false,"description":"A display name for the repository.","example":"My Great Repo Name"},{"type":"String","name":"layout","required":false,"description":"The Maven layout of the repository.","example":"default"},{"type":"Boolean","name":"snapshotsEnabled","required":false,"description":"Snapshots from the repository are available."},{"type":"String","name":"snapshotsChecksumPolicy","required":false,"description":"Governs whether snapshots require checksums.","example":"warn"},{"type":"String","name":"snapshotsUpdatePolicy","required":false,"description":"The policy governing snapshot updating interval.","example":"always"},{"type":"Boolean","name":"releasesEnabled","required":false,"description":"Releases from the repository are available"},{"type":"String","name":"releasesChecksumPolicy","required":false,"description":"Governs whether releases require checksums.","example":"fail"},{"type":"String","name":"releasesUpdatePolicy","required":false,"description":"The policy governing release updating interval.","example":"never"},{"type":"Type","name":"type","required":false,"description":"The type of repository to add.","example":"Repository"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"id","value":"myRepo"},{"parameter":"url","value":"http://myrepo.maven.com/repo"},{"parameter":"repoName","value":"null"},{"parameter":"layout","value":"null"},{"parameter":"snapshotsEnabled","value":"null"},{"parameter":"snapshotsChecksumPolicy","value":"null"},{"parameter":"snapshotsUpdatePolicy","value":"null"},{"parameter":"releasesEnabled","value":"null"},{"parameter":"releasesChecksumPolicy","value":"null"},{"parameter":"releasesUpdatePolicy","value":"null"},{"parameter":"type","value":"null"}],"variants":[{"language":"xml","before":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n</project>\n","after":"<project>\n  <groupId>com.mycompany.app</groupId>\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n  <repositories>\n    <repository>\n      <id>myRepo</id>\n      <url>http://myrepo.maven.com/repo</url>\n    </repository>\n  </repositories>\n</project>\n","diff":"--- pom.xml\n+++ pom.xml\n@@ -5,0 +5,6 @@\n  <artifactId>my-app</artifactId>\n  <version>1</version>\n+ <repositories>\n+   <repository>\n+     <id>myRepo</id>\n+     <url>http://myrepo.maven.com/repo</url>\n+   </repository>\n+ </repositories>\n</project>\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.maven.AddRepository","displayName":"Add repository","groupId":"org.openrewrite","artifactId":"rewrite-maven","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_MAVEN","requiresConfiguration":true,"cliOptions":" --recipe-option \"id=repo-id\" --recipe-option \"url=http://myrepo.maven.com/repo\" --recipe-option \"repoName=My Great Repo Name\" --recipe-option \"layout=default\" --recipe-option \"snapshotsChecksumPolicy=warn\" --recipe-option \"snapshotsUpdatePolicy=always\" --recipe-option \"releasesChecksumPolicy=fail\" --recipe-option \"releasesUpdatePolicy=never\" --recipe-option \"type=Repository\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

