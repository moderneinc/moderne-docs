---
title: "Add `@NullMarked` to packages that are ready for NullAway"
sidebar_label: "Add `@NullMarked` to packages that are ready for NullAway"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `@NullMarked` to packages that are ready for NullAway

**io.moderne.nullability.scope.AddNullMarkedToCleanPackages**

_Automatically adds the JSpecify `@NullMarked` annotation to a package — by annotating its existing `package-info.java` or generating one — but only when every Java class in the package is "ready", i.e. would not produce a fresh NullAway error once the scope is marked. A package fails the readiness gate (and is left unmarked) if any class in it has: (1) an uninitialized non-null instance field (the `FindUninitializedNonNullField` condition: non-`@Nullable`, non-`final`, non-`static`, reference-typed, no initializer, not assigned in every constructor, not dependency-injection-annotated); (2) a method whose body can return a provably-null value but whose return type is not `@Nullable`; or (3) a field initialized to a provably-null value that is not `@Nullable`. An `@Override` method that returns null without `@Nullable` is also treated as a blocker. Packages whose sources live under a generated marker path (`/generated/`, `/build/generated`, `/generated-sources/`) or whose classes carry a `@Generated` annotation are skipped. The recipe is idempotent and operates per leaf package; it never marks parent packages transitively. Java sources only._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Example


###### Unchanged
```java title="src/main/java/com/example/Clean.java"
package com.example;

import org.jspecify.annotations.Nullable;

class Clean {
    String name = "x";

    @Nullable
    String maybeNull() {
        return null;
    }
}
```

<Tabs groupId="beforeAfter">
<TabItem value="src/main/java/com/example/package-info.java" label="src/main/java/com/example/package-info.java">


###### Before
```java title="src/main/java/com/example/package-info.java"
package com.example;
```

###### After
```java title="src/main/java/com/example/package-info.java"
@NullMarked
package com.example;

import org.jspecify.annotations.NullMarked;
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/java/com/example/package-info.java
+++ src/main/java/com/example/package-info.java
@@ -1,0 +1,1 @@
+@NullMarked
package com.example;
@@ -3,0 +4,2 @@
package com.example;

+import org.jspecify.annotations.NullMarked;
+
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="io.moderne.nullability.scope.AddNullMarkedToCleanPackages"
  displayName="Add `@NullMarked` to packages that are ready for NullAway"
  groupId="io.moderne.recipe"
  artifactId="rewrite-nullability"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_NULLABILITY"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.nullability.scope.AddNullMarkedToCleanPackages" />

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
