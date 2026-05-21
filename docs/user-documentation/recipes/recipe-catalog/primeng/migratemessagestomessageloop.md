---
sidebar_label: "Migrate `&lt;p-messages&gt;` to `&lt;p-message&gt;` with `@for` loop"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `&lt;p-messages&gt;` to `&lt;p-message&gt;` with `@for` loop

**org.openrewrite.primeng.MigrateMessagesToMessageLoop**

_Rewrites `<p-messages [value]="expr">…</p-messages>` to `@for (msg of expr; track msg) { <p-message [severity]="msg.severity" [text]="msg.detail"></p-message> }`. The `Messages` component was removed in PrimeNG 18 in favor of looping over the new `Message` component. Each rewritten site is recorded in the `ManualMigrationSteps` data table for follow-up review._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.MigrateMessagesToMessageLoop"
  displayName="Migrate `&lt;p-messages&gt;` to `&lt;p-message&gt;` with `@for` loop"
  npmPackage="@openrewrite/recipes-angular"
/>
