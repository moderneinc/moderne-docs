---
sidebar_label: "Find Karma test runner usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Karma test runner usage

**org.openrewrite.angular.search.find-karma-usage**

_Finds Karma test runner configuration in package.json dependencies and angular.json test builder. Angular 21 replaces Karma with Vitest as the default test runner._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-karma-usage"
  displayName="Find Karma test runner usage"
  npmPackage="@openrewrite/recipes-angular"
/>
