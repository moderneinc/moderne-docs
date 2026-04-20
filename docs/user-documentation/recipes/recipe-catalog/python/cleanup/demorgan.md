---
sidebar_label: "Flatten negated logic via De Morgan's identities"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Flatten negated logic via De Morgan's identities

**org.openrewrite.python.cleanup.DeMorgan**

_Use De Morgan's identities to remove double negation and to distribute ``not`` into compound conditions, e.g. ``not not finished`` becomes ``finished`` and ``not (m and n)`` becomes ``not m or not n``._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.DeMorgan"
  displayName="Flatten negated logic via De Morgan's identities"
  pipPackage="openrewrite-static-analysis"
/>
