---
sidebar_label: "Use `datetime.now()` instead of `datetime.today()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `datetime.now()` instead of `datetime.today()`

**org.openrewrite.python.cleanup.UseDatetimeNowNotToday**

_Replace `datetime.today()` with `datetime.now()`. Both are equivalent, but `now()` is more explicit and supports timezone arguments._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UseDatetimeNowNotToday"
  displayName="Use `datetime.now()` instead of `datetime.today()`"
  pipPackage="openrewrite-static-analysis"
/>
