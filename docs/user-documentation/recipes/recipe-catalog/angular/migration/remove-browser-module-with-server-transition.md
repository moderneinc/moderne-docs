---
sidebar_label: "Remove `BrowserModule.withServerTransition`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `BrowserModule.withServerTransition`

**org.openrewrite.angular.migration.remove-browser-module-with-server-transition**

_Replaces `BrowserModule.withServerTransition({ appId: '...' })` with `BrowserModule` and adds `{ provide: APP_ID, useValue: '...' }` to the NgModule providers. The `withServerTransition` method was removed in Angular 19._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-browser-module-with-server-transition"
  displayName="Remove `BrowserModule.withServerTransition`"
  npmPackage="@openrewrite/recipes-angular"
/>
