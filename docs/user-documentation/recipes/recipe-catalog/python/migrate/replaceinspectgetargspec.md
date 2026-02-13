---
sidebar_label: "Replace `inspect.getargspec()` with `inspect.getfullargspec()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `inspect.getargspec()` with `inspect.getfullargspec()`

**org.openrewrite.python.migrate.ReplaceInspectGetargspec**

_The `inspect.getargspec()` function was deprecated in Python 3.0 and removed in Python 3.11. Replace with `inspect.getfullargspec()`. Note that code accessing the `keywords` field must be updated to use `varkw`._

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
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceInspectGetargspec
```
