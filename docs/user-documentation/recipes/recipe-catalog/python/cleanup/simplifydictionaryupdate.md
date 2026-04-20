---
sidebar_label: "Convert one-item `dict.update()` to bracket assignment"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert one-item `dict.update()` to bracket assignment

**org.openrewrite.python.cleanup.SimplifyDictionaryUpdate**

_When `.update()` receives a dictionary literal containing exactly one key, rewrite it as a direct key assignment for clarity and efficiency._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyDictionaryUpdate"
  displayName="Convert one-item `dict.update()` to bracket assignment"
  pipPackage="openrewrite-static-analysis"
/>
