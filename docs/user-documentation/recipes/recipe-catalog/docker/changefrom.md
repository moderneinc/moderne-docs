---
title: "Change Docker FROM"
sidebar_label: "Change Docker FROM"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/docker/changefrom" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Change Docker FROM"}
  description={"Change the base image in a Dockerfile FROM instruction. Each `*` in an `old*` glob is a positional capture; `$N` in the paired `new*` substitutes capture N. `$0` substitutes the full original value; `\\$` is a literal dollar."}
  fqName={"org.openrewrite.docker.ChangeFrom"}
  languages={["OpenRewrite"]}
  license={"Apache License Version 2.0"}
  sourceUrl={"https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/java/org/openrewrite/docker/ChangeFrom.java"}
/>

<RecipeHeader
  displayName={"Change Docker FROM"}
  description={"Change the base image in a Dockerfile FROM instruction. Each `*` in an `old*` glob is a positional capture; `$N` in the paired `new*` substitutes capture N. `$0` substitutes the full original value; `\\$` is a literal dollar."}
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Apache License Version 2.0"}
  fqName={"org.openrewrite.docker.ChangeFrom"}
  artifact={"org.openrewrite:rewrite-docker"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.docker.ChangeFrom"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/docker/changefrom.md"}
/>

<OptionsTable options={[{"type":"String","name":"oldImageName","required":true,"description":"Glob pattern to match image names (without tag/digest).","example":"ubuntu"},{"type":"String","name":"oldTag","required":false,"description":"Only match images with tags matching this glob pattern. If null, matches any tag or no tag.","example":"20.*"},{"type":"String","name":"oldDigest","required":false,"description":"Only match images with digests matching this glob pattern. If null, matches any digest or no digest. If empty (`\"\"`), matches only images that have no digest, which is useful for skipping digest-pinned `FROM`s so deliberate pins are left untouched.","example":"sha256:*"},{"type":"String","name":"oldPlatform","required":false,"description":"Only change images with this platform. If null, matches any platform.","example":"linux/amd64"},{"type":"String","name":"newImageName","required":false,"description":"The new image name. If null, preserves the existing name.","example":"ubuntu"},{"type":"String","name":"newTag","required":false,"description":"The new tag. If null, preserves the existing tag. If empty, removes the tag.","example":"22.04"},{"type":"String","name":"newDigest","required":false,"description":"The new digest. If null, preserves the existing digest. If empty, removes the digest.","example":"sha256:abc123..."},{"type":"String","name":"newPlatform","required":false,"description":"The new platform. If null, preserves the existing platform. If empty, removes the platform flag.","example":"linux/arm64"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"oldImageName","value":"ubuntu"},{"parameter":"oldTag","value":"20.04"},{"parameter":"oldDigest","value":"null"},{"parameter":"oldPlatform","value":"null"},{"parameter":"newImageName","value":"ubuntu"},{"parameter":"newTag","value":"22.04"},{"parameter":"newDigest","value":"null"},{"parameter":"newPlatform","value":"null"}],"variants":[{"language":"docker","before":"FROM ubuntu:20.04\nRUN apt-get update\n","after":"FROM ubuntu:22.04\nRUN apt-get update\n","diff":"@@ -1,1 +1,1 @@\n-FROM ubuntu:20.04\n+FROM ubuntu:22.04\nRUN apt-get update\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.docker.ChangeFrom","displayName":"Change Docker FROM","groupId":"org.openrewrite","artifactId":"rewrite-docker","versionKey":"VERSION_ORG_OPENREWRITE_REWRITE_DOCKER","requiresConfiguration":true,"cliOptions":" --recipe-option \"oldImageName=ubuntu\" --recipe-option \"oldTag=20.*\" --recipe-option \"oldDigest=sha256:*\" --recipe-option \"oldPlatform=linux/amd64\" --recipe-option \"newImageName=ubuntu\" --recipe-option \"newTag=22.04\" --recipe-option \"newDigest=sha256:abc123...\" --recipe-option \"newPlatform=linux/arm64\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

