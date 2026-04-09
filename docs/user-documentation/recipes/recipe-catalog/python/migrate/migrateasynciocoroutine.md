---
sidebar_label: "Migrate `@asyncio.coroutine` to `async def`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `@asyncio.coroutine` to `async def`

**org.openrewrite.python.migrate.MigrateAsyncioCoroutine**

_Migrate functions using the deprecated `@asyncio.coroutine` decorator to use `async def` syntax. Also transforms `yield from` to `await`. The decorator was removed in Python 3.11._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.MigrateAsyncioCoroutine"
  displayName="Migrate `@asyncio.coroutine` to `async def`"
  pipPackage="openrewrite-migrate-python"
/>
