---
sidebar_label: "Unwrap one-element exception tuple in `except`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Unwrap one-element exception tuple in `except`

**org.openrewrite.python.cleanup.SimplifySingleExceptionTuple**

_A tuple containing only one exception type is needlessly verbose. This unwraps it to the plain `except ExcType:` form._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.SimplifySingleExceptionTuple"
  displayName="Unwrap one-element exception tuple in `except`"
  pipPackage="openrewrite-static-analysis"
/>
