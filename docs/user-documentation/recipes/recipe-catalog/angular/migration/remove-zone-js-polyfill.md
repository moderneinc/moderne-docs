---
sidebar_label: "Remove zone.js polyfill from angular.json"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove zone.js polyfill from angular.json

**org.openrewrite.angular.migration.remove-zone-js-polyfill**

_Removes zone.js entries from the `polyfills` array in `angular.json`. Angular 20 supports zoneless change detection via `provideZonelessChangeDetection()`, making the zone.js polyfill unnecessary._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 20](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular20)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-zone-js-polyfill"
  displayName="Remove zone.js polyfill from angular.json"
  npmPackage="@openrewrite/recipes-angular"
/>
