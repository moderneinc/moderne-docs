---
sidebar_label: "Migrate `PrimeNGConfig` to `PrimeNG`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `PrimeNGConfig` to `PrimeNG`

**org.openrewrite.primeng.MigratePrimeNgConfigToPrimeNG**

_Renames the `PrimeNGConfig` import from `primeng/api` to `PrimeNG` from `primeng/config`, renames all identifier usages, and flags injection sites that should be migrated to `providePrimeNG()` in application providers._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to PrimeNG 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradeto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MigratePrimeNgConfigToPrimeNG"
  displayName="Migrate `PrimeNGConfig` to `PrimeNG`"
  npmPackage="@openrewrite/recipes-angular"
/>
