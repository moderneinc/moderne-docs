---
sidebar_label: "Remove redundant `standalone: true`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove redundant `standalone: true`

**org.openrewrite.angular.migration.remove-standalone-true**

_Removes the `standalone: true` property from Angular component, directive, and pipe decorators since standalone is the default in Angular 19+._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 20](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular20)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-standalone-true"
  displayName="Remove redundant `standalone: true`"
  npmPackage="@openrewrite/recipes-angular"
/>
