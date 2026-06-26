---
title: "Replace a method invocation with a reference to an annotated field"
sidebar_label: "Replace a method invocation with a reference to an annotated field"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace a method invocation with a reference to an annotated field

**io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField**

_For each class containing an invocation matching the configured method pattern, introduces an annotated field of the requested type and rewrites every matching invocation in that class to reference the new field. If a field with the same annotation and type already exists, its name is reused._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | methodPattern | A method pattern matched against the invocation to replace. A [method pattern](https://docs.openrewrite.org/reference/method-patterns) is used to find matching method invocations. For example, to find all method invocations in the Guava library, use the pattern: `com.google.common..*#*(..)`.<br/><br/>The pattern format is `<PACKAGE>#<METHOD_NAME>(<ARGS>)`. <br/><br/>`..*` includes all subpackages of `com.google.common`. <br/>`*(..)` matches any method name with any number of arguments. <br/><br/>For more specific queries, like Guava's `ImmutableMap`, use `com.google.common.collect.ImmutableMap#*(..)` to narrow down the results. | `io.dropwizard.testing.junit5.DropwizardAppExtension getLocalPort()` |
| `String` | fieldType | Either a primitive keyword (e.g. `int`) or a fully qualified class name for the field's type. | `int` |
| `String` | annotationFqn | Fully qualified annotation type to place on the new field. | `org.springframework.boot.test.web.server.LocalServerPort` |
| `String` | preferredFieldName | Name to give the new field. If a same-named field already exists in the class, an incrementing suffix is appended to avoid collision. | `localPort` |
| `List` | classpathResources | Resource patterns passed to the JavaParser used by the field-injection template. | `spring-boot-test-3.*` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Dropwizard to Spring Boot 3](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/dropwizard/boot/migratedropwizardtospringboot3)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|methodPattern|`GET_LOCAL_PORT_PATTERN`|
|fieldType|`int`|
|annotationFqn|`org.springframework.boot.test.web.server.LocalServerPort`|
|preferredFieldName|`localPort`|
|classpathResources|`List.of("spring-boot-test-3")`|


###### Unchanged
```java
import io.dropwizard.core.Application;
import io.dropwizard.core.Configuration;
import io.dropwizard.core.setup.Environment;
public class TestApp extends Application<Configuration> {
    @Override public void run(Configuration c, Environment e) {}
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.dropwizard.core.Configuration;
import io.dropwizard.testing.junit5.DropwizardAppExtension;

abstract class AbstractComponentTest {
    static final DropwizardAppExtension<Configuration> DROPWIZARD =
        new DropwizardAppExtension<>(TestApp.class, "server.yml");

    void someTest() {
        int port = DROPWIZARD.getLocalPort();
    }
}
```

###### After
```java
import io.dropwizard.core.Configuration;
import io.dropwizard.testing.junit5.DropwizardAppExtension;
import org.springframework.boot.test.web.server.LocalServerPort;

abstract class AbstractComponentTest {
    @LocalServerPort
    int localPort;
    static final DropwizardAppExtension<Configuration> DROPWIZARD =
        new DropwizardAppExtension<>(TestApp.class, "server.yml");

    void someTest() {
        int port = localPort;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,1 @@
import io.dropwizard.core.Configuration;
import io.dropwizard.testing.junit5.DropwizardAppExtension;
+import org.springframework.boot.test.web.server.LocalServerPort;

@@ -5,0 +6,2 @@

abstract class AbstractComponentTest {
+   @LocalServerPort
+   int localPort;
    static final DropwizardAppExtension<Configuration> DROPWIZARD =
@@ -9,1 +12,1 @@

    void someTest() {
-       int port = DROPWIZARD.getLocalPort();
+       int port = localPort;
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options.
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceMethodInvocationWithAnnotatedFieldExample
displayName: Replace a method invocation with a reference to an annotated field example
recipeList:
  - io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField:
      methodPattern: io.dropwizard.testing.junit5.DropwizardAppExtension getLocalPort()
      fieldType: int
      annotationFqn: org.springframework.boot.test.web.server.LocalServerPort
      preferredFieldName: localPort
      classpathResources:
        - spring-boot-test-3.*
```

<RunRecipe
  recipeName="io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField"
  displayName="Replace a method invocation with a reference to an annotated field"
  groupId="io.moderne.recipe"
  artifactId="rewrite-dropwizard"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_DROPWIZARD"
  requiresConfiguration
  cliOptions={' --recipe-option "methodPattern=io.dropwizard.testing.junit5.DropwizardAppExtension getLocalPort()" --recipe-option "fieldType=int" --recipe-option "annotationFqn=org.springframework.boot.test.web.server.LocalServerPort" --recipe-option "preferredFieldName=localPort" --recipe-option "classpathResources=spring-boot-test-3.*"'}
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.dropwizard.boot.test.ReplaceMethodInvocationWithAnnotatedField" />

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
