---
sidebar_label: "Make standalone flag explicit"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Make standalone flag explicit

**org.openrewrite.angular.migration.explicit-standalone-flag**

_Adds `standalone: false` to non-standalone Angular components, directives, and pipes, and removes redundant `standalone: true` since it became the default in Angular 19._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.explicit-standalone-flag"
  displayName="Make standalone flag explicit"
  npmPackage="@openrewrite/recipes-angular"
/>
