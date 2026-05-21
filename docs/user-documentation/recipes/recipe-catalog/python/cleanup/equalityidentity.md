---
sidebar_label: "Fold same-literal `==`/`!=` comparisons to boolean constants"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Fold same-literal `==`/`!=` comparisons to boolean constants

**org.openrewrite.python.cleanup.EqualityIdentity**

_When both sides of `==` or `!=` are the same literal, replace the expression with `True` or `False` respectively._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.EqualityIdentity"
  displayName="Fold same-literal `==`/`!=` comparisons to boolean constants"
  pipPackage="openrewrite-static-analysis"
/>
