---
sidebar_label: "Upgrade to PrimeNG 18"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to PrimeNG 18

**org.openrewrite.primeng.UpgradeTo18**

_Migrates PrimeNG 17.x applications to PrimeNG 18. Renames components, migrates `PrimeNGConfig` to `PrimeNG` (with signal-backed setters), comments out the obsolete `primeng/resources` style entries in `angular.json`, wires `providePrimeNG({ theme: { preset: Aura } })` into the root NgModule and adds `@primeng/themes` to `package.json`. Anything that can't be deterministically migrated (removed-and-no-direct-replacement components, deprecated CSS classes, structural template changes) gets a TODO comment in source plus a row in the `ManualMigrationSteps` data table for an agent or human to finish._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.UpgradeTo18"
  displayName="Upgrade to PrimeNG 18"
  npmPackage="@openrewrite/recipes-angular"
/>
