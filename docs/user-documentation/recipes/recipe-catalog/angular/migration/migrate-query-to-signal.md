---
sidebar_label: "Migrate query decorators to signal-based functions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate query decorators to signal-based functions

**org.openrewrite.angular.migration.migrate-query-to-signal**

_Converts `@ViewChild()`, `@ViewChildren()`, `@ContentChild()`, and `@ContentChildren()` decorated properties to signal-based query functions. For example, `@ViewChild('ref') el: ElementRef` becomes `el = viewChild<ElementRef>('ref')`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.migrate-query-to-signal"
  displayName="Migrate query decorators to signal-based functions"
  npmPackage="@openrewrite/recipes-angular"
/>
