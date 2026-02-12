---
sidebar_label: "Find `functools.cmp_to_key()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find `functools.cmp_to_key()` usage

**org.openrewrite.python.migrate.FindFunctoolsCmpToKey**

_Find usage of `functools.cmp_to_key()` which is a Python 2 compatibility function. Consider using a key function directly._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [functools](/user-documentation/recipes/lists/recipes-by-tag#functools)
* [code-quality](/user-documentation/recipes/lists/recipes-by-tag#code)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.FindFunctoolsCmpToKey](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.FindFunctoolsCmpToKey),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.FindFunctoolsCmpToKey
```
