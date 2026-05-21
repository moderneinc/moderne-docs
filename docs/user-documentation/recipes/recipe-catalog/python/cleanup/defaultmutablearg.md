---
sidebar_label: "Guard mutable default arguments with `None` sentinel"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Guard mutable default arguments with `None` sentinel

**org.openrewrite.python.cleanup.DefaultMutableArg**

_Change mutable default values (`[]`, `{}`, `set()`) to `None` and prepend an `if arg is None: arg = <original>` guard so each call gets its own fresh instance._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.DefaultMutableArg"
  displayName="Guard mutable default arguments with `None` sentinel"
  pipPackage="openrewrite-static-analysis"
/>
