---
sidebar_label: "Consolidate repeated `==` with `or` into `in`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Consolidate repeated `==` with `or` into `in`

**org.openrewrite.python.cleanup.MergeComparisons**

_Fold ``var == a or var == b`` into ``var in [a, b]``, reducing duplication and improving readability._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.MergeComparisons"
  displayName="Consolidate repeated `==` with `or` into `in`"
  pipPackage="openrewrite-static-analysis"
/>
