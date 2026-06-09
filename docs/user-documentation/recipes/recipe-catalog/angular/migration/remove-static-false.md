---
title: "Remove `static: false` from view queries"
sidebar_label: "Remove `static: false` from view queries"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove `static: false` from view queries

**org.openrewrite.angular.migration.remove-static-false**

_Removes `static: false` from `@ViewChild`, `@ContentChild`, `@ViewChildren`, and `@ContentChildren` decorators. In Angular 9 with Ivy, `static: false` became the default behavior, making the explicit option unnecessary._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.remove-static-false"
  displayName="Remove `static: false` from view queries"
  npmPackage="@openrewrite/recipes-angular"
/>
