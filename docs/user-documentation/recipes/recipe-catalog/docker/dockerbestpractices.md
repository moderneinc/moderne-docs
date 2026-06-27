---
title: "Apply Docker best practices"
sidebar_label: "Apply Docker best practices"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/docker/dockerbestpractices" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Apply Docker best practices"}
  description={"Apply a set of Docker best practices to Dockerfiles. This recipe applies security hardening, build optimization, and maintainability improvements based on CIS Docker Benchmark and industry best practices."}
  fqName={"org.openrewrite.docker.DockerBestPractices"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/resources/META-INF/rewrite/docker.yml"}
/>

<RecipeHeader
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["docker"]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.docker.DockerBestPractices"}
  artifact={"org.openrewrite:rewrite-docker"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.docker.DockerBestPractices"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/docker/dockerbestpractices.md"}
>

<RecipeHeader.Title>Apply Docker best practices</RecipeHeader.Title>

<RecipeHeader.Description>Apply a set of Docker best practices to Dockerfiles. This recipe applies security hardening, build optimization, and maintainability improvements based on CIS Docker Benchmark and industry best practices.</RecipeHeader.Description>

</RecipeHeader>

<RecipeList recipes={[{"name":"Apply Docker security best practices","href":"/user-documentation/recipes/recipe-catalog/docker/dockersecuritybestpractices/"},{"name":"Optimize Docker builds","href":"/user-documentation/recipes/recipe-catalog/docker/dockerbuildoptimization/"},{"name":"Normalize Docker Hub image names","href":"/user-documentation/recipes/recipe-catalog/docker/normalizedockerhubimagename/"},{"name":"Use exec form for `ENTRYPOINT` and `CMD`","href":"/user-documentation/recipes/recipe-catalog/docker/useexecformentrypoint/"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"variants":[{"language":"docker","before":"FROM ubuntu:20.04\nADD app.jar /app/\nRUN apt-get update\nRUN apt-get install -y curl\nENTRYPOINT /app/start.sh\n","after":"~~(EOL: ubuntu:20.04 (ended 2025-05-31, suggest plucky (26.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:20.04\nCOPY app.jar /app/\nRUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*\nENTRYPOINT [\"/app/start.sh\"]\nUSER appuser\n","diff":"@@ -1,5 +1,5 @@\n-FROM ubuntu:20.04\n-ADD app.jar /app/\n-RUN apt-get update\n-RUN apt-get install -y curl\n-ENTRYPOINT /app/start.sh\n+~~(EOL: ubuntu:20.04 (ended 2025-05-31, suggest plucky (26.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:20.04\n+COPY app.jar /app/\n+RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*\n+ENTRYPOINT [\"/app/start.sh\"]\n+USER appuser\n\n","newFile":false}]},{"variants":[{"language":"docker","before":"FROM ubuntu:20.04\nADD app.jar /app/\nRUN apt-get update\nRUN apt-get install -y curl\nENTRYPOINT /app/start.sh\n","after":"~~(EOL: ubuntu:20.04 (ended 2025-05-31, suggest plucky (26.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:20.04\nCOPY app.jar /app/\nRUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*\nENTRYPOINT [\"/app/start.sh\"]\nUSER appuser\n","diff":"@@ -1,5 +1,5 @@\n-FROM ubuntu:20.04\n-ADD app.jar /app/\n-RUN apt-get update\n-RUN apt-get install -y curl\n-ENTRYPOINT /app/start.sh\n+~~(EOL: ubuntu:20.04 (ended 2025-05-31, suggest plucky (26.04)))~~>~~(Missing HEALTHCHECK instruction)~~>FROM ubuntu:20.04\n+COPY app.jar /app/\n+RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*\n+ENTRYPOINT [\"/app/start.sh\"]\n+USER appuser\n\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.docker.DockerBestPractices","displayName":"Apply Docker best practices","groupId":"org.openrewrite","artifactId":"rewrite-docker","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_DOCKER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.docker.table.EolDockerImages","displayName":"End-of-life Docker images","description":"Records Docker base images that have reached end-of-life.","columns":[{"name":"Source file","description":"The Dockerfile containing the EOL base image."},{"name":"Stage name","description":"The build stage name (from AS clause), if specified."},{"name":"Image name","description":"The name of the base image."},{"name":"Tag","description":"The image tag."},{"name":"EOL date","description":"The date when the image reached end-of-life."},{"name":"Suggested replacement","description":"Recommended newer version to migrate to."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

