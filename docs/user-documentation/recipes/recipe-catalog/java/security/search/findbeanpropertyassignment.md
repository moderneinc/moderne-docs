---
title: "Find Apache Commons BeanUtils property assignments"
sidebar_label: "Find Apache Commons BeanUtils property assignments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Apache Commons BeanUtils property assignments

**org.openrewrite.java.security.search.FindBeanPropertyAssignment**

_Finds calls to Apache Commons BeanUtils and PropertyUtils setters and bulk-copy methods (`setProperty`, `populate`, `copyProperties`, `copyProperty`, `setNestedProperty`, `setSimpleProperty`, `setIndexedProperty`, `setMappedProperty`) — including the equivalent instance-method forms on `BeanUtilsBean` and `PropertyUtilsBean`, and on any subclass of those, regardless of how the bean instance is obtained (`getInstance()`, `new`, injected field, etc.). When the property name or value flows from an untrusted source (e.g. HTTP request parameters), these calls enable bean-injection / mass-assignment (CWE-915) — an attacker can set any settable field on the bean, including ones the application never intended to expose. Per Sonar S4512 each call site needs human review for whether the property name and value come from trusted input. Detector only; does not modify code._

### Tags

* [CWE-915](/user-documentation/recipes/lists/recipes-by-tag#cwe)
* [RSPEC-S4512](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S4512&open=java%3AS4512)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.beanutils.BeanUtils;

class A {
    void apply(Object bean, String name, Object value) throws Exception {
        BeanUtils.setProperty(bean, name, value);
    }
}
```

###### After
```java
import org.apache.commons.beanutils.BeanUtils;

class A {
    void apply(Object bean, String name, Object value) throws Exception {
        /*~~(Setting bean properties from external input can enable bean injection (CWE-915). Verify the property name and value come from a trusted source.)~~>*/BeanUtils.setProperty(bean, name, value);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
class A {
    void apply(Object bean, String name, Object value) throws Exception {
-       BeanUtils.setProperty(bean, name, value);
+       /*~~(Setting bean properties from external input can enable bean injection (CWE-915). Verify the property name and value come from a trusted source.)~~>*/BeanUtils.setProperty(bean, name, value);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.security.search.FindBeanPropertyAssignment"
  displayName="Find Apache Commons BeanUtils property assignments"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-java-security"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_SECURITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.security.search.FindBeanPropertyAssignment" />

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
