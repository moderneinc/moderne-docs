---
sidebar_label: "Find removed `@angular/http` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find removed `@angular/http` usage

**org.openrewrite.angular.search.find-angular-http-usage**

_Finds imports from the `@angular/http` module, which was deprecated in Angular 5 and removed in Angular 8. Use `@angular/common/http` (`HttpClient`, `HttpClientModule`) instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-angular-http-usage"
  displayName="Find removed `@angular/http` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
