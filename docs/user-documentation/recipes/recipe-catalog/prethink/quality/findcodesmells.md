---
sidebar_label: "Find code smells"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find code smells

**io.moderne.prethink.quality.FindCodeSmells**

_Detect code smells including God Class, Feature Envy, and Data Class using composite metric thresholds with severity ratings._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Update Prethink context (no AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextnoaistarter)
* [Update Prethink context (with AI)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/prethink/updateprethinkcontextstarter)

## Example


###### Unchanged
```java
package com.example;

/**
 * Intentionally bloated class to trigger God Class detection.
 * WMC >= 47 (each method has if/else = CC 2, 24 methods = WMC 48).
 * TCC < 0.33 (each method accesses a different field).
 * ATFD > 5 (methods directly access public fields of Other).
 */
public class BigService {
    private int f1;
    private int f2;
    private int f3;
    private int f4;
    private int f5;
    private int f6;
    private int f7;
    private int f8;
    private int f9;
    private int f10;
    private int f11;
    private int f12;
    private int f13;
    private int f14;
    private int f15;
    private int f16;
    private int f17;
    private int f18;
    private int f19;
    private int f20;
    private int f21;
    private int f22;
    private int f23;
    private int f24;

    public int method1(Other ext) {
        if (ext.x > 0) { return ext.y; }
        return f1;
    }
    public int method2(Other ext) {
        if (ext.y > 0) { return ext.z; }
        return f2;
    }
    public int method3(Other ext) {
        if (ext.z > 0) { return ext.w; }
        return f3;
    }
    public int method4(Other ext) {
        if (ext.w > 0) { return ext.v; }
        return f4;
    }
    public int method5(Other ext) {
        if (ext.v > 0) { return ext.u; }
        return f5;
    }
    public int method6(Other ext) {
        if (ext.u > 0) { return ext.t; }
        return f6;
    }
    public int method7(Other ext) {
        if (ext.x > 0) { return ext.y; }
        return f7;
    }
    public int method8(Other ext) {
        if (ext.y > 0) { return ext.z; }
        return f8;
    }
    public int method9(Other ext) {
        if (ext.z > 0) { return ext.w; }
        return f9;
    }
    public int method10(Other ext) {
        if (ext.w > 0) { return ext.v; }
        return f10;
    }
    public int method11(Other ext) {
        if (ext.v > 0) { return ext.u; }
        return f11;
    }
    public int method12(Other ext) {
        if (ext.u > 0) { return ext.t; }
        return f12;
    }
    public int method13(Other ext) {
        if (ext.x > 0) { return ext.y; }
        return f13;
    }
    public int method14(Other ext) {
        if (ext.y > 0) { return ext.z; }
        return f14;
    }
    public int method15(Other ext) {
        if (ext.z > 0) { return ext.w; }
        return f15;
    }
    public int method16(Other ext) {
        if (ext.w > 0) { return ext.v; }
        return f16;
    }
    public int method17(Other ext) {
        if (ext.v > 0) { return ext.u; }
        return f17;
    }
    public int method18(Other ext) {
        if (ext.u > 0) { return ext.t; }
        return f18;
    }
    public int method19(Other ext) {
        if (ext.x > 0) { return ext.y; }
        return f19;
    }
    public int method20(Other ext) {
        if (ext.y > 0) { return ext.z; }
        return f20;
    }
    public int method21(Other ext) {
        if (ext.z > 0) { return ext.w; }
        return f21;
    }
    public int method22(Other ext) {
        if (ext.w > 0) { return ext.v; }
        return f22;
    }
    public int method23(Other ext) {
        if (ext.v > 0) { return ext.u; }
        return f23;
    }
    public int method24(Other ext) {
        if (ext.u > 0) { return ext.t; }
        return f24;
    }
}
```

###### Unchanged
```java
package com.example;

public class Other {
    public int x;
    public int y;
    public int z;
    public int w;
    public int v;
    public int u;
    public int t;

    public int compute(int a, int b) { return a + b; }
}
```

###### Unchanged
```mavenProject
test-project
```


## Usage

<RunRecipe
  recipeName="io.moderne.prethink.quality.FindCodeSmells"
  displayName="Find code smells"
  groupId="io.moderne.recipe"
  artifactId="rewrite-prethink"
  versionKey="VERSION_IO_MODERNE_RECIPE_REWRITE_PRETHINK"
  showGradle={false}
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.prethink.quality.FindCodeSmells" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="io.moderne.prethink.table.CodeSmells" label="CodeSmells">

### Code smells
**io.moderne.prethink.table.CodeSmells**

_Detected code smells including God Class, Feature Envy, and Data Class with severity ratings and the metric evidence that triggered detection._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the smell. |
| Class name | The fully qualified name of the class. |
| Method name | The method name, if the smell is method-level (e.g., Feature Envy). Null for class-level smells. |
| Smell type | The type of code smell: GOD_CLASS, FEATURE_ENVY, or DATA_CLASS. |
| Severity | Severity based on how far metrics exceed thresholds: LOW, MEDIUM, HIGH, or CRITICAL. |
| Evidence | The metric values that triggered detection, e.g., 'WMC=52, TCC=0.21, ATFD=8'. |

</TabItem>

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
