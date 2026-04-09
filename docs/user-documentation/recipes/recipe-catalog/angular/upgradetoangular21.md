---
sidebar_label: "Upgrade to Angular 21"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Angular 21

**org.openrewrite.angular.UpgradeToAngular21**

_Migrates Angular 20.x applications to Angular 21. This includes running the Angular 20 migration first, flagging Karma test runner usage for Vitest migration, deprecated NgClass, zone.js-dependent test helpers, and upgrading TypeScript to 5.9.x._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.UpgradeToAngular21"
  displayName="Upgrade to Angular 21"
  npmPackage="@openrewrite/recipes-angular"
/>
