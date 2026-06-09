---
title: "Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x"
sidebar_label: "Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x

**io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes**

_Renames or removes Spring Integration XML attributes that were deprecated or removed between Spring Integration 5.x and 6.x. Scoped to XML files using the Spring Integration namespace._

### Tags

* [spring](/user-documentation/recipes/lists/recipes-by-tag#spring)
* [integration](/user-documentation/recipes/lists/recipes-by-tag#integration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Framework 6.0 (Moderne Edition)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/framework/upgradespringframework_6_0-moderne-edition)

## Examples
##### Example 1
`MigrateSpringFramework6DeprecatedIntegrationXmlAttributesTest#renameMaxRowsPerPollOnJdbcOutboundGateway`


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:int-jdbc="http://www.springframework.org/schema/integration/jdbc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/integration/jdbc
                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd">
    <int-jdbc:outbound-gateway request-channel="in"
                               data-source="dataSource"
                               query="SELECT * FROM events WHERE id = :id"
                               max-rows-per-poll="0"/>
</beans>
```

###### After
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:int-jdbc="http://www.springframework.org/schema/integration/jdbc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/integration/jdbc
                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd">
    <int-jdbc:outbound-gateway request-channel="in"
                               data-source="dataSource"
                               query="SELECT * FROM events WHERE id = :id"
                               max-rows="0"/>
</beans>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,1 +12,1 @@
                               data-source="dataSource"
                               query="SELECT * FROM events WHERE id = :id"
-                              max-rows-per-poll="0"/>
+                              max-rows="0"/>
</beans>
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateSpringFramework6DeprecatedIntegrationXmlAttributesTest#renameMaxRowsPerPollOnJdbcOutboundGateway`


<Tabs groupId="beforeAfter">
<TabItem value="xml" label="xml">


###### Before
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:int-jdbc="http://www.springframework.org/schema/integration/jdbc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/integration/jdbc
                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd">
    <int-jdbc:outbound-gateway request-channel="in"
                               data-source="dataSource"
                               query="SELECT * FROM events WHERE id = :id"
                               max-rows-per-poll="0"/>
</beans>
```

###### After
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:int-jdbc="http://www.springframework.org/schema/integration/jdbc"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
                           http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/integration/jdbc
                           http://www.springframework.org/schema/integration/jdbc/spring-integration-jdbc.xsd">
    <int-jdbc:outbound-gateway request-channel="in"
                               data-source="dataSource"
                               query="SELECT * FROM events WHERE id = :id"
                               max-rows="0"/>
</beans>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,1 +12,1 @@
                               data-source="dataSource"
                               query="SELECT * FROM events WHERE id = :id"
-                              max-rows-per-poll="0"/>
+                              max-rows="0"/>
</beans>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes"
  displayName="Migrate Spring Integration XML attributes deprecated by Spring Integration 6.x"
  groupId="io.moderne.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.spring.integration.MigrateSpringFramework6DeprecatedIntegrationXmlAttributes" />

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
