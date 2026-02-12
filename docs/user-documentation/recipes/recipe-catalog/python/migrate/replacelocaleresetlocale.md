---
sidebar_label: "Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`

**org.openrewrite.python.migrate.ReplaceLocaleResetlocale**

_The `locale.resetlocale()` function was deprecated in Python 3.11 and removed in Python 3.13. Replace with `locale.setlocale(locale.LC_ALL, '')`._

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceLocaleResetlocale](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceLocaleResetlocale),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceLocaleResetlocale
```
