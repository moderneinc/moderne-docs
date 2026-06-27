---
title: "Replace container image name"
sidebar_label: "Replace container image name"
hide_title: true
---


<head>
  <link rel="canonical" href="https://docs.openrewrite.org/recipes/java/testing/testcontainers/replacecontainerimagename" />
</head>

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Replace container image name"}
  description={"Replace a Docker image name in `DockerImageName.parse(image)` or `new DockerImageName(image)` constructor arguments for a specific container class."}
  fqName={"org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName"}
  languages={["Java"]}
  license={"Moderne Source Available License"}
  sourceUrl={"https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/testcontainers/ReplaceContainerImageName.java"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={[]}
  license={"Moderne Source Available License"}
  fqName={"org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName"}
  artifact={"org.openrewrite.recipe:rewrite-testing-frameworks"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/testing/testcontainers/replacecontainerimagename.md"}
>

<RecipeHeader.Title>Replace container image name</RecipeHeader.Title>

<RecipeHeader.Description>Replace a Docker image name in `DockerImageName.parse(image)` or `new DockerImageName(image)` constructor arguments for a specific container class.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"containerClass","required":true,"description":"The fully qualified name of the container class to match.","example":"org.testcontainers.containers.KafkaContainer"},{"type":"String","name":"imagePrefix","required":true,"description":"The Docker image prefix to match (e.g. `confluentinc/cp-kafka`).","example":"confluentinc/cp-kafka"},{"type":"String","name":"newImage","required":true,"description":"The new Docker image to use. When a tag is included (e.g. `apache/kafka-native:4.0.2`), the entire image string is replaced. When no tag is included (e.g. `clickhouse/clickhouse-server`), only the image name prefix is replaced and the original tag is preserved.","example":"apache/kafka-native:4.0.2"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"containerClass","value":"org.testcontainers.containers.KafkaContainer"},{"parameter":"imagePrefix","value":"confluentinc/cp-kafka"},{"parameter":"newImage","value":"apache/kafka-native:4.0.2"}],"variants":[{"language":"java","before":"import org.testcontainers.containers.KafkaContainer;\nimport org.testcontainers.utility.DockerImageName;\n\nclass A {\n    KafkaContainer kafka = new KafkaContainer(DockerImageName.parse(\"confluentinc/cp-kafka:7.5.3\"));\n}\n","after":"import org.testcontainers.containers.KafkaContainer;\nimport org.testcontainers.utility.DockerImageName;\n\nclass A {\n    KafkaContainer kafka = new KafkaContainer(DockerImageName.parse(\"apache/kafka-native:4.0.2\"));\n}\n","diff":"@@ -5,1 +5,1 @@\n\nclass A {\n-   KafkaContainer kafka = new KafkaContainer(DockerImageName.parse(\"confluentinc/cp-kafka:7.5.3\"));\n+   KafkaContainer kafka = new KafkaContainer(DockerImageName.parse(\"apache/kafka-native:4.0.2\"));\n}\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName","displayName":"Replace container image name","groupId":"org.openrewrite.recipe","artifactId":"rewrite-testing-frameworks","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS","requiresConfiguration":true,"cliOptions":" --recipe-option \"containerClass=org.testcontainers.containers.KafkaContainer\" --recipe-option \"imagePrefix=confluentinc/cp-kafka\" --recipe-option \"newImage=apache/kafka-native:4.0.2\""}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

