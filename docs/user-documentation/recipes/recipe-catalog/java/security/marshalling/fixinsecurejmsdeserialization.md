---
title: "Restrict deserialized classes for JMS `ObjectMessage`"
sidebar_label: "Restrict deserialized classes for JMS `ObjectMessage`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Restrict deserialized classes for JMS `ObjectMessage`

**org.openrewrite.java.security.marshalling.FixInsecureJmsDeserialization**

_Patches `ActiveMQConnectionFactory` instantiations to install a deserialization allowlist when the same compilation run contains a `javax.jms.ObjectMessage#getObject` (or `jakarta.jms.ObjectMessage#getObject`) call inside a `MessageListener#onMessage` override. Targets ActiveMQ Classic (`org.apache.activemq.ActiveMQConnectionFactory.setTrustedPackages`) and ActiveMQ Artemis (`org.apache.activemq.artemis.jms.client.ActiveMQConnectionFactory.setDeserializationAllowList`). IBM MQ (`com.ibm.mq.jms.MQConnectionFactory`) is not yet supported. The recipe handles two factory instantiation shapes: a local variable declaration (`ActiveMQConnectionFactory f = new ActiveMQConnectionFactory(...)`) and a direct return (`return new ActiveMQConnectionFactory(...)`), the latter refactored into a declare-then-return. Skips factories that already configure a trusted-packages / allowlist call._

### Tags

* [security](/user-documentation/recipes/lists/recipes-by-tag#security)
* [CWE-502](/user-documentation/recipes/lists/recipes-by-tag#cwe)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | allowedPackages | *Optional*. Comma-separated list of package prefixes whose classes are safe to deserialize. Defaults to a minimal safe baseline (`java.util`, `java.lang`) when unspecified. | `com.acme.dto,java.util,java.lang` |


## Used by

This recipe is used as part of the following composite recipes:

* [Java security best practices](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/security/javasecuritybestpractices)
* [Remediate OWASP A08:2021 Software and data integrity failures](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/security/owaspa08)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|allowedPackages|`null`|


###### Unchanged
```java
import javax.jms.*;
class Listener implements MessageListener {
    public void onMessage(Message message) {
        try {
            Object payload = ((ObjectMessage) message).getObject();
        } catch (JMSException ignored) {}
    }
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.activemq.ActiveMQConnectionFactory;
import javax.jms.ConnectionFactory;

class JmsConfig {
    ConnectionFactory connectionFactory() {
        ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory("tcp://broker:61616");
        return factory;
    }
}
```

###### After
```java
import org.apache.activemq.ActiveMQConnectionFactory;
import javax.jms.ConnectionFactory;

import java.util.Arrays;

class JmsConfig {
    ConnectionFactory connectionFactory() {
        ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory("tcp://broker:61616");
        factory.setTrustedPackages(Arrays.asList("java.util", "java.lang"));
        return factory;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,0 +4,2 @@
import javax.jms.ConnectionFactory;

+import java.util.Arrays;
+
class JmsConfig {
@@ -7,0 +9,1 @@
    ConnectionFactory connectionFactory() {
        ActiveMQConnectionFactory factory = new ActiveMQConnectionFactory("tcp://broker:61616");
+       factory.setTrustedPackages(Arrays.asList("java.util", "java.lang"));
        return factory;
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.security.marshalling.FixInsecureJmsDeserialization"
  displayName="Restrict deserialized classes for JMS `ObjectMessage`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-java-security"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.marshalling.FixInsecureJmsDeserialization" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
