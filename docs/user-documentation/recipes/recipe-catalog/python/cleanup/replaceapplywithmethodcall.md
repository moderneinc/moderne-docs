---
sidebar_label: "Convert `apply('name')` to a direct method invocation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert `apply('name')` to a direct method invocation

**org.openrewrite.python.cleanup.ReplaceApplyWithMethodCall**

_When `apply()` receives a string literal like `'sum'` or `'mean'`, rewrite the call as a direct method invocation on the object._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.ReplaceApplyWithMethodCall"
  displayName="Convert `apply('name')` to a direct method invocation"
  pipPackage="openrewrite-static-analysis"
/>
