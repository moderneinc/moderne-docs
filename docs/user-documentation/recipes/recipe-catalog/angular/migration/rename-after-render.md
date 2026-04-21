---
sidebar_label: "Rename `afterRender` to `afterEveryRender`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `afterRender` to `afterEveryRender`

**org.openrewrite.angular.migration.rename-after-render**

_Renames `afterRender` to `afterEveryRender` in imports and usages. The `afterRender` function was renamed to `afterEveryRender` in Angular 20, and Angular provides no migration schematic for this change._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 20](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular20)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.rename-after-render"
  displayName="Rename `afterRender` to `afterEveryRender`"
  npmPackage="@openrewrite/recipes-angular"
/>
