---
sidebar_label: "Standardize `@classmethod` first parameter to `cls`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Standardize `@classmethod` first parameter to `cls`

**org.openrewrite.python.cleanup.ClassMethodFirstArgName**

_Ensure that `@classmethod` methods use `cls` as their first parameter, as required by PEP 8, and update all body references._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [cleanup](/user-documentation/recipes/lists/recipes-by-tag#cleanup)
* [naming](/user-documentation/recipes/lists/recipes-by-tag#naming)
* [pep8](/user-documentation/recipes/lists/recipes-by-tag#pep8)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.ClassMethodFirstArgName"
  displayName="Standardize `@classmethod` first parameter to `cls`"
  pipPackage="openrewrite-static-analysis"
/>
