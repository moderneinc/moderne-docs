---
sidebar_label: "Replace `logging.warn()` with `logging.warning()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `logging.warn()` with `logging.warning()`

**org.openrewrite.python.migrate.ReplaceLoggingWarn**

_Replace `warn()` calls with `warning()`. The warn() method was deprecated in Python 3.3._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.3](/user-documentation/recipes/lists/recipes-by-tag#3.3)
* [logging](/user-documentation/recipes/lists/recipes-by-tag#logging)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceLoggingWarn](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceLoggingWarn),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

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
mod run . --recipe org.openrewrite.python.migrate.ReplaceLoggingWarn
```
