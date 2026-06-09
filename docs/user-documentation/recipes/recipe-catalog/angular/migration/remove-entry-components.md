---
title: "Remove `entryComponents`"
sidebar_label: "Remove `entryComponents`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `entryComponents`

**org.openrewrite.angular.migration.remove-entry-components**

_Removes the `entryComponents` property from `@NgModule` and `@Component` decorators, and removes the `ANALYZE_FOR_ENTRY_COMPONENTS` import. These were removed in Angular 16 as they served no purpose since Ivy._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-entry-components"
  displayName="Remove `entryComponents`"
  npmPackage="@openrewrite/recipes-angular"
/>
