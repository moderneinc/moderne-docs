---
sidebar_label: "Rename `InputSwitch` to `ToggleSwitch`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `InputSwitch` to `ToggleSwitch`

**org.openrewrite.primeng.RenameInputSwitchToToggleSwitch**

_Renames `InputSwitch` and `InputSwitchModule` imports from `primeng/inputswitch` to `ToggleSwitch` and `ToggleSwitchModule` from `primeng/toggleswitch`, and updates all identifier usages. The old names are deprecated in PrimeNG 18._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.RenameInputSwitchToToggleSwitch"
  displayName="Rename `InputSwitch` to `ToggleSwitch`"
  npmPackage="@openrewrite/recipes-angular"
/>
