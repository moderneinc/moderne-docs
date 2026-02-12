---
sidebar_label: "Replace `Thread.isDaemon()` with `Thread.daemon`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `Thread.isDaemon()` with `Thread.daemon`

**org.openrewrite.python.migrate.ReplaceThreadIsDaemon**

_Replace `isDaemon()` method calls with the `daemon` property. Deprecated in Python 3.10, removed in 3.12._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [threading](/user-documentation/recipes/lists/recipes-by-tag#threading)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#3.12)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#3.10)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceThreadIsDaemon](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceThreadIsDaemon),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython310)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceThreadIsDaemon
```
