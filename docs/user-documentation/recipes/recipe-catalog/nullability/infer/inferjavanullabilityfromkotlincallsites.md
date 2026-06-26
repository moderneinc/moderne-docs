---
title: "Infer Java `@Nullable` return types from Kotlin call sites"
sidebar_label: "Infer Java `@Nullable` return types from Kotlin call sites"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Infer Java `@Nullable` return types from Kotlin call sites

**io.moderne.nullability.infer.InferJavaNullabilityFromKotlinCallSites**

_Adds the JSpecify `@Nullable` annotation to the return type of **Java** methods based on how those methods are used in **Kotlin** code. A Java method returning a reference type appears to Kotlin as a platform type (`String!`) of unknown nullability; Kotlin call sites that treat the result as possibly null reveal the intended contract. This recipe scans Kotlin sources for such usage — a safe call (`call()?.x`), an elvis operand (`call() ?: fallback`), a not-null assertion (`call()!!`), or a comparison to `null` — and writes `@Nullable` onto the matching Java method declaration, resolving the platform-type ambiguity. Only Java sources are modified; Kotlin sources are read for evidence and left unchanged. Conservative by design: it skips primitive and `void` returns, methods that already carry a nullability annotation, and `@Override` methods (where annotating the return could violate the supertype contract)._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Infer and add `@Nullable` annotations](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/nullability/infer/infernullability)

## Example


###### Unchanged
```kotlin
import io.moderne.nullability.fixture.Greeter
fun use(g: Greeter): Int? {
    return g.getName()?.length
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package io.moderne.nullability.fixture;

public class Greeter {
    public String getName() {
        return "x";
    }

    public String other() {
        return "y";
    }
}
```

###### After
```java
package io.moderne.nullability.fixture;

import org.jspecify.annotations.Nullable;

public class Greeter {
    @Nullable
    public String getName() {
        return "x";
    }

    public String other() {
        return "y";
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,0 +3,2 @@
package io.moderne.nullability.fixture;

+import org.jspecify.annotations.Nullable;
+
public class Greeter {
@@ -4,0 +6,1 @@

public class Greeter {
+   @Nullable
    public String getName() {
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="io.moderne.nullability.infer.InferJavaNullabilityFromKotlinCallSites"
  displayName="Infer Java `@Nullable` return types from Kotlin call sites"
  groupId="io.moderne.recipe"
  artifactId="rewrite-nullability"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.nullability.infer.InferJavaNullabilityFromKotlinCallSites" />

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
