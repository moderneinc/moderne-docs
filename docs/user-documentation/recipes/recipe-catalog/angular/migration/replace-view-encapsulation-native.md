---
sidebar_label: "Replace `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`

**org.openrewrite.angular.migration.replace-view-encapsulation-native**

_Replaces `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`. `ViewEncapsulation.Native` was deprecated in Angular 6 and removed in Angular 11._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-view-encapsulation-native"
  displayName="Replace `ViewEncapsulation.Native` with `ViewEncapsulation.ShadowDom`"
  npmPackage="@openrewrite/recipes-angular"
/>
