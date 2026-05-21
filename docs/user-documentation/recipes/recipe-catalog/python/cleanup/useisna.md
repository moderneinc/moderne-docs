---
sidebar_label: "Use `.isna()` instead of `== np.nan` comparisons"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `.isna()` instead of `== np.nan` comparisons

**org.openrewrite.python.cleanup.UseIsna**

_Rewrite `== np.nan` and `== numpy.nan` equality tests as `.isna()` calls, since direct NaN comparison always evaluates to False._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UseIsna"
  displayName="Use `.isna()` instead of `== np.nan` comparisons"
  pipPackage="openrewrite-static-analysis"
/>
