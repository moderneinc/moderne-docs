---
sidebar_label: "Find deprecated `xdrlib` module usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `xdrlib` module usage

**org.openrewrite.python.migrate.FindXdrlibModule**

_The `xdrlib` module was deprecated in Python 3.11 and removed in Python 3.13. Use `struct` module for binary packing/unpacking._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.13](/user-documentation/recipes/lists/recipes-by-tag#313)
* [PEP 594](/user-documentation/recipes/lists/recipes-by-tag#pep-594)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindXdrlibModule"
  displayName="Find deprecated `xdrlib` module usage"
  pipPackage="openrewrite-migrate-python"
/>
