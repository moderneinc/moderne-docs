---
title: "Rename PrimeNG selectors in HTML templates to their v18 equivalents"
sidebar_label: "Rename PrimeNG selectors in HTML templates to their v18 equivalents"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename PrimeNG selectors in HTML templates to their v18 equivalents

**org.openrewrite.primeng.RenameTemplateSelectors**

_Renames v17 PrimeNG component selectors in `.html` templates to their v18 names: `<p-calendar>` → `<p-datepicker>`, `<p-dropdown>` → `<p-select>`, `<p-inputSwitch>` → `<p-toggleSwitch>`, `<p-overlayPanel>` → `<p-popover>`, `<p-sidebar>` → `<p-drawer>`. Both opening and closing tags are rewritten._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.RenameTemplateSelectors"
  displayName="Rename PrimeNG selectors in HTML templates to their v18 equivalents"
  npmPackage="@openrewrite/recipes-angular"
/>
