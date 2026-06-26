---
title: "Add `@Nullable` to collection and map type arguments that hold null elements"
sidebar_label: "Add `@Nullable` to collection and map type arguments that hold null elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `@Nullable` to collection and map type arguments that hold null elements

**io.moderne.nullability.infer.AddNullableToTypeArgument**

_Places the JSpecify `@Nullable` annotation on a collection or map type argument when its elements or values are provably nullable, producing `List<@Nullable String>` or `Map<String, @Nullable String>`. JSpecify distinguishes `List<@Nullable String>` (the list may hold `null` elements) from `@Nullable List<String>` (the list reference may be `null`); this recipe annotates the type argument, which NullAway enforces in JSpecify mode. A type argument is annotated when `Collection.add(...)` is called with a provably-null element, `Map.put(...)` is called with a provably-null value, or the declaration's initializer is a `List.of(...)`/`Set.of(...)`/`Arrays.asList(...)` containing a `null`. The receiver is resolved to its declaration within the same compilation unit (cross-file declarations are not handled). Conservative by design: it skips wildcard (`?`) and raw type arguments, and arguments that are already `@Nullable`, so it is idempotent._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Infer and add `@Nullable` annotations](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/nullability/infer/infernullability)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.ArrayList;
import java.util.List;

class Test {
    void m() {
        List<String> l = new ArrayList<>();
        l.add(null);
    }
}
```

###### After
```java
import org.jspecify.annotations.Nullable;

import java.util.ArrayList;
import java.util.List;

class Test {
    void m() {
        List<@Nullable String> l = new ArrayList<>();
        l.add(null);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,0 +1,2 @@
+import org.jspecify.annotations.Nullable;
+
import java.util.ArrayList;
@@ -6,1 +8,1 @@
class Test {
    void m() {
-       List<String> l = new ArrayList<>();
+       List<@Nullable String> l = new ArrayList<>();
        l.add(null);
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="io.moderne.nullability.infer.AddNullableToTypeArgument"
  displayName="Add `@Nullable` to collection and map type arguments that hold null elements"
  groupId="io.moderne.recipe"
  artifactId="rewrite-nullability"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.nullability.infer.AddNullableToTypeArgument" />

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
