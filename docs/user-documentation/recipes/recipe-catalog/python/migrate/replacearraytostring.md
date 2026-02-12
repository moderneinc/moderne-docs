---
sidebar_label: "Replace `array.tostring()` with `array.tobytes()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `array.tostring()` with `array.tobytes()`

**org.openrewrite.python.migrate.ReplaceArrayTostring**

_Replace `tostring()` with `tobytes()` on array objects. The tostring() method was deprecated in Python 3.2 and removed in 3.14._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [array](/user-documentation/recipes/lists/recipes-by-tag#array)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.14](/user-documentation/recipes/lists/recipes-by-tag#3.14)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceArrayTostring](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceArrayTostring),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceArrayTostring
```
