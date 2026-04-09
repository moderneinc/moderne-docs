---
sidebar_label: "Remove `moduleId`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `moduleId`

**org.openrewrite.angular.migration.remove-module-id**

_Removes the `moduleId` property from `@Component` and `@Directive` decorators. `moduleId` was deprecated in Angular 16 and removed in Angular 17 as it served no purpose since Ivy._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-module-id"
  displayName="Remove `moduleId`"
  npmPackage="@openrewrite/recipes-angular"
/>
