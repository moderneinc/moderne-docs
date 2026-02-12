---
sidebar_label: "Replace `cgi.escape()` with `html.escape()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `cgi.escape()` with `html.escape()`

**org.openrewrite.python.migrate.ReplaceCgiEscape**

_Replace `cgi.escape()` with `html.escape()`. cgi.escape() was deprecated in Python 3.2 and removed in Python 3.8._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [3.2](/user-documentation/recipes/lists/recipes-by-tag#3.2)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.8](/user-documentation/recipes/lists/recipes-by-tag#3.8)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceCgiEscape](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceCgiEscape),
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
mod run . --recipe org.openrewrite.python.migrate.ReplaceCgiEscape
```
