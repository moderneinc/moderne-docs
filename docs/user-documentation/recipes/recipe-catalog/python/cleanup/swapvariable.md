---
sidebar_label: "Simplify temp-variable swap to tuple unpacking"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify temp-variable swap to tuple unpacking

**org.openrewrite.python.cleanup.SwapVariable**

_Detect the three-line swap idiom (`tmp = x; x = y; y = tmp`) and condense it into `x, y = y, x` using tuple unpacking._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SwapVariable"
  displayName="Simplify temp-variable swap to tuple unpacking"
  pipPackage="openrewrite-static-analysis"
/>
