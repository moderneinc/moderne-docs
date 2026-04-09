---
sidebar_label: "Migrate `@Input()` to signal-based `input()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `@Input()` to signal-based `input()`

**org.openrewrite.angular.migration.migrate-input-to-signal**

_Converts `@Input()` decorated properties in Angular classes to signal-based `input()` declarations. For example, `@Input() name: string` becomes `name = input<string>()`, and `@Input({ required: true }) name!: string` becomes `name = input.required<string>()`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.migrate-input-to-signal"
  displayName="Migrate `@Input()` to signal-based `input()`"
  npmPackage="@openrewrite/recipes-angular"
/>
