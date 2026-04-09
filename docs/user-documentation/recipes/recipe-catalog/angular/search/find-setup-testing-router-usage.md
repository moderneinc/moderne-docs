---
sidebar_label: "Find `setupTestingRouter` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `setupTestingRouter` usage

**org.openrewrite.angular.search.find-setup-testing-router-usage**

_Finds usages of the removed `setupTestingRouter` function from `@angular/router/testing`. This function was removed in Angular 17. Use `RouterModule.forRoot` or `provideRouter` to set up the Router for tests instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular17)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-setup-testing-router-usage"
  displayName="Find `setupTestingRouter` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
