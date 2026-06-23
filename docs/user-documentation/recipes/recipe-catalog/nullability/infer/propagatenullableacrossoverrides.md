---
title: "Propagate `@Nullable` across override relationships"
sidebar_label: "Propagate `@Nullable` across override relationships"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Propagate `@Nullable` across override relationships

**io.moderne.nullability.infer.PropagateNullableAcrossOverrides**

_Enforces NullAway override consistency by propagating existing JSpecify `@Nullable` annotations through `@Override` relationships. Because return types are covariant, a `@Nullable` return on an overriding method is propagated up to the supertype method it overrides. Because parameters are contravariant, a `@Nullable` parameter on a supertype method is propagated down to the corresponding parameter of every overriding method. Methods are matched across files by their erased signature `name(paramTypes)` plus a declaring-type subtype relationship. Conservative by design: it never widens a legal covariant return narrowing (a `@Nullable` supertype return overridden by a non-null return is left alone), skips primitive and `void` returns and already-annotated positions, and does nothing when a participating type cannot be resolved. Multi-hop hierarchies converge over successive recipe cycles. Only Java sources are modified; Kotlin and Groovy express nullability in the type system, which their compilers already enforce._

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
interface Service {
    String find();
}
```

###### After
```java
import org.jspecify.annotations.Nullable;

interface Service {
    @Nullable
    String find();
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,0 +1,2 @@
+import org.jspecify.annotations.Nullable;
+
interface Service {
@@ -2,0 +4,1 @@
interface Service {
+   @Nullable
    String find();
```
</TabItem>
</Tabs>

###### Unchanged
```java
import org.jspecify.annotations.Nullable;

class ServiceImpl implements Service {
    @Override
    public @Nullable String find() {
        return null;
    }
}
```


## Usage

<RunRecipe
  recipeName="io.moderne.nullability.infer.PropagateNullableAcrossOverrides"
  displayName="Propagate `@Nullable` across override relationships"
  groupId="io.moderne.recipe"
  artifactId="rewrite-nullability"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.nullability.infer.PropagateNullableAcrossOverrides" />

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
