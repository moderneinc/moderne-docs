---
sidebar_label: "Enable AOT compilation in `angular.json`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Enable AOT compilation in `angular.json`

**org.openrewrite.angular.migration.enable-aot-build**

_Adds `"aot": true` to build options in `angular.json`. Angular 9 made AOT compilation the default, and projects upgrading from Angular 8 should enable it explicitly._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.enable-aot-build"
  displayName="Enable AOT compilation in `angular.json`"
  npmPackage="@openrewrite/recipes-angular"
/>
