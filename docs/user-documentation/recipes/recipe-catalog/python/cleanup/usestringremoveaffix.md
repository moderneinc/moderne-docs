---
sidebar_label: "Replace string slicing with `removeprefix`/`removesuffix`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace string slicing with `removeprefix`/`removesuffix`

**org.openrewrite.python.cleanup.UseStringRemoveAffix**

_Replace `if text.startswith(s): text = text[N:]` with `text = text.removeprefix(s)` and the equivalent `endswith` pattern with `removesuffix` (Python 3.9+)._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UseStringRemoveAffix"
  displayName="Replace string slicing with `removeprefix`/`removesuffix`"
  pipPackage="openrewrite-static-analysis"
/>
