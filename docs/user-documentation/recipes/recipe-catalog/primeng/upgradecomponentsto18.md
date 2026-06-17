---
title: "Upgrade PrimeNG components to 18"
sidebar_label: "Upgrade PrimeNG components to 18"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade PrimeNG components to 18

**org.openrewrite.primeng.UpgradeComponentsTo18**

_Handles component renames, deprecations, and removals for PrimeNG 18. Renames Calendar to DatePicker, Dropdown to Select, InputSwitch to ToggleSwitch, OverlayPanel to Popover, and Sidebar to Drawer (TS imports + identifier usages + HTML selectors). Migrates the `Messages` template usage to the `<p-message>` + `@for` loop. Marks removed modules (Chips, TriStateCheckbox, Messages, DataViewLayoutOptions, pAnimate) with TODO stubs, marks deprecated components (TabMenu, Steps, InlineMessage, TabView, pDefer) with TODO comments on their imports, and marks deprecated CSS classes (`.p-link`, `.p-highlight`, `.p-fluid`) and `<p-drawer>`/`<p-sidebar>` `size` usages with HTML TODO comments. All marked sites are written to the `ManualMigrationSteps` data table._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to PrimeNG 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradeto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.UpgradeComponentsTo18"
  displayName="Upgrade PrimeNG components to 18"
  npmPackage="@openrewrite/recipes-angular"
/>
