---
sidebar_label: "Replace `HttpClientModule` with `provideHttpClient()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `HttpClientModule` with `provideHttpClient()`

**org.openrewrite.angular.migration.replace-http-client-module**

_Replaces deprecated `HttpClientModule`, `HttpClientJsonpModule`, `HttpClientXsrfModule`, and `HttpClientTestingModule` with their functional equivalents: `provideHttpClient()` with feature functions and `provideHttpClientTesting()`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-http-client-module"
  displayName="Replace `HttpClientModule` with `provideHttpClient()`"
  npmPackage="@openrewrite/recipes-angular"
/>
