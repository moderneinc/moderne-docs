---
sidebar_label: "Drop ``exists()`` check before ``is_dir()``/``is_file()``"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop ``exists()`` check before ``is_dir()``/``is_file()``

**org.openrewrite.python.cleanup.RemoveRedundantPathExists**

_Drop ``path.exists()`` when it is ``and``-ed with ``is_dir()`` or ``is_file()``, which inherently return ``False`` for missing paths._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveRedundantPathExists"
  displayName="Drop ``exists()`` check before ``is_dir()``/``is_file()``"
  pipPackage="openrewrite-static-analysis"
/>
