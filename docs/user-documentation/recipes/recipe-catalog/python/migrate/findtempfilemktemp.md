---
sidebar_label: "Find deprecated `tempfile.mktemp()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `tempfile.mktemp()` usage

**org.openrewrite.python.migrate.FindTempfileMktemp**

_Find usage of `tempfile.mktemp()` which is deprecated due to security concerns (race condition). Use `mkstemp()` or `NamedTemporaryFile()` instead._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [security](/user-documentation/recipes/lists/recipes-by-tag#security)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [tempfile](/user-documentation/recipes/lists/recipes-by-tag#tempfile)
* [3.14](/user-documentation/recipes/lists/recipes-by-tag#314)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite-migrate-python
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.FindTempfileMktemp
```
