---
sidebar_label: "Find removed Testability pending request methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find removed Testability pending request methods

**org.openrewrite.angular.search.find-testability-pending-request-usage**

_Finds imports of `Testability` from `@angular/core`, which had `increasePendingRequestCount`, `decreasePendingRequestCount`, and `getPendingRequestCount` removed in Angular 18. These are now tracked with zones._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-testability-pending-request-usage"
  displayName="Find removed Testability pending request methods"
  npmPackage="@openrewrite/recipes-angular"
/>
