---
sidebar_label: "Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`

**org.openrewrite.python.migrate.ReplaceCgiParseQsl**

_`cgi.parse_qsl()` was removed in Python 3.8. Use `urllib.parse.parse_qsl()` instead. Note: this rewrites call sites but does not manage imports. Use with `ChangeImport` in a composite recipe to update `from` imports._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [cgi](/user-documentation/recipes/lists/recipes-by-tag#cgi)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.8](/user-documentation/recipes/lists/recipes-by-tag#38)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceCgiParseQsl"
  displayName="Replace `cgi.parse_qsl()` with `urllib.parse.parse_qsl()`"
  pipPackage="openrewrite-migrate-python"
/>
