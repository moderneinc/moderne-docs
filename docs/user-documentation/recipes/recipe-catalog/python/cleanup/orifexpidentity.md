---
sidebar_label: "Replace self-referencing ternary with `or`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace self-referencing ternary with `or`

**org.openrewrite.python.cleanup.OrIfExpIdentity**

_When a ternary's condition and true-branch name the same variable, rewrite ``val if val else fallback`` as ``val or fallback`` to avoid repeating the name._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.OrIfExpIdentity"
  displayName="Replace self-referencing ternary with `or`"
  pipPackage="openrewrite-static-analysis"
/>
