---
sidebar_label: "Replace `try/except: pass` with `contextlib.suppress()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `try/except: pass` with `contextlib.suppress()`

**org.openrewrite.python.cleanup.UseContextlibSuppress**

_When an except handler only contains `pass`, the intent is to suppress the error. `contextlib.suppress()` states this explicitly and eliminates the try/except boilerplate._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.UseContextlibSuppress"
  displayName="Replace `try/except: pass` with `contextlib.suppress()`"
  pipPackage="openrewrite-static-analysis"
/>
