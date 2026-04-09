---
sidebar_label: "Add generic type to `ModuleWithProviders`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add generic type to `ModuleWithProviders`

**org.openrewrite.angular.migration.add-module-with-providers-generic**

_Adds the required generic type parameter to bare `ModuleWithProviders` return types. Angular 10 requires `ModuleWithProviders<T>` where `T` is the NgModule type. The module type is inferred from the `ngModule` property in the return statement._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.add-module-with-providers-generic"
  displayName="Add generic type to `ModuleWithProviders`"
  npmPackage="@openrewrite/recipes-angular"
/>
