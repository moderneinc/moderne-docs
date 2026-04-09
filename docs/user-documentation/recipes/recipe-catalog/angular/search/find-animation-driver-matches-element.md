---
sidebar_label: "Find `AnimationDriver.matchesElement` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `AnimationDriver.matchesElement` usage

**org.openrewrite.angular.search.find-animation-driver-matches-element**

_Finds imports of `AnimationDriver` from `@angular/animations/browser`, which had its `matchesElement` method removed in Angular 18._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-animation-driver-matches-element"
  displayName="Find `AnimationDriver.matchesElement` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
