---
sidebar_label: "Replace `Thread.isAlive()` with `Thread.is_alive()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `Thread.isAlive()` with `Thread.is_alive()`

**org.openrewrite.python.migrate.ReplaceThreadIsAlive**

_Replace `isAlive()` method calls with `is_alive()`. Deprecated in Python 3.1 and removed in 3.9._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [threading](/user-documentation/recipes/lists/recipes-by-tag#threading)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#39)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceThreadIsAlive"
  displayName="Replace `Thread.isAlive()` with `Thread.is_alive()`"
  pipPackage="openrewrite-migrate-python"
/>
