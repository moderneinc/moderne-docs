---
sidebar_label: "Eliminate `inplace=True` in favor of reassignment"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Eliminate `inplace=True` in favor of reassignment

**org.openrewrite.python.cleanup.PandasAvoidInplace**

_Convert pandas operations that use `inplace=True` into reassignment form, e.g. `df.drop_duplicates(inplace=True)` becomes `df = df.drop_duplicates()`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.PandasAvoidInplace"
  displayName="Eliminate `inplace=True` in favor of reassignment"
  pipPackage="openrewrite-static-analysis"
/>
