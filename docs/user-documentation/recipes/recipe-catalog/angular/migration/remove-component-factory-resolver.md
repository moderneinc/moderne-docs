---
sidebar_label: "Remove `ComponentFactoryResolver`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `ComponentFactoryResolver`

**org.openrewrite.angular.migration.remove-component-factory-resolver**

_Replaces `resolver.resolveComponentFactory(Component)` with just `Component` and removes the `ComponentFactoryResolver` import. Since Ivy, `ViewContainerRef.createComponent` accepts the component class directly. `ComponentFactoryResolver` was deprecated in Angular 13 and removed in Angular 16._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular13)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-component-factory-resolver"
  displayName="Remove `ComponentFactoryResolver`"
  npmPackage="@openrewrite/recipes-angular"
/>
