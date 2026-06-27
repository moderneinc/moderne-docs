---
title: "Restrict deserialized classes for JMS `ObjectMessage`"
sidebar_label: "Restrict deserialized classes for JMS `ObjectMessage`"
hide_title: true
---

import { RecipeHeader, RecipeMeta, RecipeList, OptionsTable, ExampleList, UsageList, DataTableList } from '@site/src/components/recipe';

<RecipeMeta
  displayName={"Restrict deserialized classes for JMS `ObjectMessage`"}
  description={"Patches `ActiveMQConnectionFactory` instantiations to install a deserialization allowlist when the same compilation run contains a `javax.jms.ObjectMessage#getObject` (or `jakarta.jms.ObjectMessage#getObject`) call inside a `MessageListener#onMessage` override. Targets ActiveMQ Classic (`org.apache.activemq.ActiveMQConnectionFactory.setTrustedPackages`) and ActiveMQ Artemis (`org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory.setDeserializationAllowList`). IBM MQ (`com.ibm.mq.jms.MQConnectionFactory`) is not yet supported. The recipe handles two factory instantiation shapes: a local variable declaration (`ActiveMQConnectionFactory f = new ActiveMQConnectionFactory(...)`) and a direct return (`return new ActiveMQConnectionFactory(...)`), the latter refactored into a declare-then-return. Skips factories that already configure a trusted-packages / allowlist call."}
  fqName={"org.openrewrite.java.security.marshalling.FixInsecureJmsDeserialization"}
  languages={["Java"]}
  license={"Moderne Proprietary License"}
/>

<RecipeHeader
  type={"Single recipe"}
  languages={["Java"]}
  tags={["security","CWE-502"]}
  license={"Moderne Proprietary License"}
  fqName={"org.openrewrite.java.security.marshalling.FixInsecureJmsDeserialization"}
  artifact={"org.openrewrite.recipe:rewrite-java-security"}
  appLink={"https://app.moderne.io/recipes/org.openrewrite.java.security.marshalling.FixInsecureJmsDeserialization"}
  markdownUrl={"https://raw.githubusercontent.com/moderneinc/moderne-docs/refs/heads/main/docs/user-documentation/recipes/recipe-catalog/java/security/marshalling/fixinsecurejmsdeserialization.md"}
  moderneOnly
>

<RecipeHeader.Title>Restrict deserialized classes for JMS `ObjectMessage`</RecipeHeader.Title>

<RecipeHeader.Description>Patches `ActiveMQConnectionFactory` instantiations to install a deserialization allowlist when the same compilation run contains a `javax.jms.ObjectMessage#getObject` (or `jakarta.jms.ObjectMessage#getObject`) call inside a `MessageListener#onMessage` override. Targets ActiveMQ Classic (`org.apache.activemq.ActiveMQConnectionFactory.setTrustedPackages`) and ActiveMQ Artemis (`org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory.setDeserializationAllowList`). IBM MQ (`com.ibm.mq.jms.MQConnectionFactory`) is not yet supported. The recipe handles two factory instantiation shapes: a local variable declaration (`ActiveMQConnectionFactory f = new ActiveMQConnectionFactory(...)`) and a direct return (`return new ActiveMQConnectionFactory(...)`), the latter refactored into a declare-then-return. Skips factories that already configure a trusted-packages / allowlist call.</RecipeHeader.Description>

</RecipeHeader>

<OptionsTable options={[{"type":"String","name":"allowedPackages","required":false,"description":"Comma-separated list of package prefixes whose classes are safe to deserialize. Defaults to a minimal safe baseline (`java.util`, `java.lang`) when unspecified.","example":"com.acme.dto,java.util,java.lang"}]}>

## Options

</OptionsTable>

<ExampleList examples={[{"parameters":[{"parameter":"allowedPackages","value":"null"}],"unchanged":{"language":"java","code":"import javax.jms.*;\nclass Listener implements MessageListener {\n    public void onMessage(Message message) {\n        try {\n            Object payload = ((ObjectMessage) message).getObject();\n        } catch (JMSException ignored) {}\n    }\n}\n"},"variants":[{"language":"java","before":"import org.apache.activemq.ActiveMQConnectionFactory;\nimport javax.jms.ConnectionFactory;\n\nclass JmsConfig {\n    ConnectionFactory connectionFactory() {\n        ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory(\"tcp://broker:61616\");\n        return factory;\n    }\n}\n","after":"import org.apache.activemq.ActiveMQConnectionFactory;\nimport javax.jms.ConnectionFactory;\n\nimport java.util.Arrays;\n\nclass JmsConfig {\n    ConnectionFactory connectionFactory() {\n        ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory(\"tcp://broker:61616\");\n        factory.setTrustedPackages(Arrays.asList(\"java.util\", \"java.lang\"));\n        return factory;\n    }\n}\n","diff":"@@ -4,0 +4,2 @@\nimport javax.jms.ConnectionFactory;\n\n+import java.util.Arrays;\n+\nclass JmsConfig {\n@@ -7,0 +9,1 @@\n    ConnectionFactory connectionFactory() {\n        ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory(\"tcp://broker:61616\");\n+       factory.setTrustedPackages(Arrays.asList(\"java.util\", \"java.lang\"));\n        return factory;\n","newFile":false}]}]}>

## Examples

</ExampleList>

<UsageList usage={{"recipeName":"org.openrewrite.java.security.marshalling.FixInsecureJmsDeserialization","displayName":"Restrict deserialized classes for JMS `ObjectMessage`","groupId":"org.openrewrite.recipe","artifactId":"rewrite-java-security","versionKey":"VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY","requiresConfiguration":false}}>

## Usage

</UsageList>

<DataTableList tables={[{"name":"org.openrewrite.table.SourcesFileResults","displayName":"Source files that had results","description":"Source files that were modified by the recipe run.","columns":[{"name":"Source path before the run","description":"The source path of the file before the run. `null` when a source file was created during the run."},{"name":"Source path after the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Parent of the recipe that made changes","description":"In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Estimated time saving","description":"An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds."},{"name":"Cycle","description":"The recipe cycle in which the change was made."}]},{"name":"org.openrewrite.table.SearchResults","displayName":"Source files that had search results","description":"Search results that were found during the recipe run.","columns":[{"name":"Source path of search result before the run","description":"The source path of the file with the search result markers present."},{"name":"Source path of search result after run the run","description":"A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run."},{"name":"Result","description":"The trimmed printed tree of the LST element that the marker is attached to."},{"name":"Description","description":"The content of the description of the marker."},{"name":"Recipe that added the search marker","description":"The specific recipe that added the Search marker."}]},{"name":"org.openrewrite.table.SourcesFileErrors","displayName":"Source files that errored on a recipe","description":"The details of all errors produced by a recipe run.","columns":[{"name":"Source path","description":"The file that failed to parse."},{"name":"Recipe that made changes","description":"The specific recipe that made a change."},{"name":"Stack trace","description":"The stack trace of the failure."}]},{"name":"org.openrewrite.table.RecipeRunStats","displayName":"Recipe performance","description":"Statistics used in analyzing the performance of recipes.","columns":[{"name":"The recipe","description":"The recipe whose stats are being measured both individually and cumulatively."},{"name":"Source file count","description":"The number of source files the recipe ran over."},{"name":"Source file changed count","description":"The number of source files which were changed in the recipe run. Includes files created, deleted, and edited."},{"name":"Cumulative scanning time (ns)","description":"The total time spent across the scanning phase of this recipe."},{"name":"Max scanning time (ns)","description":"The max time scanning any one source file."},{"name":"Cumulative edit time (ns)","description":"The total time spent across the editing phase of this recipe."},{"name":"Max edit time (ns)","description":"The max time editing any one source file."}]}]}>

## Data tables

</DataTableList>

