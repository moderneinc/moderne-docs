---
sidebar_label: "Migrate constructor injection to `inject()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate constructor injection to `inject()`

**org.openrewrite.angular.migration.migrate-constructor-to-inject**

_Converts constructor parameter properties in Angular classes to field declarations using the `inject()` function. For example, `constructor(private svc: MyService) {}` becomes `private svc = inject(MyService);`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.migrate-constructor-to-inject"
  displayName="Migrate constructor injection to `inject()`"
  npmPackage="@openrewrite/recipes-angular"
/>
