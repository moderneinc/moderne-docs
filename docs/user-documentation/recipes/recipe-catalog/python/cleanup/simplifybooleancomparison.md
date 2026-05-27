---
sidebar_label: "Remove explicit True/False comparisons"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove explicit True/False comparisons

**org.openrewrite.python.cleanup.SimplifyBooleanComparison**

_Drop unnecessary ``== True``, ``!= False``, and similar tests against boolean literals, leaving just the expression or ``not expr``._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyBooleanComparison"
  displayName="Remove explicit True/False comparisons"
  pipPackage="openrewrite-static-analysis"
/>
