---
sidebar_label: "Upgrade to Python 3.10"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Python 3.10

**org.openrewrite.python.migrate.UpgradeToPython310**

_Migrate deprecated APIs and adopt new syntax for Python 3.10 compatibility. This includes adopting PEP 604 union type syntax (`X | Y`) and other modernizations between Python 3.9 and 3.10._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.10](/user-documentation/recipes/lists/recipes-by-tag#3.10)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython310](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython310),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to Python 3.9](../../python/migrate/upgradetopython39)
* [Replace `collections` ABC imports with `collections.abc`](../../python/migrate/replacecollectionsabcimports)
* [Replace `typing.Optional[X]` with `X | None`](../../python/migrate/replacetypingoptionalwithunion)
* [Replace `typing.Union[X, Y]` with `X | Y`](../../python/migrate/replacetypingunionwithpipe)
* [Replace `threading.currentThread()` with `threading.current_thread()`](../../python/migrate/replacethreadingcurrentthread)
* [Replace `threading.activeCount()` with `threading.active_count()`](../../python/migrate/replacethreadingactivecount)
* [Replace `Condition.notifyAll()` with `Condition.notify_all()`](../../python/migrate/replaceconditionnotifyall)
* [Replace `Event.isSet()` with `Event.is_set()`](../../python/migrate/replaceeventisset)
* [Replace `Thread.getName()` with `Thread.name`](../../python/migrate/replacethreadgetname)
* [Replace `Thread.setName()` with `Thread.name = ...`](../../python/migrate/replacethreadsetname)
* [Replace `Thread.isDaemon()` with `Thread.daemon`](../../python/migrate/replacethreadisdaemon)
* [Replace `Thread.setDaemon()` with `Thread.daemon = ...`](../../python/migrate/replacethreadsetdaemon)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.UpgradeToPython310
displayName: Upgrade to Python 3.10
description: |
  Migrate deprecated APIs and adopt new syntax for Python 3.10 compatibility. This includes adopting PEP 604 union type syntax (`X | Y`) and other modernizations between Python 3.9 and 3.10.
tags:
  - python
  - migration
  - 3.10
recipeList:
  - org.openrewrite.python.migrate.UpgradeToPython39
  - org.openrewrite.python.migrate.ReplaceCollectionsAbcImports
  - org.openrewrite.python.migrate.ReplaceTypingOptionalWithUnion
  - org.openrewrite.python.migrate.ReplaceTypingUnionWithPipe
  - org.openrewrite.python.migrate.ReplaceThreadingCurrentThread
  - org.openrewrite.python.migrate.ReplaceThreadingActiveCount
  - org.openrewrite.python.migrate.ReplaceConditionNotifyAll
  - org.openrewrite.python.migrate.ReplaceEventIsSet
  - org.openrewrite.python.migrate.ReplaceThreadGetName
  - org.openrewrite.python.migrate.ReplaceThreadSetName
  - org.openrewrite.python.migrate.ReplaceThreadIsDaemon
  - org.openrewrite.python.migrate.ReplaceThreadSetDaemon

```
</TabItem>
</Tabs>

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
mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython310
```
