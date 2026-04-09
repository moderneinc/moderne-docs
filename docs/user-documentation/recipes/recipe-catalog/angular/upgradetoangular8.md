---
sidebar_label: "Upgrade to Angular 8"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 8

**org.openrewrite.angular.UpgradeToAngular8**

_Migrates Angular 7.x applications to Angular 8. This includes adding the now-required `static: false` to `@ViewChild` and `@ContentChild` decorators, moving the `DOCUMENT` import from `@angular/platform-browser` to `@angular/common`, removing `rxjs-compat` and flagging any remaining RxJS 5-style imports, flagging removed `@angular/http` imports, converting deprecated string-based `loadChildren` to dynamic imports, and upgrading Angular, TypeScript, and related dependency versions._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular8"
  displayName="Upgrade to Angular 8"
  npmPackage="@openrewrite/recipes-angular"
/>
