---
sidebar_label: "Migrate `@Output()` to signal-based `output()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `@Output()` to signal-based `output()`

**org.openrewrite.angular.migration.migrate-output-to-signal**

_Converts `@Output()` decorated properties using `EventEmitter` in Angular classes to signal-based `output()` declarations. For example, `@Output() clicked = new EventEmitter<void>()` becomes `clicked = output<void>()`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.migrate-output-to-signal"
  displayName="Migrate `@Output()` to signal-based `output()`"
  npmPackage="@openrewrite/recipes-angular"
/>
