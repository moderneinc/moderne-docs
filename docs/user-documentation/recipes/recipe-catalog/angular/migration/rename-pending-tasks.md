---
sidebar_label: "Rename `ExperimentalPendingTasks` to `PendingTasks`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `ExperimentalPendingTasks` to `PendingTasks`

**org.openrewrite.angular.migration.rename-pending-tasks**

_Renames `ExperimentalPendingTasks` to `PendingTasks` in imports and usages. `ExperimentalPendingTasks` was renamed in Angular 19._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.rename-pending-tasks"
  displayName="Rename `ExperimentalPendingTasks` to `PendingTasks`"
  npmPackage="@openrewrite/recipes-angular"
/>
