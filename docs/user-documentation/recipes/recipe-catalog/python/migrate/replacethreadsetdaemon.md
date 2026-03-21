---
sidebar_label: "Replace `Thread.setDaemon()` with `Thread.daemon = ...`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `Thread.setDaemon()` with `Thread.daemon = ...`

**org.openrewrite.python.migrate.ReplaceThreadSetDaemon**

_Replace `setDaemon()` method calls with `daemon` property assignment. Deprecated in Python 3.10, removed in 3.12._

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
  recipeName="org.openrewrite.python.migrate.ReplaceThreadSetDaemon"
  displayName="Replace `Thread.setDaemon()` with `Thread.daemon = ...`"
  pipPackage="openrewrite-migrate-python"
/>
