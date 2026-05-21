---
sidebar_label: "Replace `typing.Callable` with `collections.abc.Callable`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `typing.Callable` with `collections.abc.Callable`

**org.openrewrite.python.migrate.ReplaceTypingCallableWithCollectionsAbcCallable**

_PEP 585 deprecated `typing.Callable` in Python 3.9. Replace with `collections.abc.Callable` for type annotations._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceTypingCallableWithCollectionsAbcCallable"
  displayName="Replace `typing.Callable` with `collections.abc.Callable`"
  pipPackage="openrewrite-migrate-python"
/>
