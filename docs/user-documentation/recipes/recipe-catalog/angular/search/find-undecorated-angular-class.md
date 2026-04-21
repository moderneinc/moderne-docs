---
sidebar_label: "Find undecorated classes with Angular features"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find undecorated classes with Angular features

**org.openrewrite.angular.search.find-undecorated-angular-class**

_Finds classes that use Angular member decorators (`@Input`, `@Output`, `@ViewChild`, etc.) or implement lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.) but lack a class-level Angular decorator. Angular 9 with Ivy requires all classes using Angular features to have an explicit decorator._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-undecorated-angular-class"
  displayName="Find undecorated classes with Angular features"
  npmPackage="@openrewrite/recipes-angular"
/>
