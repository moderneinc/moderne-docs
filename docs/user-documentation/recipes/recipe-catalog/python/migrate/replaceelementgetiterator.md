---
sidebar_label: "Replace `Element.getiterator()` with `Element.iter()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `Element.getiterator()` with `Element.iter()`

**org.openrewrite.python.migrate.ReplaceElementGetiterator**

_Replace `getiterator()` with `iter()` on XML Element objects. The getiterator() method was deprecated in Python 3.9._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [xml](/user-documentation/recipes/lists/recipes-by-tag#xml)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.9](/user-documentation/recipes/lists/recipes-by-tag#39)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceElementGetiterator"
  displayName="Replace `Element.getiterator()` with `Element.iter()`"
  pipPackage="openrewrite-migrate-python"
/>
