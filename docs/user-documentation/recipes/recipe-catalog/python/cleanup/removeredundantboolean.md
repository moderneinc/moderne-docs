---
sidebar_label: "Eliminate boolean literal from `and`/`or`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Eliminate boolean literal from `and`/`or`

**org.openrewrite.python.cleanup.RemoveRedundantBoolean**

_Strip ``True`` or ``False`` from ``and``/``or`` expressions where the literal has no effect on the result, e.g. ``True and val`` reduces to ``val`` and ``False and val`` reduces to ``False``._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantBoolean"
  displayName="Eliminate boolean literal from `and`/`or`"
  pipPackage="openrewrite-static-analysis"
/>
