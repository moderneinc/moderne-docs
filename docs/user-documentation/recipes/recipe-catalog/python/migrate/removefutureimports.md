---
sidebar_label: "Remove obsolete `__future__` imports"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove obsolete `__future__` imports

**org.openrewrite.python.migrate.RemoveFutureImports**

_Remove `from __future__ import ...` statements for features that are enabled by default in Python 3._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [future](/user-documentation/recipes/lists/recipes-by-tag#future)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite-migrate-python
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.RemoveFutureImports
```
