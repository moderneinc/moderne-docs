---
sidebar_label: "Remove `relativeLinkResolution`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `relativeLinkResolution`

**org.openrewrite.angular.migration.remove-relative-link-resolution**

_Removes the `relativeLinkResolution` option from `RouterModule.forRoot()` calls. This option was deprecated in Angular 14 and removed in Angular 15._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 15](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-relative-link-resolution"
  displayName="Remove `relativeLinkResolution`"
  npmPackage="@openrewrite/recipes-angular"
/>
