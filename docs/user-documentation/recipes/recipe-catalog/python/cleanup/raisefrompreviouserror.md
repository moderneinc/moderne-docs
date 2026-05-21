---
sidebar_label: "Chain exceptions with `raise ... from` in except blocks"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Chain exceptions with `raise ... from` in except blocks

**org.openrewrite.python.cleanup.RaiseFromPreviousError**

_Raise statements inside except blocks should use `from` to chain the new exception to the caught one, preserving the full traceback._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RaiseFromPreviousError"
  displayName="Chain exceptions with `raise ... from` in except blocks"
  pipPackage="openrewrite-static-analysis"
/>
