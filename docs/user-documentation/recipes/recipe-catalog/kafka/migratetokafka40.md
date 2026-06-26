---
title: "Migrate to Kafka 4.0"
sidebar_label: "Migrate to Kafka 4.0"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate to Kafka 4.0"}
  description={"Migrate applications to the latest Kafka 4.0 release. This includes updating dependencies to 4.0.x, ensuring Java 11+ for clients and Java 17+ for brokers/tools, and handling changes."}
  fqName={"io.moderne.kafka.MigrateToKafka40"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  displayName={"Migrate to Kafka 4.0"}
  description={"Migrate applications to the latest Kafka 4.0 release. This includes updating dependencies to 4.0.x, ensuring Java 11+ for clients and Java 17+ for brokers/tools, and handling changes."}
  type={"Composite recipe"}
  languages={["OpenRewrite"]}
  tags={["kafka"]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kafka.MigrateToKafka40"}
  artifact={"io.moderne.recipe:rewrite-kafka"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kafka.MigrateToKafka40"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kafka/migratetokafka40.md"}
  moderneOnly
/>

<RecipeList recipes={[{"name":"Migrate to Kafka 3.3","href":"kafka/migratetokafka33"},{"name":"Upgrade Gradle or Maven dependency versions","href":"java/dependencies/upgradedependencyversion"},{"name":"Upgrade Java to 17+ for Kafka broker/tools","href":"kafka/upgradejavaforkafkabroker"},{"name":"Upgrade Java to 11+ for Kafka clients","href":"kafka/upgradejavaforkafkaclients"},{"name":"Remove deprecated Kafka property","href":"kafka/removedeprecatedkafkaproperties"},{"name":"Remove deprecated Kafka property","href":"kafka/removedeprecatedkafkaproperties"},{"name":"Remove deprecated Kafka property","href":"kafka/removedeprecatedkafkaproperties"},{"name":"Delete property by key","href":"properties/deleteproperty"},{"name":"Delete property by key","href":"properties/deleteproperty"},{"name":"Delete property by key","href":"properties/deleteproperty"},{"name":"Add comment before property key","href":"properties/addpropertycomment"},{"name":"Add comment before property key","href":"properties/addpropertycomment"},{"name":"Add comment before property key","href":"properties/addpropertycomment"},{"name":"Add comment before property key","href":"properties/addpropertycomment"},{"name":"Migrate deprecated `sendOffsetsToTransaction` to use `ConsumerGroupMetadata`","href":"kafka/migratesendoffsetstotransaction"},{"name":"Migrate `KafkaConsumer.poll(long)` to `poll(Duration)`","href":"kafka/migrateconsumerpolltoduration"},{"name":"Migrate `KafkaConsumer.committed(TopicPartition)` to `committed(Set<TopicPartition>)`","href":"kafka/migrateconsumercommittedtoset"},{"name":"Migrate `ConsumerGroupState` to `GroupState`","href":"kafka/migrateconsumergroupstatetogroupstate"},{"name":"Migrate `AdminClient.alterConfigs()` to `incrementalAlterConfigs()`","href":"kafka/migratealterconfigstoincrementalalterconfigs"},{"name":"Change method name","href":"java/changemethodname"},{"name":"Delete method argument","href":"java/deletemethodargument"}]}>

## Definition

</RecipeList>

<ExampleList examples={[{"unchanged":{"language":"xml","code":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>kafka-client-app</artifactId>\n  <version>1.0.0</version>\n  <properties>\n    <maven.compiler.release>11</maven.compiler.release>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.apache.kafka</groupId>\n      <artifactId>kafka-clients</artifactId>\n      <version>3.3.2</version>\n    </dependency>\n  </dependencies>\n</project>\n"},"variants":[]},{"unchanged":{"language":"xml","code":"<project>\n  <modelVersion>4.0.0</modelVersion>\n  <groupId>com.example</groupId>\n  <artifactId>kafka-client-app</artifactId>\n  <version>1.0.0</version>\n  <properties>\n    <maven.compiler.release>11</maven.compiler.release>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.apache.kafka</groupId>\n      <artifactId>kafka-clients</artifactId>\n      <version>3.3.2</version>\n    </dependency>\n  </dependencies>\n</project>\n"},"variants":[]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kafka.MigrateToKafka40","displayName":"Migrate to Kafka 4.0","groupId":"io.moderne.recipe","artifactId":"rewrite-kafka","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_KAFKA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.maven.table.MavenMetadataFailures","displayName":"Maven metadata failures","description":"Attempts to resolve maven metadata that failed.","columns":[{"name":"Group id","description":"The groupId of the artifact for which the metadata download failed."},{"name":"Artifact id","description":"The artifactId of the artifact for which the metadata download failed."},{"name":"Version","description":"The version of the artifact for which the metadata download failed."},{"name":"Maven repository","description":"The URL of the Maven repository that the metadata download failed on."},{"name":"Snapshots","description":"Does the repository support snapshots."},{"name":"Releases","description":"Does the repository support releases."},{"name":"Failure","description":"The reason the metadata download failed."}]},{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

