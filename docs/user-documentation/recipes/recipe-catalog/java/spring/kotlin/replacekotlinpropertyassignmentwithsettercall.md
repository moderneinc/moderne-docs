---
title: "Replace Kotlin property assignment with setter call"
sidebar_label: "Replace Kotlin property assignment with setter call"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace Kotlin property assignment with setter call

**io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall**

_Rewrites a Kotlin property-style assignment (`obj.prop = value`) to an explicit setter invocation (`obj.setProp(value)`). Use when a Java library adopts JSpecify `@NullMarked` and a previously-`var` synthetic property is demoted to `val`: Kotlin requires the getter's return type and the setter's parameter type to share the same nullability, and once they diverge the assignment stops compiling._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | methodPattern | A MethodMatcher pattern identifying the Java setter to convert to. Kotlin property assignments whose resolved setter matches this pattern will be rewritten to an explicit `set...(value)` call. | `org.springframework.boot.web.servlet.AbstractFilterRegistrationBean setFilter(..)` |
| `String` | propertyName | The Kotlin synthetic-property name corresponding to the setter (e.g. `filter` for `setFilter`, `URL` for `setURL`, `isEnabled` for `setEnabled` paired with `isEnabled()`). Kotlin's naming rules preserve acronyms and the `is` prefix on boolean properties, so the property name is stated explicitly rather than derived. | `filter` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 4.0 (Moderne Edition)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/boot4/upgradespringboot_4_0-moderne-edition)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|methodPattern|`FILTER_REG_BEAN_SET_FILTER`|
|propertyName|`filter`|


<Tabs groupId="beforeAfter">
<TabItem value="kotlin" label="kotlin">


###### Before
```kotlin
import jakarta.servlet.Filter
import org.springframework.boot.web.servlet.FilterRegistrationBean

class Config {
    fun requestResponseFilterRegistration(requestResponseFilter: Filter): FilterRegistrationBean<Filter> {
        val registration = FilterRegistrationBean<Filter>()
        registration.filter = requestResponseFilter
        return registration
    }
}
```

###### After
```kotlin
import jakarta.servlet.Filter
import org.springframework.boot.web.servlet.FilterRegistrationBean

class Config {
    fun requestResponseFilterRegistration(requestResponseFilter: Filter): FilterRegistrationBean<Filter> {
        val registration = FilterRegistrationBean<Filter>()
        registration.setFilter(requestResponseFilter)
        return registration
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
    fun requestResponseFilterRegistration(requestResponseFilter: Filter): FilterRegistrationBean<Filter> {
        val registration = FilterRegistrationBean<Filter>()
-       registration.filter = requestResponseFilter
+       registration.setFilter(requestResponseFilter)
        return registration
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
name: com.yourorg.ReplaceKotlinPropertyAssignmentWithSetterCallExample
displayName: Replace Kotlin property assignment with setter call example
recipeList:
  - io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall:
      methodPattern: org.springframework.boot.web.servlet.AbstractFilterRegistrationBean setFilter(..)
      propertyName: filter
```

<RunRecipe
  recipeName="io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall"
  displayName="Replace Kotlin property assignment with setter call"
  groupId="io.moderne.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING"
  requiresConfiguration
  cliOptions={' --recipe-option "methodPattern=org.springframework.boot.web.servlet.AbstractFilterRegistrationBean setFilter(..)" --recipe-option "propertyName=filter"'}
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.java.spring.kotlin.ReplaceKotlinPropertyAssignmentWithSetterCall" />

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
