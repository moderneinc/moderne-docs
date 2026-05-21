---
sidebar_label: "Rename `Sidebar` to `Drawer`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `Sidebar` to `Drawer`

**org.openrewrite.primeng.RenameSidebarToDrawer**

_Renames `Sidebar` and `SidebarModule` imports from `primeng/sidebar` to `Drawer` and `DrawerModule` from `primeng/drawer`, and updates all identifier usages. The old names are deprecated in PrimeNG 18._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.RenameSidebarToDrawer"
  displayName="Rename `Sidebar` to `Drawer`"
  npmPackage="@openrewrite/recipes-angular"
/>
