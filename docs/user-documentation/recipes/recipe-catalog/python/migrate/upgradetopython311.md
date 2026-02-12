---
sidebar_label: "Upgrade to Python 3.11"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Python 3.11

**org.openrewrite.python.migrate.UpgradeToPython311**

_Migrate deprecated and removed APIs for Python 3.11 compatibility. This includes handling removed modules, deprecated functions, and API changes between Python 3.10 and 3.11._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.11](/user-documentation/recipes/lists/recipes-by-tag#3.11)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython311](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython311),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to Python 3.10](../../python/migrate/upgradetopython310)
* [Replace `datetime.utcnow()` with `datetime.now(UTC)`](../../python/migrate/replacedatetimeutcnow)
* [Replace `datetime.utcfromtimestamp()` with `datetime.fromtimestamp(ts, UTC)`](../../python/migrate/replacedatetimeutcfromtimestamp)
* [Replace `inspect.getargspec()` with `inspect.getfullargspec()`](../../python/migrate/replaceinspectgetargspec)
* [Replace `configparser.SafeConfigParser` with `ConfigParser`](../../python/migrate/replaceconfigparsersafeconfigparser)
* [Replace `ConfigParser.readfp()` with `read_file()`](../../python/migrate/replaceconfigparserreadfp)
* [Replace deprecated gettext l*gettext() functions](../../python/migrate/replacegettextdeprecations)
* [Replace `logging.warn()` with `logging.warning()`](../../python/migrate/replaceloggingwarn)
* [Replace deprecated unittest method aliases](../../python/migrate/replaceunittestdeprecatedaliases)
* [Migrate `@asyncio.coroutine` to `async def`](../../python/migrate/migrateasynciocoroutine)
* [Find deprecated `@asyncio.coroutine` decorator](../../python/migrate/findasynciocoroutinedecorator)
* [Find `socket.getfqdn()` usage](../../python/migrate/findsocketgetfqdn)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.UpgradeToPython311
displayName: Upgrade to Python 3.11
description: |
  Migrate deprecated and removed APIs for Python 3.11 compatibility. This includes handling removed modules, deprecated functions, and API changes between Python 3.10 and 3.11.
tags:
  - python
  - migration
  - 3.11
recipeList:
  - org.openrewrite.python.migrate.UpgradeToPython310
  - org.openrewrite.python.migrate.ReplaceDatetimeUtcNow
  - org.openrewrite.python.migrate.ReplaceDatetimeUtcFromTimestamp
  - org.openrewrite.python.migrate.ReplaceInspectGetargspec
  - org.openrewrite.python.migrate.ReplaceConfigparserSafeConfigParser
  - org.openrewrite.python.migrate.ReplaceConfigparserReadfp
  - org.openrewrite.python.migrate.ReplaceGettextDeprecations
  - org.openrewrite.python.migrate.ReplaceLoggingWarn
  - org.openrewrite.python.migrate.ReplaceUnittestDeprecatedAliases
  - org.openrewrite.python.migrate.MigrateAsyncioCoroutine
  - org.openrewrite.python.migrate.FindAsyncioCoroutineDecorator
  - org.openrewrite.python.migrate.FindSocketGetFQDN

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython311
```
