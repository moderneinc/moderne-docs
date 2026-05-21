---
sidebar_label: "Replace `array.fromstring()` with `array.frombytes()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `array.fromstring()` with `array.frombytes()`

**org.openrewrite.python.migrate.ReplaceArrayFromstring**

_Replace `fromstring()` with `frombytes()` on array objects. The fromstring() method was deprecated in Python 3.2 and removed in 3.14._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [array](/user-documentation/recipes/lists/recipes-by-tag#array)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.14](/user-documentation/recipes/lists/recipes-by-tag#314)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceArrayFromstring"
  displayName="Replace `array.fromstring()` with `array.frombytes()`"
  pipPackage="openrewrite-migrate-python"
/>
