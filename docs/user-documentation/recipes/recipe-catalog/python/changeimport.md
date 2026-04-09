---
sidebar_label: "Change import"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change import

**org.openrewrite.python.ChangeImport**

_Change a Python import from one module/name to another, updating all type attributions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | old_module | The module to change imports from | `collections` |
| `null` | old_name | *Optional*. The name to change (for 'from X import name' style). Leave empty for direct imports. | `Mapping` |
| `null` | new_module | The module to change imports to | `collections.abc` |
| `null` | new_name | *Optional*. The new name. If not specified, uses the old name. | `Mapping` |
| `null` | new_alias | *Optional*. Optional alias for the new import |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Python 3.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython311)
* [Upgrade to Python 3.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython312)
* [Upgrade to Python 3.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython38)
* [Upgrade to Python 3.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/python/migrate/upgradetopython39)


## Usage

<RunRecipe
  recipeName="org.openrewrite.python.ChangeImport"
  displayName="Change import"
  pipPackage="openrewrite"
/>
