---
sidebar_label: "Find `socket.getfqdn()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find `socket.getfqdn()` usage

**org.openrewrite.python.migrate.FindSocketGetFQDN**

_Find usage of `socket.getfqdn()` which can be slow and unreliable. Consider using `socket.gethostname()` instead._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [socket](/user-documentation/recipes/lists/recipes-by-tag#socket)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.FindSocketGetFQDN](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.FindSocketGetFQDN),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

The license for this recipe is unknown.


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
mod run . --recipe org.openrewrite.python.migrate.FindSocketGetFQDN
```
