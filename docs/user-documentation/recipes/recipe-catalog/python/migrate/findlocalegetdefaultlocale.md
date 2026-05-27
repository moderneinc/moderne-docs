---
sidebar_label: "Find deprecated `locale.getdefaultlocale()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `locale.getdefaultlocale()` usage

**org.openrewrite.python.migrate.FindLocaleGetdefaultlocale**

_`locale.getdefaultlocale()` was deprecated in Python 3.11. Use `locale.setlocale()`, `locale.getlocale()`, or `locale.getpreferredencoding(False)` instead._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.11](/user-documentation/recipes/lists/recipes-by-tag#311)
* [locale](/user-documentation/recipes/lists/recipes-by-tag#locale)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindLocaleGetdefaultlocale"
  displayName="Find deprecated `locale.getdefaultlocale()` usage"
  pipPackage="openrewrite-migrate-python"
/>
