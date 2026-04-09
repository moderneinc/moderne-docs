---
sidebar_label: "Replace `initialNavigation` option values"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `initialNavigation` option values

**org.openrewrite.angular.migration.replace-initial-navigation**

_Replaces deprecated `initialNavigation` router option values: `'legacy_enabled'` and `true` become `'enabledBlocking'`, `'legacy_disabled'` and `false` become `'disabled'`, and `'enabled'` becomes `'enabledNonBlocking'`. The legacy values were removed in Angular 11; `'enabled'` was renamed in Angular 14._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-initial-navigation"
  displayName="Replace `initialNavigation` option values"
  npmPackage="@openrewrite/recipes-angular"
/>
