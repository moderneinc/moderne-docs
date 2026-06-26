---
title: "Add OCI image labels"
sidebar_label: "Add OCI image labels"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/docker/addocilabels" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Add OCI image labels"}
  description={"Adds standard OCI (Open Container Initiative) image labels to a Dockerfile. These labels provide metadata about the image such as title, version, source, and license information. See https://github.com/opencontainers/image-spec/blob/main/annotations.md for the specification."}
  fqName={"org.openrewrite.docker.AddOciLabels"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/java/org/openrewrite/docker/AddOciLabels.java"}
/>

<RecipeHeader
  displayName={"Add OCI image labels"}
  description={"Adds standard OCI (Open Container Initiative) image labels to a Dockerfile. These labels provide metadata about the image such as title, version, source, and license information. See https://github.com/opencontainers/image-spec/blob/main/annotations.md for the specification."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.docker.AddOciLabels"}
  artifact={"org.openrewrite:rewrite-docker"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.docker.AddOciLabels"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/docker/addocilabels.md"}
/>

<OptionsTable options={[{"type":"String","name":"title","required":false,"description":"Human-readable title of the image (org.opencontainers.image.title).","example":"My Application"},{"type":"String","name":"description","required":false,"description":"Human-readable description of the image (org.opencontainers.image.description).","example":"A containerized web application"},{"type":"String","name":"version","required":false,"description":"Version of the packaged software (org.opencontainers.image.version).","example":"1.0.0"},{"type":"String","name":"created","required":false,"description":"Date and time the image was built in RFC 3339 format. If 'now', uses the current time.","example":"2024-01-15T10:30:00Z"},{"type":"String","name":"revision","required":false,"description":"Source control revision identifier for the packaged software (org.opencontainers.image.revision).","example":"abc123def456"},{"type":"String","name":"source","required":false,"description":"URL to get source code for building the image (org.opencontainers.image.source).","example":"https://github.com/myorg/myapp"},{"type":"String","name":"url","required":false,"description":"URL to find more information about the image (org.opencontainers.image.url).","example":"https://myapp.example.com"},{"type":"String","name":"vendor","required":false,"description":"Name of the distributing entity, organization, or individual (org.opencontainers.image.vendor).","example":"My Organization"},{"type":"String","name":"licenses","required":false,"description":"License(s) under which contained software is distributed as a SPDX License Expression (org.opencontainers.image.licenses).","example":"Apache-2.0"},{"type":"String","name":"authors","required":false,"description":"Contact details of the people or organization responsible (org.opencontainers.image.authors).","example":"maintainers@example.com"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"title","value":"MyApplication"},{"parameter":"description","value":"null"},{"parameter":"version","value":"1.0.0"},{"parameter":"created","value":"null"},{"parameter":"revision","value":"null"},{"parameter":"source","value":"null"},{"parameter":"url","value":"null"},{"parameter":"vendor","value":"null"},{"parameter":"licenses","value":"null"},{"parameter":"authors","value":"null"}],"variants":[{"language":"docker","before":"FROM ubuntu:22.04\nRUN apt-get update\n","after":"FROM ubuntu:22.04\nLABEL org.opencontainers.image.title=MyApplication\nLABEL org.opencontainers.image.version=1.0.0\nRUN apt-get update\n","diff":"@@ -2,0 +2,2 @@\nFROM ubuntu:22.04\n+LABEL org.opencontainers.image.title=MyApplication\n+LABEL org.opencontainers.image.version=1.0.0\nRUN apt-get update\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.docker.AddOciLabels","displayName":"Add OCI image labels","groupId":"org.openrewrite","artifactId":"rewrite-docker","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_DOCKER","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

