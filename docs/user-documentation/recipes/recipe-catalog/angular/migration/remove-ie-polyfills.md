---
sidebar_label: "Remove IE11 polyfills"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove IE11 polyfills

**org.openrewrite.angular.migration.remove-ie-polyfills**

_Removes IE11-specific polyfill imports (`core-js`, `classlist.js`, `web-animations-js`) from `polyfills.ts` and `angular.json`. Angular 13 dropped IE11 support, making these polyfills unnecessary._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular13)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-ie-polyfills"
  displayName="Remove IE11 polyfills"
  npmPackage="@openrewrite/recipes-angular"
/>
