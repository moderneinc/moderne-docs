---
sidebar_label: "Fold constants and flatten nested f-strings"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Fold constants and flatten nested f-strings

**org.openrewrite.python.cleanup.SimplifyFstringFormatting**

_Inline constant values directly into f-string text and unwrap nested f-strings into their enclosing string._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyFstringFormatting"
  displayName="Fold constants and flatten nested f-strings"
  pipPackage="openrewrite-static-analysis"
/>
