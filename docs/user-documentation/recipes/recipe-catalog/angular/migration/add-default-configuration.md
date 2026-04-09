---
sidebar_label: "Add `defaultConfiguration` to build targets"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `defaultConfiguration` to build targets

**org.openrewrite.angular.migration.add-default-configuration**

_Adds `"defaultConfiguration": "production"` to build architect targets in `angular.json`. Angular 12 changed `ng build` to produce production bundles by default._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular12)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.add-default-configuration"
  displayName="Add `defaultConfiguration` to build targets"
  npmPackage="@openrewrite/recipes-angular"
/>
