---
sidebar_label: "Merge `isinstance()` calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Merge `isinstance()` calls

**org.openrewrite.python.cleanup.MergeIsinstance**

_Merge `isinstance(x, A) or isinstance(x, B)` into `isinstance(x, (A, B))` for cleaner type checking._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.MergeIsinstance"
  displayName="Merge `isinstance()` calls"
  pipPackage="openrewrite-static-analysis"
/>
