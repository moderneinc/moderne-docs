---
sidebar_label: "Replace `HTMLParser.unescape()` with `html.unescape()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `HTMLParser.unescape()` with `html.unescape()`

**org.openrewrite.python.migrate.ReplaceHtmlParserUnescape**

_`HTMLParser.unescape()` was removed in Python 3.9. Use `html.unescape()` instead._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [html](/user-documentation/recipes/lists/recipes-by-tag#html)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#39)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceHtmlParserUnescape"
  displayName="Replace `HTMLParser.unescape()` with `html.unescape()`"
  pipPackage="openrewrite-migrate-python"
/>
