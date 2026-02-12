---
sidebar_label: "Upgrade to Python 3.14"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Python 3.14

**org.openrewrite.python.migrate.UpgradeToPython314**

_Migrate deprecated and removed APIs for Python 3.14 compatibility. This includes replacing deprecated AST node types with `ast.Constant` and other API changes between Python 3.13 and 3.14._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.14](/user-documentation/recipes/lists/recipes-by-tag#3.14)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython314](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython314),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

The license for this recipe is unknown.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to Python 3.13](../../python/migrate/upgradetopython313)
* [Replace `array.tostring()` with `array.tobytes()`](../../python/migrate/replacearraytostring)
* [Replace `array.fromstring()` with `array.frombytes()`](../../python/migrate/replacearrayfromstring)
* [Replace `ast.Num` with `ast.Constant`](../../python/migrate/replaceastnum)
* [Replace `ast.Str` with `ast.Constant`](../../python/migrate/replaceaststr)
* [Replace `ast.Bytes` with `ast.Constant`](../../python/migrate/replaceastbytes)
* [Replace `ast.NameConstant` with `ast.Constant`](../../python/migrate/replaceastnameconstant)
* [Replace `ast.Ellipsis` with `ast.Constant`](../../python/migrate/replaceastellipsis)
* [Find deprecated `tempfile.mktemp()` usage](../../python/migrate/findtempfilemktemp)
* [Find deprecated urllib.parse split functions](../../python/migrate/findurllibparsesplitfunctions)
* [Find deprecated `urllib.parse.to_bytes()` usage](../../python/migrate/findurllibparsetobytes)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.UpgradeToPython314
displayName: Upgrade to Python 3.14
description: |
  Migrate deprecated and removed APIs for Python 3.14 compatibility. This includes replacing deprecated AST node types with `ast.Constant` and other API changes between Python 3.13 and 3.14.
tags:
  - python
  - migration
  - 3.14
recipeList:
  - org.openrewrite.python.migrate.UpgradeToPython313
  - org.openrewrite.python.migrate.ReplaceArrayTostring
  - org.openrewrite.python.migrate.ReplaceArrayFromstring
  - org.openrewrite.python.migrate.ReplaceAstNum
  - org.openrewrite.python.migrate.ReplaceAstStr
  - org.openrewrite.python.migrate.ReplaceAstBytes
  - org.openrewrite.python.migrate.ReplaceAstNameConstant
  - org.openrewrite.python.migrate.ReplaceAstEllipsis
  - org.openrewrite.python.migrate.FindTempfileMktemp
  - org.openrewrite.python.migrate.FindUrllibParseSplitFunctions
  - org.openrewrite.python.migrate.FindUrllibParseToBytes

```
</TabItem>
</Tabs>

## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython314
```
