---
sidebar_label: "Replace `typing.Union[X, Y]` with `X | Y`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `typing.Union[X, Y]` with `X | Y`

**org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe**

_PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Union[X, Y, ...]` with the more concise `X | Y | ...` syntax._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [typing](/user-documentation/recipes/lists/recipes-by-tag#typing)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#3.10)
* [pep604](/user-documentation/recipes/lists/recipes-by-tag#pep604)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


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
mod run . --recipe org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe
```
