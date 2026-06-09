---
title: "Rename `OverlayPanel` to `Popover`"
sidebar_label: "Rename `OverlayPanel` to `Popover`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `OverlayPanel` to `Popover`

**org.openrewrite.primeng.RenameOverlayPanelToPopover**

_Renames `OverlayPanel` and `OverlayPanelModule` imports from `primeng/overlaypanel` to `Popover` and `PopoverModule` from `primeng/popover`, and updates all identifier usages. The old names are deprecated in PrimeNG 18._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.RenameOverlayPanelToPopover"
  displayName="Rename `OverlayPanel` to `Popover`"
  npmPackage="@openrewrite/recipes-angular"
/>
