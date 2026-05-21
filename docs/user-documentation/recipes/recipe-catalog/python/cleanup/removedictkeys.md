---
sidebar_label: "Drop redundant `.keys()` on dict iteration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop redundant `.keys()` on dict iteration

**org.openrewrite.python.cleanup.RemoveDictKeys**

_Dictionaries iterate over their keys by default, making explicit `.keys()` calls unnecessary in for-loops and `in` expressions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveDictKeys"
  displayName="Drop redundant `.keys()` on dict iteration"
  pipPackage="openrewrite-static-analysis"
/>
