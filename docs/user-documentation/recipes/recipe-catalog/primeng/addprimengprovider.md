---
sidebar_label: "Add `providePrimeNG` with a detected theme preset to the root NgModule"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `providePrimeNG` with a detected theme preset to the root NgModule

**org.openrewrite.primeng.AddPrimengProvider**

_Wires the v18 styled mode into an NgModule-based app by adding `providePrimeNG({ theme: { preset: <Preset> } })` to the root `@NgModule`'s providers array (detected by the presence of a `bootstrap:` field). The preset is chosen by scanning `angular.json` for a `primeng/resources/themes/<themeName>/theme.css` entry: `lara-*` maps to Lara, `md-*`/`mdc-*` to Material, `nora`/`nano` to Nora, and any other v17 theme (mira, nova, saga, vela, soho, fluent, viva, rhea, tailwind, bootstrap4, arya, luna, ...) falls back to Aura. The matching imports for `providePrimeNG` and the chosen preset are added automatically. Also deletes the now-defunct `primeng/resources` style entries from `angular.json` so the build doesn't try to load missing files. Idempotent: skips files that already call `providePrimeNG`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to PrimeNG 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradeto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.AddPrimengProvider"
  displayName="Add `providePrimeNG` with a detected theme preset to the root NgModule"
  npmPackage="@openrewrite/recipes-angular"
/>
