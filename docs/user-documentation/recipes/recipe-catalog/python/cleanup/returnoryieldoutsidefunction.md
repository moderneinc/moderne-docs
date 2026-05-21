---
sidebar_label: "Remove `return`/`yield` outside function"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `return`/`yield` outside function

**org.openrewrite.python.cleanup.ReturnOrYieldOutsideFunction**

_Remove `return` and `yield` statements that are not inside any function or method definition._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.ReturnOrYieldOutsideFunction"
  displayName="Remove `return`/`yield` outside function"
  pipPackage="openrewrite-static-analysis"
/>
