---
sidebar_label: "Find removed `sys.set_coroutine_wrapper()` / `sys.get_coroutine_wrapper()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find removed `sys.set_coroutine_wrapper()` / `sys.get_coroutine_wrapper()`

**org.openrewrite.python.migrate.FindSysCoroutineWrapper**

_`sys.set_coroutine_wrapper()` and `sys.get_coroutine_wrapper()` were deprecated in Python 3.7 and removed in Python 3.8._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [sys](/user-documentation/recipes/lists/recipes-by-tag#sys)
* [3.8](/user-documentation/recipes/lists/recipes-by-tag#38)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindSysCoroutineWrapper"
  displayName="Find removed `sys.set_coroutine_wrapper()` / `sys.get_coroutine_wrapper()`"
  pipPackage="openrewrite-migrate-python"
/>
