---
sidebar_label: "Replace `validator`/`asyncValidator` with plural forms"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `validator`/`asyncValidator` with plural forms

**org.openrewrite.angular.migration.replace-validator-with-validators**

_Renames the deprecated singular `validator` and `asyncValidator` property names to `validators` and `asyncValidators` (plural). Angular 10 deprecated the singular forms in favor of `AbstractControlOptions`._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-validator-with-validators"
  displayName="Replace `validator`/`asyncValidator` with plural forms"
  npmPackage="@openrewrite/recipes-angular"
/>
