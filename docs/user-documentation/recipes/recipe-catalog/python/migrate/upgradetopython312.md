---
sidebar_label: "Upgrade to Python 3.12"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Python 3.12

**org.openrewrite.python.migrate.UpgradeToPython312**

_Migrate deprecated and removed APIs for Python 3.12 compatibility. This includes detecting usage of the removed `imp` module and other legacy modules that were removed in Python 3.12._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.12](/user-documentation/recipes/lists/recipes-by-tag#3.12)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython312](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython312),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

The license for this recipe is unknown.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to Python 3.11](../../python/migrate/upgradetopython311)
* [Replace deprecated calendar constants with uppercase](../../python/migrate/replacecalendarconstants)
* [Replace `import imp` with `import importlib`](../../python/migrate/replaceimpimport)
* [Replace `imp.reload()` with `importlib.reload()`](../../python/migrate/replaceimpreload)
* [Find deprecated imp module usage](../../python/migrate/findimpusage)
* [Replace deprecated distutils.version usage](../../python/migrate/replacedistutilsversion)
* [Find deprecated distutils module usage](../../python/migrate/finddistutilsusage)
* [Replace `pkgutil.find_loader()` with `importlib.util.find_spec()`](../../python/migrate/replacepkgutilfindloader)
* [Replace `pkgutil.get_loader()` with `importlib.util.find_spec()`](../../python/migrate/replacepkgutilgetloader)
* [Find deprecated `Path.link_to()` usage](../../python/migrate/findpathliblinkto)
* [Find modules removed in Python 3.12](../../python/migrate/findremovedmodules312)
* [Find deprecated `ssl.match_hostname()`](../../python/migrate/findsslmatchhostname)
* [Find deprecated `os.popen()` usage](../../python/migrate/findospopen)
* [Find deprecated `os.spawn*()` usage](../../python/migrate/findosspawn)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.UpgradeToPython312
displayName: Upgrade to Python 3.12
description: |
  Migrate deprecated and removed APIs for Python 3.12 compatibility. This includes detecting usage of the removed `imp` module and other legacy modules that were removed in Python 3.12.
tags:
  - python
  - migration
  - 3.12
recipeList:
  - org.openrewrite.python.migrate.UpgradeToPython311
  - org.openrewrite.python.migrate.ReplaceCalendarConstants
  - org.openrewrite.python.migrate.ReplaceImpImport
  - org.openrewrite.python.migrate.ReplaceImpReload
  - org.openrewrite.python.migrate.FindImpUsage
  - org.openrewrite.python.migrate.ReplaceDistutilsVersion
  - org.openrewrite.python.migrate.FindDistutilsUsage
  - org.openrewrite.python.migrate.ReplacePkgutilFindLoader
  - org.openrewrite.python.migrate.ReplacePkgutilGetLoader
  - org.openrewrite.python.migrate.FindPathlibLinkTo
  - org.openrewrite.python.migrate.FindRemovedModules312
  - org.openrewrite.python.migrate.FindSslMatchHostname
  - org.openrewrite.python.migrate.FindOsPopen
  - org.openrewrite.python.migrate.FindOsSpawn

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython313)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython312
```
