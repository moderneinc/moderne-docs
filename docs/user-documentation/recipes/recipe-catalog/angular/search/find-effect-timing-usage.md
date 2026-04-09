---
sidebar_label: "Find `effect()` usage affected by Angular 19 timing changes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `effect()` usage affected by Angular 19 timing changes

**org.openrewrite.angular.search.find-effect-timing-usage**

_Finds `effect()` calls from `@angular/core`. In Angular 19, effects triggered outside change detection now run as part of the change detection process instead of as a microtask, and effects triggered during change detection run earlier, before the component's template._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-effect-timing-usage"
  displayName="Find `effect()` usage affected by Angular 19 timing changes"
  npmPackage="@openrewrite/recipes-angular"
/>
