---
sidebar_label: "Collapse nested ``if`` into a single ``and`` condition"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Collapse nested ``if`` into a single ``and`` condition

**org.openrewrite.python.cleanup.MergeNestedIfs**

_When two ``if`` statements are nested with no ``else`` on either, join their conditions with ``and`` and flatten the body._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.MergeNestedIfs"
  displayName="Collapse nested ``if`` into a single ``and`` condition"
  pipPackage="openrewrite-static-analysis"
/>
