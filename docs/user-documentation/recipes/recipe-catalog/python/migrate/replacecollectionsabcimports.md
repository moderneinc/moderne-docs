---
sidebar_label: "Replace `collections` ABC imports with `collections.abc`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `collections` ABC imports with `collections.abc`

**org.openrewrite.python.migrate.ReplaceCollectionsAbcImports**

_Migrate deprecated abstract base class imports from `collections` to `collections.abc`. These imports were deprecated in Python 3.3 and removed in Python 3.10._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [collections](/user-documentation/recipes/lists/recipes-by-tag#collections)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#3.10)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceCollectionsAbcImports](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceCollectionsAbcImports),
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
mod run . --recipe org.openrewrite.python.migrate.ReplaceCollectionsAbcImports
```
