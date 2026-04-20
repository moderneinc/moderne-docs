---
sidebar_label: "Apply De Morgan's law to `any(not ...)`/`all(not ...)`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Apply De Morgan's law to `any(not ...)`/`all(not ...)`

**org.openrewrite.python.cleanup.InvertAnyAllBody**

_When the generator body just negates the loop variable, De Morgan's law lets us eliminate the generator entirely: `any(not v for v in seq)` becomes `not all(seq)`, and the reverse._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.InvertAnyAllBody"
  displayName="Apply De Morgan's law to `any(not ...)`/`all(not ...)`"
  pipPackage="openrewrite-static-analysis"
/>
