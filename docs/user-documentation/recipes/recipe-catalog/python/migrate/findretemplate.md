---
sidebar_label: "Find deprecated `re.template()` / `re.TEMPLATE` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `re.template()` / `re.TEMPLATE` usage

**org.openrewrite.python.migrate.FindReTemplate**

_`re.template()` and `re.TEMPLATE` were deprecated in Python 3.11 and removed in 3.13._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [re](/user-documentation/recipes/lists/recipes-by-tag#re)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.11](/user-documentation/recipes/lists/recipes-by-tag#311)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite-migrate-python
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.FindReTemplate
```
