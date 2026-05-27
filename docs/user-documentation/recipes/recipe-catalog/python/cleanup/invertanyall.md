---
sidebar_label: "Swap `not all()`/`not any()` by negating the comparison"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Swap `not all()`/`not any()` by negating the comparison

**org.openrewrite.python.cleanup.InvertAnyAll**

_Apply De Morgan's law to replace `not all(cond ...)` with `any(negated_cond ...)` or `not any(cond ...)` with `all(negated_cond ...)`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.InvertAnyAll"
  displayName="Swap `not all()`/`not any()` by negating the comparison"
  pipPackage="openrewrite-static-analysis"
/>
