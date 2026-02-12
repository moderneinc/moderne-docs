---
sidebar_label: "Upgrade to Python 3.8"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Python 3.8

**org.openrewrite.python.migrate.UpgradeToPython38**

_Migrate deprecated APIs and detect legacy patterns for Python 3.8 compatibility._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.8](/user-documentation/recipes/lists/recipes-by-tag#3.8)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython38](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython38),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

The license for this recipe is unknown.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Detect `%` string formatting](../../python/migrate/detectpercentformatting)
* [Replace `str.format()` with f-string](../../python/migrate/replacestrformatwithfstring)
* [Detect `str.format()` string formatting](../../python/migrate/detectstrformat)
* [Find `functools.cmp_to_key()` usage](../../python/migrate/findfunctoolscmptokey)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.UpgradeToPython38
displayName: Upgrade to Python 3.8
description: |
  Migrate deprecated APIs and detect legacy patterns for Python 3.8 compatibility.
tags:
  - python
  - migration
  - 3.8
recipeList:
  - org.openrewrite.python.migrate.DetectPercentFormatting
  - org.openrewrite.python.migrate.ReplaceStrFormatWithFString
  - org.openrewrite.python.migrate.DetectStrFormat
  - org.openrewrite.python.migrate.FindFunctoolsCmpToKey

```
</TabItem>
</Tabs>

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
mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython38
```
