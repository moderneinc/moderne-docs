---
sidebar_label: "Replace `fractions.gcd()` with `math.gcd()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `fractions.gcd()` with `math.gcd()`

**org.openrewrite.python.migrate.ReplaceFractionsGcd**

_Replace `fractions.gcd()` with `math.gcd()`. fractions.gcd() was deprecated in Python 3.5 and removed in 3.9._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [fractions](/user-documentation/recipes/lists/recipes-by-tag#fractions)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#3.9)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.ReplaceFractionsGcd
```
