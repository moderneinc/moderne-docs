---
sidebar_label: "Remove `extractCss` from `angular.json`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `extractCss` from `angular.json`

**org.openrewrite.angular.migration.remove-extract-css**

_Removes the deprecated `extractCss` build option from `angular.json`. In Angular 11, CSS extraction became the default behavior for production builds and the option was deprecated._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-extract-css"
  displayName="Remove `extractCss` from `angular.json`"
  npmPackage="@openrewrite/recipes-angular"
/>
