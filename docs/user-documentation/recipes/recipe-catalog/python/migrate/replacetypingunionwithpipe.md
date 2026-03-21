---
sidebar_label: "Replace `typing.Union[X, Y]` with `X | Y`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.Union[X, Y]` with `X | Y`

**org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe**

_PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Union[X, Y, ...]` with the more concise `X | Y | ...` syntax._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [typing](/user-documentation/recipes/lists/recipes-by-tag#typing)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#310)
* [pep604](/user-documentation/recipes/lists/recipes-by-tag#pep604)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython310)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe"
  displayName="Replace `typing.Union[X, Y]` with `X | Y`"
  pipPackage="openrewrite-migrate-python"
/>
