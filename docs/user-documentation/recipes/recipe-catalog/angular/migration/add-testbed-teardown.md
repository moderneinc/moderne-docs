---
sidebar_label: "Add TestBed module teardown"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add TestBed module teardown

**org.openrewrite.angular.migration.add-testbed-teardown**

_Adds `{ teardown: { destroyAfterEach: true } }` as the third argument to `TestBed.initTestEnvironment()` calls. Angular 13 changed the default teardown behavior, and this ensures explicit opt-in for module teardown after each test._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular13)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.add-testbed-teardown"
  displayName="Add TestBed module teardown"
  npmPackage="@openrewrite/recipes-angular"
/>
