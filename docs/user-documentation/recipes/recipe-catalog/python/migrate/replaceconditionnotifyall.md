---
sidebar_label: "Replace `Condition.notifyAll()` with `Condition.notify_all()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `Condition.notifyAll()` with `Condition.notify_all()`

**org.openrewrite.python.migrate.ReplaceConditionNotifyAll**

_Replace `notifyAll()` method calls with `notify_all()`. The camelCase version was deprecated in Python 3.10 and removed in 3.12._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [threading](/user-documentation/recipes/lists/recipes-by-tag#threading)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#312)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#310)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython310)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceConditionNotifyAll"
  displayName="Replace `Condition.notifyAll()` with `Condition.notify_all()`"
  pipPackage="openrewrite-migrate-python"
/>
