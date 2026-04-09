---
sidebar_label: "Find `withNoDomReuse` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `withNoDomReuse` usage

**org.openrewrite.angular.search.find-with-no-dom-reuse-usage**

_Finds usages of the removed `withNoDomReuse` function from `@angular/platform-browser`. This function was removed in Angular 17. To disable hydration, remove the `provideClientHydration()` call from your providers or use the `ngSkipHydration` attribute on specific components._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular17)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-with-no-dom-reuse-usage"
  displayName="Find `withNoDomReuse` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
