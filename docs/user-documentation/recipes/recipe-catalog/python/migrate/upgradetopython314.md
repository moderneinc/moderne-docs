---
sidebar_label: "Upgrade to Python 3.14"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Python 3.14

**org.openrewrite.python.migrate.UpgradeToPython314**

_Migrate deprecated and removed APIs for Python 3.14 compatibility. This includes replacing deprecated AST node types with `ast.Constant` and other API changes between Python 3.13 and 3.14._

### Tags

* [python](/user-documentation/recipes/lists/recipes-by-tag#python)
* [migration](/user-documentation/recipes/lists/recipes-by-tag#migration)
* [3.14](/user-documentation/recipes/lists/recipes-by-tag#314)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.migrate.UpgradeToPython314"
  displayName="Upgrade to Python 3.14"
  pipPackage="openrewrite-migrate-python"
/>
