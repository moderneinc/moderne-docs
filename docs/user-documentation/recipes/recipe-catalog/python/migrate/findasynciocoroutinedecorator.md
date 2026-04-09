---
sidebar_label: "Find deprecated `@asyncio.coroutine` decorator"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find deprecated `@asyncio.coroutine` decorator

**org.openrewrite.python.migrate.FindAsyncioCoroutineDecorator**

_Find usage of the deprecated `@asyncio.coroutine` decorator which was removed in Python 3.11. Convert to `async def` syntax with `await` instead of `yield from`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.FindAsyncioCoroutineDecorator"
  displayName="Find deprecated `@asyncio.coroutine` decorator"
  pipPackage="openrewrite-migrate-python"
/>
