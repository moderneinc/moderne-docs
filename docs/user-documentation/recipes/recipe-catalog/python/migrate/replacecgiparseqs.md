---
sidebar_label: "Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`

**org.openrewrite.python.migrate.ReplaceCgiParseQs**

_`cgi.parse_qs()` was removed in Python 3.8. Use `urllib.parse.parse_qs()` instead. Note: this rewrites call sites but does not manage imports. Use with `ChangeImport` in a composite recipe to update `from` imports._

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
  recipeName="org.openrewrite.python.migrate.ReplaceCgiParseQs"
  displayName="Replace `cgi.parse_qs()` with `urllib.parse.parse_qs()`"
  pipPackage="openrewrite-migrate-python"
/>
