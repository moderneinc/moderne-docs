---
sidebar_label: "Upgrade to Python 3.13"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Python 3.13

**org.openrewrite.python.migrate.UpgradeToPython313**

_Migrate deprecated and removed APIs for Python 3.13 compatibility. This includes detecting usage of modules removed in PEP 594 ('dead batteries') and other API changes between Python 3.12 and 3.13._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.13](/user-documentation/recipes/lists/recipes-by-tag#3.13)

## Recipe source

[GitHub: search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython313](https://github.com/search?type=code&q=repo:+org.openrewrite.python.migrate.UpgradeToPython313),
[Issue Tracker](),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-python/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

The license for this recipe is unknown.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to Python 3.12](../../python/migrate/upgradetopython312)
* [Replace `cgi.escape()` with `html.escape()`](../../python/migrate/replacecgiescape)
* [Replace `locale.resetlocale()` with `locale.setlocale(LC_ALL, '')`](../../python/migrate/replacelocaleresetlocale)
* [Find deprecated `aifc` module usage](../../python/migrate/findaifcmodule)
* [Find deprecated `audioop` module usage](../../python/migrate/findaudioopmodule)
* [Find deprecated `cgi` module usage](../../python/migrate/findcgimodule)
* [Find deprecated `cgitb` module usage](../../python/migrate/findcgitbmodule)
* [Find deprecated `chunk` module usage](../../python/migrate/findchunkmodule)
* [Find deprecated `crypt` module usage](../../python/migrate/findcryptmodule)
* [Find deprecated `imghdr` module usage](../../python/migrate/findimghdrmodule)
* [Find deprecated `mailcap` module usage](../../python/migrate/findmailcapmodule)
* [Find deprecated `msilib` module usage](../../python/migrate/findmsilibmodule)
* [Find deprecated `nis` module usage](../../python/migrate/findnismodule)
* [Find deprecated `nntplib` module usage](../../python/migrate/findnntplibmodule)
* [Find deprecated `ossaudiodev` module usage](../../python/migrate/findossaudiodevmodule)
* [Find deprecated `pipes` module usage](../../python/migrate/findpipesmodule)
* [Find deprecated `sndhdr` module usage](../../python/migrate/findsndhdrmodule)
* [Find deprecated `spwd` module usage](../../python/migrate/findspwdmodule)
* [Find deprecated `sunau` module usage](../../python/migrate/findsunaumodule)
* [Find deprecated `telnetlib` module usage](../../python/migrate/findtelnetlibmodule)
* [Find deprecated `uu` module usage](../../python/migrate/finduumodule)
* [Find deprecated `xdrlib` module usage](../../python/migrate/findxdrlibmodule)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.python.migrate.UpgradeToPython313
displayName: Upgrade to Python 3.13
description: |
  Migrate deprecated and removed APIs for Python 3.13 compatibility. This includes detecting usage of modules removed in PEP 594 ('dead batteries') and other API changes between Python 3.12 and 3.13.
tags:
  - python
  - migration
  - 3.13
recipeList:
  - org.openrewrite.python.migrate.UpgradeToPython312
  - org.openrewrite.python.migrate.ReplaceCgiEscape
  - org.openrewrite.python.migrate.ReplaceLocaleResetlocale
  - org.openrewrite.python.migrate.FindAifcModule
  - org.openrewrite.python.migrate.FindAudioopModule
  - org.openrewrite.python.migrate.FindCgiModule
  - org.openrewrite.python.migrate.FindCgitbModule
  - org.openrewrite.python.migrate.FindChunkModule
  - org.openrewrite.python.migrate.FindCryptModule
  - org.openrewrite.python.migrate.FindImghdrModule
  - org.openrewrite.python.migrate.FindMailcapModule
  - org.openrewrite.python.migrate.FindMsilibModule
  - org.openrewrite.python.migrate.FindNisModule
  - org.openrewrite.python.migrate.FindNntplibModule
  - org.openrewrite.python.migrate.FindOssaudiodevModule
  - org.openrewrite.python.migrate.FindPipesModule
  - org.openrewrite.python.migrate.FindSndhdrModule
  - org.openrewrite.python.migrate.FindSpwdModule
  - org.openrewrite.python.migrate.FindSunauModule
  - org.openrewrite.python.migrate.FindTelnetlibModule
  - org.openrewrite.python.migrate.FindUuModule
  - org.openrewrite.python.migrate.FindXdrlibModule

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

In order to run Python recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).

Once the CLI is installed, you can install this Python recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes pip install openrewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.python.migrate.UpgradeToPython313
```
