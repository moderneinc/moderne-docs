---
sidebar_label: "Find zone.js usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find zone.js usage

**org.openrewrite.angular.search.find-zone-js-usage**

_Finds zone.js imports and NgZone references. Angular 20 supports zoneless change detection via `provideZonelessChangeDetection()`, making zone.js optional._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.search.find-zone-js-usage"
  displayName="Find zone.js usage"
  npmPackage="@openrewrite/recipes-angular"
/>
