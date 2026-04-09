---
sidebar_label: "Find `DATE_PIPE_DEFAULT_TIMEZONE` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `DATE_PIPE_DEFAULT_TIMEZONE` usage

**org.openrewrite.angular.search.find-date-pipe-default-timezone-usage**

_Finds usages of `DATE_PIPE_DEFAULT_TIMEZONE` which was deprecated in Angular 15. Use `DATE_PIPE_DEFAULT_OPTIONS` with a `{timezone: '...'}` object value instead._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 15](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-date-pipe-default-timezone-usage"
  displayName="Find `DATE_PIPE_DEFAULT_TIMEZONE` usage"
  npmPackage="@openrewrite/recipes-angular"
/>
