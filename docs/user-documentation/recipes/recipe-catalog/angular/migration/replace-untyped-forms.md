---
sidebar_label: "Replace form classes with untyped variants"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace form classes with untyped variants

**org.openrewrite.angular.migration.replace-untyped-forms**

_Renames `FormControl`, `FormGroup`, `FormArray`, and `FormBuilder` to their `Untyped*` equivalents in imports and usages. Angular 14 introduced strictly typed forms, requiring existing untyped usages to migrate to the `Untyped*` aliases._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular14)


## Usage

<RunRecipe
  recipeName="org.openrewrite.angular.migration.replace-untyped-forms"
  displayName="Replace form classes with untyped variants"
  npmPackage="@openrewrite/recipes-angular"
/>
