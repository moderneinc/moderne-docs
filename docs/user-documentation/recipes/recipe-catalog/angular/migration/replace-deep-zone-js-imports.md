---
sidebar_label: "Replace deep `zone.js` imports"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace deep `zone.js` imports

**org.openrewrite.angular.migration.replace-deep-zone-js-imports**

_Replaces legacy deep imports from `zone.js` such as `zone.js/dist/zone` or `zone.js/bundles/zone-testing.js` with the standard `zone.js` or `zone.js/testing` imports, in both TypeScript files and `angular.json` polyfills. Deep imports are no longer allowed in Angular 17._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular17)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-deep-zone-js-imports"
  displayName="Replace deep `zone.js` imports"
  npmPackage="@openrewrite/recipes-angular"
/>
