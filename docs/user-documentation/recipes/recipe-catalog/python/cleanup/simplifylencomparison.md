---
sidebar_label: "Replace `len()` emptiness check with truthiness"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `len()` emptiness check with truthiness

**org.openrewrite.python.cleanup.SimplifyLenComparison**

```
Rewrite ``len(seq) > 0`` / ``len(seq) != 0`` to ``seq`` and ``len(seq) == 0`` to ``not seq``, leveraging Python's built-in truthiness for collections.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifyLenComparison"
  displayName="Replace `len()` emptiness check with truthiness"
  pipPackage="openrewrite-static-analysis"
/>
