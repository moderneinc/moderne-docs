---
title: "Migrate `AdminClient.alterConfigs()` to `incrementalAlterConfigs()`"
sidebar_label: "Migrate `AdminClient.alterConfigs()` to `incrementalAlterConfigs()`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Migrate `AdminClient.alterConfigs()` to `incrementalAlterConfigs()`"}
  description={"Migrates the removed `AdminClient.alterConfigs()` method to `incrementalAlterConfigs()` for Kafka 4.0 compatibility."}
  fqName={"io.moderne.kafka.MigrateAlterConfigsToIncrementalAlterConfigs"}
  languages={["OpenRewrite"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["OpenRewrite"]}
  tags={[]}
  license={"Moderne Proprietary License"}
  fqName={"io.moderne.kafka.MigrateAlterConfigsToIncrementalAlterConfigs"}
  artifact={"io.moderne.recipe:rewrite-kafka"}
  appLink={"https://app.moderne.io/recipes/io.moderne.kafka.MigrateAlterConfigsToIncrementalAlterConfigs"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/kafka/migratealterconfigstoincrementalalterconfigs.md"}
  moderneOnly
>

<RecipeHeader.Title>Migrate `AdminClient.alterConfigs()` to `incrementalAlterConfigs()`</RecipeHeader.Title>

<RecipeHeader.Description>Migrates the removed `AdminClient.alterConfigs()` method to `incrementalAlterConfigs()` for Kafka 4.0 compatibility.</RecipeHeader.Description>

</RecipeHeader>

<ExampleList examples={[{"variants":[{"language":"java","before":"import org.apache.kafka.clients.admin.AdminClient;\nimport org.apache.kafka.clients.admin.Config;\nimport org.apache.kafka.clients.admin.ConfigEntry;\nimport org.apache.kafka.common.config.ConfigResource;\nimport java.util.Map;\nimport java.util.HashMap;\nimport java.util.Collections;\n\nclass KafkaAdminExample {\n    void updateConfig(AdminClient adminClient) {\n        ConfigResource resource = new ConfigResource(ConfigResource.Type.TOPIC, \"my-topic\");\n        Config config = new Config(Collections.singleton(\n            new ConfigEntry(\"retention.ms\", \"86400000\")));\n        Map<ConfigResource, Config> configs = new HashMap<>();\n        configs.put(resource, config);\n        adminClient.alterConfigs(configs);\n    }\n}\n","after":"import org.apache.kafka.clients.admin.AdminClient;\nimport org.apache.kafka.clients.admin.AlterConfigOp;\nimport org.apache.kafka.clients.admin.Config;\nimport org.apache.kafka.clients.admin.ConfigEntry;\nimport org.apache.kafka.common.config.ConfigResource;\n\nimport java.util.Collection;\nimport java.util.Map;\nimport java.util.HashMap;\nimport java.util.Collections;\n\nclass KafkaAdminExample {\n    void updateConfig(AdminClient adminClient) {\n        ConfigResource resource = new ConfigResource(ConfigResource.Type.TOPIC, \"my-topic\");\n        Collection<AlterConfigOp> config = Collections.singleton(new AlterConfigOp(new ConfigEntry(\"retention.ms\", \"86400000\"), AlterConfigOp.OpType.SET));\n        Map<ConfigResource, Collection<AlterConfigOp>> configs = new HashMap<>();\n        configs.put(resource, config);\n        adminClient.incrementalAlterConfigs(configs);\n    }\n}\n","diff":"@@ -2,0 +2,1 @@\nimport org.apache.kafka.clients.admin.AdminClient;\n+import org.apache.kafka.clients.admin.AlterConfigOp;\nimport org.apache.kafka.clients.admin.Config;\n@@ -5,0 +6,2 @@\nimport org.apache.kafka.clients.admin.ConfigEntry;\nimport org.apache.kafka.common.config.ConfigResource;\n+\n+import java.util.Collection;\nimport java.util.Map;\n@@ -12,3 +15,2 @@\n    void updateConfig(AdminClient adminClient) {\n        ConfigResource resource = new ConfigResource(ConfigResource.Type.TOPIC, \"my-topic\");\n-       Config config = new Config(Collections.singleton(\n-           new ConfigEntry(\"retention.ms\", \"86400000\")));\n-       Map<ConfigResource, Config> configs = new HashMap<>();\n+       Collection<AlterConfigOp> config = Collections.singleton(new AlterConfigOp(new ConfigEntry(\"retention.ms\", \"86400000\"), AlterConfigOp.OpType.SET));\n+       Map<ConfigResource, Collection<AlterConfigOp>> configs = new HashMap<>();\n        configs.put(resource, config);\n@@ -16,1 +18,1 @@\n        Map<ConfigResource, Config> configs = new HashMap<>();\n        configs.put(resource, config);\n-       adminClient.alterConfigs(configs);\n+       adminClient.incrementalAlterConfigs(configs);\n    }\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"io.moderne.kafka.MigrateAlterConfigsToIncrementalAlterConfigs","displayName":"Migrate `AdminClient.alterConfigs()` to `incrementalAlterConfigs()`","groupId":"io.moderne.recipe","artifactId":"rewrite-kafka","versionKey":"VERSION_IO_MODERNE_RECIPE_REWRITE_KAFKA","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

