---
sidebar_label: "Drop ``f`` prefix from strings without placeholders"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop ``f`` prefix from strings without placeholders

**org.openrewrite.python.cleanup.RemoveRedundantFstring**

```
When an f-string has no ``{...}`` expressions, strip the ``f`` prefix and convert it to an ordinary string literal.
```


## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantFstring"
  displayName="Drop ``f`` prefix from strings without placeholders"
  pipPackage="openrewrite-static-analysis"
/>
