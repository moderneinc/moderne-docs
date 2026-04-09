---
sidebar_label: "Replace `RouterLinkWithHref` with `RouterLink`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `RouterLinkWithHref` with `RouterLink`

**org.openrewrite.angular.migration.replace-router-link-with-href**

_Replaces `RouterLinkWithHref` with `RouterLink` in imports and usages. `RouterLinkWithHref` was merged into `RouterLink` in Angular 16._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-router-link-with-href"
  displayName="Replace `RouterLinkWithHref` with `RouterLink`"
  npmPackage="@openrewrite/recipes-angular"
/>
