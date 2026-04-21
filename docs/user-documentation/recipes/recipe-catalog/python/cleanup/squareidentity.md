---
sidebar_label: "Rewrite self-multiplication as `** 2`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rewrite self-multiplication as `** 2`

**org.openrewrite.python.cleanup.SquareIdentity**

_When an expression is multiplied by itself, rewrite it using the exponentiation operator (`** 2`) for clarity._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SquareIdentity"
  displayName="Rewrite self-multiplication as `** 2`"
  pipPackage="openrewrite-static-analysis"
/>
