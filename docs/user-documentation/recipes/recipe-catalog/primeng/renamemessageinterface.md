---
sidebar_label: "Rename `Message` interface to `ToastMessageOptions`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename `Message` interface to `ToastMessageOptions`

**org.openrewrite.primeng.RenameMessageInterface**

_Renames the `Message` interface import from `primeng/api` to `ToastMessageOptions` and updates all identifier usages. The `Message` interface was renamed in PrimeNG 18 due to name collision with the `Message` component._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade PrimeNG components to 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradecomponentsto18)


## Usage

<RunRecipe
  recipeName="org.openrewrite.primeng.RenameMessageInterface"
  displayName="Rename `Message` interface to `ToastMessageOptions`"
  npmPackage="@openrewrite/recipes-angular"
/>
