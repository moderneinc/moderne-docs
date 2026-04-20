---
sidebar_label: "Strip ``str()`` from f-string placeholders"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Strip ``str()`` from f-string placeholders

**org.openrewrite.python.cleanup.RemoveStrFromFstring**

```
F-string placeholders convert values to strings automatically, so wrapping expressions in ``str()`` inside ``{...}`` is redundant.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveStrFromFstring"
  displayName="Strip ``str()`` from f-string placeholders"
  pipPackage="openrewrite-static-analysis"
/>
