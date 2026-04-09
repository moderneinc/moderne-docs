---
sidebar_label: "Replace `Element.getchildren()` with `list(element)`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `Element.getchildren()` with `list(element)`

**org.openrewrite.python.migrate.ReplaceElementGetchildren**

_Replace `getchildren()` with `list(element)` on XML Element objects. Deprecated in Python 3.9._

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
  recipeName="org.openrewrite.python.migrate.ReplaceElementGetchildren"
  displayName="Replace `Element.getchildren()` with `list(element)`"
  pipPackage="openrewrite-migrate-python"
/>
