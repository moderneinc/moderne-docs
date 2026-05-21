---
sidebar_label: "Replace `ast.NameConstant` with `ast.Constant`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `ast.NameConstant` with `ast.Constant`

**org.openrewrite.python.migrate.ReplaceAstNameConstant**

_The `ast.NameConstant` node type was deprecated in Python 3.8 and removed in Python 3.14. Replace with `ast.Constant` and check `node.value in (True, False, None)`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython314)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.ReplaceAstNameConstant"
  displayName="Replace `ast.NameConstant` with `ast.Constant`"
  pipPackage="openrewrite-migrate-python"
/>
