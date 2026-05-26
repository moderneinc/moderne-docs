---
sidebar_label: "Migrate `.p-fluid` to `&lt;p-fluid&gt;` wrapper"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `.p-fluid` to `&lt;p-fluid&gt;` wrapper

**org.openrewrite.primeng.MigratePFluidToWrapper**

_Rewrites `<div class="…p-fluid…">…</div>` to `<p-fluid class="…">…</p-fluid>` and adds a `FluidModule` import from `primeng/fluid` to the corresponding component file. PrimeNG 18 removed the `.p-fluid` CSS class; the `<p-fluid>` wrapper component is its replacement._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MigratePFluidToWrapper"
  displayName="Migrate `.p-fluid` to `&lt;p-fluid&gt;` wrapper"
  npmPackage="@openrewrite/recipes-angular"
/>
