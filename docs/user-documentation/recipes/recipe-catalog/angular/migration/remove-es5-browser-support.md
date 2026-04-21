---
sidebar_label: "Remove `es5BrowserSupport` from `angular.json`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `es5BrowserSupport` from `angular.json`

**org.openrewrite.angular.migration.remove-es5-browser-support**

_Removes the deprecated `es5BrowserSupport` option from `angular.json`. `es5BrowserSupport` was deprecated in Angular 7.3 and removed in Angular 10. Differential loading is now handled automatically by the Angular CLI based on the project's browserslist configuration._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-es5-browser-support"
  displayName="Remove `es5BrowserSupport` from `angular.json`"
  npmPackage="@openrewrite/recipes-angular"
/>
