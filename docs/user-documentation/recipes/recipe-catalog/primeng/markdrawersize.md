---
sidebar_label: "Mark `&lt;p-drawer&gt;` / `&lt;p-sidebar&gt;` `size` usages with TODO comments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Mark `&lt;p-drawer&gt;` / `&lt;p-sidebar&gt;` `size` usages with TODO comments

**org.openrewrite.primeng.MarkDrawerSize**

_Inserts an HTML `<!-- TODO: ... -->` comment before any `<p-drawer>` or `<p-sidebar>` element that binds the removed `size` input, and records the site in the `ManualMigrationSteps` data table. Both `[size]="..."` and `size="..."` attribute forms are matched. The attribute is left untouched — the v18 replacement (responsive CSS via `[style]` / `styleClass`) depends on the desired layout and needs manual review._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MarkDrawerSize"
  displayName="Mark `&lt;p-drawer&gt;` / `&lt;p-sidebar&gt;` `size` usages with TODO comments"
  npmPackage="@openrewrite/recipes-angular"
/>
