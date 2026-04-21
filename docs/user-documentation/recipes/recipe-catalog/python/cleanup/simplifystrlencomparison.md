---
sidebar_label: "Compare string to `&quot;&quot;` instead of checking `len()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Compare string to `&quot;&quot;` instead of checking `len()`

**org.openrewrite.python.cleanup.SimplifyStrLenComparison**

```
Replace ``len(text) == 0`` with ``text == ""`` and ``len(text) > 0`` / ``len(text) != 0`` with ``text != ""``, comparing the string directly rather than measuring its length.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyStrLenComparison"
  displayName="Compare string to `&quot;&quot;` instead of checking `len()`"
  pipPackage="openrewrite-static-analysis"
/>
