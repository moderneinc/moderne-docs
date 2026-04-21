---
sidebar_label: "Prefer ``startswith``/``endswith`` over slice comparison"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Prefer ``startswith``/``endswith`` over slice comparison

**org.openrewrite.python.cleanup.StrPrefixSuffix**

_Rewrite ``s[:N] == "lit"`` as ``s.startswith("lit")`` and ``s[-N:] == "lit"`` as ``s.endswith("lit")`` when the slice length equals the literal length._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.StrPrefixSuffix"
  displayName="Prefer ``startswith``/``endswith`` over slice comparison"
  pipPackage="openrewrite-static-analysis"
/>
