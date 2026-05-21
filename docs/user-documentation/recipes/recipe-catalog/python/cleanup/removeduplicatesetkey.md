---
sidebar_label: "Deduplicate repeated elements in set literals"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Deduplicate repeated elements in set literals

**org.openrewrite.python.cleanup.RemoveDuplicateSetKey**

_Set literals with repeated values have redundant entries that are discarded at runtime. This removes the duplicates, keeping the last one._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveDuplicateSetKey"
  displayName="Deduplicate repeated elements in set literals"
  pipPackage="openrewrite-static-analysis"
/>
