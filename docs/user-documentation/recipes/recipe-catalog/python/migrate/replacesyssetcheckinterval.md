---
sidebar_label: "Replace `sys.setcheckinterval()` with `sys.setswitchinterval()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `sys.setcheckinterval()` with `sys.setswitchinterval()`

**org.openrewrite.python.migrate.ReplaceSysSetCheckInterval**

_Replace `sys.setcheckinterval()` with `sys.setswitchinterval()`. Deprecated in Python 3.2 and removed in 3.9. Note: The semantics differ — check interval was in bytecode instructions, switch interval is in seconds._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [sys](/user-documentation/recipes/lists/recipes-by-tag#sys)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#39)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite-migrate-python
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceSysSetCheckInterval
```
