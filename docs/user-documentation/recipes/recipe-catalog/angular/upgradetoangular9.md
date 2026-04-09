---
sidebar_label: "Upgrade to Angular 9"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 9

**org.openrewrite.angular.UpgradeToAngular9**

_Migrates Angular 8.x applications to Angular 9. This includes removing the now-default `static: false` from view query decorators, replacing `TestBed.get()` with `TestBed.inject()`, adding generic type parameters to `ModuleWithProviders`, enabling AOT compilation in `angular.json`, updating `tsconfig.json` module settings for Ivy, flagging removed View Engine APIs (`Renderer`, `RenderComponentType`, `RootRenderer`), and upgrading Angular, TypeScript, and related dependency versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular9"
  displayName="Upgrade to Angular 9"
  npmPackage="@openrewrite/recipes-angular"
/>
