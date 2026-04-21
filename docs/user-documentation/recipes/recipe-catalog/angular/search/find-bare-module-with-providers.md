---
sidebar_label: "Find `ModuleWithProviders` without generic type"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `ModuleWithProviders` without generic type

**org.openrewrite.angular.search.find-bare-module-with-providers**

_Finds imports of `ModuleWithProviders` from `@angular/core`. Starting in Angular 10, `ModuleWithProviders` requires a generic type parameter (e.g. `ModuleWithProviders<MyModule>`). Ensure all usages specify the module type._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-bare-module-with-providers"
  displayName="Find `ModuleWithProviders` without generic type"
  npmPackage="@openrewrite/recipes-angular"
/>
