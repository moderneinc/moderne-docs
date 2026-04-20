---
sidebar_label: "Delete no-op `assert True` statements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Delete no-op `assert True` statements

**org.openrewrite.python.cleanup.RemoveAssertTrue**

_Delete bare `assert True` statements, which are always satisfied and have no effect. Assertions that carry a message string are preserved._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveAssertTrue"
  displayName="Delete no-op `assert True` statements"
  pipPackage="openrewrite-static-analysis"
/>
