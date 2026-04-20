---
sidebar_label: "Remove redundant `None` default from `dict.get()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove redundant `None` default from `dict.get()`

**org.openrewrite.python.cleanup.RemoveNoneFromDefaultGet**

_Remove redundant `None` default argument from `dict.get()` calls since `None` is already the default return value._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveNoneFromDefaultGet"
  displayName="Remove redundant `None` default from `dict.get()`"
  pipPackage="openrewrite-static-analysis"
/>
