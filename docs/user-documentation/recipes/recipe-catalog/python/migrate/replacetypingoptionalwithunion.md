---
sidebar_label: "Replace `typing.Optional[X]` with `X | None`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.Optional[X]` with `X | None`

**org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion**

_PEP 604 introduced the `|` operator for union types in Python 3.10. Replace `Optional[X]` with the more concise `X | None` syntax._

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
  recipeName="org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion"
  displayName="Replace `typing.Optional[X]` with `X | None`"
  pipPackage="openrewrite-migrate-python"
/>
