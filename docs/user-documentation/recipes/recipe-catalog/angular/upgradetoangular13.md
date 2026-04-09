---
sidebar_label: "Upgrade to Angular 13"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 13

**org.openrewrite.angular.UpgradeToAngular13**

_Migrates Angular 12.x applications to Angular 13. This includes updating `tsconfig.json` target to `es2017`, removing IE11 polyfills, removing `defaultProject` from `angular.json`, adding TestBed module teardown, simplifying `ComponentFactoryResolver` usage, and upgrading Angular, TypeScript, and related dependency versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular14)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular13"
  displayName="Upgrade to Angular 13"
  npmPackage="@openrewrite/recipes-angular"
/>
