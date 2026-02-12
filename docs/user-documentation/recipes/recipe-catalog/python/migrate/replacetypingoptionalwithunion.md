---
sidebar_label: "Replace `typing.Optional[X]` with `X | None`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace `typing.Optional[X]` with `X | None`

**org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion**

_PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Optional[X]` with the more concise `X | None` syntax._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [typing](/user-documentation/recipes/lists/recipes-by-tag#typing)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#3.10)
* [pep604](/user-documentation/recipes/lists/recipes-by-tag#pep604)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion),
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
mod run . --recipe org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion
```
