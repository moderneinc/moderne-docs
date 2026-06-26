---
title: "Migrate `PrimeNG` config field assignments to `.set()`"
sidebar_label: "Migrate `PrimeNG` config field assignments to `.set()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `PrimeNG` config field assignments to `.set()`

**org.openrewrite.primeng.MigratePrimeNGSignalAssignments**

_In PrimeNG 18, fields on the `PrimeNG` config service like `ripple`, `inputStyle`, `inputVariant`, and `csp` are `WritableSignal<T>` rather than plain fields. Direct assignment (`service.ripple = true`) no longer compiles. This recipe rewrites such assignments to use the signal's `set()` method (`service.ripple.set(true)`) when the file imports `PrimeNG` from `primeng/config`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to PrimeNG 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradeto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MigratePrimeNGSignalAssignments"
  displayName="Migrate `PrimeNG` config field assignments to `.set()`"
  npmPackage="@openrewrite/recipes-angular"
/>
