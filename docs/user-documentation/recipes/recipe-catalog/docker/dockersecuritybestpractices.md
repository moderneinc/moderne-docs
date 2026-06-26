---
title: "Apply Docker security best practices"
sidebar_label: "Apply Docker security best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/docker/dockersecuritybestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Apply Docker security best practices"}
  description={"Apply security-focused Docker best practices to Dockerfiles. This includes running as a non-root user (CIS 4.1) and using COPY instead of ADD where appropriate (CIS 4.9)."}
  fqName={"org.openrewrite.docker.DockerSecurityBestPractices"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/resources/META-INF/rewrite/docker.yml"}
/>

<RecipeHeader
  displayName={"Apply Docker security best practices"}
  description={"Apply security-focused Docker best practices to Dockerfiles. This includes running as a non-root user (CIS 4.1) and using COPY instead of ADD where appropriate (CIS 4.9)."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["security","docker"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.docker.DockerSecurityBestPractices"}
  artifact={"org.openrewrite:rewrite-docker"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.docker.DockerSecurityBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/docker/dockersecuritybestpractices.md"}
/>

<RecipeList recipes={[{"name":"Add `USER` instruction","href":"docker/adduserinstruction"},{"name":"Replace `ADD` with `COPY`","href":"docker/replaceaddwithcopy"},{"name":"Find containers running as root","href":"docker/search/findrootuser"},{"name":"Find unpinned base images","href":"docker/search/findunpinnedbaseimages"},{"name":"Find end-of-life Docker base images","href":"docker/search/findendoflifeimages"},{"name":"Find missing `HEALTHCHECK`","href":"docker/search/findmissinghealthcheck"}]}>

## Definition

</RecipeList>

<UsageList usage={{"recipeName":"org.openrewrite.docker.DockerSecurityBestPractices","displayName":"Apply Docker security best practices","groupId":"org.openrewrite","artifactId":"rewrite-docker","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_DOCKER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.docker.table.EolDockerImages","displayName":"End-of-life Docker images","description":"Records Docker base images that have reached end-of-life.","columns":[{"name":"Source file","description":"The Dockerfile containing the EOL base image."},{"name":"Stage name","description":"The build stage name (from AS clause), if specified."},{"name":"Image name","description":"The name of the base image."},{"name":"Tag","description":"The image tag."},{"name":"EOL date","description":"The date when the image reached end-of-life."},{"name":"Suggested replacement","description":"Recommended newer version to migrate to."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

