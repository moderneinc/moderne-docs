---
sidebar_label: "Drop ``else`` after early-exit ``if`` branch"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Drop ``else`` after early-exit ``if`` branch

**org.openrewrite.python.cleanup.RemoveUnnecessaryElse**

_When the ``if`` body always exits via return, raise, continue, or break, remove the ``else`` and dedent its contents._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Python cleanup suite](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/cleanup/pythonbestpractices)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.cleanup.RemoveUnnecessaryElse"
  displayName="Drop ``else`` after early-exit ``if`` branch"
  pipPackage="openrewrite-static-analysis"
/>
