---
sidebar_label: "Deduplicate repeated keys in dict literals"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Deduplicate repeated keys in dict literals

**org.openrewrite.python.cleanup.RemoveDuplicateDictKey**

_When a dict literal contains the same key more than once, only the final value survives at runtime. This removes the shadowed entries._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveDuplicateDictKey"
  displayName="Deduplicate repeated keys in dict literals"
  pipPackage="openrewrite-static-analysis"
/>
