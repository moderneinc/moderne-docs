---
sidebar_label: "Find `functools.cmp_to_key()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `functools.cmp_to_key()` usage

**org.openrewrite.python.migrate.FindFunctoolsCmpToKey**

_Find usage of `functools.cmp_to_key()` which is a Python 2 compatibility function. Consider using a key function directly._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [functools](/user-documentation/recipes/lists/recipes-by-tag#functools)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindFunctoolsCmpToKey"
  displayName="Find `functools.cmp_to_key()` usage"
  pipPackage="openrewrite-migrate-python"
/>
